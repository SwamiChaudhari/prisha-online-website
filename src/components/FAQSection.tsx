"use client";

import { useState } from "react";
import { faqs } from "@/data/content";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-slate-50" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-heading">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-royal-200 shadow-lg shadow-royal-100/20"
                  : "border-slate-100 shadow-sm"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${openIndex === index ? "text-royal-600" : "text-slate-400"}`} />
                  <span className="font-semibold text-deep-900 pr-4">{faq.q}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 pl-13">
                  <div className="pl-8 text-slate-600 leading-relaxed border-l-2 border-royal-200 ml-2">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
