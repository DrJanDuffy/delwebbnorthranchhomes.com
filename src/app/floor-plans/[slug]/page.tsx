import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import { Button } from '@/../components/ui/button';
import ScrollAnimation from '@/../components/scroll-animation';
import {
  getFloorPlanBySlug,
  getAllFloorPlanSlugs,
  type FloorPlan,
} from '@/lib/floor-plans';
import { Bed, Bath, Square, Car, ArrowLeft, Phone } from 'lucide-react';

export async function generateStaticParams() {
  return getAllFloorPlanSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plan = getFloorPlanBySlug(slug);

  if (!plan) {
    return {
      title: 'Floor Plan Not Found | Del Webb North Ranch',
    };
  }

  const baseUrl = 'https://delwebbnorthranchhomes.com';
  const url = `${baseUrl}/floor-plans/${slug}`;

  return {
    title: `${plan.name} Floor Plan | ${plan.series} Series | Del Webb North Ranch | North Las Vegas`,
    description: `${plan.name} floor plan: ${plan.sqft} sq ft, ${plan.beds} bed, ${plan.baths} bath ${plan.series} Series home in Del Webb North Ranch, a premier 55+ community in North Las Vegas. ${plan.description}`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${plan.name} Floor Plan | Del Webb North Ranch`,
      description: `${plan.sqft} sq ft, ${plan.beds} bed, ${plan.baths} bath ${plan.series} Series home. ${plan.priceRange}.`,
      url: url,
      siteName: 'Del Webb North Ranch Homes',
      locale: 'en_US',
      type: 'website',
      images: plan.imageUrl
        ? [
            {
              url: `https://delwebbnorthranchhomes.com${plan.imageUrl}`,
              width: 1200,
              height: 630,
              alt: `${plan.name} floor plan`,
            },
          ]
        : [
            {
              url: 'https://delwebbnorthranchhomes.com/images/hero/hero-bg.jpg',
              width: 1200,
              height: 630,
              alt: 'Del Webb North Ranch',
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${plan.name} Floor Plan | Del Webb North Ranch`,
      description: `${plan.sqft} sq ft ${plan.series} Series home in North Las Vegas 55+ community.`,
      images: plan.imageUrl
        ? [`https://delwebbnorthranchhomes.com${plan.imageUrl}`]
        : ['https://delwebbnorthranchhomes.com/images/hero/hero-bg.jpg'],
    },
  };
}

function ProductSchema({ plan }: { plan: FloorPlan }) {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${plan.name} Floor Plan - Del Webb North Ranch`,
    description: `${plan.description} ${plan.series} Series home with ${plan.sqft} sq ft, ${plan.beds} bedrooms, ${plan.baths} baths.`,
    category: 'Real Estate',
    image: plan.imageUrl
      ? `https://delwebbnorthranchhomes.com${plan.imageUrl}`
      : undefined,
    brand: {
      '@type': 'Brand',
      name: 'Del Webb North Ranch',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice:
        plan.series === 'Cottage'
          ? '400000'
          : plan.series === 'Classic'
            ? '475000'
            : '550000',
      highPrice:
        plan.series === 'Cottage'
          ? '500000'
          : plan.series === 'Classic'
            ? '575000'
            : '600000',
      availability: 'https://schema.org/InStock',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Square Feet',
        value: plan.sqft,
      },
      {
        '@type': 'PropertyValue',
        name: 'Bedrooms',
        value: plan.beds.toString(),
      },
      {
        '@type': 'PropertyValue',
        name: 'Bathrooms',
        value: plan.baths.toString(),
      },
      {
        '@type': 'PropertyValue',
        name: 'Garage',
        value: `${plan.garage} car`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Series',
        value: plan.series,
      },
    ],
    url: `https://delwebbnorthranchhomes.com/floor-plans/${plan.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}

export default async function FloorPlanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getFloorPlanBySlug(slug);

  if (!plan) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <ProductSchema plan={plan} />
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/floor-plans"
                className="inline-flex items-center gap-2 text-gray-100 hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to All Floor Plans
              </Link>
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold">{plan.series} Series</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                {plan.name} Floor Plan
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                {plan.description}
              </p>
            </div>
          </div>
        </section>

        {/* Key Details */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-bg-light p-6 rounded-lg text-center">
                  <Square className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary mb-1 font-playfair">
                    {plan.sqft}
                  </p>
                  <p className="text-sm text-text-dark">Square Feet</p>
                </div>
                <div className="bg-bg-light p-6 rounded-lg text-center">
                  <Bed className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary mb-1 font-playfair">
                    {plan.beds}
                  </p>
                  <p className="text-sm text-text-dark">Bedrooms</p>
                </div>
                <div className="bg-bg-light p-6 rounded-lg text-center">
                  <Bath className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary mb-1 font-playfair">
                    {plan.baths}
                  </p>
                  <p className="text-sm text-text-dark">Bathrooms</p>
                </div>
                <div className="bg-bg-light p-6 rounded-lg text-center">
                  <Car className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary mb-1 font-playfair">
                    {plan.garage}
                  </p>
                  <p className="text-sm text-text-dark">Car Garage</p>
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 text-center mb-8">
                <p className="text-sm font-semibold text-primary mb-2">
                  Estimated Price Range
                </p>
                <p className="text-3xl font-bold text-accent font-playfair">
                  {plan.priceRange}
                </p>
                <p className="text-sm text-text-dark mt-2">
                  Price varies by location, upgrades, and market conditions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        {plan.features && plan.features.length > 0 && (
          <section className="py-12 md:py-16 bg-bg-light">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {plan.features.map((feature, index) => (
                    <ScrollAnimation key={feature} delay={index * 50}>
                      <div className="bg-white p-4 rounded-lg shadow-two">
                        <p className="text-text-dark">{feature}</p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Floor Plan Image */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Floor Plan Layout
              </h2>
              <div className="bg-bg-light rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                {plan.imageUrl ? (
                  <Image
                    src={plan.imageUrl}
                    alt={`${plan.name} floor plan layout`}
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                ) : (
                  <div className="text-center text-gray-400">
                    <p className="text-lg mb-2">Floor Plan Image</p>
                    <p className="text-sm">
                      Contact Dr. Jan Duffy to view the detailed floor plan
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Interested in the {plan.name} Floor Plan?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a private tour to see this floor plan in person. Dr. Jan
                Duffy can show you available homes and answer all your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  <Link href="/contact">Schedule a Tour</Link>
                </Button>
                <a
                  href="tel:7025001064"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 500-1064
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
