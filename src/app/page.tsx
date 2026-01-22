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

// Homepage metadata - ensures canonical always points to clean homepage URL
// This prevents query parameters (?card=...) from creating alternate page issues
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.delwebbnorthranchhomes.com",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        <Hero />
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
