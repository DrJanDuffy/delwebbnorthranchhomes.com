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
    "Discover Del Webb North Ranch, North Las Vegas's premier 55+ community. Single-story homes from 1,285-2,015 sq ft with resort amenities. Tour with Dr. Jan Duffy today.",
  keywords: [
    "Del Webb North Ranch",
    "55+ community",
    "North Las Vegas",
    "active adult community",
    "senior living",
    "single-story homes",
    "Dr. Jan Duffy",
    "REALTOR",
  ],
  authors: [{ name: "Dr. Jan Duffy" }],
  openGraph: {
    title: "Del Webb North Ranch | 55+ Luxury Homes | North Las Vegas",
    description:
      "Discover Del Webb North Ranch, North Las Vegas's premier 55+ community. Single-story homes from 1,285-2,015 sq ft with resort amenities.",
    type: "website",
    url: "https://www.delwebbnorthranchhomes.com",
    // TODO: Add OpenGraph image
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Del Webb North Ranch | 55+ Luxury Homes | North Las Vegas",
    description:
      "Discover Del Webb North Ranch, North Las Vegas's premier 55+ community.",
    // TODO: Add Twitter image
    // images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.delwebbnorthranchhomes.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
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
