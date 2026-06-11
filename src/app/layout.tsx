import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prisha Online Multiservices | Government & Digital Services",
  description:
    "Fast, reliable assistance for Aadhaar, PAN Card, Passport, Certificates, GST, Government Schemes and Digital Services. ISB Certified. Talegaon Dabhade, Pune.",
  keywords: [
    "Aadhaar update",
    "PAN card",
    "Passport",
    "Income certificate",
    "Caste certificate",
    "GST registration",
    "Government services",
    "Talegaon Dabhade",
    "Pune",
    "Digital services",
  ],
  openGraph: {
    title: "Prisha Online Multiservices",
    description: "Your Trusted Partner for Government & Digital Services",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
