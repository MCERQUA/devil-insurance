import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Clock, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { getAllPostSlugs, getPost, getAllPosts } from "@/lib/blog";
import { articleSchema, breadcrumbSchema, JsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      images: [{ url: post.image }],
    },
  };
}

function formatDate(d: string) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Blog", url: `${SITE.url}/blog/` },
            { name: post.title, url: `${SITE.url}/blog/${post.slug}/` },
          ]),
          articleSchema(post),
        ]}
      />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/70" />
          </div>
          <div className="container-x relative z-10 max-w-4xl">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: post.category },
              ]}
            />
            <div className="flex items-center gap-3 mb-4 text-xs font-body text-steel-light">
              <span className="text-flame font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readingTime}
              </span>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-bone leading-[1.1] mb-4">
              {post.title}
            </h1>
            <p className="text-steel-light font-body text-lg leading-relaxed max-w-3xl">
              {post.description}
            </p>
          </div>
        </section>

        {/* BODY */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-6xl">
              <article>
                <FadeIn>
                  <div
                    className="prose-hood max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                </FadeIn>

                <div className="mt-12 pt-8 border-t border-charcoal-light">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-steel-light hover:text-flame font-heading font-semibold transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back to all articles
                  </Link>
                </div>
              </article>

              {/* SIDEBAR */}
              <aside>
                <div className="lg:sticky lg:top-28 space-y-5">
                  <div className="bg-flame rounded-xl p-6">
                    <Phone className="w-7 h-7 text-white mb-3" />
                    <h3 className="font-heading font-bold text-white text-lg mb-1">
                      Planning a Project?
                    </h3>
                    <p className="text-white/85 text-sm font-body mb-4">
                      Free on-site design consultations across the East Valley.
                    </p>
                    <Link
                      href="/quote"
                      className="block text-center bg-charcoal hover:bg-charcoal-800 text-bone font-heading font-bold py-3 rounded-lg transition-colors mb-2"
                    >
                      Get a Quote
                    </Link>
                    <a
                      href={SITE.phoneHref}
                      className="block text-center text-white font-heading font-bold py-2"
                    >
                      {SITE.phone}
                    </a>
                  </div>

                  {related.length > 0 && (
                    <div className="card-dark p-6">
                      <h3 className="font-heading font-bold text-bone text-base mb-4">
                        More Guides
                      </h3>
                      <ul className="space-y-4">
                        {related.map((r) => (
                          <li key={r.slug}>
                            <Link
                              href={`/blog/${r.slug}`}
                              className="group block"
                            >
                              <span className="text-steel-light group-hover:text-flame text-sm font-body font-medium leading-snug transition-colors block mb-1">
                                {r.title}
                              </span>
                              <span className="text-steel-dark text-xs font-body flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {r.readingTime}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
