import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(SCRIPT_DIR, '..');
const DIST_ROOT = path.join(SITE_ROOT, 'dist');
const DOCS_ROOT = path.join(SITE_ROOT, 'src', 'content', 'docs');
const GENERATED_ROOT = path.join(DOCS_ROOT, 'generated');
const PUBLIC_ROOT = path.join(SITE_ROOT, 'public');
const REPORT_ROOT = path.join(SITE_ROOT, '.cache', 'zimingyeh-protocol');
const PAGEFIND_ROOT = path.join(DIST_ROOT, 'pagefind');
const BASE_PATH = '/zimingyeh_protocol/';
const SEARCH_TERMS = ['PBS', '96孔板', 'RT-qPCR', 'Gibco', 'ELISA'];

const sensitivePatterns = [
  { name: 'private path segment', pattern: /(^|[\\/])private([\\/]|$)/i },
  { name: '.obsidian', pattern: /\.obsidian/i },
  { name: '.DS_Store', pattern: /\.DS_Store/i },
  { name: 'macOS user path', pattern: /(?:file:\/\/)?\/Users\/[^\s"'<>)]*/i },
  { name: 'macOS temp path', pattern: /\/(?:private\/)?var\/folders\/[^\s"'<>)]*/i },
  { name: 'Windows user path', pattern: /[A-Z]:\\Users\\[^\s"'<>)]*/i },
  { name: 'WeChat temp path', pattern: /(?:com\.tencent\.xinWeChat|WeChat\s+Files|Weixin|wxid_|微信)/i },
  { name: 'z-library', pattern: /z[-_ ]?library/i },
  { name: 'origin.txt', pattern: /origin\.txt/i }
];

const ignoredDirectoryNames = new Set(['node_modules', '.astro']);

function toPosix(value) {
  return value.split(path.sep).join('/');
}

function relativeSitePath(absPath) {
  return toPosix(path.relative(SITE_ROOT, absPath));
}

function assertExists(absPath, label) {
  if (!fs.existsSync(absPath)) {
    throw new Error(`${label} not found: ${relativeSitePath(absPath)}`);
  }
}

function readJson(absPath) {
  assertExists(absPath, 'JSON file');
  return JSON.parse(fs.readFileSync(absPath, 'utf8'));
}

function readReport(name) {
  return readJson(path.join(REPORT_ROOT, `${name}.json`));
}

function walkFiles(root, options = {}) {
  if (!fs.existsSync(root)) return [];
  const files = [];
  const skipDirs = options.skipDirs ?? ignoredDirectoryNames;
  const visit = (current) => {
    const stat = fs.statSync(current);
    if (stat.isDirectory()) {
      if (current !== root && skipDirs.has(path.basename(current))) return;
      for (const entry of fs.readdirSync(current)) visit(path.join(current, entry));
      return;
    }
    if (stat.isFile()) files.push(current);
  };
  visit(root);
  return files.sort((a, b) => relativeSitePath(a).localeCompare(relativeSitePath(b), 'en'));
}

function decodeHtmlAttribute(value) {
  return String(value)
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, num) => String.fromCodePoint(Number.parseInt(num, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function distUrlForHtml(file) {
  const rel = relativeSitePath(file).replace(/^dist\//, '');
  if (rel === 'index.html') return BASE_PATH;
  return `${BASE_PATH}${rel.replace(/index\.html$/, '')}`;
}

function resolveDistTarget(pathname) {
  let clean = pathname;
  if (clean === BASE_PATH.slice(0, -1)) clean = BASE_PATH;
  if (!clean.startsWith(BASE_PATH)) {
    return { ok: false, reason: 'outside-base-path' };
  }

  let rel = clean.slice(BASE_PATH.length);
  try {
    rel = decodeURIComponent(rel);
  } catch {
    // Keep the encoded path if it cannot be decoded.
  }

  const direct = path.join(DIST_ROOT, rel);
  if (clean.endsWith('/')) {
    return { ok: fs.existsSync(path.join(direct, 'index.html')), reason: 'missing-index' };
  }
  if (fs.existsSync(direct)) return { ok: true };
  if (fs.existsSync(path.join(direct, 'index.html'))) return { ok: true };
  if (fs.existsSync(`${direct}.html`)) return { ok: true };
  return { ok: false, reason: 'missing-file' };
}

function scanPrivacy() {
  const roots = [
    DOCS_ROOT,
    PUBLIC_ROOT,
    REPORT_ROOT,
    DIST_ROOT
  ];
  const hits = [];

  for (const root of roots) {
    assertExists(root, 'privacy scan root');
    for (const file of walkFiles(root)) {
      const rel = relativeSitePath(file);
      for (const item of sensitivePatterns) {
        if (item.pattern.test(rel)) {
          hits.push({ file: rel, line: 0, pattern: item.name, surface: 'path' });
        }
      }

      const text = fs.readFileSync(file).toString('utf8');
      const lines = text.split(/\r?\n/);
      for (const [index, line] of lines.entries()) {
        for (const item of sensitivePatterns) {
          if (item.pattern.test(line)) {
            hits.push({ file: rel, line: index + 1, pattern: item.name, surface: 'content' });
          }
        }
      }
    }
  }

  const result = {
    roots: roots.map(relativeSitePath),
    scannedFiles: roots.flatMap((root) => walkFiles(root)).length,
    sensitiveHits: hits.length,
    hits: hits.slice(0, 50)
  };

  console.log(JSON.stringify({ privacy: result }, null, 2));
  if (hits.length) throw new Error(`privacy audit failed with ${hits.length} sensitive hit(s)`);
  return result;
}

function scanLinks() {
  assertExists(DIST_ROOT, 'dist');
  const htmlFiles = walkFiles(DIST_ROOT).filter((file) => file.endsWith('.html'));
  const missing = [];
  const attrRe = /\b(?:href|src)=["']([^"']+)["']/gi;

  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = attrRe.exec(text))) {
      const target = decodeHtmlAttribute(match[1]);
      if (!target || target.startsWith('#')) continue;
      if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(target)) continue;

      const currentUrl = `https://example.test${distUrlForHtml(file)}`;
      const url = new URL(target, currentUrl);
      if (url.origin !== 'https://example.test') continue;

      const check = resolveDistTarget(url.pathname);
      if (!check.ok) {
        missing.push({
          file: relativeSitePath(file),
          target,
          resolved: url.pathname,
          reason: check.reason
        });
      }
    }
  }

  const result = {
    htmlFiles: htmlFiles.length,
    localHrefSrcMissing: missing.length,
    missing: missing.slice(0, 50)
  };
  console.log(JSON.stringify({ links: result }, null, 2));
  if (missing.length) throw new Error(`links audit failed with ${missing.length} missing href/src target(s)`);
  return result;
}

function auditImages() {
  const summary = readReport('summary');
  const brokenImages = readReport('broken-images');
  const hotlinks = readReport('hotlinks');
  const strictHotlinks = process.env.STRICT_HOTLINKS === '1';

  if (brokenImages.length !== summary.brokenImages) {
    throw new Error(`broken-images report mismatch: summary=${summary.brokenImages}, file=${brokenImages.length}`);
  }
  if (hotlinks.length !== summary.hotlinks) {
    throw new Error(`hotlink report mismatch: summary=${summary.hotlinks}, file=${hotlinks.length}`);
  }

  const result = {
    brokenImages: brokenImages.length,
    hotlinkCount: hotlinks.length,
    hotlinkWarning: hotlinks.length > 0,
    strictHotlinks,
    hotlinkPolicy: 'warning-only by default; strict mode fails on any hotlinked image',
    hotlinks
  };
  console.log(JSON.stringify({ images: result }, null, 2));
  if (brokenImages.length) throw new Error(`images audit failed with ${brokenImages.length} broken image(s)`);
  if (strictHotlinks && hotlinks.length) {
    throw new Error(`images audit failed in strict mode with ${hotlinks.length} hotlinked image(s)`);
  }
  return result;
}

function frontmatterBlock(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? match[1] : '';
}

function distPathForUrlPath(urlPath) {
  const trimmed = urlPath.replace(/^\/+/, '').replace(/\/+$/, '');
  let decoded = trimmed;
  try {
    decoded = decodeURIComponent(trimmed);
  } catch {
    // Keep the encoded path if it cannot be decoded.
  }
  return path.join(DIST_ROOT, decoded, 'index.html');
}

function auditEmptyPages() {
  const summary = readReport('summary');
  const emptyPages = readReport('empty-pages');
  const routeMap = readReport('route-map');
  const routeMapPlaceholders = routeMap.filter((item) => item.placeholder);
  const missingOutput = [];
  const missingFlags = [];
  const indexedPlaceholders = [];

  if (emptyPages.length !== summary.placeholderPages) {
    throw new Error(`empty-pages report mismatch: summary=${summary.placeholderPages}, file=${emptyPages.length}`);
  }
  if (routeMapPlaceholders.length !== summary.placeholderPages) {
    throw new Error(`route-map placeholder mismatch: summary=${summary.placeholderPages}, route-map=${routeMapPlaceholders.length}`);
  }

  for (const item of emptyPages) {
    const outputAbs = path.join(SITE_ROOT, item.output);
    if (!fs.existsSync(outputAbs)) {
      missingOutput.push(item.output);
      continue;
    }

    const markdown = fs.readFileSync(outputAbs, 'utf8');
    const frontmatter = frontmatterBlock(markdown);
    const hasPagefindFalse = /^pagefind:\s*false\s*$/m.test(frontmatter);
    const hasSidebarHidden = /^sidebar:\s*$(?:\r?\n\s+.*)*?\r?\n\s+hidden:\s*true\s*$/m.test(frontmatter);
    if (!hasPagefindFalse || !hasSidebarHidden) {
      missingFlags.push({
        output: item.output,
        pagefindFalse: hasPagefindFalse,
        sidebarHidden: hasSidebarHidden
      });
    }

    const htmlAbs = distPathForUrlPath(item.urlPath);
    if (fs.existsSync(htmlAbs) && fs.readFileSync(htmlAbs, 'utf8').includes('data-pagefind-body')) {
      indexedPlaceholders.push(relativeSitePath(htmlAbs));
    }
  }

  const result = {
    placeholderPages: emptyPages.length,
    summaryPlaceholderPages: summary.placeholderPages,
    routeMapPlaceholderPages: routeMapPlaceholders.length,
    missingGeneratedOutput: missingOutput.length,
    pagesMissingFlags: missingFlags.length,
    placeholderHtmlWithPagefindBody: indexedPlaceholders.length,
    examples: {
      missingOutput: missingOutput.slice(0, 10),
      missingFlags: missingFlags.slice(0, 10),
      indexedPlaceholders: indexedPlaceholders.slice(0, 10)
    }
  };

  console.log(JSON.stringify({ empty: result }, null, 2));
  if (missingOutput.length || missingFlags.length || indexedPlaceholders.length) {
    throw new Error('empty page audit failed');
  }
  return result;
}

function countAuthoredDocs() {
  return walkFiles(DOCS_ROOT)
    .filter((file) => !file.startsWith(GENERATED_ROOT))
    .filter((file) => /\.(md|mdx)$/i.test(file)).length;
}

function expectedPagefindCount() {
  const routeMap = readReport('route-map');
  const entryPages = readReport('entry-pages');
  const authoredDocs = countAuthoredDocs();
  const readyGeneratedPages = routeMap.filter((item) => !item.placeholder).length;
  return {
    expected: readyGeneratedPages + entryPages.length + authoredDocs,
    readyGeneratedPages,
    entryPages: entryPages.length,
    authoredDocs
  };
}

function htmlBodyContainsTerm(term) {
  const htmlFiles = walkFiles(DIST_ROOT).filter((file) => file.endsWith('.html'));
  return htmlFiles
    .filter((file) => {
      const html = fs.readFileSync(file, 'utf8');
      return html.includes('data-pagefind-body') && html.toLowerCase().includes(term.toLowerCase());
    })
    .map(relativeSitePath);
}

function normalizeSearchUrl(value) {
  if (!value) return null;
  const normalized = String(value);
  const marker = '/dist/';
  const markerIndex = normalized.indexOf(marker);
  if (markerIndex >= 0) {
    return `${BASE_PATH}${normalized.slice(markerIndex + marker.length)}`.replace(/index\.html$/, '');
  }
  if (normalized.startsWith('/')) return normalized;
  return `/${normalized}`.replace(/\/+/g, '/');
}

async function runDirectPagefindQueries(language) {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (input, init) => {
    const url = typeof input === 'string' ? input : input.url;
    if (!url.startsWith('file://')) {
      if (!originalFetch) throw new Error(`No fetch available for ${url}`);
      return originalFetch(input, init);
    }
    return new Response(fs.readFileSync(fileURLToPath(url)));
  };

  try {
    const pagefindBundle = pathToFileURL(path.join(PAGEFIND_ROOT, 'pagefind.js')).href;
    const pagefind = await import(`${pagefindBundle}?audit=${Date.now()}`);
    const instance = pagefind.createInstance({
      basePath: pathToFileURL(`${PAGEFIND_ROOT}/`).href,
      language,
      noWorker: true
    });
    await instance.init();
    const queryResults = {};
    for (const term of SEARCH_TERMS) {
      const result = await instance.search(term);
      const first = result.results[0] ? await result.results[0].data() : null;
      queryResults[term] = {
        results: result.results.length,
        unfilteredResultCount: result.unfilteredResultCount,
        firstUrl: normalizeSearchUrl(first?.url),
        firstTitle: first?.meta?.title ?? null
      };
    }
    await instance.destroy();
    return { mode: 'pagefind-node-file-fetch', queryResults };
  } finally {
    globalThis.fetch = originalFetch;
  }
}

async function auditSearch() {
  assertExists(PAGEFIND_ROOT, 'Pagefind output');
  const entryPath = path.join(PAGEFIND_ROOT, 'pagefind-entry.json');
  const entry = readJson(entryPath);
  const languages = Object.keys(entry.languages ?? {});
  if (!languages.length) throw new Error('Pagefind entry has no languages');

  const language = languages[0];
  const languageEntry = entry.languages[language];
  const metaPath = path.join(PAGEFIND_ROOT, `pagefind.${languageEntry.hash}.pf_meta`);
  const fragmentFiles = walkFiles(path.join(PAGEFIND_ROOT, 'fragment')).filter((file) => file.endsWith('.pf_fragment'));
  const indexFiles = walkFiles(path.join(PAGEFIND_ROOT, 'index')).filter((file) => file.endsWith('.pf_index'));
  const expected = expectedPagefindCount();

  assertExists(path.join(PAGEFIND_ROOT, 'pagefind.js'), 'Pagefind JS');
  assertExists(metaPath, 'Pagefind metadata');
  if (languageEntry.page_count !== expected.expected) {
    throw new Error(`Pagefind page_count mismatch: expected=${expected.expected}, actual=${languageEntry.page_count}`);
  }
  if (!fragmentFiles.length || !indexFiles.length) {
    throw new Error(`Pagefind index is empty: fragments=${fragmentFiles.length}, indexes=${indexFiles.length}`);
  }

  let queryMode = 'content-body-proxy';
  let queryResults = {};
  let directQueryError = null;
  try {
    const direct = await runDirectPagefindQueries(language);
    queryMode = direct.mode;
    queryResults = direct.queryResults;
  } catch (error) {
    directQueryError = error.message;
    for (const term of SEARCH_TERMS) {
      const matches = htmlBodyContainsTerm(term);
      queryResults[term] = {
        results: matches.length,
        firstUrl: matches[0]?.replace(/^dist/, '') ?? null
      };
    }
  }

  const emptyTerms = Object.entries(queryResults).filter(([, value]) => value.results === 0);
  const result = {
    pagefindEntry: relativeSitePath(entryPath),
    language,
    pageCount: languageEntry.page_count,
    expectedPageCount: expected.expected,
    expectedBreakdown: expected,
    fragmentFiles: fragmentFiles.length,
    indexFiles: indexFiles.length,
    queryMode,
    directQueryError,
    queryResults
  };

  console.log(JSON.stringify({ search: result }, null, 2));
  if (emptyTerms.length) {
    throw new Error(`search audit failed: no results for ${emptyTerms.map(([term]) => term).join(', ')}`);
  }
  return result;
}

function runCommand(command, args) {
  const result = spawnSync(command, args, {
    cwd: SITE_ROOT,
    stdio: 'inherit',
    env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' }
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed with exit code ${result.status}`);
  }
}

async function auditBuild() {
  runCommand('npm', ['run', 'sync:content']);
  runCommand('npm', ['run', 'build']);
  const results = {
    privacy: scanPrivacy(),
    links: scanLinks(),
    images: auditImages(),
    empty: auditEmptyPages(),
    search: await auditSearch()
  };
  console.log(JSON.stringify({ buildAudit: 'passed', results }, null, 2));
}

async function main() {
  const command = process.argv[2] ?? 'help';
  if (command === 'privacy') return scanPrivacy();
  if (command === 'links') return scanLinks();
  if (command === 'images') return auditImages();
  if (command === 'empty') return auditEmptyPages();
  if (command === 'search') return auditSearch();
  if (command === 'build') return auditBuild();

  console.log('Usage: node scripts/audit-site.mjs <privacy|links|images|empty|search|build>');
  process.exitCode = command === 'help' ? 0 : 1;
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
