"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/general-liability", label: "Coverage" },
  { href: "/roofing", label: "By Trade" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-[#0a0007] border-b-2 border-[#8C1D40] flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-icon.png"
            alt="Devil Insurance Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-black uppercase tracking-tighter text-3xl text-[#FFC627]">
            DEVIL INSURANCE
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-[#FFC627] border-b-2 border-[#FFC627] uppercase font-bold"
                    : "text-white uppercase font-bold hover:text-[#FFC627] transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/get-a-quote"
            className="bg-[#FFC627] text-black font-black px-6 py-2 uppercase text-sm tracking-widest active:scale-95 transition-transform"
          >
            GET A QUOTE
          </Link>
        </nav>
      </header>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-[#0a0007] border-t-2 border-[#8C1D40] flex justify-around items-stretch">
        <a
          href="tel:4803818949"
          className="text-white flex flex-col items-center justify-center w-full py-3 hover:bg-[#8C1D40] transition-colors"
        >
          <span className="material-symbols-outlined mb-1">call</span>
          <span className="font-black uppercase text-[12px]">Call Now</span>
        </a>
        <Link
          href="/get-a-quote"
          className="bg-[#FFC627] text-black flex flex-col items-center justify-center w-full py-3 active:scale-95"
        >
          <span
            className="material-symbols-outlined mb-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            request_quote
          </span>
          <span className="font-black uppercase text-[12px]">Get Quote</span>
        </Link>
      </nav>
    </>
  );
}
