export interface FaqEntry {
  q: string;
  a: string;
}

export interface FaqTheme {
  theme: string;
  items: FaqEntry[];
}

export const HOME_FAQS: FaqEntry[] = [
  {
    q: "Why is Devil Insurance called the 'helpful devil'?",
    a: "Because we fight like the devil to get you the best rate — but we're on YOUR side. We shop dozens of carriers so you don't have to negotiate alone.",
  },
  {
    q: "How do you find the best insurance rates?",
    a: "We're an independent agency, meaning we work with many top-rated carriers. We compare quotes side by side and recommend the best fit for your coverage needs and budget.",
  },
  {
    q: "Do you only serve Arizona?",
    a: "We're licensed in Arizona and can write coverage in most states. Call us to check availability in your state.",
  },
  {
    q: "How fast can I get a quote?",
    a: "Most quotes take 10–15 minutes over the phone. We'll ask a few quick questions and come back to you with options.",
  },
  {
    q: "What makes Devil Insurance different from going direct to a carrier?",
    a: "When you go direct, you get one price from one company. We shop the market for you — often saving hundreds per year while getting you better coverage.",
  },
  {
    q: "Can you help me bundle home and auto?",
    a: "Absolutely. Bundling home and auto is one of the easiest ways to save — most of our clients save 10–25% by bundling through us.",
  },
  {
    q: "What if I need to file a claim?",
    a: "We help you through the claims process. We know how insurance companies work and can advocate on your behalf to make sure you get a fair settlement.",
  },
  {
    q: "Is there any cost to get a quote?",
    a: "Zero cost, zero obligation. We quote for free, you decide if you want to proceed. No pressure — ever.",
  },
];

export const FAQ_THEMES: FaqTheme[] = [
  {
    theme: "Getting Started",
    items: [
      HOME_FAQS[0],
      HOME_FAQS[1],
      HOME_FAQS[2],
      HOME_FAQS[3],
    ],
  },
  {
    theme: "Coverage & Savings",
    items: [
      HOME_FAQS[4],
      HOME_FAQS[5],
      {
        q: "What types of insurance do you offer?",
        a: "We offer home, auto, renters, life, business, and specialty insurance. As an independent agency, we can often find coverage for hard-to-insure situations that other agencies can't.",
      },
      {
        q: "How much does home insurance cost in Arizona?",
        a: "Arizona home insurance rates vary widely based on your home's value, location, age, and the coverage you choose. The best way to find out is a free quote — most clients are surprised by how competitive our rates are.",
      },
    ],
  },
  {
    theme: "Claims & Service",
    items: [
      HOME_FAQS[6],
      HOME_FAQS[7],
      {
        q: "Do you help with claims?",
        a: "Yes — we're your advocate. When you have a claim, we walk you through the process, help you document everything, and make sure the insurance company treats you fairly. That's what makes an independent agent worth having.",
      },
      {
        q: "Can I switch insurance companies mid-policy?",
        a: "Yes. You can switch at any time and most carriers will pro-rate a refund on any unused premium. We make switching easy — we handle the comparison, the paperwork, and the transition for you.",
      },
    ],
  },
];

export const ALL_FAQS = FAQ_THEMES.flatMap((t) => t.items);
