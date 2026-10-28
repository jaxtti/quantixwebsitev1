import { AlignJustify, Square, LayoutGrid, ScanLine, CheckSquare } from "lucide-react";

type Plan = {
  name: string;
  icon: React.ElementType;
  specs: string[];
  price: string;
};

const PLANS: Plan[] = [
  {
    name: "Cloud VPS 4",
    icon: AlignJustify,
    specs: ["4 vcpu cores", "8 gb ram", "100 gb ssd"],
    price: "5",
  },
  {
    name: "Cloud VPS 6",
    icon: Square,
    specs: ["6 vcpu cores", "12 gb ram", "200 gb ssd"],
    price: "6",
  },
  {
    name: "Cloud VPS 8",
    icon: LayoutGrid,
    specs: ["8 vcpu cores", "24 gb ram", "300 gb ssd"],
    price: "7",
  },
  {
    name: "Cloud VPS 12",
    icon: ScanLine,
    specs: ["12 vcpu cores", "48 gb ram", "400 gb ssd"],
    price: "8",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-1 mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white">Honest hosting</h2>
          <p className="text-3xl md:text-4xl font-black text-slate-500">all year round</p>
        </div>

        <div className="border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="border border-slate-800 bg-slate-900 p-6 flex flex-col"
              >
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                  <plan.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-white">{plan.name}</h3>

                <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
                  {plan.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckSquare className="w-4 h-4 text-blue-500 shrink-0" strokeWidth={2.5} />
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-baseline gap-1.5">
                  <span className="text-sm text-slate-400">from</span>
                  <span className="text-2xl font-black text-white">€{plan.price}</span>
                </div>

                <a
                  href="/order"
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-semibold text-center py-2.5"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
