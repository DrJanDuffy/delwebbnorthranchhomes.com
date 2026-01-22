import type { Metadata } from 'next';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import FAQAccordion from '@/../components/FAQAccordion';
import RealScoutListings from '@/../components/RealScoutListings';
import { getAllQuestions, getAllCategories } from '@/lib/faqData';
import { Button } from '@/../components/ui/button';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ | Del Webb North Ranch | 55+ Community Questions Answered',
  description:
    'Find answers to frequently asked questions about Del Webb North Ranch, a 55+ active adult community in North Las Vegas. Learn about HOA fees, amenities, age requirements, and more.',
  alternates: {
    canonical: 'https://delwebbnorthranchhomes.com/faq',
  },
  openGraph: {
    title: 'FAQ | Del Webb North Ranch | 55+ Community Questions Answered',
    description:
      'Find answers to frequently asked questions about Del Webb North Ranch, a 55+ active adult community in North Las Vegas. Learn about HOA fees, amenities, age requirements, and more.',
    url: 'https://delwebbnorthranchhomes.com/faq',
    siteName: 'Del Webb North Ranch Homes',
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
                Everything you need to know about Del Webb North Ranch
              </p>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-8 bg-stone-50 sticky top-16 z-40 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {getAllCategories().map((category) => {
                  const categoryId = category.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <a
                      key={category}
                      href={`#category-${categoryId}`}
                      className="px-4 py-2 bg-white text-text-dark rounded-md text-sm font-medium hover:bg-amber-50 hover:text-primary transition-colors border border-gray-200"
                    >
                      {category}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <FAQAccordion showSearch={true} showExpandAll={true} allowMultiple={true} />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Still have questions?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Contact Dr. Jan Duffy at (702) 500-1064 for personalized answers to your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7025001064"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 500-1064
                </a>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  <Link href="/contact">Schedule a Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Listings - Lead Generator */}
        <RealScoutListings h2Text="View Available Homes in Del Webb North Ranch | Find Answers to Your Questions" />
      </main>
      <Footer />
    </>
  );
}
