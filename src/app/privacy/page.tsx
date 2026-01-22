import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Del Webb North Ranch | North Las Vegas",
  description:
    "Privacy policy for Del Webb North Ranch website. Learn how we collect, use, and protect your information when you contact Dr. Jan Duffy about 55+ community homes in North Las Vegas.",
  alternates: {
    canonical: "https://www.delwebbnorthranchhomes.com/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-playfair">
                Privacy Policy
              </h1>
              <div className="prose prose-lg max-w-none space-y-6 text-text-dark">
                <p className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4 font-playfair">
                    Information We Collect
                  </h2>
                  <p>
                    When you contact us through our website, we collect
                    information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Message content</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4 font-playfair">
                    How We Use Your Information
                  </h2>
                  <p>We use the information you provide to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respond to your inquiries and requests</li>
                    <li>Schedule property tours and consultations</li>
                    <li>Send you information about Del Webb North Ranch</li>
                    <li>Improve our services and website</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4 font-playfair">
                    Information Sharing
                  </h2>
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Berkshire Hathaway HomeServices Nevada Properties (our
                      brokerage)
                    </li>
                    <li>Service providers who assist in our operations</li>
                    <li>
                      When required by law or to protect our rights and safety
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4 font-playfair">
                    Data Security
                  </h2>
                  <p>
                    We implement appropriate security measures to protect your
                    personal information. However, no method of transmission over
                    the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4 font-playfair">
                    Your Rights
                  </h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4 font-playfair">
                    Contact Us
                  </h2>
                  <p>
                    If you have questions about this Privacy Policy, please
                    contact us:
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:sales@delwebbnorthranchhomes.com"
                      className="text-primary hover:underline"
                    >
                      sales@delwebbnorthranchhomes.com
                    </a>
                    <br />
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:7025001064"
                      className="text-primary hover:underline"
                    >
                      (702) 500-1064
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
