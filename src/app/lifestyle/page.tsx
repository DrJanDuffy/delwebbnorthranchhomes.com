import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import ScrollAnimation from "@/../components/scroll-animation";
import {
  Users,
  Calendar,
  Heart,
  Music,
  BookOpen,
  UtensilsCrossed,
  Gamepad2,
  Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lifestyle | Del Webb North Ranch | Community Life & Activities",
  description:
    "Discover the vibrant lifestyle at Del Webb North Ranch. Join clubs, attend events, and connect with neighbors in North Las Vegas's premier 55+ community.",
};

const clubs = [
  {
    icon: <Heart className="w-8 h-8" />,
    name: "Health & Wellness",
    description: "Walking groups, fitness classes, and wellness workshops",
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    name: "Games & Recreation",
    description: "Pickleball, bocce, card games, and billiards leagues",
  },
  {
    icon: <Music className="w-8 h-8" />,
    name: "Arts & Culture",
    description: "Book clubs, music groups, and art classes",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8" />,
    name: "Culinary",
    description: "Cooking classes, wine tastings, and dining groups",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    name: "Photography",
    description: "Photo walks and photography workshops",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    name: "Learning",
    description: "Educational seminars and discussion groups",
  },
];

const events = [
  {
    title: "Community Socials",
    description:
      "Monthly gatherings at the clubhouse with food, music, and dancing",
  },
  {
    title: "Holiday Celebrations",
    description:
      "Special events for holidays throughout the year with themed activities",
  },
  {
    title: "Fitness Challenges",
    description:
      "Community-wide fitness programs and friendly competitions",
  },
  {
    title: "Educational Seminars",
    description:
      "Guest speakers on topics like health, finance, and local history",
  },
];

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function LifestylePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                A Lifestyle Built for Living
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Del Webb North Ranch isn't just a place to live—it's a vibrant
                community where neighbors become friends and every day offers new
                opportunities to connect, learn, and enjoy life.
              </p>
            </div>
          </div>
        </section>

        {/* Community Life */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-three bg-bg-light">
                    <Image
                      src="/images/lifestyle/community-life.jpg"
                      alt="Residents enjoying community activities at Del Webb North Ranch"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={100}>
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6 font-playfair">
                      More Than Neighbors—A Community
                    </h2>
                    <div className="prose prose-lg max-w-none space-y-4">
                      <p className="text-base md:text-lg text-text-dark leading-relaxed">
                        At Del Webb North Ranch, you'll find a community of
                        active adults who chose this lifestyle on purpose. They're
                        here to live fully, not just exist.
                      </p>
                      <p className="text-base md:text-lg text-text-dark leading-relaxed">
                        Whether you're joining a morning pickleball game, attending
                        a club meeting, or simply chatting with neighbors on a
                        walk, you'll discover that making friends comes naturally
                        here.
                      </p>
                      <p className="text-base md:text-lg text-text-dark leading-relaxed font-semibold">
                        Everyone here gets it. They understand what you're looking
                        for because they're looking for the same thing: a place to
                        finally do everything you've been putting off.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Clubs & Groups */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-playfair">
                  Join a Club, Start a Group
                </h2>
                <p className="text-lg text-text-dark max-w-2xl mx-auto">
                  With dozens of active clubs and groups, there's something for
                  everyone. Don't see what you're looking for? Start your own!
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubs.map((club, index) => (
                  <ScrollAnimation key={club.name} delay={index * 50}>
                    <div className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow">
                      <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                        <div className="text-primary">{club.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2 font-playfair">
                        {club.name}
                      </h3>
                      <p className="text-text-dark">{club.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Events & Activities */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Calendar className="w-10 h-10 text-primary" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-playfair">
                    Community Events
                  </h2>
                </div>
                <p className="text-lg text-text-dark max-w-2xl mx-auto">
                  Regular events and activities bring the community together
                  throughout the year.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <ScrollAnimation key={event.title} delay={index * 50}>
                    <div className="bg-bg-light p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                        {event.title}
                      </h3>
                      <p className="text-text-dark leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Connections */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                  Built-In Social Network
                </h2>
                <p className="text-lg text-text-dark">
                  One of the best parts of living in a 55+ community? Everyone
                  is in the same stage of life. You'll find:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-two">
                  <h3 className="font-semibold text-primary mb-3">
                    Shared Experiences
                  </h3>
                  <p className="text-text-dark">
                    Common life experiences create instant connections and
                    understanding.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two">
                  <h3 className="font-semibold text-primary mb-3">
                    Active Lifestyles
                  </h3>
                  <p className="text-text-dark">
                    Neighbors who want to stay active, social, and engaged.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two">
                  <h3 className="font-semibold text-primary mb-3">
                    No Generational Gap
                  </h3>
                  <p className="text-text-dark">
                    Everyone understands your priorities and lifestyle choices.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two">
                  <h3 className="font-semibold text-primary mb-3">
                    Easy Friendships
                  </h3>
                  <p className="text-text-dark">
                    Making friends happens naturally when everyone is open to
                    connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Experience the Lifestyle for Yourself
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a tour to see the community, meet residents, and learn
                about the clubs and activities available.
              </p>
              <Button
                asChild
                variant="accent"
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
              >
                <Link href="/contact">Schedule Your Tour</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
