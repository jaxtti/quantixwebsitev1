"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronUp, ChevronDown, Tag, X } from "lucide-react";

export type ServerPlan = {
  id: string;
  title: string;
  price: number;
  availability: string;
  location: string;
  cpu: string;
  ram: string;
  savePercent?: number;
  href: string;
};

type ServerListingProps = {
  eyebrow: string;
  title: string;
  backHref: string;
  backLabel: string;
  crumbLabel: string;
  plans: ServerPlan[];
  availabilityOptions: string[];
  locationOptions: string[];
  priceMin: number;
  priceMax: number;
};

export default function ServerListing({
  eyebrow,
  title,
  backHref,
  backLabel,
  crumbLabel,
  plans,
  availabilityOptions,
  locationOptions,
  priceMin,
  priceMax,
}: ServerListingProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([priceMin, priceMax]);
  const [availability, setAvailability] = useState<string[]>([availabilityOptions[0]].filter(Boolean));
  const [locations, setLocations] = useState<string[]>([]);
  const [sections, setSections] = useState({ pricing: true, availability: true, location: true });

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const filtered = useMemo(() => {
    return plans.filter((plan) => {
      if (plan.price < priceRange[0] || plan.price > priceRange[1]) return false;
      if (availability.length > 0 && !availability.includes(plan.availability)) return false;
      if (locations.length > 0 && !locations.includes(plan.location)) return false;
      return true;
    });
  }, [plans, priceRange, availability, locations]);

  const activeFilters = [...availability, ...locations];

  return (
    <section className="bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-slate-400 text-sm px-4 py-2"
        >
          <ChevronLeft className="w-4 h-4" />
          {backLabel}
          <span className="w-1 h-1 bg-slate-700" />
          <span className="text-slate-300 font-medium">{crumbLabel}</span>
        </Link>

        <div className="mt-8 flex items-center gap-2 text-slate-400 text-sm font-semibold tracking-wide uppercase">
          <span className="w-7 h-7 bg-blue-600 flex items-center justify-center">
            <Tag className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </span>
          {eyebrow}
        </div>

        <h1 className="mt-3 text-4xl md:text-5xl font-black text-white">{title}</h1>

        <div className="mt-8 border-t border-slate-800" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <aside className="space-y-4">
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 lg:hidden">
                {activeFilters.map((f) => (
                  <FilterChip
                    key={f}
                    label={f}
                    onRemove={() => {
                      toggle(availability, setAvailability, f);
                      toggle(locations, setLocations, f);
                    }}
                  />
                ))}
              </div>
            )}

            <FilterSection
              label="Pricing"
              open={sections.pricing}
              onToggle={() => setSections((s) => ({ ...s, pricing: !s.pricing }))}
            >
              <div className="px-1 pt-2">
                <div className="relative h-1 bg-slate-800">
                  <div
                    className="absolute h-1 bg-blue-600"
                    style={{
                      left: `${((priceRange[0] - priceMin) / (priceMax - priceMin)) * 100}%`,
                      right: `${100 - ((priceRange[1] - priceMin) / (priceMax - priceMin)) * 100}%`,
                    }}
                  />
                  <input
                    type="range"
                    min={priceMin}
                    max={priceMax}
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Math.min(Number(e.target.value), priceRange[1]), priceRange[1]])
                    }
                    className="range-slider"
                  />
                  <input
                    type="range"
                    min={priceMin}
                    max={priceMax}
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0])])
                    }
                    className="range-slider"
                  />
                </div>
                <div className="flex justify-between mt-4 text-sm text-slate-300">
                  <span className="bg-slate-900 border border-slate-800 px-3 py-1.5">€{priceRange[0]}</span>
                  <span className="bg-slate-900 border border-slate-800 px-3 py-1.5">€{priceRange[1]}</span>
                </div>
              </div>
            </FilterSection>

            <FilterSection
              label="Availability"
              open={sections.availability}
              onToggle={() => setSections((s) => ({ ...s, availability: !s.availability }))}
            >
              <div className="flex flex-wrap gap-2">
                {availabilityOptions.map((opt) => (
                  <OptionChip
                    key={opt}
                    label={opt}
                    active={availability.includes(opt)}
                    onClick={() => toggle(availability, setAvailability, opt)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection
              label="Location"
              open={sections.location}
              onToggle={() => setSections((s) => ({ ...s, location: !s.location }))}
            >
              <div className="flex flex-wrap gap-2">
                {locationOptions.map((opt) => (
                  <OptionChip
                    key={opt}
                    label={opt}
                    active={locations.includes(opt)}
                    onClick={() => toggle(locations, setLocations, opt)}
                  />
                ))}
              </div>
            </FilterSection>
          </aside>

          <div className="space-y-4">
            {filtered.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative bg-slate-900 border p-6 ${
                  index === 0 ? "border-blue-600" : "border-slate-800"
                }`}
              >
                {plan.savePercent && (
                  <span className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1">
                    Save {plan.savePercent}%
                  </span>
                )}

                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{plan.title}</h3>
                    <span className="inline-block mt-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1">
                      {plan.availability}
                    </span>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <div className="text-slate-300">
                        <span className="font-bold text-white">cpu:</span> {plan.cpu}
                      </div>
                      <div className="text-slate-300">
                        <span className="font-bold text-white">ram:</span> {plan.ram}
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end justify-between gap-3">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm text-slate-400">month</span>
                      <span className="text-3xl font-black text-white">€{plan.price}</span>
                    </div>
                    <a
                      href={plan.href}
                      className="bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-semibold px-6 py-2.5"
                    >
                      Select
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="text-center text-slate-500 py-16 border border-dashed border-slate-800">
                No servers match the selected filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterSection({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5">
      <button onClick={onToggle} className="w-full flex items-center justify-between text-white font-semibold">
        {label}
        {open ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}

function OptionChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 text-sm px-3 py-1.5 border transition-colors ${
        active
          ? "bg-blue-600 border-blue-600 text-white"
          : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
      }`}
    >
      {label}
      {active && <X className="w-3.5 h-3.5" />}
    </button>
  );
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <button
      onClick={onRemove}
      className="flex items-center gap-1.5 text-sm px-3 py-1.5 bg-blue-600 text-white"
    >
      {label}
      <X className="w-3.5 h-3.5" />
    </button>
  );
}
