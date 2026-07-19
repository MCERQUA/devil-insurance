export interface ServiceSection {
  h2: string;
  body: string; // HTML string rendered via dangerouslySetInnerHTML
}

export interface ServiceContent {
  intro: string;
  included?: string[];
  sections: ServiceSection[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "home-insurance": {
    intro:
      "Home insurance protects the most valuable thing you own — and most homeowners don't realize how many gaps are hiding in their current policy until they file a claim. At Devil Insurance, we shop dozens of top-rated carriers to find you the right coverage at the best price. No gaps, no surprises.",
    included: [
      "Dwelling coverage (structure of your home)",
      "Personal property coverage",
      "Liability protection",
      "Additional living expenses (ALE)",
      "Medical payments to others",
      "Loss of use coverage",
      "Optional: flood, earthquake, sewer backup endorsements",
      "Optional: scheduled personal property (jewelry, art, electronics)",
    ],
    sections: [
      {
        h2: "What does home insurance actually cover?",
        body: "<p>A standard homeowners policy (HO-3) covers your home's structure against most perils — fire, wind, hail, theft, vandalism, and more. It also covers your personal belongings, personal liability if someone is injured on your property, and additional living expenses if your home becomes uninhabitable after a covered loss.</p><p>What it doesn't cover by default: flooding, earthquakes, and sewer backups. These are the most common surprise gaps. If you're in a flood zone or earthquake-prone area, you'll want to add those separately. We'll tell you what's relevant for your location.</p>",
      },
      {
        h2: "How much home insurance do you actually need?",
        body: "<p>The most important number is your dwelling coverage limit — it should reflect the cost to <em>rebuild</em> your home from the ground up, not its market value. These are different numbers, and in many markets the rebuild cost is higher than the sale price.</p><p>Many homeowners are significantly underinsured because they set their coverage at purchase and never updated it. Construction costs have increased dramatically in recent years. We run a replacement cost estimate as part of every quote to make sure your coverage actually matches what it would cost to rebuild.</p>",
      },
      {
        h2: "How an independent agent finds you a better rate",
        body: "<p>Insurance companies price risk differently. One carrier might rate your home favorably because of your roof age; another might penalize it. One might offer a deep bundle discount; another might have a preferred rate for your zip code.</p><p>As an independent agency, we work with dozens of carriers simultaneously. We find the one that's going to rate your specific home the most favorably — and we check that the coverage is actually comparable before we recommend it.</p>",
      },
      {
        h2: "What happens when you need to file a claim?",
        body: "<p>This is where having an independent agent matters most. When you have a claim, we're your advocate. We help you document the damage, understand what's covered, and navigate the process so you get a fair settlement.</p><p>If the adjuster misses something or undervalues the damage, we know how to push back. You're not alone in the process — that's a major advantage over going direct to a carrier with no representation.</p>",
      },
    ],
    faqs: [
      {
        q: "How much does home insurance cost in Arizona?",
        a: "Arizona home insurance rates vary based on your home's location, age, construction type, roof condition, and the coverage limits you choose. The best way to find out is a free quote — most clients are surprised by how competitive our rates are.",
      },
      {
        q: "What's not covered by a standard home insurance policy?",
        a: "Standard HO-3 policies typically exclude flooding, earthquakes, sewer backup, and wear and tear. If you're in a flood zone or earthquake-prone area, you'll need separate coverage. We'll flag any gaps when we review your policy.",
      },
      {
        q: "Does my home insurance cover my home-based business?",
        a: "Usually not — standard homeowners policies have very limited coverage for business property and no liability coverage for business activities. If you run a business from home, you likely need a home-based business endorsement or a separate policy.",
      },
      {
        q: "How often should I shop my home insurance?",
        a: "Every 1–2 years is a good rule of thumb, or any time you make significant changes to your home (renovation, addition, new roof). Rates change, and the carrier that was cheapest when you bought may not be the cheapest today.",
      },
    ],
    related: ["auto-insurance", "renters-insurance", "life-insurance"],
  },

  "auto-insurance": {
    intro:
      "Auto insurance is one of the most competitive insurance markets in the country — which means the gap between the best and worst rate for your specific vehicle and driving record can be enormous. Devil Insurance shops the market to find you the right coverage at the right price, every time.",
    included: [
      "Liability coverage (bodily injury & property damage)",
      "Comprehensive coverage",
      "Collision coverage",
      "Uninsured & underinsured motorist coverage",
      "Medical payments / PIP",
      "Rental reimbursement",
      "Roadside assistance",
      "Gap coverage (for financed/leased vehicles)",
    ],
    sections: [
      {
        h2: "The coverages that actually matter",
        body: "<p>Liability is required by law in Arizona and covers damage you cause to others. But the state minimums are low — $25,000 per person, $50,000 per accident. A serious accident can easily exceed that, leaving you personally liable for the difference.</p><p>Uninsured motorist coverage protects you when the other driver doesn't have insurance (Arizona has a high rate of uninsured drivers). Comprehensive and collision protect your own vehicle. We'll walk you through what makes sense for your situation — an older paid-off car has different needs than a new financed one.</p>",
      },
      {
        h2: "Why your rate varies so much between carriers",
        body: "<p>Auto insurance pricing is highly carrier-specific. One company might penalize a single speeding ticket heavily; another might barely rate it. One company rates your ZIP code as high-risk; another doesn't. One offers a significant discount for your occupation or affiliations; another doesn't.</p><p>This is exactly why shopping the market through an independent agent produces better results than going direct to one carrier. We run your profile through multiple carriers simultaneously to find the best match.</p>",
      },
      {
        h2: "Bundling home and auto",
        body: "<p>Bundling your home and auto insurance with the same carrier typically saves 10–25%. We factor bundle discounts into every comparison we run — if bundling produces the best overall rate, we'll tell you. If two separate carriers still beat the bundle price, we'll tell you that too.</p>",
      },
      {
        h2: "What to do after an accident",
        body: "<p>Safety first. Move to a safe location if possible, then call 911 if there are injuries. Document everything — photos of both vehicles, the other driver's information, witness contacts. Report the claim promptly. If you're a Devil Insurance client, call us and we'll help you navigate the process and advocate with the carrier.</p>",
      },
    ],
    faqs: [
      {
        q: "How much auto insurance do I need in Arizona?",
        a: "Arizona requires minimum liability coverage of $25,000/$50,000/$15,000. But those minimums are low. Most financial advisors recommend at least $100,000/$300,000 in liability, plus uninsured motorist coverage, to protect your assets adequately.",
      },
      {
        q: "Does my credit score affect my auto insurance rate?",
        a: "In most states, yes — insurance companies use a credit-based insurance score as one factor in pricing. A better credit score generally means better rates. This is another reason why shopping multiple carriers matters; some weigh credit more heavily than others.",
      },
      {
        q: "Can I insure a vehicle I don't own?",
        a: "Generally, you can insure a vehicle you regularly use but don't own — but the rules vary by carrier. Call us to discuss your specific situation.",
      },
      {
        q: "How much does bundling home and auto save?",
        a: "Typically 10–25% off both policies when they're with the same carrier. We'll run the bundle math as part of your quote so you can see the exact savings.",
      },
    ],
    related: ["home-insurance", "specialty-insurance", "renters-insurance"],
  },

  "business-insurance": {
    intro:
      "Every business faces risk. A slip-and-fall, a client lawsuit, a fire, an employee injury — any of these can be financially devastating without the right coverage in place. Devil Insurance shops the commercial insurance market to find you the right business policy at the best price, whether you're a sole proprietor or a growing company.",
    included: [
      "General liability insurance",
      "Business owners policy (BOP)",
      "Commercial property insurance",
      "Workers compensation",
      "Commercial auto insurance",
      "Professional liability (E&O)",
      "Cyber liability insurance",
      "Directors & officers (D&O) coverage",
    ],
    sections: [
      {
        h2: "What business insurance do you actually need?",
        body: "<p>For most small businesses, the starting point is a Business Owners Policy (BOP), which bundles general liability and commercial property into one affordable package. General liability protects against third-party bodily injury and property damage claims — the most common type of business lawsuit.</p><p>If you have employees, workers compensation is required in Arizona. If you use vehicles for business, commercial auto covers what personal auto won't. If you provide professional services, professional liability (E&O) protects against mistakes and omissions claims. We'll map your specific business risks to the right coverage.",
      },
      {
        h2: "Why small businesses are underinsured",
        body: "<p>Most small business owners underestimate two things: the cost of a lawsuit and the cost of recovery after a loss. A single general liability claim can exceed $50,000 in legal fees alone, before any settlement. A business interruption loss (lost revenue while you're closed after a covered event) can be even larger.</p><p>Business insurance is one of the most cost-effective risk management tools available. A solid BOP for a small business often costs less than $100/month. We'll show you what the coverage actually looks like and what it costs for your specific business.</p>",
      },
      {
        h2: "Shopping commercial insurance is different from personal lines",
        body: "<p>Commercial insurance rates vary even more widely than personal auto or home. Your industry, revenue, payroll, claims history, and specific operations all affect pricing — and different carriers specialize in different industries.</p><p>As an independent commercial insurance agency, we have access to carriers that specialize in your type of business. We don't just find the cheapest policy — we find the carrier that best understands your risk class and will actually pay claims in your industry.</p>",
      },
    ],
    faqs: [
      {
        q: "Do I need general liability insurance as a sole proprietor?",
        a: "If you interact with clients, work at client sites, or provide any service that could result in a claim, general liability insurance is highly recommended. Many clients and contracts require it. The cost is typically very low relative to the protection it provides.",
      },
      {
        q: "What's the difference between a BOP and general liability?",
        a: "General liability is one coverage type protecting against third-party injury and property damage claims. A Business Owners Policy (BOP) bundles general liability with commercial property insurance — protecting both your liability exposure and your physical assets — at a lower combined cost than buying them separately.",
      },
      {
        q: "Is workers comp required in Arizona?",
        a: "Yes — Arizona requires workers compensation coverage for virtually all employers with one or more employees, including part-time workers. The penalties for not having it are significant.",
      },
      {
        q: "Can you insure a home-based business?",
        a: "Yes. Home-based business coverage can often be added as an endorsement to your homeowners policy for small operations. For businesses with significant inventory, equipment, or client visits, a separate commercial policy is usually recommended.",
      },
    ],
    related: ["home-insurance", "auto-insurance", "specialty-insurance"],
  },

  "life-insurance": {
    intro:
      "Life insurance is the most important financial protection most people never review after they buy it. Whether you need term, whole, or universal life insurance, Devil Insurance shops multiple carriers to find you the right coverage at the right price — and explains what you actually need without the sales pressure.",
    included: [
      "Term life insurance (10, 20, 30 year)",
      "Whole life insurance",
      "Universal life insurance",
      "Final expense insurance",
      "Return of premium policies",
      "No-exam life insurance options",
      "Key person insurance (business owners)",
      "Life insurance for estate planning",
    ],
    sections: [
      {
        h2: "Term vs. whole life: which is right for you?",
        body: "<p><strong>Term life</strong> provides pure death benefit protection for a defined period — 10, 20, or 30 years. It's affordable and straightforward. If you die during the term, your beneficiaries receive the payout. If the term ends, it's done. For most people protecting income, a mortgage, or young children, term life is the best value.</p><p><strong>Whole life</strong> provides permanent coverage with a cash value component that grows over time. It costs significantly more than term but never expires and builds an asset. Whole life makes sense for specific estate planning situations, business succession planning, or high-income earners who have maxed other tax-advantaged vehicles.</p>",
      },
      {
        h2: "How much life insurance do you need?",
        body: "<p>A common starting point is 10–12x your annual income, but the right number depends on your specific obligations: mortgage balance, other debts, income replacement for dependents, future education costs, and final expenses.</p><p>We'll walk you through a needs analysis that gives you a realistic number — not a sales pitch for maximum coverage. The goal is the right amount of coverage at the right price.</p>",
      },
      {
        h2: "Why life insurance is cheaper than you think",
        body: "<p>Many people avoid getting life insurance quotes because they assume it's expensive. The reality: a healthy 35-year-old can get a 20-year, $500,000 term policy for around $25–$35/month. The cost of inaction — leaving your family unprotected — is far higher.</p><p>Rates are also significantly lower when you're younger and healthier. Every year you wait costs more. We'll run quotes from multiple carriers to find the most competitive rate for your age, health, and coverage needs.</p>",
      },
    ],
    faqs: [
      {
        q: "Do I need a medical exam for life insurance?",
        a: "Not always. No-exam life insurance is available, though it typically costs more than fully underwritten coverage. For most people who are reasonably healthy, going through underwriting results in significantly better rates. We'll help you figure out which approach makes sense.",
      },
      {
        q: "How long does it take to get life insurance coverage?",
        a: "No-exam policies can be issued in days. Fully underwritten policies typically take 3–6 weeks for the application, exam, and underwriting review. We'll set expectations based on the carrier and policy you're applying for.",
      },
      {
        q: "Can I get life insurance if I have health issues?",
        a: "Often yes. Some carriers specialize in higher-risk cases and can offer coverage when others decline. The premium will be higher, but coverage is usually available. We work with carriers across the risk spectrum.",
      },
      {
        q: "Should I get life insurance through my employer?",
        a: "Employer-sponsored life insurance is a benefit worth taking, but it usually isn't enough and doesn't follow you if you change jobs. We recommend having a private policy that covers your full needs regardless of employment.",
      },
    ],
    related: ["home-insurance", "business-insurance", "auto-insurance"],
  },

  "renters-insurance": {
    intro:
      "Renters insurance is one of the most overlooked and undervalued insurance products available. For just a few dollars a month, it protects your personal belongings, covers your liability, and pays for a hotel if your apartment becomes uninhabitable. Devil Insurance finds you the best rate in minutes.",
    included: [
      "Personal property coverage",
      "Liability protection",
      "Additional living expenses (ALE)",
      "Medical payments to others",
      "Loss of use coverage",
      "Optional: scheduled valuable items (jewelry, electronics)",
      "Optional: identity theft coverage",
      "Replacement cost vs. actual cash value options",
    ],
    sections: [
      {
        h2: "What renters insurance actually covers",
        body: "<p>Renters insurance covers your personal belongings — furniture, clothing, electronics, appliances — against fire, theft, vandalism, and certain water damage (not flooding). It also covers your liability if someone is injured in your apartment and you're found responsible.</p><p>One thing most renters don't know: your belongings are covered even away from home. If your laptop is stolen from your car or your bike is stolen from a rack, renters insurance often covers it.</p>",
      },
      {
        h2: "Your landlord's insurance doesn't cover you",
        body: "<p>This is the most common misconception in renters insurance. Your landlord's policy covers the building structure — walls, roof, appliances that are part of the unit. It does not cover your personal belongings, and it does not cover your liability.</p><p>If a fire destroys your apartment and everything in it, your landlord's insurance rebuilds the unit. Your stuff? Gone, unless you have renters insurance.</p>",
      },
      {
        h2: "How little renters insurance actually costs",
        body: "<p>A basic renters policy typically costs $15–$25/month for $30,000 in personal property coverage and $100,000 in liability. That's less than a streaming subscription.</p><p>Bundling with auto insurance typically reduces that further — often to $10–$15/month. If you have auto insurance and no renters insurance, adding renters to your bundle is almost always a no-brainer financially.</p>",
      },
    ],
    faqs: [
      {
        q: "Does renters insurance cover flooding?",
        a: "No — standard renters insurance excludes flooding (water rising from outside). You'd need a separate flood policy for that. Standard policies do cover water damage from internal causes like a burst pipe or a neighbor's overflow.",
      },
      {
        q: "How much renters insurance do I need?",
        a: "Walk through your apartment and mentally add up what it would cost to replace everything — clothes, furniture, electronics, appliances. For most renters that's $20,000–$50,000. That's your personal property limit. Liability coverage of $100,000 is typically the minimum we recommend.",
      },
      {
        q: "Is renters insurance required?",
        a: "It's not required by law, but many landlords now require it as a condition of your lease. Even if yours doesn't, the protection is well worth the modest cost.",
      },
      {
        q: "Can I get renters insurance if I have roommates?",
        a: "Policies vary — some cover all residents in a unit, others cover only the named insured. In general, roommates should each have their own policy to ensure full coverage. We can walk you through the specifics.",
      },
    ],
    related: ["auto-insurance", "home-insurance", "life-insurance"],
  },

  "specialty-insurance": {
    intro:
      "Standard insurance policies don't cover everything. Motorcycles, ATVs, boats, RVs, collectibles, classic cars, musical instruments, fine art — if it matters to you and a standard policy won't cover it, there's likely a specialty policy that will. Devil Insurance has access to the niche carriers other agencies can't find.",
    included: [
      "Motorcycle insurance",
      "ATV & off-road vehicle insurance",
      "Boat & watercraft insurance",
      "RV & motorhome insurance",
      "Classic & collector car insurance",
      "Valuable items / collectibles insurance",
      "Musical instrument insurance",
      "Fine art & jewelry floaters",
    ],
    sections: [
      {
        h2: "Why specialty vehicles need specialty insurance",
        body: "<p>Your personal auto policy typically excludes motorcycles, ATVs, golf carts, and watercraft. Your homeowners policy has limited coverage for personal property and usually excludes motorized vehicles entirely.</p><p>Specialty insurance products are designed for these specific risks. A motorcycle policy includes coverage for custom equipment that a standard auto policy would never cover. A boat policy includes coverage for the trailer, the engine, and in some cases, the gear in the boat.</p>",
      },
      {
        h2: "Classic and collector car insurance",
        body: "<p>Classic car insurance values your vehicle based on an agreed value — the amount you and the insurance company agree the car is worth — rather than actual cash value (which depreciates over time). For a collectible that appreciates in value, this distinction can mean tens of thousands of dollars at claim time.</p><p>Classic car policies also typically include coverage for car shows, limited pleasure driving, and sometimes restoration in progress. They're designed for how collectors actually use their cars.</p>",
      },
      {
        h2: "Valuables, collectibles, and scheduled personal property",
        body: "<p>Jewelry, fine art, watches, wine collections, sports memorabilia, musical instruments, cameras — standard homeowners policies typically cover these at low sub-limits ($1,500–$5,000 for jewelry is common) and often exclude breakage and mysterious disappearance.</p><p>A scheduled personal property floater provides coverage for each specific item at its appraised value, with broader coverage including accidental breakage. If you have items worth significantly more than your policy's sub-limits, a floater is the right answer.</p>",
      },
    ],
    faqs: [
      {
        q: "Does my auto insurance cover my motorcycle?",
        a: "No — motorcycles need their own separate policy. Personal auto policies explicitly exclude motorcycles. Motorcycle insurance covers liability, collision, comprehensive, and often custom equipment and accessories.",
      },
      {
        q: "Is my boat covered under my homeowners policy?",
        a: "Small boats (under 25 HP or under a certain length, depending on the carrier) may have limited coverage under a homeowners policy, but most watercraft benefit significantly from a dedicated boat policy. We'll review what your current coverage actually provides.",
      },
      {
        q: "Do I need insurance for an ATV?",
        a: "Liability insurance for ATVs is required in some states and strongly recommended everywhere. Comprehensive and collision coverage protects your investment if the ATV is damaged or stolen. Some homeowners policies provide limited off-premises coverage but typically not enough.",
      },
      {
        q: "How are collectibles valued in an insurance claim?",
        a: "Under a standard homeowners policy, collectibles are covered at actual cash value — what it would cost to replace them today, minus depreciation. A scheduled personal property floater covers them at agreed value or replacement cost, with no depreciation. For valuable collectibles, the difference at claim time can be significant.",
      },
    ],
    related: [
      "auto-insurance",
      "home-insurance",
      "business-insurance",
    ],
  },
};
