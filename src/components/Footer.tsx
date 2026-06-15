import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-[#8C1D40] pt-12 pb-28 md:pb-12 bg-[#0a0007] flex flex-col items-center text-center px-8 gap-6">
      <Link href="/" className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/roofing-aerial.jpg"
          alt="Devil Insurance"
          className="h-8 w-8 object-contain grayscale brightness-200"
        />
        <span className="text-[#FFC627] font-black text-2xl tracking-widest uppercase">
          DEVIL INSURANCE
        </span>
      </Link>

      <p className="font-bold uppercase text-xs tracking-widest text-[#8C1D40]">
        Josh Cotner, Contractors Choice Agency, Phoenix AZ | 480-381-8949
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        <Link
          href="/general-liability"
          className="text-gray-400 font-bold uppercase text-xs hover:text-white transition-colors"
        >
          General Liability
        </Link>
        <Link
          href="/roofing"
          className="text-gray-400 font-bold uppercase text-xs hover:text-white transition-colors"
        >
          Roofing Insurance
        </Link>
        <Link
          href="/about"
          className="text-gray-400 font-bold uppercase text-xs hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          href="/get-a-quote"
          className="text-gray-400 font-bold uppercase text-xs hover:text-white transition-colors"
        >
          Get a Quote
        </Link>
        <a
          href="tel:4803818949"
          className="text-gray-400 font-bold uppercase text-xs hover:text-white transition-colors"
        >
          480-381-8949
        </a>
        <a
          href="mailto:josh@contractorschoiceagency.com"
          className="text-gray-400 font-bold uppercase text-xs hover:text-white transition-colors lowercase"
        >
          josh@contractorschoiceagency.com
        </a>
      </div>

      <p className="text-gray-600 text-[10px] uppercase mt-2">
        © {new Date().getFullYear()} Devil Insurance Arizona · All Rights Reserved
      </p>
    </footer>
  );
}
