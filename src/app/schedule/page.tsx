import type { Metadata } from 'next';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import ScheduleTour from '@/../components/ScheduleTour';
import { Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { oldSiteData } from '@/lib/fetchOldSiteData';

export const metadata: Metadata = {
  title: 'Schedule a Tour | Del Webb North Ranch | Dr. Jan Duffy',
  description:
    'Schedule a private tour of Del Webb North Ranch with Dr. Jan Duffy. Walk the community, explore amenities, and see available homes. Book your appointment online.',
  alternates: {
    canonical: 'https://www.delwebbnorthranchhomes.com/schedule',
  },
  openGraph: {
    title: 'Schedule a Tour | Del Webb North Ranch',
    description:
      'Book a private tour of Del Webb North Ranch 55+ community in North Las Vegas. Schedule online with Dr. Jan Duffy.',
    url: 'https://www.delwebbnorthranchhomes.com/schedule',
    siteName: 'Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule a Tour | Del Webb North Ranch',
    description: 'Book your private tour of Del Webb North Ranch community.',
  },
};

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Calendar className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Schedule Your Private Tour | Del Webb North Ranch 55+ Community
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                Experience Del Webb North Ranch in person. Walk the community,
                explore the amenities, and step inside the homes. No pressure,
                no obligation—just the information you need.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-bg-light rounded-lg">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-2">Tour Duration</h3>
                  <p className="text-text-dark">60-90 minutes</p>
                </div>
                <div className="text-center p-6 bg-bg-light rounded-lg">
                  <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-2">Location</h3>
                  <p className="text-text-dark">Del Webb North Ranch</p>
                  <p className="text-sm text-gray-600 mt-1">
                    2290 Beauty Vista Avenue
                  </p>
                </div>
                <div className="text-center p-6 bg-bg-light rounded-lg">
                  <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-2">Questions?</h3>
                  <a
                    href="tel:7025001064"
                    className="text-accent hover:text-primary transition-colors"
                  >
                    (702) 500-1064
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendly Inline Widget */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-three p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center font-playfair">
                  Select Your Preferred Date & Time
                </h2>
                <p className="text-text-dark text-center mb-8">
                  Choose a time that works for you. Dr. Jan Duffy will confirm
                  your appointment and provide all the details you need.
                </p>
                <ScheduleTour inline={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                Prefer to Call or Email?
              </h2>
              <p className="text-text-dark mb-6">
                You can also reach out directly to schedule your tour or ask any
                questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7025001064"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 500-1064
                </a>
                <a
                  href="mailto:sales@delwebbnorthranchhomes.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-md font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Send Email
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
