import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "General Liability Insurance for Arizona Contractors",
  description:
    "Protect your AZ contracting business with General Liability Insurance. Specialized coverage for roofing, HVAC, spray foam, and more in Phoenix and beyond.",
};

const coverageItems = [
  {
    icon: "person_alert",
    title: "Third-Party Bodily Injury",
    desc: "Covers medical expenses and legal fees if a client or visitor is injured on your job site.",
  },
  {
    icon: "home_repair_service",
    title: "Property Damage",
    desc: "Pays for damage your crew accidentally causes to a client's property during work.",
  },
  {
    icon: "handshake",
    title: "Completed Operations",
    desc: "Protects you after a job is done — if something you built causes harm down the line.",
  },
  {
    icon: "campaign",
    title: "Personal & Advertising Injury",
    desc: "Covers libel, slander, and copyright claims related to your business advertising.",
  },
  {
    icon: "description",
    title: "Products Liability",
    desc: "Protection if materials or products you supply cause injury or damage after installation.",
  },
  {
    icon: "gavel",
    title: "Legal Defense",
    desc: "We fight for you — legal costs covered even if the claim against you is groundless.",
  },
];

const steps = [
  { num: "01", title: "Apply Online or By Phone", desc: "Fill out our quick quote form or call Josh direct at 480-381-8949. No waiting, no runaround." },
  { num: "02", title: "Review Your Coverage", desc: "We match you with the right carrier and limits for your trade, crew size, and job types." },
  { num: "03", title: "Get Your COI Fast", desc: "Certificates of Insurance issued in hours — not days — so you never lose a bid." },
];

export default function GeneralLiabilityPage() {
  return (
    <>
      <div className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[700px] flex items-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gl-hero.jpg"
              alt="Arizona contractors on site"
              className="w-full h-full object-cover grayscale opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0007] via-[#0a0007]/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <span className="bg-[#8C1D40] text-white px-3 py-1 font-black text-xs tracking-widest uppercase mb-6 inline-block">
              Arizona Contractors
            </span>
            <h1 className="font-black text-6xl md:text-8xl text-[#FFC627] uppercase leading-none mb-6">
              GENERAL LIABILITY INSURANCE
            </h1>
            <p className="text-xl text-white max-w-2xl mb-8">
              Foundational coverage that protects your business from third-party
              injury, property damage, and legal claims. Don&apos;t set foot on a
              job site without it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-a-quote"
                className="bg-[#FFC627] text-black px-10 py-4 font-black uppercase text-lg hover:brightness-110 active:scale-95 transition-all"
              >
                Start Your Quote
              </Link>
              <a
                href="tel:4803818949"
                className="border-2 border-[#8C1D40] text-white px-10 py-4 font-black uppercase text-lg hover:bg-[#8C1D40]/20 active:scale-95 transition-all"
              >
                Call 480-381-8949
              </a>
            </div>
          </div>
        </section>

        {/* What It Covers */}
        <section className="py-24 px-6 bg-[#0a0007]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#8C1D40] font-black uppercase tracking-[0.3em] mb-2">
                What&apos;s Protected
              </p>
              <h2 className="font-black text-5xl text-white uppercase italic">
                Coverage That <span className="text-[#FFC627]">Holds Up</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-[#8C1D40]">
              {coverageItems.map((item) => (
                <div
                  key={item.title}
                  className="p-10 border border-[#8C1D40] hover:bg-[#8C1D40]/10 transition-colors group"
                >
                  <span className="material-symbols-outlined text-[#FFC627] text-5xl mb-6 block">
                    {item.icon}
                  </span>
                  <h3 className="font-black text-2xl text-white mb-4 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[#ddbfc3]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why You Need It */}
        <section className="py-24 px-6 bg-[#1b0716]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-black text-5xl text-[#8C1D40] uppercase mb-8">
                The Arizona Reality
              </h2>
              <div className="space-y-6 text-[#ddbfc3]">
                <p className="text-lg">
                  One lawsuit from a slip-and-fall on your job site can end your
                  business. Arizona doesn&apos;t play around with liability — and
                  neither should you. General Liability is the bedrock of every
                  serious contractor&apos;s insurance portfolio.
                </p>
                <blockquote className="border-l-4 border-[#FFC627] pl-6 italic text-white font-bold text-xl">
                  &ldquo;We&apos;ve seen GCs lose everything over a $15,000 claim that a
                  $400/year policy would have covered. Don&apos;t be that story.&rdquo;
                </blockquote>
                <ul className="space-y-4 pt-4">
                  {[
                    "Required by most general contractors and property owners",
                    "Covers legal defense even on groundless lawsuits",
                    "Fast COI issuance so you never lose a bid",
                    "Limits from $1M to $5M+ per occurrence",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#FFC627]">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gl-accident.jpg"
                alt="Construction site safety"
                className="w-full h-64 object-cover border-2 border-[#8C1D40]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gl-site.jpg"
                alt="Arizona job site"
                className="w-full h-48 object-cover border-2 border-[#8C1D40] grayscale"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-[#0a0007]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-black text-5xl text-white uppercase italic text-center mb-16">
              How It <span className="text-[#FFC627]">Works</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#8C1D40]">
              {steps.map((s) => (
                <div key={s.num} className="p-10 border border-[#8C1D40]">
                  <span className="font-black text-6xl text-[#8C1D40] block mb-4">
                    {s.num}
                  </span>
                  <h3 className="font-black text-2xl text-[#FFC627] uppercase mb-4">
                    {s.title}
                  </h3>
                  <p className="text-[#ddbfc3]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 bg-[#8C1D40] text-center">
          <h2 className="font-black text-6xl md:text-7xl text-white uppercase mb-8 leading-none">
            PROTECT YOUR BUSINESS TODAY.
          </h2>
          <p className="text-white font-bold text-2xl uppercase mb-12 max-w-2xl mx-auto opacity-90">
            Get an AZ General Liability quote in minutes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="tel:4803818949"
              className="bg-black text-[#FFC627] px-12 py-6 font-black uppercase text-xl flex items-center gap-4 hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined">call</span>
              CALL 480-381-8949
            </a>
            <Link
              href="/get-a-quote"
              className="bg-[#FFC627] text-black px-12 py-6 font-black uppercase text-xl flex items-center gap-4 hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined">request_quote</span>
              GET A QUOTE ONLINE
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
