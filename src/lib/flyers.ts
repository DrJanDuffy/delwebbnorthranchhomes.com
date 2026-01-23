export type Flyer = {
  slug: string;
  title: string;
  description: string;
  filePath: string;
  category: string;
  content?: string;
};

export const flyers: Flyer[] = [
  {
    slug: "north-ranch-digital-brochure",
    title: "North Ranch Digital Brochure",
    description: "Complete community guide with floor plans, amenities, and community information for Del Webb North Ranch.",
    filePath: "/images/floor-plans/North Ranch Digital Brochure.pdf",
    category: "Community Guide",
    content: "This comprehensive brochure includes detailed information about Del Webb North Ranch, including all floor plans, community amenities, pricing information, and lifestyle features. Perfect for sharing with family and friends or keeping as a reference guide.",
  },
];

export function getFlyerBySlug(slug: string): Flyer | undefined {
  return flyers.find((flyer) => flyer.slug === slug);
}

export function getAllFlyers(): Flyer[] {
  return flyers;
}
