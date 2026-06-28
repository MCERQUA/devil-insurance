import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, CheckCircle, Phone, Shield, ChevronDown } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.title} — Tempe & East Valley, AZ`,
    description: service.description,
    alternates: { canonical: `${SITE.url}/services/${slug}` },
  };
}

const SERVICE_IMAGES: Record<string, string> = {
  "home-insurance": "/images/home-insurance.jpg",
  "auto-insurance": "/images/auto-insurance.jpg",
  "business-insurance": "/images/business-insurance.jpg",
  "landlord-insurance": "/images/landlord-insurance.jpg",
  "renters-insurance": "/images/renters-insurance.jpg",
};

const SERVICE_FAQS: Record<string, Array<{ q: string; a: string }>> = {
  "home-insurance": [
    { q: "Does home insurance in Tempe cover monsoon damage?", a: "Yes — standard homeowners policies cover wind and hail damage from monsoon storms. However, flooding from heavy rains may require a separate flood policy through FEMA's NFIP." },
    { q: "How much does home insurance cost in Tempe?", a: "Average Tempe homeowners insurance runs $1,200–$2,200/year depending on home age, size, location, and coverage limits. We shop multiple carriers to find the lowest rate for your home." },
    { q: "Does home insurance cover my swimming pool?", a: "Your pool structure is typically covered under dwelling coverage. However, pools also increase your liability exposure — we make sure your liability limits are adequate." },
    { q: "Can I bundle home and auto insurance in Tempe?", a: "Yes, and we strongly recommend it. Bundling typically saves 10–25% on both policies with many carriers." },
    { q: "What is ACV vs. replacement cost coverage?", a: "ACV (Actual Cash Value) pays what your property is worth after depreciation. Replacement cost pays what it costs to rebuild/replace new. We recommend replacement cost coverage for Tempe homeowners." },
  ],
  "auto-insurance": [
    { q: "What auto insurance is required in Arizona?", a: "Arizona requires minimum 25/50/15 liability coverage — $25,000 per person bodily injury, $50,000 per accident, $15,000 property damage. Most drivers benefit from higher limits." },
    { q: "Why is auto insurance expensive in the Phoenix area?", a: "Phoenix metro has high traffic density, frequent accidents, extreme heat that damages tires and batteries, and a higher rate of uninsured drivers — all factors that raise rates." },
    { q: "Does Arizona require uninsured motorist coverage?", a: "No, but we strongly recommend it. Arizona has one of the highest rates of uninsured drivers in the country — over 12% of drivers." },
    { q: "Can I get SR-22 insurance in Arizona?", a: "Yes. We can file SR-22 certificates with the Arizona MVD for drivers who need proof of insurance after a DUI, suspension, or other violation." },
    { q: "Does extreme heat affect my auto insurance?", a: "Comprehensive coverage handles heat-related damage like tire blowouts from hot pavement or battery failures — these are covered under most comprehensive policies." },
  ],
  "business-insurance": [
    { q: "What is a Business Owners Policy (BOP)?", a: "A BOP bundles general liability and commercial property insurance into one affordable policy — ideal for small businesses in Tempe with revenue under $5M and a physical location." },
    { q: "Do I need general liability insurance in Tempe?", a: "Most commercial leases require it, and many clients demand it. GL protects you if a customer is injured at your business or your work damages their property." },
    { q: "Does my business insurance cover ASU-area events?", a: "Event liability coverage can be added to cover specific events or temporary vendor situations near ASU or Mill Avenue." },
    { q: "Do I need workers' comp in Arizona?", a: "Yes — Arizona requires workers' compensation if you have any employees (even part-time). Sole proprietors with no employees may waive it." },
    { q: "What does commercial property insurance cover?", a: "Your building (if you own it), your business personal property (equipment, inventory, furniture), and business income if a covered loss forces you to close temporarily." },
  ],
  "landlord-insurance": [
    { q: "What is landlord insurance and how is it different from homeowners?", a: "Landlord (or dwelling fire) insurance is designed for non-owner-occupied properties. It covers the dwelling structure, your liability as a landlord, and lost rental income — your tenants' belongings are not covered." },
    { q: "Does landlord insurance cover tenant damage?", a: "Intentional tenant damage is often excluded from standard policies. We can add malicious damage endorsements or recommend requiring tenant renter's insurance for added protection." },
    { q: "How much loss of rental income coverage do I need?", a: "We recommend at least 6–12 months of gross rental income. If a covered loss forces your tenant out, this pays your mortgage while repairs happen." },
    { q: "Can I insure multiple rental properties?", a: "Yes — we build commercial umbrella policies and blanket landlord policies for investors with multiple East Valley properties." },
    { q: "Do Airbnb or VRBO rentals need special coverage?", a: "Short-term rentals are typically excluded from standard landlord policies. We can place specialized short-term rental policies for East Valley vacation properties." },
  ],
  "renters-insurance": [
    { q: "How much does renters insurance cost in Tempe?", a: "Most Tempe renters pay $12–$25/month for solid coverage. ASU-area apartments often have higher theft risk, which can nudge rates slightly higher — but it's still very affordable." },
    { q: "Does renters insurance cover my laptop and electronics?", a: "Personal property coverage includes electronics up to your policy limit. We can add scheduled personal property endorsements for high-value electronics or cameras." },
    { q: "Does renters insurance cover bicycle theft?", a: "Standard renters insurance covers bicycles stolen from your apartment. Coverage for bikes stolen from outside your unit varies — ask about the off-premises theft clause." },
    { q: "Will my landlord's insurance cover my stuff?", a: "No. Your landlord's policy covers the building, not your personal belongings or your liability. Renters insurance fills that gap." },
    { q: "Does renters insurance cover water damage from a burst pipe?", a: "Yes — damage to your belongings from a burst pipe (sudden and accidental) is typically covered under personal property. The pipe repair itself is the landlord's responsibility." },
  ],
};

const SERVICE_CONTENT: Record<string, { intro: string; whySection: string[]; whoFor: string[] }> = {
  "home-insurance": {
    intro: "Tempe homeowners face a specific set of risks that make choosing the right home insurance policy critical. Extreme desert heat accelerates roof aging. Monsoon storms bring powerful winds and flash flooding. The East Valley's rapid growth means higher construction costs if you need to rebuild. We shop multiple A-rated carriers to make sure your home, belongings, and family are properly protected.",
    whySection: ["Monsoon wind and water damage coverage", "Liability protection for pool and yard", "Replacement cost coverage (not depreciated ACV)", "Loss of use coverage if your home is uninhabitable", "Multiple carrier comparison for best Tempe rates"],
    whoFor: ["Single-family homeowners in Tempe, Chandler, Mesa", "New construction buyers in Gilbert and Scottsdale", "Homeowners who've seen non-renewals or rate hikes", "Anyone bundling home + auto for maximum savings"],
  },
  "auto-insurance": {
    intro: "Phoenix metro traffic ranks among the most congested in the nation. East Valley freeways — the 101, 202, US-60 — see heavy daily volume and frequent accidents. Add extreme summer heat that destroys tires and batteries, and Arizona's high uninsured driver rate, and you need a policy that's built for real East Valley driving — not a one-size-fits-all national rate.",
    whySection: ["Arizona minimum liability + higher limits available", "Comprehensive for heat, hail, and theft damage", "Uninsured/underinsured motorist protection", "Rental reimbursement and roadside assistance", "SR-22 filing if required by the MVD"],
    whoFor: ["Daily commuters on I-10, 101, or 202", "Young drivers and first-time car owners", "Rideshare drivers needing gap coverage", "Anyone who's had a ticket, accident, or DUI"],
  },
  "business-insurance": {
    intro: "Tempe's business community — from Mill Avenue restaurants and Old Town Scottsdale boutiques to ASU-area tech startups and East Valley contractors — needs insurance that's priced for small business reality and built for Arizona commercial risk. We write Business Owners Policies, standalone GL, commercial property, and workers' comp for East Valley employers.",
    whySection: ["General liability (GL) — client injuries, property damage", "Business Owners Policy (BOP) — GL + property bundled", "Workers' compensation for Arizona employers", "Commercial auto for business vehicles", "Professional liability / E&O for service businesses"],
    whoFor: ["Restaurants, retailers, and service businesses", "Contractors and trades (check our specialty programs)", "Tech startups and professional services firms", "Landlords and property management companies"],
  },
  "landlord-insurance": {
    intro: "East Valley real estate is booming — which means more investor landlords need coverage built for rental properties. Standard homeowners insurance doesn't cover non-owner-occupied rentals. Landlord (dwelling fire) insurance fills that gap with protection for your investment property, your rental income stream, and your liability as a property owner.",
    whySection: ["Dwelling coverage — repair or rebuild your rental", "Loss of rental income when property is uninhabitable", "Liability protection as a landlord", "Optional tenant damage / malicious damage rider", "Umbrella policies for multi-property investors"],
    whoFor: ["Single-family rental investors in Tempe/Chandler", "Small apartment building owners", "Short-term rental (Airbnb/VRBO) property owners", "Investors with multiple East Valley properties"],
  },
  "renters-insurance": {
    intro: "Renting in Tempe — whether you're an ASU student near campus, a young professional in a Chandler apartment, or a family leasing a home in Gilbert — means your landlord's insurance won't cover your belongings or your liability. Renters insurance is the fastest, cheapest way to protect everything you own for less than the cost of a streaming subscription.",
    whySection: ["Personal property coverage for belongings", "Liability if someone is injured in your unit", "Additional living expenses if unit is uninhabitable", "Loss of use — hotel costs during covered repairs", "Electronics, bicycle, and valuables coverage available"],
    whoFor: ["ASU students renting near campus", "Young professionals in East Valley apartments", "Families leasing homes in Chandler or Gilbert", "Anyone whose landlord requires renters insurance"],
  },
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const img = SERVICE_IMAGES[slug] ?? "/images/hero.jpg";
  const faqs = SERVICE_FAQS[slug] ?? [];
  const content = SERVICE_CONTENT[slug];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: `Devil Insurance — ${service.title}`,
    description: service.description,
    url: `${SITE.url}/services/${slug}`,
    areaServed: { "@type": "City", name: "Tempe, Arizona" },
    serviceType: service.title,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Insurance", item: `${SITE.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${SITE.url}/services/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#3D0612] pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src={img} alt={service.title} fill className="object-cover opacity-25" unoptimized />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#3D0612] via-[#5C0A1E]/90 to-[#8B1538]/70" />
          <div className="relative container-wide z-10">
            <FadeIn>
              <nav className="flex items-center gap-2 text-xs text-white/50 mb-6 font-body">
                <Link href="/" className="hover:text-[#C8A42A] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-[#C8A42A] transition-colors">Insurance</Link>
                <span>/</span>
                <span className="text-[#C8A42A]">{service.title}</span>
              </nav>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#C8A42A]/20 border border-[#C8A42A]/40 mb-6">
                  <Shield className="w-4 h-4 text-[#C8A42A]" />
                  <span className="text-xs font-display font-700 uppercase tracking-widest text-[#C8A42A]">Tempe & East Valley</span>
                </div>
                <h1 className="font-display font-800 uppercase text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
                  {service.hero}
                </h1>
                <p className="text-xl text-white/80 mb-8 font-body leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/quote" className="btn-primary">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
                  <a href={SITE.phoneHref} className="btn-secondary"><Phone className="w-4 h-4" /> {SITE.phone}</a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Content */}
              <div className="lg:col-span-2 space-y-10">
                <FadeIn>
                  <div>
                    <h2 className="font-display font-800 uppercase text-[#8B1538] text-3xl mb-4">{service.title} in Tempe &amp; the East Valley</h2>
                    {content && <p className="text-[#6B5B5F] leading-relaxed text-lg">{content.intro}</p>}
                  </div>
                </FadeIn>

                {/* What's covered */}
                <FadeIn>
                  <div className="p-8 rounded-sm bg-[#F5F0F0] border border-gray-200">
                    <h3 className="font-display font-700 uppercase text-[#8B1538] text-xl mb-5">What&apos;s Covered</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.coverage.map((c) => (
                        <div key={c} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#C8A42A] flex-shrink-0" />
                          <span className="font-body text-sm text-[#1A0A0F]">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                {/* Why choose Devil for this line */}
                {content && (
                  <FadeIn>
                    <div>
                      <h3 className="font-display font-700 uppercase text-[#8B1538] text-xl mb-5">Why Choose Devil Insurance for {service.title}</h3>
                      <ul className="space-y-3">
                        {content.whySection.map((w) => (
                          <li key={w} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#8B1538] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-3.5 h-3.5 text-[#C8A42A]" />
                            </div>
                            <span className="text-[#6B5B5F] leading-relaxed font-body">{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                )}

                {/* Who it's for */}
                {content && (
                  <FadeIn>
                    <div>
                      <h3 className="font-display font-700 uppercase text-[#8B1538] text-xl mb-5">Who This Coverage Is For</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {content.whoFor.map((w) => (
                          <div key={w} className="flex items-start gap-2.5 p-3 rounded-sm bg-white border border-gray-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C8A42A] flex-shrink-0 mt-2" />
                            <span className="text-sm text-[#6B5B5F] font-body leading-relaxed">{w}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                )}

                {/* FAQs */}
                {faqs.length > 0 && (
                  <FadeIn>
                    <div>
                      <h3 className="font-display font-700 uppercase text-[#8B1538] text-xl mb-5">Frequently Asked Questions</h3>
                      <div className="divide-y divide-gray-200 rounded-sm border border-gray-200 overflow-hidden">
                        {faqs.map((faq) => (
                          <details key={faq.q} className="group bg-white">
                            <summary className="flex items-center justify-between cursor-pointer list-none p-5">
                              <span className="font-display font-700 uppercase text-[#8B1538] text-base pr-4">{faq.q}</span>
                              <ChevronDown className="w-4 h-4 text-[#C8A42A] flex-shrink-0 transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="px-5 pb-5 text-[#6B5B5F] font-body text-sm leading-relaxed">{faq.a}</p>
                          </details>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <FadeIn direction="left">
                  <div className="p-6 rounded-sm bg-[#8B1538] text-white sticky top-24">
                    <h3 className="font-display font-700 uppercase text-[#C8A42A] text-lg mb-4">Get a Free {service.title} Quote</h3>
                    <p className="text-white/80 text-sm mb-6 font-body leading-relaxed">Local Tempe agents shop multiple A-rated carriers for you. No obligation, same-day quotes.</p>
                    <Link href="/quote" className="btn-primary w-full justify-center mb-3">
                      Request a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 text-white/80 hover:text-[#C8A42A] transition-colors text-sm font-body">
                      <Phone className="w-4 h-4" /> {SITE.phone}
                    </a>
                  </div>
                </FadeIn>

                <FadeIn direction="left" delay={0.1}>
                  <div className="p-6 rounded-sm bg-[#F5F0F0] border border-gray-200">
                    <h4 className="font-display font-700 uppercase text-[#8B1538] text-sm mb-4">Other Coverage Lines</h4>
                    <ul className="space-y-2">
                      {SERVICES.filter((s) => s.slug !== slug).map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-[#6B5B5F] hover:text-[#8B1538] transition-colors font-body">
                            <ArrowRight className="w-3.5 h-3.5 text-[#C8A42A]" />
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="py-16 bg-devil-gradient">
          <div className="container-wide text-center">
            <FadeIn>
              <h2 className="font-display font-800 uppercase text-white text-3xl sm:text-4xl mb-4">Ready to Get Covered?</h2>
              <p className="text-white/80 text-lg mb-8 font-body">Same-day quotes. Local agents. Multiple carriers compared.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/quote" className="btn-primary">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
                <a href={SITE.phoneHref} className="btn-secondary"><Phone className="w-4 h-4" /> {SITE.phone}</a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
