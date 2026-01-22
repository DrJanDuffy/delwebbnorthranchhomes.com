import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import { Phone } from "lucide-react";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import { getDelWebbListings } from "@/lib/listings";
import ListingsPageClient from "@/components/listings-page-client";
// import HomesForSaleWidget from "@/../components/HomesForSaleWidget";

export const metadata: Metadata = {
  title: "Homes for Sale | Del Webb North Ranch | North Las Vegas",
  description:
    "Browse available homes for sale in Del Webb North Ranch, a premier 55+ community in North Las Vegas. Single-story homes from $400K-$600K. Contact Dr. Jan Duffy to schedule a tour.",
  alternates: {
    canonical: "https://delwebbnorthranchhomes.com/homes-for-sale",
  },
  openGraph: {
    title: "Homes for Sale | Del Webb North Ranch | North Las Vegas",
    description:
      "Browse available single-story homes in Del Webb North Ranch 55+ community. Homes from $400K-$600K.",
    url: "https://delwebbnorthranchhomes.com/homes-for-sale",
    siteName: "Del Webb North Ranch Homes",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://delwebbnorthranchhomes.com/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Del Webb North Ranch homes for sale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homes for Sale | Del Webb North Ranch",
    description: "Browse available homes in North Las Vegas premier 55+ community.",
    images: ["https://delwebbnorthranchhomes.com/images/hero/hero-bg.jpg"],
  },
};

export default async function HomesForSalePage() {
  const listings = await getDelWebbListings();

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Homes for Sale in Del Webb North Ranch
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                Discover available single-story homes in North Las Vegas's premier
                55+ community. All homes feature 2-3 bedrooms, 2-2.5 baths, and
                2-car garages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  <Link href="#listings">View Listings</Link>
                </Button>
                <a
                  href="tel:7025001064"
                  className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (702) 500-1064
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Widget - Option to replace or supplement listings */}
        {/* Uncomment to use RealScout widget instead of mock listings */}
        {/* <HomesForSaleWidget /> */}

        {/* Listings Grid Section */}
        <section id="listings" className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Browse Available Homes
              </h2>
              <p className="text-center text-text-dark mb-8 max-w-2xl mx-auto">
                Explore available homes in Del Webb North Ranch. All listings are
                updated in real-time.
              </p>

              <ListingsPageClient initialListings={listings} />

              {/* Alternative CTA */}
              <div className="mt-12 text-center">
                <p className="text-text-dark mb-4">
                  Don't see what you're looking for? Prefer to speak with someone
                  directly?
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Dr. Jan Duffy</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Why Choose Del Webb North Ranch?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Price Range
                  </h3>
                  <p className="text-2xl font-semibold text-accent mb-2">
                    $400K - $600K
                  </p>
                  <p className="text-text-dark">
                    Competitive pricing for luxury 55+ living
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Total Homes
                  </h3>
                  <p className="text-2xl font-semibold text-accent mb-2">394</p>
                  <p className="text-text-dark">
                    Single-family residences in a gated community
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    HOA Fee
                  </h3>
                  <p className="text-2xl font-semibold text-accent mb-2">
                    $215/mo
                  </p>
                  <p className="text-text-dark">No SIDs or LIDs</p>
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
