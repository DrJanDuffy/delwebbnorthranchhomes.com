# Del Webb North Ranch Site Vision 2026

Target: **~85% of a 2026-ready hyperlocal real estate site** (E-E-A-T, Core Web Vitals, GBP, North Las Vegas 55+).

## Done (in scope for 85%)

### Structure & journeys
- **For Buyers** (`/buyers`) – Hub: value props, community stats, next steps, buyer FAQ, FAQ schema.
- **For Sellers** (`/sellers`) – Hub: value props, next steps, seller FAQ, FAQ schema.
- **Community & Area** (`/community`) – North Las Vegas area, nearby areas, hyperlocal FAQ, community facts.
- **Home Value**, **Homes for Sale**, **Schedule**, **Contact**, **About**, **Testimonials**, **FAQ**, **Blog**, **Flyers**, **Floor Plans**, **Amenities**, **Lifestyle** – All present with hyperlocal meta and internal links where relevant.

### Hyperlocal & SEO
- **NAP & schema:** LocalBusiness/RealEstateAgent in layout; Place schema; NAP matches GBP.
- **Hyperlocal libs:** `hyperlocal.ts`, `hyperlocalData.ts`, `hyperlocalBuyer.ts`, `hyperlocalSeller.ts` – used on buyer/seller pages and wired into homes-for-sale, home-value.
- **Meta:** `TITLE_SUFFIX`, `metaDescriptionBlock`, `altPrefix` used across key pages; canonical and Open Graph set.
- **Sitemap:** `sitemap.ts` includes all main pages including buyers, sellers, community, home-value, flyers, schedule.
- **Breadcrumbs:** BreadcrumbList schema via `Breadcrumbs` on buyers, sellers, community, about, etc.
- **FAQ schema:** Buyer FAQ, seller FAQ, community/hyperlocal FAQ on respective pages.

### UX & discovery
- **Homepage:** Office RealScout listings section directly below hero; then Explore section (For Buyers, For Sellers, Community & Area); final CTA has links to buyers, sellers, home value, schedule. Single listings section (no duplicate widget).
- **Navbar & footer:** Buyers, Sellers, Community & Area in nav and Quick Links.
- **404:** Branded; popular links include Buyers, Sellers, Schedule, Home Value, Community.
- **Error page:** Branded client boundary with Navbar/Footer, Try again, and quick links (Buyers, Sellers, Homes for Sale, Contact, phone).
- **Cross-links:** About has “Your next step” (Buyers, Sellers, Community); blog and flyers have “Explore more” links.

### Performance & a11y
- LCP preload, hero `fetchPriority`, RealScout viewport + delay, Calendly CSS deferred; image quality/cache; browserslist.
- Skip-to-main link in layout; touch targets 48px; semantic structure.

### GBP alignment
- Review link, directions link, sameAs (Facebook, LinkedIn, Instagram), special hours, woman/veteran owned; NAP in layout and footer.

## Optional next (remaining ~15%)

- **Blog content:** Replace or expand sample posts; add internal links to buyers/sellers/community in post body.
- **Embedded map:** Contact page Google Map embed (needs Embed API key).
- **Review schema:** Ensure AggregateRating/review schema matches GBP when you have stable data.
- **Lighthouse:** Run mobile + Slow 4G after deploy; tune any remaining LCP/CLS.
- **More local content:** Neighborhood deep-dives, seasonal posts, or “Moving to North Las Vegas” type articles.

## File reference

| Area | Key files |
|------|-----------|
| Buyer/seller data | `src/lib/hyperlocalBuyer.ts`, `src/lib/hyperlocalSeller.ts` |
| Hyperlocal config | `src/lib/hyperlocal.ts`, `src/lib/hyperlocalData.ts` |
| Buyer/seller/community pages | `src/app/buyers/page.tsx`, `src/app/sellers/page.tsx`, `src/app/community/page.tsx` |
| Homepage sections | `components/sections/explore-community.tsx`, `components/sections/final-cta.tsx` |
| Error/404 | `src/app/error/page.tsx`, `src/app/not-found.tsx` |
| Docs | `docs/optimization/hyperlocal-seo.md`, `docs/optimization/hyperlocal-persona.md`, `docs/optimization/performance/README.md` |
