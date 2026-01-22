import type { Metadata } from 'next';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import FAQContent from '@/components/faq-content';
import RealScoutListings from '@/../components/RealScoutListings';
import { getAllQuestions } from '@/lib/faqData';

export const metadata: Metadata = {
  title: 'FAQ | Del Webb North Ranch | Common Questions | North Las Vegas',
  description:
    'Frequently asked questions about Del Webb North Ranch, a premier 55+ community in North Las Vegas. Learn about homes, amenities, location, and the buying process.',
  alternates: {
    canonical: 'https://delwebbnorthranchhomes.com/faq',
  },
  openGraph: {
    title: 'FAQ | Del Webb North Ranch | North Las Vegas',
    description:
      'Common questions about Del Webb North Ranch 55+ community, homes, amenities, and buying process.',
    url: 'https://delwebbnorthranchhomes.com/faq',
    siteName: 'Del Webb North Ranch Homes',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Del Webb North Ranch',
    description: 'Common questions about North Las Vegas premier 55+ community.',
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
      <main className="pt-16 md:pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Find answers to common questions about Del Webb North Ranch, a
                premier 55+ community in North Las Vegas, the homes, community,
                and buying process.
              </p>
            </div>
          </div>
        </section>

        <FAQContent />

        {/* RealScout Listings - Lead Generator */}
        <RealScoutListings h2Text="View Available Homes in Del Webb North Ranch | Find Answers to Your Questions" />
      </main>
      <Footer />
    </>
  );
}
