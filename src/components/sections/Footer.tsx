import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

const TRUST_BADGES = [
  "Independent Agent",
  "Top-Rated Carriers",
  "Free Quotes",
  "Claims Advocacy",
];

export function Footer() {
  return (
    <footer className="bg-[#150608] border-t border-[#3a1020]">
      {/* Trust strip */}
      <div className="border-b border-[#3a1020]">
        <div className="container-x py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST_BADGES.map((c) => (
              <div key={c} className="flex items-center gap-2 text-steel-light text-sm font-body">
                <ShieldCheck className="w-4 h-4 text-[#FFC627]" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand col */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/devil-logo.png"
                alt="Devil Insurance"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-heading font-semibold text-lg tracking-tight text-bone">
                Devil <span className="text-[#FFC627]">Insurance</span>
              </span>
            </Link>
            <p className="text-steel text-sm font-body leading-relaxed mb-2">
              Protect What Matters
            </p>
            <p className="text-steel text-sm font-body leading-relaxed mb-5">
              Your helpful devil insurance agent. We shop dozens of top
              carriers so you get the best coverage at the best price — home,
              auto, business, life, and more.
            </p>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-bone hover:text-[#FFC627] font-heading font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FFC627]" />
              {SITE.phone}
            </a>
          </div>

          {/* Services col */}
          <div>
            <h3 className="font-heading font-bold text-bone text-sm uppercase tracking-wider mb-4">
              Insurance Types
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-steel hover:text-[#FFC627] text-sm font-body transition-colors"
                  >
                    {s.navTitle} Insurance
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div>
            <h3 className="font-heading font-bold text-bone text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Service Areas", href: "/service-areas" },
                { label: "About Us", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Get a Free Quote", href: "/quote" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-steel hover:text-[#FFC627] text-sm font-body transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h3 className="font-heading font-bold text-bone text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-steel text-sm">
                <Phone className="w-4 h-4 text-[#FFC627] mt-0.5 shrink-0" />
                <a href={SITE.phoneHref} className="hover:text-[#FFC627] transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-steel text-sm">
                <Mail className="w-4 h-4 text-[#FFC627] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-[#FFC627] transition-colors break-all"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-steel text-sm">
                <MapPin className="w-4 h-4 text-[#FFC627] mt-0.5 shrink-0" />
                Arizona &amp; Nationwide
              </li>
              <li className="flex items-start gap-2.5 text-steel text-sm">
                <Clock className="w-4 h-4 text-[#FFC627] mt-0.5 shrink-0" />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3a1020]">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel-dark text-xs font-body">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-steel-dark hover:text-steel text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-steel-dark hover:text-steel text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
