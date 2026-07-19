import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Devil Insurance collects, uses, and protects the information you share when requesting a quote or contacting us.",
  alternates: { canonical: "/privacy/" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-14 bg-charcoal-800 border-b border-charcoal-light">
          <div className="container-x max-w-3xl">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />
            <h1 className="font-heading font-bold text-4xl text-bone">
              Privacy Policy
            </h1>
          </div>
        </section>
        <section className="py-16">
          <div className="container-x max-w-3xl">
            <div className="prose-hood max-w-none">
              <p>
                Devil Insurance (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                respects your privacy. This policy explains what information we collect
                when you use our website and how we use it.
              </p>
              <h2>Information We Collect</h2>
              <p>
                When you request a quote or contact us, we collect the information you
                voluntarily provide — such as your name, phone number, email address,
                city, and details about your property and the project you have in mind.
                We may also collect basic, non-identifying analytics data about how
                visitors use the site.
              </p>
              <h2>How We Use Your Information</h2>
              <ul>
                <li>To prepare and deliver an insurance quote for your requested coverage</li>
                <li>To connect you with a licensed agent for a free consultation</li>
                <li>To respond to your questions and communicate about your policy</li>
                <li>To send policy renewal notices and updates you request</li>
                <li>To improve our website and services</li>
              </ul>
              <h2>Information Sharing</h2>
              <p>
                We do not sell your personal information. We share it only with service
                providers who help us operate our business (for example, scheduling or
                communications tools) and only as needed to provide the services you
                request, or where required by law.
              </p>
              <h2>Data Security</h2>
              <p>
                We take reasonable measures to protect the information you provide.
                However, no method of transmission over the internet is completely
                secure, and we cannot guarantee absolute security.
              </p>
              <h2>Your Choices</h2>
              <p>
                You may request that we update or delete your information, or opt out of
                non-essential communications, by contacting us at{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{" "}
                <a href={SITE.phoneHref}>{SITE.phone}</a>.
              </p>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. Material changes will be
                posted on this page.
              </p>
              <h2>Contact</h2>
              <p>
                Questions about this policy? Reach us at{" "}
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
