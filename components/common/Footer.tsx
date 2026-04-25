import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Instagram, Linkedin, Facebook, Youtube, Mail, Phone, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-sec)] text-[var(--color-text-sec)] py-20 lg:py-24 font-sans">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl">TAD</h3>
            <p className="max-w-xs text-sm text-[var(--color-text-sec)]/70">
              Architectural Precision. Timeless designs tailored for luxury living.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/houseoftad/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-hover)] transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61585815691896" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-hover)] transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/tadarchitecture/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-hover)] transition-colors">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.youtube.com/channel/UCgDUAuiEgz7M9LQhnkdbA7Q" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-hover)] transition-colors">
                <Youtube size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-accent-line)]">Menu</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-[var(--color-accent-hover)] transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-[var(--color-accent-hover)] transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-accent-hover)] transition-colors">Services</Link></li>
              <li><Link href="/ceo" className="hover:text-[var(--color-accent-hover)] transition-colors">Meet the CEO</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-accent-hover)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-accent-line)]">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services/architectural" className="hover:text-[var(--color-accent-hover)] transition-colors">Architectural Design</Link></li>
              <li><Link href="/services/interior" className="hover:text-[var(--color-accent-hover)] transition-colors">Interior Design</Link></li>
              <li><Link href="/services/restoration" className="hover:text-[var(--color-accent-hover)] transition-colors">Restoration Works</Link></li>
              <li><Link href="/services/turnkey" className="hover:text-[var(--color-accent-hover)] transition-colors">Turnkey Projects</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-accent-line)]">Contact</h4>
            <ul className="space-y-4 text-sm text-[var(--color-text-sec)]/80">
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span>0310-7773531</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <a href="mailto:info@tadarch.co" className="hover:text-white transition-colors">info@tadarch.co</a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe size={18} />
                <a href="https://www.tadarch.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.tadarch.co</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-accent-line)]/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-text-sec)]/50">
          <p>&copy; {new Date().getFullYear()} TAD Architects. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
