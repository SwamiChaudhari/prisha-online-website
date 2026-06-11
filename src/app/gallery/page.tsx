import { businessInfo } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Prisha Online Centre",
  description: "View photos of Prisha Online Centre - our office, certificates, and service center in Varale, Talegaon Dabhade.",
};

const galleryImages = [
  { src: "/images/WhatsApp Image 2026-06-11 at 3.47.39 PM.jpeg", alt: "Prisha Online Centre Office" },
  { src: "/images/WhatsApp Image 2026-06-11 at 3.47.39 PM (1).jpeg", alt: "Service Center" },
  { src: "/images/WhatsApp Image 2026-06-11 at 3.47.40 PM.jpeg", alt: "Office Interior" },
  { src: "/images/WhatsApp Image 2026-06-11 at 3.47.40 PM (1).jpeg", alt: "Customer Service" },
  { src: "/images/WhatsApp Image 2026-06-11 at 3.47.42 PM.jpeg", alt: "Certificates" },
  { src: "/images/WhatsApp Image 2026-06-11 at 3.47.42 PM (1).jpeg", alt: "Awards & Recognition" },
  { src: "/images/WhatsApp Image 2026-06-11 at 3.53.27 PM.jpeg", alt: "Team" },
  { src: "/images/isb-certificate.jpg", alt: "ISB Certificate" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-hero py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-white/80 text-lg">Take a look at our service center and certificates</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-slate-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
