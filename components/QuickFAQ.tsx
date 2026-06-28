'use client';
// Homepage FAQ — AEO-optimized questions with FAQPage schema on page.tsx

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { homepageFaq } from '@/lib/homepageFaq';

export default function QuickFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-stone-50" aria-labelledby="homepage-faq-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="homepage-faq-heading" className="text-2xl md:text-3xl font-bold text-primary mb-2 font-playfair">
              Frequently Asked Questions About Del Webb North Ranch
            </h2>
            <p className="text-base md:text-lg text-text-dark">
              Direct answers for buyers researching this North Las Vegas 55+ community
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {homepageFaq.map((faq, index) => {
              const isOpen = openIndex === index;
              const ariaExpanded = isOpen ? 'true' : 'false';

              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-lg shadow-two overflow-hidden border border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleQuestion(index)}
                    className="w-full min-h-[44px] px-6 py-4 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
                    aria-expanded={ariaExpanded}
                    aria-label={faq.question}
                  >
                    <span className="font-semibold text-text-dark pr-4 flex-1">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-primary" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary" aria-hidden="true" />
                      )}
                    </div>
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300 ease-in-out',
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="px-6 py-4 border-t border-gray-200 bg-stone-50">
                      <p className="text-text-dark leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] min-w-[44px] bg-primary hover:bg-primary/90 text-white font-semibold rounded-md transition-colors"
              aria-label="View all Del Webb North Ranch frequently asked questions"
            >
              View All FAQs
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
