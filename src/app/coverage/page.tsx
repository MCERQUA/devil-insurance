import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { MapPin, ArrowRight, Shield, CheckCircle } from "lucide-react";
import { SITE, COVERAGE_CITIES, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coverage Area — Tempe, Chandler, Mesa, Gilbert & East Valley, AZ",
  description: "Devil Insurance serves Tempe, Chandler, Mesa, Gilbert, Scottsdale, Phoenix and surrounding East Valley communities. Local agents licensed in all 50 states.",
  alternates: { canonical: `${SITE.url}/coverage` },
};

const EXTENDED_CITIES = [
  { name: "Tempe", zip: "85281", county: "Maricopa County", pop: "195,000+", note: "Our home base — Mill Ave corridor, ASU area, and beyond" },
  { name: "Chandler", zip: "85224", county: "Maricopa County", pop: "280,000+", note: "East Valley tech hub — Intel campus, Chandler Fashion Center area" },
  { name: "Mesa", zip: "85201", county: "Maricopa County", pop: "510,000+", note: "Arizona's third-largest city — diverse neighborhoods from downtown to Red Mountain" },
  { name: "Gilbert", zip: "85233", county: "Maricopa County", pop: "270,000+", note: "One of the fastest-growing cities in America — family neighborhoods and new developments" },
  { name: "Scottsdale", zip: "85251", county: "Maricopa County", pop: "260,000+", note: "Old Town, luxury homes, horse properties, and business corridor" },
  { name: "Phoenix", zip: "85004", county: "Maricopa County", pop: "1.6M+", note: "Metro Phoenix — South Mountain, Downtown, Ahwatukee, and Camelback areas" },
  { name: "Ahwatukee", zip: "85044", county: "Maricopa County", pop: "85,000+", note: "South Mountain foothills — upscale neighborhood serving the 202" },
  { name: "Queen Creek", zip: "85142", county: "Maricopa County", pop: "65,000+", note: "Southeast Valley growth corridor — new homes and rural properties" },
  { name: "Maricopa", zip: "85138", county: "Pinal County", pop: "65,000+", note: "Fast-growing city south of Phoenix — affordable single-family homes" },
  { name: "Peoria", zip: "85345", county: "Maricopa County", pop: "195,000+", note: "Northwest Valley — Lake Pleasant area and new master-planned communities" },
  { name: "Glendale", zip: "85301", county: "Maricopa County", pop: "250,000+", note: "West Valley hub — State Farm Stadium area and established neighborhoods" },
  { name: "Surprise", zip: "85374", county: "Maricopa County", pop: "140,000+", note: "Northwest Valley — active adult communities and family neighborhoods" },
];

export default function CoveragePage() {
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
                  <MapPin className="w-4 h-4 text-[#C8A42A]" />
                  <span className="text-xs font-display font-700 uppercase tracking-widest text-[#C8A42A]">Coverage Area</span>
                </div>
                <h1 className="font-display font-800 uppercase text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
                  Serving Tempe &amp;<br />the Entire East Valley
                </h1>
                <p className="text-xl text-white/80 font-body leading-relaxed">
                  From Tempe&apos;s Mill Avenue to Gilbert&apos;s newest neighborhoods — local agents covering every East Valley zip code. Licensed in Arizona and all 50 states.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <FadeIn direction="right">
                <div>
                  <p className="eyebrow mb-3">Primary Coverage Area</p>
                  <h2 className="h-section mb-6">East Valley Cities We Serve</h2>
                  <p className="lead mb-8">We focus on Tempe and the East Valley corridor because local knowledge matters in insurance. We know the neighborhoods, the risks, and the market.</p>
                  <div className="grid gap-3">
                    {COVERAGE_CITIES.map((city, i) => (
                      <FadeIn key={city.name} delay={i * 0.05}>
                        <div className="flex items-start gap-3 p-4 rounded-sm bg-[#F5F0F0] border border-gray-100 hover:border-[#8B1538]/30 transition-colors">
                          <div className="w-8 h-8 rounded-sm bg-[#8B1538] flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-4 h-4 text-[#C8A42A]" />
                          </div>
                          <div>
                            <p className="font-display font-700 uppercase text-[#8B1538] text-sm">{city.name}</p>
                            <p className="text-xs text-[#6B5B5F] leading-relaxed">{city.desc}</p>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="left">
                <div className="space-y-6">
                  <div className="rounded-sm overflow-hidden shadow-lift">
                    <Image src="/images/coverage-area.jpg" alt="East Valley Arizona coverage map" width={600} height={400} className="object-cover w-full" unoptimized />
                  </div>
                  <div className="p-6 rounded-sm bg-[#8B1538] text-white">
                    <h3 className="font-display font-700 uppercase text-[#C8A42A] text-lg mb-3">Licensed in All 50 States</h3>
                    <p className="text-white/80 text-sm font-body leading-relaxed mb-4">
                      While our heart is in the East Valley, our license covers all 50 states. If you&apos;re moving to or from Arizona, we can help with coverage on both ends.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {["Arizona", "California", "Nevada", "Texas", "Colorado", "New Mexico"].map((state) => (
                        <div key={state} className="flex items-center gap-1.5 text-xs text-white/70">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C8A42A]" />
                          {state}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-[#C8A42A] mt-3">+ 44 more states</p>
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
                <p className="eyebrow mb-3">Extended Service Area</p>
                <h2 className="h-section mb-4">Greater Phoenix Metro</h2>
                <p className="lead max-w-2xl mx-auto">We serve every corner of the Phoenix metropolitan area, not just the East Valley.</p>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EXTENDED_CITIES.map((city, i) => (
                <FadeIn key={city.name} delay={i * 0.04}>
                  <div className="p-5 rounded-sm bg-white border border-gray-200 hover:border-[#8B1538]/30 hover:shadow-card transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-700 uppercase text-[#8B1538] text-base">{city.name}</h3>
                      <span className="text-xs text-[#C8A42A] font-display font-600">{city.zip}</span>
                    </div>
                    <p className="text-xs text-[#6B5B5F] leading-relaxed">{city.note}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-devil-gradient">
          <div className="container-wide text-center">
            <FadeIn>
              <h2 className="font-display font-800 uppercase text-white text-3xl sm:text-4xl mb-4">Don&apos;t See Your City?</h2>
              <p className="text-white/80 text-lg mb-8 font-body max-w-2xl mx-auto">
                We cover all of Arizona and 49 other states. Call us or submit a quote request — if we can write your coverage, we will.
              </p>
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
