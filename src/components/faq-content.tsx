'use client'
// Client component for interactive FAQ accordion

import { useState } from 'react';
import ScrollAnimation from '@/../components/scroll-animation';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { faqData } from '@/lib/faqData';

// Use FAQ data from centralized data file
const faqs = faqData;

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
          aria-expanded={isOpen ? 'true' : 'false'}
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
            'overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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

export default function FAQContent() {
  return (
    <>
      {/* FAQ Sections */}
      {faqs.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`py-12 md:py-16 ${
            categoryIndex % 2 === 0 ? 'bg-white' : 'bg-bg-light'
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
    </>
  );
}
