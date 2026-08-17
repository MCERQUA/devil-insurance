import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export function CTABand({
  heading = "Ready to Protect What Matters?",
  sub = "Get a free, no-obligation quote in 15 minutes. Devil Insurance shops dozens of top carriers to find you the best coverage at the best price.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#AB0428]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] bg-hazard-stripes"
      />
      {/* Gold glow top */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCB05]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container-x relative py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight mb-3">
              {heading}
            </h2>
            <p className="text-white/90 font-body text-lg">{sub}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-[#FFCB05] hover:bg-[#FFDB2E] text-[#17120F] font-heading font-bold uppercase tracking-tight px-8 py-4 rounded-lg transition-colors shadow-[0_0_24px_rgba(255,203,5,0.32)]"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 border-2 border-white/70 hover:border-white text-white font-heading font-bold uppercase tracking-tight px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
