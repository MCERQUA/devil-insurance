import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Devil Insurance website terms of use.",
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white">
        <div className="container-tight">
          <h1 className="font-display font-800 uppercase text-[#8B1538] text-4xl mb-8">Terms of Use</h1>
          <div className="prose prose-sm max-w-none text-[#6B5B5F] font-body leading-relaxed space-y-6">
            <p className="text-xs text-[#6B5B5F]">Last updated: June 2026</p>
            <p>By accessing or using {SITE.url}, you agree to these Terms of Use. If you do not agree, please discontinue use of the website.</p>
            <h2 className="font-display font-700 uppercase text-[#8B1538] text-xl">Content Disclaimer</h2>
            <p>The content on this website is for general informational purposes only. Insurance coverage, rates, and eligibility vary by carrier, state, and individual circumstances. Nothing on this website constitutes a binding quote or guarantee of coverage. Contact a licensed agent for specific coverage advice.</p>
            <h2 className="font-display font-700 uppercase text-[#8B1538] text-xl">Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, and images — is the property of Contractors Choice Agency or its licensors. Unauthorized reproduction or distribution is prohibited.</p>
            <h2 className="font-display font-700 uppercase text-[#8B1538] text-xl">Limitation of Liability</h2>
            <p>Contractors Choice Agency / Devil Insurance shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.</p>
            <h2 className="font-display font-700 uppercase text-[#8B1538] text-xl">Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Arizona. Any disputes shall be resolved in Maricopa County, Arizona.</p>
            <h2 className="font-display font-700 uppercase text-[#8B1538] text-xl">Contact</h2>
            <p>Questions: <a href={`mailto:${SITE.email}`} className="text-[#8B1538] hover:underline">{SITE.email}</a> · {SITE.phone}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
