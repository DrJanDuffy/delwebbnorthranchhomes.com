import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import { Phone } from "lucide-react";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import { getDelWebbListings } from "@/lib/listings";
import ListingsPageClient from "@/components/listings-page-client";
import MortgageCalculator from "@/../components/MortgageCalculator";
import RealScoutListings from "@/../components/RealScoutListings";
import { getCommunityInfo } from "@/lib/communityData";
// import HomesForSaleWidget from "@/../components/HomesForSaleWidget";

export const metadata: Metadata = {
  title: "Homes for Sale | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
  description:
    "Browse current homes for sale in Del Webb North Ranch, a 55+ active adult community in North Las Vegas. Resale homes from $400K-$600K.",
  alternates: {
    canonical: "https://www.delwebbnorthranchhomes.com/homes-for-sale",
  },
  openGraph: {
    title: "Homes for Sale | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    description:
      "Browse current homes for sale in Del Webb North Ranch, a 55+ active adult community in North Las Vegas. Resale homes from $400K-$600K.",
    url: "https://www.delwebbnorthranchhomes.com/homes-for-sale",
    siteName: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.delwebbnorthranchhomes.com/images/amenities/resort-pool.jpeg",
        width: 1200,
        height: 630,
        alt: "Del Webb North Ranch homes for sale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homes for Sale | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    description: "Browse current homes for sale in Del Webb North Ranch 55+ community. Resale homes from $400K-$600K.",
    images: ["https://www.delwebbnorthranchhomes.com/images/amenities/resort-pool.jpeg"],
  },
};

export default async function HomesForSalePage() {
  const listings = await getDelWebbListings();
  const communityInfo = getCommunityInfo();

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Homes for Sale", href: "/homes-for-sale" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Homes for Sale in Del Webb North Ranch | North Las Vegas 55+ Community
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                Browse current listings updated daily from the MLS. Explore <Link href="/floor-plans" className="text-white hover:text-gray-200 underline">9 floor plans</Link> available or learn about the <Link href="/amenities" className="text-white hover:text-gray-200 underline">resort-style amenities</Link> included with every home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Link href="#listings">View Listings</Link>
                </Button>
                <a
                  href="tel:7025001064"
                  className="flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (702) 500-1064
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Listings - Main Lead Generator - Prominently placed after hero */}
        <RealScoutListings h2Text="View Current Homes for Sale in Del Webb North Ranch | North Las Vegas 55+ Community" />

        {/* CTA Cards Section */}
        <section className="py-12 md:py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="https://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow group"
                >
                  <h3 className="text-2xl font-bold text-primary mb-4 font-playfair group-hover:text-accent transition-colors">
                    Search All Homes
                  </h3>
                  <p className="text-text-dark mb-6">
                    Access the complete MLS database and search all available homes in Del Webb North Ranch.
                  </p>
                  <Button variant="accent" size="lg" className="w-full">
                    Start Your Search
                  </Button>
                </a>
                <a
                  href="https://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow group"
                >
                  <h3 className="text-2xl font-bold text-primary mb-4 font-playfair group-hover:text-accent transition-colors">
                    Get New Listing Alerts
                  </h3>
                  <p className="text-text-dark mb-6">
                    Be the first to know when new homes hit the market. Set up custom alerts for your perfect home.
                  </p>
                  <Button variant="accent" size="lg" className="w-full">
                    Set Up Alerts
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Dr. Jan Duffy Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Why Work With Dr. Jan Duffy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Local Expertise
                  </h3>
                  <p className="text-text-dark">
                    Deep knowledge of Del Webb North Ranch and the North Las Vegas real estate market.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Personalized Service
                  </h3>
                  <p className="text-text-dark">
                    Dedicated to understanding your unique needs and finding your perfect 55+ home.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Proven Results
                  </h3>
                  <p className="text-text-dark">
                    Successfully helping active adults find their dream homes in Del Webb North Ranch.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Full-Service Support
                  </h3>
                  <p className="text-text-dark">
                    From initial search through closing, we guide you every step of the way.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Market Insights
                  </h3>
                  <p className="text-text-dark">
                    Access to current market trends, pricing data, and neighborhood information.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Responsive Communication
                  </h3>
                  <p className="text-text-dark">
                    Quick responses to your questions and regular updates on your home search.
                  </p>
                </div>
              </div>
              <div className="text-center bg-amber-50 p-8 rounded-lg border-2 border-amber-200">
                <p className="text-lg font-semibold text-primary mb-4">
                  Ready to find your perfect home?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:7025001064"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call (702) 500-1064
                  </a>
                  <Button asChild variant="accent" size="lg">
                    <Link href="/contact">Schedule a Tour</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mortgage Calculator Section */}
        <MortgageCalculator />

        {/* Quick Info Section */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Why Choose Del Webb North Ranch?
              </h2>
              <p className="text-center text-text-dark mb-6 max-w-2xl mx-auto">
                Discover the <Link href="/amenities" className="text-primary hover:text-accent underline">resort-style amenities</Link> and <Link href="/lifestyle" className="text-primary hover:text-accent underline">active adult lifestyle</Link> that make this community special.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Price Range
                  </h3>
                  <p className="text-2xl font-semibold text-primary mb-2">
                    {communityInfo.priceRange}
                  </p>
                  <p className="text-text-dark">
                    Competitive pricing for luxury 55+ living
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Total Homes
                  </h3>
                  <p className="text-2xl font-semibold text-primary mb-2">{communityInfo.totalHomes}</p>
                  <p className="text-text-dark">
                    Single-family residences in a gated community
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    HOA Fee
                  </h3>
                  <p className="text-2xl font-semibold text-primary mb-2">
                    {communityInfo.hoaFee}
                  </p>
                  <p className="text-text-dark">{communityInfo.sidLid === 'None' ? 'No SIDs or LIDs' : communityInfo.sidLid}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
