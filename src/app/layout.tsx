import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CalendlyButton from "@/../components/CalendlyButton";
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
  metadataBase: new URL("https://www.delwebbnorthranchhomes.com"),
  title: {
    default: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    template: "%s | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
  },
  description:
    "Discover luxury single-story living in a vibrant 55+ community with mountain views, resort-style amenities, and no state income tax. Dr. Jan Duffy, REALTOR®.",
  keywords: [
    "Del Webb North Ranch",
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
    url: "https://www.delwebbnorthranchhomes.com",
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
    canonical: "https://www.delwebbnorthranchhomes.com",
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // LocalBusiness Schema for Google Business Profile
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://www.delwebbnorthranchhomes.com/#localbusiness",
    name: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    alternateName: "Dr. Jan Duffy Real Estate",
    description: "Helping buyers 55+ find their dream retirement home in Las Vegas' premier active adult community! Resort-style pools, state-of-the-art fitness center, pickleball courts, 20+ social clubs & activities. Free community tours, market analysis, and expert negotiation support.",
    image: "https://www.delwebbnorthranchhomes.com/images/about/dr-jan-duffy.jpg",
    url: "https://www.delwebbnorthranchhomes.com",
    telephone: "+1-702-500-1064",
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
      "@type": "City",
      name: "North Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.2856",
      longitude: "-115.0939",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "06:00",
        closes: "21:00",
      },
    ],
    foundingDate: "2009-09-20",
    priceRange: "$$",
    paymentAccepted: "Cash, Check, Credit Card, Financing",
    currenciesAccepted: "USD",
    sameAs: [
      "https://www.instagram.com/delwebbnorthranchhomes/",
      "https://www.linkedin.com/company/del-webb-north-ranch-homes",
      "https://www.facebook.com/DellWebbNorthRanch",
    ],
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
    url: "https://www.delwebbnorthranchhomes.com",
    image: "https://www.delwebbnorthranchhomes.com/images/hero/hero-bg.jpg",
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Calendly Badge Widget CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
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
        {/* RealScout Web Components Script - Load once globally for all pages */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
          type="module"
        />
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
