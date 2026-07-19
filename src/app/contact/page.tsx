"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ShieldCheck,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

const SUBJECTS = [
  "Free Insurance Quote",
  "Home Insurance",
  "Auto Insurance",
  "Business Insurance",
  "Life Insurance",
  "Renters Insurance",
  "Specialty Insurance",
  "General Question",
];

const CARDS = [
  {
    icon: Phone,
    label: "Call Us",
    value: SITE.phone,
    href: SITE.phoneHref,
    sub: "Mon–Fri 8am–6pm · Sat 9am–3pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    sub: "We respond within one business day",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Arizona & Nationwide",
    href: null,
    sub: "Phoenix, Scottsdale, Tempe & more",
  },
  {
    icon: Clock,
    label: "Hours",
    value: SITE.hours,
    href: null,
    sub: "Free quotes always — no obligation",
  },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  "bot-field": string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  "bot-field": "",
};

const inputCls =
  "w-full bg-[#1a0a0d] border border-[#3a1020] rounded-lg px-4 py-3 text-bone font-body text-sm placeholder:text-steel-dark focus:outline-none focus:border-[#FFC627] focus:ring-1 focus:ring-[#FFC627]/30 transition-colors";
const labelCls = "block text-bone text-sm font-body font-semibold mb-2";

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

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
          "form-name": "contact",
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
                <ShieldCheck className="w-4 h-4" /> Get In Touch
              </div>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl text-bone leading-tight mb-4">
                Contact Devil Insurance
              </h1>
              <p className="text-steel-light font-body text-lg">
                Ready for a free quote? Have a question about coverage? We&apos;re
                here to help. Call us or send a message and we&apos;ll get back to
                you within one business day.
              </p>
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section className="py-14 bg-[#2a0e18] border-b border-[#3a1020]">
          <div className="container-x">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CARDS.map((c, i) => {
                const inner = (
                  <div className="flex flex-col h-full">
                    <div className="w-11 h-11 rounded-lg bg-[#8C1D40]/30 flex items-center justify-center mb-4">
                      <c.icon className="w-5 h-5 text-[#FFC627]" />
                    </div>
                    <div className="text-steel-dark text-xs font-body uppercase tracking-wider mb-1">
                      {c.label}
                    </div>
                    <div className="font-heading font-bold text-bone text-base mb-1 break-words">
                      {c.value}
                    </div>
                    <div className="text-steel text-sm font-body mt-auto pt-1">
                      {c.sub}
                    </div>
                  </div>
                );
                return (
                  <FadeIn key={c.label} delay={i * 0.06}>
                    <div className="card-dark p-6 h-full">
                      {c.href ? (
                        <a
                          href={c.href}
                          className="block h-full hover:text-[#FFC627] transition-colors"
                        >
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="py-16 sm:py-20">
          <div className="container-x max-w-3xl">
            {submitted ? (
              <FadeIn>
                <div className="card-dark p-10 sm:p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#8C1D40]/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-[#FFC627]" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-bone mb-3">
                    Message Received
                  </h2>
                  <p className="text-steel-light font-body mb-6 max-w-md mx-auto">
                    Thanks for reaching out — we&apos;ll be in touch within one business
                    day. Need an immediate response? Call us anytime at{" "}
                    <a href={SITE.phoneHref} className="text-[#FFC627] font-semibold">
                      {SITE.phone}
                    </a>
                    .
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-steel-light hover:text-[#FFC627] font-body font-semibold transition-colors"
                  >
                    Back to Home <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            ) : (
              <FadeIn>
                <div className="card-dark p-7 sm:p-10">
                  <h2 className="font-heading font-bold text-2xl text-bone mb-6">
                    Send Us a Message
                  </h2>
                  <form
                    name="contact"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
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

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
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
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="phone" className={labelCls}>
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={update}
                          placeholder="(602) 555-0100"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className={labelCls}>
                          Subject <span className="text-[#FFC627]">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={update}
                          className={inputCls}
                        >
                          <option value="" disabled>
                            Select a subject…
                          </option>
                          {SUBJECTS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className={labelCls}>
                        Message <span className="text-[#FFC627]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={update}
                        placeholder="Tell us about your insurance needs or ask a question…"
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                    {error && (
                      <p className="text-[#FFC627] text-sm font-body mb-5 bg-[#FFC627]/10 border border-[#FFC627]/30 rounded-lg px-4 py-3">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-gold w-full disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#1a0a0d]/40 border-t-[#1a0a0d] rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </FadeIn>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
