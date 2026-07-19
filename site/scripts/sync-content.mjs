import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(SCRIPT_DIR, '..');
const SOURCE_ROOT = path.resolve(SITE_ROOT, '..', 'Zimingyeh_protocol');
const SOURCE_ASSET_ROOT = path.join(SOURCE_ROOT, 'z_asset');
const GENERATED_ROOT = path.join(SITE_ROOT, 'src', 'content', 'docs', 'generated');
const PUBLIC_ASSET_ROOT = path.join(SITE_ROOT, 'public', 'z_asset');
const REPORT_ROOT = path.join(SITE_ROOT, '.cache', 'zimingyeh-protocol');

const BLOCKED_NAMES = new Set(['.obsidian', '.DS_Store', 'private']);
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.avif']);
const PLACEHOLDER_BYTE_LIMIT = 200;
const ENTRY_CATEGORIES = [
  {
    key: 'protocols',
    slug: 'protocols',
    title: '实验 Protocol',
    description: 'Zimingyeh Protocol public experiment workflow index.',
    prefixes: ['protocols/'],
    intro: '按实验流程主题整理的公开 protocol 条目，优先呈现已有正文的页面。'
  },
  {
    key: 'materials',
    slug: 'materials',
    title: '试剂耗材工具',
    description: 'Zimingyeh Protocol reagent, consumable, and lab tool index.',
    prefixes: ['materials/'],
    intro: '按试剂、耗材、工具和选择逻辑整理的公开条目，适合作为采购和实验准备前的索引。'
  },
  {
    key: 'safety',
    slug: 'safety',
    title: '实验室安全',
    description: 'Zimingyeh Protocol laboratory safety index.',
    prefixes: ['safety/'],
    intro: '集中整理实验室安全相关公开条目，阅读时仍应以所在机构 SOP 和 EHS 要求为准。'
  },
  {
    key: 'extras',
    slug: 'extras',
    title: '番外知识',
    description: 'Zimingyeh Protocol supplementary knowledge index.',
    prefixes: ['extras/'],
    intro: '收纳试剂厂商、生命科学、医药公司和补充概念等延展知识。'
  }
];
const ALL_INDEX_SLUG = 'all-index';
const ALL_INDEX_GROUPS = [
  { key: 'guide', title: '使用说明', prefixes: ['guide/'] },
  ...ENTRY_CATEGORIES
];
const EXTRAS_SUBGROUPS = [
  { title: '试剂厂商', prefixes: ['extras/vendors/'] },
  { title: '生命科学', prefixes: ['extras/life-science/'] },
  { title: '医药公司', prefixes: ['extras/pharma/'] },
  { title: '补充知识', prefixes: ['extras/concepts/'] }
];

const warnings = [];
const hotlinks = [];
const brokenLinks = [];
const brokenImages = [];

function toPosix(value) {
  return value.split(path.sep).join('/');
}

function isInside(child, parent) {
  const relative = path.relative(parent, child);
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

function assertInside(child, parent, label) {
  if (!isInside(child, parent)) {
    throw new Error(`${label} resolved outside allowed root: ${child}`);
  }
}

function ensureSourceRoot() {
  if (!fs.existsSync(SOURCE_ROOT) || !fs.statSync(SOURCE_ROOT).isDirectory()) {
    throw new Error(`Public source directory not found: ${SOURCE_ROOT}`);
  }
  assertInside(SOURCE_ROOT, path.resolve(SITE_ROOT, '..'), 'SOURCE_ROOT');
}

function isBlockedPath(absPath) {
  return toPosix(path.relative(SOURCE_ROOT, absPath))
    .split('/')
    .some((segment) => BLOCKED_NAMES.has(segment));
}

function walkPublicFiles(dir, predicate) {
  assertInside(dir, SOURCE_ROOT, 'walk root');
  const output = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (BLOCKED_NAMES.has(entry.name)) continue;
    const abs = path.join(dir, entry.name);
    if (!isInside(abs, SOURCE_ROOT) || isBlockedPath(abs)) continue;
    if (entry.isSymbolicLink()) {
      warnings.push({
        type: 'skipped-symlink',
        path: toPosix(path.relative(SOURCE_ROOT, abs))
      });
      continue;
    }
    if (entry.isDirectory()) {
      output.push(...walkPublicFiles(abs, predicate));
      continue;
    }
    if (entry.isFile() && predicate(abs)) output.push(abs);
  }
  return output.sort((a, b) => toPosix(a).localeCompare(toPosix(b), 'zh-Hans-CN'));
}

