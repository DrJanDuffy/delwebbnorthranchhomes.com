/** Site origin (no trailing slash). Use for sitemap, robots, and path-based URLs. */
export const SITE_ORIGIN = "https://www.delwebbnorthranchhomes.com";

/** Canonical homepage URL (with trailing slash). Matches GSC preferred URL for ?card= alternates. */
export const CANONICAL_HOMEPAGE = `${SITE_ORIGIN}/`;

/** Phone – E.164 for tel: links. Matches Google Business Profile (NAP). */
export const SITE_PHONE_TEL = "tel:+17025001064";

/** Phone display – matches GBP exactly for visible NAP. */
export const SITE_PHONE_DISPLAY = "(702) 500-1064";

/** Phone for JSON-LD/schema.org (E.164 with dashes). */
export const SITE_PHONE_SCHEMA = "+1-702-500-1064";

/** Google Business Profile review link – use for “Leave a review on Google” CTAs. */
export const GOOGLE_REVIEW_LINK = "https://g.page/r/CTX_3qPVOeEqEBI/review";

/** Google Maps directions to Del Webb North Ranch (community) – for “Get directions” / plan your visit. */
export const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir//2290+Beauty+Vista+Avenue,+North+Las+Vegas,+NV+89086";
