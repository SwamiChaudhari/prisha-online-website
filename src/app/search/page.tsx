"use client";

import { useState, useMemo } from "react";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return services.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.titleMr.includes(q) ||
        s.shortDesc.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.overview.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Search Services</h1>
          <p className="text-white/90 text-lg mb-8">
            Find the service you need
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for Aadhaar, PAN, GST..."
              className="w-full px-6 py-4 rounded-full text-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-300 pr-12"
              autoFocus
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {query.trim() && (
            <p className="text-gray-500 mb-6">
              {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </p>
          )}

          {results.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((service) => (
                <ServiceCard key={service.slug} title={service.title} category={service.category} shortDesc={service.shortDesc} slug={service.slug} icon={service.icon} />
              ))}
            </div>
          ) : query.trim() ? (
            <div className="text-center py-16">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No services found</h3>
              <p className="text-gray-500 mb-4">Try a different search term or browse all services.</p>
              <Link href="/services" className="text-primary-600 hover:underline font-medium">
                View all services →
              </Link>
            </div>
          ) : (
            <div className="text-center py-16">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <h3 className="text-xl font-bold text-gray-700 mb-2">Start typing to search</h3>
              <p className="text-gray-500">Search for any government service like PAN, Aadhaar, GST...</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
