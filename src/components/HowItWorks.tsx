"use client";

import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { howItWorks } from "@/data/content";

function getIcon(iconName: string): LucideIcon {
  const iconMap: Record<string, LucideIcon> = {
    Search: Icons.Search,
    FileCheck: Icons.FileCheck,
    MessageCircle: Icons.MessageCircle,
    Upload: Icons.Upload,
    CheckCircle: Icons.CheckCircle,
  };
  return iconMap[iconName] || Icons.Circle;
}

export default function HowItWorks() {
  const steps = howItWorks;
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get your services done in 5 simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-primary-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step) => {
              const IconComponent = getIcon(step.icon);
              return (
                <div key={step.step} className="relative text-center">
                  {/* Step Badge */}
                  <div className="relative z-10 mx-auto mb-4">
                    <div className="w-16 h-16 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <IconComponent className="w-7 h-7 text-primary-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-accent-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary-500 mb-2">{step.titleMr}</p>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
