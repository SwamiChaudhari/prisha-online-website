import { businessInfo } from "@/data/business";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";
import { Shield, Award, CheckCircle, Users, Star, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Prisha Online Centre",
  description: "Learn about Prisha Online Centre — CSC certified service center in Varale, Talegaon Dabhade. ISB certified entrepreneur Saurav Ganesh Chaudhari.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-white/80 text-lg">Your trusted digital service partner in Varale</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-heading">Our Story</span>
              <h2 className="section-title text-3xl md:text-4xl mb-6">Who We Are</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-deep-900">Prisha Online Centre</strong> is a CSC (Common Service Center) certified service provider located in Varale, Talegaon Dabhade, Pune. We are committed to making government and digital services accessible, simple, and hassle-free for everyone.
                </p>
                <p>
                  Our founder, <strong>Saurav Ganesh Chaudhari</strong>, is an ISB (Indian School of Business) Certified Entrepreneur. With deep knowledge of government processes and a commitment to service excellence, we have helped thousands of customers with their document and service needs.
                </p>
                <p>
                  We provide a wide range of services including Aadhaar, PAN Card, Passport, Certificates, AEPS, Money Transfer, Maha e-Seva, and many more — all under one roof.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: "5000+", label: "Customers" },
                  { value: "15000+", label: "Services" },
                  { value: "5+", label: "Years" },
                ].map((s, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-royal-600">{s.value}</p>
                    <p className="text-slate-500 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Owner Card */}
            <div className="bg-gradient-to-br from-royal-50 to-emerald-50 rounded-3xl p-8 border border-royal-100">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
                <img
                  src="/images/isb-certificate.jpg"
                  alt="ISB Certificate - Saurav Ganesh Chaudhari"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-deep-900">Saurav Ganesh Chaudhari</h3>
                <p className="text-royal-600 font-semibold">Founder & ISB Certified Entrepreneur</p>
                <p className="text-slate-500 text-sm mt-1">Indian School of Business (ISB)</p>
                <p className="text-slate-500 text-sm">Certificate Course in Entrepreneurship (CCE)</p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 font-semibold text-sm">CSC Certified Service Provider</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-heading">Credentials</span>
            <h2 className="section-title text-3xl md:text-4xl">Our Certifications</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "CSC Certified", desc: "Government Authorized Service Center", color: "from-royal-500 to-royal-700" },
              { icon: Award, title: "ISB Entrepreneur", desc: "Indian School of Business Certified", color: "from-amber-500 to-amber-700" },
              { icon: CheckCircle, title: "Digital India", desc: "Digital Seva Partner", color: "from-emerald-500 to-emerald-700" },
              { icon: Users, title: "Maha e-Seva", desc: "Maharashtra State Service Portal", color: "from-royal-400 to-royal-600" },
            ].map((cert, i) => (
              <div key={i} className="card-premium text-center">
                <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <cert.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-deep-900 mb-1">{cert.title}</h3>
                <p className="text-slate-500 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-heading">What We Stand For</span>
            <h2 className="section-title text-3xl md:text-4xl">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Trust", desc: "We handle your documents with utmost care and confidentiality. Your data is safe with us.", icon: "🛡️" },
              { title: "Simplicity", desc: "We make complex government processes simple and easy to understand for everyone.", icon: "✨" },
              { title: "Service", desc: "Customer satisfaction is at the heart of everything we do. We go the extra mile.", icon: "💚" },
            ].map((value, i) => (
              <div key={i} className="card-premium text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-deep-900 mb-2">{value.title}</h3>
                <p className="text-slate-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
