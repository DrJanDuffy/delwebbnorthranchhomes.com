# Performance Optimization

Documentation for performance optimizations on **delwebbnorthranchhomes.com** (Core Web Vitals, LCP, FCP, third-party deferral, caching).

## Contents

| File | Purpose |
|------|---------|
| [README.md](./README.md) | This overview |
| [critical-path.md](./critical-path.md) | LCP, FCP, render-blocking, and critical path optimizations |
| [lighthouse-checklist.md](./lighthouse-checklist.md) | How to run Lighthouse and interpret results |
| [code-locations.md](./code-locations.md) | Where each optimization lives in the codebase |

## Summary of Optimizations

- **LCP (Largest Contentful Paint):** Hero image has `priority` + `fetchPriority="high"`, preload in `<head>`, long cache for `/images/*`.
- **Third-party deferral:** RealScout script loads only when listings section is in viewport; Matterport iframe loads when virtual tour section is in view; Calendly CSS loads non–render-blocking.
- **Fonts:** Google Fonts preconnect removed; we use `next/font` (self-hosted Inter + Playfair). RealScout/MUI fonts load only when the widget script runs (after viewport).
- **Caching:** Long-lived cache for `/_next/static/*` and `/images/*` in `next.config.js`.
- **Preconnect / dns-prefetch:** `em.realscout.com`, `static.matterport.com` (no Google Fonts).

## Quick Checks

- Run Lighthouse (mobile, Slow 4G) after deploy: [lighthouse-checklist.md](./lighthouse-checklist.md).
- Verify cache headers: `/_next/static/*` and `/images/*` should return `Cache-Control: public, max-age=31536000, immutable` (or long max-age).
- Ensure RealScout script is not in initial HTML: only injected when listings section is in view.
