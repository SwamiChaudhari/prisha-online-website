"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { MessageCircle, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I need help with: ${formData.service}\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919145564291?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-section" id="contact-form">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="section-heading">Get in Touch</span>
          <h2 className="section-title">Send us a Message</h2>
          <p className="section-subtitle">
            Send us your query and we&apos;ll get back to you quickly via WhatsApp
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-premium border border-slate-100"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="label">Full Name <span className="text-red-500">*</span></label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="input-field" />
            </div>
            <div>
              <label htmlFor="mobile" className="label">Mobile Number <span className="text-red-500">*</span></label>
              <input type="tel" id="mobile" name="mobile" required value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile number" className="input-field" />
            </div>
            <div>
              <label htmlFor="service" className="label">Service Needed</label>
              <select id="service" name="service" value={formData.service} onChange={handleChange} className="input-field">
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="label">Message</label>
              <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Describe your requirement..." className="input-field resize-none" />
            </div>
            <button type="submit" className="btn-whatsapp w-full justify-center text-lg py-4">
              <MessageCircle className="w-5 h-5" />
              Send via WhatsApp
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
