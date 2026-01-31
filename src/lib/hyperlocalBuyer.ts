/**
 * Hyperlocal data for the homebuyer experience at Del Webb North Ranch.
 * Use on homes-for-sale, schedule, floor-plans, lifestyle, amenities.
 * See docs/optimization/hyperlocal-seo.md and hyperlocal-persona.md.
 */

export type BuyerFaqItem = { question: string; answer: string };

/** Local search phrases for buyers (headings, FAQ, meta). */
export const buyerSearchPhrases = [
  "55+ homes for sale in North Las Vegas",
  "homes for sale Del Webb North Ranch",
  "single-story homes North Las Vegas 55+",
  "active adult community North Las Vegas",
  "resale homes Del Webb North Ranch",
  "North Las Vegas 55+ real estate",
  "gated 55+ community North Las Vegas",
  "tour Del Webb North Ranch",
];

/** Buyer-focused FAQ for schema or "Buyer questions" sections. */
export const buyerFaq: BuyerFaqItem[] = [
  {
    question: "How do I buy a home in Del Webb North Ranch?",
    answer:
      "Del Webb North Ranch is a 55+ resale community in North Las Vegas, NV 89086. Work with a local expert like Dr. Jan Duffy to tour available homes, compare floor plans (Cottage, Classic, Retreat), and navigate HOA and age-verification. Schedule a tour to see current listings and the clubhouse.",
  },
  {
    question: "What is the price range for homes in Del Webb North Ranch?",
    answer:
      "Resale homes in Del Webb North Ranch typically range from about $400,000 to $600,000. Prices vary by collection (Cottage, Classic, Retreat), condition, and lot. View current homes for sale in North Las Vegas or get a personalized tour to see what fits your budget.",
  },
  {
    question: "Can I tour Del Webb North Ranch before I buy?",
    answer:
      "Yes. You can schedule a private tour of the community and available homes. Dr. Jan Duffy offers tours of the 10,000 sq ft clubhouse, pools, pickleball, and resale listings so you can experience North Las Vegas 55+ living before you decide.",
  },
  {
    question: "Why buy a 55+ home in North Las Vegas?",
    answer:
      "North Las Vegas offers no state income tax, strong healthcare (VA Southern Nevada nearby), outdoor recreation (Craig Ranch Regional Park, Lake Mead), and 55+ communities like Del Webb North Ranch with single-story homes and resort-style amenities. It's a popular choice for active adults relocating or downsizing.",
  },
];

/** Short value props for hero or CTA blocks (buyer). */
export const buyerValueProps = [
  "Single-story homes in a gated 55+ community",
  "Resort-style clubhouse, pools, pickleball, and fitness",
  "North Las Vegas: no state income tax, healthcare and parks nearby",
  "Local expert who knows Del Webb North Ranch and resale process",
];

/** CTA copy for buyer-focused pages. */
export const buyerCtaCopy = {
  primary: "Schedule a tour of Del Webb North Ranch",
  secondary: "View homes for sale in North Las Vegas",
  metaHighlight: "Find your 55+ home in Del Webb North Ranch, North Las Vegas.",
};

export function getBuyerFaq(): BuyerFaqItem[] {
  return buyerFaq;
}

export function getBuyerSearchPhrases(): string[] {
  return buyerSearchPhrases;
}
