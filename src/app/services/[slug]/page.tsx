import { serviceCategories, getServiceBySlug, getAllServiceSlugs, getServicesByCategory } from "@/data/services";
import { businessInfo } from "@/data/business";
import DocumentList from "@/components/DocumentList";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-primary-600 hover:underline">
            ← Back to all services
          </Link>
        </div>
      </div>
    );
  }

  const relatedServices = getServicesByCategory(service.categorySlug)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const category = serviceCategories.find((c) => c.slug === service.categorySlug);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/services"
            className="text-white/70 hover:text-white text-sm mb-4 inline-block"
          >
            ← All Services
          </Link>
          {category && (
            <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full ml-3">
              {category.name}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">
            {service.title}
          </h1>
          <p className="text-white/90 text-lg mt-2">{service.shortDesc}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Overview</h2>
                <p className="text-gray-600 leading-relaxed">{service.overview}</p>
              </div>

              {/* Why Needed */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Why is it Needed?</h2>
                <p className="text-gray-600 leading-relaxed">{service.whyNeeded}</p>
              </div>

              {/* Eligibility */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Eligibility</h2>
                <ul className="space-y-2">
                  {service.eligibility.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="text-primary-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Documents */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Required Documents</h2>
                <DocumentList documents={service.documents} />
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 bg-green-50 p-3 rounded-lg">
                      <span className="text-primary-500 font-bold">✓</span>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
                        <h3 className="font-semibold text-gray-800 mb-1">{faq.q}</h3>
                        <p className="text-gray-600 text-sm">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 sticky top-24">
                <h3 className="font-bold text-gray-800 mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Processing Time</span>
                    <p className="font-semibold text-gray-800">{service.processingTime}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Service Charges</span>
                    <p className="font-semibold text-primary-600 text-lg">{service.charges}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp}?text=Hi, I need help with ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-whatsapp text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Call Now
                  </a>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-800 mb-3">Related Services</h3>
                  <div className="space-y-2">
                    {relatedServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-all text-sm text-gray-700 hover:text-primary-600 border border-gray-100"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
