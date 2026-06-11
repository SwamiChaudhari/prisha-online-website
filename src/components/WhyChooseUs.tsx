"use client";

import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { whyChooseUs } from "@/data/content";

function getIcon(iconName: string): LucideIcon {
  const iconMap: Record<string, LucideIcon> = {
    Shield: Icons.Shield,
    Zap: Icons.Zap,
    IndianRupee: Icons.IndianRupee,
    MapPin: Icons.MapPin,
    Users: Icons.Users,
    Building: Icons.Building,
  };
  return iconMap[iconName] || Icons.CheckCircle;
}

export default function WhyChooseUs() {
  const items = whyChooseUs;
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            Trusted by thousands for reliable, fast, and transparent government
            services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={index}
                className="card card-hover text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 group-hover:from-primary-200 group-hover:to-secondary-200 rounded-2xl flex items-center justify-center transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-500 mb-2">{item.titleMr}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
