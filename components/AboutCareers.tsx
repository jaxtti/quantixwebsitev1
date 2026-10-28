import Link from "next/link";
import { FaBriefcase, FaGamepad, FaArrowRight } from "react-icons/fa6";

const ROLES = [
  {
    title: "FiveM Developer",
    type: "Contract · Remote",
    desc: "Lua, C#, and NUI experience. Comfortable with ESX, QBCore, or ox frameworks.",
  },
  {
    title: "Discord Bot Developer",
    type: "Contract · Remote",
    desc: "Node.js/TypeScript with discord.js. Experience with slash commands, dashboards, and scale.",
  },
  {
    title: "Full-Stack Developer",
    type: "Contract · Remote",
    desc: "Next.js, React, and a modern backend. You care about performance and accessibility.",
  },
];

export default function CareersSection() {
  return (
    <section id="careers" className="relative py-16 md:py-24 border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-300">
            <FaBriefcase className="w-3.5 h-3.5 text-blue-500" />
            Careers
          </div>
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white mb-4">
            Build with us
          </h2>
          <p className="text-white/40 text-[15px] max-w-xl mx-auto leading-relaxed">
            We&rsquo;re always open to developers who care about the craft.
            Contract, remote, and project-based.
          </p>
        </div>

        <div className="space-y-3">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex-shrink-0">
                  <FaGamepad className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-base font-semibold text-white">
                      {role.title}
                    </h3>
                    <span className="text-xs text-gray-500">{role.type}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-400 leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </div>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full border border-white/15 text-slate-200 text-sm font-semibold hover:bg-white/5 transition-colors flex-shrink-0"
              >
                Apply
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don&rsquo;t see your role?{" "}
          <Link
            href="/contact"
            className="text-blue-500 hover:text-blue-400 transition-colors font-medium"
          >
            Get in touch
          </Link>{" "}
          — we&rsquo;re always interested in good people.
        </p>
      </div>
    </section>
  );
}