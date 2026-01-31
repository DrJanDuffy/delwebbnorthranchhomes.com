# Performance Optimization – Code Locations

Where each performance optimization is implemented in the codebase.

## LCP & Hero Image

| What | Where |
|------|--------|
| Hero image `priority` + `fetchPriority="high"` | `components/hero.tsx` – `<Image priority fetchPriority="high" ... />` |
| Resource hints (preconnect, dns-prefetch, preload) | `src/app/layout.tsx` – first in `<head>` so browser discovers them before other resources |
| LCP image preload | `src/app/layout.tsx` – `<link rel="preload" as="image" href="/images/amenities/resort-pool.jpeg" />` |
| Cache for `/images/*` | `next.config.js` – `headers()` → `source: '/images/:path*'` → `Cache-Control: public, max-age=31536000, immutable` |
| Below-fold image quality | `components/sections/explore-community.tsx`, `home-collections.tsx`, `about-agent.tsx`, `solution-section.tsx` – `quality={70}` |

## Third-Party Deferral

| What | Where |
|------|--------|
| RealScout script loader + delay constant | `src/lib/loadRealScoutScript.ts` – `loadRealScoutScript()`, `REALSCOUT_LOAD_DELAY_MS` (2s) |
| RealScoutListings viewport + delay + placeholder | `components/RealScoutListings.tsx` – IntersectionObserver, 2s delay then loadRealScoutScript, placeholder until ready |
| HomesForSaleWidget viewport + delay + placeholder | `components/HomesForSaleWidget.tsx` – same pattern |
| Matterport iframe when in view | `components/VirtualTours.tsx` – IntersectionObserver, set iframe `src` only when `iframeAllowed` |
| Calendly CSS non–render-blocking | `components/CalendlyStyles.tsx` – media="print" + onLoad → media="all" |
| Calendly script | `components/CalendlyButton.tsx` – Script strategy="afterInteractive" |

## Fonts & Preconnect

| What | Where |
|------|--------|
| Self-hosted fonts (Inter, Playfair) | `src/app/layout.tsx` – `next/font/google` (Inter, Playfair_Display), `display: "swap"` |
| Preconnect / dns-prefetch | `src/app/layout.tsx` – preconnect + dns-prefetch for `em.realscout.com`, `static.matterport.com` (no Google Fonts) |

## Caching & Headers

| What | Where |
|------|--------|
| Cache for `/_next/static/*` | `next.config.js` – `headers()` → `source: '/_next/static/:path*'` → `Cache-Control: public, max-age=31536000, immutable` |
| Cache for `/images/*` | `next.config.js` – `headers()` → `source: '/images/:path*'` (see above) |
| CSP (script-src, connect-src, etc.) | `next.config.js` – `headers()` → `source: '/:path*'` → Content-Security-Policy |

## Build & Browsers

| What | Where |
|------|--------|
| Modern browser targets (reduce legacy JS) | `package.json` – `browserslist`: defaults, not dead, not IE 11 |

## Layout & Global Assets

| What | Where |
|------|--------|
| Root layout, head, body | `src/app/layout.tsx` |
| RealScout global styles (widget CSS vars) | `src/app/layout.tsx` – `<style dangerouslySetInnerHTML={{ __html: ` realscout-office-listings { ... }` }} />` |
| No RealScout script in layout | Script removed; loaded by components via `loadRealScoutScript()` when in view |
