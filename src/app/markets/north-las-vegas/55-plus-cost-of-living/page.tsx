import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import Breadcrumbs from '@/../components/Breadcrumbs';
import { FaqSection, AgentInsights, SeoHubLinks } from '@/../components/seo/SeoContentBlocks';
import { SITE_ORIGIN } from '@/lib/site';
import { altPrefix, metaDescriptionBlock, TITLE_SUFFIX } from '@/lib/hyperlocal';
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  serializeJsonLd,
} from '@/lib/schema';
import { costOfLivingFaq, costOfLivingRows, COST_OF_LIVING_URL } from '@/lib/seoContent';

export const metadata: Metadata = {
  title: `55+ Cost of Living | North Las Vegas | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    'Cost of living at Del Webb North Ranch 55+ community in North Las Vegas—home prices, HOA fees, property taxes, utilities, and Nevada tax benefits'
  ),
  alternates: { canonical: COST_OF_LIVING_URL },
  openGraph: {
    title: `55+ Cost of Living | North Las Vegas | ${TITLE_SUFFIX}`,
    description:
      'Break down the cost of living at Del Webb North Ranch—resale home prices, HOA, property taxes, utilities, and Nevada retirement tax advantages.',
    url: COST_OF_LIVING_URL,
    siteName: TITLE_SUFFIX,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_ORIGIN}/images/amenities/clubhouse.jpeg`,
        width: 1200,
        height: 630,
        alt: altPrefix('Clubhouse amenities'),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `55+ Cost of Living | ${TITLE_SUFFIX}`,
    description: 'Cost of living breakdown for Del Webb North Ranch 55+ community in North Las Vegas.',
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_ORIGIN },
  { name: 'Cost of Living', url: COST_OF_LIVING_URL },
]);

export default function CostOfLivingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildFaqPageSchema(costOfLivingFaq)) }}
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
            { label: 'Cost of Living', href: '/markets/north-las-vegas/55-plus-cost-of-living' },
          ]}
        />
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Cost of Living at Del Webb North Ranch | North Las Vegas 55+
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Resale homes at Del Webb North Ranch typically range from $400,000 to $600,000 with HOA fees
                around $215 per month. Nevada has no state income tax—budget for property taxes, utilities,
                and healthcare near VA Southern Nevada and Centennial Hills.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white" aria-labelledby="cost-table-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="cost-table-heading" className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Del Webb North Ranch Cost Breakdown
              </h2>
              <div className="overflow-x-auto rounded-lg border border-stone-200 shadow-two">
                <table className="w-full text-left">
                  <thead className="bg-bg-light">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold text-primary">
                        Category
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-primary">
                        Typical Amount
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-primary hidden sm:table-cell">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {costOfLivingRows.map((row) => (
                      <tr key={row.category} className="border-t border-stone-200">
                        <td className="px-4 py-3 text-text-dark font-medium">{row.category}</td>
                        <td className="px-4 py-3 text-primary font-semibold">{row.amount}</td>
                        <td className="px-4 py-3 text-text-dark text-sm hidden sm:table-cell">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-text-dark mt-6 text-center">
                Figures are estimates for planning—not financial or tax advice.{' '}
                <Link href="/schedule" className="text-primary hover:text-accent font-medium">
                  Schedule a tour
                </Link>{' '}
                to discuss current resale pricing with Dr. Jan Duffy.
              </p>
            </div>
          </div>
        </section>

        <AgentInsights insights="When buyers ask about cost of living, I walk through HOA value—not just the monthly fee. Del Webb North Ranch includes gated security, clubhouse, pools, fitness, and pickleball. Compare that against buying an older home and paying separately for gym, pool access, and yard maintenance in North Las Vegas." />
        <FaqSection items={costOfLivingFaq} heading="Cost of Living FAQ" />
        <SeoHubLinks />
      </main>
      <Footer />
    </>
  );
}
