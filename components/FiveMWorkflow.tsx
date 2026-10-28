import Link from "next/link";
import {
  FaComments,
  FaClipboardList,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";

const STEPS = [
  {
    number: "01",
    icon: FaComments,
    title: "Discovery",
    tagline: "We learn your server.",
    desc: "We dig into your framework, current resources, player count, and how your staff actually runs things. No assumptions — we look at what's already there.",
    bullets: ["Framework audit", "Resource review", "Goal alignment"],
  },
  {
    number: "02",
    icon: FaClipboardList,
    title: "Scoping",
    tagline: "We write the spec.",
    desc: "Every script gets a written spec: what it does, how it hooks into your framework, what data it touches, and what the player experience looks like.",
    bullets: ["Feature breakdown", "Data flow plan", "Timeline & milestones"],
  },
  {
    number: "03",
    icon: FaCode,
    title: "Build",
    tagline: "We ship it in stages.",
    desc: "You get staging access as we go, so you can test each system before the next one lands. Nothing gets bolted on at the end.",
    bullets: ["Staging builds", "Incremental review", "Performance profiling"],
  },
  {
    number: "04",
    icon: FaRocket,
    title: "Deploy",
    tagline: "We hand it over clean.",
    desc: "Full source, documentation, and a walkthrough for your staff. Then we stick around for tuning and fixes after launch.",
    bullets: ["Source handover", "Staff walkthrough", "Post-launch support"],
  },
];

const CARD =
  "relative bg-white/[0.02] rounded-2xl border border-white/[0.06] " +
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] " +
  "p-6";

export default function FiveMProcess() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            How a FiveM project runs
          </h2>
          <p className="text-white/40 text-[15px] max-w-xl mx-auto leading-relaxed">
            Every build follows the same four phases — so you always know
            what&rsquo;s happening and what comes next.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              <div className={CARD + " h-full"}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500">
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span className="text-2xl font-bold text-white/[0.06] font-mono select-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-blue-500">
                  {step.tagline}
                </p>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-1.5">
                  {step.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-2 text-xs text-gray-500"
                    >
                      <span className="flex items-center justify-center w-3.5 h-3.5 rounded-full bg-blue-500/10 text-blue-500 flex-shrink-0">
                        <FaCheck className="w-2 h-2" />
                      </span>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector arrow between cards */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 items-center justify-center w-4 h-4 text-white/15"
                >
                  <FaArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing CTA strip */}
        <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold text-white">
              Not sure which phase you&rsquo;re in?
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Tell us what you&rsquo;re building — we&rsquo;ll tell you what it takes.
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors flex-shrink-0"
          >
            Start a project
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}