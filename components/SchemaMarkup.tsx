import Script from 'next/script';
import { SITE_ORIGIN, SITE_PHONE_SCHEMA } from '@/lib/site';

export default function SchemaMarkup() {
  const baseUrl = SITE_ORIGIN;

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy',
    alternateName: 'Dr. Jan Duffy Real Estate',
    url: baseUrl,
    logo: `${baseUrl}/images/logo/logo.svg`,
    telephone: SITE_PHONE_SCHEMA,
    email: 'sales@delwebbnorthranchhomes.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2290 Beauty Vista Avenue',
      addressLocality: 'North Las Vegas',
      addressRegion: 'NV',
      postalCode: '89086',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.youtube.com/@DrDuffy',
      'https://www.instagram.com/delwebbnorthranchhomes/',
      'https://www.linkedin.com/company/del-webb-north-ranch-homes',
      'https://www.facebook.com/DellWebbNorthRanch',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    employee: {
      '@type': 'Person',
      '@id': `${baseUrl}/#agent`,
    },
  };

  // WebSite Schema with SearchAction (enables sitelinks search box)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/homes-for-sale?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo/logo.svg`,
      },
    },
  };

  // Person Schema (E-E-A-T: Schema Block B)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#agent`,
    name: 'Dr. Jan Duffy',
    honorificPrefix: 'Dr.',
    jobTitle: 'REALTOR® | Del Webb North Ranch Specialist',
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
      url: 'https://heyberkshirehomes.com',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Nevada Real Estate License',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Nevada Real Estate Division',
        },
        identifier: 'S.0197614.LLC',
      },
    ],
    telephone: SITE_PHONE_SCHEMA,
    url: baseUrl,
    image: `${baseUrl}/images/about/dr-jan-duffy.jpg`,
    sameAs: [
      'https://www.youtube.com/@DrDuffy',
      'https://www.linkedin.com/company/del-webb-north-ranch-homes',
    ],
    knowsAbout: [
      'Del Webb North Ranch',
      '55+ Active Adult Communities',
      'North Las Vegas Real Estate',
      'Single-Story Homes',
      'Nevada Real Estate',
    ],
  };

  // RealEstateAgent Schema (2026: knowsAbout for AI/voice and rich results)
  const realEstateAgentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${baseUrl}/#realestateagent`,
    name: 'Dr. Jan Duffy',
    alternateName: 'Dr. Jan Duffy Real Estate',
    url: baseUrl,
    image: `${baseUrl}/images/about/dr-jan-duffy.jpg`,
    telephone: SITE_PHONE_SCHEMA,
    email: 'sales@delwebbnorthranchhomes.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2290 Beauty Vista Avenue',
      addressLocality: 'North Las Vegas',
      addressRegion: 'NV',
      postalCode: '89086',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'North Las Vegas', addressRegion: 'NV' },
      { '@type': 'City', name: 'Las Vegas', addressRegion: 'NV' },
      { '@type': 'City', name: 'Henderson', addressRegion: 'NV' },
      { '@type': 'City', name: 'Clark County', addressRegion: 'NV' },
    ],
    priceRange: '$400,000-$600,000',
    knowsAbout: [
      'Del Webb North Ranch',
      '55+ active adult communities',
      'North Las Vegas real estate',
      'Senior living and retirement homes',
      'Single-story homes',
      'Resort-style amenities',
      'Gated 55+ community',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      credentialNumber: 'S.0197614.LLC',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
        }}
      />
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
        }}
      />
      <Script
        id="realestateagent-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateAgentSchema).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
