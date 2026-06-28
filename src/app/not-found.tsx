import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center bg-[#F5F0F0] py-24">
        <div className="text-center max-w-md px-4">
          <div className="font-display font-800 uppercase text-[#8B1538] text-8xl mb-4">404</div>
          <h1 className="font-display font-700 uppercase text-[#8B1538] text-2xl mb-4">Page Not Found</h1>
          <p className="text-[#6B5B5F] font-body mb-8">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-primary">Back to Home <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/quote" className="btn-outline-maroon">Get a Quote</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
