import type { Metadata } from "next";
import { heading, body } from "@/lib/fonts";
import { SITE } from "@/lib/site";
import { localBusinessSchema, JsonLd } from "@/lib/schema";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Devil Insurance | Your Helpful Devil Insurance Agent",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Devil Insurance shops dozens of carriers to find you the best home, auto, business, and specialty insurance. Free quotes, no obligation.",
  keywords: [
    "devil insurance",
    "insurance agent Arizona",
    "home insurance",
    "auto insurance",
    "business insurance",
    "independent insurance agent",
    "insurance quotes Arizona",
    "renters insurance",
    "life insurance Arizona",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Devil Insurance | Your Helpful Devil Insurance Agent",
    description:
      "Devil Insurance shops dozens of carriers to find you the best home, auto, business, and specialty insurance. Free quotes, no obligation.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devil Insurance | Your Helpful Devil Insurance Agent",
    description:
      "Devil Insurance shops dozens of carriers to find you the best home, auto, business, and specialty insurance. Free quotes, no obligation.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="bg-[#17120F] text-bone font-body antialiased">
        <JsonLd data={localBusinessSchema()} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
