import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Clock,
  FileCheck,
  Star,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FadeIn } from "@/components/animations/FadeIn";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { SITE, SERVICES, SERVICE_SLUGS } from "@/lib/site";
import { SERVICE_CONTENT } from "@/lib/service-content";
import {
  breadcrumbSchema,
  faqSchema,
  JsonLd,
} from "@/lib/schema";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const content = SERVICE_CONTENT[slug];
  if (!service || !content) notFound();

  const related = content.related
    .map((relSlug) => SERVICES.find((s) => s.slug === relSlug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));

  return (
    <>
      <Navbar />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: `${SITE.url}/services/` },
            { name: service.title, url: `${SITE.url}/services/${service.slug}/` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            serviceType: service.keyword,
            provider: { "@id": `${SITE.url}/#business` },
            areaServed: { "@type": "State", name: "Arizona" },
            description: service.metaDescription,
          },
          faqSchema(content.faqs),
        ]}
      />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-[#1a0a0d]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0d] via-[#2a0e18] to-[#1a0a0d]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC627]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8C1D40]/15 rounded-full blur-3xl" />
          </div>
          <div className="container-x relative z-10">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: service.navTitle },
              ]}
            />
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-bone leading-[1.1] mb-5">
                {service.h1}
              </h1>
              <p
                className="text-steel-light font-body text-lg leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: content.intro }}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn-gold">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={SITE.phoneHref} className="btn-outline">
                  <Phone className="w-4 h-4" /> {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BODY + SIDEBAR */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <div className="grid lg:grid-cols-[1fr_340px] gap-12">
              <div>
                {content.included && (
                  <FadeIn>
                    <div className="card-dark p-7 mb-10">
                      <h2 className="font-heading font-bold text-bone text-xl mb-5 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FFC627]" />{" "}
                        What&apos;s Included
                      </h2>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {content.included.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-steel-light font-body text-sm"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 bg-[#FFC627] rotate-45 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                )}

                <div className="prose-hood max-w-none">
                  {content.sections.map((section, i) => (
                    <FadeIn key={i} delay={0.04}>
                      <h2>{section.h2}</h2>
                      <div dangerouslySetInnerHTML={{ __html: section.body }} />
                    </FadeIn>
                  ))}
                </div>

                {/* FAQ */}
                <div className="mt-14">
                  <FadeIn>
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-bone mb-6">
                      {service.navTitle} Insurance — Common Questions
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.08}>
                    <FaqAccordion items={content.faqs} />
                  </FadeIn>
                </div>
              </div>

              {/* SIDEBAR */}
              <aside>
                <div className="lg:sticky lg:top-28 space-y-5">
                  <div className="bg-[#8C1D40] rounded-xl p-6">
                    <Phone className="w-7 h-7 text-white mb-3" />
                    <h3 className="font-heading font-bold text-white text-lg mb-1">
                      Talk to an Agent
                    </h3>
                    <p className="text-white/85 text-sm font-body mb-4">
                      Free quotes for {service.navTitle.toLowerCase()} insurance
                      — Arizona &amp; nationwide.
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="block text-center bg-[#FFC627] hover:bg-[#ffd35e] text-[#1a0a0d] font-heading font-bold py-3 rounded-lg transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </div>

                  <div className="card-dark p-6">
                    <h3 className="font-heading font-bold text-bone text-base mb-4">
                      Why Devil Insurance
                    </h3>
                    <ul className="space-y-3.5">
                      {[
                        { icon: ShieldCheck, t: "30+ top-rated carriers compared" },
                        { icon: FileCheck, t: "Free quotes, no obligation" },
                        { icon: Clock, t: "Most quotes ready in 15 minutes" },
                        { icon: Star, t: "Claims advocacy when you need it" },
                      ].map((r) => (
                        <li key={r.t} className="flex items-start gap-3">
                          <r.icon className="w-4 h-4 text-[#FFC627] shrink-0 mt-0.5" />
                          <span className="text-steel-light text-sm font-body">
                            {r.t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-dark p-6">
                    <h3 className="font-heading font-bold text-bone text-base mb-4">
                      Related Coverage
                    </h3>
                    <ul className="space-y-2.5">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link
                            href={`/services/${r.slug}`}
                            className="flex items-center justify-between gap-2 text-steel-light hover:text-[#FFC627] text-sm font-body transition-colors group"
                          >
                            {r.navTitle} Insurance
                            <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <CTABand
          heading={`Ready to Get a ${service.navTitle} Insurance Quote?`}
          sub="Devil Insurance shops dozens of carriers to find you the best coverage at the best price. Free quote, no obligation."
        />
      </main>
      <Footer />
    </>
  );
}
