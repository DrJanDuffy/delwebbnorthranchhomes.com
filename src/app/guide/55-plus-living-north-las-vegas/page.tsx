import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import Breadcrumbs from '@/../components/Breadcrumbs';
import { FaqSection, AgentInsights, SeoHubLinks } from '@/../components/seo/SeoContentBlocks';
import { SITE_ORIGIN } from '@/lib/site';
import { altPrefix, metaDescriptionBlock, TITLE_SUFFIX } from '@/lib/hyperlocal';
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  serializeJsonLd,
} from '@/lib/schema';
import { guideFaq, guideSections, GUIDE_URL } from '@/lib/seoContent';

export const metadata: Metadata = {
  title: `55+ Living Guide | North Las Vegas | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    'Complete guide to 55+ living in North Las Vegas—Del Webb North Ranch floor plans, amenities, HOA, resale homes, and how to tour'
  ),
  alternates: { canonical: GUIDE_URL },
  openGraph: {
    title: `55+ Living Guide | North Las Vegas | ${TITLE_SUFFIX}`,
    description:
      'Guide to 55+ active adult living in North Las Vegas at Del Webb North Ranch—floor plans, amenities, buying process, and community comparison.',
    url: GUIDE_URL,
    siteName: TITLE_SUFFIX,
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`,
        width: 1200,
        height: 630,
        alt: altPrefix('Resort pool at 55+ community'),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `55+ Living Guide | ${TITLE_SUFFIX}`,
    description: 'Your guide to 55+ living in North Las Vegas at Del Webb North Ranch.',
  },
};

const articleSchema = buildArticleSchema({
  headline: '55+ Living in North Las Vegas: Del Webb North Ranch Guide',
  description:
    'Complete buyer guide to Del Webb North Ranch 55+ community in North Las Vegas—floor plans, amenities, resale homes, HOA, and how to tour.',
  url: GUIDE_URL,
  image: `${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`,
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_ORIGIN },
  { name: '55+ Living Guide', url: GUIDE_URL },
]);

export default function GuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildFaqPageSchema(guideFaq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs
          items={[
            { label: 'Del Webb North Ranch', href: '/' },
            { label: '55+ Living Guide', href: '/guide/55-plus-living-north-las-vegas' },
          ]}
        />
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                55+ Living in North Las Vegas: Del Webb North Ranch Guide
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Del Webb North Ranch is a gated 55+ active adult community in North Las Vegas, NV 89086 with
                single-story resale homes, resort-style amenities, and no Nevada state income tax—this guide
                covers everything buyers ask before they tour.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {guideSections.map((section) => (
                <article key={section.id} id={section.id} className="mb-12 last:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                    {section.title}
                  </h2>
                  <p className="text-lg font-medium text-text-dark mb-4">{section.answer}</p>
                  <p className="text-text-dark mb-6">{section.body}</p>
                  <ul className="flex flex-wrap gap-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-block rounded-full border border-primary bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors min-h-[44px] flex items-center justify-center"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AgentInsights />
        <FaqSection items={guideFaq} />
        <SeoHubLinks />
      </main>
      <Footer />
    </>
  );
}
