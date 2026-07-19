import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insurance Blog — Tips, Guides & Advice | Devil Insurance",
  description:
    "Insurance tips, money-saving guides, and claims advice from Devil Insurance. Learn how to get the best rates, bundle coverage, file claims, and more.",
  alternates: { canonical: "/blog/" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Navbar />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Blog", url: `${SITE.url}/blog/` },
        ])}
      />
      <main>
        <section className="relative pt-32 pb-14 overflow-hidden bg-[#2a0e18] border-b border-[#3a1020]">
          <div aria-hidden className="absolute inset-0 opacity-[0.04] bg-hazard-stripes" />
          <div className="container-x relative">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
            <div className="max-w-3xl">
              <div className="kicker mb-4">
                <ShieldCheck className="w-4 h-4" /> Insurance Tips &amp; Guides
              </div>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl text-bone leading-tight mb-4">
                The Devil Insurance Blog
              </h1>
              <p className="text-steel-light font-body text-lg">
                Practical, no-nonsense guides on saving money on insurance,
                understanding your coverage, and navigating the claims
                process — from your helpful devil insurance agent.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-x">
            {featured && (
              <FadeIn>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group grid lg:grid-cols-2 gap-8 card-dark overflow-hidden hover:border-[#FFC627]/40 transition-colors mb-14"
                >
                  <div className="relative h-64 lg:h-full min-h-[280px]">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-[#8C1D40] text-white text-xs font-heading font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                      Featured
                    </span>
                  </div>
                  <div className="p-8 lg:pr-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 text-xs font-body text-steel-dark">
                      <span className="text-[#FFC627] font-semibold uppercase tracking-wider">
                        {featured.category}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {featured.readingTime}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-bone leading-tight mb-3 group-hover:text-[#FFC627] transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-steel-light font-body leading-relaxed mb-5">
                      {featured.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#FFC627] font-heading font-semibold">
                      Read the guide{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <FadeIn key={post.slug} delay={(i % 3) * 0.08}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full card-dark overflow-hidden hover:border-[#FFC627]/40 transition-colors"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3 text-xs font-body text-steel-dark">
                        <span className="text-[#FFC627] font-semibold uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {post.readingTime}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-bone leading-snug mb-2 group-hover:text-[#FFC627] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-steel text-sm font-body leading-relaxed mb-4 flex-1">
                        {post.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[#FFC627] text-sm font-heading font-semibold">
                        Read more{" "}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
