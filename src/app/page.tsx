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
import FlyersSection from "../../components/sections/flyers-section";

// Homepage metadata - optimized for SEO and sitelinks
export const metadata: Metadata = {
  title: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
  description:
    "Discover 55+ luxury homes for sale at Del Webb North Ranch in North Las Vegas. Single-story living from $400K-$600K with resort amenities. Contact Dr. Jan Duffy at (702) 500-1064.",
  alternates: {
    canonical: "https://www.delwebbnorthranchhomes.com",
  },
  openGraph: {
    title: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    description:
      "Discover 55+ luxury homes for sale at Del Webb North Ranch in North Las Vegas. Single-story living from $400K-$600K with resort amenities.",
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
      "Discover 55+ luxury homes for sale at Del Webb North Ranch in North Las Vegas. Single-story living from $400K-$600K with resort amenities.",
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
        <FlyersSection />
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
