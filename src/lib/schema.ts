/**
 * Shared JSON-LD schema blocks for SEO, GEO, and AEO.
 * Uses GBP constants from site.ts for NAP consistency.
 */

import {
  SITE_ORIGIN,
  SITE_PHONE_SCHEMA,
  SITE_EMAIL,
  GBP_AGGREGATE_RATING,
  GBP_BUSINESS_NAME,
  GBP_DESCRIPTION,
  GBP_FOUNDING_DATE,
  GBP_SERVICE_AREA,
  GBP_SOCIAL_PROFILES,
  GOOGLE_MAPS_DIRECTIONS_URL,
  gbpPostalAddressSchema,
  gbpOpeningHoursSpecification,
} from "@/lib/site";

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
    name: GBP_BUSINESS_NAME,
    alternateName: "Dr. Jan Duffy Real Estate",
    description: GBP_DESCRIPTION,
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/images/logo/logo.svg`,
    image: `${SITE_ORIGIN}/images/about/dr-jan-duffy.jpg`,
    telephone: SITE_PHONE_SCHEMA,
    email: SITE_EMAIL,
    address: gbpPostalAddressSchema(),
    geo: COMMUNITY_GEO,
    areaServed: [
      {
        "@type": "City",
        name: "North Las Vegas",
        sameAs: "https://en.wikipedia.org/wiki/North_Las_Vegas,_Nevada",
      },
      {
        "@type": "Place",
        name: GBP_SERVICE_AREA,
        address: gbpPostalAddressSchema(),
      },
    ],
    serviceType: "Real Estate Sales — 55+ Active Adult Communities",
    priceRange: "$400,000–$600,000",
    openingHoursSpecification: gbpOpeningHoursSpecification(),
    foundingDate: GBP_FOUNDING_DATE,
    womanOwned: true,
    veteranOwned: true,
    sameAs: [
      ...GBP_SOCIAL_PROFILES,
      "https://www.youtube.com/@DrDuffy",
    ],
    hasMap: GOOGLE_MAPS_DIRECTIONS_URL.replace("/dir//", "/search/?api=1&query=").replace(/\+/g, "+"),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GBP_AGGREGATE_RATING.ratingValue,
      reviewCount: GBP_AGGREGATE_RATING.reviewCount,
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Free Community Tours & Personalized Home Showings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Market Analysis & Pricing Guidance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Alerts on New Listings & Inventory Updates",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Expert Negotiation & Closing Support",
          },
        },
      ],
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
    knowsAbout: [
      "Del Webb North Ranch",
      "55+ Active Adult Communities",
      "North Las Vegas Real Estate",
      "Senior Living",
      "Retirement Homes",
    ],
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
    address: gbpPostalAddressSchema(),
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
