"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Send,
  ShieldCheck,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

const INSURANCE_TYPES = [
  "Home Insurance",
  "Auto Insurance",
  "Business Insurance",
  "Life Insurance",
  "Renters Insurance",
  "Specialty Insurance (motorcycle, boat, ATV, etc.)",
  "Bundle (home + auto)",
  "Multiple types — help me figure it out",
];

const TIMEFRAMES = [
  "As soon as possible",
  "Within 30 days",
  "1–3 months",
  "Just comparing / planning",
];

const CURRENTLY_INSURED = [
  "Yes — looking to switch or compare",
  "Yes — looking to add coverage",
  "No — first time buyer",
  "Prefer not to say",
];

const LIFE_INTEREST = [
  "Term life",
  "Whole life",
  "Universal life / IUL",
  "Final expense",
  "Infinite banking / paid-up additions rider",
  "Not sure — explain my options",
];

/* ---------------------------------------------------------------------------
   Multi-line agency form (insurance-agency-multiline).
   ONE conditional section is rendered, chosen by insuranceType: the personal
   lines core for home/auto/renters, the commercial set for business, the life
   set for life. public/__forms.html declares the UNION of all three — Netlify
   only stores names it has seen declared — but a submission posts the common
   block plus the ACTIVE section only, so a life lead never carries nine empty
   commercial columns.
--------------------------------------------------------------------------- */
type Branch = "personal" | "business" | "life";

const BRANCH_OF: Record<string, Branch> = {
  "Home Insurance": "personal",
  "Auto Insurance": "personal",
  "Business Insurance": "business",
  "Life Insurance": "life",
  "Renters Insurance": "personal",
  "Specialty Insurance (motorcycle, boat, ATV, etc.)": "personal",
  "Bundle (home + auto)": "personal",
  // No single section fits "help me figure it out"; personal lines is this
  // agency's dominant book, and the free-text message catches the rest.
  "Multiple types — help me figure it out": "personal",
};

const SECTION_TITLE: Record<Branch, string> = {
  personal: "Property & Policy",
  business: "Business Details",
  life: "Life Coverage",
};

const SECTION_BLURB: Record<Branch, string> = {
  personal:
    "The carriers need these to rate a home, auto or renters policy. It is the same information you would give them on the phone.",
  business:
    "Commercial carriers rate off the entity and its operations — this is the ACORD 125 core.",
  life: "Enough to shop the life market for you. No medical questions here.",
};

/* Common block — posted on every branch. `name`, `phone`, `email`, `state`,
   `message`, `currentlyInsured` and `timeframe` are the names this form has
   always posted; they are never renamed, only added alongside. */
const COMMON_FIELDS = [
  "insuranceType",
  "currentlyInsured",
  "timeframe",
  "name",
  "phone",
  "email",
  "state",
  "message",
];

const SECTION_FIELDS: Record<Branch, string[]> = {
  personal: [
    "date_of_birth",
    "mailing_address",
    "city",
    "zip",
    "property_street_address",
    "drivers_license_number",
    "current_carrier_name",
    "current_policy_number",
    "current_policy_expiration_date",
    "requested_effective_date",
  ],
  business: [
    "street_address",
    "city",
    "zip",
    "fein",
    "year_business_started",
    "business_description",
    "prior_carrier_name",
    "prior_policy_number",
    "prior_policy_expiration",
  ],
  life: ["coverage_amount", "interest", "age"],
};

/* required:true in forms-required-fields.json → enforced by the step guard,
   because an unmounted section's `required` attributes cannot block submit. */
const SECTION_REQUIRED: Record<Branch, string[]> = {
  personal: [
    "date_of_birth",
    "mailing_address",
    "city",
    "zip",
    "property_street_address",
    "current_carrier_name",
    "current_policy_number",
    "current_policy_expiration_date",
  ],
  business: [
    "street_address",
    "city",
    "zip",
    "fein",
    "year_business_started",
    "business_description",
    "prior_carrier_name",
    "prior_policy_number",
    "prior_policy_expiration",
  ],
  life: ["coverage_amount", "interest", "age"],
};

