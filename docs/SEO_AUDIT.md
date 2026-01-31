# SEO Audit — Del Webb North Ranch

**Date:** January 2026  
**Scope:** Technical SEO, structured data, NAP/GBP alignment, on-page signals, and 2026/E-E-A-T best practices.

---

## Executive summary

The site is in strong shape for local real estate SEO: unique metadata and canonicals on key pages, LocalBusiness/RealEstateAgent schema with hours and ratings, FAQ and BreadcrumbList schema, sitemap with static and dynamic URLs, and NAP in footer/layout. This audit applied a few high-impact fixes and lists remaining opportunities to improve rankings and crawlability.

---

## What was audited

| Area | Status | Notes |
|------|--------|------|
| **Metadata** | ✅ | Unique title/description per page; template and canonicals in place |
| **Structured data** | ✅ | Organization, WebSite, **Person** (E-E-A-T), RealEstateAgent (with knowsAbout), LocalBusiness (layout), Place, FAQPage, BreadcrumbList, AggregateRating; About page ProfilePage + Person |
| **NAP / GBP** | ✅ | Single source in `src/lib/site.ts`; footer and schema use it; layout LocalBusiness now has full PostalAddress |
| **Sitemap** | ✅ | Includes homepage, main pages, floor plans, flyers, blog posts, virtual tours |
| **Robots** | ✅ | Allow /; disallow /api/, /_next/, etc.; sitemap URL declared |
| **Headings** | ✅ | Single H1 per page (Hero, schedule, about, etc.); logical H2/H3 |
| **Internal links** | ✅ | Footer and CTAs use keyword-rich anchors (e.g. “Schedule a Tour”, “Homes for Sale”) |
| **Image alt** | ✅ | `altPrefix()` and location/service in alts where checked |
| **Mobile / a11y** | ✅ | Skip-to-main, semantic nav, touch targets (e.g. 48px) |

---

## Fixes applied this session

1. **LocalBusiness schema (layout)**  
   Added full `PostalAddress` (streetAddress, postalCode) to the LocalBusiness/RealEstateAgent block in `src/app/layout.tsx` so it matches GBP/NAP and helps local SEO and Knowledge Panel alignment.

2. **Breadcrumbs**  
   Replaced hardcoded base URL in `components/Breadcrumbs.tsx` with `SITE_ORIGIN` from `@/lib/site` so breadcrumb schema and links stay correct if the domain changes.

3. **FAQ JSON-LD**  
   In `src/app/faq/page.tsx`, FAQ schema output now escapes `<` in JSON (`replace(/</g, '\\u003c')`) for XSS consistency with other JSON-LD on the site.

4. **Schedule page Breadcrumbs**  
   Added Breadcrumbs (and BreadcrumbList schema) to `/schedule` for richer SERP snippets and consistent nav.

5. **GSC verification (env)**  
   Layout now uses `verification.google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? undefined`. Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel (or `.env.local`) to your GSC meta tag content to verify the property.

6. **JSON-LD escape on more pages**  
   Homes-for-sale and community FAQ schema output now escape `<` for XSS consistency.

---

## Recommendations to increase SEO

### High impact

1. **Google Search Console verification**  
   Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to your GSC meta tag content (from Search Console > Settings > Verification). The layout already reads this env and outputs the verification meta tag when set.

2. **Sync AggregateRating with GBP**  
   Layout LocalBusiness uses `GBP_AGGREGATE_RATING` from `src/lib/site.ts`. Update `ratingValue` and `reviewCount` there when your Google Business Profile changes so star ratings in search stay accurate.

3. **BreadcrumbList**  
   Breadcrumbs (with BreadcrumbList schema) are now on all key commercial pages including schedule; homes-for-sale, community, lifestyle, about, contact, FAQ, floor-plans, blog, etc. already had them.

### Medium impact

4. **Meta description length**  
   Keep descriptions roughly 150–160 characters for main pages so they don’t get truncated in SERPs. Use the layout template and `metaDescriptionBlock()` for consistency.

5. **Utility pages (noindex)**  
   Consider `robots: { index: false, follow: true }` for signin, signup, error, blog-details, blog-sidebar if they are not meant to be discovery targets, to keep crawl budget on money pages.

6. **OG/Twitter images**  
   Ensure key pages (e.g. homepage, about, contact) have `openGraph.images` and `twitter.images` with absolute URLs and sensible dimensions (e.g. 1200×630). You already use `metadataBase`; keep image paths consistent.

### Ongoing (E-E-A-T / 2026)

7. **Content freshness**  
   Update blog, FAQs, and “Why choose us” periodically. Mention recent listings, market notes, or community updates where relevant to support E-E-A-T.

8. **GBP alignment**  
   When you change hours, services, or attributes in Google Business Profile, update the same in layout LocalBusiness schema and any visible NAP/hours on the site.

9. **Review schema**  
   If you add dedicated review/testimonial content with explicit ratings, consider adding Review or AggregateRating schema on that page, aligned with GBP policy (e.g. no fabricated reviews).

---

## Finalize until Google indexes

See **`docs/INDEXING_CHECKLIST.md`** for steps: verify deployment, submit sitemap in GSC, request indexing for key URLs, then monitor Coverage and Enhancements.

---

## Quick reference

- **NAP / phone:** `src/lib/site.ts` (`SITE_PHONE_TEL`, `SITE_PHONE_DISPLAY`, `SITE_PHONE_SCHEMA`)
- **Canonical base:** `SITE_ORIGIN`, `CANONICAL_HOMEPAGE` in `src/lib/site.ts`
- **Title suffix:** `TITLE_SUFFIX` in `src/lib/hyperlocal.ts`
- **Sitemap:** `src/app/sitemap.ts` (static + floor plans, flyers, blog, virtual tours)
- **Robots:** `src/app/robots.ts`
- **Schema:** Layout (LocalBusiness, Place), `components/SchemaMarkup.tsx` (Organization, WebSite, RealEstateAgent), per-page FAQ/BreadcrumbList where used

---

## 2026 Realtor SEO strategy

The site follows the **January 2026 realtor SEO** approach: E-E-A-T (Person schema, knowsAbout, ProfilePage on About), local-first + GBP alignment, schema for AI/voice and rich results, and technical fundamentals. See **`docs/REALTOR_SEO_2026.md`** for the full strategy and implementation notes.

---

## References

- [Google Search Central — Structured data](https://developers.google.com/search/docs/appearance/structured-data)
- [LocalBusiness schema](https://schema.org/LocalBusiness) (and RealEstateAgent)
- [FAQPage](https://schema.org/FAQPage), [BreadcrumbList](https://schema.org/BreadcrumbList)
- [E-E-A-T and helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- Existing project notes: `SEO_2025_2026_CHECKLIST.md`, `docs/SITE_VISION_2026.md`
