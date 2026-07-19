import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the Devil Insurance website and services.",
  alternates: { canonical: "/terms/" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-14 bg-charcoal-800 border-b border-charcoal-light">
          <div className="container-x max-w-3xl">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms of Service" }]} />
            <h1 className="font-heading font-bold text-4xl text-bone">
              Terms of Service
            </h1>
          </div>
        </section>
        <section className="py-16">
          <div className="container-x max-w-3xl">
            <div className="prose-hood max-w-none">
              <p>
                These Terms of Service govern your use of the Devil Insurance
                website and any services you request through it. By using this site, you
                agree to these terms.
              </p>
              <h2>Services</h2>
              <p>
                Devil Insurance is an independent insurance agency that helps individuals,
                families, and businesses find the right coverage. We work with 30+ carriers
                to compare rates and policies on your behalf. Quotes provided through this
                site are estimates based on the information you supply and are subject to
                confirmation after a consultation with one of our licensed agents.
              </p>
              <h2>Quotes &amp; Coverage</h2>
              <p>
                Information on this site about coverage types, rates, limits, and
                deductibles is provided for general educational purposes. Final policy terms,
                premiums, and coverage details are governed by the carrier&rsquo;s policy
                documents. Coverage is not bound until confirmed in writing by a licensed
                agent and the applicable carrier.
              </p>
              <h2>Licensing &amp; Regulation</h2>
              <p>
                Devil Insurance operates in compliance with applicable state insurance
                licensing requirements. Insurance products described on this site may not be
                available in all states. Your state&rsquo;s department of insurance is the
                final authority on the requirements and protections that apply to your
                specific situation.
              </p>
              <h2>Website Use</h2>
              <p>
                You agree to use this website only for lawful purposes. Content on this
                site is owned by Devil Insurance and may not be reproduced without
                permission.
              </p>
              <h2>Limitation of Warranties</h2>
              <p>
                This website is provided &ldquo;as is.&rdquo; We make no warranties about the
                completeness or accuracy of the general information presented here. Our
                obligations are governed by the specific policy or engagement agreement
                for your account, not by this website.
              </p>
              <h2>Contact</h2>
              <p>
                Questions about these terms? Contact us at{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{" "}
                <a href={SITE.phoneHref}>{SITE.phone}</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
