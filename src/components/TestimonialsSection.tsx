"use client";

import { testimonials } from "@/data/content";
import { Star, MapPin, MessageCircle } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Customer Reviews</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real reviews from real customers across Pune and Maharashtra
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-premium group">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < t.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-5">
                <p className="text-slate-700 italic leading-relaxed text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                {t.textEn !== t.text && (
                  <p className="text-xs text-slate-400 mt-2">({t.textEn})</p>
                )}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-gradient-to-br from-royal-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-deep-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-royal-600 font-semibold hover:text-royal-700 transition-colors"
          >
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            See all reviews on Google
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
