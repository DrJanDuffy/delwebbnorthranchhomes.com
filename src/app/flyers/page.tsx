import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { Button } from "@/../components/ui/button";
import { getAllFlyers } from "@/lib/flyers";

export const metadata: Metadata = {
  title: "Community Flyers & Brochures | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
  description:
    "Download printable flyers and brochures about Del Webb North Ranch, a premier 55+ active adult community in North Las Vegas. Get community information, floor plans, and amenities.",
  alternates: {
    canonical: "https://www.delwebbnorthranchhomes.com/flyers",
  },
  openGraph: {
    title: "Community Flyers & Brochures | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    description:
      "Download printable flyers and brochures about Del Webb North Ranch 55+ community.",
    url: "https://www.delwebbnorthranchhomes.com/flyers",
    siteName: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
  },
};

export default function FlyersPage() {
  const flyers = getAllFlyers();
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Flyers & Brochures", href: "/flyers" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Community Flyers & Brochures
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Download printable flyers and brochures about Del Webb North Ranch. Share with friends and family or keep for your records.
              </p>
            </div>
          </div>
        </section>

        {/* Flyers Grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {flyers.map((flyer) => (
                  <div
                    key={flyer.slug}
                    className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow border border-gray-200 overflow-hidden flex flex-col"
                  >
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                        <FileText className="w-8 h-8 text-primary" />
                      </div>
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {flyer.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                        {flyer.title}
                      </h3>
                      <p className="text-text-dark mb-6 flex-grow leading-relaxed">
                        {flyer.description}
                      </p>
                      <div className="flex flex-col gap-3">
                        <Button
                          asChild
                          variant="default"
                          className="w-full bg-primary hover:bg-primary/90"
                        >
                          <Link
                            href={`/flyers/${flyer.slug}`}
                            className="flex items-center justify-center gap-2"
                          >
                            View Details
                          </Link>
                        </Button>
                        <a
                          href={flyer.filePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary/5 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                Need More Information?
              </h2>
              <p className="text-lg text-text-dark mb-6">
                Contact Dr. Jan Duffy to schedule a private tour or get answers to your questions about Del Webb North Ranch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7025001064"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Call (702) 500-1064
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Schedule a Tour
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
