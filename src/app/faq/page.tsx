"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import ScrollAnimation from "@/../components/scroll-animation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "Community",
    questions: [
      {
        question: "What is Del Webb North Ranch?",
        answer:
          "Del Webb North Ranch is a gated 55+ active adult community in North Las Vegas, Nevada. It features 394 single-family residences, all single-story homes, with resort-style amenities and a vibrant community lifestyle.",
      },
      {
        question: "Is this a 55+ community?",
        answer:
          "Yes, Del Webb North Ranch is an age-restricted 55+ community. At least one resident must be 55 or older, and no one under 19 can be a permanent resident.",
      },
      {
        question: "How many homes are in the community?",
        answer:
          "The community consists of 394 single-family residences, all of which are single-story homes.",
      },
      {
        question: "What is the HOA fee?",
        answer:
          "The HOA fee is $215 per month. There are no Special Improvement Districts (SIDs) or Local Improvement Districts (LIDs), making it a straightforward monthly fee.",
      },
    ],
  },
  {
    category: "Homes",
    questions: [
      {
        question: "What is the price range?",
        answer:
          "Homes in Del Webb North Ranch range from approximately $400,000 to $600,000, depending on the floor plan, location, and whether it's a new build or resale.",
      },
      {
        question: "Are all homes single-story?",
        answer:
          "Yes, every home in Del Webb North Ranch is single-story. This is one of the key features that makes the community ideal for active adults.",
      },
      {
        question: "What floor plans are available?",
        answer:
          "There are 9 floor plans across three series: Cottage Series (1,285-1,509 sq ft), Classic Series (1,451-1,770 sq ft), and Retreat Series (1,716-2,015 sq ft). All homes feature 2-3 bedrooms, 2-2.5 baths, and a 2-car garage.",
      },
      {
        question: "Can I customize my home?",
        answer:
          "For new construction, there are often options for finishes and upgrades. Resale homes come as-is. Dr. Jan Duffy can help you understand what's available and guide you through the process.",
      },
    ],
  },
  {
    category: "Location & Taxes",
    questions: [
      {
        question: "Where is Del Webb North Ranch located?",
        answer:
          "The community is located at 2290 Beauty Vista Avenue in North Las Vegas, Nevada 89086. It's in a prime location with easy access to shopping, dining, healthcare, and entertainment.",
      },
      {
        question: "What are the tax benefits of living in Nevada?",
        answer:
          "Nevada has no state income tax, which means more of your retirement income stays yours. This is a significant benefit for retirees compared to states like California.",
      },
      {
        question: "What's nearby?",
        answer:
          "The community is conveniently located near shopping centers, restaurants, healthcare facilities, and entertainment options. Las Vegas offers world-class dining, shows, and activities just minutes away.",
      },
    ],
  },
  {
    category: "Buying Process",
    questions: [
      {
        question: "Should I work with a REALTOR® or the builder?",
        answer:
          "Working with an independent REALTOR® like Dr. Jan Duffy gives you unbiased guidance. She specializes exclusively in Del Webb North Ranch and knows which homesites have the best views, which floor plans work best for different lifestyles, and which resale homes represent the best value.",
      },
      {
        question: "How do I schedule a tour?",
        answer:
          "You can schedule a private tour by calling Dr. Jan Duffy at (702) 500-1064, emailing sales@delwebbnorthranchhomes.com, or filling out the contact form on this website.",
      },
      {
        question: "What's included in a tour?",
        answer:
          "A private tour includes walking the community, seeing the amenities, and stepping inside model homes or available resale properties. There's no pressure—just information to help you decide if this is right for you.",
      },
      {
        question: "Are there resale homes available?",
        answer:
          "Yes, there are often resale homes available in addition to new construction. Dr. Jan Duffy can help you explore both options to find what best fits your needs and timeline.",
      },
    ],
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollAnimation delay={index * 30}>
      <div className="bg-white rounded-lg shadow-two overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-bg-light transition-colors"
          aria-expanded={isOpen}
        >
          <span className="font-semibold text-text-dark pr-4">{question}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
          )}
        </button>
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-6 py-4 border-t border-gray-200">
            <p className="text-text-dark leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Find answers to common questions about Del Webb North Ranch,
                the homes, community, and buying process.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        {faqs.map((category, categoryIndex) => (
          <section
            key={category.category}
            className={`py-12 md:py-16 ${
              categoryIndex % 2 === 0 ? "bg-white" : "bg-bg-light"
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <FAQItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Still Have Questions */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Dr. Jan Duffy is here to help. Contact her directly for
                personalized answers to your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7025001064"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold hover:bg-accent/90 transition-colors"
                >
                  Call (702) 500-1064
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Send a Message
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
