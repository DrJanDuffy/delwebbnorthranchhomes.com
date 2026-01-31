import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/../components/ui/button";
import { Phone, TrendingUp, FileText, Calendar, Home, CheckCircle } from "lucide-react";
import { SITE_ORIGIN } from "@/lib/site";
import { altPrefix, metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { sellerCtaCopy, sellerFaq, sellerValueProps } from "@/lib/hyperlocalSeller";

const sellerFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sellerFaq.map((q) => ({
    "@type": "Question" as const,
    name: q.question,
    acceptedAnswer: { "@type": "Answer" as const, text: q.answer },
  })),
};

export const metadata: Metadata = {
  title: `For Sellers | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Sell your Del Webb North Ranch or North Las Vegas home. Free home value estimate and expert 55+ resale guidance"
  ),
  alternates: { canonical: `${SITE_ORIGIN}/sellers` },
  openGraph: {
    title: `For Sellers | ${TITLE_SUFFIX}`,
    description: sellerCtaCopy.metaHighlight,
    url: `${SITE_ORIGIN}/sellers`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [
      { url: `${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`, width: 1200, height: 630, alt: altPrefix("Resort pool") },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `For Sellers | ${TITLE_SUFFIX}`,
    description: sellerCtaCopy.metaHighlight,
  },
};

export default function SellersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sellerFaqSchema) }}
        />
        <Breadcrumbs
          items={[
            { label: "Del Webb North Ranch", href: "/" },
            { label: "For Sellers", href: "/sellers" },
          ]}
        />
        {/* Hero */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                For Sellers: North Las Vegas & Del Webb North Ranch
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                {sellerCtaCopy.metaHighlight} Get a free home value estimate and expert guidance for 55+ resale in North Las Vegas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild variant="accent" size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/home-value">{sellerCtaCopy.primary}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">{sellerCtaCopy.secondary}</Link>
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
                Why List With Dr. Jan Duffy?
              </h2>
              <ul className="space-y-4">
                {sellerValueProps.map((prop, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-dark">{prop}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Your Next Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  href="/home-value"
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-two hover:shadow-three transition-shadow group"
                >
                  <TrendingUp className="w-10 h-10 text-primary mb-3 group-hover:text-accent transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">Get Your Home Value</h3>
                  <p className="text-text-dark text-sm">Free, instant estimate for your Del Webb North Ranch or North Las Vegas property</p>
                </Link>
                <Link
                  href="/contact"
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-two hover:shadow-three transition-shadow group"
                >
                  <Calendar className="w-10 h-10 text-primary mb-3 group-hover:text-accent transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">Schedule a Consultation</h3>
                  <p className="text-text-dark text-sm">Discuss pricing, marketing, and timeline with a local 55+ resale expert</p>
                </Link>
                <Link
                  href="/homes-for-sale"
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-two hover:shadow-three transition-shadow group"
                >
                  <Home className="w-10 h-10 text-primary mb-3 group-hover:text-accent transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">See Current Listings</h3>
                  <p className="text-text-dark text-sm">Compare your home to active listings in Del Webb North Ranch</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seller FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Seller Questions: North Las Vegas Home Value
              </h2>
              <dl className="space-y-6">
                {sellerFaq.map((item, i) => (
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
                Ready to Sell Your North Las Vegas Home?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                {sellerCtaCopy.primary} or call (702) 500-1064 to speak with Dr. Jan Duffy.
              </p>
              <Button asChild variant="accent" size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/home-value">{sellerCtaCopy.primary}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
