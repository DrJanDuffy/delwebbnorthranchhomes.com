/**
 * Keyword variations for "Del Webb North Ranch" for on-page SEO.
 * Includes GSC top-query shapes (del webb north ranch, del webb at north ranch, del webb north las vegas, etc.).
 * Use naturally in H2, H3, and body copy—avoid stuffing.
 */

export const DEL_WEBB_NORTH_RANCH_VARIATIONS = [
  "Del Webb North Ranch",
  "North Ranch",
  "Del Webb at North Ranch",
  "Del Webb North Las Vegas",
  "Del Webb Las Vegas",
  "Del Webb North Ranch 55+ community",
  "North Ranch 55+ community",
  "Del Webb 55+ communities",
  "Del Webb communities Las Vegas",
  "Del Webb Las Vegas Nevada",
  "this 55+ community in North Las Vegas",
  "the community",
  "Del Webb North Ranch in North Las Vegas",
  "North Ranch in North Las Vegas",
  "this premier 55+ community",
  "Del Webb North Ranch resale homes",
  "Del Webb North Ranch homes for sale",
  "North Ranch single-story homes",
  "the Del Webb North Ranch community",
  "Del Webb North Ranch clubhouse",
  "North Ranch amenities",
  "55+ active adult community in North Las Vegas",
  "Del Webb North Ranch floor plans",
  "North Ranch real estate",
] as const;

export type KeywordVariation = (typeof DEL_WEBB_NORTH_RANCH_VARIATIONS)[number];

/** Return a variation for use in copy; pass a simple index or topic to vary. */
export function getVariation(topic: string): string {
  const hash = topic.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return DEL_WEBB_NORTH_RANCH_VARIATIONS[hash % DEL_WEBB_NORTH_RANCH_VARIATIONS.length];
}
