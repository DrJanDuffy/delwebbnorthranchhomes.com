import type { Metadata } from "next";
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
import HomesForSaleWidget from "../../components/HomesForSaleWidget";
import Testimonials from "../../components/Testimonials";
import MortgageCalculator from "../../components/MortgageCalculator";
import RealScoutListings from "../../components/RealScoutListings";
import QuickFAQ from "../../components/QuickFAQ";
import ExploreCommunitySection from "../../components/sections/explore-community";
import ExploreCommunitySection from "../../components/sections/explore-community";

// Homepage metadata - optimized for sitelinks
export const metadata: Metadata = {
  title: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
  description:
    "Discover luxury single-story homes from $400K-$600K in Del Webb North Ranch, a gated 55+ active adult community in North Las Vegas. Resort-style amenities, no state income tax.",
  alternates: {
    canonical: "https://www.delwebbnorthranchhomes.com",
  },
  openGraph: {
    title: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    description:
      "Single-story homes from $400K-$600K in a gated 55+ community. Resort pool, pickleball, fitness center—all fully built.",
    url: "https://www.delwebbnorthranchhomes.com",
    siteName: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    images: [
      {
        url: "/images/amenities/resort-pool.jpeg",
        width: 1200,
        height: 630,
        alt: "Del Webb North Ranch resort-style pool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    description:
      "Single-story homes from $400K-$600K in a gated 55+ community. Resort pool, pickleball, fitness center—all fully built.",
    images: ["/images/amenities/resort-pool.jpeg"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        <Hero />
        {/* Explore Community Section - Prominent internal linking for sitelinks */}
        <ExploreCommunitySection />
        {/* RealScout Listings - Main Lead Generator - Prominently placed after hero */}
        <RealScoutListings h2Text="Browse Available Homes for Sale in Del Webb North Ranch | North Las Vegas 55+ Community" />
        <ProblemSection />
        <SolutionSection />
        <ValuePropsSection />
        <TestimonialSection />
        <AmenitiesPreviewSection />
        <HomeCollectionsSection />
        <VirtualTours />
        <HomesForSaleWidget />
        <Testimonials />
        <MortgageCalculator />
        <QuickFAQ />
        <AboutAgentSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
