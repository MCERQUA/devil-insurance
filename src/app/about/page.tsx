import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Heart,
  Users,
  TrendingDown,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Devil Insurance — Your Helpful Devil Insurance Agent",
  description:
    "Devil Insurance is an independent insurance agency that shops dozens of top-rated carriers to find you the best coverage at the best price. Home, auto, business, life, and specialty insurance.",
  alternates: { canonical: "/about/" },
};

const VALUES = [
  {
    icon: TrendingDown,
    title: "We Shop The Market",
    body: "We work with dozens of top-rated carriers and compare rates simultaneously. You get the best price without spending hours on the phone.",
  },
  {
    icon: ShieldCheck,
    title: "Real Coverage, No Gaps",
    body: "We read the fine print so you don't have to. We flag coverage gaps and make sure you're protected for what actually matters.",
  },
  {
    icon: Star,
    title: "Claims Advocacy",
    body: "When you have a claim, we're your advocate — not the insurance company's. We know how the process works and help you get a fair settlement.",
  },
  {
    icon: CheckCircle2,
    title: "Zero Pressure",
    body: "We make a recommendation. You decide. Free quotes, no obligation, no pushy tactics. Ever.",
  },
  {
    icon: Users,
    title: "Independent Agent",
    body: "We're not tied to any single carrier. Our job is to find the best fit for you — not to hit a quota for any one company.",
  },
  {
    icon: Heart,
    title: "Long-Term Relationship",
    body: "We review your coverage annually and reach out when rates change or better options become available. We're your agent for the long haul.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "About", url: `${SITE.url}/about/` },
        ])}
      />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-[#17120F]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#17120F] via-[#241A15] to-[#17120F]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCB05]/5 rounded-full blur-3xl" />
          </div>
          <div className="container-x relative z-10">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
            <div className="max-w-3xl">
              <div className="kicker mb-4">
                <ShieldCheck className="w-4 h-4" /> Independent Insurance Agency
              </div>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl text-bone leading-tight mb-5">
                The Helpful Devil Insurance Agent
              </h1>
              <p className="text-steel-light font-body text-lg leading-relaxed">
                Devil Insurance is an independent agency that fights like the
                devil to get you the best rate — but we&apos;re on your side.
                We shop dozens of carriers, compare coverage side by side, and
                advocate for you when something goes wrong.
              </p>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <FadeIn>
                <div className="prose-hood max-w-none">
                  <h2>Why We Started Devil Insurance</h2>
                  <p>
                    Most people buy insurance the same way they&apos;ve always done
                    it — call the carrier their parents used, or go direct to the
                    company with the catchiest commercial. They get one price, take
                    it or leave it, and never know if they paid too much.
                  </p>
                  <p>
                    We started Devil Insurance because there&apos;s a better way. As
                    an independent agency, we work with dozens of top-rated
                    carriers and compare rates simultaneously. Our clients
                    consistently save hundreds of dollars a year just by letting
                    us do the shopping.
                  </p>
                  <h2>What Makes an Independent Agent Different</h2>
                  <p>
                    When you call a direct carrier, you&apos;re talking to someone
                    whose job is to sell you that company&apos;s product. When you
                    call Devil Insurance, you&apos;re talking to someone whose job is
                    to find you the best policy across the entire market.
                  </p>
                  <p>
                    We&apos;re a Contractors Choice Agency company serving Arizona
                    and clients nationwide. Our promise is simple: free quotes,
                    honest recommendations, and an advocate in your corner when
                    you need it most.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: "30+", l: "top-rated carriers compared" },
                    { v: "10–25%", l: "average bundle savings" },
                    { v: "15 min", l: "average time to get a quote" },
                    { v: "100%", l: "free quotes, always" },
                  ].map((s) => (
                    <div key={s.l} className="card-dark p-6 text-center">
                      <div className="font-heading font-semibold text-3xl text-[#FFCB05] mb-1">
                        {s.v}
                      </div>
                      <div className="text-steel text-sm font-body leading-snug">
                        {s.l}
                      </div>
                    </div>
                  ))}
                  <div className="col-span-2 card-dark p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-5 h-5 text-[#FFCB05]" />
                      <span className="font-heading font-semibold text-bone">
                        Talk to an agent
                      </span>
                    </div>
                    <a
                      href={SITE.phoneHref}
                      className="font-heading font-semibold text-2xl text-[#FFCB05]"
                    >
                      {SITE.phone}
                    </a>
                    <p className="text-steel text-sm font-body mt-1">
                      {SITE.hours}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-16 sm:py-20 bg-[#100E0C] border-y border-[#3A2A22]">
          <div className="container-x">
            <FadeIn>
              <div className="max-w-2xl mb-12">
                <div className="kicker mb-3">How We Work</div>
                <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-bone leading-tight">
                  Six Commitments on Every Policy
                </h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((v, i) => (
                <FadeIn key={v.title} delay={(i % 3) * 0.07}>
                  <div className="card-dark p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-[#AB0428]/30 flex items-center justify-center mb-5">
                      <v.icon className="w-6 h-6 text-[#FFCB05]" />
                    </div>
                    <h3 className="font-heading font-semibold text-bone text-lg mb-2">
                      {v.title}
                    </h3>
                    <p className="text-steel text-sm font-body leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.1}>
              <div className="mt-10 text-center">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#FFCB05] font-heading font-semibold hover:gap-3 transition-all"
                >
                  Explore all coverage types <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Mascot section */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div className="kicker mb-3">The Devil Mascot</div>
                <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-bone leading-tight mb-5">
                  Why a Devil? Because We Fight for You.
                </h2>
                <p className="text-steel-light font-body text-lg leading-relaxed mb-5">
                  Insurance companies have lawyers, adjusters, and actuaries
                  working for them. You should have someone fighting for you
                  too.
                </p>
                <p className="text-steel-light font-body text-lg leading-relaxed mb-6">
                  Our Sun Devil mascot represents exactly what we are: a
                  scrappy, Arizona-proud advocate who fights like the devil to
                  get clients the best rate and the fairest claim settlement.
                  The &ldquo;helpful devil&rdquo; — on your side.
                </p>
                <Link href="/quote" className="btn-gold">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#FFCB05]/10 blur-2xl scale-110" />
                    <Image
                      src="/images/devil-logo.png"
                      alt="Devil Insurance mascot"
                      width={360}
                      height={360}
                      className="relative z-10 drop-shadow-2xl max-w-[280px] sm:max-w-[360px] w-full"
                    />
                  </div>
                </div>
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
