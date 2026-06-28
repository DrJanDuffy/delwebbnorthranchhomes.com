/**
 * Shared JSON-LD schema blocks for SEO, GEO, and AEO.
 * Used in layout.tsx and page-level structured data.
 */

import { SITE_ORIGIN, SITE_PHONE_SCHEMA, GBP_AGGREGATE_RATING } from "@/lib/site";

const COMMUNITY_ADDRESS = {
  "@type": "PostalAddress" as const,
  streetAddress: "2290 Beauty Vista Avenue",
  addressLocality: "North Las Vegas",
  addressRegion: "NV",
  postalCode: "89086",
  addressCountry: "US",
};

const COMMUNITY_GEO = {
  "@type": "GeoCoordinates" as const,
  latitude: 36.3044,
  longitude: -115.1373,
};

/** Schema Block A — LocalBusiness + RealEstateAgent (homepage / global) */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${SITE_ORIGIN}/#business`,
    name: "Del Webb North Ranch 55+ Real Estate | Dr. Jan Duffy",
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/images/logo/logo.svg`,
    image: `${SITE_ORIGIN}/images/about/dr-jan-duffy.jpg`,
    telephone: SITE_PHONE_SCHEMA,
    email: "jan@delwebbnorthranchhomes.com",
    address: COMMUNITY_ADDRESS,
    geo: COMMUNITY_GEO,
    areaServed: [
      {
        "@type": "City",
        name: "North Las Vegas",
        sameAs: "https://en.wikipedia.org/wiki/North_Las_Vegas,_Nevada",
      },
    ],
    serviceType: "Real Estate Sales — 55+ Active Adult Communities",
    priceRange: "$400,000–$600,000",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/DellWebbNorthRanch",
      "https://www.instagram.com/delwebbnorthranchhomes/",
      "https://www.linkedin.com/company/del-webb-north-ranch-homes",
      "https://www.youtube.com/@DrDuffy",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GBP_AGGREGATE_RATING.ratingValue,
      reviewCount: GBP_AGGREGATE_RATING.reviewCount,
      bestRating: "5",
    },
    memberOf: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
      url: "https://heyberkshirehomes.com",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Nevada Real Estate License",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
      identifier: "S.0197614.LLC",
    },
  };
}

/** Schema Block C — Residence (community as housing development) */
export function getResidenceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    "@id": `${SITE_ORIGIN}/#community`,
    name: "Del Webb North Ranch",
    description:
      "A gated 55+ active adult community in North Las Vegas, NV with 394 single-story homes on 80 acres. Resort-style amenities including clubhouse, pool, fitness center, and pickleball courts.",
    address: COMMUNITY_ADDRESS,
    geo: COMMUNITY_GEO,
    numberOfRooms: "2-3",
    floorSize: {
      "@type": "QuantitativeValue",
      minValue: 1285,
      maxValue: 2015,
      unitText: "square feet",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Resort-Style Pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Heated Lap Pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fitness Center", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pickleball Courts", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bocce Courts", value: true },
      { "@type": "LocationFeatureSpecification", name: "10,000 Sq Ft Clubhouse", value: true },
      { "@type": "LocationFeatureSpecification", name: "Gated Community", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 Security", value: true },
      { "@type": "LocationFeatureSpecification", name: "Billiards Room", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Firepit", value: true },
      { "@type": "LocationFeatureSpecification", name: "Walking Trails", value: true },
      { "@type": "LocationFeatureSpecification", name: "Mountain Views", value: true },
    ],
    url: SITE_ORIGIN,
  };
}

/** House schema for individual floor plan pages */
export function getHouseSchema({
  name,
  description,
  sqft,
  beds,
  baths,
  slug,
}: {
  name: string;
  description: string;
  sqft: number;
  beds: number;
  baths: number;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "House",
    name: `${name} at Del Webb North Ranch`,
    description,
    floorSize: {
      "@type": "QuantitativeValue",
      value: sqft,
      unitText: "square feet",
    },
    numberOfRooms: beds,
    numberOfBathroomsTotal: baths,
    address: {
      "@type": "PostalAddress",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89086",
    },
    url: `${SITE_ORIGIN}/floor-plans/${slug}`,
  };
}

export function stringifySchema(schema: object): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
