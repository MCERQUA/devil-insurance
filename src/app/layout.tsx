import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE, SERVICES, COVERAGE_CITIES } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Devil Insurance — Tempe & East Valley Insurance Agency",
    template: "%s | Devil Insurance",
  },
  description: SITE.description,
  keywords: [
    "tempe insurance",
    "tempe insurance agency",
    "east valley insurance",
    "home insurance tempe az",
    "auto insurance tempe",
    "business insurance tempe",
    "renters insurance tempe",
    "landlord insurance tempe",
    "chandler insurance",
    "mesa insurance agency",
    "gilbert insurance",
    "scottsdale insurance",
    "local insurance agent tempe",
    "devil insurance",
    "contractors choice agency tempe",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Devil Insurance — Tempe & East Valley Insurance Agency",
    description: SITE.description,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Devil Insurance — Tempe & East Valley local insurance agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devil Insurance — Tempe & East Valley Insurance Agency",
    description: "Local Tempe insurance agents for home, auto, business, landlord, and renters coverage. Same-day quotes, multiple carriers shopped.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    alternateName: "Devil Insurance by Contractors Choice Agency",
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.4255, longitude: -111.9400 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: COVERAGE_CITIES.map((c) => ({ "@type": "City", name: `${c.name}, Arizona` })),
    serviceType: SERVICES.map((s) => s.title),
    parentOrganization: {
      "@type": "InsuranceAgency",
      name: "Contractors Choice Agency",
      url: "https://contractorschoiceagency.com",
      foundingDate: "2005",
      foundingLocation: { "@type": "Place", name: "Chandler, Arizona" },
    },
  };

  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
