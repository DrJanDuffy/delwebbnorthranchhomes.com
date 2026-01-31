import type { Metadata } from "next";
import { CANONICAL_HOMEPAGE, SITE_ORIGIN } from "@/lib/site";
import { TITLE_SUFFIX, altPrefix } from "@/lib/hyperlocal";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import ProblemSection from "../../components/sections/problem-section";
import SolutionSection from "../../components/sections/solution-section";
import ValuePropsSection from "../../components/sections/value-props";
import TestimonialSection from "../../components/sections/testimonial";
import AmenitiesPreviewSection from "../../components/sections/amenities-preview";
import HomeCollectionsSection from "../../components/sections/home-collections";
import AboutAgentSection from "../../components/sections/about-agent";
import FinalCTASection from "../../components/sections/final-cta";
import Footer from "../../components/footer";
import VirtualTours from "../../components/VirtualTours";
import Testimonials from "../../components/Testimonials";
import MortgageCalculator from "../../components/MortgageCalculator";
import RealScoutListings from "../../components/RealScoutListings";
import QuickFAQ from "../../components/QuickFAQ";
import ExploreCommunitySection from "../../components/sections/explore-community";
import FlyersSection from "../../components/sections/flyers-section";
import Link from "next/link";
import { Button } from "../../components/ui/button";

const HOMEPAGE_METADATA: Metadata = {
  title: TITLE_SUFFIX,
  description:
    "Discover 55+ luxury homes for sale at Del Webb North Ranch in North Las Vegas. Single-story living from $400K-$600K with resort amenities. Contact Dr. Jan Duffy at (702) 500-1064.",
  alternates: {
    canonical: CANONICAL_HOMEPAGE,
  },
  openGraph: {
    title: TITLE_SUFFIX,
    description:
      "Discover 55+ luxury homes for sale at Del Webb North Ranch in North Las Vegas. Single-story living from $400K-$600K with resort amenities.",
    url: CANONICAL_HOMEPAGE,
    siteName: TITLE_SUFFIX,
    images: [
      {
        url: `${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`,
        width: 1200,
        height: 630,
        alt: altPrefix("Resort-style pool"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_SUFFIX,
    description:
      "Discover 55+ luxury homes for sale at Del Webb North Ranch in North Las Vegas. Single-story living from $400K-$600K with resort amenities.",
    images: [`${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`],
  },
};

/** Parameter URLs (?card=) get noindex so GSC treats them as alternates; canonical points to homepage. */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ card?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  if (params?.card) {
    return {
      ...HOMEPAGE_METADATA,
      robots: { index: false, follow: true },
    };
  }
  return HOMEPAGE_METADATA;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        <Hero />
        {/* Office RealScout listings - directly below hero */}
        <RealScoutListings h2Text="Browse Available Homes for Sale in Del Webb North Ranch | North Las Vegas 55+ Community" />
        {/* Explore Community Section - Prominent internal linking for sitelinks */}
        <ExploreCommunitySection />
        <ProblemSection />
        <SolutionSection />
        <ValuePropsSection />
        <section className="py-6 bg-white">
          <div className="container mx-auto px-4 text-center">
            <Button asChild variant="outline" size="lg" className="min-h-[48px]">
              <Link href="/why-choose-us">Why Choose Us — Full Page</Link>
            </Button>
          </div>
        </section>
        <TestimonialSection />
        <AmenitiesPreviewSection />
        <HomeCollectionsSection />
        <FlyersSection />
        <VirtualTours />
        <section className="py-6 bg-white">
          <div className="container mx-auto px-4 text-center">
            <Button asChild variant="outline" size="lg" className="min-h-[48px]">
              <Link href="/virtual-tours">View All Virtual Tours</Link>
            </Button>
          </div>
        </section>
        <Testimonials />
        <MortgageCalculator />
        <section className="py-6 bg-white">
          <div className="container mx-auto px-4 text-center">
            <Button asChild variant="outline" size="lg" className="min-h-[48px]">
              <Link href="/mortgage-calculator">Use Full Mortgage Calculator</Link>
            </Button>
          </div>
        </section>
        <QuickFAQ />
        <AboutAgentSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
