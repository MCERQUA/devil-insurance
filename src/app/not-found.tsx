import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Get a contractor insurance quote or learn about our Arizona coverage.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#ff3a8a] mb-6">
          404 — The Details Got Away
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#fed8ee] mb-6">
          This page is missing. The Devil&apos;s in the details.
        </h1>
        <p className="text-lg text-[#bfa0b8] leading-relaxed mb-10">
          The URL you tried doesn&apos;t exist or has been retired. Pick a
          destination below — or call <a href="tel:8449675247" className="text-[#ff3a8a] font-semibold">844-967-5247</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#ff3a8a] text-white px-8 py-3.5 rounded-lg font-bold hover:opacity-90 transition"
          >
            Home
          </Link>
          <Link
            href="/general-liability"
            className="inline-flex items-center justify-center border border-[#ff3a8a]/40 text-[#fed8ee] px-8 py-3.5 rounded-lg font-bold hover:bg-[#ff3a8a]/10 transition"
          >
            General Liability
          </Link>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center justify-center border border-[#fed8ee]/20 text-[#fed8ee] px-8 py-3.5 rounded-lg font-bold hover:bg-white/10 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
