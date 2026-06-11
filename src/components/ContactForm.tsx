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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I need help with: ${formData.service}\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nMessage: ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919145564291?text=${encoded}`, "_blank");
  };

  return (
    <section className="py-16 md:py-20 bg-white" id="contact-form">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Send us your query and we&apos;ll get back to you quickly
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="label">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="label">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="service" className="label">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your requirement..."
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-whatsapp w-full justify-center"
            >
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
