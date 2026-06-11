"use client";

import { services, serviceCategories } from "@/data/services";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

function getCategoryIcon(iconName: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    Fingerprint: Icons.Fingerprint, FileText: Icons.FileText, Briefcase: Icons.Briefcase,
    Wheat: Icons.Wheat, Landmark: Icons.Landmark, GraduationCap: Icons.GraduationCap,
    UserCheck: Icons.UserCheck, Monitor: Icons.Monitor, Shield: Icons.Shield,
    Plane: Icons.Plane, Receipt: Icons.Receipt, Map: Icons.Map,
  };
  return map[iconName] || Icons.Folder;
}

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Complete range of government and digital services under one roof — fast, reliable, and affordable
          </p>
        </div>

        {/* Service Categories */}
        {serviceCategories.map((category) => {
          const categoryServices = services.filter((s) => s.categorySlug === category.slug);
          if (categoryServices.length === 0) return null;
          const CatIcon = getCategoryIcon(category.icon);

          return (
            <div key={category.slug} className="mb-16" id={category.slug}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-royal-500 to-royal-700 rounded-2xl flex items-center justify-center shadow-lg shadow-royal-500/20">
                  <CatIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-deep-900">{category.name}</h3>
                  <span className="text-sm text-slate-500">{category.nameMr}</span>
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {categoryServices.map((service) => {
                  const IconComp = getIcon(service.icon);
                  return (
                    <Link key={service.slug} href={`/services/${service.slug}`}>
                      <div className="card-service h-full flex flex-col">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-11 h-11 bg-royal-50 group-hover:bg-royal-100 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300">
                            <IconComp className="w-5 h-5 text-royal-600" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-semibold text-deep-900 group-hover:text-royal-600 transition-colors text-sm leading-tight">
                              {service.title}
                            </h4>
                            <span className="text-[11px] text-slate-400">{service.processingTime}</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 flex-1 leading-relaxed line-clamp-2">
                          {service.shortDesc}
                        </p>
                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-semibold text-emerald-600">{service.charges}</span>
                          <span className="text-xs font-medium text-royal-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn More <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
