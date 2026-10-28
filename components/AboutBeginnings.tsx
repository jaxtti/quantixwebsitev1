const MILESTONES = [
  {
    year: "2023",
    title: "Started with FiveM",
    desc: "Quantix Labs began as a small group of developers building custom FiveM resources for friends' servers — scripts that were actually clean, actually optimized.",
  },
  {
    year: "2024",
    title: "Expanded to Discord",
    desc: "As communities grew, so did the ask: custom bots, moderation tooling, and integrations that connected Discord to the game servers we were already building for.",
  },
  {
    year: "2025",
    title: "Full-stack development",
    desc: "We added websites, dashboards, and backend systems — the same standard of quality, applied to everything a community needs to run smoothly.",
  },
  {
    year: "Today",
    title: "A development partner",
    desc: "We now work with server owners and businesses on custom development, automation, and tailored systems — built to last, not just to ship.",
  },
];

const CARD =
  "relative bg-white/[0.02] rounded-2xl border border-white/[0.06] " +
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] p-6";

export default function BeginningsSection() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
              Our beginnings
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">
              How we got here
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-sm">
              We started by fixing things other people said were fine. That
              standard hasn&rsquo;t changed.
            </p>
          </div>

          <div className="space-y-4">
            {MILESTONES.map((m) => (
              <div key={m.year} className={CARD}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <span className="inline-flex items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-mono font-semibold text-blue-500 flex-shrink-0">
                    {m.year}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {m.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-400 leading-relaxed">
                      {m.desc}
                    </p>
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