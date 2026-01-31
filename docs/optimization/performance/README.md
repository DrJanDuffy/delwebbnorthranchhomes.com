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
- **Resource hints first:** Preconnect, dns-prefetch, and LCP preload are at the top of `<head>` so the browser discovers them before other resources.
- **Third-party deferral:** RealScout script loads when listings section is in viewport + 2s delay; Matterport iframe when virtual tour is in view; Calendly script `lazyOnload`; Calendly CSS non–render-blocking.
- **Fonts:** Google Fonts preconnect removed; we use `next/font` (self-hosted). RealScout/MUI fonts load only after the widget script runs.
- **Caching:** Long-lived cache for `/_next/static/*` and `/images/*` in `next.config.js`.
- **Image quality:** Below-fold images use `quality={70}` (explore-community, home-collections, about-agent, solution-section) to reduce payload.
- **Build:** `browserslist` targets modern browsers (defaults, not dead, not IE 11) to reduce legacy polyfills where possible.

## Current Status & Next Steps

| Area | Done | Optional next steps |
|------|------|---------------------|
| LCP | Preload, fetchPriority, cache | — |
| Third-party | RealScout viewport+delay, Matterport viewport, Calendly lazyOnload | — |
| Render blocking | Calendly deferred; our CSS chunk still blocks | Critical CSS inlining or split |
| Cache | Static + images | Third-party (Calendly, etc.) we don’t control |
| Legacy JS | browserslist added | Monitor bundle after next build |
| Images | quality=70 below fold | Further tune sizes if Lighthouse still flags |

## Quick Checks

- Run Lighthouse (mobile, Slow 4G) after deploy: [lighthouse-checklist.md](./lighthouse-checklist.md).
- Verify cache headers: `/_next/static/*` and `/images/*` should return `Cache-Control: public, max-age=31536000, immutable` (or long max-age).
- Ensure RealScout script is not in initial HTML: only injected when listings section is in view.

## Continue from here

1. **Deploy** — Use Vercel CLI: `vercel build` or `vercel --prod` (per project build rules). If local build fails with `EBUSY` on `.next/export`, close other processes using the project folder (e.g. OneDrive, dev server) and retry, or rely on Vercel’s build.
2. **Lighthouse** — After deploy, run mobile + Slow 4G audits; confirm LCP, touch targets (48px), and no new regressions.
3. **Optional** — Embedded Google Map on Contact page (needs Maps Embed API key); add Google review QR code image if provided.
