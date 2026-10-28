import Link from "next/link";
import {
  FaComments,
  FaPenRuler,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";

const STEPS = [
  {
    number: "01",
    icon: FaComments,
    title: "Discover",
    tagline: "What the site needs to do.",
    desc: "We start with goals, audience, and content — not visuals. What should a visitor do? Who maintains it? What has to integrate?",
    bullets: ["Goal & audience mapping", "Content inventory", "Integration requirements"],
  },
  {
    number: "02",
    icon: FaPenRuler,
    title: "Design",
    tagline: "Wireframes before pixels.",
    desc: "Structure first, then visuals. You review the layout and flow before any polish — so feedback happens when it's cheap to change.",
    bullets: ["Sitemap & wireframes", "Visual design pass", "Responsive breakpoints"],
  },
  {
    number: "03",
    icon: FaCode,
    title: "Build",
    tagline: "Staging from day one.",
    desc: "You get a live staging URL as soon as the first page is up. Content gets loaded, CMS gets wired, and performance is measured as we go.",
    bullets: ["Next.js build", "CMS & content loading", "Lighthouse checks"],
  },
  {
    number: "04",
    icon: FaRocket,
    title: "Launch",
    tagline: "Then keep improving.",
    desc: "We deploy, hand over the CMS, and set up analytics. After launch we track real usage and iterate on what's actually working.",
    bullets: ["DNS & deploy", "CMS handover", "Analytics + iteration"],
  },
];

export default function WebDevProcess() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 lg:gap-16">
          {/* Sticky left header */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
              Our process
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">
              How a website gets built
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-sm">
              Four phases, the same on every project. Clear checkpoints, no
              surprises, and something you can click at every stage.
            </p>
            <Link
              href="/#process"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors"
            >
              See the full process
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  {/* Number + icon */}
                  <div className="flex sm:flex-col items-center sm:items-start gap-3 flex-shrink-0">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-500/10 text-blue-500">
                      <step.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-gray-600 sm:mt-1">
                      {step.number}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <span className="text-xs font-medium text-blue-500">
                        {step.tagline}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {step.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-xs text-gray-500"
                        >
                          <FaCheck className="w-2 h-2 text-blue-500/70" />
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}