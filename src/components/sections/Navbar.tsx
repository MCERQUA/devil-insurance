"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Services", href: "/services", hasMenu: true },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#17120F]/95 backdrop-blur-md border-b border-[#3A2A22] shadow-lg"
          : "bg-gradient-to-b from-[#17120F]/90 to-transparent"
      )}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/devil-logo.png"
              alt="Devil Insurance logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <span className="font-heading font-semibold text-lg sm:text-xl tracking-tight text-bone leading-none">
              Devil{" "}
              <span className="text-[#FFCB05]">Insurance</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) =>
              item.hasMenu ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-steel-light hover:text-bone font-body font-medium text-sm transition-colors"
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-60">
                      <div className="card-dark p-2 shadow-2xl">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="block px-3 py-2 rounded-lg text-sm text-steel-light hover:text-bone hover:bg-[#3A2A22] transition-colors"
                          >
                            {s.navTitle} Insurance
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-steel-light hover:text-bone font-body font-medium text-sm transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            <a
              href={SITE.phoneHref}
              className="hidden xl:flex items-center gap-2 text-bone hover:text-[#FFCB05] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FFCB05]" />
              <span className="font-heading font-bold text-sm">{SITE.phone}</span>
            </a>
            <Link
              href="/quote"
              className="hidden sm:inline-flex items-center bg-[#FFCB05] hover:bg-[#FFDB2E] text-[#17120F] px-5 py-2.5 rounded-lg font-heading font-bold text-sm tracking-tight transition-colors shadow-[0_0_18px_rgba(255,203,5,0.32)]"
            >
              Free Quote
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden text-bone p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#17120F] border-t border-[#3A2A22]">
          <div className="container-x py-4 space-y-1">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-2 py-2.5 rounded-lg text-steel-light hover:text-bone hover:bg-[#241A15] font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 px-2 py-2.5 text-[#FFCB05] font-heading font-bold"
            >
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
            <Link
              href="/quote"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-[#FFCB05] text-[#17120F] px-5 py-3 rounded-lg font-heading font-bold uppercase tracking-tight mt-2"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
