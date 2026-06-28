"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Menu, X, Phone, Shield } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={prefersReduced ? undefined : { y: -100 }}
      animate={prefersReduced ? undefined : { y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top utility bar — maroon bg, gold text */}
      <div className="bg-[#5C0A1E] text-[#C8A42A]">
        <div className="container-wide flex h-9 items-center justify-between gap-4">
          <span className="hidden lg:block w-[200px]" aria-hidden />
          <p className="hidden md:block flex-1 text-center font-display font-600 text-[0.7rem] uppercase tracking-[0.18em]">
            Devil Insurance — Protecting East Valley Families &amp; Businesses
          </p>
          <div className="flex items-center gap-5 text-[0.7rem] font-display font-700 uppercase tracking-widest">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-light"
            >
              <Phone className="h-3.5 w-3.5" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={[
          "bg-white transition-shadow duration-300",
          scrolled ? "border-b-2 border-gray-200 shadow-md" : "border-b border-gray-200 shadow-none",
        ].join(" ")}
      >
        <div className="container-wide flex h-20 items-center justify-between gap-6">
          {/* Logo mark */}
          <Link href="/" aria-label={`${SITE.name} home`} className="flex items-center gap-3 transition-transform duration-200 hover:scale-105">
            {/* Devil pitchfork SVG logo mark */}
            <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-[#8B1538]">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2L14 22M14 22L9 26M14 22L19 26M8 6L14 2L20 6M8 6L8 14M20 6L20 14M8 14C8 17.3 10.7 20 14 20C17.3 20 20 17.3 20 14" stroke="#C8A42A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="font-display font-800 text-xl uppercase tracking-tight text-[#8B1538] leading-none block">Devil</span>
              <span className="font-display font-700 text-xs uppercase tracking-[0.15em] text-[#C8A42A] leading-none block">Insurance</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="lj-underline inline-flex items-center gap-1 font-display font-700 text-sm uppercase tracking-wide text-[#1A0A0F] transition-colors hover:text-[#8B1538]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/quote" className="btn-primary">
              <Shield className="w-4 h-4" />
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm border-2 border-[#8B1538] text-[#8B1538]"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={[
          "lg:hidden fixed inset-0 z-50 bg-[#5C0A1E] transition-opacity duration-300",
          open ? "opacity-100 visible" : "pointer-events-none invisible opacity-0",
        ].join(" ")}
      >
        <div className="container-wide flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-[#8B1538] border border-[#C8A42A]/40">
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2L14 22M14 22L9 26M14 22L19 26M8 6L14 2L20 6M8 6L8 14M20 6L20 14M8 14C8 17.3 10.7 20 14 20C17.3 20 20 17.3 20 14" stroke="#C8A42A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-display font-800 text-lg uppercase text-[#C8A42A]">Devil Insurance</span>
          </div>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border-2 border-gold text-gold"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="container-wide mt-6 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 border-b border-white/10 py-4 font-display font-700 text-2xl uppercase tracking-wide text-[#C8A42A] transition-colors hover:text-gold-light"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-6">
            <Link href="/quote" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
