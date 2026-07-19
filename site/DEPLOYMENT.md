# Deployment

This site is prepared for GitHub Pages through GitHub Actions.

## Local verification

Run these commands from `site/` before opening a deployment PR or pushing to `main`:

```bash
npm ci
npm run audit:build
```

Optional advisory checks:

```bash
npm run audit:security
npm run audit:images:strict
```

`audit:security` is currently advisory because upgrading the affected Astro dependency requires a major-version review. `audit:images:strict` is expected to fail while the current public notes still reference external image URLs.

## GitHub Pages settings

In the repository settings, set Pages to:

- Source: GitHub Actions
- Custom domain: none, unless a domain is configured later

The Astro config already uses:

- `site`: `https://zimingyeh333.github.io`
- `base`: `/zimingyeh_protocol`

## First deployment

1. Commit the `site/` project and `.github/workflows/deploy-site.yml`.
2. Push to `main`, or run the workflow manually with `workflow_dispatch`.
3. The workflow installs dependencies with `npm ci`, runs `npm run audit:build`, uploads `site/dist`, and deploys the uploaded artifact to GitHub Pages.

## Before long-term public release

- Resolve or explicitly accept the current `npm run audit:security` findings.
- Decide whether to localize the 10 hotlinked images or keep them with a documented availability/licensing risk.
- Keep `npm run audit:build` as the blocking release gate.
