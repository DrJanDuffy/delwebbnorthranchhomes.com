import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CANONICAL_HOMEPAGE, SITE_ORIGIN, GOOGLE_MAPS_DIRECTIONS_URL, SITE_PHONE_SCHEMA } from "@/lib/site";
import "./globals.css";
import CalendlyButton from "@/../components/CalendlyButton";
import CalendlyStyles from "@/../components/CalendlyStyles";
import SchemaMarkup from "@/../components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    template: "%s | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
  },
  description:
    "Discover luxury single-story living in a vibrant 55+ community with mountain views, resort-style amenities, and no state income tax. Dr. Jan Duffy, REALTOR®.",
  keywords: [
    "Del Webb North Ranch",
    "Del Webb at North Ranch",
    "Del Webb North Las Vegas",
    "Del Webb Las Vegas",
    "Del Webb North Ranch homes for sale",
    "Del Webb 55+ communities",
    "Del Webb communities Las Vegas",
    "Del Webb Las Vegas Nevada",
    "55+ community",
    "North Las Vegas",
    "active adult community",
    "senior living",
    "single-story homes",
    "Dr. Jan Duffy",
    "REALTOR",
    "luxury homes",
    "resort-style amenities",
    "gated community",
    "North Las Vegas real estate",
    "55+ homes for sale",
  ],
  authors: [{ name: "Dr. Jan Duffy" }],
  creator: "Dr. Jan Duffy",
  publisher: "Berkshire Hathaway HomeServices Nevada Properties",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_ORIGIN,
    siteName: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    title: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    description:
      "Single-story homes from $400K-$600K in a gated 55+ community. Resort pool, pickleball, fitness center—all fully built.",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Del Webb North Ranch community entrance",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    description:
      "Single-story homes from $400K-$600K in a gated 55+ community. Resort pool, pickleball, fitness center—all fully built.",
    images: ["/images/hero/hero-bg.jpg"],
    creator: "@DrDuffy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: CANONICAL_HOMEPAGE,
  },
  verification: {
    // Paste your GSC meta tag content from Search Console > Settings > Verification
    // Example: google: "abc123xyz",
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // LocalBusiness Schema – matches Google Business Profile (NAP, hours, description, attributes)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_ORIGIN}/#localbusiness`,
    name: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    alternateName: "Dr. Jan Duffy Real Estate",
    description: "Helping buyers 55+ find their dream retirement home in Las Vegas' premier active adult community! Why Choose Del Webb North Ranch? Resort-style pools and luxurious spa facilities, state-of-the-art fitness center, pickleball courts with organized leagues, 20+ social clubs and activities to stay connected, stunning mountain views and convenient access to shopping, dining, and healthcare. Services: Free community tours and personalized home showings, market analysis and pricing guidance, alerts on new listings and inventory updates, expert negotiation and closing support. Available 7 days a week for consultations and property viewings. Contact us to find your perfect home in Del Webb North Ranch.",
    image: `${SITE_ORIGIN}/images/about/dr-jan-duffy.jpg`,
    url: SITE_ORIGIN,
    telephone: SITE_PHONE_SCHEMA,
    email: "sales@delwebbnorthranchhomes.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2290 Beauty Vista Avenue",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89086",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Place",
      name: "North Las Vegas, NV, USA",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2290 Beauty Vista Avenue",
        addressLocality: "North Las Vegas",
        addressRegion: "NV",
        postalCode: "89086",
        addressCountry: "US",
      },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "06:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        validFrom: "2026-02-16",
        validThrough: "2026-02-16",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    foundingDate: "2009-09-20",
    womanOwned: true,
    veteranOwned: true,
    priceRange: "$$",
    paymentAccepted: "Cash, Check, Credit Card, Financing",
    currenciesAccepted: "USD",
    sameAs: [
      "https://www.facebook.com/DellWebbNorthRanch",
      "https://www.linkedin.com/company/del-webb-north-ranch-homes",
      "https://www.instagram.com/delwebbnorthranchhomes/",
    ],
    hasMap: GOOGLE_MAPS_DIRECTIONS_URL.replace("/dir//", "/search/?api=1&query=").replace(/\+/g, "+"),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
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
    additionalType: [
      "https://schema.org/RealEstateAgent",
      "https://schema.org/RealEstateAgency",
      "https://schema.org/RealEstateConsultant",
    ],
    knowsAbout: [
      "Del Webb North Ranch",
      "55+ Active Adult Communities",
      "North Las Vegas Real Estate",
      "Senior Living",
      "Retirement Homes",
    ],
    memberOf: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      credentialNumber: "S.0197614.LLC",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
    },
  };

  // Place Schema for Local SEO (Community Location)
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Del Webb North Ranch",
    description: "55+ Active Adult Gated Community in North Las Vegas",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2290 Beauty Vista Avenue",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89086",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.2856",
      longitude: "-115.0939",
    },
    url: SITE_ORIGIN,
    image: `${SITE_ORIGIN}/images/hero/hero-bg.jpg`,
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Resource hints first so the browser discovers them before other blocking resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://static.matterport.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://static.matterport.com" />
        <link rel="icon" href="/favicon.ico" />
        {/* Calendly CSS: load non-blocking so it doesn't delay FCP/LCP */}
        <CalendlyStyles />
        {/* Structured Data - Consolidated Schema Markup */}
        <SchemaMarkup />
        {/* Structured Data - LocalBusiness (Google Business Profile) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        {/* Structured Data - Place (Local SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(placeSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* RealScout script is loaded by RealScoutListings when section is in viewport (keeps LCP/fonts off critical path) */}
        {/* RealScout Widget Styles - Global styles for all widgets */}
        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-office-listings {
              --rs-listing-divider-color: #0e64c8;
              width: 100%;
            }
            realscout-home-value {
              --rs-hvw-background-color: #ffffff;
              --rs-hvw-title-color: #000000;
              --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
              --rs-hvw-primary-button-text-color: #ffffff;
              --rs-hvw-primary-button-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-color: #ffffff;
              --rs-hvw-widget-width: auto;
            }
          `
        }} />
        {/* Calendly Floating Button - Custom styled button */}
        <CalendlyButton />
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
