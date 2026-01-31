# Realtor Website SEO Strategy — January 2026

This document reflects the latest realtor SEO strategy applied to Del Webb North Ranch (January 2026): E-E-A-T, local-first, schema for AI/voice, and Core Web Vitals.

---

## 1. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

Real estate is YMYL (“Your Money or Your Life”), so Google weighs E-E-A-T heavily.

| Signal | Implementation on this site |
|--------|-----------------------------|
| **Experience** | About page copy (community focus, floor plans, resale); testimonials; virtual tours; neighborhood/community content. |
| **Expertise** | Person schema with `jobTitle`, `hasCredential` (S.0197614.LLC); RealEstateAgent `knowsAbout` (Del Webb North Ranch, 55+ communities, North Las Vegas real estate); About page specialties (REALTOR®, senior living specialist). |
| **Authoritativeness** | Organization + RealEstateAgent + Person schema; NAP and GBP alignment; sameAs (YouTube, Instagram, LinkedIn, Facebook); client testimonials; Berkshire Hathaway affiliation. |
| **Trustworthiness** | NAP consistency (`src/lib/site.ts`); HTTPS; Privacy/Terms/Accessibility; AggregateRating in LocalBusiness (sync with GBP); review link (GOOGLE_REVIEW_LINK). |

**Code:** Person schema in `components/SchemaMarkup.tsx`; ProfilePage + Person on `/about` in `src/app/about/page.tsx`; RealEstateAgent `knowsAbout` in SchemaMarkup and layout LocalBusiness.

---

## 2. Schema Markup (2026: AI & Rich Results)

- **LocalBusiness / RealEstateAgent** (layout): NAP, hours, aggregateRating, hasOfferCatalog, knowsAbout, full PostalAddress.
- **Organization** (SchemaMarkup): logo, NAP, sameAs, parentOrganization, employee → Person.
- **WebSite** (SchemaMarkup): SearchAction for `/homes-for-sale?q=`.
- **Person** (SchemaMarkup + About page): Dr. Jan Duffy — jobTitle, description, image, url (`/about`), worksFor, hasCredential, sameAs, knowsAbout.
- **RealEstateAgent** (SchemaMarkup): knowsAbout, areaServed, hasCredential, @id.
- **Place** (layout): Community location, geo, address.
- **FAQPage**: FAQ page + inline FAQ on buyers, sellers, community, homes-for-sale, home-value.
- **BreadcrumbList**: All key pages via Breadcrumbs component.
- **BlogPosting** (blog post pages): headline, description, datePublished, dateModified, image, author (Person @id), publisher, mainEntityOfPage.
- **WebPage** (homepage, homes-for-sale): name, description, url, primaryImageOfPage, isPartOf (WebSite @id). WebSite schema has @id for graph connection.

**Why:** Rich results, Local Pack, and AI/voice systems use structured data; Person + knowsAbout support E-E-A-T and query understanding.

---

## 3. Local-First & GBP

- **NAP:** Single source in `src/lib/site.ts`; used in layout, footer, schema, and visible NAP blocks.
- **Canonical:** All pages use `SITE_ORIGIN`; homepage `CANONICAL_HOMEPAGE`; ?card= homepage gets noindex.
- **GBP alignment:** LocalBusiness schema mirrors GBP (hours, address, services); AggregateRating should be updated from GBP periodically.
- **Review link:** `GOOGLE_REVIEW_LINK` in footer and CTAs.
- **Directions:** `GOOGLE_MAPS_DIRECTIONS_URL` for “Get directions.”

---

## 4. Content & Intent (2026)

- **Neighborhood/community content:** Community page, lifestyle, floor plans, blog (Del Webb North Ranch, North Las Vegas 55+).
- **Intent-focused:** Buyers, sellers, home value, schedule, FAQ — each page has clear intent and unique meta + H1.
- **No thin AI-only content:** Copy is specific to the community and agent; keywords in titles, H1s, and body without stuffing.
- **Featured snippets / AI readiness:** FAQ schema, clear H2/H3, definition-style content where relevant.

---

## 5. Technical (2026)

- **Core Web Vitals:** Next.js optimization; LCP (hero image priority/quality); deferred third-party (RealScout, Calendly); preconnect for critical origins.
- **Mobile:** Responsive; touch targets (e.g. 48px); viewport meta.
- **Security:** HTTPS; Permissions-Policy (e.g. payment=()); CSP in next.config.js.
- **Crawlability:** Sitemap (static + floor plans, flyers, blog, virtual tours); robots allow /; disallow /api/, /_next/, etc.; noindex on signin, signup, blog-details, blog-sidebar.

---

## 6. Ongoing (2026)

- **Sync AggregateRating** with actual GBP: update `GBP_AGGREGATE_RATING` in `src/lib/site.ts` (ratingValue, reviewCount) when your Google Business Profile rating or review count changes; layout LocalBusiness schema uses it.
- **Refresh content** (blog, FAQs, community) for freshness.
- **Keep GBP and site in sync** (hours, services, NAP) when GBP changes.
- **Monitor GSC:** Coverage, Performance, Enhancements (structured data), Mobile Usability.

---

## References

- Google E-E-A-T and local business (Moz, Contempo, Local Mighty).
- Real estate SEO 2026 (Jeff Lenney, Clear Lead, HousingWire).
- Schema.org: Person, RealEstateAgent, LocalBusiness, WebSite, FAQPage, BreadcrumbList.
- Project: `docs/SEO_AUDIT.md`, `src/lib/site.ts`, `components/SchemaMarkup.tsx`, `src/app/about/page.tsx`.
