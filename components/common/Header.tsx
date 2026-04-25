"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Meet the CEO", href: "/ceo" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "py-4 border-b border-[var(--color-accent-line)]/20"
          : "bg-transparent py-8"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="z-50">
          <Image
            src="/images/logo.png"
            alt="TAD Architectural Firm"
            width={120}
            height={48}
            priority
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition-colors hover:text-[var(--color-accent-hover)] ${
                pathname === item.href
                  ? "text-[var(--color-text-pri)] font-medium border-b border-[var(--color-text-pri)]"
                  : "text-[var(--color-text-pri)]/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-[var(--color-bg-main)] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] md:hidden overflow-y-auto ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-serif text-3xl font-light hover:text-[var(--color-accent-hover)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
}
