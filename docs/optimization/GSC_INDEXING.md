# Google Search Console – Indexing Reference

Quick reference for GSC “Page indexing” issues and how this site handles them.

## Alternate page with proper canonical tag

**Issue:** URLs like `https://www.delwebbnorthranchhomes.com/?card=2268341` or `https://www.delwebbnorthranchhomes.com/homes-for-sale?q={search_term_string}` are reported as “Alternate page with proper canonical tag” and not indexed.

**Intent:** Correct. Those URLs are parameter variants (RealScout deep links, legacy SearchAction template URLs). They should not be indexed; the canonical URL should be.

**Implementation:**

- **Homepage `?card=`**
  - **Canonical:** All homepage URLs (including `/?card=*`) use canonical: `https://www.delwebbnorthranchhomes.com/` (see `src/lib/site.ts`, `src/app/page.tsx`, `src/app/layout.tsx`).
  - **Noindex for ?card=:** `src/app/page.tsx` → `generateMetadata()` sets `robots: { index: false, follow: true }` when `searchParams.card` is present.
  - **X-Robots-Tag:** `src/proxy.ts` adds `X-Robots-Tag: noindex, follow` for requests to `/` with a `card` query param.
  - **Sitemap:** Homepage entry uses the same canonical URL (with trailing slash).

- **Homes for sale `?q=`**
  - **Canonical:** All `/homes-for-sale` URLs (including `?q=*`) use canonical: `https://www.delwebbnorthranchhomes.com/homes-for-sale`.
  - **Noindex for ?q=:** `src/app/homes-for-sale/page.tsx` → `generateMetadata()` sets `robots: { index: false, follow: true }` when `searchParams.q` is present.
  - **X-Robots-Tag:** `src/proxy.ts` adds `X-Robots-Tag: noindex, follow` for `/homes-for-sale` with a `q` query param.
  - **SearchAction removed:** `components/SchemaMarkup.tsx` no longer publishes a `SearchAction` URL template because on-site search is handled by RealScout widgets, not `?q=` server routes. This stops Google from discovering the `{search_term_string}` placeholder URL.

**GSC:** Use “Validate fix” and allow 1–2+ weeks for re-crawl. No need to “fix” the listed parameter URLs; they are intended alternates.

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
