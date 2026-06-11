import { serviceCategories, services } from "@/data/services";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Services | Prisha Online Multiservices",
  description:
    "Browse all government and digital services offered by Prisha Online Multiservices — Aadhaar, PAN, Passport, Certificates, GST, Schemes and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Complete range of government and digital services under one roof.
            Fast, reliable, and affordable.
          </p>
        </div>
      </section>

      <ServicesSection />

      {/* Category Quick Links */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all font-medium"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
