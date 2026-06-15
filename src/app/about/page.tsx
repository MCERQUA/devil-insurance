import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Devil Insurance",
  description:
    "Josh Cotner — Contractors Choice Agency. 20+ years protecting Arizona contractors. Phoenix-based, contractor-first.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[600px] flex flex-col justify-center items-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/roofing-workers.jpg"
              alt="Arizona sunset over Phoenix"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0007] via-transparent to-[#0a0007]" />
          </div>
          <div className="relative z-10 text-center max-w-5xl">
            <span className="text-[#8C1D40] font-black uppercase tracking-[0.3em] mb-4 block">
              ESTABLISHED PHOENIX, AZ
            </span>
            <h1
              className="font-black text-7xl md:text-9xl text-[#FFC627] uppercase leading-none"
              style={{ textShadow: "0 0 15px rgba(255,198,39,0.3)" }}
            >
              JOSH COTNER
            </h1>
            <h2 className="font-black text-4xl md:text-5xl text-white uppercase mt-2">
              Contractors Choice Agency
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="border-2 border-[#8C1D40] bg-[#0a0007]/80 p-6 backdrop-blur-sm">
                <p className="font-black text-4xl text-[#FFC627]">20+</p>
                <p className="font-bold text-xs uppercase text-white">
                  Years in the Market
                </p>
              </div>
              <div className="border-2 border-[#8C1D40] bg-[#0a0007]/80 p-6 backdrop-blur-sm">
                <p className="font-black text-4xl text-[#FFC627]">100%</p>
                <p className="font-bold text-xs uppercase text-white">
                  AZ Owned &amp; Operated
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="max-w-7xl mx-auto px-6 mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Bio Card */}
            <div className="md:col-span-8 border-2 border-[#8C1D40] p-8 bg-[#210c1b] flex flex-col gap-6">
              <div className="flex items-center gap-4 mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-team.jpg"
                  alt="Devil Insurance"
                  className="h-10 w-10 object-contain"
                />
                <h3 className="font-black text-3xl text-[#FFC627] uppercase">
                  The Philosophy
                </h3>
              </div>
              <p className="text-lg text-[#fed8ee] leading-relaxed">
                Josh Cotner isn&apos;t just an insurance agent; he&apos;s a partner in
                your build. With over two decades navigating the complex Arizona
                insurance landscape, Josh founded Contractors Choice Agency on a
                single premise: contractors deserve someone who speaks their
                language.
              </p>
              <p className="text-[#ddbfc3] leading-relaxed">
                Based in Phoenix, we understand the specific risks of the desert
                market — from the heat-strained logistics to the high-stakes
                liability of major metropolitan developments. We don&apos;t do
                generic. We do iron-clad protection for those who do the real
                work.
              </p>
              <div className="mt-auto pt-8 flex items-center gap-4 border-t border-[#8C1D40]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/quote-hero2.jpg"
                  alt="Josh Cotner"
                  className="w-16 h-16 object-cover border-2 border-[#8C1D40]"
                />
                <div>
                  <p className="font-bold text-white uppercase text-sm">
                    Josh Cotner
                  </p>
                  <p className="text-[#8C1D40] text-xs font-black uppercase">
                    Principal Agent
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Callout */}
            <div className="md:col-span-4 bg-[#8C1D40] p-8 flex flex-col justify-center items-start text-white">
              <span
                className="material-symbols-outlined text-5xl mb-6"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield_person
              </span>
              <h4 className="font-black text-4xl uppercase leading-tight">
                Not corporate. <br />
                Contractor-to-contractor.
              </h4>
              <p className="mt-6 opacity-90">
                No automated phone trees. No middle managers. Just direct
                expertise from one local business owner to another.
              </p>
            </div>

            {/* Desert Born */}
            <div className="md:col-span-6 border-2 border-[#8C1D40] p-8 bg-[#0a0007] relative overflow-hidden flex items-end min-h-[300px]">
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-[#FFC627] text-6xl opacity-20">
                  location_on
                </span>
              </div>
              <div>
                <h4 className="font-black text-3xl text-[#FFC627] uppercase">
                  Desert Born &amp; Bred
                </h4>
                <p className="mt-2 text-[#ddbfc3]">
                  As ASU Sun Devils, our pride runs deep in the Valley.
                  We&apos;re committed to supporting the local economy and the
                  contractors who literally build the future of Arizona.
                </p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="md:col-span-6 border-2 border-[#8C1D40] p-8 bg-[#2f1828] flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-black text-2xl uppercase text-[#FFC627]">
                  PHOENIX HQ
                </h4>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#8C1D40]">
                    call
                  </span>
                  <a
                    href="tel:4803818949"
                    className="font-bold text-xl hover:text-[#FFC627] transition-colors"
                  >
                    480-381-8949
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#8C1D40]">
                    mail
                  </span>
                  <a
                    href="mailto:josh@contractorschoiceagency.com"
                    className="font-bold hover:text-[#FFC627] transition-colors lowercase"
                  >
                    josh@contractorschoiceagency.com
                  </a>
                </div>
              </div>
              <Link
                href="/get-a-quote"
                className="w-full mt-8 border-2 border-[#8C1D40] text-white py-4 font-black uppercase text-center hover:bg-[#8C1D40] transition-colors block"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-[#8C1D40] w-full max-w-7xl mx-auto opacity-50 mb-24" />
      </div>
    </>
  );
}
