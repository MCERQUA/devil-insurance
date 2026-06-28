"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle, Shield, ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const TOWNS = [
  "Tempe",
  "Chandler",
  "Mesa",
  "Gilbert",
  "Scottsdale",
  "Phoenix",
  "Ahwatukee",
  "Guadalupe",
  "Queen Creek",
  "Maricopa",
  "Other (East Valley / Arizona)",
];

const COVERAGE_LINES = [
  "Home / Homeowners insurance",
  "Auto / Car insurance",
  "Business insurance",
  "Landlord / Rental property insurance",
  "Renters insurance",
  "Bundle — home + auto",
  "Multiple policies",
  "Not sure — help me figure it out",
];

const inputClass =
  "w-full px-4 py-3 rounded-sm border border-gray-200 bg-white text-[#1A0A0F] placeholder-gray-400 focus:outline-none focus:border-[#C8A42A] focus:ring-2 focus:ring-[#C8A42A]/30 transition-all text-sm";
const labelClass = "block text-sm font-body font-semibold text-[#1A0A0F] mb-1.5";

export default function QuotePage() {
  const aeoSrcRef = useRef<HTMLInputElement>(null);
  const aeoUrlRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const p = new URLSearchParams(location.search);
      let src = p.get("utm_source") || p.get("ref") || "";
      if (!src && document.referrer) {
        try { src = new URL(document.referrer).hostname; } catch { src = document.referrer; }
      }
      if (!src) src = "direct";
      if (aeoSrcRef.current) aeoSrcRef.current.value = src;
      if (aeoUrlRef.current) aeoUrlRef.current.value = location.href;
    } catch {}
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#F5F0F0] pt-32 pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#8B1538] mb-6">
                  <Shield className="w-4 h-4 text-[#C8A42A]" />
                  <span className="text-xs font-bold text-[#C8A42A] uppercase tracking-wider">
                    Free Quote · Local East Valley Agents
                  </span>
                </div>
                <h1 className="font-display font-800 uppercase text-[#8B1538] text-4xl md:text-5xl mb-4 tracking-tight">
                  Get Your{" "}
                  <span className="text-[#C8A42A]">Free Insurance Quote</span>
                </h1>
                <p className="text-lg text-[#6B5B5F] max-w-xl mx-auto font-body">
                  Tell us what you need to protect in Tempe or the East Valley — home, car, business, rental, or apartment — and a local agent will follow up the same business day.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Trust sidebar */}
              <FadeIn direction="right" className="space-y-4">
                {[
                  { title: "A real local agency", desc: "We live and work in the East Valley too. You get a neighbor who knows Tempe risks — not an out-of-state 800-number." },
                  { title: "All 5 coverage lines", desc: "Home, auto, business, landlord, and renters — one local agent, often bundled to save you money." },
                  { title: "We know East Valley risks", desc: "Monsoon storms, extreme heat, busy freeways, high-density neighborhoods — we build coverage around how the Valley actually lives." },
                  { title: "No obligation", desc: "Get the quote and compare. No pressure, no commitment, no spam." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-4 rounded-sm bg-white border border-gray-200 hover:border-[#C8A42A] shadow-card transition-colors">
                    <CheckCircle className="w-5 h-5 text-[#C8A42A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body font-bold text-[#8B1538] text-sm">{item.title}</p>
                      <p className="text-[#6B5B5F] text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="p-5 rounded-sm text-center bg-[#8B1538] text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C8A42A] mb-2">Prefer to call?</p>
                  <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 text-white font-display font-semibold text-lg hover:text-[#C8A42A] transition-colors">
                    <Phone className="w-5 h-5" />
                    {SITE.phone}
                  </a>
                  <p className="text-white/60 text-xs mt-1">Mon–Fri 8am–5pm MST</p>
                </div>
              </FadeIn>

              {/* Form */}
              <FadeIn className="lg:col-span-2">
                <form
                  data-netlify="true"
                  name="quote"
                  netlify-honeypot="bot-field"
                  action="/thank-you"
                  className="rounded-sm p-8 md:p-10 space-y-6 bg-white border border-gray-200 shadow-lift"
                >
                  <input type="hidden" name="form-name" value="quote" />
                  {/* AEO traffic-source capture (hidden; never rendered) */}
                  <input type="hidden" name="traffic_source" ref={aeoSrcRef} />
                  <input type="hidden" name="landing_url" ref={aeoUrlRef} />
                  <p className="hidden">
                    <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input id="name" name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="coverage" className={labelClass}>Coverage Needed *</label>
                      <select id="coverage" name="coverage" required defaultValue="" className={inputClass}>
                        <option value="">Select coverage…</option>
                        {COVERAGE_LINES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input id="email" name="email" type="email" required placeholder="jane@example.com" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                      <input id="phone" name="phone" type="tel" required placeholder="(480) 555-0100" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="town" className={labelClass}>Your Community *</label>
                      <select id="town" name="town" required defaultValue="" className={inputClass}>
                        <option value="">Select your city…</option>
                        {TOWNS.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="currentCoverage" className={labelClass}>Current Coverage Status</label>
                      <select id="currentCoverage" name="currentCoverage" defaultValue="" className={inputClass}>
                        <option value="">Select…</option>
                        <option>Currently insured, shopping for a better rate</option>
                        <option>Currently insured, unhappy with my carrier</option>
                        <option>New home / car / business — need coverage</option>
                        <option>Not currently insured</option>
                        <option>Not sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Tell us what you need{" "}
                      <span className="text-[#6B5B5F] font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={4}
                      placeholder="Address or neighborhood, year/type of home, vehicles, business details — anything that helps us quote accurately…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Request My Free Quote <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-center text-[#6B5B5F] font-body">
                    No spam. No commitment. A local East Valley agent will reach out to discuss your needs.
                  </p>
                </form>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
