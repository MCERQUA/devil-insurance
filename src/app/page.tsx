import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Star,
  Home,
  Car,
  Building2,
  Heart,
  KeyRound,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { SITE, SERVICES } from "@/lib/site";
import { HOME_FAQS } from "@/lib/faq-data";
import {
  breadcrumbSchema,
  faqSchema,
  servicesSchema,
  JsonLd,
} from "@/lib/schema";

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Car,
  Building2,
  Heart,
  KeyRound,
  Sparkles,
};

const TRUST_ITEMS = [
  "Independent Agent",
  "Dozens of Carriers",
  "Free Quotes",
  "No Obligation",
  "Arizona & Nationwide",
];

const WHY = [
  {
    icon: ShieldCheck,
    title: "We Shop The Market",
    body: "We compare rates from dozens of top-rated carriers side by side. You get the best coverage at the best price — without spending hours on hold.",
  },
  {
    icon: Star,
    title: "We Fight For You",
    body: "When you have a claim, we're your advocate. We know how insurance companies work and make sure you get a fair settlement.",
  },
  {
    icon: CheckCircle2,
    title: "Zero Pressure",
    body: "Free quotes, no obligation, no pushy sales tactics. We make a recommendation, you decide. It's that simple.",
  },
];

const STATS = [
  { value: "30+", label: "Top-rated carriers compared" },
  { value: "10–25%", label: "Average savings when bundling" },
  { value: "15 min", label: "Average time to get a quote" },
  { value: "100%", label: "Free quotes, always" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", url: SITE.url }]),
          ...servicesSchema(),
          faqSchema(HOME_FAQS.map((f) => ({ q: f.q, a: f.a }))),
        ]}
      />
      <main>
        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#1a0a0d]">
          {/* Dark maroon gradient bg */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0d] via-[#2a0e18] to-[#1a0a0d]" />
            {/* Gold glow accent top-right */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFC627]/5 rounded-full blur-3xl" />
            {/* Maroon glow bottom-left */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8C1D40]/20 rounded-full blur-3xl" />
          </div>

          <div className="container-x relative z-10 pt-28 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text side */}
              <div>
                <FadeIn direction="up">
                  <div className="kicker mb-5">
                    <ShieldCheck className="w-4 h-4" />
                    Independent Insurance Agent · Arizona &amp; Nationwide
                  </div>
                </FadeIn>
                <FadeIn direction="up" delay={0.08}>
                  <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-bone leading-[1.05] mb-6">
                    Your{" "}
                    <span className="text-[#FFC627]">Helpful Devil</span>
                    <br />
                    Insurance Agent
                  </h1>
                </FadeIn>
                <FadeIn direction="up" delay={0.16}>
                  <p className="text-steel-light text-lg sm:text-xl font-body leading-relaxed mb-8 max-w-xl">
                    We fight for the best rate. You win every time. Devil
                    Insurance shops dozens of top carriers to find you the
                    right coverage at the right price — home, auto, business,
                    and more.
                  </p>
                </FadeIn>
                <FadeIn direction="up" delay={0.24}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-9">
                    <Link href="/quote" className="btn-gold">
                      Get a Free Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href={SITE.phoneHref} className="btn-outline">
                      <Phone className="w-4 h-4" /> {SITE.phone}
                    </a>
                  </div>
                </FadeIn>
                <FadeIn direction="up" delay={0.32}>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {[
                      "Free quotes, no obligation",
                      "We shop 30+ carriers",
                      "Bundle & save 10–25%",
                      "Arizona & nationwide",
                    ].map((chip) => (
                      <div
                        key={chip}
                        className="flex items-center gap-2 text-steel-light text-sm font-body"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FFC627]" />
                        {chip}
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Mascot side */}
              <FadeIn direction="up" delay={0.12}>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Glow ring behind mascot */}
                    <div className="absolute inset-0 rounded-full bg-[#FFC627]/10 blur-2xl scale-110" />
                    <Image
                      src="/images/devil-logo.png"
                      alt="Devil Insurance mascot — your helpful devil insurance agent"
                      width={420}
                      height={420}
                      priority
                      className="relative z-10 drop-shadow-2xl max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] w-full"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="bg-[#8C1D40] border-y border-[#FFC627]/20">
          <div className="container-x py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-white text-sm font-body font-semibold"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FFC627]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STAT BAR */}
        <section className="bg-[#2a0e18] border-b border-[#3a1020]">
          <div className="container-x py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((s, i) => (
                <FadeIn key={s.label} delay={i * 0.06}>
                  <div className="text-center lg:text-left">
                    <div className="font-heading font-semibold text-3xl sm:text-4xl text-[#FFC627] mb-1">
                      {s.value}
                    </div>
                    <div className="text-steel text-sm font-body leading-snug">
                      {s.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 sm:py-24">
          <div className="container-x">
            <FadeIn>
              <div className="max-w-2xl mb-12">
                <div className="kicker mb-3">Coverage We Shop For You</div>
                <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-bone leading-tight mb-4">
                  Every Type of Insurance, One Agent
                </h2>
                <p className="text-steel-light font-body text-lg">
                  Six coverage categories, dozens of carriers, one independent
                  agent fighting to get you the best deal on all of it.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((s, i) => {
                const Icon = SERVICE_ICONS[s.icon] ?? ShieldCheck;
                return (
                  <FadeIn key={s.slug} delay={(i % 3) * 0.06}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group block h-full card-dark p-6 hover:border-[#FFC627]/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#8C1D40]/30 flex items-center justify-center mb-5 group-hover:bg-[#8C1D40]/50 transition-colors">
                        <Icon className="w-6 h-6 text-[#FFC627]" />
                      </div>
                      <h3 className="font-heading font-semibold text-bone text-lg mb-2 leading-snug">
                        {s.navTitle} Insurance
                      </h3>
                      <p className="text-steel text-sm font-body leading-relaxed mb-4">
                        {s.blurb}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[#FFC627] text-sm font-heading font-semibold">
                        Get a quote{" "}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY DEVIL INSURANCE */}
        <section className="py-20 sm:py-24 bg-[#2a0e18] border-y border-[#3a1020]">
          <div className="container-x">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <FadeIn>
                  <div className="kicker mb-3">Why Devil Insurance</div>
                  <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-bone leading-tight mb-5">
                    We Fight For You. That&apos;s the Whole Point.
                  </h2>
                  <p className="text-steel-light font-body text-lg leading-relaxed mb-6">
                    When you go direct to one insurance company, you get one
                    price. When you come to us, you get dozens of quotes from
                    top-rated carriers — and an agent who knows which ones
                    actually pay claims. That&apos;s the Devil Insurance
                    difference.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-[#FFC627] font-heading font-semibold hover:gap-3 transition-all"
                  >
                    More about how we work <ArrowRight className="w-4 h-4" />
                  </Link>
                </FadeIn>
              </div>
              <div className="grid sm:grid-cols-1 gap-4">
                {WHY.map((d, i) => (
                  <FadeIn key={d.title} delay={i * 0.1}>
                    <div className="card-dark p-6 flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-lg bg-[#8C1D40]/30 flex items-center justify-center shrink-0">
                        <d.icon className="w-6 h-6 text-[#FFC627]" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-bone text-lg mb-1.5">
                          {d.title}
                        </h3>
                        <p className="text-steel text-sm font-body leading-relaxed">
                          {d.body}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE CTA BAND */}
        <section className="py-20 sm:py-24">
          <div className="container-x">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div className="kicker mb-3">Ready to Save?</div>
                <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-bone leading-tight mb-5">
                  Ready to{" "}
                  <span className="text-[#FFC627]">Protect What Matters</span>
                  ?
                </h2>
                <p className="text-steel-light font-body text-lg leading-relaxed mb-6">
                  Get a free, no-obligation quote in 15 minutes. We shop
                  dozens of carriers to find you the best rate — then you
                  decide. No pressure, ever.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quote" className="btn-gold">
                    Get a Free Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={SITE.phoneHref} className="btn-outline">
                    <Phone className="w-4 h-4" /> Call {SITE.phone}
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="card-dark p-8">
                  <MapPin className="w-8 h-8 text-[#FFC627] mb-4" />
                  <h3 className="font-heading font-semibold text-bone text-xl mb-3">
                    Serving Arizona &amp; Nationwide
                  </h3>
                  <p className="text-steel-light font-body mb-5 leading-relaxed">
                    We&apos;re licensed in Arizona and work with clients across
                    the country. Home, auto, business, life, renters, and
                    specialty — if you need it covered, we can find the right
                    policy.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {SITE.cities.map((c) => (
                      <span
                        key={c}
                        className="text-xs font-body text-steel-light bg-[#1a0a0d] px-3 py-1.5 rounded-full steel-border"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/service-areas"
                    className="inline-flex items-center gap-2 text-[#FFC627] font-heading font-semibold hover:gap-3 transition-all"
                  >
                    See all service areas <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 sm:py-24 bg-[#2a0e18] border-t border-[#3a1020]">
          <div className="container-x">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
              <FadeIn>
                <div className="lg:sticky lg:top-28">
                  <div className="kicker mb-3">Common Questions</div>
                  <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-bone leading-tight mb-4">
                    Questions People Ask the Devil
                  </h2>
                  <p className="text-steel-light font-body text-lg mb-6">
                    How we work, what we cover, and why an independent agent
                    beats going direct — answered honestly.
                  </p>
                  <Link href="/faq" className="btn-outline">
                    See all FAQs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <FaqAccordion items={HOME_FAQS} />
              </FadeIn>
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
