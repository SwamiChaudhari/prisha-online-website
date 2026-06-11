import { businessInfo } from "@/data/business";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Prisha Online Multiservices",
  description:
    "Learn about Prisha Online Multiservices — ISB Certified entrepreneur Saurav Ganesh Chaudhari providing trusted government document services in Talegaon Dabhade, Pune.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-white/90 text-lg">
            Your trusted partner for government and digital services
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-primary-600">Prisha Online Multiservices</strong> was
                  founded with a simple mission — to make government services accessible,
                  simple, and hassle-free for everyone.
                </p>
                <p>
                  We understand that dealing with government paperwork can be overwhelming.
                  Long queues, confusing forms, document requirements — it can all be too much.
                  That&apos;s where we come in.
                </p>
                <p>
                  Our founder, <strong>Saurav Ganesh Chaudhari</strong>, is an{" "}
                  <strong>ISB Certified Entrepreneur</strong> from the Indian School of Business.
                  With deep knowledge of government processes and a commitment to service
                  excellence, we have helped thousands of customers with their document needs.
                </p>
                <p>
                  Located in the heart of <strong>Talegaon Dabhade, Pune</strong>, we serve
                  the local community and surrounding areas with a wide range of government
                  and digital services.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Saurav Ganesh Chaudhari</h3>
                <p className="text-primary-600 font-medium">Founder & ISB Certified Entrepreneur</p>
                <p className="text-gray-500 text-sm mt-2">Indian School of Business (ISB)</p>
                <p className="text-gray-500 text-sm">Certificate Course in Entrepreneurship (CCE)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Customers Served", value: businessInfo.customersServed, icon: "👥" },
              { label: "Services Completed", value: businessInfo.servicesCompleted, icon: "✅" },
              { label: "Years Experience", value: businessInfo.yearsExperience, icon: "📅" },
              { label: "Customer Rating", value: businessInfo.rating + "/5", icon: "⭐" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Trust",
                desc: "We handle your documents with utmost care and confidentiality.",
                icon: "🛡️",
              },
              {
                title: "Simplicity",
                desc: "We make complex government processes simple and easy to understand.",
                icon: "✨",
              },
              {
                title: "Service",
                desc: "Customer satisfaction is at the heart of everything we do.",
                icon: "💚",
              },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