interface FormState {
  insuranceType: string;
  currentlyInsured: string;
  timeframe: string;
  name: string;
  phone: string;
  email: string;
  state: string;
  message: string;
  "bot-field": string;

  // personal lines
  date_of_birth: string;
  mailing_address: string;
  city: string;
  zip: string;
  property_street_address: string;
  drivers_license_number: string;
  current_carrier_name: string;
  current_policy_number: string;
  current_policy_expiration_date: string;
  requested_effective_date: string;

  // commercial
  street_address: string;
  fein: string;
  year_business_started: string;
  business_description: string;
  prior_carrier_name: string;
  prior_policy_number: string;
  prior_policy_expiration: string;

  // life
  coverage_amount: string;
  interest: string;
  age: string;
}

const INITIAL: FormState = {
  insuranceType: "",
  currentlyInsured: "",
  timeframe: "",
  name: "",
  phone: "",
  email: "",
  state: "",
  message: "",
  "bot-field": "",

  date_of_birth: "",
  mailing_address: "",
  city: "",
  zip: "",
  property_street_address: "",
  drivers_license_number: "",
  current_carrier_name: "",
  current_policy_number: "",
  current_policy_expiration_date: "",
  requested_effective_date: "",

  street_address: "",
  fein: "",
  year_business_started: "",
  business_description: "",
  prior_carrier_name: "",
  prior_policy_number: "",
  prior_policy_expiration: "",

  coverage_amount: "",
  interest: "",
  age: "",
};

const inputCls =
  "w-full bg-[#17120F] border border-[#3A2A22] rounded-lg px-4 py-3 text-bone font-body text-sm placeholder:text-steel-dark focus:outline-none focus:border-[#FFCB05] focus:ring-1 focus:ring-[#FFCB05]/30 transition-colors";
