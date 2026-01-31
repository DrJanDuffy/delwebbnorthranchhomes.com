# Critical Path & Render-Blocking Optimizations

How we keep LCP and FCP fast by reducing critical path and render-blocking resources.

## LCP (Largest Contentful Paint)

- **Hero image (resort-pool):**
  - `priority` and `fetchPriority="high"` on the hero `<Image>` in `components/hero.tsx`.
  - `<link rel="preload" as="image" href="/images/amenities/resort-pool.jpeg" />` in `src/app/layout.tsx` so the browser discovers it early.
  - Long cache for `/images/*` so repeat visits don’t re-download.
- **No lazy-load on LCP image:** Hero image is above the fold; it is not lazy-loaded.

## Third-Party Deferral

- **RealScout:** Script is not in layout. It is loaded by `loadRealScoutScript()` in `src/lib/loadRealScoutScript.ts` only when a listings section (RealScoutListings or HomesForSaleWidget) enters the viewport. Saves ~420 KB + MUI/Google Fonts from the critical path.
- **Matterport:** Iframe `src` is set only when the virtual tour section is in view (`components/VirtualTours.tsx`). Saves ~1.8 MB on initial load.
- **Calendly:** Widget script uses `strategy="afterInteractive"` in CalendlyButton; Calendly CSS is loaded non–render-blocking via `CalendlyStyles` (media="print" → onLoad → media="all").

## Fonts

- **Our fonts:** Inter and Playfair via `next/font/google` (self-hosted at build time). No runtime requests to fonts.googleapis.com or fonts.gstatic.com for our content.
- **Preconnect:** We do not preconnect to Google Fonts; we only preconnect to `em.realscout.com` and `static.matterport.com`.
- **RealScout/MUI fonts:** Load only when the RealScout script runs (after listings section is in view), so they do not block LCP.

## Caching

- **Static assets:** `/_next/static/*` → `Cache-Control: public, max-age=31536000, immutable`.
- **First-party images:** `/images/*` → `Cache-Control: public, max-age=31536000, immutable`.

## Preconnect & dns-prefetch

- Preconnect: `https://em.realscout.com`, `https://static.matterport.com`.
- dns-prefetch: same origins (fallback for browsers that benefit from it).
- No preconnect to Google Fonts (we self-host).

## What We Don’t Control

- **RealScout listing images (CloudFront):** Served by RealScout; we cannot set cache TTL or format (WebP/AVIF) from our site.
- **Matterport fonts:** Third-party; we cannot set `font-display` for their fonts.
- **Our main CSS chunk:** Still render-blocking; reducing it would require critical CSS inlining or splitting (larger change).
- **Legacy JS polyfills:** From Next/React build; would require build/config changes to trim.
