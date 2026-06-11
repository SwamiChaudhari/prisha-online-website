"use client";

import { useState } from "react";
import Link from "next/link";
import { businessInfo } from "@/data/business";
import { Phone, MessageCircle, Menu, X, MapPin, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 bg-gradient-to-br from-royal-600 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-royal-600/20">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-deep-900">{businessInfo.shortName}</span>
              <span className="block text-[10px] text-royal-600 font-semibold uppercase tracking-wider -mt-0.5">CSC Certified</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-royal-600 hover:bg-royal-50 rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-royal-600 hover:text-royal-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{businessInfo.phone}</span>
            </a>
            <a
              href={`https://wa.me/${businessInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2.5 px-5"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-royal-600 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 text-slate-700 hover:text-royal-600 hover:bg-royal-50 rounded-xl transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center gap-3 px-4 py-3.5 text-royal-600 font-semibold bg-royal-50 rounded-xl"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3.5 bg-green-500 text-white rounded-xl font-semibold"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
