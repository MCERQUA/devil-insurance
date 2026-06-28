import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You — Your Request Has Been Received",
  description: "Thank you for contacting Devil Insurance. A local East Valley agent will follow up shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-[70vh] flex items-center bg-[#F5F0F0] py-24">
          <div className="container-tight text-center">
            <FadeIn>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#8B1538] mb-8">
                <CheckCircle className="w-10 h-10 text-[#C8A42A]" />
              </div>
              <h1 className="font-display font-800 uppercase text-[#8B1538] text-4xl sm:text-5xl mb-4">
                Got It — Thank You!
              </h1>
              <p className="text-xl text-[#6B5B5F] font-body leading-relaxed mb-8 max-w-lg mx-auto">
                Your request has been received. A local Devil Insurance agent will follow up the same business day — usually within a few hours.
              </p>
              <div className="bg-white rounded-sm border border-gray-200 p-6 mb-8 max-w-md mx-auto">
                <p className="text-sm text-[#6B5B5F] font-body mb-3">Need to reach us right away?</p>
                <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 font-display font-700 uppercase text-[#8B1538] text-xl hover:text-[#5C0A1E] transition-colors">
                  <Phone className="w-6 h-6" />
                  {SITE.phone}
                </a>
                <p className="text-xs text-[#6B5B5F] mt-2">Mon–Fri 8am–5pm MST</p>
              </div>
              <Link href="/" className="btn-maroon">
                Back to Home <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
