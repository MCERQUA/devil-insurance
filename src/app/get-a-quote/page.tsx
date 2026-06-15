"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GetAQuotePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    businessName: "",
    tradeType: "General Contractor",
    yearsInBusiness: "",
    coverageGL: false,
    coverageWC: false,
    coverageAuto: false,
    revenue: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const progress = ((step - 1) / 2) * 100;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setForm((f) => ({
      ...f,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const body = new URLSearchParams({
      "form-name": "quote-request",
      businessName: form.businessName,
      tradeType: form.tradeType,
      yearsInBusiness: form.yearsInBusiness,
      coverageGL: form.coverageGL ? "yes" : "no",
      coverageWC: form.coverageWC ? "yes" : "no",
      coverageAuto: form.coverageAuto ? "yes" : "no",
      revenue: form.revenue,
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
    });

    try {
      await fetch(
        "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=devil-insurance",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString(),
        }
      );
      router.push("/get-a-quote/success");
    } catch {
      setSubmitting(false);
    }
  }

  return (
    <div className="pt-20 pb-32">
      {/* Hero strip */}
      <div className="relative h-48 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/quote-hero.jpg"
          alt="Arizona contractor"
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0007]/60 to-[#0a0007]" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <h1 className="font-black text-5xl text-[#FFC627] uppercase">
            QUICK QUOTE
          </h1>
          <p className="text-gray-400 mt-2">
            Get protected in under 3 minutes — Josh handles the rest.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-8 bg-[#1b0716] border-2 border-[#8C1D40] p-6 md:p-12 relative">
            {/* Progress bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0a0007]">
              <div
                className="h-full bg-[#FFC627] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Step indicators */}
            <div className="flex justify-between mb-12">
              {["BUSINESS", "COVERAGE", "CONTACT"].map((label, i) => {
                const n = i + 1;
                const active = step >= n;
                return (
                  <div key={label} className="text-center">
                    <div
                      className={`w-10 h-10 flex items-center justify-center mb-2 mx-auto font-black ${
                        active
                          ? "bg-[#FFC627] text-black"
                          : "border-2 border-[#8C1D40] text-white opacity-40"
                      }`}
                    >
                      {n}
                    </div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest ${
                        active ? "text-[#FFC627]" : "text-white opacity-40"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Netlify-required hidden inputs */}
            <form
              name="quote-request"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-12"
            >
              <input type="hidden" name="form-name" value="quote-request" />
              <input type="hidden" name="bot-field" />

              {/* Step 1 */}
              <section
                className={step === 1 ? "" : "opacity-30 pointer-events-none"}
              >
                <div className="border-l-4 border-[#FFC627] pl-4 mb-8">
                  <h2 className="font-black text-3xl text-white uppercase">
                    Step 1: Business Identity
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black text-[#FFC627] uppercase tracking-widest">
                      Business Name
                    </label>
                    <input
                      name="businessName"
                      type="text"
                      value={form.businessName}
                      onChange={handleChange}
                      placeholder="E.G. PHOENIX STEEL WORKS"
                      className="bg-[#0a0007] border-b-2 border-[#8C1D40] text-white p-4 font-bold uppercase outline-none focus:border-[#FFC627] transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-[#FFC627] uppercase tracking-widest">
                        Trade Type
                      </label>
                      <select
                        name="tradeType"
                        value={form.tradeType}
                        onChange={handleChange}
                        className="bg-[#0a0007] border-b-2 border-[#8C1D40] text-white p-4 font-bold uppercase outline-none focus:border-[#FFC627] appearance-none cursor-pointer"
                      >
                        <option>General Contractor</option>
                        <option>Electrical</option>
                        <option>Plumbing</option>
                        <option>HVAC</option>
                        <option>Roofing</option>
                        <option>Spray Foam</option>
                        <option>Concrete</option>
                        <option>Landscaping</option>
                        <option>Other / Specialty</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-[#FFC627] uppercase tracking-widest">
                        Years in Business
                      </label>
                      <input
                        name="yearsInBusiness"
                        type="number"
                        value={form.yearsInBusiness}
                        onChange={handleChange}
                        placeholder="0"
                        min="0"
                        className="bg-[#0a0007] border-b-2 border-[#8C1D40] text-white p-4 font-bold uppercase outline-none focus:border-[#FFC627]"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="mt-4 bg-[#FFC627] text-black font-black py-4 px-10 uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all"
                  >
                    Next: Coverage →
                  </button>
                </div>
              </section>

              {/* Step 2 */}
              <section
                className={step >= 2 ? "" : "opacity-30 pointer-events-none"}
              >
                <div
                  className="border-l-4 pl-4 mb-8"
                  style={{
                    borderLeftColor: step >= 2 ? "#FFC627" : "#8C1D40",
                  }}
                >
                  <h2 className="font-black text-3xl text-white uppercase">
                    Step 2: Coverage Needed
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: "coverageGL", label: "General Liability" },
                      { name: "coverageWC", label: "Workers Comp" },
                      { name: "coverageAuto", label: "Commercial Auto" },
                    ].map((cb) => (
                      <label
                        key={cb.name}
                        className="border border-[#8C1D40] p-4 flex items-center gap-3 bg-[#0a0007] cursor-pointer hover:border-[#FFC627] transition-colors"
                      >
                        <input
                          type="checkbox"
                          name={cb.name}
                          checked={
                            form[cb.name as keyof typeof form] as boolean
                          }
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#FFC627]"
                        />
                        <span className="text-xs font-bold uppercase">
                          {cb.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black text-[#FFC627] uppercase tracking-widest">
                      Estimated Annual Revenue
                    </label>
                    <input
                      name="revenue"
                      type="text"
                      value={form.revenue}
                      onChange={handleChange}
                      placeholder="$ 0.00"
                      className="bg-[#0a0007] border-b-2 border-[#8C1D40] text-white p-4 font-bold uppercase outline-none focus:border-[#FFC627]"
                    />
                  </div>
                  {step === 2 && (
                    <div className="flex gap-4 mt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="border-2 border-[#8C1D40] text-white font-black py-4 px-8 uppercase tracking-widest hover:bg-[#8C1D40]/20 transition-all"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="bg-[#FFC627] text-black font-black py-4 px-10 uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all"
                      >
                        Next: Contact →
                      </button>
                    </div>
                  )}
                </div>
              </section>

              {/* Step 3 */}
              <section
                className={step >= 3 ? "" : "opacity-30 pointer-events-none"}
              >
                <div
                  className="border-l-4 pl-4 mb-8"
                  style={{
                    borderLeftColor: step >= 3 ? "#FFC627" : "#8C1D40",
                  }}
                >
                  <h2 className="font-black text-3xl text-white uppercase">
                    Step 3: Finish Line
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <input
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="FULL NAME"
                    className="bg-[#0a0007] border-b-2 border-[#8C1D40] text-white p-4 font-bold uppercase outline-none focus:border-[#FFC627]"
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="EMAIL ADDRESS"
                    className="bg-[#0a0007] border-b-2 border-[#8C1D40] text-white p-4 font-bold outline-none focus:border-[#FFC627] lowercase"
                  />
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="PHONE NUMBER"
                    className="bg-[#0a0007] border-b-2 border-[#8C1D40] text-white p-4 font-bold uppercase outline-none focus:border-[#FFC627]"
                  />
                </div>
              </section>

              {step === 3 && (
                <div className="pt-8 flex flex-col gap-6">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="border-2 border-[#8C1D40] text-white font-black py-4 px-8 uppercase tracking-widest hover:bg-[#8C1D40]/20 transition-all"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 bg-[#FFC627] text-black font-black py-6 text-xl uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-60"
                    >
                      {submitting ? "SENDING..." : "GET MY QUOTE"}
                    </button>
                  </div>
                  <p className="text-[10px] font-bold text-gray-500 text-center uppercase tracking-widest">
                    Submitted directly to Josh · 480-381-8949 ·
                    josh@contractorschoiceagency.com
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-[#8C1D40] p-8 text-white relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/roofing-site.jpg"
                alt=""
                className="absolute -right-12 -bottom-12 h-64 w-64 opacity-20 rotate-12 object-cover"
              />
              <h4 className="font-black text-3xl uppercase mb-4 leading-tight relative z-10">
                WHY DEVIL INSURANCE?
              </h4>
              <ul className="space-y-4 relative z-10">
                {[
                  { icon: "verified_user", text: "AZ Licensed & Bonded Specialist" },
                  { icon: "timer", text: "Certificates in under 2 hours" },
                  { icon: "gavel", text: "Built for Arizona Contractors" },
                  { icon: "call", text: "Direct line to Josh — no call centers" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#FFC627]">
                      {item.icon}
                    </span>
                    <span className="text-sm font-bold uppercase">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Josh card */}
            <div className="border-2 border-[#8C1D40] bg-[#0a0007]">
              <div className="h-56 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-phoenix.jpg"
                  alt="Construction site"
                  className="w-full h-full object-cover opacity-50 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0007]" />
                <span className="absolute bottom-4 left-4 font-black text-[#FFC627] text-2xl tracking-tighter uppercase italic">
                  PHOENIX PRIDE
                </span>
              </div>
              <div className="p-6 text-center">
                <p className="text-xs font-bold text-gray-400 uppercase leading-relaxed mb-4">
                  &ldquo;I don&apos;t just sell policies. I protect your livelihood so
                  you can keep building the Valley of the Sun.&rdquo;
                </p>
                <p className="font-black text-white uppercase tracking-widest text-sm">
                  Josh Cotner
                </p>
                <p className="text-[10px] text-[#FFC627] font-bold uppercase">
                  Owner / Contractor&apos;s Choice Agency
                </p>
                <a
                  href="tel:4803818949"
                  className="mt-4 block w-full border-2 border-[#8C1D40] text-white py-3 font-black uppercase text-sm hover:bg-[#8C1D40] transition-colors"
                >
                  📞 480-381-8949
                </a>
              </div>
            </div>

            {/* Logo icon */}
            <div className="border border-[#8C1D40] p-6 bg-[#1b0716] flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-mission.jpg"
                alt="Devil Insurance"
                className="h-12 w-12 object-contain"
              />
              <div>
                <p className="font-black text-[#FFC627] uppercase text-sm">Devil Insurance</p>
                <p className="text-xs text-gray-400 uppercase">Contractors Choice Agency</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
