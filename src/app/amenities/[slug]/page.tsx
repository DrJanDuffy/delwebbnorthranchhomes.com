import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import Breadcrumbs from '@/../components/Breadcrumbs';
import { FaqSection, AgentInsights, SeoHubLinks } from '@/../components/seo/SeoContentBlocks';
import { SITE_ORIGIN } from '@/lib/site';
import { altPrefix, TITLE_SUFFIX } from '@/lib/hyperlocal';
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  serializeJsonLd,
} from '@/lib/schema';
import {
  getAllAmenitySlugs,
  getAmenityBySlug,
  amenityPages,
} from '@/lib/seoContent';

export async function generateStaticParams() {
  return getAllAmenitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getAmenityBySlug(slug);

  if (!page) {
    return { title: `Amenity Not Found | ${TITLE_SUFFIX}` };
  }

  const url = `${SITE_ORIGIN}/amenities/${slug}`;

  return {
    title: `${page.title} | ${TITLE_SUFFIX}`,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.title} | ${TITLE_SUFFIX}`,
      description: page.description,
      url,
      siteName: TITLE_SUFFIX,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${SITE_ORIGIN}${page.image}`,
          width: 1200,
          height: 630,
          alt: altPrefix(page.name),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.name} | ${TITLE_SUFFIX}`,
      description: page.description,
      images: [`${SITE_ORIGIN}${page.image}`],
    },
  };
}

export default async function AmenityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getAmenityBySlug(slug);

  if (!page) {
    notFound();
  }

  const url = `${SITE_ORIGIN}/amenities/${slug}`;
  const otherAmenities = amenityPages.filter((a) => a.slug !== slug).slice(0, 4);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: SITE_ORIGIN },
    { name: 'Amenities', url: `${SITE_ORIGIN}/amenities` },
    { name: page.name, url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildFaqPageSchema(page.faq)) }}
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
            { label: 'Amenities', href: '/amenities' },
            { label: page.name, href: `/amenities/${slug}` },
          ]}
        />
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                {page.name} at Del Webb North Ranch
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">{page.aeoAnswer}</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-three mb-8">
                <Image
                  src={page.image}
                  alt={altPrefix(page.name)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>
              <p className="text-lg text-text-dark mb-6">{page.body}</p>
              <p className="text-text-dark">
                <Link href="/amenities" className="text-primary hover:text-accent font-medium">
                  View all Del Webb North Ranch amenities →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {otherAmenities.length > 0 && (
          <section className="py-12 md:py-16 bg-bg-light" aria-labelledby="more-amenities-heading">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 id="more-amenities-heading" className="text-2xl font-bold text-primary mb-6 text-center font-playfair">
                  More Amenities
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {otherAmenities.map((amenity) => (
                    <li key={amenity.slug}>
                      <Link
                        href={`/amenities/${amenity.slug}`}
                        className="block rounded-lg border border-stone-200 bg-white p-5 shadow-two hover:shadow-three transition-shadow"
                      >
                        <p className="text-lg font-bold text-primary font-playfair">{amenity.name}</p>
                        <p className="text-text-dark mt-2 text-sm line-clamp-2">{amenity.aeoAnswer}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        <AgentInsights />
        <FaqSection items={page.faq} heading={`${page.name} FAQ`} />
        <SeoHubLinks />
      </main>
      <Footer />
    </>
  );
}
