import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CANONICAL_HOMEPAGE, SITE_ORIGIN } from "@/lib/site";
import { getLocalBusinessSchema, getResidenceSchema, stringifySchema } from "@/lib/schema";
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
  const localBusinessSchema = getLocalBusinessSchema();
  const residenceSchema = getResidenceSchema();

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
        {/* Structured Data - LocalBusiness + RealEstateAgent */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifySchema(localBusinessSchema),
          }}
        />
        {/* Structured Data - Residence (Community) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifySchema(residenceSchema),
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
