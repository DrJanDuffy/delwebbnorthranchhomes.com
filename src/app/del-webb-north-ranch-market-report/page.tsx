import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import RealScoutListings from "@/../components/RealScoutListings";
import { Button } from "@/../components/ui/button";
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";
import { absolutePageTitle } from "@/lib/hyperlocal";
import { stringifySchema } from "@/lib/schema";

const REPORT_MONTH = "June 2026";
const PAGE_TITLE = `Del Webb North Ranch Market Report | ${REPORT_MONTH} | Prices, Days on Market, Active Listings`;
const PAGE_DESCRIPTION = `Current Del Webb North Ranch real estate market data — active listings, median price, days on market, and absorption rate. Updated monthly by Dr. Jan Duffy.`;

export const metadata: Metadata = {
  title: absolutePageTitle(PAGE_TITLE),
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/del-webb-north-ranch-market-report` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_ORIGIN}/del-webb-north-ranch-market-report`,
    siteName: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
  },
};

/** Update these figures monthly for GEO citation accuracy */
const marketStats = {
  activeListings: 9,
  medianListPrice: 459000,
  avgPricePerSqFt: 278,
  avgDaysOnMarket: 110,
  closedSalesLast30Days: 4,
  trendNote:
    "Inventory remains tight with under 10 active listings. Well-priced Cottage and Classic series homes are receiving offers within 30–45 days. Retreat series homes with premium lots command top-of-market pricing.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  author: {
    "@type": "Person",
    name: "Dr. Jan Duffy",
    jobTitle: "REALTOR® | Del Webb North Ranch Specialist",
  },
  datePublished: "2026-06-01",
  dateModified: "2026-06-28",
  about: {
    "@type": "Residence",
    name: "Del Webb North Ranch",
    url: SITE_ORIGIN,
  },
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function MarketReportPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(articleSchema) }}
        />
        <Breadcrumbs
          items={[
            { label: "Del Webb North Ranch", href: "/" },
            { label: "Market Report", href: "/del-webb-north-ranch-market-report" },
          ]}
        />

        <section className="bg-primary text-white py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair">
              Del Webb North Ranch Market Report — {REPORT_MONTH}
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Monthly market data for Del Webb North Ranch resale homes, compiled by Dr. Jan Duffy, independent REALTOR® and community specialist.
            </p>
          </div>
        </section>

        <RealScoutListings h2Text="Current Del Webb North Ranch Listings | North Las Vegas 55+ Homes for Sale" />

        <section className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          <p className="text-sm text-gray-500 mb-8">
            Data as of {REPORT_MONTH}. Figures reflect MLS-listed resale homes in Del Webb North Ranch, North Las Vegas, NV 89086. Contact Dr. Jan Duffy for real-time availability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg border border-stone-200 p-6 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1">Active Listings</p>
              <p className="text-3xl font-bold text-primary">{marketStats.activeListings}</p>
            </div>
            <div className="bg-white rounded-lg border border-stone-200 p-6 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1">Median List Price</p>
              <p className="text-3xl font-bold text-primary">{formatCurrency(marketStats.medianListPrice)}</p>
            </div>
            <div className="bg-white rounded-lg border border-stone-200 p-6 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1">Avg Price / Sq Ft</p>
              <p className="text-3xl font-bold text-primary">${marketStats.avgPricePerSqFt}</p>
            </div>
            <div className="bg-white rounded-lg border border-stone-200 p-6 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1">Avg Days on Market</p>
              <p className="text-3xl font-bold text-primary">{marketStats.avgDaysOnMarket}</p>
            </div>
            <div className="bg-white rounded-lg border border-stone-200 p-6 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1">Closed Sales (30 Days)</p>
              <p className="text-3xl font-bold text-primary">{marketStats.closedSalesLast30Days}</p>
            </div>
            <div className="bg-white rounded-lg border border-stone-200 p-6 shadow-sm sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-medium text-gray-500 mb-1">Price Range</p>
              <p className="text-2xl font-bold text-primary">$400K–$600K+</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4 font-playfair">Market Trend — {REPORT_MONTH}</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{marketStats.trendNote}</p>

          <h2 className="text-2xl font-bold text-primary mb-4 font-playfair">What This Means for Buyers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            With {marketStats.activeListings} active listings and a median price of {formatCurrency(marketStats.medianListPrice)}, Del Webb North Ranch remains a competitive 55+ market in North Las Vegas. Buyers should be prepared to act on well-priced homes within the first two weeks of listing. Dr. Jan Duffy provides instant alerts on new MLS listings in the community.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4 font-playfair">What This Means for Sellers</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Homes priced at or below the median with clean presentation and desirable floor plans are closing in 30–45 days. Overpricing extends days on market significantly in this community. Request a free home value estimate for a pricing strategy tailored to your floor plan and homesite.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="min-h-[44px]">
              <Link href="/home-value">Get a Free Home Value Estimate</Link>
            </Button>
            <Button asChild variant="outline" className="min-h-[44px]">
              <a href={SITE_PHONE_TEL}>Call {SITE_PHONE_DISPLAY}</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
