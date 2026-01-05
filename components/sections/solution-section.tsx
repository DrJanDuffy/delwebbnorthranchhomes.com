import ScrollAnimation from "../scroll-animation";

export default function SolutionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 text-center font-playfair px-2">
              A Community Built for Living
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <div className="prose prose-lg max-w-none text-center space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-text-dark leading-relaxed px-2">
                Del Webb North Ranch is a gated 55+ community built for people
                who want to live, not just exist.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-text-dark leading-relaxed px-2">
                Every home is single-story. No stairs to worry about now or
                later. The landscaping is handled. The neighbors are your age and
                actually want to meet you. And Nevada has no state income
                tax—so more of your money stays yours.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-text-dark leading-relaxed font-semibold px-2">
                This isn't a place to slow down. It's a place to finally do
                everything you've been putting off.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
