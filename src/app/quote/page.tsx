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
};

const STEPS = ["Coverage Type", "Your Situation", "Contact Info"];

const inputCls =
  "w-full bg-[#1a0a0d] border border-[#3a1020] rounded-lg px-4 py-3 text-bone font-body text-sm placeholder:text-steel-dark focus:outline-none focus:border-[#FFC627] focus:ring-1 focus:ring-[#FFC627]/30 transition-colors";
const labelCls = "block text-bone text-sm font-body font-semibold mb-2";

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        : true;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form["bot-field"]) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "quote",
          ...form,
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

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-14 overflow-hidden bg-[#2a0e18] border-b border-[#3a1020]">
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
                      <div className="w-16 h-16 rounded-full bg-[#8C1D40]/30 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-[#FFC627]" />
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
                        className="inline-flex items-center gap-2 text-[#FFC627] font-heading font-semibold text-lg mb-8"
                      >
                        <Phone className="w-5 h-5" /> {SITE.phone}
                      </a>
                      <div>
                        <Link
                          href="/"
                          className="inline-flex items-center gap-2 text-steel-light hover:text-[#FFC627] font-body font-semibold transition-colors"
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
                                  ? "bg-[#8C1D40] text-white"
                                  : "bg-[#1a0a0d] text-steel-dark"
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
                                i < step ? "bg-[#8C1D40]" : "bg-[#3a1020]"
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

                      {/* STEP 1 */}
                      {step === 0 && (
                        <div className="space-y-5">
                          <div>
                            <label htmlFor="insuranceType" className={labelCls}>
                              What type of insurance do you need?{" "}
                              <span className="text-[#FFC627]">*</span>
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
                          <div>
                            <label htmlFor="currentlyInsured" className={labelCls}>
                              Are you currently insured?{" "}
                              <span className="text-[#FFC627]">*</span>
                            </label>
                            <select
                              id="currentlyInsured"
                              name="currentlyInsured"
                              required
                              value={form.currentlyInsured}
                              onChange={update}
                              className={inputCls}
                            >
                              <option value="" disabled>
                                Select…
                              </option>
                              {CURRENTLY_INSURED.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="timeframe" className={labelCls}>
                              When do you need coverage?{" "}
                              <span className="text-[#FFC627]">*</span>
                            </label>
                            <select
                              id="timeframe"
                              name="timeframe"
                              required
                              value={form.timeframe}
                              onChange={update}
                              className={inputCls}
                            >
                              <option value="" disabled>
                                Select a timeframe…
                              </option>
                              {TIMEFRAMES.map((w) => (
                                <option key={w} value={w}>
                                  {w}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      )}

                      {/* STEP 3 */}
                      {step === 2 && (
                        <div className="space-y-5">
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                              <label htmlFor="name" className={labelCls}>
                                Full Name <span className="text-[#FFC627]">*</span>
                              </label>
                              <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                autoComplete="name"
                                value={form.name}
                                onChange={update}
                                placeholder="Jane Smith"
                                className={inputCls}
                              />
                            </div>
                            <div>
                              <label htmlFor="phone" className={labelCls}>
                                Phone <span className="text-[#FFC627]">*</span>
                              </label>
                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                autoComplete="tel"
                                value={form.phone}
                                onChange={update}
                                placeholder="(602) 555-0100"
                                className={inputCls}
                              />
                            </div>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                              <label htmlFor="email" className={labelCls}>
                                Email <span className="text-[#FFC627]">*</span>
                              </label>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                value={form.email}
                                onChange={update}
                                placeholder="jane@email.com"
                                className={inputCls}
                              />
                            </div>
                            <div>
                              <label htmlFor="state" className={labelCls}>
                                State
                              </label>
                              <input
                                id="state"
                                name="state"
                                type="text"
                                autoComplete="address-level1"
                                value={form.state}
                                onChange={update}
                                placeholder="Arizona"
                                className={inputCls}
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="message" className={labelCls}>
                              Anything else we should know?
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={4}
                              value={form.message}
                              onChange={update}
                              placeholder="Current carrier, coverage amounts, specific questions, etc."
                              className={`${inputCls} resize-none`}
                            />
                          </div>
                        </div>
                      )}

                      {error && (
                        <p className="text-[#FFC627] text-sm font-body mt-5 bg-[#FFC627]/10 border border-[#FFC627]/30 rounded-lg px-4 py-3">
                          {error}
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
                                <span className="w-4 h-4 border-2 border-[#1a0a0d]/40 border-t-[#1a0a0d] rounded-full animate-spin" />
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
                  <div className="bg-[#8C1D40] rounded-xl p-6">
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
                          <span className="w-6 h-6 rounded-md bg-[#8C1D40]/30 text-[#FFC627] font-heading font-semibold text-xs flex items-center justify-center shrink-0">
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
                          <b.icon className="w-4 h-4 text-[#FFC627]" /> {b.t}
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
