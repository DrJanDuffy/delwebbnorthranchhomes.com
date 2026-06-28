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

---

## Blocked by robots.txt (`/_next/static/chunks/*.js`)

**Issue:** URLs like `https://www.delwebbnorthranchhomes.com/_next/static/chunks/5c72bcd8bd083037.js?dpl=...` appear under **Page indexing → Blocked by robots.txt**.

**Intent:** Correct. Next.js build chunks are application assets, not pages. They should not be indexed.

**Implementation:**

- **robots.txt:** `src/app/robots.ts` → `Disallow: /_next/` (also `/api/`, `/static/`, `/message/`) for all crawlers.
- **X-Robots-Tag:** `next.config.js` → `headers()` adds `X-Robots-Tag: noindex, nofollow` on `/_next/static/*`.

**GSC:** Not an indexing problem. Google may continue reporting these URLs as blocked, which is expected.

---

## Crawled - currently not indexed

**Issue:** GSC lists URLs under **Page indexing → Crawled - currently not indexed** that Google fetched but chose not to add to the index.

**Intent:** Most listed URLs are expected exclusions. One URL type (`/floor-plans/*`) should be indexed and may need a URL Inspection request after fixes ship.

### Expected (no action needed)

| URL pattern | Why it is not indexed |
|-------------|------------------------|
| `/?card=*` | RealScout deep-link variants; `noindex` + canonical to homepage (`src/app/page.tsx`, `src/proxy.ts`). |
| `/homes-for-sale?q=*` | Legacy SearchAction / query variants; `noindex` + canonical (`src/app/homes-for-sale/page.tsx`, `src/proxy.ts`). |
| `/_next/static/chunks/*.js` | Next.js assets; blocked by `robots.txt` and `X-Robots-Tag`. |
| `/units/*` | Legacy paths; 301 redirect to `/floor-plans` or `/floor-plans/haven` (`next.config.js`). |
| `/message/captcha` | Legacy spam path; 404 with `X-Robots-Tag: noindex` (`src/app/message/[...path]/route.ts`) and `Disallow: /message/` in `robots.txt`. |

### Should be indexed (`/floor-plans/pursuit` and other floor plan pages)

**Issue:** Floor plan detail pages are in `src/app/sitemap.ts` and have unique metadata, but Google may defer indexing templated pages.

**Implementation:**

- **Sitemap:** All floor plan slugs from `getAllFloorPlanSlugs()` are included at priority `0.75`.
- **Canonical + metadata:** `src/app/floor-plans/[slug]/page.tsx` → `generateMetadata()` per plan.
- **Structured data:** `WebPage`, `Product` (no fabricated `aggregateRating`), `BreadcrumbList`, and `VideoObject` when a tour exists.
- **Internal links:** Floor plan index cards, related same-series links on detail pages, and site-wide nav/footer links.
- **Removed fake review markup:** `aggregateRating` was removed from floor plan `Product` schema (not tied to visible reviews; can trigger quality demotion).

**GSC after deploy:**

1. **URL Inspection** → `https://www.delwebbnorthranchhomes.com/floor-plans/pursuit` → **Request indexing**.
2. Repeat for other priority floor plans (`/floor-plans/haven`, `/floor-plans/explore`, etc.) if needed.
3. In **Page indexing → Crawled - currently not indexed**, click **Validate fix** only after re-crawl; parameter/redirect/asset URLs may remain listed and that is fine.
