import { SITE_ORIGIN } from '@/lib/site';
import type { FloorPlan } from '@/lib/floor-plans';
import { communityInfo } from '@/lib/communityData';

export type FaqItem = { question: string; answer: string };

/** XSS-safe JSON-LD serialization for script tags. */
export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function buildFaqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question' as const,
      name: item.question,
      acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
    })),
  };
}

export function buildPlaceSchema(options?: {
  name?: string;
  description?: string;
  url?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${SITE_ORIGIN}/community#place`,
    name: options?.name ?? communityInfo.name,
    description:
      options?.description ??
      'Del Webb North Ranch is a gated 55+ active adult community in North Las Vegas, NV 89086 with resort-style amenities and single-story homes.',
    url: options?.url ?? `${SITE_ORIGIN}/community`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: communityInfo.address,
      addressLocality: communityInfo.city,
      addressRegion: communityInfo.state,
      postalCode: communityInfo.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.3042,
      longitude: -115.1765,
    },
  };
}

export function buildRealEstateListingSchema(plan: FloorPlan) {
  const url = `${SITE_ORIGIN}/floor-plans/${plan.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    url,
    name: `${plan.name} Floor Plan | Del Webb North Ranch`,
    description: `${plan.description} ${plan.series} Series ${plan.sqft} sq ft home in Del Webb North Ranch, a 55+ community in North Las Vegas, NV.`,
    datePosted: '2024-01-01T00:00:00-08:00',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_ORIGIN}/schedule`,
    },
  };
}

export function buildArticleSchema(options: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.headline,
    description: options.description,
    url: options.url,
    image: options.image,
    ...(options.datePublished ? { datePublished: options.datePublished } : {}),
    ...(options.dateModified ? { dateModified: options.dateModified } : {}),
    author: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      url: `${SITE_ORIGIN}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy',
      url: SITE_ORIGIN,
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
