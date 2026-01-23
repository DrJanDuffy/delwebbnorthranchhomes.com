import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import ScrollAnimation from "@/../components/scroll-animation";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
  description:
    "Read the latest news, tips, and insights about Del Webb North Ranch, a premier 55+ community in North Las Vegas. Learn about active adult living, community events, and real estate tips.",
  alternates: {
    canonical: "https://www.delwebbnorthranchhomes.com/blog",
  },
  openGraph: {
    title: "Blog | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    description:
      "Community news, insights, and tips about Del Webb North Ranch 55+ community and active adult living.",
    url: "https://www.delwebbnorthranchhomes.com/blog",
    siteName: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.delwebbnorthranchhomes.com/images/blog/blog-01.jpg",
        width: 1200,
        height: 630,
        alt: "Del Webb North Ranch blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    description: "Community news and insights about North Las Vegas premier 55+ community.",
    images: ["https://www.delwebbnorthranchhomes.com/images/blog/blog-01.jpg"],
  },
};

// Sample blog posts - replace with actual content from CMS or API
const blogPosts = [
  {
    slug: "welcome-to-del-webb-north-ranch",
    title: "Welcome to Del Webb North Ranch",
    excerpt:
      "Discover what makes Del Webb North Ranch the premier 55+ community in North Las Vegas. From resort-style amenities to a vibrant social scene, learn why so many active adults choose to call this place home.",
    date: "2024-01-15",
    image: "/images/blog/blog-01.jpg",
    category: "Community",
  },
  {
    slug: "why-single-story-living-matters",
    title: "Why Single-Story Living Matters",
    excerpt:
      "All homes at Del Webb North Ranch are single-story, and there's a good reason. Learn why this design choice matters for active adults and how it enhances your quality of life now and in the future.",
    date: "2024-01-10",
    image: "/images/blog/blog-02.jpg",
    category: "Homes",
  },
  {
    slug: "nevada-tax-benefits-for-retirees",
    title: "Nevada Tax Benefits for Retirees",
    excerpt:
      "Nevada's lack of state income tax is a major draw for retirees. Discover how moving to Nevada can help your retirement dollars stretch further.",
    date: "2024-01-05",
    image: "/images/blog/blog-03.jpg",
    category: "Lifestyle",
  },
  {
    slug: "community-clubs-and-activities",
    title: "Community Clubs and Activities",
    excerpt:
      "From pickleball to book clubs, discover the wide variety of clubs and activities available at Del Webb North Ranch. There's something for everyone.",
    date: "2023-12-20",
    image: "/images/blog/post-01.jpg",
    category: "Lifestyle",
  },
  {
    slug: "choosing-the-right-floor-plan",
    title: "Choosing the Right Floor Plan",
    excerpt:
      "With 9 floor plans across three series, how do you choose? This guide helps you understand the differences and find the perfect fit for your lifestyle.",
    date: "2023-12-15",
    image: "/images/blog/post-02.jpg",
    category: "Homes",
  },
  {
    slug: "first-year-living-experience",
    title: "A First-Year Living Experience",
    excerpt:
      "Hear from residents about their first year at Del Webb North Ranch. Learn what surprised them, what they love, and what advice they have for newcomers.",
    date: "2023-12-10",
    image: "/images/blog/post-03.jpg",
    category: "Community",
  },
];

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

function BlogCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
  index: number;
}) {
  return (
    <ScrollAnimation delay={index * 50}>
      <article className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow overflow-hidden h-full flex flex-col">
        <Link href={`/blog/${post.slug}`}>
          <div className="relative h-48 bg-bg-light">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={blurDataURL}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-sm font-semibold">
              {post.category}
            </div>
          </div>
        </Link>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-xl font-bold text-primary mb-3 font-playfair hover:text-accent transition-colors">
              {post.title}
            </h3>
          </Link>
          <p className="text-text-dark leading-relaxed mb-4 flex-grow">
            {post.excerpt}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </ScrollAnimation>
  );
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Blog | Del Webb North Ranch 55+ Real Estate
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Stay informed about Del Webb North Ranch, 55+ living tips, and
                life in North Las Vegas.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                Stay Updated
              </h2>
              <p className="text-lg text-text-dark mb-6">
                Want to receive updates about new blog posts and community news?
                Contact Dr. Jan Duffy to be added to our newsletter.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
