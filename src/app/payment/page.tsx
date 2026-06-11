"use client";

import { useState } from "react";
import { businessInfo } from "@/data/business";

export default function PaymentPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(businessInfo.upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Payment</h1>
          <p className="text-white/90 text-lg">Pay conveniently via UPI</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
              UPI Payment Available
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Scan QR Code</h2>
              <div className="w-48 h-48 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M12 12h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>
                  <p className="text-gray-400 text-xs mt-2">QR Code</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">Scan with any UPI app (GPay, PhonePe, Paytm)</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">UPI Details</h2>
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">UPI ID</span>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="font-mono font-bold text-primary-600 text-lg">{businessInfo.upiId}</p>
                    <button
                      onClick={handleCopy}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                      title="Copy UPI ID"
                    >
                      {copied ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                      )}
                    </button>
                  </div>
                  {copied && <p className="text-primary-600 text-xs mt-1">Copied!</p>}
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Account Name</span>
                  <p className="font-semibold text-gray-800">{businessInfo.shortName}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Supported Apps</span>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {["Google Pay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                      <span key={app} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{app}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-3">Payment Instructions</h3>
            <ol className="space-y-2 text-amber-700 text-sm">
              <li className="flex items-start gap-2"><span className="font-bold">1.</span>Open any UPI app (Google Pay, PhonePe, Paytm, BHIM)</li>
              <li className="flex items-start gap-2"><span className="font-bold">2.</span>Scan the QR code or enter the UPI ID manually</li>
              <li className="flex items-start gap-2"><span className="font-bold">3.</span>Enter the amount and complete the payment</li>
              <li className="flex items-start gap-2"><span className="font-bold">4.</span><strong>Take a screenshot of the payment confirmation</strong></li>
              <li className="flex items-start gap-2"><span className="font-bold">5.</span>Share the screenshot on WhatsApp: <a href={`https://wa.me/${businessInfo.whatsapp}`} className="underline font-semibold">{businessInfo.phone}</a></li>
            </ol>
          </div>

          <div className="mt-8 text-center">
            <a
              href={`https://wa.me/${businessInfo.whatsapp}?text=Hi, I have made a payment. Sharing the screenshot.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white font-semibold px-8 py-4 rounded-full hover:bg-green-600 transition-all shadow-lg text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Share Payment Screenshot
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
