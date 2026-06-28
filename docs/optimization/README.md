# Site Optimization

Central place for SEO, indexing, and performance optimization for **delwebbnorthranchhomes.com**.

## Contents

| Doc | Purpose |
|-----|---------|
| [GSC indexing](./GSC_INDEXING.md) | Canonical, alternates, redirects, and Google Search Console issues |
| [Hyperlocal SEO](./hyperlocal-seo.md) | Keywords, alt text, internal links, schema for North Las Vegas 55+ |
| [Hyperlocal persona](./hyperlocal-persona.md) | 55+ audience brief: tone, CTAs, objections |
| [SEO/GEO/AEO research (2026)](./del-webb-seo-geo-aeo-pages-2026.json) | Parallel deep-research artifact: page types, schema stack, AEO patterns, case studies (run `trun_5dc72e8f4c8a4584b2508ed747d4db78`) |
| [Performance](./performance/README.md) | LCP, FCP, third-party deferral, caching, Lighthouse checklist |
| [../SEO_2025_2026_CHECKLIST.md](../SEO_2025_2026_CHECKLIST.md) | Full SEO checklist (metadata, schema, sitemap, verification) |
| [../BEST_PRACTICES.md](../BEST_PRACTICES.md) | Next.js, images, components, canonical patterns |

## Code locations

- **Canonical & preferred URL:** `src/lib/site.ts` (`SITE_ORIGIN`, `CANONICAL_HOMEPAGE`)
- **Hyperlocal config & helpers:** `src/lib/hyperlocal.ts` (keywords, `altPrefix`, `metaDescriptionBlock`, `TITLE_SUFFIX`)
- **Hyperlocal data:** `src/lib/hyperlocalData.ts` (nearby areas, local phrases, hyperlocal FAQ)
- **Community facts:** `src/lib/communityData.ts` (address, HOA, amenities, distances)
- **Redirects (http → https, non-www → www):** `src/proxy.ts`
- **Path redirects (e.g. /units/* → /floor-plans):** `next.config.js` → `redirects()`
- **Homepage metadata & ?card= noindex:** `src/app/page.tsx` → `generateMetadata`
- **Sitemap & robots:** `src/app/sitemap.ts`, `src/app/robots.ts`
- **Root metadata & schema:** `src/app/layout.tsx`
- **Performance:** [performance/code-locations.md](./performance/code-locations.md) (LCP, RealScout, Matterport, cache, fonts)
- **Optimization scripts:** `scripts/optimization/` (Lighthouse, cache checks)

## Quick checks

- **Canonical homepage:** `https://www.delwebbnorthranchhomes.com/` (trailing slash)
- **Sitemap:** `https://www.delwebbnorthranchhomes.com/sitemap.xml`
- **Robots:** `https://www.delwebbnorthranchhomes.com/robots.txt`
