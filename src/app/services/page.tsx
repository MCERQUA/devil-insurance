import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
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
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE, SERVICES } from "@/lib/site";
import { breadcrumbSchema, servicesSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insurance Services — Home, Auto, Business & More | Devil Insurance",
  description:
    "Devil Insurance offers home, auto, business, life, renters, and specialty insurance. We shop dozens of top-rated carriers to find you the best coverage at the best price.",
  alternates: { canonical: "/services/" },
};

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Car,
  Building2,
  Heart,
  KeyRound,
  Sparkles,
};

export default function ServicesIndexPage() {
  return (
    <>
      <Navbar />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: `${SITE.url}/services/` },
          ]),
          ...servicesSchema(),
        ]}
      />
      <main>
        <section className="relative pt-32 pb-16 overflow-hidden bg-[#17120F]">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04] bg-hazard-stripes"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#17120F] via-[#241A15] to-[#17120F] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCB05]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container-x relative">
            <Breadcrumbs
              items={[{ name: "Home", href: "/" }, { name: "Services" }]}
            />
            <div className="max-w-3xl">
              <div className="kicker mb-4">
                <ShieldCheck className="w-4 h-4" /> Coverage We Shop For You
              </div>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl text-bone leading-tight mb-5">
                Every Type of Insurance, One Independent Agent
              </h1>
              <p className="text-steel-light font-body text-lg leading-relaxed">
                Six coverage categories, dozens of top-rated carriers, one
                agent who fights to get you the best deal on all of it.
                Free quotes, no obligation — ever.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((s, i) => {
                const Icon = SERVICE_ICONS[s.icon] ?? ShieldCheck;
                return (
                  <FadeIn key={s.slug} delay={(i % 2) * 0.08}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex gap-6 card-dark overflow-hidden hover:border-[#FFCB05]/40 transition-colors h-full p-6"
                    >
                      <div className="w-14 h-14 rounded-xl bg-[#AB0428]/30 flex items-center justify-center shrink-0 group-hover:bg-[#AB0428]/50 transition-colors">
                        <Icon className="w-7 h-7 text-[#FFCB05]" />
                      </div>
                      <div>
                        <h2 className="font-heading font-bold text-bone text-xl mb-2 leading-snug">
                          {s.navTitle} Insurance
                        </h2>
                        <p className="text-steel text-sm font-body leading-relaxed mb-4">
                          {s.blurb}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-[#FFCB05] text-sm font-heading font-semibold">
                          Learn more{" "}
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
