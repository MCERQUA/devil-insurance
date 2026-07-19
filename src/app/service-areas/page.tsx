import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insurance Service Areas — Arizona & Nationwide | Devil Insurance",
  description:
    "Devil Insurance serves Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, and clients nationwide. Independent insurance agent offering home, auto, business, and specialty coverage.",
  alternates: { canonical: "/service-areas/" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Navbar />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Service Areas", url: `${SITE.url}/service-areas/` },
        ])}
      />
      <main>
        <section className="relative pt-32 pb-16 overflow-hidden bg-[#1a0a0d]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0d] via-[#2a0e18] to-[#1a0a0d]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC627]/5 rounded-full blur-3xl" />
          </div>
          <div className="container-x relative z-10">
            <Breadcrumbs
              items={[{ name: "Home", href: "/" }, { name: "Service Areas" }]}
            />
            <div className="max-w-3xl">
              <div className="kicker mb-4">
                <MapPin className="w-4 h-4" /> Arizona &amp; Nationwide
              </div>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl text-bone leading-tight mb-4">
                Insurance Coverage Across Arizona &amp; the Country
              </h1>
              <p className="text-steel-light font-body text-lg">
                Devil Insurance is licensed in Arizona and serves clients
                nationwide. Whether you&apos;re in the Phoenix metro or anywhere
                in the U.S., we can shop the market to find you the right
                coverage.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-x">
            <FadeIn>
              <div className="max-w-2xl mb-10">
                <div className="kicker mb-3">Arizona Cities We Serve</div>
                <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-bone mb-4">
                  Phoenix Metro &amp; Surrounding Areas
                </h2>
                <p className="text-steel-light font-body">
                  We work with clients across the Phoenix metro area and
                  beyond. As an independent agency, we can write coverage in
                  Arizona and most other states.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {SERVICE_AREAS.map((area, i) => (
                <FadeIn key={area.name} delay={(i % 3) * 0.07}>
                  <div className="card-dark p-6 h-full">
                    <div className="flex items-center gap-2.5 mb-3">
                      <MapPin className="w-5 h-5 text-[#FFC627] shrink-0" />
                      <h3 className="font-heading font-semibold text-bone text-lg">
                        {area.name}, AZ
                      </h3>
                    </div>
                    <p className="text-steel-light text-sm font-body leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="card-dark p-8 sm:p-10 text-center">
                <ShieldCheck className="w-8 h-8 text-[#FFC627] mx-auto mb-4" />
                <h2 className="font-heading font-semibold text-2xl text-bone mb-3">
                  Not in Arizona? We Can Still Help.
                </h2>
                <p className="text-steel-light font-body mb-6 max-w-lg mx-auto">
                  Devil Insurance works with clients nationwide. Call us to
                  check availability in your state — we likely work with
                  carriers that can cover you wherever you are.
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
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
