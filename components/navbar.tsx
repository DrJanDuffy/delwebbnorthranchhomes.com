"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/homes-for-sale", label: "Homes for Sale" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/amenities", label: "Amenities" },
  { href: "/lifestyle", label: "Lifestyle" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isSticky
          ? "bg-white shadow-sticky py-3"
          : "bg-white/95 backdrop-blur-sm py-4"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-bold text-primary font-playfair"
            aria-label="Del Webb North Ranch Home"
          >
            Del Webb North Ranch
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm xl:text-base text-text-dark hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Phone */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a
              href="tel:7025001064"
              className="flex items-center gap-2 text-sm xl:text-base text-text-dark hover:text-primary transition-colors"
              aria-label="Call (702) 500-1064"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(702) 500-1064</span>
            </a>
            <Button
              asChild
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90 text-sm xl:text-base"
            >
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-dark hover:text-primary transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-dark hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:7025001064"
                className="flex items-center gap-2 text-text-dark hover:text-primary transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">(702) 500-1064</span>
              </a>
              <Button
                asChild
                variant="default"
                className="w-full bg-primary hover:bg-primary/90"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Schedule a Tour
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