function rmAndMkdir(dir) {
  assertInside(dir, SITE_ROOT, 'generated output');
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function cleanReports() {
  assertInside(REPORT_ROOT, SITE_ROOT, 'report output');
  fs.rmSync(REPORT_ROOT, { recursive: true, force: true });
  fs.mkdirSync(REPORT_ROOT, { recursive: true });
}

function shortHash(value) {
  return createHash('sha1').update(value).digest('hex').slice(0, 7);
}

function slugSegment(value) {
  const withoutExtension = value.replace(/\.md$/i, '');
  const normalized = withoutExtension
    .normalize('NFKC')
    .replace(/[()（）]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/[<>:"\\|?*#%{}[\]^`]/g, '')
    .replace(/\/+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return normalized || `untitled-${shortHash(value)}`;
}

function routePrefix(parts) {
  const [top, sub] = parts;
  if (top === '使用说明') return ['guide', ...parts.slice(1).map(slugSegment)];
  if (top === '实验室安全') return ['safety', ...parts.slice(1).map(slugSegment)];
  if (top === '材(实验耗材工具篇)') return ['materials', ...parts.slice(1).map(slugSegment)];
  if (top === '用(实验流程内容篇)') return ['protocols', ...parts.slice(1).map(slugSegment)];
  if (top === '番外') {
    const knownExtras = new Map([
      ['试剂厂商', 'vendors'],
      ['生命科学', 'life-science'],
      ['医药公司', 'pharma'],
      ['补充知识', 'concepts']
    ]);
    if (sub && knownExtras.has(sub)) {
      return ['extras', knownExtras.get(sub), ...parts.slice(2).map(slugSegment)];
    }
    return ['extras', ...parts.slice(1).map(slugSegment)];
  }
  warnings.push({
    type: 'unknown-top-level-directory',
    path: parts.join('/')
  });
  return ['misc', ...parts.map(slugSegment)];
}

function buildBaseSlug(sourceRel) {
  const parts = sourceRel.split('/');
  const filename = parts.pop();
  return [...routePrefix(parts), slugSegment(filename)].join('/');
}

function stripFrontmatter(markdown) {
  if (!markdown.startsWith('---')) return markdown;
  return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
}

function extractTitle(markdown, sourceRel) {
  const h1 = stripFrontmatter(markdown).match(/^#\s+(.+?)\s*#*\s*$/m);
  if (h1) return h1[1].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
  return path.basename(sourceRel, '.md');
}

function plainText(markdown) {
  return stripFrontmatter(markdown)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/^#+\s+/gm, '')
    .replace(/[`*_>~|]/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function makeDescription(markdown, title, isPlaceholder) {
  if (isPlaceholder) return `${title} is a placeholder page in the Zimingyeh Protocol knowledge base.`;
  const text = plainText(markdown);
  if (!text) return `${title} in the Zimingyeh Protocol knowledge base.`;
  return text.length > 160 ? `${text.slice(0, 157)}...` : text;
}

function yamlString(value) {
  return JSON.stringify(String(value));
}

function frontmatter({ title, description, slug, isPlaceholder }) {
  const lines = [
    '---',
    `title: ${yamlString(title)}`,
    `description: ${yamlString(description)}`,
    `slug: ${yamlString(slug)}`,
    'sidebar:',
    `  label: ${yamlString(title)}`
  ];
  if (isPlaceholder) {
    lines.push('  hidden: true', 'pagefind: false');
  }
  lines.push('---', '');
  return lines.join('\n');
}

function placeholderBody(title) {
  return [
    `# ${title}`,
    '',
    '这个主题页正在建设中。',
    '',
    '当前公开知识库中已经保留了这个入口，但正文内容还没有展开。后续会补充定义、适用场景、关键注意事项、操作或选择逻辑，以及必要的参考来源。'
  ].join('\n');
}

function isExternalTarget(target) {
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(target);
}

function splitTarget(target) {
  const hashIndex = target.indexOf('#');
  const queryIndex = target.indexOf('?');
  const cutIndexes = [hashIndex, queryIndex].filter((index) => index >= 0);
  const cut = cutIndexes.length ? Math.min(...cutIndexes) : -1;
  const pathname = cut >= 0 ? target.slice(0, cut) : target;
  const suffix = cut >= 0 ? target.slice(cut) : '';
  let decoded = pathname;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    // Keep the original value when a URL contains a literal percent sequence.
  }
  return { pathname: decoded, suffix };
}

function findMarkdownLinks(markdown) {
  const links = [];
  for (let index = 0; index < markdown.length; index += 1) {
    const image = markdown[index] === '!' && markdown[index + 1] === '[';
    const bracketStart = image ? index + 1 : index;
    if (markdown[bracketStart] !== '[') continue;

    const bracketEnd = markdown.indexOf(']', bracketStart + 1);
    if (bracketEnd < 0 || markdown[bracketEnd + 1] !== '(') continue;

    const innerStart = bracketEnd + 2;
    let innerEnd = -1;
    let depth = 0;
    for (let cursor = innerStart; cursor < markdown.length; cursor += 1) {
      const char = markdown[cursor];
      if (char === '\n' || char === '\r') break;
      if (char === '(') {
        depth += 1;
        continue;
      }
      if (char === ')') {
        if (depth > 0) {
          depth -= 1;
          continue;
        }
        innerEnd = cursor;
        break;
      }
    }
    if (innerEnd < 0) continue;

    const rawInner = markdown.slice(innerStart, innerEnd);
    const leading = rawInner.match(/^\s*/)[0].length;
    const trailing = rawInner.match(/\s*$/)[0].length;
    const trimmed = rawInner.trim();
    if (!trimmed) continue;

    let destStart = innerStart + leading;
    let destEnd = innerEnd - trailing;
    let destination = trimmed;
    let hadAngle = false;
    if (trimmed.startsWith('<')) {
      const angleEnd = trimmed.indexOf('>');
      if (angleEnd > 0) {
        hadAngle = true;
        destination = trimmed.slice(1, angleEnd);
        destStart += 1;
        destEnd = destStart + destination.length;
      }
    }

    links.push({
      image,
      fullStart: index,
      fullEnd: innerEnd + 1,
      label: markdown.slice(bracketStart + 1, bracketEnd),
      destination,
      destStart,
      destEnd,
      hadAngle
    });
    index = innerEnd;
  }
  return links;
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function routeRelativeUrl(fromSlug, toSlug, suffix = '') {
  let relative = path.posix.relative(fromSlug, toSlug);
  if (!relative) relative = '.';
  return `${relative}/${suffix}`;
}

function assetRelativeUrl(fromSlug, assetRel) {
  const encodedAsset = toPosix(assetRel)
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  let relative = path.posix.relative(fromSlug, `z_asset/${encodedAsset}`);
  if (!relative) relative = '.';
  return `${relative}`;
}

function matchesPrefixes(item, prefixes) {
  return prefixes.some((prefix) => item.slug.startsWith(prefix));
}

function sortByTitleThenSlug(a, b) {
  const title = a.title.localeCompare(b.title, 'zh-Hans-CN');
  return title || a.slug.localeCompare(b.slug, 'zh-Hans-CN');
}

function markdownLinkLabel(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/\[/g, '\\[').replace(/]/g, '\\]');
}

function categoryItems(routeMap, category) {
  return routeMap.filter((item) => matchesPrefixes(item, category.prefixes)).sort(sortByTitleThenSlug);
}

function splitReadyAndPlaceholder(items) {
  return {
    ready: items.filter((item) => !item.placeholder),
    placeholders: items.filter((item) => item.placeholder)
  };
}

function renderLinkList(fromSlug, items) {
  if (!items.length) return '暂无可浏览条目。';
  return items
    .map((item) => `- [${markdownLinkLabel(item.title)}](${routeRelativeUrl(fromSlug, item.slug)})`)
    .join('\n');
}

function renderCategorySummary(items) {
  const { ready, placeholders } = splitReadyAndPlaceholder(items);
  return `当前分类同步页面 ${items.length} 篇，其中可浏览 ${ready.length} 篇，建设中 ${placeholders.length} 篇。建设中页面保留路由，但不会进入搜索索引。`;
}

function renderStandardCategoryPage(routeMap, category) {
  const items = categoryItems(routeMap, category);
  const { ready, placeholders } = splitReadyAndPlaceholder(items);
  return [
    category.intro,
    '',
    `> ${renderCategorySummary(items)}`,
    '',
    '## 可浏览条目',
    '',
    renderLinkList(category.slug, ready),
    '',
    '## 建设中',
    '',
    placeholders.length
      ? `还有 ${placeholders.length} 个主题已保留页面位置，后续补充正文后会自动进入索引与搜索。`
      : '当前分类没有建设中占位页。'
  ].join('\n');
}

function renderExtrasCategoryPage(routeMap, category) {
  const items = categoryItems(routeMap, category);
  const { ready, placeholders } = splitReadyAndPlaceholder(items);
  const sections = [
    category.intro,
    '',
    `> ${renderCategorySummary(items)}`,
    '',
    '## 可浏览条目'
  ];

  const grouped = new Set();
  for (const subgroup of EXTRAS_SUBGROUPS) {
    const subgroupItems = ready.filter((item) => matchesPrefixes(item, subgroup.prefixes));
    for (const item of subgroupItems) grouped.add(item.slug);
    if (!subgroupItems.length) continue;
    sections.push('', `### ${subgroup.title}`, '', renderLinkList(category.slug, subgroupItems));
  }

  const otherItems = ready.filter((item) => !grouped.has(item.slug));
  if (otherItems.length) {
    sections.push('', '### 其他番外', '', renderLinkList(category.slug, otherItems));
  }

  if (!ready.length) {
    sections.push('', '暂无可浏览条目。');
  }

  sections.push(
    '',
    '## 建设中',
    '',
    placeholders.length
      ? `还有 ${placeholders.length} 个番外主题已保留页面位置，后续补充正文后会自动进入索引与搜索。`
      : '当前分类没有建设中占位页。'
  );

  return sections.join('\n');
}

function renderAllIndexPage(routeMap) {
  const { ready, placeholders } = splitReadyAndPlaceholder(routeMap);
  const sections = [
    '这是公开内容的站内总索引，按网站一级入口整理。为减少搜索噪音，建设中占位页只统计数量，不在索引正文中展开。',
    '',
    `> 当前同步页面 ${routeMap.length} 篇，其中可浏览 ${ready.length} 篇，建设中 ${placeholders.length} 篇。`,
    '',
    '## 可浏览条目'
  ];

  for (const group of ALL_INDEX_GROUPS) {
    const groupItems = ready.filter((item) => matchesPrefixes(item, group.prefixes)).sort(sortByTitleThenSlug);
    if (!groupItems.length) continue;
    sections.push('', `### ${group.title}`, '', renderLinkList(ALL_INDEX_SLUG, groupItems));
  }

  return sections.join('\n');
}

function writeEntryPage({ slug, title, description, body }) {
  const generated = `${frontmatter({ title, description, slug, isPlaceholder: false })}${body.trim()}\n`;
  const outputAbs = path.join(GENERATED_ROOT, 'pages', `${shortHash(`entry:${slug}`)}.md`);
  assertInside(outputAbs, GENERATED_ROOT, 'entry page output');
  fs.mkdirSync(path.dirname(outputAbs), { recursive: true });
  fs.writeFileSync(outputAbs, generated);
  return {
    source: `generated:${slug}`,
    output: toPosix(path.relative(SITE_ROOT, outputAbs)),
    slug,
    urlPath: `/${slug}/`,
    title,
    placeholder: false
  };
}

function writeEntryPages(routeMap) {
  const requestedSlugs = new Set([...ENTRY_CATEGORIES.map((category) => category.slug), ALL_INDEX_SLUG]);
  const conflicting = routeMap.filter((item) => requestedSlugs.has(item.slug));
  if (conflicting.length) {
    throw new Error(`Generated entry page slug conflicts with source content: ${conflicting.map((item) => item.slug).join(', ')}`);
  }

  const pages = ENTRY_CATEGORIES.map((category) => ({
    slug: category.slug,
    title: category.title,
    description: category.description,
    body:
      category.key === 'extras'
        ? renderExtrasCategoryPage(routeMap, category)
        : renderStandardCategoryPage(routeMap, category)
  }));

  pages.push({
    slug: ALL_INDEX_SLUG,
    title: '全部索引',
    description: 'All browsable public pages in the Zimingyeh Protocol site.',
    body: renderAllIndexPage(routeMap)
  });

  const entryPages = pages.map(writeEntryPage);
  writeJson('entry-pages', entryPages);
  return entryPages;
}

function resolveMarkdownTarget(sourceFile, rawTarget) {
  const { pathname, suffix } = splitTarget(rawTarget);
  if (!pathname || pathname.startsWith('#')) return { kind: 'anchor', suffix: rawTarget };
  if (isExternalTarget(pathname)) return { kind: 'external', target: rawTarget };
  if (path.isAbsolute(pathname)) {
    return { kind: 'absolute', target: rawTarget };
  }
  let targetAbs = path.resolve(path.dirname(sourceFile), pathname);
  if (!fs.existsSync(targetAbs) && !path.extname(targetAbs) && fs.existsSync(`${targetAbs}.md`)) {
    targetAbs = `${targetAbs}.md`;
  }
  return { kind: 'local', targetAbs: path.resolve(targetAbs), suffix };
}

function convertDestination({ destination, image, sourceFile, sourceRel, sourceSlug, mdByAbs }) {
  const resolved = resolveMarkdownTarget(sourceFile, destination);

  if (resolved.kind === 'anchor' || resolved.kind === 'external') {
    if (image && resolved.kind === 'external') {
      hotlinks.push({ source: sourceRel, target: destination });
    }
    return { value: destination, publicImage: image && resolved.kind === 'external' };
  }

  if (resolved.kind === 'absolute') {
    warnings.push({ type: 'absolute-link-preserved', source: sourceRel, target: destination });
    return { value: destination, publicImage: false };
  }

  const targetAbs = resolved.targetAbs;
  if (!isInside(targetAbs, SOURCE_ROOT) || isBlockedPath(targetAbs)) {
    warnings.push({ type: 'blocked-local-link-preserved', source: sourceRel, target: destination });
    return { value: destination, publicImage: false };
  }

  if (image) {
    if (!fs.existsSync(targetAbs)) {
      brokenImages.push({ source: sourceRel, target: destination });
      return { value: destination, publicImage: false };
    }
    if (!isInside(targetAbs, SOURCE_ASSET_ROOT)) {
      warnings.push({ type: 'non-z-asset-image-preserved', source: sourceRel, target: destination });
      return { value: destination, publicImage: false };
    }
    const assetRel = path.relative(SOURCE_ASSET_ROOT, targetAbs);
    return { value: assetRelativeUrl(sourceSlug, assetRel), publicImage: true };
  }

  const targetMeta = mdByAbs.get(targetAbs);
  if (!targetMeta) {
    brokenLinks.push({ source: sourceRel, target: destination });
    return { value: destination, publicImage: false };
  }
  return { value: routeRelativeUrl(sourceSlug, targetMeta.slug, resolved.suffix), publicImage: false };
}

function transformLinks(markdown, context) {
  const replacements = [];
  for (const link of findMarkdownLinks(markdown)) {
    const converted = convertDestination({ ...context, destination: link.destination, image: link.image });
    if (link.image && converted.publicImage) {
      replacements.push({
        start: link.fullStart,
        end: link.fullEnd,
        value: `<img src="${escapeAttribute(converted.value)}" alt="${escapeAttribute(link.label)}">`
      });
      continue;
    }
    if (converted.value === link.destination) continue;
    const formatted = /[\s()]/.test(converted.value) && !link.hadAngle ? `<${converted.value}>` : converted.value;
    replacements.push({ start: link.destStart, end: link.destEnd, value: formatted });
  }

  let output = markdown;
  for (const replacement of replacements.reverse()) {
    output = `${output.slice(0, replacement.start)}${replacement.value}${output.slice(replacement.end)}`;
  }
  return output;
}

function copyPublicAssets() {
  if (!fs.existsSync(SOURCE_ASSET_ROOT)) return 0;
  const assetFiles = walkPublicFiles(SOURCE_ASSET_ROOT, (abs) => {
    const ext = path.extname(abs).toLowerCase();
    return IMAGE_EXTENSIONS.has(ext);
  });

  let copied = 0;
  for (const sourceAbs of assetFiles) {
    const rel = path.relative(SOURCE_ASSET_ROOT, sourceAbs);
    const targetAbs = path.join(PUBLIC_ASSET_ROOT, rel);
    assertInside(targetAbs, PUBLIC_ASSET_ROOT, 'asset output');
    fs.mkdirSync(path.dirname(targetAbs), { recursive: true });
    fs.copyFileSync(sourceAbs, targetAbs);
    copied += 1;
  }
  return copied;
}

function writeJson(name, value) {
  fs.writeFileSync(path.join(REPORT_ROOT, `${name}.json`), `${JSON.stringify(value, null, 2)}\n`);
}

function main() {
  ensureSourceRoot();
  rmAndMkdir(GENERATED_ROOT);
  rmAndMkdir(PUBLIC_ASSET_ROOT);
  cleanReports();

  const markdownFiles = walkPublicFiles(SOURCE_ROOT, (abs) => path.extname(abs).toLowerCase() === '.md');
  const metas = markdownFiles.map((abs) => {
    const sourceRel = toPosix(path.relative(SOURCE_ROOT, abs));
    return {
      abs,
      sourceRel,
      baseSlug: buildBaseSlug(sourceRel)
    };
  });

  const byBaseSlug = new Map();
  for (const meta of metas) {
    const group = byBaseSlug.get(meta.baseSlug) ?? [];
    group.push(meta);
    byBaseSlug.set(meta.baseSlug, group);
  }

  const duplicateSlugs = [];
  for (const [baseSlug, group] of byBaseSlug) {
    if (group.length === 1) {
      group[0].slug = baseSlug;
      continue;
    }
    duplicateSlugs.push({
      baseSlug,
      sources: group.map((item) => item.sourceRel)
    });
    for (const item of group) {
      item.slug = `${baseSlug}-${shortHash(item.sourceRel)}`;
    }
  }

  const mdByAbs = new Map(metas.map((meta) => [meta.abs, meta]));
  const routeMap = [];
  const emptyPages = [];

  for (const meta of metas) {
    const sourceText = fs.readFileSync(meta.abs, 'utf8');
    const bytes = Buffer.byteLength(sourceText, 'utf8');
    const bodyWithoutFrontmatter = stripFrontmatter(sourceText);
    const isPlaceholder = bytes === 0 || bytes < PLACEHOLDER_BYTE_LIMIT;
    const title = extractTitle(sourceText, meta.sourceRel);
    const description = makeDescription(sourceText, title, isPlaceholder);
    const body = isPlaceholder
      ? placeholderBody(title)
      : transformLinks(bodyWithoutFrontmatter, {
          sourceFile: meta.abs,
          sourceRel: meta.sourceRel,
          sourceSlug: meta.slug,
          mdByAbs
        });

    const generated = `${frontmatter({ title, description, slug: meta.slug, isPlaceholder })}${body.trim()}\n`;
    const outputAbs = path.join(GENERATED_ROOT, 'pages', `${shortHash(meta.sourceRel)}.md`);
    assertInside(outputAbs, GENERATED_ROOT, 'markdown output');
    fs.mkdirSync(path.dirname(outputAbs), { recursive: true });
    fs.writeFileSync(outputAbs, generated);

    const item = {
      source: meta.sourceRel,
      output: toPosix(path.relative(SITE_ROOT, outputAbs)),
      slug: meta.slug,
      urlPath: `/${meta.slug}/`,
      title,
      bytes,
      placeholder: isPlaceholder
    };
    routeMap.push(item);
    if (isPlaceholder) emptyPages.push(item);
  }

  const entryPages = writeEntryPages(routeMap);
  const copiedAssets = copyPublicAssets();
  const summary = {
    sourceRoot: '../Zimingyeh_protocol',
    sourcePages: routeMap.length,
    entryPages: entryPages.length,
    generatedPages: routeMap.length + entryPages.length,
    placeholderPages: emptyPages.length,
    copiedAssets,
    hotlinks: hotlinks.length,
    warnings: warnings.length,
    brokenLinks: brokenLinks.length,
    brokenImages: brokenImages.length,
    duplicateSlugGroups: duplicateSlugs.length
  };

  writeJson('route-map', routeMap);
  writeJson('empty-pages', emptyPages);
  writeJson('hotlinks', hotlinks);
  writeJson('warnings', warnings);
  writeJson('broken-links', brokenLinks);
  writeJson('broken-images', brokenImages);
  writeJson('duplicate-slugs', duplicateSlugs);
  writeJson('summary', summary);

  console.log(JSON.stringify(summary, null, 2));

  if (brokenLinks.length || brokenImages.length || duplicateSlugs.length) {
    process.exitCode = 1;
  }
}

main();
