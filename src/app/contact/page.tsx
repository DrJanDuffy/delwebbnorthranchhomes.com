import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import ContactForm from "@/../components/contact-form";
import ScrollAnimation from "@/../components/scroll-animation";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Dr. Jan Duffy | Del Webb North Ranch REALTOR®",
  description:
    "Contact Dr. Jan Duffy to schedule a tour of Del Webb North Ranch. Call (702) 500-1064 or fill out the contact form.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Let's Find Your Dream Home Together
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Ready to explore Del Webb North Ranch? Contact Dr. Jan Duffy to
                schedule a private tour, ask questions, or learn more about
                available homes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Contact Form */}
                <ScrollAnimation>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                      Send a Message
                    </h2>
                    <p className="text-text-dark mb-6">
                      Fill out the form below and Dr. Jan Duffy will get back to
                      you as soon as possible.
                    </p>
                    <ContactForm />
                  </div>
                </ScrollAnimation>

                {/* Contact Info */}
                <ScrollAnimation delay={100}>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                      Get in Touch
                    </h2>
                    <div className="space-y-6">
                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">
                            Phone
                          </h3>
                          <a
                            href="tel:7025001064"
                            className="text-text-dark hover:text-primary transition-colors text-lg"
                          >
                            (702) 500-1064
                          </a>
                          <p className="text-sm text-gray-500 mt-1">
                            Call or text anytime
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">
                            Email
                          </h3>
                          <a
                            href="mailto:jan@delwebbnorthranchhomes.com"
                            className="text-text-dark hover:text-primary transition-colors break-all"
                          >
                            jan@delwebbnorthranchhomes.com
                          </a>
                          <p className="text-sm text-gray-500 mt-1">
                            Typically responds within 24 hours
                          </p>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">
                            Office Location
                          </h3>
                          <p className="text-text-dark">
                            Berkshire Hathaway HomeServices
                            <br />
                            Nevada Properties
                            <br />
                            9406 Del Webb Boulevard
                            <br />
                            Las Vegas, NV 89134
                          </p>
                        </div>
                      </div>

                      {/* Community Address */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">
                            Del Webb North Ranch
                          </h3>
                          <p className="text-text-dark">
                            2290 Beauty Vista Avenue
                            <br />
                            North Las Vegas, NV 89086
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* License Info */}
                    <div className="mt-8 p-6 bg-bg-light rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">
                        License Information
                      </h3>
                      <p className="text-sm text-text-dark">
                        <strong>License:</strong> S.0197614.LLC
                        <br />
                        <strong>Brokerage:</strong> Berkshire Hathaway
                        HomeServices Nevada Properties
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                Ready to Schedule a Tour?
              </h2>
              <p className="text-lg text-text-dark mb-6">
                The best way to experience Del Webb North Ranch is to see it in
                person. Schedule a private tour to walk the community, explore
                the amenities, and step inside the homes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7025001064"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 500-1064
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
