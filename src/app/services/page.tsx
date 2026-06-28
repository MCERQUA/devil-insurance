import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Home, Car, Building2, KeyRound, ShieldCheck, Shield } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insurance Coverage Lines — Home, Auto, Business, Landlord, Renters",
  description: "Devil Insurance offers home, auto, business, landlord, and renters insurance for Tempe and the East Valley. Local agents, multiple carriers, same-day quotes.",
  alternates: { canonical: `${SITE.url}/services` },
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Car, Building2, KeyRound, ShieldCheck,
};

const SERVICE_IMAGES: Record<string, string> = {
  "home-insurance": "/images/home-insurance.jpg",
  "auto-insurance": "/images/auto-insurance.jpg",
  "business-insurance": "/images/business-insurance.jpg",
  "landlord-insurance": "/images/landlord-insurance.jpg",
  "renters-insurance": "/images/renters-insurance.jpg",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#F5F0F0] pt-32 pb-16">
          <div className="container-wide">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#8B1538] mb-6">
                  <Shield className="w-4 h-4 text-[#C8A42A]" />
                  <span className="text-xs font-display font-700 uppercase tracking-widest text-[#C8A42A]">Coverage Lines</span>
                </div>
                <h1 className="font-display font-800 uppercase text-[#8B1538] text-4xl sm:text-5xl mb-4 tracking-tight">
                  Insurance for Every East Valley Need
                </h1>
                <p className="text-lg text-[#6B5B5F] leading-relaxed">
                  Five coverage lines. One local agency. Multiple A-rated carriers shopped for every quote.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="space-y-16">
              {SERVICES.map((s, i) => {
                const IconComp = ICON_MAP[s.icon] ?? ShieldCheck;
                const img = SERVICE_IMAGES[s.slug] ?? "/images/hero.jpg";
                return (
                  <FadeIn key={s.slug} delay={i * 0.05}>
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                      <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                        <div className="w-14 h-14 rounded-sm bg-[#8B1538] flex items-center justify-center mb-5">
                          <IconComp className="w-7 h-7 text-[#C8A42A]" />
                        </div>
                        <h2 className="font-display font-800 uppercase text-[#8B1538] text-3xl sm:text-4xl mb-3">{s.title}</h2>
                        <p className="text-lg text-[#6B5B5F] leading-relaxed mb-6">{s.description}</p>
                        <div className="grid grid-cols-2 gap-2 mb-8">
                          {s.coverage.map((c) => (
                            <div key={c} className="flex items-center gap-2 text-sm text-[#1A0A0F]">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#C8A42A] flex-shrink-0" />
                              {c}
                            </div>
                          ))}
                        </div>
                        <Link href={`/services/${s.slug}`} className="btn-maroon">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                        <div className="rounded-sm overflow-hidden shadow-lift">
                          <Image src={img} alt={s.title} width={600} height={420} className="object-cover w-full" unoptimized />
                        </div>
                      </div>
                    </div>
                    {i < SERVICES.length - 1 && <div className="border-t border-gray-100 mt-16" />}
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-devil-gradient">
          <div className="container-wide text-center">
            <FadeIn>
              <h2 className="font-display font-800 uppercase text-white text-3xl sm:text-4xl mb-4">Ready for a Quote?</h2>
              <p className="text-white/80 text-lg mb-8 font-body">Local agents. Same-day quotes. Multiple carriers compared for you.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/quote" className="btn-primary">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
                <a href={SITE.phoneHref} className="btn-secondary">Call {SITE.phone}</a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
