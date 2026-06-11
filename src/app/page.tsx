import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DocumentsSection from "@/components/DocumentsSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <DocumentsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactForm />
    </>
  );
}
