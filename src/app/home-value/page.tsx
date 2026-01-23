import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import { Home, TrendingUp, Calculator } from "lucide-react";
import { Button } from "@/../components/ui/button";

export const metadata: Metadata = {
  title: "Free Home Value Estimate | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
  description:
    "Get a free, instant home value estimate for your property. Dr. Jan Duffy provides accurate home valuations for Del Webb North Ranch and North Las Vegas area homes.",
  alternates: {
    canonical: "https://www.delwebbnorthranchhomes.com/home-value",
  },
  openGraph: {
    title: "Free Home Value Estimate | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    description:
      "Get a free, instant home value estimate for your property in Del Webb North Ranch and North Las Vegas.",
    url: "https://www.delwebbnorthranchhomes.com/home-value",
    siteName: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.delwebbnorthranchhomes.com/images/amenities/resort-pool.jpeg",
        width: 1200,
        height: 630,
        alt: "Del Webb North Ranch home value estimate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Home Value Estimate | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    description: "Get a free, instant home value estimate for your property.",
    images: ["https://www.delwebbnorthranchhomes.com/images/amenities/resort-pool.jpeg"],
  },
};

export default function HomeValuePage() {
  // RealScout Home Value Widget HTML
  const widgetHtml = `<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw" include-name include-phone></realscout-home-value>`;

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Home Value", href: "/home-value" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 mx-auto">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Free Home Value Estimate
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Get an instant, accurate estimate of your home's current market value. Perfect for planning your next move to Del Webb North Ranch.
              </p>
            </div>
          </div>
        </section>

        {/* Home Value Widget Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-three border border-gray-200 p-6 md:p-8">
                {/* RealScout Home Value Widget - Using dangerouslySetInnerHTML per integration rules */}
                <div 
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: widgetHtml }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Why Get a Home Value Estimate?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <Home className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Plan Your Move
                  </h3>
                  <p className="text-text-dark">
                    Understand your home's value to make informed decisions about your next purchase at Del Webb North Ranch.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Market Insights
                  </h3>
                  <p className="text-text-dark">
                    Get current market data and trends to understand how your property compares to similar homes in the area.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Accurate Estimates
                  </h3>
                  <p className="text-text-dark">
                    Receive data-driven estimates based on recent sales, market trends, and property characteristics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                What's Next?
              </h2>
              <div className="bg-bg-light rounded-lg p-6 md:p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                      Get Your Estimate
                    </h3>
                    <p className="text-text-dark">
                      Use the tool above to get an instant estimate of your home's value.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                      Review Your Results
                    </h3>
                    <p className="text-text-dark">
                      Review your estimate and compare it with similar properties in your area.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                      Connect with Dr. Jan Duffy
                    </h3>
                    <p className="text-text-dark">
                      Schedule a consultation to discuss your home value, explore <Link href="/homes-for-sale" className="text-primary hover:text-accent underline">homes for sale</Link> in Del Webb North Ranch, or learn more about the <Link href="/floor-plans" className="text-primary hover:text-accent underline">floor plans</Link> available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Explore Del Webb North Ranch?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Once you know your home's value, let's discuss your options for finding your perfect 55+ home in Del Webb North Ranch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7025001064"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Call (702) 500-1064
                </a>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Explore More
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/homes-for-sale"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                    Homes for Sale
                  </h3>
                  <p className="text-text-dark text-sm">
                    View current listings in Del Webb North Ranch
                  </p>
                </Link>
                <Link
                  href="/floor-plans"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                    Floor Plans
                  </h3>
                  <p className="text-text-dark text-sm">
                    Explore all 9 floor plans available
                  </p>
                </Link>
                <Link
                  href="/amenities"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                    Amenities
                  </h3>
                  <p className="text-text-dark text-sm">
                    Resort-style community features
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
