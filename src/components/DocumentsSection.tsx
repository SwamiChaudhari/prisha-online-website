"use client";

import { useState, useEffect, useRef } from "react";
import { services, serviceCategories } from "@/data/services";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "lucide-react";
import { ChevronDown, CheckCircle, Search, FileText, Shield, Award } from "lucide-react";

function getIcon(iconName: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    Fingerprint: Icons.Fingerprint, CreditCard: Icons.CreditCard, Vote: Icons.Vote,
    BookOpen: Icons.BookOpen, Car: Icons.Car, IndianRupee: Icons.IndianRupee,
    Award: Icons.Award, Home: Icons.Home, Baby: Icons.Baby, FileX: Icons.FileX,
    Heart: Icons.Heart, Receipt: Icons.Receipt, Building: Icons.Building,
    Store: Icons.Store, UtensilsCrossed: Icons.UtensilsCrossed, Wheat: Icons.Wheat,
    Sprout: Icons.Sprout, Map: Icons.Map, Shield: Icons.Shield,
    ShieldCheck: Icons.ShieldCheck, Wallet: Icons.Wallet, GraduationCap: Icons.GraduationCap,
    FileInput: Icons.FileInput, PenTool: Icons.PenTool, Briefcase: Icons.Briefcase,
    Wrench: Icons.Wrench, UserCheck: Icons.UserCheck, Printer: Icons.Printer,
    ScanLine: Icons.ScanLine, Camera: Icons.Camera, HeartPulse: Icons.HeartPulse,
    Train: Icons.Train, Plane: Icons.Plane, Landmark: Icons.Landmark,
  };
  return map[iconName] || Icons.FileText;
}

export default function DocumentsSection() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = services.filter((s) => {
    const matchesSearch = !searchQuery || 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.titleMr.includes(searchQuery);
    const matchesCategory = activeCategory === "all" || s.categorySlug === activeCategory;
    return matchesSearch && matchesCategory && s.documents.length > 0;
  });

  return (
    <section className="py-20 px-4 bg-gradient-section" id="documents">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-heading">Document Guide</span>
          <h2 className="section-title">Documents Required</h2>
          <p className="section-subtitle">
            Search any service to see the exact documents needed — no surprises, no extra trips.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search service (e.g., PAN Card, Income Certificate)..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none text-slate-800"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-royal-600 text-white shadow-md"
                : "bg-white text-slate-600 border border-slate-200 hover:border-royal-300"
            }`}
          >
            All Services
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.slug
                  ? "bg-royal-600 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-royal-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filteredServices.map((service) => {
            const isOpen = openSlug === service.slug;
            const IconComp = getIcon(service.icon);
            return (
              <div
                key={service.slug}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-royal-200 shadow-lg shadow-royal-100/30" : "border-slate-100 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenSlug(isOpen ? null : service.slug)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isOpen ? "bg-royal-100" : "bg-slate-100"
                    }`}>
                      <IconComp className={`w-5 h-5 ${isOpen ? "text-royal-600" : "text-slate-500"}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-900">{service.title}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-slate-500">{service.category}</span>
                        <span className="text-xs text-emerald-600 font-medium">{service.processingTime}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 border-t border-slate-100">
                    <div className="grid md:grid-cols-2 gap-6 pt-5">
                      {/* Documents */}
                      <div>
                        <h4 className="font-semibold text-deep-900 mb-3 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-royal-600" />
                          Required Documents
                        </h4>
                        <div className="space-y-2">
                          {service.documents.map((doc, i) => (
                            <div key={i} className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-lg">
                              {doc.required ? (
                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                              ) : (
                                <div className="w-4 h-4 border-2 border-slate-300 rounded-full mt-0.5 shrink-0" />
                              )}
                              <div>
                                <span className="text-sm text-slate-700">{doc.name}</span>
                                {doc.required && (
                                  <span className="ml-2 text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full font-semibold">Required</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div>
                        <h4 className="font-semibold text-deep-900 mb-3 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-emerald-600" />
                          Quick Info
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-emerald-50 rounded-lg">
                            <span className="text-xs text-emerald-600 font-semibold">Processing Time</span>
                            <p className="font-bold text-emerald-800">{service.processingTime}</p>
                          </div>
                          <div className="p-3 bg-royal-50 rounded-lg">
                            <span className="text-xs text-royal-600 font-semibold">Service Charges</span>
                            <p className="font-bold text-royal-800">{service.charges}</p>
                          </div>
                          <a
                            href={`https://wa.me/919145564291?text=Hi, I need help with ${service.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-semibold py-2.5 rounded-lg hover:bg-green-600 transition-colors text-sm"
                          >
                            <Icons.MessageCircle className="w-4 h-4" />
                            Get This Service
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">No services found. Try a different search term.</p>
          </div>
        )}
      </div>
    </section>
  );
}
