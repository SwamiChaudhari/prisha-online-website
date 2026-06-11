"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-3 flex gap-3">
      <a
        href="tel:+919****4291"
        className="flex-1 flex items-center justify-center gap-2 bg-royal-600 text-white font-semibold py-3 rounded-xl"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a
        href="https://wa.me/919145564291"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 rounded-xl"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
}
