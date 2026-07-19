export const SITE = {
  name: "Devil Insurance",
  legalName: "Devil Insurance Agency",
  domain: "devilinsurance.com",
  url: "https://devilinsurance.com",
  tagline: "Protect What Matters",
  description:
    "Devil Insurance — your helpful devil insurance agent. We shop dozens of carriers to find you the best coverage at the best price. Home, auto, business, and specialty insurance.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  hours: "Mon–Fri 8am–6pm · Sat 9am–3pm",
  serviceArea: "Arizona & Nationwide",
  geo: { lat: 33.4484, lng: -112.074 },
  cities: [
    "Phoenix",
    "Scottsdale",
    "Tempe",
    "Mesa",
    "Chandler",
    "Gilbert",
    "Glendale",
    "Peoria",
    "Surprise",
    "Tucson",
  ],
  social: {},
};

export interface ServiceDef {
  slug: string;
  title: string;
  navTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  icon: string;
  blurb: string;
  image: string;
}

export const SERVICES: ServiceDef[] = [
  {
    slug: "home-insurance",
    title: "Home Insurance",
    navTitle: "Home",
    h1: "Home Insurance — The Devil's in the Details, and So Are We",
    metaTitle: "Home Insurance | Devil Insurance Agency",
    metaDescription:
      "Home insurance that actually covers what matters. Devil Insurance shops top carriers to find you the best homeowners coverage at the best price.",
    keyword: "home insurance Arizona",
    icon: "Home",
    blurb:
      "We shop top carriers so you get the right home coverage — dwelling, personal property, liability, and more.",
    image: "/images/home-insurance.jpg",
  },
  {
    slug: "auto-insurance",
    title: "Auto Insurance",
    navTitle: "Auto",
    h1: "Auto Insurance — We Fight for the Best Rate So You Don't Have To",
    metaTitle: "Auto Insurance | Devil Insurance Agency",
    metaDescription:
      "Auto insurance quotes from top carriers. Devil Insurance compares rates and finds you the best coverage for your car, truck, or SUV.",
    keyword: "auto insurance Arizona",
    icon: "Car",
    blurb:
      "Liability, comprehensive, collision, and uninsured motorist coverage — compared across carriers so you always win.",
    image: "/images/auto-insurance.jpg",
  },
  {
    slug: "business-insurance",
    title: "Business Insurance",
    navTitle: "Business",
    h1: "Business Insurance — Protect Your Empire (Big or Small)",
    metaTitle: "Business Insurance | Devil Insurance Agency",
    metaDescription:
      "Business insurance for Arizona companies. General liability, BOP, workers comp, and commercial auto. Devil Insurance shops the market for you.",
    keyword: "business insurance Arizona",
    icon: "Building2",
    blurb:
      "General liability, BOP, workers comp, and commercial property — we cover your business like we mean it.",
    image: "/images/business-insurance.jpg",
  },
  {
    slug: "life-insurance",
    title: "Life Insurance",
    navTitle: "Life",
    h1: "Life Insurance — Because Protecting Your Family is Never a Bad Deal",
    metaTitle: "Life Insurance | Devil Insurance Agency",
    metaDescription:
      "Term and whole life insurance from top-rated carriers. Devil Insurance helps you find the right coverage to protect your family's future.",
    keyword: "life insurance Arizona",
    icon: "Heart",
    blurb:
      "Term, whole, and universal life insurance — we find the right policy to protect the people who matter most.",
    image: "/images/life-insurance.jpg",
  },
  {
    slug: "renters-insurance",
    title: "Renters Insurance",
    navTitle: "Renters",
    h1: "Renters Insurance — Cheap Coverage That Actually Pays Off",
    metaTitle: "Renters Insurance | Devil Insurance Agency",
    metaDescription:
      "Affordable renters insurance in Arizona. Covers personal property, liability, and additional living expenses. Get a quote in minutes.",
    keyword: "renters insurance Arizona",
    icon: "KeyRound",
    blurb:
      "Personal property, liability, and loss of use coverage — for just a few dollars a month, renters insurance is a no-brainer.",
    image: "/images/renters-insurance.jpg",
  },
  {
    slug: "specialty-insurance",
    title: "Specialty Insurance",
    navTitle: "Specialty",
    h1: "Specialty Insurance — If It's Worth Protecting, We've Got a Policy for It",
    metaTitle: "Specialty Insurance | Devil Insurance Agency",
    metaDescription:
      "Specialty insurance for motorcycles, ATVs, boats, RVs, and more. Devil Insurance finds niche coverage other agencies can't.",
    keyword: "specialty insurance Arizona",
    icon: "Sparkles",
    blurb:
      "Motorcycles, ATVs, boats, RVs, collectibles, and more — if it matters to you, we can insure it.",
    image: "/images/specialty-insurance.jpg",
  },
];

export const SERVICE_AREAS = SITE.cities.map((city) => ({
  name: city,
  slug: city
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, ""),
  description: `Insurance agency serving ${city}, AZ — home, auto, business, and specialty coverage from top-rated carriers.`,
}));

// Legacy alias so service pages that reference SERVICE_SLUGS still compile
export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
