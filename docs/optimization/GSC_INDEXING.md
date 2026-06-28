# Google Search Console – Indexing Reference

Quick reference for GSC “Page indexing” issues and how this site handles them.

## Alternate page with proper canonical tag

**Issue:** URLs like `https://www.delwebbnorthranchhomes.com/?card=2268341` are reported as “Alternate page with proper canonical tag” and not indexed.

**Intent:** Correct. Those `?card=` URLs are parameter variants (e.g. RealScout deep links). They should not be indexed; the canonical URL should be.

**Implementation:**

- **Canonical:** All homepage URLs (including `/?card=*`) use canonical: `https://www.delwebbnorthranchhomes.com/` (see `src/lib/site.ts`, `src/app/page.tsx`, `src/app/layout.tsx`).
- **Noindex for ?card=:** `src/app/page.tsx` → `generateMetadata()` sets `robots: { index: false, follow: true }` when `searchParams.card` is present.
- **X-Robots-Tag:** `src/proxy.ts` adds `X-Robots-Tag: noindex, follow` for requests to `/` with a `card` query param.
- **Sitemap:** Homepage entry uses the same canonical URL (with trailing slash).

**GSC:** Use “Validate fix” and allow 1–2+ weeks for re-crawl. No need to “fix” the listed `/?card=*` URLs; they are intended alternates.

---

## Page with redirect

**Issue:** URLs such as `http://delwebbnorthranchhomes.com/`, `https://delwebbnorthranchhomes.com/`, `http://www.delwebbnorthranchhomes.com/`, and `https://www.delwebbnorthranchhomes.com/units/the-haven` are reported as “Page with redirect” and not indexed.

**Intent:** Correct. These URLs 301 to the canonical URLs and should not be indexed; the destinations should be.

**Implementation:**

- **Host/protocol redirects:** `src/proxy.ts` 301 redirects:
  - `http://` → `https://`
  - `delwebbnorthranchhomes.com` → `www.delwebbnorthranchhomes.com`
- **Path redirects:** `next.config.js` → `redirects()`:
  - `/units/the-haven` → `/floor-plans/haven`
  - `/units/overlook-model` → `/floor-plans`
  - `/units/:path*` → `/floor-plans`

**GSC:** No change needed. “Validation failed” here usually means Google is just confirming redirects; the destination URLs are the ones that should be indexed.
