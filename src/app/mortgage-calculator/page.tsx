import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import MortgageCalculator from "@/../components/MortgageCalculator";
import RealScoutListings from "@/../components/RealScoutListings";
import { Button } from "@/../components/ui/button";
import { SITE_ORIGIN } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: `Mortgage Calculator | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Estimate your monthly payment for a home in Del Webb North Ranch. Free mortgage calculator with HOA, taxes, and North Las Vegas rates"
  ),
  alternates: { canonical: `${SITE_ORIGIN}/mortgage-calculator` },
  openGraph: {
    title: `Mortgage Calculator | ${TITLE_SUFFIX}`,
    description: "Estimate your monthly payment for a Del Webb North Ranch home. Includes HOA, taxes, and insurance.",
    url: `${SITE_ORIGIN}/mortgage-calculator`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Mortgage Calculator | ${TITLE_SUFFIX}`,
    description: "Estimate your monthly payment for a North Las Vegas 55+ home.",
  },
};

export default function MortgageCalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs
          items={[
            { label: "Del Webb North Ranch", href: "/" },
            { label: "Mortgage Calculator", href: "/mortgage-calculator" },
          ]}
        />
        {/* Hero - exactly one H1 */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Calculator className="w-16 h-16 mx-auto mb-6 text-accent" aria-hidden />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Mortgage Calculator | Del Webb North Ranch & North Las Vegas
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Estimate your monthly payment for a home in Del Webb North Ranch. Includes principal, interest, taxes, insurance, and HOA.
              </p>
            </div>
          </div>
        </section>

        {/* Office RealScout widget - below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* Long-form: Del Webb North Ranch, H2/H3, 1500+ words */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-text-dark">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                Estimating Your Payment for a Del Webb North Ranch Home
              </h2>
              <p className="mb-6">
                Buying a home at Del Webb North Ranch means planning for principal, interest, property taxes, insurance, and HOA fees. North Ranch HOA is $215 per month (billed quarterly), and Nevada has no state income tax—so your overall housing and tax picture is different from many other states. Use the mortgage calculator below to estimate your monthly payment for a North Ranch home in the typical price range ($400K–$600K). The calculator includes options for down payment, interest rate, loan term, and North Las Vegas property taxes so you can see how a Del Webb North Ranch home fits your budget. When you&apos;re ready, view current homes for sale at Del Webb North Ranch in the listings above or schedule a tour with Dr. Jan Duffy.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                Why Use a Mortgage Calculator for North Ranch?
              </h3>
              <p className="mb-6">
                Del Webb North Ranch resale homes are priced in a range that many 55+ buyers find manageable—especially with a down payment and today&apos;s financing. Running the numbers before you tour helps you focus on North Ranch homes that fit your budget and avoid falling in love with a price point that doesn&apos;t work. The North Ranch community is in North Las Vegas zip code 89086, and property taxes and insurance vary—so the calculator lets you adjust those to get a realistic monthly payment for a Del Webb North Ranch home. This premier 55+ community in North Las Vegas is built for single-story living and active adult lifestyle; use the tool below to plan your move to North Ranch with confidence.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                Next Steps After Using the Del Webb North Ranch Mortgage Calculator
              </h2>
              <p className="mb-6">
                Once you&apos;ve estimated your payment for a Del Webb North Ranch home, browse current listings in the office widget above. North Ranch real estate includes single-story resale homes in the Cottage, Classic, and Retreat series. Schedule a tour to see the community, clubhouse, and available homes in person. Dr. Jan Duffy specializes in Del Webb North Ranch and North Las Vegas 55+ real estate—she can answer your questions about financing, HOA, and the buying process. North Ranch is a place to finally do everything you&apos;ve been putting off; take the first step by estimating your payment and then exploring homes for sale at Del Webb North Ranch.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white" aria-labelledby="calculator-heading">
          <div className="container mx-auto px-4">
            <h2 id="calculator-heading" className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair text-center">
              Use the Del Webb North Ranch Mortgage Calculator
            </h2>
          </div>
        </section>
        <MortgageCalculator />
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-text-dark mb-6">
                Ready to find your home? Browse current listings or schedule a tour.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="min-h-[48px]">
                  <Link href="/homes-for-sale">View Homes for Sale</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-[48px]">
                  <Link href="/schedule">Schedule a Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
