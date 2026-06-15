import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roofing Contractor Insurance — Arizona",
  description:
    "Roofing insurance built for the AZ heat. Monsoon coverage, high-heat liability, and fast COIs for Arizona roofing contractors. Devil Insurance — Phoenix, AZ.",
};

const tradeBoxes = [
  {
    icon: "engineering",
    title: "Workers Comp",
    desc: "Roofing is high-risk. We offer competitive rates that prioritize crew safety and protect your business from catastrophic injury claims.",
  },
  {
    icon: "construction",
    title: "Tool Theft",
    desc: "Equipment isn't cheap. Whether it's on the truck or the roof, get full replacement value for your compressors, nailers, and scaffolding.",
  },
  {
    icon: "shield_with_heart",
    title: "General Liability",
    desc: "Iron-clad protection against property damage, third-party injuries, and completed operations liability.",
  },
];

export default function RoofingPage() {
  return (
    <>
      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative min-h-[700px] flex items-center px-6"
          style={{
            background:
              "linear-gradient(rgba(10,0,7,0.8), rgba(10,0,7,0.95)), url('/images/roofing-hero.jpg') center/cover no-repeat",
          }}
        >
          <div className="max-w-4xl z-10">
            <span className="bg-[#8C1D40] text-white px-3 py-1 font-black text-xs tracking-widest uppercase mb-6 inline-block">
              Arizona Exclusive
            </span>
            <h1 className="font-black text-6xl md:text-8xl text-[#FFC627] uppercase leading-none mb-6">
              ROOFING INSURANCE BUILT FOR THE AZ HEAT
            </h1>
            <p className="text-xl text-white max-w-2xl mb-8">
              From monsoon-driven leaks to the brutal 120° asphalt grind, your
              risk isn&apos;t standard. Your insurance shouldn&apos;t be either.
              Protect your crew and your contracts with Devil Insurance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-a-quote"
                className="bg-[#FFC627] text-black px-10 py-4 font-black uppercase text-lg hover:brightness-110 active:scale-95 transition-all"
              >
                Start Your Quote
              </Link>
              <Link
                href="/general-liability"
                className="border-2 border-[#8C1D40] text-white px-10 py-4 font-black uppercase text-lg hover:bg-[#8C1D40]/20 active:scale-95 transition-all"
              >
                View Coverages
              </Link>
            </div>
          </div>
        </section>

        {/* Risk Deep Dive */}
        <section className="py-24 px-6 bg-[#0a0007]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <h2 className="font-black text-5xl text-[#8C1D40] uppercase mb-8">
                The Desert Risk Factor
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Arizona roofing isn&apos;t just about height; it&apos;s about
                  volatility. Between the seasonal monsoon microbursts that can
                  peel back a new installation and the thermal expansion of flat
                  roofs under the Phoenix sun, your liability is unique.
                </p>
                <blockquote className="border-l-4 border-[#FFC627] pl-6 italic text-white font-bold text-xl">
                  &ldquo;We cover the &apos;Hot Tar&apos; jobs others won&apos;t
                  touch. Residential or Commercial, if you&apos;re on the roof,
                  we&apos;ve got your back.&rdquo;
                </blockquote>
                <ul className="space-y-4 pt-4">
                  {[
                    "High-Heat Liability Protection",
                    "Monsoon Damage Coverage",
                    "Flat Roof & Hot Tar Specialists",
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
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              <div className="border-2 border-[#8C1D40] p-4 bg-[#1b0716]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/roofing-hero.jpg"
                  alt="Commercial roofing crew"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="font-black text-sm text-[#FFC627] uppercase">
                  Commercial Scale
                </h3>
                <p className="text-xs mt-2 text-gray-400">
                  Large-scale liability for industrial projects.
                </p>
              </div>
              <div className="border-2 border-[#8C1D40] p-4 bg-[#1b0716] mt-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/gl-hero.jpg"
                  alt="Residential roofing"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="font-black text-sm text-[#FFC627] uppercase">
                  Residential Focus
                </h3>
                <p className="text-xs mt-2 text-gray-400">
                  Precision coverage for home installations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trade Boxes */}
        <section className="py-24 px-6 bg-[#1b0716]">
          <h2 className="font-black text-4xl text-center text-white uppercase mb-16 tracking-widest max-w-7xl mx-auto">
            Built For Your Trade
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {tradeBoxes.map((b) => (
              <div
                key={b.title}
                className="bg-[#0a0007] border border-[#8C1D40] p-8 hover:border-[#FFC627] transition-all group"
              >
                <span className="material-symbols-outlined text-4xl text-[#FFC627] mb-6 block">
                  {b.icon}
                </span>
                <h3 className="font-black text-2xl text-white uppercase mb-4">
                  {b.title}
                </h3>
                <p className="text-gray-400 mb-6">{b.desc}</p>
                <Link
                  href="/get-a-quote"
                  className="text-[#FFC627] font-black group-hover:translate-x-2 inline-block transition-transform uppercase text-xs tracking-widest"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 px-6 bg-[#0a0007] relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 w-1/2 pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/quote-form.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="material-symbols-outlined text-6xl text-[#8C1D40] mb-8 block">
              format_quote
            </span>
            <blockquote className="font-black text-3xl text-white italic mb-8">
              &ldquo;When the monsoons hit Scottsdale last July, half our job sites
              were exposed. Devil Insurance didn&apos;t just process the claim;
              they understood the urgency of a roofing deadline in AZ. They
              speak our language.&rdquo;
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-[#FFC627] mb-4" />
              <p className="font-black text-[#FFC627] uppercase tracking-widest">
                Mark &apos;The Hammer&apos; Harrison
              </p>
              <p className="text-gray-500 uppercase text-xs font-bold">
                Owner, Copper Sky Roofing — Phoenix, AZ
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 bg-[#8C1D40] text-center">
          <h2 className="font-black text-6xl md:text-7xl text-white uppercase mb-8 leading-none">
            STOP GAMBLING WITH YOUR CREW&apos;S FUTURE.
          </h2>
          <p className="text-white font-bold text-2xl uppercase mb-12 max-w-2xl mx-auto opacity-90">
            Get a Roofing Quote Today and Lock in AZ-Specific Protection.
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
