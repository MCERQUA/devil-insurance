import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { SITE } from "@/lib/site";

const POSTS: Record<string, {
  title: string; category: string; date: string; readTime: string;
  img: string; excerpt: string; content: string;
}> = {
  "tempe-home-insurance-guide-2026": {
    title: "Tempe Home Insurance Guide 2026",
    category: "Home Insurance",
    date: "June 15, 2026",
    readTime: "8 min read",
    img: "/images/home-insurance.jpg",
    excerpt: "Everything Tempe homeowners need to know about coverage options, rates, monsoon protection, and choosing the right policy for an East Valley home.",
    content: `## Why Home Insurance in Tempe Is Different

Tempe sits at the heart of one of America's most dynamic housing markets — and one of its most challenging environments for homeowners insurance. If you own a home in Tempe or anywhere in the East Valley, understanding how Arizona's climate and market conditions affect your coverage is essential.

### The Tempe Risk Profile

Tempe homeowners face several unique risks that drive both coverage needs and premiums:

**Monsoon season (June–September):** Arizona's summer monsoons bring violent thunderstorms with straight-line winds exceeding 60 mph, marble-sized hail, and flash flooding. Wind and hail damage is covered under standard homeowners policies, but flood damage from surface water or storm drainage backup typically requires a separate flood insurance policy through FEMA's National Flood Insurance Program (NFIP) or a private flood carrier.

**Extreme heat:** Phoenix metro summers routinely exceed 115°F. That heat accelerates the aging of roofing materials, HVAC systems, and exterior paint. An aging roof is one of the most common reasons insurance companies non-renew policies or raise premiums in Arizona.

**Wildfire smoke and ember exposure:** While Tempe itself isn't in a high-wildfire-risk zone like Flagstaff or Prescott, smoke and embers from fires in the Superstition Mountains or McDowell Sonoran Preserve can affect air quality and, in extreme events, cause property damage.

**High construction costs:** Maricopa County's construction labor market is extremely tight. If you need to rebuild after a significant loss, replacement costs can easily run $150–$250 per square foot — meaning older policies with dated coverage limits may leave you underinsured.

## What Tempe Homeowners Insurance Covers

A standard HO-3 homeowners policy (the most common type in Arizona) provides:

- **Dwelling coverage:** Protects the structure of your home — roof, walls, foundation, attached garage, built-in appliances. Should be set to full replacement cost value, not market value.
- **Other structures:** Detached garages, fences, block walls, storage sheds — typically 10% of dwelling coverage.
- **Personal property:** Your furniture, electronics, clothing, tools, and other belongings. Most policies cover personal property at actual cash value (ACV) unless you upgrade to replacement cost coverage.
- **Loss of use / additional living expenses (ALE):** Pays hotel and meal costs if your home becomes uninhabitable due to a covered loss. Usually 20–30% of dwelling coverage.
- **Personal liability:** Protects you if someone is injured on your property or you accidentally damage someone else's property. Standard coverage is $100,000; we typically recommend $300,000–$500,000 for Tempe homeowners with pools.
- **Medical payments to others:** Covers small medical bills for guests injured on your property, regardless of fault. Usually $1,000–$5,000.

## What Tempe Home Insurance Does NOT Cover

Standard policies exclude:
- Flood damage (surface water, storm surge, overflowing drainage) — requires separate flood policy
- Earth movement / earthquake damage
- Normal wear and tear
- Mold resulting from long-term neglect
- Sewer backup (available as an add-on)
- Business equipment beyond $2,500 for home-based businesses

## How Much Does Home Insurance Cost in Tempe?

Average Tempe homeowners insurance runs **$1,100–$2,400 per year** for a standard single-family home, depending on:

- **Home age and condition:** Homes built before 2000 with original roofs often pay more
- **Roof type and age:** Tile roofs outlast composition shingles; a roof over 15 years old can increase premiums significantly
- **Coverage limits:** Higher limits = higher premium, but we recommend replacement cost coverage
- **Deductible:** Higher deductibles reduce premiums; standard is $1,000–$2,500
- **Pool and trampolines:** Both raise liability rates
- **Claims history:** Multiple prior claims can increase premiums or lead to non-renewal
- **Credit score:** Arizona allows carriers to use credit-based insurance scores in rate calculations

## Tips to Lower Your Tempe Home Insurance Premium

1. **Bundle home and auto:** Bundling with the same carrier typically saves 10–25% on both policies
2. **Upgrade your roof:** A new impact-resistant roof can significantly reduce premiums — some carriers offer discounts of 20–30%
3. **Install safety features:** Monitored alarm systems, deadbolts, fire suppression systems
4. **Raise your deductible:** Moving from $1,000 to $2,500 can reduce premiums 10–15%
5. **Shop annually:** Don't auto-renew without comparing. We shop multiple carriers at every renewal

## Should You Choose ACV or Replacement Cost Coverage?

**Always choose replacement cost coverage** for Tempe homes. Here's why: if a monsoon destroys your 10-year-old roof, actual cash value (ACV) coverage pays the depreciated value — perhaps 50% of replacement cost. Replacement cost coverage pays the full cost to rebuild with similar materials, regardless of depreciation. The premium difference is usually $100–$300/year — far less than the gap you'd face at claim time.

## Getting the Right Coverage for Your Tempe Home

The single best thing a Tempe homeowner can do is work with a local independent agent who shops multiple carriers. Big-name direct writers like State Farm or Allstate offer their own rates only; an independent agent like Devil Insurance compares dozens of A-rated companies and finds you the best combination of coverage and price.

Ready to review your Tempe home insurance? Call us at ${SITE.phone} or [request a free quote online](/quote). We'll compare options from multiple carriers and make sure your home is properly covered for East Valley risks.`,
  },

  "east-valley-auto-insurance-rates": {
    title: "East Valley Auto Insurance Rates Explained",
    category: "Auto Insurance",
    date: "June 8, 2026",
    readTime: "7 min read",
    img: "/images/auto-insurance.jpg",
    excerpt: "Why Mesa, Chandler, and Gilbert drivers pay what they pay — and actionable steps to lower your premium without sacrificing coverage quality.",
    content: `## Why East Valley Auto Insurance Rates Are What They Are

If you drive in Mesa, Chandler, Gilbert, or Tempe and feel like your auto insurance premium is high, you're not imagining it. Phoenix metro consistently ranks among the most expensive auto insurance markets in the United States, and there are specific, measurable reasons why.

### Factor 1: Traffic Density and Accident Frequency

The East Valley is one of the fastest-growing regions in the country. The 101, 202, and US-60 freeways see heavy commuter traffic daily, with construction zones that create accident hot spots. More accidents = more claims = higher premiums across the board.

### Factor 2: Uninsured and Underinsured Drivers

Arizona has one of the highest rates of uninsured drivers in the nation — estimates range from 12–17% of drivers on the road. Every time an uninsured driver causes an accident, insured drivers ultimately absorb the cost through rate increases. This is why uninsured motorist (UM) coverage is so important in Arizona — it protects you when the at-fault driver has no insurance.

### Factor 3: Extreme Heat and Vehicle Damage

Phoenix's extreme heat causes real mechanical damage. Tire blowouts from hot pavement, battery failures, cracked dashboards, and deteriorated seals all increase the frequency of comprehensive claims. Insurance carriers factor climate risk into rates.

### Factor 4: Vehicle Theft Rates

Maricopa County sees above-average auto theft rates, particularly for older model trucks and SUVs. Comprehensive coverage rates reflect the local theft environment.

## What Arizona Requires vs. What You Actually Need

**Arizona minimum requirements:**
- $25,000 bodily injury per person
- $50,000 bodily injury per accident
- $15,000 property damage

These minimums are dangerously low. A single serious accident with injuries can easily exceed $100,000 in medical bills and lost wages. If your liability limits are $25,000/$50,000 and you cause a $200,000 accident, you pay $150,000 out of pocket.

**What we recommend for East Valley drivers:**
- $100,000/$300,000 bodily injury (at minimum)
- $100,000 property damage
- Uninsured/underinsured motorist at $100,000/$300,000
- Collision and comprehensive with $500–$1,000 deductible

## How to Lower Your East Valley Auto Insurance Rate

### 1. Bundle Home and Auto
Bundling with the same carrier saves most drivers 10–25%. If you're renting, bundling renters + auto achieves similar savings.

### 2. Maintain a Clean Driving Record
A single at-fault accident or DUI can raise your premium 25–60% for 3–5 years. Defensive driving matters financially.

### 3. Choose the Right Deductible
Raising collision/comprehensive deductibles from $500 to $1,000 typically saves 10–15% on those portions of your premium. Don't over-deductible — if you can't afford the deductible, it's not the right choice.

### 4. Drive a Vehicle With Good Safety Ratings
Carriers reward vehicles with strong IIHS safety ratings and advanced driver assistance systems (ADAS). A Subaru Outback costs less to insure than a similar-vintage vehicle without crash mitigation.

### 5. Ask About Discounts
Common discounts East Valley drivers miss: Good student discount (B average or better), defensive driving course completion, low-mileage discount (under 7,500 miles/year), loyalty discount, accident-free discount.

### 6. Shop Every Year
Auto insurance rates shift constantly as carriers enter and exit markets and adjust loss ratios. An independent agent like Devil Insurance compares multiple carriers annually and switches you when a better option exists — without you doing any of the legwork.

## SR-22 Filing in Arizona

If you've had your license suspended, a DUI, or multiple violations, Arizona may require you to file an SR-22 — a certificate of financial responsibility from your insurer proving you carry at least minimum coverage.

SR-22 filing itself is usually $25–$50. The real cost is the high-risk surcharge on your premium, which can be substantial. We file SR-22s and work to find the most competitive rates for drivers who need them.

Ready to see if you're overpaying for East Valley auto insurance? Call ${SITE.phone} or [request a free quote online](/quote). We'll compare rates from multiple carriers in about 15 minutes.`,
  },

  "tempe-landlord-insurance-what-you-need": {
    title: "Landlord Insurance for East Valley Rental Properties",
    category: "Landlord Insurance",
    date: "May 28, 2026",
    readTime: "9 min read",
    img: "/images/landlord-insurance.jpg",
    excerpt: "Investment property owners in Tempe, Chandler, and Mesa — here's what landlord insurance covers, what it costs, and why standard homeowners insurance isn't enough.",
    content: `## Why Standard Homeowners Insurance Won't Protect Your Rental Property

If you're renting out a property in Tempe, Chandler, Mesa, or anywhere in the East Valley without a landlord-specific insurance policy, you're exposed to significant uninsured risk. This is one of the most common coverage gaps we find for East Valley real estate investors.

Here's the critical distinction: **a standard homeowners policy is designed for owner-occupied properties.** Most HO-3 policies explicitly exclude losses that occur when the property is being rented out. If your tenant reports a kitchen fire, your standard homeowners policy may deny the claim entirely — leaving you to fund repairs out of pocket.

## What Landlord Insurance (Dwelling Fire Policy) Covers

Landlord insurance — often written as a DP-2 or DP-3 dwelling fire policy — is specifically designed for non-owner-occupied rental properties. Here's what's typically included:

### Dwelling Coverage
Protects the structure of your rental property — walls, roof, floors, built-in appliances, plumbing, and electrical. In the East Valley's hot climate, extreme heat accelerates roof aging and HVAC wear; having replacement cost coverage (vs. actual cash value) ensures you're made whole after a significant loss.

### Liability Protection
This is often the most overlooked coverage for landlords. If a tenant or their guest is injured on your property — a trip-and-fall on a cracked sidewalk, a dog bite in the backyard, an electrical issue that injures someone — you can be sued as the property owner. Landlord liability coverage protects your personal assets. We recommend at least $300,000, with a $1M umbrella for investors with multiple properties.

### Loss of Rental Income
If your property is damaged by a covered peril (fire, monsoon storm, burst pipe) and your tenant can't live there during repairs, this coverage pays the lost rent. For most East Valley landlords, we recommend 6–12 months of gross rental income.

### Additional Structures
Fences, detached garages, storage units, block walls — covered separately, typically at 10% of the dwelling limit.

## What Landlord Insurance Does NOT Cover

- **Tenant's personal belongings** — tenants need their own renters insurance
- **Flood damage** — requires separate NFIP or private flood policy
- **Normal wear and tear** — maintenance is the landlord's responsibility
- **Intentional damage by tenants** — standard policies exclude this; a malicious damage endorsement can help

## East Valley Landlord Insurance Costs

Landlord insurance typically costs **15–25% more than standard homeowners insurance** for the same property, because rental properties carry higher risk: more turnover, less owner oversight, and tenants who may not treat the property as carefully as an owner would.

For a typical East Valley single-family rental:
- 3BR/2BA home, $350,000 replacement cost: **$1,200–$1,800/year**
- Multi-family 4-plex, $800,000 replacement cost: **$2,500–$4,000/year**
- Short-term rental (Airbnb/VRBO) — requires specialty coverage, **$1,500–$3,000+/year**

Rates vary significantly by property age, roof condition, location, and coverage limits. We shop multiple carriers to find the best rate for your specific property.

## Short-Term Rentals: A Special Case

If you're renting on Airbnb or VRBO in Tempe (near ASU), Scottsdale, or anywhere else in the Valley — standard landlord policies typically exclude short-term rental use. You need a specific short-term rental policy that covers the unique risks of frequent guest turnover and the platform's own insurance gaps.

## Building Your Landlord Insurance Strategy

For East Valley investors with one or two properties, a standalone landlord policy per property makes sense. For investors with 3+ properties, we often build commercial umbrella policies that provide layered protection across the entire portfolio.

Questions about your Tempe rental property coverage? Call ${SITE.phone} or [request a free quote online](/quote). We work with East Valley landlords at every scale, from first-time investors to multi-property portfolios.`,
  },

  "arizona-renters-insurance-tempe": {
    title: "Renters Insurance in Tempe: A Complete Guide",
    category: "Renters Insurance",
    date: "May 12, 2026",
    readTime: "6 min read",
    img: "/images/renters-insurance.jpg",
    excerpt: "ASU students, young professionals, and East Valley renters — a complete guide to what renters insurance covers, how much it costs, and why you need it.",
    content: `## What Is Renters Insurance and Why Does It Matter in Tempe?

If you rent an apartment, condo, or house in Tempe — whether you're an ASU student near campus, a young professional in Chandler, or a family leasing in Gilbert — renters insurance is one of the best financial decisions you can make for about $15/month.

Here's the core concept: **your landlord's insurance covers the building. It does not cover your stuff, and it does not protect you from liability.** If your apartment is broken into and your laptop, TV, and camera are stolen, your landlord's insurance pays nothing. If a friend slips in your kitchen and breaks their arm, your landlord's insurance doesn't cover you. Renters insurance fills both of these gaps at a remarkably low cost.

## What Renters Insurance Covers

### Personal Property
This is the core of renters insurance. Your furniture, electronics, clothing, musical instruments, sporting equipment, bicycles — all covered up to your policy limit if damaged or stolen due to a covered peril.

**Common covered perils:**
- Fire and smoke damage
- Theft (from your unit)
- Water damage from a burst pipe or appliance failure (not flood)
- Windstorm and hail
- Vandalism
- Lightning

**How much coverage do you need?** Take a rough inventory of your belongings. Most Tempe renters are surprised — add up your laptop, TV, smartphone, furniture, clothes, and kitchen gear and you'll likely find $15,000–$30,000+ in total value. Make sure your personal property limit reflects reality.

### Liability Coverage
If someone is injured in your apartment — a guest trips on a rug, your dog bites a neighbor — renters insurance liability coverage pays medical bills and legal costs if you're sued. Standard coverage is $100,000; we typically recommend $300,000 for Tempe renters.

### Additional Living Expenses (ALE)
If your unit becomes uninhabitable due to a covered loss — fire, major water damage — ALE pays for your hotel, meals, and temporary housing while repairs are made. This can easily run $1,000–$5,000+ per month in Phoenix metro.

### Medical Payments to Others
Small medical bill coverage for guests injured in your home, regardless of fault. Usually $1,000–$5,000 — separate from liability and doesn't require a lawsuit.

## What Renters Insurance Does NOT Cover

- Flood damage (surface water entering your unit) — rare in apartments but possible; separate flood insurance exists
- Earthquake damage
- Damage to the building itself (that's the landlord's problem)
- Your car (covered under auto insurance; personal items stolen from your car may be covered)
- Roommate's belongings (unless listed on your policy)
- High-value items over the sub-limit — jewelry, cameras, musical instruments usually have $1,500–$2,500 sub-limits; schedule them separately

## How Much Does Renters Insurance Cost in Tempe?

Most Tempe renters pay **$12–$25/month** ($145–$300/year) for solid coverage. ASU-area apartments near Mill Avenue or Tempe Marketplace see slightly higher rates due to theft risk, but the cost is still minimal.

Factors affecting your rate:
- Coverage limits (personal property, liability)
- Deductible (higher deductible = lower premium)
- Location and building type
- Claims history
- Bundling with auto insurance (saves 5–15% on both)

## Real Scenarios Where Renters Insurance Pays

**Scenario 1 — Theft:** Your apartment in Tempe is broken into. They take your MacBook ($1,800), PlayStation ($600), and camera ($1,200). Renters insurance pays $3,600 minus your deductible. Without it, you pay out of pocket.

**Scenario 2 — Water damage:** The apartment above yours has a burst pipe. Water floods your bedroom, ruining your mattress, dresser, and desk. Renters insurance covers your property damage. The building damage is the landlord's problem.

**Scenario 3 — Liability:** A friend slips on your bathroom tile and sprains their wrist. Medical bills are $3,500. Your renters insurance liability coverage pays — keeping the incident out of small claims court and preserving the friendship.

## For ASU Students: Is Renters Insurance Worth It?

Absolutely. ASU-area apartments see above-average theft rates, and students often have $5,000–$15,000 in electronics, instruments, and equipment. Many parents' homeowners policies extend limited coverage to students living away from home (check your parents' policy), but that coverage is usually limited to 10% of the home's personal property limit and may not cover theft.

A standalone renters insurance policy for an ASU student typically costs $10–$18/month — less than a Netflix subscription.

## How to Get Renters Insurance in Tempe

The fastest way is to call a local agent or request a quote online. Have these ready:
- Your address and apartment number
- Move-in date
- An estimate of your personal property value
- Whether you want liability coverage ($100K or $300K)

Ready in 15 minutes or less. Call us at ${SITE.phone} or [get a quote online](/quote) — we compare multiple carriers and find the lowest rate for your Tempe apartment.`,
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Devil Insurance`,
    description: post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.img, width: 1200, height: 630 }],
      type: "article",
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="font-display font-800 uppercase text-[#8B1538] text-2xl sm:text-3xl mt-10 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="font-display font-700 uppercase text-[#8B1538] text-xl mt-7 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<p key={i} className="font-body font-bold text-[#1A0A0F] mb-2">{line.slice(2, -2)}</p>);
    } else if (line.startsWith("- ")) {
      elements.push(<li key={i} className="text-[#6B5B5F] font-body leading-relaxed ml-4 mb-1 list-disc">{line.slice(2)}</li>);
    } else if (line.trim()) {
      elements.push(<p key={i} className="text-[#6B5B5F] font-body leading-relaxed mb-4">{line}</p>);
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE.url}${post.img}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Devil Insurance", url: SITE.url },
    publisher: { "@type": "Organization", name: "Devil Insurance", url: SITE.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/blog/${slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE.url}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>
        <section className="bg-[#3D0612] pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src={post.img} alt={post.title} fill className="object-cover opacity-20" unoptimized />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#3D0612] via-[#5C0A1E]/90 to-[#8B1538]/70" />
          <div className="relative container-tight z-10">
            <FadeIn>
              <nav className="flex items-center gap-2 text-xs text-white/50 mb-6 font-body">
                <Link href="/" className="hover:text-[#C8A42A] transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/blog" className="hover:text-[#C8A42A] transition-colors">Blog</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-[#C8A42A]">{post.category}</span>
              </nav>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#C8A42A]/20 border border-[#C8A42A]/40 mb-5">
                <span className="text-xs font-display font-700 uppercase tracking-widest text-[#C8A42A]">{post.category}</span>
              </div>
              <h1 className="font-display font-800 uppercase text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">{post.title}</h1>
              <div className="flex items-center gap-5 text-sm text-white/50 font-body">
                <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</div>
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-tight">
            <div className="grid lg:grid-cols-4 gap-12">
              <article className="lg:col-span-3">
                <FadeIn>
                  <div className="mb-8 rounded-sm overflow-hidden shadow-card">
                    <Image src={post.img} alt={post.title} width={800} height={450} className="object-cover w-full" unoptimized />
                  </div>
                  <div className="prose-custom">{renderContent(post.content)}</div>
                </FadeIn>
                <FadeIn>
                  <div className="mt-12 p-8 rounded-sm bg-[#8B1538] text-white text-center">
                    <p className="font-display font-700 uppercase text-[#C8A42A] text-lg mb-3">Get a Free Quote Today</p>
                    <p className="text-white/80 text-sm mb-6 font-body">Local East Valley agents. Same-day quotes. Multiple carriers compared.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link href="/quote" className="btn-primary">Get a Quote <ArrowRight className="w-4 h-4" /></Link>
                      <a href={`tel:+18449675247`} className="btn-secondary">Call {SITE.phone}</a>
                    </div>
                  </div>
                </FadeIn>
              </article>

              <aside className="space-y-6">
                <FadeIn direction="left">
                  <div className="p-5 rounded-sm bg-[#8B1538] text-white sticky top-24">
                    <p className="font-display font-700 uppercase text-[#C8A42A] text-sm mb-3">Get a Free Quote</p>
                    <p className="text-white/80 text-xs mb-4 font-body">Local agents. Same-day response.</p>
                    <Link href="/quote" className="btn-primary w-full justify-center text-xs mb-2">
                      Request a Quote <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a href={`tel:+18449675247`} className="flex items-center justify-center gap-1.5 text-xs text-white/70 hover:text-[#C8A42A] transition-colors font-body mt-2">
                      {SITE.phone}
                    </a>
                  </div>
                </FadeIn>
                <FadeIn direction="left" delay={0.1}>
                  <div className="p-5 rounded-sm bg-[#F5F0F0] border border-gray-200">
                    <p className="font-display font-700 uppercase text-[#8B1538] text-sm mb-3">More Articles</p>
                    <ul className="space-y-2">
                      {Object.entries(POSTS).filter(([s]) => s !== slug).map(([s, p]) => (
                        <li key={s}>
                          <Link href={`/blog/${s}`} className="text-xs text-[#6B5B5F] hover:text-[#8B1538] transition-colors font-body leading-snug block">
                            {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
