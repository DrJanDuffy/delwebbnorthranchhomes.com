/**
 * Hyperlocal data for the homeseller experience at Del Webb North Ranch.
 * Use on home-value, contact, flyers, and seller-focused sections.
 * See docs/optimization/hyperlocal-seo.md and hyperlocal-persona.md.
 */

export type SellerFaqItem = { question: string; answer: string };

/** Local search phrases for sellers (headings, FAQ, meta). */
export const sellerSearchPhrases = [
  "home value Del Webb North Ranch",
  "sell my home North Las Vegas",
  "how much is my home worth North Las Vegas",
  "55+ resale North Las Vegas",
  "sell home Del Webb North Ranch",
  "North Las Vegas home valuation",
  "list my home North Las Vegas 89086",
];

/** Seller-focused FAQ for schema or "Seller questions" sections. */
export const sellerFaq: SellerFaqItem[] = [
  {
    question: "How much is my Del Webb North Ranch home worth?",
    answer:
      "Resale values in Del Webb North Ranch depend on collection (Cottage, Classic, Retreat), condition, and current North Las Vegas market. Get a free, instant home value estimate for your property, or schedule a consultation with Dr. Jan Duffy for a detailed valuation and listing strategy.",
  },
  {
    question: "What do I need to sell my home in North Las Vegas?",
    answer:
      "Selling in Del Webb North Ranch follows standard North Las Vegas resale steps: disclosure, HOA documents, and age-verification for the community. A local agent who knows 55+ resale can handle listing, staging advice, and connecting with qualified 55+ buyers looking in North Las Vegas.",
  },
  {
    question: "How long do homes take to sell in Del Webb North Ranch?",
    answer:
      "Market conditions in North Las Vegas and demand for 55+ single-story homes affect days on market. Del Webb North Ranch resales often attract active adult buyers from in and out of state. Get a current home value estimate and local market insight to plan your timeline.",
  },
  {
    question: "Why use a local agent to sell my North Las Vegas home?",
    answer:
      "A local expert knows Del Webb North Ranch floor plans, HOA expectations, and how to market to 55+ buyers searching North Las Vegas. Dr. Jan Duffy specializes in this community and can help you price, present, and sell your home efficiently.",
  },
];

/** Short value props for hero or CTA blocks (seller). */
export const sellerValueProps = [
  "Free, instant home value estimate for Del Webb North Ranch and North Las Vegas",
  "Expertise in 55+ resale and community rules",
  "Clear pricing and marketing for active adult buyers",
  "One point of contact from valuation to closing",
];

/** CTA copy for seller-focused pages. */
export const sellerCtaCopy = {
  primary: "Get your free home value estimate",
  secondary: "Schedule a seller consultation",
  metaHighlight:
    "Get an accurate home value for your Del Webb North Ranch or North Las Vegas property.",
};

export function getSellerFaq(): SellerFaqItem[] {
  return sellerFaq;
}

export function getSellerSearchPhrases(): string[] {
  return sellerSearchPhrases;
}
