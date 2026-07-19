import Link from "next/link";
import { Sun, Home, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-charcoal px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-xl bg-flame/12 flex items-center justify-center mx-auto mb-6">
          <Sun className="w-8 h-8 text-flame" />
        </div>
        <h1 className="font-heading font-semibold text-6xl text-bone mb-3">404</h1>
        <h2 className="font-heading font-semibold text-xl text-bone mb-3">
          Page Not Found
        </h2>
        <p className="text-steel-light font-body mb-8">
          Looks like this one&apos;s out in the sun. Head back home or give us a call
          and we&apos;ll point you the right way.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-flame">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <a href={SITE.phoneHref} className="btn-outline">
            <Phone className="w-4 h-4" /> {SITE.phone}
          </a>
        </div>
      </div>
    </main>
  );
}
