import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FadeIn } from "@/components/animations/FadeIn";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { SITE } from "@/lib/site";
import { FAQ_THEMES, ALL_FAQS } from "@/lib/faq-data";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insurance FAQ — Common Questions Answered | Devil Insurance",
  description:
    "Answers to the most common insurance questions — how independent agents work, bundling savings, claims process, coverage types, and more. Devil Insurance explains it all.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "FAQ", url: `${SITE.url}/faq/` },
          ]),
          faqSchema(ALL_FAQS),
        ]}
      />
      <main>
        <section className="relative pt-32 pb-14 overflow-hidden bg-[#2a0e18] border-b border-[#3a1020]">
          <div aria-hidden className="absolute inset-0 opacity-[0.04] bg-hazard-stripes" />
          <div className="container-x relative">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
            <div className="max-w-3xl">
              <div className="kicker mb-4">
                <ShieldCheck className="w-4 h-4" /> Your Questions, Answered
              </div>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl text-bone leading-tight mb-4">
                Insurance Questions People Ask the Devil
              </h1>
              <p className="text-steel-light font-body text-lg">
                Straight answers on independent agents, coverage types,
                bundling, claims, and how to get the best rate — everything
                you need to know before you buy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-x">
            <div className="grid lg:grid-cols-[220px_1fr] gap-10">
              {/* Theme nav */}
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <h2 className="font-heading font-bold text-bone text-sm uppercase tracking-wider mb-4">
                    Topics
                  </h2>
                  <ul className="space-y-2.5">
                    {FAQ_THEMES.map((t, i) => (
                      <li key={t.theme}>
                        <a
                          href={`#theme-${i}`}
                          className="text-steel hover:text-[#FFC627] text-sm font-body transition-colors block leading-snug"
                        >
                          {t.theme}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 card-dark p-5">
                    <Phone className="w-5 h-5 text-[#FFC627] mb-2" />
                    <p className="text-steel-light text-sm font-body mb-3">
                      Don&apos;t see your question?
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="text-[#FFC627] font-heading font-bold text-sm"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </aside>

              {/* FAQs */}
              <div className="space-y-14">
                {FAQ_THEMES.map((t, i) => (
                  <div key={t.theme} id={`theme-${i}`} className="scroll-mt-28">
                    <FadeIn>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="w-9 h-9 rounded-lg bg-[#8C1D40]/30 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-4 h-4 text-[#FFC627]" />
                        </span>
                        <h2 className="font-heading font-bold text-xl sm:text-2xl text-bone">
                          {t.theme}
                        </h2>
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.06}>
                      <FaqAccordion
                        items={t.items.map((item) => ({ q: item.q, a: item.a }))}
                      />
                    </FadeIn>
                  </div>
                ))}

                <FadeIn>
                  <div className="card-dark p-8 text-center">
                    <h2 className="font-heading font-semibold text-xl text-bone mb-3">
                      Still Have Questions?
                    </h2>
                    <p className="text-steel-light font-body mb-6 max-w-md mx-auto">
                      Our agents will walk you through your coverage options and
                      give you a straight quote — free, no pressure, no obligation.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link href="/quote" className="btn-gold">
                        Get a Free Quote <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a href={SITE.phoneHref} className="btn-outline">
                        <Phone className="w-4 h-4" /> {SITE.phone}
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
