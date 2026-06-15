import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arizona Contractor Insurance Specialists",
  description:
    "Arizona contractor insurance specialists. Fast quotes for roofing, HVAC, spray foam, and more. The Devil's in the Details.",
};

const coverages = [
  {
    icon: "shield",
    title: "General Liability",
    desc: "Foundational protection against third-party bodily injury and property damage claims on the job site.",
    href: "/general-liability",
  },
  {
    icon: "groups",
    title: "Workers Comp",
    desc: "Essential coverage for employee injuries, meeting all Arizona state regulatory requirements.",
    href: "/get-a-quote",
  },
  {
    icon: "directions_car",
    title: "Commercial Auto",
    desc: "Protects your fleet of trucks and vans while navigating Phoenix traffic and job sites.",
    href: "/get-a-quote",
  },
  {
    icon: "construction",
    title: "Tools & Equipment",
    desc: "Inland marine coverage for your expensive gear, whether in the shop or on a remote site.",
    href: "/get-a-quote",
  },
  {
    icon: "umbrella",
    title: "Umbrella",
    desc: "Extra liability protection that kicks in when standard policy limits are reached.",
    href: "/get-a-quote",
  },
  {
    icon: "business_center",
    title: "BOP",
    desc: "Business Owner's Policy: Combining property and liability into one powerful package.",
    href: "/get-a-quote",
  },
];

const whyUs = [
  {
    num: "01",
    title: "Local AZ Expertise",
    desc: "We know the Phoenix dirt and the Arizona laws that govern your trade.",
  },
  {
    num: "02",
    title: "Fast COIs",
    desc: "Certificates of Insurance sent faster than the competition, so you don't lose the bid.",
  },
  {
    num: "03",
    title: "Specialized Trade Knowledge",
    desc: "From roofing to spray foam, we understand your unique risk profile.",
  },
  {
    num: "04",
    title: "Direct Access to Josh",
    desc: "No call centers. You get a direct line to a specialist who builds real relationships.",
  },
  {
    num: "05",
    title: "Competitive Rates",
    desc: "We leverage our carrier network to find the best pricing without cutting corners.",
  },
];

const trades = [
  "Roofing",
  "HVAC",
  "Concrete",
  "Spray Foam",
  "Electrical",
  "Plumbing",
  "Landscaping",
  "GC",
];

