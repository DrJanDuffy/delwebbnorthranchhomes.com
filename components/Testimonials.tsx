'use client';

import { useState } from 'react';
import { oldSiteData } from '@/lib/fetchOldSiteData';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = oldSiteData.testimonials;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-primary font-playfair">
            What Our Clients Say
          </h2>

          {/* Main testimonial display */}
          <div className="bg-white rounded-lg shadow-three p-6 md:p-8 lg:p-12 mb-6 md:mb-8">
            <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-6 opacity-50" />
            <p className="text-base md:text-lg lg:text-xl text-text-dark leading-relaxed mb-6 md:mb-8 font-playfair italic">
              "{testimonials[activeIndex].text}"
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-semibold text-lg md:text-xl text-primary">
                — {testimonials[activeIndex].name}
              </p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 md:gap-3 mb-4 md:mb-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-11 w-11 rounded-full transition-all flex items-center justify-center ${
                  index === activeIndex
                    ? 'bg-primary'
                    : 'bg-gray-300 hover:bg-primary/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              >
                <span className={`h-2 w-2 rounded-full ${
                  index === activeIndex ? 'bg-white' : 'bg-gray-500'
                }`} />
              </button>
            ))}
          </div>

          {/* Thumbnail names */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {testimonials.map((t, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-sm md:text-base px-3 md:px-4 py-1 md:py-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-text-dark hover:bg-gray-300'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
