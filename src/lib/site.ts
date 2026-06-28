/** Site origin (no trailing slash). Use for sitemap, robots, and path-based URLs. */
export const SITE_ORIGIN = "https://www.delwebbnorthranchhomes.com";

/** Cloudflare Images account (shared DRJ site branding assets). */
export const CLOUDFLARE_IMAGES_ACCOUNT_HASH = "byE6BTe9lNqo21V57n4aPQ";

/** Dr. Jan Duffy headshot on Cloudflare Images (same asset as drj-template-site). */
export const AGENT_HEADSHOT_IMAGE_ID = "branding-headshots-dr-jan-duffy-2026";

/** Build a Cloudflare Images delivery URL. */
export function cloudflareImageUrl(
  imageId: string,
  variant: string = "public",
): string {
  return `https://imagedelivery.net/${CLOUDFLARE_IMAGES_ACCOUNT_HASH}/${imageId}/${variant}`;
}

/** Agent headshot — prefer Cloudflare CDN; local path kept as build/runtime fallback. */
export const AGENT_HEADSHOT_URL = cloudflareImageUrl(AGENT_HEADSHOT_IMAGE_ID);

/** Local fallback when Cloudflare Images is unavailable. */
export const AGENT_HEADSHOT_FALLBACK_PATH = "/images/about/dr-jan-duffy.jpg";

export const AGENT_HEADSHOT_FALLBACK_URL = `${SITE_ORIGIN}${AGENT_HEADSHOT_FALLBACK_PATH}`;

/** Canonical homepage URL (with trailing slash). Matches GSC preferred URL for ?card= alternates. */
export const CANONICAL_HOMEPAGE = `${SITE_ORIGIN}/`;

/** Google Business Profile – canonical business name (NAP). */
export const GBP_BUSINESS_NAME =
  "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy";

/** GBP description – matches Google Business Profile exactly. */
export const GBP_DESCRIPTION =
  "Helping active adults 55+ buy and sell homes in Del Webb North Ranch, a gated 55+ community in North Las Vegas' 89086 zip code. Del Webb North Ranch offers single-story, low-maintenance homes with resort-style amenities, including a clubhouse, pool and spa, fitness center, pickleball courts, social clubs, and mountain views, all minutes from the VA hospital, beltway, shopping, dining, and healthcare. As a local real estate agent focused specifically on Del Webb North Ranch, we provide community tours, new-build and resale home showings, pricing and market analysis, new listing alerts, and full support from offer to closing for buyers and sellers in this active adult neighborhood.";

/** Shorter description for meta tags and visible UI where full GBP text is too long. */
export const GBP_SHORT_DESCRIPTION =
  "Helping active adults 55+ buy and sell homes in Del Webb North Ranch, a gated 55+ community in North Las Vegas, NV 89086. Community tours, showings, market analysis, and full buyer/seller support.";

/** GBP business email. */
export const SITE_EMAIL = "sales@delwebbnorthranchhomes.com";

/** Phone – E.164 for tel: links. Matches Google Business Profile (NAP). */
export const SITE_PHONE_TEL = "tel:+17025001064";

/** SMS – matches GBP texting number. */
export const SITE_PHONE_SMS = "sms:+17025001064";

/** Phone display – matches GBP exactly for visible NAP. */
export const SITE_PHONE_DISPLAY = "(702) 500-1064";

/** Phone for JSON-LD/schema.org (E.164 with dashes). */
export const SITE_PHONE_SCHEMA = "+1-702-500-1064";

/** GBP business location – matches Google Business Profile (NAP). */
export const GBP_ADDRESS = {
  streetAddress: "2290 Beauty Vista Avenue",
  addressLocality: "North Las Vegas",
  addressRegion: "NV",
  postalCode: "89086",
  addressCountry: "US",
} as const;

/** GBP service area. */
export const GBP_SERVICE_AREA = "North Las Vegas, NV, USA";

/** GBP opening date. */
export const GBP_FOUNDING_DATE = "2009-09-20";

/** GBP social profiles – matches listed profiles exactly. */
export const GBP_SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/del-webb-north-ranch-homes",
  "https://www.instagram.com/delwebbnorthranchhomes/",
  "https://www.facebook.com/DellWebbNorthRanch",
] as const;

/** GBP standard hours – Sun–Sat 6:00 AM–9:00 PM. */
export const GBP_STANDARD_HOURS = {
  dayOfWeek: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ] as const,
  opens: "06:00",
  closes: "21:00",
} as const;

/** GBP special closures – closed on listed dates. */
export const GBP_SPECIAL_CLOSURES = [
  { validFrom: "2026-07-03", validThrough: "2026-07-03", name: "4th of July (Observed)" },
  { validFrom: "2026-07-04", validThrough: "2026-07-04", name: "4th of July" },
] as const;

/** Visible business hours label for contact/footer. */
export const GBP_HOURS_DISPLAY = "Sunday–Saturday, 6:00 AM–9:00 PM";

/** Google Business Profile review link – use for “Leave a review on Google” CTAs. */
export const GOOGLE_REVIEW_LINK = "https://g.page/r/CTX_3qPVOeEqEBI/review";

/** Google Maps directions to Del Webb North Ranch (community) – for “Get directions” / plan your visit. */
export const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir//2290+Beauty+Vista+Avenue,+North+Las+Vegas,+NV+89086";

/**
 * Aggregate rating for LocalBusiness schema. Update to match your Google Business Profile
 * so star ratings in search stay accurate. Check GBP periodically and update here.
 */
export const GBP_AGGREGATE_RATING = {
  ratingValue: "5",
  reviewCount: "50",
} as const;

/** schema.org PostalAddress object from GBP address. */
export function gbpPostalAddressSchema() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: GBP_ADDRESS.streetAddress,
    addressLocality: GBP_ADDRESS.addressLocality,
    addressRegion: GBP_ADDRESS.addressRegion,
    postalCode: GBP_ADDRESS.postalCode,
    addressCountry: GBP_ADDRESS.addressCountry,
  };
}

/** schema.org OpeningHoursSpecification array – standard hours plus GBP special closures. */
export function gbpOpeningHoursSpecification() {
  return [
    {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: [...GBP_STANDARD_HOURS.dayOfWeek],
      opens: GBP_STANDARD_HOURS.opens,
      closes: GBP_STANDARD_HOURS.closes,
    },
    ...GBP_SPECIAL_CLOSURES.map((closure) => ({
      "@type": "OpeningHoursSpecification" as const,
      validFrom: closure.validFrom,
      validThrough: closure.validThrough,
    })),
  ];
}

/** Formatted single-line address for visible NAP. */
export function gbpFormattedAddress(): string {
  return `${GBP_ADDRESS.streetAddress}, ${GBP_ADDRESS.addressLocality}, ${GBP_ADDRESS.addressRegion} ${GBP_ADDRESS.postalCode}`;
}
