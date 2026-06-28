"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Insurance", href: "/services" },
  { label: "Coverage Area", href: "/coverage" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Home Insurance", href: "/services/home-insurance" },
  { label: "Auto Insurance", href: "/services/auto-insurance" },
  { label: "Business Insurance", href: "/services/business-insurance" },
  { label: "Landlord Insurance", href: "/services/landlord-insurance" },
  { label: "Renters Insurance", href: "/services/renters-insurance" },
];

export function Footer() {
  return (
    <footer className="bg-[#3D0612] pt-16 pb-8">
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-[#8B1538] border border-[#C8A42A]/30">
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2L14 22M14 22L9 26M14 22L19 26M8 6L14 2L20 6M8 6L8 14M20 6L20 14M8 14C8 17.3 10.7 20 14 20C17.3 20 20 17.3 20 14" stroke="#C8A42A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="font-display font-800 text-xl uppercase text-[#C8A42A] leading-none block">Devil</span>
                <span className="font-display font-600 text-xs uppercase tracking-widest text-white/60 leading-none block">Insurance</span>
              </div>
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-3">
              Tempe&apos;s hometown insurance agency — protecting East Valley families and businesses.
            </p>
            <p className="font-body text-xs text-white/40">
              A program of Contractors Choice Agency
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#C8A42A] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="block py-1 font-body text-sm text-white/70 hover:text-[#C8A42A] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#C8A42A] mb-4">
              Insurance Lines
            </h4>
            <ul className="space-y-1">
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="block py-1 font-body text-sm text-white/70 hover:text-[#C8A42A] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#C8A42A] mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 font-body text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-[#C8A42A] flex-shrink-0" />
                <span>12220 E Riggs Road Suite #105<br />Chandler, AZ 85249</span>
              </li>
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-2.5 font-body text-sm text-white/70 hover:text-[#C8A42A] transition-colors">
                  <Phone className="w-4 h-4 text-[#C8A42A]" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 font-body text-sm text-white/70 hover:text-[#C8A42A] transition-colors break-all">
                  <Mail className="w-4 h-4 text-[#C8A42A] flex-shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="font-body text-xs text-white/50">{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C8A42A]/20 mt-10 pt-6 flex flex-col gap-2 sm:flex-row sm:justify-between text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} Devil Insurance · A Contractors Choice Agency Brand · NPN #{SITE.npn} · Licensed in Arizona &amp; All 50 States
          </p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#C8A42A] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#C8A42A] transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
