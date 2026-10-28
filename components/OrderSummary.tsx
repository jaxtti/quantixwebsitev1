"use client";

import { useState } from "react";
import type { ServerPlan } from "@/components/ServerListing";

type BillingCycle = {
  id: string;
  label: string;
  months: number;
  discount: number;
};

const CYCLES: BillingCycle[] = [
  { id: "monthly", label: "Monthly", months: 1, discount: 0 },
  { id: "quarterly", label: "Quarterly", months: 3, discount: 0.05 },
  { id: "annually", label: "Annually", months: 12, discount: 0.15 },
];

export default function OrderSummary({ plan }: { plan: ServerPlan }) {
  const [cycleId, setCycleId] = useState("monthly");
  const cycle = CYCLES.find((c) => c.id === cycleId)!;

  const monthlyPrice = plan.price * (1 - cycle.discount);
  const total = monthlyPrice * cycle.months;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
      <div className="space-y-6">
        <div className="bg-slate-900 border border-slate-800 p-6">
          <h2 className="text-lg font-bold text-white">{plan.title}</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1">
              {plan.availability}
            </span>
            <span className="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1">
              {plan.location}
            </span>
          </div>

          <div className="mt-5 pt-5 border-t border-slate-800 space-y-2 text-sm">
            <div className="text-slate-300">
              <span className="font-bold text-white">cpu:</span> {plan.cpu}
            </div>
            <div className="text-slate-300">
              <span className="font-bold text-white">ram:</span> {plan.ram}
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6">
          <h3 className="text-white font-semibold mb-4">Billing cycle</h3>
          <div className="space-y-3">
            {CYCLES.map((c) => {
              const price = plan.price * (1 - c.discount);
              return (
                <button
                  key={c.id}
                  onClick={() => setCycleId(c.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 border text-left transition-colors ${
                    cycleId === c.id
                      ? "border-blue-600 bg-blue-600/10"
                      : "border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-4 h-4 border flex items-center justify-center ${
                        cycleId === c.id ? "border-blue-500" : "border-slate-600"
                      }`}
                    >
                      {cycleId === c.id && <span className="w-2 h-2 bg-blue-500" />}
                    </span>
                    <span className="text-white font-medium">{c.label}</span>
                    {c.discount > 0 && (
                      <span className="text-xs text-blue-400 font-semibold">
                        Save {Math.round(c.discount * 100)}%
                      </span>
                    )}
                  </div>
                  <span className="text-white font-semibold">€{price.toFixed(2)}/mo</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-6 h-fit lg:sticky lg:top-6">
        <h3 className="text-white font-semibold mb-4">Order summary</h3>
        <div className="space-y-2 text-sm text-slate-300">
          <div className="flex justify-between">
            <span>{plan.title}</span>
            <span>€{monthlyPrice.toFixed(2)}/mo</span>
          </div>
          <div className="flex justify-between">
            <span>Billing cycle</span>
            <span>
              {cycle.label} ({cycle.months} {cycle.months === 1 ? "month" : "months"})
            </span>
          </div>
          <div className="flex justify-between">
            <span>Setup fee</span>
            <span className="text-blue-400">Free</span>
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-slate-800 flex justify-between items-baseline">
          <span className="text-slate-400 text-sm">Total due today</span>
          <span className="text-2xl font-black text-white">€{total.toFixed(2)}</span>
        </div>

        <a
          href="https://billing.heightnodes.com/cart.php"
          className="mt-6 w-full block bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-semibold text-center py-3"
        >
          Complete Order
        </a>
      </div>
    </div>
  );
}
