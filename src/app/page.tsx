import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  Home, Car, Building2, KeyRound, ShieldCheck,
  ArrowRight, CheckCircle, Phone, MapPin, Star,
  Clock, Award, Users, Zap, ChevronDown, Shield,
} from "lucide-react";
import { SITE, SERVICES, COVERAGE_CITIES, CREDENTIALS, STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Devil Insurance — Tempe & East Valley Local Insurance Agency",
  description: "Local Tempe insurance agency for home, auto, business, landlord, and renters coverage. A-rated carriers, same-day quotes, East Valley neighbors serving East Valley neighbors.",
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Car, Building2, KeyRound, ShieldCheck,
};

const FAQS = [
  {
    q: "What areas does Devil Insurance cover?",
    a: "We primarily serve Tempe, Chandler, Mesa, Gilbert, Scottsdale, and greater Phoenix. As a licensed agency in all 50 states, we can write coverage anywhere in Arizona and beyond.",
  },
  {
    q: "Can I bundle my home and auto insurance?",
    a: "Absolutely. Bundling home and auto with the same carrier typically saves 10–25%. We shop multiple carriers to find the best bundle deal for your situation.",
  },
  {
    q: "How quickly can I get a quote?",
    a: "Most quotes come back the same business day — many within 15 minutes. Call us at 844-967-5247 or submit the online form and we'll follow up fast.",
  },
  {
    q: "What makes Devil Insurance different from the big national carriers?",
    a: "We're local agents who live and work in the East Valley. We know Arizona risks — extreme heat, monsoon storms, high-traffic freeways — and we shop multiple carriers on your behalf instead of offering just one company's rates.",
  },
  {
    q: "Do you help with insurance claims?",
    a: "Yes. We help clients navigate claims with their carriers — no automated phone trees, no being passed around. A real local agent walks you through the process.",
  },
  {
    q: "Is renters insurance really worth it for Tempe apartments?",
    a: "Yes — renters insurance typically costs $12–$25/month and covers your personal belongings, liability if someone is injured in your apartment, and additional living expenses if your unit becomes uninhabitable. ASU-area apartments are often in high-density areas where theft and water damage are real risks.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        {/* ── SECTION 1: HERO ─────────────────────────────── */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#3D0612]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image src="/images/hero.jpg" alt="Devil Insurance — Tempe Arizona Insurance" fill className="object-cover opacity-30" priority unoptimized />
          </div>
          {/* Diagonal overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3D0612] via-[#5C0A1E]/90 to-[#8B1538]/70" />
          {/* Decorative pitchfork pattern */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-5">
            <svg viewBox="0 0 400 600" className="w-full h-full" fill="none">
              <path d="M200 20L200 540M200 540L150 590M200 540L250 590M120 80L200 20L280 80M120 80L120 260M280 80L280 260M120 260C120 360 160 440 200 480C240 440 280 360 280 260" stroke="#C8A42A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="relative container-wide py-24 z-10">
            <div className="max-w-3xl">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#C8A42A]/20 border border-[#C8A42A]/40 mb-6">
                  <Shield className="w-4 h-4 text-[#C8A42A]" />
                  <span className="text-xs font-display font-700 uppercase tracking-widest text-[#C8A42A]">
                    Tempe &amp; East Valley Local Agency
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="font-display font-800 uppercase text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
                  East Valley Insurance,{" "}
                  <span className="devil-shine-text">Done Right.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-xl text-white/80 max-w-2xl mb-8 leading-relaxed font-body">
                  Home, auto, business, landlord, and renters insurance for Tempe and the East Valley. Local agents who know the Valley, shop multiple carriers, and fight for your best rate.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link href="/quote" className="btn-primary text-base px-8 py-4">
                    Get a Free Quote <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href={SITE.phoneHref} className="btn-secondary text-base px-8 py-4">
                    <Phone className="w-5 h-5" /> {SITE.phone}
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex flex-wrap gap-6 text-sm text-white/60 font-body">
                  {["No obligation", "Same-day quotes", "All 50 states licensed", "A-rated carriers"].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C8A42A]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lj-bounce">
            <ChevronDown className="w-6 h-6 text-[#C8A42A]" />
          </div>
        </section>

        {/* ── SECTION 2: TRUST BAR ────────────────────────── */}
        <section className="bg-white border-b border-gray-100 py-10">
          <div className="container-wide">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {CREDENTIALS.map((c, i) => {
                const icons: Record<string, React.ComponentType<{ className?: string }>> = { MapPin, BadgeCheck: CheckCircle, Award, Banknote: Star, Timer: Clock, HeartPulse: Shield };
                const IconComp = icons[c.icon] ?? Shield;
                return (
                  <FadeIn key={c.label} delay={i * 0.05}>
                    <div className="flex flex-col items-center text-center gap-2 p-4">
                      <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center">
                        <IconComp className="w-5 h-5 text-[#8B1538]" />
                      </div>
                      <p className="text-xs font-display font-700 uppercase tracking-wide text-[#1A0A0F] leading-tight">{c.label}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: SERVICES GRID ────────────────────── */}
        <section className="py-20 bg-[#FAFAFA]">
          <div className="container-wide">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="eyebrow mb-3">Coverage Lines</p>
                <h2 className="h-section mb-4">Five Ways We Protect the East Valley</h2>
                <p className="lead max-w-2xl mx-auto">
                  From ASU-area apartments to Chandler tech offices, every East Valley property type covered under one local roof.
                </p>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s, i) => {
                const IconComp = ICON_MAP[s.icon] ?? ShieldCheck;
                return (
                  <FadeIn key={s.slug} delay={i * 0.07}>
                    <Link href={`/services/${s.slug}`} className="group block p-7 rounded-sm bg-white border border-gray-200 hover:border-[#8B1538] hover:shadow-lift transition-all duration-300">
                      <div className="w-12 h-12 rounded-sm bg-[#8B1538] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <IconComp className="w-6 h-6 text-[#C8A42A]" />
                      </div>
                      <h3 className="font-display font-700 uppercase text-[#8B1538] text-xl mb-2">{s.title}</h3>
                      <p className="text-sm text-[#6B5B5F] leading-relaxed mb-4">{s.description.slice(0, 120)}…</p>
                      <span className="inline-flex items-center gap-1 text-xs font-display font-700 uppercase tracking-widest text-[#C8A42A] group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </FadeIn>
                );
              })}
              {/* 6th card — quote CTA */}
              <FadeIn delay={0.35}>
                <Link href="/quote" className="group block p-7 rounded-sm bg-[#8B1538] border border-[#8B1538] hover:bg-[#5C0A1E] transition-all duration-300">
                  <div className="w-12 h-12 rounded-sm bg-[#C8A42A] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-[#5C0A1E]" />
                  </div>
                  <h3 className="font-display font-700 uppercase text-[#C8A42A] text-xl mb-2">Not Sure What You Need?</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">Tell us about your property or business and we&apos;ll find the right coverage at the right price.</p>
                  <span className="inline-flex items-center gap-1 text-xs font-display font-700 uppercase tracking-widest text-[#C8A42A] group-hover:gap-2 transition-all">
                    Get a Free Quote <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: WHY CHOOSE US ────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <div>
                  <p className="eyebrow mb-3">Why Devil Insurance</p>
                  <h2 className="h-section mb-6">Local Agents. Multiple Carriers. One Call.</h2>
                  <p className="lead mb-8">
                    We&apos;re not an 800-number call center. We&apos;re local Tempe agents who shop dozens of A-rated carriers to find you the best coverage at the best price.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: MapPin, title: "Local East Valley roots", desc: "We know Tempe risks — summer heat, monsoon storms, high-density neighborhoods." },
                      { icon: Award, title: "Multiple carriers shopped", desc: "We compare rates from dozens of A-rated insurers so you don't have to." },
                      { icon: Users, title: "Real people, no bots", desc: "A licensed local agent answers your call and follows your claim start to finish." },
                      { icon: Clock, title: "Same-day quotes", desc: "Most quotes come back within 15 minutes. No waiting days or weeks." },
                      { icon: Star, title: "Bundle and save", desc: "Home + auto bundles typically save 10–25%. One agent, multiple policies." },
                      { icon: Zap, title: "20+ years experience", desc: "Founded 2005 with deep roots in Arizona insurance and contractor coverage." },
                    ].map((item, i) => (
                      <div key={item.title} className="flex gap-3 p-4 rounded-sm border border-gray-100 bg-[#F5F0F0] hover:border-[#8B1538]/30 transition-colors">
                        <div className="w-9 h-9 rounded-sm bg-[#8B1538] flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4.5 h-4.5 text-[#C8A42A]" />
                        </div>
                        <div>
                          <p className="font-display font-700 uppercase text-sm text-[#8B1538] mb-1">{item.title}</p>
                          <p className="text-xs text-[#6B5B5F] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="left">
                <div className="relative rounded-sm overflow-hidden shadow-lift">
                  <Image src="/images/about.jpg" alt="Devil Insurance local Tempe agents" width={600} height={500} className="object-cover w-full" unoptimized />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#3D0612] to-transparent">
                    <p className="font-display font-700 uppercase text-[#C8A42A] text-lg">Former contractors. Current agents.</p>
                    <p className="text-white/80 text-sm">Josh Cotner founded Contractors Choice Agency in 2005 after working in the trades — he knows risk from the inside out.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: PROCESS ──────────────────────────── */}
        <section className="py-20 bg-[#F5F0F0]">
          <div className="container-wide">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="eyebrow mb-3">Simple Process</p>
                <h2 className="h-section mb-4">Get Covered in 4 Easy Steps</h2>
                <p className="lead max-w-xl mx-auto">No complicated paperwork. No long waits. Just fast, local service.</p>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Tell Us What You Need", desc: "Call us or fill out the online quote form. Takes about 3 minutes.", icon: Phone },
                { step: "02", title: "We Shop the Market", desc: "We compare rates from multiple A-rated carriers to find your best option.", icon: Award },
                { step: "03", title: "Review Your Options", desc: "We walk you through the quotes — coverage details, deductibles, price.", icon: CheckCircle },
                { step: "04", title: "Get Covered", desc: "Choose your policy, bind coverage, and you're protected — often same day.", icon: Shield },
              ].map((s, i) => (
                <FadeIn key={s.step} delay={i * 0.1}>
                  <div className="relative text-center p-6">
                    {i < 3 && (
                      <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px border-t-2 border-dashed border-[#8B1538]/20" />
                    )}
                    <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#8B1538] mb-5 mx-auto">
                      <s.icon className="w-7 h-7 text-[#C8A42A]" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#C8A42A] text-[#3D0612] text-xs font-display font-800 flex items-center justify-center">{s.step}</span>
                    </div>
                    <h3 className="font-display font-700 uppercase text-[#8B1538] text-lg mb-2">{s.title}</h3>
                    <p className="text-sm text-[#6B5B5F] leading-relaxed">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: COVERAGE AREA ────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="right">
                <div>
                  <p className="eyebrow mb-3">Where We Serve</p>
                  <h2 className="h-section mb-6">Tempe &amp; the Entire East Valley</h2>
                  <p className="lead mb-8">From Tempe's Mill Avenue corridor to Chandler's tech district to Gilbert's booming neighborhoods — we cover every corner of the East Valley.</p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {COVERAGE_CITIES.map((city, i) => (
                      <div key={city.name} className="flex items-start gap-2.5 p-3 rounded-sm bg-[#F5F0F0] border border-gray-100">
                        <MapPin className="w-4 h-4 text-[#8B1538] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-display font-700 uppercase text-sm text-[#8B1538]">{city.name}</p>
                          <p className="text-xs text-[#6B5B5F]">{city.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/coverage" className="btn-outline-maroon">
                    View Full Coverage Area <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
              <FadeIn direction="left">
                <div className="rounded-sm overflow-hidden shadow-lift">
                  <Image src="/images/coverage-area.jpg" alt="East Valley Arizona coverage area" width={600} height={450} className="object-cover w-full" unoptimized />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: STATS ────────────────────────────── */}
        <section className="py-20 bg-devil-gradient bg-maroon-texture">
          <div className="container-wide">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="text-[#C8A42A] font-display font-700 text-xs uppercase tracking-widest mb-3">By the Numbers</p>
                <h2 className="font-display font-800 uppercase text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  Two Decades of East Valley Coverage
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((s, i) => (
                <FadeIn key={s.label} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="font-display font-800 text-5xl sm:text-6xl text-[#C8A42A] mb-2">
                      {s.prefix}{s.value}{s.suffix}
                    </div>
                    <p className="text-white/70 font-body text-sm uppercase tracking-wide">{s.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 8: BLOG PREVIEW ─────────────────────── */}
        <section className="py-20 bg-[#FAFAFA]">
          <div className="container-wide">
            <FadeIn>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                <div>
                  <p className="eyebrow mb-3">Resources</p>
                  <h2 className="h-section">Insurance Guides for East Valley Residents</h2>
                </div>
                <Link href="/blog" className="btn-outline-maroon shrink-0">
                  All Articles <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  href: "/blog/tempe-home-insurance-guide-2026",
                  img: "/images/home-insurance.jpg",
                  category: "Home Insurance",
                  title: "Tempe Home Insurance Guide 2026",
                  excerpt: "Everything Tempe homeowners need to know about coverage options, rates, and protecting against Arizona's unique risks.",
                  date: "June 2026",
                },
                {
                  href: "/blog/east-valley-auto-insurance-rates",
                  img: "/images/auto-insurance.jpg",
                  category: "Auto Insurance",
                  title: "East Valley Auto Insurance Rates Explained",
                  excerpt: "Why Mesa, Chandler, and Gilbert drivers pay what they pay — and how to lower your premium without sacrificing coverage.",
                  date: "June 2026",
                },
                {
                  href: "/blog/arizona-renters-insurance-tempe",
                  img: "/images/renters-insurance.jpg",
                  category: "Renters Insurance",
                  title: "Renters Insurance in Tempe: A Complete Guide",
                  excerpt: "ASU students and East Valley renters — here's what renters insurance covers, what it costs, and why you need it.",
                  date: "May 2026",
                },
              ].map((post, i) => (
                <FadeIn key={post.href} delay={i * 0.1}>
                  <Link href={post.href} className="group block bg-white rounded-sm border border-gray-200 overflow-hidden hover:shadow-lift hover:border-[#8B1538]/30 transition-all duration-300">
                    <div className="aspect-video overflow-hidden bg-[#F5F0F0]">
                      <Image src={post.img} alt={post.title} width={400} height={225} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" unoptimized />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-display font-700 uppercase tracking-widest text-[#C8A42A] mb-2 block">{post.category}</span>
                      <h3 className="font-display font-700 uppercase text-[#8B1538] text-lg mb-2 group-hover:text-[#5C0A1E] transition-colors">{post.title}</h3>
                      <p className="text-sm text-[#6B5B5F] leading-relaxed mb-4">{post.excerpt}</p>
                      <span className="text-xs font-display font-600 uppercase tracking-wider text-[#C8A42A]">{post.date}</span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 9: FAQ ──────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="eyebrow mb-3">Common Questions</p>
                <h2 className="h-section mb-4">Frequently Asked Questions</h2>
                <p className="lead max-w-xl mx-auto">Still have questions? Call us at <a href={SITE.phoneHref} className="text-[#8B1538] font-semibold hover:underline">{SITE.phone}</a> — a real person will answer.</p>
              </div>
            </FadeIn>
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              {FAQS.map((faq, i) => (
                <FadeIn key={faq.q} delay={i * 0.05}>
                  <details className="group py-5">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="font-display font-700 uppercase text-[#8B1538] text-lg pr-4">{faq.q}</h3>
                      <ChevronDown className="w-5 h-5 text-[#C8A42A] flex-shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-[#6B5B5F] leading-relaxed font-body">{faq.a}</p>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 10: FINAL CTA ───────────────────────── */}
        <section className="py-24 bg-devil-gradient bg-maroon-texture">
          <div className="container-wide">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#C8A42A]/20 border border-[#C8A42A]/40 mb-8">
                  <svg width="40" height="40" viewBox="0 0 28 28" fill="none">
                    <path d="M14 2L14 22M14 22L9 26M14 22L19 26M8 6L14 2L20 6M8 6L8 14M20 6L20 14M8 14C8 17.3 10.7 20 14 20C17.3 20 20 17.3 20 14" stroke="#C8A42A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="font-display font-800 uppercase text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                  Ready to Get Protected?
                </h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed font-body">
                  Get a free, no-obligation quote today. A local Devil Insurance agent will shop multiple carriers and find you the best coverage for your East Valley home, car, or business.
                </p>
                <div className="flex flex-wrap gap-4 justify-center mb-8">
                  <Link href="/quote" className="btn-primary text-base px-10 py-4">
                    Get My Free Quote <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href={SITE.phoneHref} className="btn-secondary text-base px-10 py-4">
                    <Phone className="w-5 h-5" /> Call {SITE.phone}
                  </a>
                </div>
                <p className="text-white/50 text-sm font-body">No spam. No commitment. Licensed in all 50 states · NPN #{SITE.npn}</p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
