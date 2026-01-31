# Optimization Scripts

Scripts and runbooks for performance and SEO checks.

## Contents

| Script / Doc | Purpose |
|--------------|---------|
| [check-cache-headers.js](./check-cache-headers.js) | Fetches key URLs and prints Cache-Control (and optional CSP) for quick verification |
| [README.md](./README.md) | This file |

## Running Scripts

From project root:

**Cache headers (production URL):**
```bash
npm run optimize:check-cache
```

**Cache headers (custom URL):**
```bash
node scripts/optimization/check-cache-headers.js [BASE_URL]
```

Example (local after `npm run build` + `npm run start`):
```bash
node scripts/optimization/check-cache-headers.js http://localhost:3000
```

## Lighthouse

To run Lighthouse from the command line:

1. Install: `npm install -g lighthouse` (or use `npx lighthouse`).
2. Run: `lighthouse https://www.delwebbnorthranchhomes.com --preset=perf --throttling-method=simulate --form-factor=mobile --output=html --output-path=./lighthouse-report.html`
3. Open `lighthouse-report.html` in a browser.

See [docs/optimization/performance/lighthouse-checklist.md](../../docs/optimization/performance/lighthouse-checklist.md) for what to check.
