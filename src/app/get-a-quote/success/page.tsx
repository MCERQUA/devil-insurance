import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quote Request Received",
  description: "Your quote request has been received. Josh will be in touch shortly.",
};

export default function QuoteSuccessPage() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <span
          className="material-symbols-outlined text-[#FFC627] mb-8 block"
          style={{ fontSize: "80px", fontVariationSettings: "'FILL' 1" }}
        >
          verified
        </span>
        <h1 className="font-black text-6xl text-white uppercase mb-6 leading-none">
          QUOTE REQUEST <span className="text-[#FFC627]">RECEIVED.</span>
        </h1>
        <p className="text-xl text-[#ddbfc3] mb-4">
          Josh will review your info and reach out directly — usually within a few hours.
        </p>
        <p className="text-[#8C1D40] font-black uppercase tracking-widest mb-12">
          480-381-8949 · josh@contractorschoiceagency.com
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#FFC627] text-black font-black px-10 py-4 uppercase tracking-widest hover:brightness-110 transition-all active:scale-95"
          >
            Back to Home
          </Link>
          <a
            href="tel:4803818949"
            className="border-2 border-[#8C1D40] text-white font-black px-10 py-4 uppercase tracking-widest hover:bg-[#8C1D40]/20 transition-all"
          >
            Call Josh Now
          </a>
        </div>
      </div>
    </div>
  );
}
