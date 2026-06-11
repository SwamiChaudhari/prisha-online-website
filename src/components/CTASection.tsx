"use client";

import { businessInfo } from "@/data/business";
import { MessageCircle, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-cta overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Get your government documents and services done quickly and easily. 
          Contact us today for fast, reliable assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${businessInfo.whatsapp}?text=Hi, I need help with a service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-xl text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Now
          </a>
          <a
            href={`tel:${businessInfo.phone}`}
            className="inline-flex items-center justify-center gap-2 bg-deep-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-deep-800 transition-all shadow-xl text-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
