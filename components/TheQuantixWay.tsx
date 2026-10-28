import Link from "next/link";
import {
  FaComments,
  FaPenRuler,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";

const PHASES = [
  {
    id: "communicate",
    number: "01",
    title: "Communicate",
    icon: FaComments,
    tagline: "We start by listening.",
    description:
      "Every project begins with a conversation, not a template. We take the time to understand your goals, your community, your constraints, and what success actually looks like for you.",
    points: [
      "Discovery call to map goals, scope, and timeline",
      "Clear written spec before any code is written",
      "A single point of contact throughout the project",
      "Regular check-ins so nothing is a surprise",
    ],
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    icon: FaPenRuler,
    tagline: "We plan before we build.",
    description:
      "Good software is designed, not improvised. We map out architecture, user flows, and interfaces so the build phase is focused — and you know what you're getting before it exists.",
    points: [
      "System architecture and data flow planning",
      "UI/UX mockups reviewed with you before build",
      "Tech stack chosen for your needs, not our habits",
      "Edge cases and scale considered up front",
    ],
  },
  {
    id: "develop",
    number: "03",
    title: "Develop",
    icon: FaCode,
    tagline: "We build it right.",
    description:
      "This is where it gets real. We write clean, maintainable code, test as we go, and keep you in the loop with staging builds you can actually try before launch.",
    points: [
      "Iterative builds with staging access for you",
      "Code reviews and testing baked into every step",
      "Performance and security handled from day one",
      "Documentation written alongside the code",
    ],
  },
  {
    id: "deliver",
    number: "04",
    title: "Deliver",
    icon: FaRocket,
    tagline: "We ship, and we stay.",
    description:
      "Launch isn't the finish line. We deploy, hand over cleanly, and stick around for tuning, fixes, and whatever comes next — because a project is only done when it's working for you.",
    points: [
      "Smooth deployment with zero-downtime handover",
      "Full documentation and walkthrough for your team",
      "Post-launch support window included",
      "Ongoing maintenance and feature work available",
    ],
  },
];

export default function ProcessPage() {
  return (
    <main id="process" className="relative bg-slate-950 text-slate-100">
      {/* Top gradient border: transparent → #00b8ff → transparent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #2b7fff 50%, transparent 100%)",
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-7 pt-32 pb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            Our Process
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
            The same four phases on every project
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-400 max-w-2xl mx-auto text-balance">
            No matter the size or scope, every project we take on moves through
            the same proven process. It keeps expectations clear, quality high,
            and surprises to zero.
          </p>
        </div>
      </section>

      {/* Phase strip */}
      <section className="max-w-5xl mx-auto px-4 sm:px-7 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PHASES.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-6 hover:bg-slate-900 hover:border-blue-500/40 transition-colors"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                <p.icon className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-slate-500">{p.number}</span>
              <span className="text-sm font-semibold text-slate-200">
                {p.title}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Phases */}
      <section className="max-w-5xl mx-auto px-4 sm:px-7 pb-24 space-y-6">
        {PHASES.map((phase, i) => (
          <article
            key={phase.id}
            id={phase.id}
            className="scroll-mt-28 rounded-3xl border border-white/10 bg-slate-900/50 overflow-hidden"
          >
            <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 p-6 md:p-10">
              {/* Icon + number */}
              <div className="flex md:flex-col items-center md:items-start gap-4">
                <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex-shrink-0">
                  <phase.icon className="w-6 h-6" />
                </div>
                <span className="text-3xl md:text-4xl font-bold text-white/5 font-mono select-none">
                  {phase.number}
                </span>
              </div>

              {/* Body */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {phase.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-blue-500">
                  {phase.tagline}
                </p>
                <p className="mt-4 text-sm md:text-base leading-7 text-slate-300 max-w-2xl">
                  {phase.description}
                </p>

                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {phase.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 flex-shrink-0">
                        <FaCheck className="w-2.5 h-2.5" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Connector line */}
            {i < PHASES.length - 1 && (
              <div className="hidden md:flex justify-center pb-0">
                <div className="w-px h-6 bg-gradient-to-b from-blue-500/40 to-transparent -mb-6" />
              </div>
            )}
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-7 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to start the first phase?
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Tell us what you're building. The first conversation is always free,
            and there's no commitment until you've seen the plan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-blue-500 text-slate-950 text-sm font-semibold hover:bg-[#33c7ff] transition-colors"
            >
              Start a project
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/services"
              className="flex items-center justify-center h-11 px-6 rounded-full border border-white/15 text-slate-200 text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}