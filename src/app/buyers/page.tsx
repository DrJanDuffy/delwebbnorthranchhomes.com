import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/../components/ui/button";
import { Phone, Home, FileText, Calendar, Search, CheckCircle } from "lucide-react";
import { SITE_ORIGIN } from "@/lib/site";
import { altPrefix, metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { buyerCtaCopy, buyerFaq, buyerValueProps } from "@/lib/hyperlocalBuyer";
import { getCommunityInfo } from "@/lib/communityData";

const buyerFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: buyerFaq.map((q) => ({
    "@type": "Question" as const,
    name: q.question,
    acceptedAnswer: { "@type": "Answer" as const, text: q.answer },
  })),
};

export const metadata: Metadata = {
  title: `For Buyers | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Find your 55+ home in Del Webb North Ranch. Single-story homes, resort amenities, and a local expert for North Las Vegas buyers"
  ),
  alternates: { canonical: `${SITE_ORIGIN}/buyers` },
  openGraph: {
    title: `For Buyers | ${TITLE_SUFFIX}`,
    description: buyerCtaCopy.metaHighlight,
    url: `${SITE_ORIGIN}/buyers`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [
      { url: `${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`, width: 1200, height: 630, alt: altPrefix("Resort pool") },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `For Buyers | ${TITLE_SUFFIX}`,
    description: buyerCtaCopy.metaHighlight,
  },
};

export default function BuyersPage() {
  const communityInfo = getCommunityInfo();

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buyerFaqSchema) }}
        />
        <Breadcrumbs
          items={[
            { label: "Del Webb North Ranch", href: "/" },
            { label: "For Buyers", href: "/buyers" },
          ]}
        />
        {/* Hero */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                For Buyers: 55+ Homes in North Las Vegas
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                {buyerCtaCopy.metaHighlight} Del Webb North Ranch offers single-story resale homes, a 10,000 sq ft clubhouse, and resort-style amenities—all in a gated 55+ community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild variant="accent" size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/schedule">{buyerCtaCopy.primary}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/homes-for-sale">{buyerCtaCopy.secondary}</Link>
                </Button>
                <a href="tel:7025001064" className="flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  (702) 500-1064
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Why Buy at Del Webb North Ranch?
              </h2>
              <ul className="space-y-4">
                {buyerValueProps.map((prop, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-dark">{prop}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Quick stats */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Community at a Glance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <p className="text-2xl font-semibold text-primary mb-1">{communityInfo.priceRange}</p>
                  <p className="text-text-dark text-sm">Resale price range</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <p className="text-2xl font-semibold text-primary mb-1">{communityInfo.totalHomes}</p>
                  <p className="text-text-dark text-sm">Single-family homes</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <p className="text-2xl font-semibold text-primary mb-1">{communityInfo.hoaFee}</p>
                  <p className="text-text-dark text-sm">HOA (quarterly)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Your Next Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link
                  href="/homes-for-sale"
                  className="flex flex-col items-center text-center p-6 bg-bg-light rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <Search className="w-10 h-10 text-primary mb-3 group-hover:text-accent transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">View Listings</h3>
                  <p className="text-text-dark text-sm">Browse current homes for sale in Del Webb North Ranch</p>
                </Link>
                <Link
                  href="/floor-plans"
                  className="flex flex-col items-center text-center p-6 bg-bg-light rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <FileText className="w-10 h-10 text-primary mb-3 group-hover:text-accent transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">Floor Plans</h3>
                  <p className="text-text-dark text-sm">Explore 9 single-story floor plans (Cottage, Classic, Retreat)</p>
                </Link>
                <Link
                  href="/schedule"
                  className="flex flex-col items-center text-center p-6 bg-bg-light rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <Calendar className="w-10 h-10 text-primary mb-3 group-hover:text-accent transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">Schedule a Tour</h3>
                  <p className="text-text-dark text-sm">Book a private tour of the community and available homes</p>
                </Link>
                <Link
                  href="/contact"
                  className="flex flex-col items-center text-center p-6 bg-bg-light rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <Home className="w-10 h-10 text-primary mb-3 group-hover:text-accent transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">Contact Dr. Jan Duffy</h3>
                  <p className="text-text-dark text-sm">Questions? Get in touch for a personalized conversation</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Buyer FAQ */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Buyer Questions: North Las Vegas 55+ Homes
              </h2>
              <dl className="space-y-6">
                {buyerFaq.map((item, i) => (
                  <div key={i} className="border-b border-stone-200 pb-6 last:border-0 last:pb-0">
                    <dt className="text-lg font-semibold text-primary mb-2 font-playfair">{item.question}</dt>
                    <dd className="text-text-dark">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Find Your 55+ Home?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                {buyerCtaCopy.primary} or call (702) 500-1064 to speak with Dr. Jan Duffy.
              </p>
              <Button asChild variant="accent" size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/schedule">{buyerCtaCopy.primary}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
