import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Devil Insurance privacy policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white">
        <div className="container-tight">
          <h1 className="font-display font-800 uppercase text-[#8B1538] text-4xl mb-8">Privacy Policy</h1>
          <div className="prose prose-sm max-w-none text-[#6B5B5F] font-body leading-relaxed space-y-6">
            <p className="text-xs text-[#6B5B5F]">Last updated: June 2026</p>
            <p>Devil Insurance, a brand of Contractors Choice Agency (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operates {SITE.url}. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or contact us.</p>
            <h2 className="font-display font-700 uppercase text-[#8B1538] text-xl">Information We Collect</h2>
            <p>We collect information you voluntarily provide — name, email address, phone number, and insurance needs — when you submit quote requests or contact forms. We also collect standard web analytics data (pages visited, referring URLs, browser type) through aggregated, anonymized tools.</p>
            <h2 className="font-display font-700 uppercase text-[#8B1538] text-xl">How We Use Your Information</h2>
            <p>We use your information to respond to quote requests, communicate about your insurance needs, and improve our services. We do not sell, rent, or trade your personal information to third parties. We may share information with insurance carriers as necessary to provide quotes and bind coverage.</p>
            <h2 className="font-display font-700 uppercase text-[#8B1538] text-xl">Traffic Source Capture</h2>
            <p>Our quote and contact forms capture the traffic source (e.g., referring website or UTM parameter) and landing URL of each submission. This data is used solely to understand which channels generate insurance leads and is never shared with third parties for marketing purposes.</p>
            <h2 className="font-display font-700 uppercase text-[#8B1538] text-xl">Cookies</h2>
            <p>We use essential cookies to support website functionality. We do not use advertising cookies or third-party tracking cookies.</p>
            <h2 className="font-display font-700 uppercase text-[#8B1538] text-xl">Data Retention</h2>
            <p>We retain contact form submissions for up to 3 years for follow-up and compliance purposes. You may request deletion of your data by contacting us at {SITE.email}.</p>
            <h2 className="font-display font-700 uppercase text-[#8B1538] text-xl">Contact</h2>
            <p>Questions about this Privacy Policy: <a href={`mailto:${SITE.email}`} className="text-[#8B1538] hover:underline">{SITE.email}</a> · {SITE.phone}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
