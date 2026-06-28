import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insurance Resources & Blog — East Valley & Tempe, AZ",
  description: "Insurance guides, tips, and resources for Tempe and East Valley homeowners, drivers, and business owners. From Devil Insurance — your local Tempe agency.",
  alternates: { canonical: `${SITE.url}/blog` },
};

const POSTS = [
  {
    slug: "tempe-home-insurance-guide-2026",
    title: "Tempe Home Insurance Guide 2026",
    excerpt: "Everything Tempe homeowners need to know about coverage options, rates, monsoon protection, and choosing the right policy for an East Valley home.",
    category: "Home Insurance",
    readTime: "8 min read",
    date: "June 15, 2026",
    img: "/images/home-insurance.jpg",
  },
  {
    slug: "east-valley-auto-insurance-rates",
    title: "East Valley Auto Insurance Rates Explained",
    excerpt: "Why Mesa, Chandler, and Gilbert drivers pay what they pay — and actionable steps to lower your premium without sacrificing coverage quality.",
    category: "Auto Insurance",
    readTime: "7 min read",
    date: "June 8, 2026",
    img: "/images/auto-insurance.jpg",
  },
  {
    slug: "tempe-landlord-insurance-what-you-need",
    title: "Landlord Insurance for East Valley Rental Properties",
    excerpt: "Investment property owners in Tempe, Chandler, and Mesa — here's what landlord insurance covers, what it costs, and why standard homeowners insurance isn't enough.",
    category: "Landlord Insurance",
    readTime: "9 min read",
    date: "May 28, 2026",
    img: "/images/landlord-insurance.jpg",
  },
  {
    slug: "arizona-renters-insurance-tempe",
    title: "Renters Insurance in Tempe: A Complete Guide",
    excerpt: "ASU students, young professionals, and East Valley renters — a complete guide to what renters insurance covers, how much it costs, and why you need it.",
    category: "Renters Insurance",
    readTime: "6 min read",
    date: "May 12, 2026",
    img: "/images/renters-insurance.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#3D0612] pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3D0612] to-[#8B1538]/60" />
          <div className="relative container-wide z-10">
            <FadeIn>
              <div className="max-w-2xl">
                <p className="eyebrow text-[#C8A42A] mb-3">Resources</p>
                <h1 className="font-display font-800 uppercase text-white text-4xl sm:text-5xl mb-4 leading-tight">
                  Insurance Guides for East Valley Residents
                </h1>
                <p className="text-xl text-white/80 font-body leading-relaxed">
                  Straight-talk articles on home, auto, business, landlord, and renters insurance — written by your local Tempe agents.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 bg-[#FAFAFA]">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 gap-8">
              {POSTS.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 0.08}>
                  <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-sm border border-gray-200 overflow-hidden hover:shadow-lift hover:border-[#8B1538]/30 transition-all duration-300">
                    <div className="aspect-video overflow-hidden bg-[#F5F0F0]">
                      <Image src={post.img} alt={post.title} width={600} height={338} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" unoptimized />
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs font-display font-700 uppercase tracking-widest text-[#C8A42A]">{post.category}</span>
                        <div className="flex items-center gap-1 text-xs text-[#6B5B5F]">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </div>
                      </div>
                      <h2 className="font-display font-800 uppercase text-[#8B1538] text-xl mb-3 group-hover:text-[#5C0A1E] transition-colors leading-tight">{post.title}</h2>
                      <p className="text-sm text-[#6B5B5F] leading-relaxed mb-5 font-body">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-[#6B5B5F]">
                          <Calendar className="w-3.5 h-3.5" /> {post.date}
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs font-display font-700 uppercase tracking-widest text-[#C8A42A] group-hover:gap-2 transition-all">
                          Read Article <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-devil-gradient">
          <div className="container-wide text-center">
            <FadeIn>
              <h2 className="font-display font-800 uppercase text-white text-3xl sm:text-4xl mb-4">Have a Coverage Question?</h2>
              <p className="text-white/80 text-lg mb-8 font-body">Our local agents can answer it directly — and find you the best rate at the same time.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/quote" className="btn-primary">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-secondary">Contact an Agent</Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
