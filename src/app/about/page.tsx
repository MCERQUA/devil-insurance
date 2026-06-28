import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle, ArrowRight, Shield, MapPin, Award } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Devil Insurance — Tempe & East Valley Local Agency",
  description: "Devil Insurance is a Tempe-area local insurance agency by Contractors Choice Agency. Founded 2005, licensed all 50 states. Home, auto, business, landlord & renters for the East Valley.",
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#3D0612] pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3D0612] to-[#8B1538]/60" />
          <div className="relative container-wide z-10">
            <FadeIn>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#C8A42A]/20 border border-[#C8A42A]/40 mb-6">
                  <Shield className="w-4 h-4 text-[#C8A42A]" />
                  <span className="text-xs font-display font-700 uppercase tracking-widest text-[#C8A42A]">About Us</span>
                </div>
                <h1 className="font-display font-800 uppercase text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
                  Tempe&apos;s Local<br />Insurance Agency
                </h1>
                <p className="text-xl text-white/80 font-body leading-relaxed">
                  Devil Insurance is a specialized brand of Contractors Choice Agency — built for the Tempe community and the East Valley. We bring 20+ years of Arizona insurance experience with a local, neighbor-first approach.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <div>
                  <p className="eyebrow mb-3">Our Story</p>
                  <h2 className="h-section mb-6">Built for the East Valley</h2>
                  <div className="space-y-5 text-[#6B5B5F] font-body leading-relaxed">
                    <p>
                      Devil Insurance was created for one purpose: to give Tempe and the East Valley a local insurance agency that actually knows the community — not a national franchise that treats Arizona like a pin on a map.
                    </p>
                    <p>
                      Founded as part of Contractors Choice Agency in 2005 by Josh Cotner, who spent years in the contracting industry before transitioning to insurance, we understand risk from the inside out. Josh saw how contractors, homeowners, and small business owners were underserved by big carriers — getting cookie-cutter policies that didn&apos;t fit their real lives.
                    </p>
                    <p>
                      That founding mission shapes every policy we write. We shop multiple A-rated carriers for every client, explain coverage in plain language, and stay available when you need us — not just when you&apos;re signing up.
                    </p>
                    <p>
                      The &quot;Devil&quot; name celebrates East Valley community spirit. We know Tempe. We know Mesa, Chandler, Gilbert, and Scottsdale. We&apos;re your neighbors — and we take that responsibility seriously.
                    </p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="left">
                <div className="relative">
                  <Image src="/images/about.jpg" alt="Devil Insurance local Tempe agents" width={600} height={480} className="object-cover rounded-sm shadow-lift w-full" unoptimized />
                  <div className="absolute -bottom-4 -left-4 bg-[#8B1538] p-5 rounded-sm shadow-lift">
                    <p className="font-display font-800 uppercase text-[#C8A42A] text-3xl leading-none">20+</p>
                    <p className="font-body text-xs text-white/70 mt-1">Years Protecting AZ Families</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F5F0F0]">
          <div className="container-wide">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="eyebrow mb-3">What We Stand For</p>
                <h2 className="h-section mb-4">Our Values</h2>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MapPin, title: "Local First", desc: "We serve the community we live in. East Valley families and businesses get local expertise — not call-center indifference." },
                { icon: Award, title: "Carrier Independence", desc: "We're not captive to one insurance company. We shop multiple A-rated carriers to find your best rate and coverage combination." },
                { icon: CheckCircle, title: "Transparency", desc: "No hidden fees, no upsells you don't need. We explain every policy in plain language before you sign anything." },
                { icon: Shield, title: "Claims Support", desc: "When you have a claim, we help you navigate it. A real person walks you through the process from start to finish." },
                { icon: Award, title: "Long-Term Relationships", desc: "We review your coverage annually and proactively flag gaps — not just at renewal time when it's too late." },
                { icon: MapPin, title: "Community Commitment", desc: "Devil Insurance is invested in the East Valley's growth. When the community wins, we win." },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.07}>
                  <div className="p-6 rounded-sm bg-white border border-gray-200 hover:border-[#8B1538]/30 hover:shadow-card transition-all">
                    <div className="w-10 h-10 rounded-sm bg-[#8B1538] flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-[#C8A42A]" />
                    </div>
                    <h3 className="font-display font-700 uppercase text-[#8B1538] text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6B5B5F] leading-relaxed font-body">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-wide max-w-4xl">
            <FadeIn>
              <div className="bg-[#F5F0F0] border border-gray-200 rounded-sm p-8 md:p-12">
                <h2 className="h-section mb-6">Licensing &amp; Credentials</h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {[
                    "Licensed in Arizona and all 50 states",
                    "NPN #8608479 — National Producer Number",
                    "Founded 2005 — Contractors Choice Agency",
                    "A-rated carrier partnerships",
                    "E&O insured (Errors & Omissions coverage)",
                    "Member — Independent Insurance Agents & Brokers",
                  ].map((c) => (
                    <div key={c} className="flex items-center gap-2.5">
                      <CheckCircle className="w-5 h-5 text-[#C8A42A] flex-shrink-0" />
                      <span className="text-sm text-[#6B5B5F] font-body">{c}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/quote" className="btn-primary">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/contact" className="btn-outline-maroon">Contact Us <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
