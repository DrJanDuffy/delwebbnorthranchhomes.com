import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  title: "Del Webb North Ranch | 55+ Luxury Homes from $400K-$600K | North Las Vegas",
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
  ],
  authors: [{ name: "Dr. Jan Duffy" }],
  openGraph: {
    title: "Del Webb North Ranch | 55+ Luxury Homes | North Las Vegas",
    description:
      "Single-story homes from $400K-$600K in a gated 55+ community. Resort pool, pickleball, fitness center—all fully built.",
    url: "https://delwebbnorthranchhomes.com",
    siteName: "Del Webb North Ranch Homes",
    locale: "en_US",
    type: "website",
    // TODO: Add OpenGraph image
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Del Webb North Ranch | 55+ Luxury Homes | North Las Vegas",
    description:
      "Single-story homes from $400K-$600K in a gated 55+ community. Resort pool, pickleball, fitness center—all fully built.",
    // TODO: Add Twitter image
    // images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://delwebbnorthranchhomes.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy",
    description:
      "Del Webb North Ranch homes specialist serving 55+ active adult buyers in North Las Vegas",
    url: "https://delwebbnorthranchhomes.com",
    telephone: "+1-702-500-1064",
    email: "sales@delwebbnorthranchhomes.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2290 Beauty Vista Avenue",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89086",
    },
    areaServed: {
      "@type": "Place",
      name: "Del Webb North Ranch, North Las Vegas, Nevada",
    },
    broker: {
      "@type": "RealEstateAgent",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
