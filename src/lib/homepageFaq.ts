/**
 * Homepage FAQ content — optimized for AEO / AI Overview citation.
 * Question headings match exact search queries; answers lead with direct response.
 */

export type HomepageFaqItem = {
  question: string;
  answer: string;
};

export const homepageFaq: HomepageFaqItem[] = [
  {
    question: "What is Del Webb North Ranch?",
    answer:
      "Del Webb North Ranch is a gated 55+ active adult community in North Las Vegas, Nevada with 394 single-story homes on 80 acres. Homes range from 1,285 to 2,015 square feet across three collections — Cottage, Classic, and Retreat — priced from $400,000 to $600,000. The fully-built community includes a 10,000 sq ft clubhouse, resort-style pool, fitness center, and pickleball courts.",
  },
  {
    question: "What is the HOA fee at Del Webb North Ranch?",
    answer:
      "The HOA fee at Del Webb North Ranch is $215 per month. There are no special improvement districts. The HOA covers common area maintenance, landscaping, and community amenities.",
  },
  {
    question: "How many floor plans does Del Webb North Ranch have?",
    answer:
      "Del Webb North Ranch offers 9 single-story floor plans across three collections. The Cottage Series ranges from 1,285 to 1,509 sq ft. The Classic Series ranges from 1,451 to 1,770 sq ft and includes optional dens. The Retreat Series ranges from 1,716 to 2,015 sq ft for those who want the most space.",
  },
  {
    question: "Does Nevada have a state income tax?",
    answer:
      "No. Nevada has no state income tax, which is one of the primary financial advantages for retirees moving to Del Webb North Ranch. Combined with the affordable HOA and no special improvement districts, retirement dollars stretch significantly further in Nevada than in states like California.",
  },
  {
    question: "Is Del Webb North Ranch age-restricted?",
    answer:
      "Yes. Del Webb North Ranch is a 55+ age-restricted active adult community. At least one resident of each home must be 55 or older to qualify under federal Fair Housing Act guidelines for housing for older persons (HOPA).",
  },
  {
    question: "Who is Dr. Jan Duffy?",
    answer:
      "Dr. Jan Duffy is an independent REALTOR® with Berkshire Hathaway HomeServices Nevada Properties (License S.0197614.LLC) who specializes exclusively in Del Webb North Ranch. Unlike builder sales representatives, she works as a buyer's advocate — providing independent guidance on floor plans, homesites, and resale homes without the conflict of interest of a builder's agent.",
  },
  {
    question: "What are the prices of homes at Del Webb North Ranch?",
    answer:
      "Homes at Del Webb North Ranch are currently priced from approximately $400,000 to $600,000. Resale homes on the MLS have listed from the high $300s to over $625,000 depending on floor plan, homesite, and upgrades. Contact Dr. Jan Duffy at (702) 500-1064 for current availability.",
  },
  {
    question: "Where is Del Webb North Ranch located?",
    answer:
      "Del Webb North Ranch is located at 2290 Beauty Vista Avenue, North Las Vegas, NV 89086. The community is approximately 20 minutes from the Las Vegas Strip and close to shopping, healthcare, and outdoor recreation including access to mountain views and trails.",
  },
];

export function getHomepageFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaq.map((item) => ({
      "@type": "Question" as const,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.answer,
      },
    })),
  };
}
