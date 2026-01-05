import { Quote } from "lucide-react";
import ScrollAnimation from "../scroll-animation";

export default function TestimonialSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-bg-light relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #1e3a5f 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-three">
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 md:mb-6 opacity-50" />
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-dark leading-relaxed mb-6 md:mb-8 font-playfair italic px-2">
                "Working with Dr. Jan Duffy to find our dream home in Del Webb
                North Ranch was an absolute pleasure. She took the time to
                deeply understand our needs as retirees, ensuring every detail
                was considered. We couldn't be happier with our new home."
              </blockquote>
              <p className="text-base md:text-lg lg:text-xl text-primary font-semibold px-2">
                — Stephanie O.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
