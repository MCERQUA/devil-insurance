export const SITE = {
  name: "Devil Insurance",
  legalName: "Devil Insurance (by Contractors Choice Agency)",
  domain: "devilinsurance.com",
  url: "https://devilinsurance.com",
  tagline: "Tempe's Local Insurance Agency",
  description:
    "Personal and business insurance for Tempe & the East Valley — home, auto, business, landlord, and renters. Local licensed agents who shop multiple carriers to protect what matters most. Serving Tempe, Chandler, Mesa, Gilbert, Scottsdale, and Phoenix.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm Arizona (MST) · Fast quotes",
  quoteSla: "Same-day quotes, no pressure",
} as const;

export const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "INSURANCE", href: "/services" },
  { label: "COVERAGE AREA", href: "/coverage" },
  { label: "RESOURCES", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "home-insurance",
    title: "Home Insurance",
    short: "Protect your Tempe home",
    description:
      "Tempe homeowners face unique risks — extreme summer heat, monsoon storms, and fast-moving wildfire smoke from surrounding desert. We shop multiple carriers to find the right homeowners policy for your East Valley home at a price that makes sense.",
    icon: "Home",
    keywords: ["tempe home insurance", "homeowners insurance tempe az", "east valley home insurance", "mesa homeowners insurance", "chandler home insurance"],
    hero: "Home Insurance for Tempe & East Valley Homeowners",
    coverage: ["Dwelling protection", "Personal property", "Liability coverage", "Additional living expenses", "Medical payments", "Monsoon & storm damage"],
  },
  {
    slug: "auto-insurance",
    title: "Auto Insurance",
    short: "Coverage for Valley roads",
    description:
      "Phoenix metro traffic is some of the most intense in Arizona — freeways, construction zones, extreme heat that cooks tires, and uninsured drivers. We build auto coverage that fits real East Valley driving and fights for the best rate across multiple carriers.",
    icon: "Car",
    keywords: ["tempe auto insurance", "car insurance tempe az", "mesa auto insurance", "chandler car insurance", "east valley auto insurance"],
    hero: "Auto Insurance for Tempe & East Valley Drivers",
    coverage: ["Liability coverage", "Collision coverage", "Comprehensive coverage", "Uninsured motorist", "Rental reimbursement", "Roadside assistance"],
  },
  {
    slug: "business-insurance",
    title: "Business Insurance",
    short: "GL, BOP & commercial property",
    description:
      "Tempe's business scene — from Mill Avenue restaurants and ASU-area shops to tech startups and trades — needs insurance that fits. We write General Liability, Business Owners Policies, and commercial property for East Valley small businesses.",
    icon: "Building2",
    keywords: ["tempe business insurance", "small business insurance tempe az", "general liability tempe", "business owners policy east valley", "commercial insurance chandler"],
    hero: "Business Insurance for Tempe & East Valley Businesses",
    coverage: ["General liability", "Commercial property", "Business income", "Workers' compensation", "Commercial auto", "Professional liability"],
  },
  {
    slug: "landlord-insurance",
    title: "Landlord Insurance",
    short: "Rental properties & investment homes",
    description:
      "East Valley landlords — from single-family rentals in Tempe to apartment complexes in Chandler — need coverage built for investors. We cover the dwelling, your liability, lost rental income, and more with landlord-specific policies.",
    icon: "KeyRound",
    keywords: ["tempe landlord insurance", "rental property insurance tempe az", "east valley landlord insurance", "mesa rental property insurance", "chandler investment property insurance"],
    hero: "Landlord Insurance for East Valley Rental Properties",
    coverage: ["Dwelling coverage", "Liability protection", "Loss of rental income", "Tenant damage", "Vandalism coverage", "Umbrella liability"],
  },
  {
    slug: "renters-insurance",
    title: "Renters Insurance",
    short: "Affordable protection for tenants",
    description:
      "For ASU students, young professionals, and families renting in Tempe and the East Valley — renters insurance protects your belongings, covers liability, and costs less than you think. Fast, easy quotes for Tempe apartments and rentals.",
    icon: "ShieldCheck",
    keywords: ["tempe renters insurance", "renters insurance tempe az", "asu student renters insurance", "east valley renters insurance", "cheap renters insurance chandler"],
    hero: "Renters Insurance for Tempe & East Valley Tenants",
    coverage: ["Personal property", "Liability coverage", "Additional living expenses", "Medical payments", "Electronics & valuables", "Identity theft protection"],
  },
] as const;

export const COVERAGE_CITIES = [
  { name: "Tempe", desc: "Our home base — Mill Ave to ASU and beyond" },
  { name: "Chandler", desc: "East Valley tech corridor and neighborhoods" },
  { name: "Mesa", desc: "Arizona's third-largest city, fully covered" },
  { name: "Gilbert", desc: "Fast-growing East Valley families and businesses" },
  { name: "Scottsdale", desc: "Luxury homes, small businesses, and rentals" },
  { name: "Phoenix", desc: "Metro Phoenix residential and commercial" },
  { name: "Ahwatukee", desc: "South Phoenix neighborhoods and foothills" },
  { name: "Glendale", desc: "West Valley coverage available" },
] as const;

export const CREDENTIALS = [
  { label: "Licensed across all 50 states", icon: "MapPin" },
  { label: "20+ years industry experience", icon: "BadgeCheck" },
  { label: "Multiple carriers shopped for you", icon: "Award" },
  { label: "Bundle & save on home + auto", icon: "Banknote" },
  { label: "Same-day quotes, no pressure", icon: "Timer" },
  { label: "Local Tempe agents who know the Valley", icon: "HeartPulse" },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years protecting families", prefix: "" },
  { value: 5, suffix: "", label: "Coverage lines under one roof", prefix: "" },
  { value: 50, suffix: "", label: "States licensed", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
] as const;
