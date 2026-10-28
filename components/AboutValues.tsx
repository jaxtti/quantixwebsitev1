import { FaLightbulb, FaHandshake, FaHeart } from "react-icons/fa6";

const VALUES = [
  {
    icon: FaLightbulb,
    title: "Built to last",
    desc: "We write code your next developer can read. No shortcuts that turn into rewrites.",
  },
  {
    icon: FaHandshake,
    title: "Direct communication",
    desc: "You talk to the people building your project — not a middle layer.",
  },
  {
    icon: FaHeart,
    title: "Pride in the work",
    desc: "We only ship things we'd be happy to put our name on.",
  },
];

const CARD =
  "relative bg-white/[0.02] rounded-2xl border border-white/[0.06] " +
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] p-6";

export default function ValuesSection() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            What we stand for
          </h2>
          <p className="text-white/40 text-[15px] max-w-xl mx-auto leading-relaxed">
            Three things that haven&rsquo;t changed since day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {VALUES.map((v) => (
            <div key={v.title} className={CARD}>
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500">
                <v.icon className="w-4 h-4" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">
                {v.title}
              </h3>
              <p className="mt-1.5 text-sm text-gray-400 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}