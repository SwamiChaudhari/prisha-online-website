"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "/images/WhatsApp Image 2026-06-11 at 3.47.39 PM (1).jpeg", category: "Office", alt: "Office Photo" },
  { src: "/images/WhatsApp Image 2026-06-11 at 3.47.39 PM.jpeg", category: "Office", alt: "Office Photo" },
  { src: "/images/WhatsApp Image 2026-06-11 at 3.47.40 PM (1).jpeg", category: "Office", alt: "Office Photo" },
  { src: "/images/WhatsApp Image 2026-06-11 at 3.47.40 PM.jpeg", category: "Office", alt: "Office Photo" },
  { src: "/images/WhatsApp Image 2026-06-11 at 3.47.42 PM (1).jpeg", category: "Office", alt: "Office Photo" },
  { src: "/images/WhatsApp Image 2026-06-11 at 3.47.42 PM.jpeg", category: "Office", alt: "Office Photo" },
  { src: "/images/WhatsApp Image 2026-06-11 at 3.53.27 PM.jpeg", category: "Office", alt: "Office Photo" },
  { src: "/images/isb-certificate.jpg", category: "Certificates", alt: "ISB Certificate" },
  { src: "/images/logo.png", category: "Certificates", alt: "Prisha Logo" },
];

const categories = ["All", "Office", "Certificates", "Events"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  }, [lightboxIndex, filteredImages.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
    );
  }, [lightboxIndex, filteredImages.length]);

  return (
    <section className="py-16 md:py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="section-heading">Gallery</span>
          <h2 className="section-title">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="section-subtitle">
            Take a look at our office, certificates, and events
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-royal-600 text-white shadow-lg shadow-royal-600/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-deep-900/0 group-hover:bg-deep-900/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-deep-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-medium">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-deep-900/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-xl px-4 py-2">
              <p className="text-white text-sm font-medium">
                {filteredImages[lightboxIndex].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
