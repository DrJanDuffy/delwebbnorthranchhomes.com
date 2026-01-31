# Hyperlocal SEO Guide

How to use **hyperlocal** content and config to improve SEO and engage the North Las Vegas 55+ persona on delwebbnorthranchhomes.com.

## Code & data

| File | Purpose |
|------|---------|
| `src/lib/hyperlocal.ts` | Config: primary area, keywords, agent NAP, helpers (`altPrefix`, `metaDescriptionBlock`, `TITLE_SUFFIX`) |
| `src/lib/hyperlocalData.ts` | Data: nearby areas, local search phrases, hyperlocal FAQ (for schema or content) |
| `src/lib/hyperlocalBuyer.ts` | **Homebuyer experience:** buyer FAQ, local search phrases, value props, CTA copy (use on homes-for-sale, schedule, floor-plans, lifestyle, amenities) |
| `src/lib/hyperlocalSeller.ts` | **Homeseller experience:** seller FAQ, local search phrases, value props, CTA copy (use on home-value, contact, flyers) |
| `src/lib/communityData.ts` | Community facts: address, HOA, amenities, distances (use with hyperlocal for full local picture) |

## Using hyperlocal in pages

### Titles and meta

- Import `TITLE_SUFFIX` or `HYPERLOCAL` from `@/lib/hyperlocal`.
- Page titles: include community + area + intent, e.g. `Homes for Sale | ${TITLE_SUFFIX}`.
- Meta descriptions: use `metaDescriptionBlock(highlight)` or weave in `HYPERLOCAL.primaryKeywords` and `secondaryKeywords`.

### Image alt text

- Use `altPrefix(subject)` so every image has location in alt, e.g. `altPrefix("Resort pool")` → `"Resort pool at Del Webb North Ranch, North Las Vegas, NV"`.

### Internal links

- Use `nearbyAreas` from `hyperlocalData.ts` for anchor text, e.g. “Lifestyle and amenities in **North Las Vegas**” linking to `/amenities` or `/lifestyle`.
- Prefer localized anchor text: “55+ homes in North Las Vegas” instead of “Click here.”

### Local entities

- Weave `HYPERLOCAL.localEntities` (North Las Vegas, Aliante, Centennial Hills, Craig Ranch, etc.) into headings and body where natural.
- Use `localSearchPhrases` from `hyperlocalData.ts` in H2s or FAQ questions to match how people search.

### Schema (FAQ, LocalBusiness)

- `hyperlocalData.hyperlocalFaq` can drive FAQ schema on the homepage or a dedicated “North Las Vegas 55+ FAQ” section.
- **Buyer pages:** Use `buyerFaq` from `hyperlocalBuyer.ts` for FAQ schema or "Buyer questions" sections on homes-for-sale, schedule, floor-plans.
- **Seller pages:** Use `sellerFaq` from `hyperlocalSeller.ts` for FAQ schema or "Seller questions" sections on home-value, contact.
- Keep NAP (name, address, phone) aligned with `src/app/layout.tsx` and Google Business Profile.

### Hyperlocalizing buyer and seller flows

- **Buyer:** Import `buyerFaq`, `buyerValueProps`, `buyerCtaCopy`, `buyerSearchPhrases` from `@/lib/hyperlocalBuyer`. Use in hero/CTA copy, FAQ blocks, and meta highlights on homes-for-sale, schedule, floor-plans, lifestyle, amenities.
- **Seller:** Import `sellerFaq`, `sellerValueProps`, `sellerCtaCopy`, `sellerSearchPhrases` from `@/lib/hyperlocalSeller`. Use on home-value, contact, flyers for value props, FAQ schema, and CTA text.

## Persona

See [hyperlocal-persona.md](./hyperlocal-persona.md) for who the visitor is and how to speak to them (tone, goals, objections).

## Checklist

- [ ] Every page has a title that includes community or area + intent.
- [ ] Meta descriptions mention North Las Vegas or Del Webb North Ranch where relevant.
- [ ] Images use descriptive alt text with location (e.g. via `altPrefix`).
- [ ] Internal links use localized anchor text (not “click here”).
- [ ] At least one primary or secondary keyword appears in H1 or first paragraph.
- [ ] NAP is consistent with layout and GBP.
