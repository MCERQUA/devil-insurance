"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Phone, Mail, MapPin, Clock, Shield, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

const inputClass =
  "w-full px-4 py-3 rounded-sm border border-gray-200 bg-white text-[#1A0A0F] placeholder-gray-400 focus:outline-none focus:border-[#C8A42A] focus:ring-2 focus:ring-[#C8A42A]/30 transition-all text-sm";
const labelClass = "block text-sm font-body font-semibold text-[#1A0A0F] mb-1.5";

export default function ContactPage() {
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
        <section className="bg-[#F5F0F0] pt-32 pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#8B1538] mb-6">
                  <Shield className="w-4 h-4 text-[#C8A42A]" />
                  <span className="text-xs font-bold text-[#C8A42A] uppercase tracking-wider">Contact Devil Insurance</span>
                </div>
                <h1 className="font-display font-800 uppercase text-[#8B1538] text-4xl md:text-5xl mb-4">
                  Get in Touch
                </h1>
                <p className="text-lg text-[#6B5B5F] max-w-xl mx-auto font-body">
                  A real local agent will respond the same business day. No phone trees, no bots.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact info */}
              <FadeIn direction="right" className="space-y-5">
                <div className="p-5 rounded-sm bg-white border border-gray-200 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C8A42A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-bold text-[#8B1538] text-sm mb-1">Call Us</p>
                    <a href={SITE.phoneHref} className="text-[#6B5B5F] text-sm hover:text-[#8B1538] transition-colors">{SITE.phone}</a>
                  </div>
                </div>
                <div className="p-5 rounded-sm bg-white border border-gray-200 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C8A42A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-bold text-[#8B1538] text-sm mb-1">Email Us</p>
                    <a href={`mailto:${SITE.email}`} className="text-[#6B5B5F] text-sm hover:text-[#8B1538] transition-colors break-all">{SITE.email}</a>
                  </div>
                </div>
                <div className="p-5 rounded-sm bg-white border border-gray-200 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C8A42A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-bold text-[#8B1538] text-sm mb-1">Address</p>
                    <p className="text-[#6B5B5F] text-sm">12220 E Riggs Road<br />Suite #105<br />Chandler, AZ 85249</p>
                  </div>
                </div>
                <div className="p-5 rounded-sm bg-white border border-gray-200 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C8A42A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-bold text-[#8B1538] text-sm mb-1">Business Hours</p>
                    <p className="text-[#6B5B5F] text-sm">Mon–Fri 8am–5pm<br />Arizona (MST)</p>
                  </div>
                </div>
                <div className="p-5 rounded-sm bg-[#8B1538] text-center">
                  <p className="text-[#C8A42A] font-display font-700 text-sm uppercase tracking-wider mb-2">Need a Quote Fast?</p>
                  <Link href="/quote" className="btn-primary w-full justify-center text-xs">
                    Quote Request Form <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </FadeIn>

              {/* Contact form */}
              <FadeIn className="lg:col-span-2">
                <form
                  data-netlify="true"
                  name="contact"
                  netlify-honeypot="bot-field"
                  action="/thank-you"
                  className="rounded-sm p-8 md:p-10 space-y-6 bg-white border border-gray-200 shadow-lift"
                >
                  <input type="hidden" name="form-name" value="contact" />
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
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input id="email" name="email" type="email" required placeholder="jane@example.com" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="(480) 555-0100" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="subject" className={labelClass}>Subject *</label>
                      <select id="subject" name="subject" required defaultValue="" className={inputClass}>
                        <option value="">Select…</option>
                        <option>Get a quote</option>
                        <option>Questions about my policy</option>
                        <option>Help with a claim</option>
                        <option>Make a payment</option>
                        <option>General inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Message *</label>
                    <textarea
                      id="message" name="message" rows={5} required
                      placeholder="How can we help? Tell us about your coverage needs or questions…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-center text-[#6B5B5F] font-body">
                    We respond the same business day. Your info is never shared or sold.
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
