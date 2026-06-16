import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://devilinsurance.com";
const SITE_NAME = "Devil Insurance";
const PHONE = "+18449675247";
const OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Devil Insurance | Arizona Contractor Insurance Specialists",
    template: "%s | Devil Insurance",
  },
  description:
    "Arizona contractor insurance specialists. Fast quotes for roofing, HVAC, spray foam, and more. The Devil's in the Details — Josh Cotner, Contractors Choice Agency.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Devil Insurance | Arizona Contractor Insurance Specialists",
    description:
      "Arizona contractor insurance — roofing, HVAC, spray foam, GL, workers comp. Fast quotes, direct access to Josh Cotner.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Devil Insurance — Arizona contractor insurance specialists" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devil Insurance | Arizona Contractor Insurance Specialists",
    description:
      "Arizona contractor insurance — roofing, HVAC, spray foam, GL, workers comp.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${SITE_URL}/#agency`,
  name: SITE_NAME,
  url: SITE_URL,
  image: OG_IMAGE,
  telephone: PHONE,
  priceRange: "$$",
  description:
    "Arizona contractor insurance specialists. Fast COIs, Arizona-specific coverage, direct access to agent Josh Cotner.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12220 E Riggs Road Suite #105",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85249",
    addressCountry: "US",
  },
  areaServed: { "@type": "State", name: "Arizona" },
  founder: { "@type": "Person", name: "Josh Cotner" },
  parentOrganization: { "@type": "Organization", name: "Contractors Choice Agency" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE,
    contactType: "Sales",
    areaServed: "US",
    availableLanguage: ["English"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Arizona Contractor Insurance",
  serviceType: "Contractor Insurance",
  provider: { "@id": `${SITE_URL}/#agency` },
  areaServed: { "@type": "State", name: "Arizona" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Contractor Coverage Lines",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Liability Insurance for Contractors", url: `${SITE_URL}/general-liability` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roofing Contractor Insurance", url: `${SITE_URL}/roofing` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workers Compensation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Auto Insurance" } },
    ],
  },
};

const schemas = [localBusinessSchema, serviceSchema];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {schemas.map((s, i) => (
          <script
            key={`ld-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#0a0007] text-[#fed8ee]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
