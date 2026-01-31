# Finalize Site Until Google Indexes — Checklist

Use this checklist after deployment so Google can discover and index your site.

---

## 1. Deployment

- [ ] **Vercel (or host) deploy is live** — Confirm the site loads at `https://www.delwebbnorthranchhomes.com`.
- [ ] **HTTPS** — No mixed content or certificate errors.
- [ ] **robots.txt** — Open `https://www.delwebbnorthranchhomes.com/robots.txt` and confirm it shows `Allow: /`, `Disallow: /api/`, etc., and `Sitemap: https://www.delwebbnorthranchhomes.com/sitemap.xml`.
- [ ] **sitemap.xml** — Open `https://www.delwebbnorthranchhomes.com/sitemap.xml` and confirm it lists homepage, main pages, floor plans, flyers, blog posts, virtual tours (no signin/signup/blog-details/blog-sidebar).

---

## 2. Google Search Console

- [ ] **Property added** — Property is `https://www.delwebbnorthranchhomes.com` (with `www` if that’s your canonical).
- [ ] **Ownership verified** — You are a verified owner (meta tag: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel to your GSC meta tag content; or use another method).
- [ ] **Sitemap submitted** — In GSC: **Sitemaps** → Add sitemap → `https://www.delwebbnorthranchhomes.com/sitemap.xml` → Submit. Wait until status is “Success” or “Couldn’t fetch” is resolved.
- [ ] **URL Inspection (key pages)** — In GSC: **URL Inspection** → enter each URL → **Request indexing** for:
  - `https://www.delwebbnorthranchhomes.com/`
  - `https://www.delwebbnorthranchhomes.com/homes-for-sale`
  - `https://www.delwebbnorthranchhomes.com/schedule`
  - `https://www.delwebbnorthranchhomes.com/about`
  - `https://www.delwebbnorthranchhomes.com/contact`
  - `https://www.delwebbnorthranchhomes.com/floor-plans`
  - `https://www.delwebbnorthranchhomes.com/faq`

---

## 3. After Submitting

- [ ] **Coverage** — In GSC **Coverage** (or **Pages**), check after a few days that “Valid” pages increase. Fix any “Error” or “Excluded” issues if needed.
- [ ] **Enhancements** — In GSC **Enhancements**, confirm structured data (e.g. FAQ, Breadcrumbs, Organization) has no critical errors.
- [ ] **Performance** — In GSC **Performance**, after indexing you’ll see queries, clicks, impressions. This can take 1–2+ weeks.

---

## 4. What’s Already Set on the Site

- **Canonicals** — All key pages use `SITE_ORIGIN`; homepage uses `CANONICAL_HOMEPAGE` (with trailing slash).
- **Robots** — Layout: `index: true`, `follow: true`; utility pages (signin, signup, blog-details, blog-sidebar) are `noindex, follow`; `?card=` homepage is noindex.
- **Sitemap** — Generated at `/sitemap.xml`; referenced in `robots.txt`.
- **Schema** — Organization, WebSite, Person, RealEstateAgent, LocalBusiness (layout), Place, FAQPage, BreadcrumbList, BlogPosting, WebPage (homepage, homes-for-sale).
- **NAP** — Single source in `src/lib/site.ts`; footer and schema use it.

---

## 5. Optional

- **Google Business Profile** — Keep NAP, hours, and services in sync with the site; update `GBP_AGGREGATE_RATING` in `src/lib/site.ts` when your GBP rating/review count changes.
- **Internal links** — Key pages already link to each other (footer, CTAs). Add more internal links from blog/community content to listings and contact as you add content.

---

Once the sitemap is submitted and URL Inspection has been run on the key URLs above, the site is finalized for indexing. Indexing usually happens within a few days to a couple of weeks depending on crawl rate and site authority.
