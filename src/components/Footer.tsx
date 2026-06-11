import Link from "next/link";
import { businessInfo } from "@/data/business";
import { serviceCategories } from "@/data/services";
import { Phone, MessageCircle, MapPin, Clock, Mail, ChevronRight, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-premium text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Business Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-royal-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">{businessInfo.shortName}</span>
                <span className="block text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">CSC Certified</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              {businessInfo.tagline}. CSC Certified service center serving the community since {businessInfo.established}.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-royal-400 shrink-0" />
                <span>{businessInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-royal-400 shrink-0" />
                <span>{businessInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
            <div className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
                { href: "/payment", label: "Payment" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-royal-400 transition-colors text-sm"
                >
                  <ChevronRight className="w-3 h-3" /> {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Service Categories</h3>
            <div className="space-y-2">
              {serviceCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/services#${cat.slug}`}
                  className="flex items-center gap-1.5 text-slate-500 hover:text-royal-400 transition-colors text-sm"
                >
                  <ChevronRight className="w-3 h-3" /> {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Contact Us</h3>
            <div className="space-y-4">
              <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-3 text-slate-400 hover:text-royal-400 transition-colors">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-royal-400" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">Call Us</span>
                  <span className="text-white font-medium">{businessInfo.phone}</span>
                </div>
              </a>
              <a href={`https://wa.me/${businessInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">WhatsApp</span>
                  <span className="text-white font-medium">{businessInfo.phone}</span>
                </div>
              </a>
              <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-3 text-slate-400 hover:text-royal-400 transition-colors">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-royal-400" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">Email</span>
                  <span className="text-white font-medium text-sm">{businessInfo.email}</span>
                </div>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-semibold text-sm">Verified Center</span>
              </div>
              <p className="text-xs text-slate-500">
                CSC Certified • ISB Entrepreneur • Serving {businessInfo.customersServed} customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
            <p className="text-xs">CSC ID: Registered Service Center • Talegaon Dabhade, Pune</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
