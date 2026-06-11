import Link from "next/link";
import { businessInfo } from "@/data/business";
import {
  Phone, MessageCircle, ArrowRight, ShieldCheck, Users, ClipboardCheck,
  Award, MapPin, Star, CheckCircle
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-royal-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              CSC Certified | ISB Entrepreneur
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 leading-tight text-shadow">
              Your Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                Digital Service
              </span>{" "}
              Partner in Varale
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              CSC, Maha e-Seva, Aadhaar, PAN, Certificates, AEPS, Money Transfer & All Online Services Under One Roof
            </p>

            {/* Trust Badges - Glassmorphism */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8">
              {[
                { icon: ShieldCheck, label: "CSC Certified", color: "text-emerald-400" },
                { icon: Users, label: "5000+ Customers", color: "text-amber-400" },
                { icon: ClipboardCheck, label: "15000+ Services", color: "text-royal-300" },
                { icon: Award, label: "5+ Years", color: "text-emerald-400" },
              ].map((badge, i) => (
                <div key={i} className="glass flex items-center gap-2 px-3 py-2 text-white text-xs sm:text-sm font-medium">
                  <badge.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${badge.color}`} />
                  {badge.label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=Hi, I need help with a service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto text-base px-6 py-3.5 shadow-xl shadow-green-500/30"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
              <a
                href={`tel:${businessInfo.phone}`}
                className="btn-outline w-full sm:w-auto text-base px-6 py-3.5"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link
                href="/services"
                className="btn-primary w-full sm:w-auto text-base px-6 py-3.5"
              >
                View Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{businessInfo.address}</span>
            </div>
          </div>

          {/* Right Side - Certificate & Visual — VISIBLE ON ALL SCREENS */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow behind certificate */}
              <div className="absolute inset-0 bg-royal-500/20 rounded-3xl blur-2xl animate-glow" />

              {/* Certificate Card */}
              <div className="relative glass-border bg-white/10 backdrop-blur-xl rounded-3xl p-4 sm:p-5 lg:p-6 shadow-2xl">
                <div className="w-full max-w-[340px] mx-auto bg-white rounded-2xl overflow-hidden shadow-lg mb-3">
                  <img
                    src="/images/isb-certificate.jpg"
                    alt="ISB Certificate - Saurav Ganesh Chaudhari"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-base sm:text-lg">Saurav Ganesh Chaudhari</p>
                  <p className="text-white/70 text-xs sm:text-sm">ISB Certified Entrepreneur</p>
                  <p className="text-emerald-400 text-xs font-semibold mt-1">CSC Service Provider</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 bg-emerald-500 text-white px-3 py-1.5 rounded-xl shadow-lg animate-bounce-gentle">
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  <span className="font-bold text-xs sm:text-sm">4.8 Rating</span>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-amber-500 text-white px-3 py-1.5 rounded-xl shadow-lg animate-bounce-gentle" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span className="font-bold text-xs sm:text-sm">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100L48 95C96 90 192 80 288 73.3C384 66.7 480 63.3 576 66.7C672 70 768 80 864 83.3C960 86.7 1056 83.3 1152 76.7C1248 70 1344 60 1392 55L1440 50V100H0Z" fill="#F8FAFC"/>
        </svg>
      </div>
    </section>
  );
}
