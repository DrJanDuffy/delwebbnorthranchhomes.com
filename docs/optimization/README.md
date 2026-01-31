# Site Optimization

Central place for SEO, indexing, and performance optimization for **delwebbnorthranchhomes.com**.

## Contents

| Doc | Purpose |
|-----|---------|
| [GSC indexing](./GSC_INDEXING.md) | Canonical, alternates, redirects, and Google Search Console issues |
| [../SEO_2025_2026_CHECKLIST.md](../SEO_2025_2026_CHECKLIST.md) | Full SEO checklist (metadata, schema, sitemap, verification) |
| [../BEST_PRACTICES.md](../BEST_PRACTICES.md) | Next.js, images, components, canonical patterns |

## Code locations

- **Canonical & preferred URL:** `src/lib/site.ts` (`SITE_ORIGIN`, `CANONICAL_HOMEPAGE`)
- **Redirects (http → https, non-www → www):** `src/middleware.ts`
- **Path redirects (e.g. /units/* → /floor-plans):** `next.config.js` → `redirects()`
- **Homepage metadata & ?card= noindex:** `src/app/page.tsx` → `generateMetadata`
- **Sitemap & robots:** `src/app/sitemap.ts`, `src/app/robots.ts`
- **Root metadata & schema:** `src/app/layout.tsx`

## Quick checks

- **Canonical homepage:** `https://www.delwebbnorthranchhomes.com/` (trailing slash)
- **Sitemap:** `https://www.delwebbnorthranchhomes.com/sitemap.xml`
- **Robots:** `https://www.delwebbnorthranchhomes.com/robots.txt`
