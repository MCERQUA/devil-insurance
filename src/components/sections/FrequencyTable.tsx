import { Star } from "lucide-react";

const ROWS = [
  {
    type: "Home Insurance",
    price: "~$1,200/yr",
    example: "Dwelling, personal property, liability, ALE",
    hot: false,
  },
  {
    type: "Auto Insurance",
    price: "$900–$1,800/yr",
    example: "Liability, collision, comprehensive, uninsured",
    hot: false,
  },
  {
    type: "Bundle (Home + Auto)",
    price: "Save up to 25%",
    example: "Most popular — one carrier, one renewal date",
    hot: true,
    note: "best value",
  },
  {
    type: "Renters Insurance",
    price: "~$15–$25/mo",
    example: "Personal property, liability, loss of use",
    hot: false,
  },
  {
    type: "Business Insurance",
    price: "Varies by type",
    example: "GL, BOP, workers comp, commercial auto",
    hot: true,
    note: "custom quote",
  },
];

export function FrequencyTable() {
  return (
    <div className="card-dark overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-charcoal-light">
              <th className="px-5 py-4 font-heading text-sm uppercase tracking-wider text-bone">
                Coverage Type
              </th>
              <th className="px-5 py-4 font-heading text-sm uppercase tracking-wider text-bone whitespace-nowrap">
                Typical Range
              </th>
              <th className="px-5 py-4 font-heading text-sm uppercase tracking-wider text-bone hidden sm:table-cell">
                What It Covers
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr
                key={r.type}
                className="border-b border-charcoal-light/60 last:border-0"
              >
                <td className="px-5 py-4 text-steel-light font-body text-sm">
                  {r.type}
                  {r.note && (
                    <span className="ml-2 text-[10px] uppercase tracking-wide text-caution font-semibold align-middle">
                      {r.note}
                    </span>
                  )}
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 font-heading font-semibold text-sm ${
                      r.hot ? "text-flame" : "text-steel-light"
                    }`}
                  >
                    {r.hot && <Star className="w-3.5 h-3.5" />}
                    {r.price}
                  </span>
                </td>
                <td className="px-5 py-4 text-steel font-body text-sm hidden sm:table-cell">
                  {r.example}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="px-5 py-3 text-xs text-steel-dark font-body border-t border-charcoal-light">
        Ballpark ranges for Arizona residents, 2026. Actual premiums depend on your
        coverage limits, deductibles, driving record, home age, and carrier — your
        free quote follows a quick consultation with one of our licensed agents.
      </p>
    </div>
  );
}
