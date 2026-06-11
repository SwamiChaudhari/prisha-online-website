import Link from "next/link";
import { businessInfo } from "@/data/business";
import { serviceCategories } from "@/data/services";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Business Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  {businessInfo.shortName}
                </span>
                <span className="block text-xs text-gray-400 -mt-1">
                  Multiservices
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {businessInfo.tagline}. {businessInfo.certification} serving the
              community since {businessInfo.established}.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <span>{businessInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-400 shrink-0" />
                <span>{businessInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link
                href="/"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1"
              >
                <ChevronRight className="w-3 h-3" /> Home
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1"
              >
                <ChevronRight className="w-3 h-3" /> Services
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1"
              >
                <ChevronRight className="w-3 h-3" /> About Us
              </Link>
              <Link
                href="/faq"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1"
              >
                <ChevronRight className="w-3 h-3" /> FAQ
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1"
              >
                <ChevronRight className="w-3 h-3" /> Contact
              </Link>
              <Link
                href="/blog"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1"
              >
                <ChevronRight className="w-3 h-3" /> Blog
              </Link>
              <Link
                href="/payment"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1"
              >
                <ChevronRight className="w-3 h-3" /> Payment
              </Link>
              <Link
                href="/search"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1"
              >
                <ChevronRight className="w-3 h-3" /> Search
              </Link>
            </div>

            <h4 className="text-sm font-semibold text-white mt-6 mb-3">
              Service Categories
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {serviceCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/services#${cat.slug}`}
                  className="text-gray-500 hover:text-primary-400 transition-colors text-xs flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3" /> {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500">Call Us</span>
                  <span className="text-white font-medium">
                    {businessInfo.phone}
                  </span>
                </div>
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-whatsapp transition-colors"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-whatsapp" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500">WhatsApp</span>
                  <span className="text-white font-medium">
                    {businessInfo.phone}
                  </span>
                </div>
              </a>
              <a
                href={`mailto:${businessInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500">Email</span>
                  <span className="text-white font-medium text-sm">
                    {businessInfo.email}
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">
                <strong className="text-white">ISB Certified</strong>{" "}
                Entrepreneur
              </p>
              <p className="text-xs text-gray-500">
                Serving {businessInfo.customersServed} customers with{" "}
                {businessInfo.servicesCompleted} services completed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} {businessInfo.name}. All rights
              reserved.
            </p>
            <p className="text-xs">
              Designed with care for the community of Talegaon Dabhade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
