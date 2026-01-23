import Script from 'next/script';

export default function SchemaMarkup() {
  const baseUrl = 'https://www.delwebbnorthranchhomes.com';

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy',
    alternateName: 'Dr. Jan Duffy Real Estate',
    url: baseUrl,
    logo: `${baseUrl}/images/logo/logo.svg`,
    telephone: '+1-702-500-1064',
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
  };

  // WebSite Schema with SearchAction (enables sitelinks search box)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
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

  // RealEstateAgent Schema
  const realEstateAgentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    alternateName: 'Dr. Janet Duffy',
    url: baseUrl,
    image: `${baseUrl}/images/about/dr-jan-duffy.jpg`,
    telephone: '+1-702-500-1064',
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
      {
        '@type': 'City',
        name: 'North Las Vegas',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Clark County',
        addressRegion: 'NV',
      },
    ],
    priceRange: '$400,000-$600,000',
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
        id="realestateagent-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateAgentSchema).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
