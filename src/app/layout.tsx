import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CalendlyButton from "@/../components/CalendlyButton";

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
    default: "Del Webb North Ranch | 55+ Luxury Homes from $400K-$600K | North Las Vegas",
    template: "%s | Del Webb North Ranch",
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
    siteName: "Del Webb North Ranch Homes",
    title: "Del Webb North Ranch | 55+ Luxury Homes | North Las Vegas",
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
    title: "Del Webb North Ranch | 55+ Luxury Homes | North Las Vegas",
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
  // RealEstateAgent Schema
  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy",
    alternateName: "Dr. Janet Duffy",
    telephone: "+1-702-500-1064",
    email: "sales@delwebbnorthranchhomes.com",
    url: "https://www.delwebbnorthranchhomes.com",
    image: "https://www.delwebbnorthranchhomes.com/images/about/dr-jan-duffy.jpg",
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
    },
    knowsAbout: [
      "Del Webb North Ranch",
      "55+ Active Adult Communities",
      "North Las Vegas Real Estate",
      "Senior Living",
    ],
    memberOf: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
    },
  };

  // Organization Schema (Brokerage)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.delwebbnorthranchhomes.com/#organization",
    name: "Dr. Jan Duffy Real Estate",
    url: "https://www.delwebbnorthranchhomes.com",
    logo: "https://www.delwebbnorthranchhomes.com/images/logo/logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-702-500-1064",
      contactType: "Sales",
      areaServed: "US",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "2290 Beauty Vista Avenue",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89086",
      addressCountry: "US",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Del Webb North Ranch Homes",
    url: "https://www.delwebbnorthranchhomes.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.delwebbnorthranchhomes.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Jan Duffy Real Estate",
      logo: {
        "@type": "ImageObject",
        url: "https://www.delwebbnorthranchhomes.com/images/logo/logo.svg",
      },
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Calendly Badge Widget CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        {/* Structured Data - RealEstateAgent */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(realEstateAgentSchema).replace(/</g, "\\u003c"),
          }}
        />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
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
