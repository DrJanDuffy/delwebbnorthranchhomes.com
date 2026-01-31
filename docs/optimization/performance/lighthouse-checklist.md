# Lighthouse Performance Checklist

Use this when auditing **delwebbnorthranchhomes.com** with Lighthouse (e.g. after deploy or before a release).

## How to Run

1. **Environment:** Production build (e.g. deployed on Vercel). Local `npm run build` + `npm run start` is acceptable.
2. **Device:** Use “Mobile” or “Moto G Power” in Lighthouse.
3. **Throttling:** Use “Slow 4G” for a realistic mobile experience.
4. **Page:** Run on the homepage first (main entry; hero = LCP).

## What to Check

| Audit | Target | Notes |
|-------|--------|--------|
| Performance score | ≥ 70 (mobile, Slow 4G) | 90+ is ideal; third-party and network limit ceiling |
| FCP | &lt; 3.0 s | First Contentful Paint |
| LCP | &lt; 5.5 s | Hero image; preload + fetchPriority should help |
| TBT | &lt; 200 ms | Total Blocking Time; RealScout deferred helps |
| CLS | &lt; 0.1 | Cumulative Layout Shift; aim for 0 |
| Speed Index | &lt; 4.0 s | Perceived load |

## Insights to Review

- **Render blocking:** Our CSS chunk + any remaining blocking. Google Fonts should not appear if RealScout is deferred (viewport load).
- **Use efficient cache lifetimes:** Our `/images/*` and `/_next/static/*` should have long TTL. Third-party (CloudFront, RealScout, Calendly) we don’t control.
- **Preconnected origins:** Should show `em.realscout.com` and `static.matterport.com` if preconnect is in `<head>`.
- **LCP element:** Should be the hero image (resort-pool) with `fetchpriority="high"` in the DOM.
- **Third-party:** RealScout and Matterport should not dominate initial load; they load when their sections are in view.

## After Changes

1. Deploy.
2. Run Lighthouse 1–2 times (mobile, Slow 4G).
3. Compare FCP, LCP, TBT, CLS to previous run.
4. If score drops, check “Render blocking” and “Network dependency tree” for new blocking or long chains.

## Optional: CI / Scripts

- Add a `scripts/optimization/` folder and a small script that runs Lighthouse (e.g. via `lighthouse` CLI) and fails if Performance &lt; threshold, or logs the report for review.
