"use client";

import { useState, useEffect, useRef } from "react";
import { businessInfo } from "@/data/business";
import { Users, ClipboardCheck, Award, Star, Shield, CheckCircle, Building2, ExternalLink } from "lucide-react";

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function TrustSection() {
  const stats = [
    { icon: Users, value: 5000, suffix: "+", label: "Happy Customers", color: "from-royal-400 to-royal-600" },
    { icon: ClipboardCheck, value: 15000, suffix: "+", label: "Services Completed", color: "from-emerald-400 to-emerald-600" },
    { icon: Award, value: 5, suffix: "+", label: "Years Experience", color: "from-amber-400 to-amber-600" },
    { icon: Star, value: 4, suffix: ".8/5", label: "Customer Rating", color: "from-royal-300 to-royal-500" },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-premium overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-royal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-400 font-bold uppercase tracking-widest text-sm mb-3">Why Trust Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Numbers That Speak</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Serving the community of Varale and Talegaon Dabhade with dedication and trust since {businessInfo.established}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="glass-border bg-white/5 backdrop-blur-xl rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-white/60 text-xs sm:text-sm mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Certificate Showcase */}
        <div className="mb-16">
          <h3 className="text-center text-white font-bold text-xl mb-8">Our Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* ISB Certificate */}
            <div className="glass-border bg-white/5 backdrop-blur-xl rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-3">
                <img
                  src="/images/isb-certificate.jpg"
                  alt="ISB Certificate - Saurav Ganesh Chaudhari"
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-sm">ISB Certificate in Entrepreneurship</p>
                <p className="text-white/50 text-xs mt-1">Indian School of Business</p>
                <p className="text-emerald-400 text-xs font-semibold mt-1">Saurav Ganesh Chaudhari</p>
              </div>
            </div>

            {/* CSC Certificate Placeholder */}
            <div className="glass-border bg-white/5 backdrop-blur-xl rounded-2xl p-4 hover:bg-white/10 transition-all duration-300">
              <div className="bg-gradient-to-br from-royal-100 to-royal-200 rounded-xl h-40 sm:h-48 flex items-center justify-center mb-3">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-royal-600 mx-auto mb-2" />
                  <p className="text-royal-800 font-bold text-sm">CSC Certificate</p>
                  <p className="text-royal-600 text-xs">Common Service Center</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-sm">CSC Service Provider</p>
                <p className="text-white/50 text-xs mt-1">Government Authorized</p>
                <p className="text-emerald-400 text-xs font-semibold mt-1">Verified Center</p>
              </div>
            </div>

            {/* Digital India */}
            <div className="glass-border bg-white/5 backdrop-blur-xl rounded-2xl p-4 hover:bg-white/10 transition-all duration-300">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl h-40 sm:h-48 flex items-center justify-center mb-3">
                <div className="text-center">
                  <Building2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                  <p className="text-emerald-800 font-bold text-sm">Digital India</p>
                  <p className="text-emerald-600 text-xs">Digital Seva Partner</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-sm">Digital India Partner</p>
                <p className="text-white/50 text-xs mt-1">Maha e-Seva Portal</p>
                <p className="text-emerald-400 text-xs font-semibold mt-1">Active Since {businessInfo.established}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {[
            { icon: Shield, label: "CSC Certified Center", desc: "Government Authorized" },
            { icon: Building2, label: "Maha e-Seva", desc: "Maharashtra State Portal" },
            { icon: CheckCircle, label: "Digital India", desc: "Digital Seva Partner" },
            { icon: Award, label: "ISB Certified", desc: "Entrepreneur Certified" },
          ].map((badge, i) => (
            <div key={i} className="glass flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 text-white">
              <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <div>
                <p className="font-semibold text-xs sm:text-sm">{badge.label}</p>
                <p className="text-white/50 text-[10px] sm:text-xs">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
