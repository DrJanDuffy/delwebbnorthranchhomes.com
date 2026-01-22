import type { Metadata } from 'next';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import FAQAccordion from '@/../components/FAQAccordion';
import { getAllQuestions } from '@/lib/faqData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Del Webb North Ranch | 55+ Community Questions Answered',
  description:
    'Find answers to frequently asked questions about Del Webb North Ranch, a 55+ active adult community in North Las Vegas. Learn about HOA fees, amenities, age requirements, and more.',
  alternates: {
    canonical: 'https://www.delwebbnorthranchhomes.com/faq',
  },
  openGraph: {
    title: 'FAQ | Del Webb North Ranch | 55+ Community Questions Answered',
    description:
      'Find answers to frequently asked questions about Del Webb North Ranch, a 55+ active adult community in North Las Vegas. Learn about HOA fees, amenities, age requirements, and more.',
    url: 'https://www.delwebbnorthranchhomes.com/faq',
    siteName: 'Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Del Webb North Ranch | 55+ Community Questions Answered',
    description: 'Find answers to frequently asked questions about Del Webb North Ranch 55+ community.',
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
      <main className="min-h-screen bg-white pt-16 md:pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Hero Section */}
        <section className="bg-stone-100 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about Del Webb North Ranch
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <FAQAccordion showSearch={true} showExpandAll={true} allowMultiple={true} />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-amber-500 py-16">
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
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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
