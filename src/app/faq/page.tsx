import type { Metadata } from 'next';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import FAQContent from '@/components/faq-content';

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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Del Webb North Ranch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Del Webb North Ranch is a gated 55+ active adult community in North Las Vegas, Nevada. It features 394 single-family residences, all single-story homes, with resort-style amenities and a vibrant community lifestyle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this a 55+ community?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Del Webb North Ranch is an age-restricted 55+ community. At least one resident must be 55 or older, and no one under 19 can be a permanent resident.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many homes are in the community?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The community consists of 394 single-family residences, all of which are single-story homes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the HOA fee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The HOA fee is $215 per month. There are no Special Improvement Districts (SIDs) or Local Improvement Districts (LIDs), making it a straightforward monthly fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the price range?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Homes in Del Webb North Ranch range from approximately $400,000 to $600,000, depending on the floor plan, location, and whether it's a new build or resale.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are all homes single-story?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, every home in Del Webb North Ranch is single-story. This is one of the key features that makes the community ideal for active adults.',
      },
    },
    {
      '@type': 'Question',
      name: 'What floor plans are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 9 floor plans across three series: Cottage Series (1,285-1,509 sq ft), Classic Series (1,451-1,770 sq ft), and Retreat Series (1,716-2,015 sq ft). All homes feature 2-3 bedrooms, 2-2.5 baths, and a 2-car garage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I customize my home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For new construction, there are often options for finishes and upgrades. Resale homes come as-is. Dr. Jan Duffy can help you understand what's available and guide you through the process.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Del Webb North Ranch located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The community is located at 2290 Beauty Vista Avenue in North Las Vegas, Nevada 89086. It's in a prime location with easy access to shopping, dining, healthcare, and entertainment.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the tax benefits of living in Nevada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nevada has no state income tax, which means more of your retirement income stays yours. This is a significant benefit for retirees compared to states like California.',
      },
    },
    {
      '@type': 'Question',
      name: "What's nearby?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The community is conveniently located near shopping centers, restaurants, healthcare facilities, and entertainment options. Las Vegas offers world-class dining, shows, and activities just minutes away.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I work with a REALTOR® or the builder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Working with an independent REALTOR® like Dr. Jan Duffy gives you unbiased guidance. She specializes exclusively in Del Webb North Ranch and knows which homesites have the best views, which floor plans work best for different lifestyles, and which resale homes represent the best value.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I schedule a tour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can schedule a private tour by calling Dr. Jan Duffy at (702) 500-1064, emailing sales@delwebbnorthranchhomes.com, or filling out the contact form on this website.',
      },
    },
    {
      '@type': 'Question',
      name: "What's included in a tour?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A private tour includes walking the community, seeing the amenities, and stepping inside model homes or available resale properties. There's no pressure—just information to help you decide if this is right for you.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there resale homes available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there are often resale homes available in addition to new construction. Dr. Jan Duffy can help you explore both options to find what best fits your needs and timeline.',
      },
    },
  ],
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
      </main>
      <Footer />
    </>
  );
}
