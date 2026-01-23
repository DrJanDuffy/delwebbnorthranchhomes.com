import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import Breadcrumbs from '@/../components/Breadcrumbs';
import FAQAccordion from '@/../components/FAQAccordion';
import { getAllQuestions } from '@/lib/faqData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy',
  description:
    'Find answers to frequently asked questions about Del Webb North Ranch, a 55+ active adult community in North Las Vegas. Learn about HOA fees, amenities, age requirements, and more.',
  alternates: {
    canonical: 'https://www.delwebbnorthranchhomes.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy',
    description:
      'Find answers to frequently asked questions about Del Webb North Ranch, a 55+ active adult community in North Las Vegas. Learn about HOA fees, amenities, age requirements, and more.',
    url: 'https://www.delwebbnorthranchhomes.com/faq',
    siteName: 'Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.delwebbnorthranchhomes.com/images/amenities/resort-pool.jpeg',
        width: 1200,
        height: 630,
        alt: 'Del Webb North Ranch FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy',
    description: 'Find answers to frequently asked questions about Del Webb North Ranch 55+ community.',
    images: ['https://www.delwebbnorthranchhomes.com/images/amenities/resort-pool.jpeg'],
  },
};

// Generate FAQ schema from centralized data
const allQuestions = getAllQuestions();
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allQuestions.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: q.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />
      <main className="min-h-screen bg-white pt-16 md:pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Hero Section */}
        <section className="relative bg-stone-100 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/amenities/resort-pool.jpeg"
              alt="Del Webb North Ranch resort-style pool"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Frequently Asked Questions | Del Webb North Ranch 55+ Community
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about Del Webb North Ranch
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main FAQ Accordion */}
              <div className="lg:col-span-2">
                <FAQAccordion showSearch={true} showExpandAll={true} allowMultiple={true} />
              </div>

              {/* Visual Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Clubhouse Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/amenities/clubhouse.jpeg"
                    alt="Del Webb North Ranch 10,000 sq ft clubhouse amenity center"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">10,000 sq ft Clubhouse</p>
                    <p className="text-xs opacity-90">Opened October 2021</p>
                  </div>
                </div>

                {/* Pool Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/amenities/resort-pool.jpeg"
                    alt="Del Webb North Ranch resort-style pool and spa"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">Resort-Style Pool</p>
                    <p className="text-xs opacity-90">Heated lap pool & spa</p>
                  </div>
                </div>

                {/* Pickleball Courts */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/amenities/pickleball-courts.jpeg"
                    alt="Del Webb North Ranch lighted pickleball courts"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">Pickleball Courts</p>
                    <p className="text-xs opacity-90">Lighted for evening play</p>
                  </div>
                </div>

                {/* Community Sign */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero/community-sign.jpg"
                    alt="Del Webb North Ranch gated community entrance"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">Gated Community</p>
                    <p className="text-xs opacity-90">24/7 security & virtual concierge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-primary py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-playfair">
              Still Have Questions?
            </h2>
            <p className="text-white/90 mb-8">
              Dr. Jan Duffy is here to help you find your perfect home in Del Webb North Ranch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7025001064"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Call (702) 500-1064
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