const labelCls = "block text-bone text-sm font-body font-semibold mb-2";

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const branch: Branch = BRANCH_OF[form.insuranceType] ?? "personal";

  const STEPS = [
    "Coverage Type",
    "Your Situation",
    form.insuranceType ? SECTION_TITLE[branch] : "Coverage Details",
    "Contact Info",
  ];

  const update = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const canNext =
    step === 0
      ? Boolean(form.insuranceType)
      : step === 1
        ? Boolean(form.currentlyInsured && form.timeframe)
        : step === 2
          ? SECTION_REQUIRED[branch].every((k) =>
              String(form[k as keyof FormState] ?? "").trim()
            )
          : true;

  /* Posted names = common block + the active section. A superset of this (the
     union of every branch) is what public/__forms.html declares, so every name
     posted here is a declared name on every branch. */
  const payload = () =>
    Object.fromEntries(
      [...COMMON_FIELDS, ...SECTION_FIELDS[branch]].map((k) => [
        k,
        String(form[k as keyof FormState] ?? ""),
      ])
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form["bot-field"]) return;
    setSubmitting(true);
    setError(null);
    const fields = payload();
    try {
      // Direct lead delivery to our leads DB. The netlify.toml [[notifications]] webhook is
      // unreliable and silently drops leads (verified fleet-wide 2026-07-19); this guarantees the
      // lead reaches our system. Fire-and-forget alongside the Netlify submit; keepalive so it
      // survives even if the page navigates.
      fetch("https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=devilinsurance.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify(fields),
      }).catch(() => {});
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "quote",
          ...fields,
        }).toString(),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError(
        `Something went wrong. Please call us at ${SITE.phone} or try again.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  /* Plain functions, not components — a component declared inside render is a
     new type on every keystroke and React would remount the input, losing focus. */
  const text = (
    name: keyof FormState,
    label: string,
    opts: { type?: string; required?: boolean; placeholder?: string } = {}
  ) => (
    <div key={name}>
      <label htmlFor={name} className={labelCls}>
        {label}
        {opts.required && <span className="text-[#FFCB05]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={opts.type ?? "text"}
        required={opts.required}
        value={form[name]}
        onChange={update}
        placeholder={opts.placeholder}
        className={inputCls}
      />
    </div>
  );

  const area = (name: keyof FormState, label: string, required?: boolean) => (
    <div key={name}>
      <label htmlFor={name} className={labelCls}>
        {label}
        {required && <span className="text-[#FFCB05]"> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={3}
        required={required}
        value={form[name]}
        onChange={update}
        className={`${inputCls} resize-none`}
      />
    </div>
  );

  const choose = (
    name: keyof FormState,
    label: string,
    options: string[],
    required?: boolean
  ) => (
    <div key={name}>
      <label htmlFor={name} className={labelCls}>
        {label}
        {required && <span className="text-[#FFCB05]"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={form[name]}
        onChange={update}
        className={inputCls}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );

  const personalSection = (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {text("date_of_birth", "Date of birth", { type: "date", required: true })}
        {text("drivers_license_number", "Driver license number", {
          placeholder: "Optional",
        })}
      </div>
      {text("mailing_address", "Current mailing address", {
        required: true,
        placeholder: "123 E Main St",
      })}
      <div className="grid sm:grid-cols-2 gap-5">
        {text("city", "City", { required: true, placeholder: "Phoenix" })}
        {text("zip", "ZIP", { required: true, placeholder: "85001" })}
      </div>
      {text("property_street_address", "Property street address", {
        required: true,
        placeholder: "Same as mailing address, if that is the one to insure",
      })}
      <div className="grid sm:grid-cols-2 gap-5">
        {text("current_carrier_name", "Current carrier", {
          required: true,
          placeholder: "State Farm, Progressive…",
        })}
        {text("current_policy_number", "Current policy number", {
          required: true,
        })}
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {text("current_policy_expiration_date", "Current policy expires", {
          type: "date",
          required: true,
        })}
        {text("requested_effective_date", "Requested effective date", {
          type: "date",
        })}
      </div>
    </div>
  );

  const businessSection = (
    <div className="space-y-5">
      {text("street_address", "Business street address", {
        required: true,
        placeholder: "123 E Main St",
      })}
      <div className="grid sm:grid-cols-2 gap-5">
        {text("city", "City", { required: true, placeholder: "Phoenix" })}
        {text("zip", "ZIP", { required: true, placeholder: "85001" })}
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {text("fein", "Federal Employer ID Number (FEIN)", {
          required: true,
          placeholder: "12-3456789",
        })}
        {text("year_business_started", "Year business started", {
          type: "number",
          required: true,
          placeholder: "2014",
        })}
      </div>
      {area("business_description", "Description of business", true)}
      <div className="grid sm:grid-cols-2 gap-5">
        {text("prior_carrier_name", "Prior insurance carrier", {
          required: true,
        })}
        {text("prior_policy_number", "Prior policy number", { required: true })}
      </div>
      {text("prior_policy_expiration", "Prior policy expiration date", {
        type: "date",
        required: true,
      })}
    </div>
  );

  const lifeSection = (
    <div className="space-y-5">
      {choose("interest", "What are you interested in?", LIFE_INTEREST, true)}
      <div className="grid sm:grid-cols-2 gap-5">
        {text("coverage_amount", "Desired coverage amount / monthly budget", {
          required: true,
          placeholder: "$500,000 — or $150/mo",
        })}
        {text("age", "Age", { type: "number", required: true, placeholder: "42" })}
      </div>
    </div>
  );

  const SECTION: Record<Branch, React.ReactNode> = {
    personal: personalSection,
    business: businessSection,
    life: lifeSection,
  };

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-14 overflow-hidden bg-[#241A15] border-b border-[#3A2A22]">
          <div aria-hidden className="absolute inset-0 opacity-[0.04] bg-hazard-stripes" />
          <div className="container-x relative">
            <div className="max-w-2xl">
              <div className="kicker mb-4">
                <ShieldCheck className="w-4 h-4" /> Free · No Obligation
              </div>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl text-bone leading-tight mb-4">
                Get a Free Insurance Quote
              </h1>
              <p className="text-steel-light font-body text-lg">
                Tell us what you need and we&apos;ll shop dozens of top-rated
                carriers to find you the best coverage at the best price.
                Takes about 15 minutes — free, no pressure, no obligation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-x">
            <div className="grid lg:grid-cols-[1fr_340px] gap-10">
              {/* FORM */}
              <div>
                {submitted ? (
                  <FadeIn>
                    <div className="card-dark p-10 sm:p-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-[#AB0428]/30 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-[#FFCB05]" />
                      </div>
                      <h2 className="font-heading font-semibold text-2xl text-bone mb-3">
                        Quote Request Received
                      </h2>
                      <p className="text-steel-light font-body mb-5 max-w-md mx-auto">
                        Thanks! We&apos;ll review your information and reach out to
                        discuss your options — usually the same business day.
                        Want to talk sooner? Call us anytime.
                      </p>
                      <a
                        href={SITE.phoneHref}
                        className="inline-flex items-center gap-2 text-[#FFCB05] font-heading font-semibold text-lg mb-8"
                      >
                        <Phone className="w-5 h-5" /> {SITE.phone}
                      </a>
                      <div>
                        <Link
                          href="/"
                          className="inline-flex items-center gap-2 text-steel-light hover:text-[#FFCB05] font-body font-semibold transition-colors"
                        >
                          Back to Home <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                ) : (
                  <div className="card-dark p-7 sm:p-9">
                    {/* Step indicator */}
                    <div className="flex items-center gap-2 mb-8">
                      {STEPS.map((label, i) => (
                        <div key={label} className="flex items-center gap-2 flex-1">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span
                              className={`w-8 h-8 rounded-lg flex items-center justify-center font-heading font-semibold text-sm shrink-0 transition-colors ${
                                i <= step
                                  ? "bg-[#AB0428] text-white"
                                  : "bg-[#17120F] text-steel-dark"
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span
                              className={`text-xs font-body font-semibold hidden sm:block truncate ${
                                i <= step ? "text-bone" : "text-steel-dark"
                              }`}
                            >
                              {label}
                            </span>
                          </div>
                          {i < STEPS.length - 1 && (
                            <div
                              className={`h-px flex-1 ${
                                i < step ? "bg-[#AB0428]" : "bg-[#3A2A22]"
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    <form
                      name="quote"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                    >
                      <input type="hidden" name="form-name" value="quote" />
                      <div className="hidden" aria-hidden="true">
                        <label>
                          Don&apos;t fill this out:{" "}
                          <input
                            name="bot-field"
                            value={form["bot-field"]}
                            onChange={update}
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </label>
                      </div>

                      {/* STEP 1 — coverage type. This choice picks the section
                          rendered at step 3. */}
                      {step === 0 && (
                        <div className="space-y-5">
                          <div>
                            <label htmlFor="insuranceType" className={labelCls}>
                              What type of insurance do you need?{" "}
                              <span className="text-[#FFCB05]">*</span>
                            </label>
                            <select
                              id="insuranceType"
                              name="insuranceType"
                              required
                              value={form.insuranceType}
                              onChange={update}
                              className={inputCls}
                            >
                              <option value="" disabled>
                                Select coverage type…
                              </option>
                              {INSURANCE_TYPES.map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      )}

                      {/* STEP 2 */}
                      {step === 1 && (
                        <div className="space-y-5">
                          {choose(
                            "currentlyInsured",
                            "Are you currently insured?",
                            CURRENTLY_INSURED,
                            true
                          )}
                          {choose(
                            "timeframe",
                            "When do you need coverage?",
                            TIMEFRAMES,
                            true
                          )}
                        </div>
                      )}

                      {/* STEP 3 — ONE conditional section, chosen by insuranceType */}
                      {step === 2 && (
                        <div className="space-y-5">
                          <div className="rounded-lg bg-[#17120F] border border-[#3A2A22] px-4 py-3">
                            <p className="text-bone font-heading font-semibold text-sm mb-1">
                              {SECTION_TITLE[branch]}
                            </p>
                            <p className="text-steel-light font-body text-xs leading-relaxed">
                              {SECTION_BLURB[branch]}
                            </p>
                          </div>
                          {SECTION[branch]}
                        </div>
                      )}

                      {/* STEP 4 */}
                      {step === 3 && (
                        <div className="space-y-5">
                          <div className="grid sm:grid-cols-2 gap-5">
                            {text("name", "Full Name", {
                              required: true,
                              placeholder: "Jane Smith",
                            })}
                            {text("phone", "Phone", {
                              type: "tel",
                              required: true,
                              placeholder: "(602) 555-0100",
                            })}
                          </div>
                          <div className="grid sm:grid-cols-2 gap-5">
                            {text("email", "Email", {
                              type: "email",
                              required: true,
                              placeholder: "jane@email.com",
                            })}
                            {text("state", "State", { placeholder: "Arizona" })}
                          </div>
                          {area("message", "Anything else we should know?")}
                        </div>
                      )}

                      {error && (
                        <p className="text-[#FFCB05] text-sm font-body mt-5 bg-[#FFCB05]/10 border border-[#FFCB05]/30 rounded-lg px-4 py-3">
                          {error}
                        </p>
                      )}

                      {step === 2 && !canNext && (
                        <p className="text-steel-light text-xs font-body mt-5">
                          Every field marked * is one the carriers require to
                          quote — we cannot shop the market without them.
                        </p>
                      )}

                      {/* NAV BUTTONS */}
                      <div className="flex items-center justify-between gap-4 mt-8">
                        {step > 0 ? (
                          <button
                            type="button"
                            onClick={() => setStep((s) => s - 1)}
                            className="inline-flex items-center gap-2 text-steel-light hover:text-bone font-heading font-semibold transition-colors"
                          >
                            <ArrowLeft className="w-4 h-4" /> Back
                          </button>
                        ) : (
                          <span />
                        )}

                        {step < STEPS.length - 1 ? (
                          <button
                            type="button"
                            onClick={() => canNext && setStep((s) => s + 1)}
                            disabled={!canNext}
                            className="btn-gold disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Continue <ArrowRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={submitting}
                            className="btn-gold disabled:opacity-60"
                          >
                            {submitting ? (
                              <>
                                <span className="w-4 h-4 border-2 border-[#17120F]/40 border-t-[#17120F] rounded-full animate-spin" />
                                Submitting…
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4" /> Get My Free Quote
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* SIDEBAR */}
              <aside>
                <div className="lg:sticky lg:top-28 space-y-5">
                  <div className="bg-[#AB0428] rounded-xl p-6">
                    <p className="text-white/80 text-xs font-body uppercase tracking-wider mb-2">
                      Prefer to Talk?
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="flex items-center gap-2 font-heading font-semibold text-white text-xl mb-1"
                    >
                      <Phone className="w-5 h-5" /> {SITE.phone}
                    </a>
                    <p className="text-white/80 text-sm font-body">{SITE.hours}</p>
                  </div>

                  <div className="card-dark p-6">
                    <h3 className="font-heading font-semibold text-bone text-base mb-4">
                      What Happens Next
                    </h3>
                    <ol className="space-y-4">
                      {[
                        "We review your info and contact you to ask a few quick questions.",
                        "We shop dozens of carriers and find the best rate for your situation.",
                        "We present your options — you choose, no pressure.",
                      ].map((t, i) => (
                        <li key={t} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-md bg-[#AB0428]/30 text-[#FFCB05] font-heading font-semibold text-xs flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-steel-light text-sm font-body leading-relaxed">
                            {t}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="card-dark p-6">
                    <div className="flex flex-wrap gap-x-4 gap-y-3">
                      {[
                        { icon: ShieldCheck, t: "30+ carriers" },
                        { icon: CheckCircle2, t: "Free quotes" },
                        { icon: Star, t: "Claims advocacy" },
                        { icon: CheckCircle2, t: "No obligation" },
                      ].map((b) => (
                        <div
                          key={b.t}
                          className="flex items-center gap-2 text-steel-light text-xs font-body"
                        >
                          <b.icon className="w-4 h-4 text-[#FFCB05]" /> {b.t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