const testimonials = [
  {
    quote:
      "Devil Insurance saved us when our last agent ghosted us during a major project. Josh handled the COI in 20 minutes.",
    name: "Mike Sullivan",
    company: "Sullivan Roofing & Solar",
    accent: "#FFC627",
  },
  {
    quote:
      "Best rates we've seen in the valley for workers comp. They actually understand how spray foam works.",
    name: "David Chen",
    company: "Elite Foam Solutions",
    accent: "#8C1D40",
  },
  {
    quote:
      "Rugged, reliable, and straightforward. No corporate BS, just solid insurance for people who build.",
    name: "Sloan Masterson",
    company: "Masterson GC",
    accent: "#FFC627",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-contractor.jpg"
            alt="Contractor working on site"
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0007] via-[#0a0007]/70 to-[#0a0007]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0007] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
          <div className="max-w-4xl border-l-8 border-[#8C1D40] pl-8">
            <h1 className="font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tighter mb-8">
              THE DEVIL&apos;S IN THE DETAILS —{" "}
              <span className="text-[#FFC627]">WE HANDLE BOTH.</span>
            </h1>
            <p className="text-xl text-[#ddbfc3] mb-10 max-w-2xl">
              Arizona contractor insurance specialists. Fast quotes, real
              expertise, direct access to Josh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-a-quote"
                className="bg-[#FFC627] text-black font-black px-10 py-5 text-xl uppercase tracking-tighter hover:bg-[#ffdf9a] transition-all active:scale-95"
              >
                Get a Quote
              </Link>
              <Link
                href="/general-liability"
                className="border-2 border-[#8C1D40] text-white font-black px-10 py-5 text-xl uppercase tracking-tighter hover:bg-[#8C1D40]/20 transition-all"
              >
                View Coverage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#8C1D40] py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#FFC627] text-3xl">
              verified
            </span>
            <span className="font-black uppercase tracking-widest text-white">
              20+ Years in AZ
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#FFC627] text-3xl">
              star
            </span>
            <span className="font-black uppercase tracking-widest text-white">
              5-Star Rated Agency
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#FFC627] text-3xl">
              gavel
            </span>
            <span className="font-black uppercase tracking-widest text-white">
              Licensed &amp; Insured
            </span>
          </div>
          <div className="flex gap-8 items-center opacity-70 grayscale brightness-200">
            <span className="font-black italic text-sm">DESERT GUARD</span>
            <span className="font-black italic text-sm">COPPER SHIELD</span>
            <span className="font-black italic text-sm">AZ IRON</span>
          </div>
        </div>
      </section>

      {/* Coverage Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-[#8C1D40] font-black uppercase tracking-[0.3em] mb-2">
            Iron-Clad Protection
          </p>
          <h2 className="font-black text-5xl text-white uppercase italic">
            Contractor Coverage{" "}
            <span className="text-[#FFC627]">Suite</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-[#8C1D40]">
          {coverages.map((c) => (
            <div
              key={c.title}
              className="p-10 border border-[#8C1D40] hover:bg-[#8C1D40]/10 transition-colors group"
            >
              <span className="material-symbols-outlined text-[#FFC627] text-5xl mb-6 block">
                {c.icon}
              </span>
              <h3 className="font-black text-3xl text-white mb-4 uppercase">
                {c.title}
              </h3>
              <p className="text-[#ddbfc3] mb-6">{c.desc}</p>
              <Link
                href={c.href}
                className="text-[#FFC627] font-black uppercase text-xs tracking-widest group-hover:underline"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Devil Insurance */}
      <section className="bg-[#2f1828] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/josh-portrait.jpg"
              alt="Josh Cotner — Devil Insurance"
              className="w-full h-[600px] object-cover grayscale"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#FFC627] p-8 text-black hidden md:block">
              <p className="font-black text-4xl">480.381.8949</p>
              <p className="uppercase font-bold tracking-widest">
                Direct to Josh
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-black text-5xl text-white mb-12 uppercase italic leading-none">
              Why The <span className="text-[#FFC627]">Pros</span> Choose Us
            </h2>
            <ul className="space-y-8">
              {whyUs.map((w) => (
                <li key={w.num} className="flex gap-6 items-start">
                  <span className="bg-[#8C1D40] text-[#FFC627] font-black p-4 text-2xl leading-none shrink-0">
                    {w.num}
                  </span>
                  <div>
                    <h4 className="text-white font-black uppercase text-xl mb-2">
                      {w.title}
                    </h4>
                    <p className="text-[#ddbfc3]">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trade Chips */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-black uppercase text-white mb-10 tracking-[0.2em]">
            Industries We Power
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {trades.map((t) => (
              <span
                key={t}
                className="bg-[#8C1D40]/20 border border-[#8C1D40] text-white px-6 py-3 uppercase font-black text-sm hover:bg-[#FFC627] hover:text-black transition-all cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="font-black text-5xl text-white mb-16 uppercase italic text-center">
          Words From The <span className="text-[#FFC627]">Site</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#3a2232] p-8"
              style={{ borderTop: `4px solid ${t.accent}` }}
            >
              <span className="material-symbols-outlined text-[#8C1D40] text-4xl mb-6 block">
                format_quote
              </span>
              <p className="text-lg text-white italic mb-8">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-black uppercase text-sm text-[#FFC627]">
                  {t.name}
                </p>
                <p className="text-xs uppercase tracking-widest text-[#ddbfc3]">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AZ Map Banner */}
      <section className="relative h-[500px] w-full overflow-hidden grayscale">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/phoenix-aerial.jpg"
          alt="Phoenix Arizona aerial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#8C1D40]/40 flex items-center justify-center">
          <div className="text-center bg-[#0a0007] p-12 border-2 border-[#FFC627]">
            <h2 className="font-black text-5xl text-white uppercase italic mb-4">
              Serving All of <span className="text-[#FFC627]">AZ</span>
            </h2>
            <p className="font-black text-xl tracking-widest text-white uppercase">
              Phoenix • Mesa • Scottsdale • Tempe • Tucson
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#0a0007] text-center border-y border-[#8C1D40]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-6xl md:text-7xl text-white mb-10 uppercase italic leading-tight">
            Don&apos;t Get Burned on Coverage.{" "}
            <br />
            <span className="text-[#FFC627]">Get a Quote.</span>
          </h2>
          <Link
            href="/get-a-quote"
            className="inline-block bg-[#FFC627] text-black font-black px-16 py-8 text-2xl uppercase tracking-tighter active:scale-95 transition-transform"
          >
            Secure Your Business Now
          </Link>
        </div>
      </section>
    </>
  );
}
