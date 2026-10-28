import {
  FaCode,
  FaGaugeHigh,
  FaMagnifyingGlass,
  FaMobileScreen,
  FaPalette,
  FaDatabase,
  FaShieldHalved,
  FaArrowTrendUp,
  FaScrewdriverWrench,
} from "react-icons/fa6";

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

const FEATURES: Feature[] = [
  {
    icon: FaMagnifyingGlass,
    title: "SEO & Performance",
    desc: "Core Web Vitals, structured data, and SSR/ISR — fast for Google, faster for your users.",
  },
  {
    icon: FaMobileScreen,
    title: "Responsive & Accessible",
    desc: "Mobile-first, WCAG 2.1 AA, keyboard navigable — tested on real devices, not just resized.",
  },
  {
    icon: FaScrewdriverWrench,
    title: "Headless CMS",
    desc: "Sanity, Contentful, or a custom admin so your team edits content without touching code.",
  },
  {
    icon: FaPalette,
    title: "Design Systems",
    desc: "Component libraries and tokens so new pages take hours, not weeks.",
  },
  {
    icon: FaShieldHalved,
    title: "Security & Compliance",
    desc: "Auth, validation, and GDPR/cookie handling baked in from day one.",
  },
  {
    icon: FaArrowTrendUp,
    title: "Growth & Iteration",
    desc: "Analytics, A/B testing, and post-launch feature work — a site is never finished.",
  },
];

export default function WebDevFeatures() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
            What we build
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">
            Everything a modern website needs — nothing it doesn&rsquo;t
          </h2>
          <p className="text-white/40 text-[15px] leading-relaxed">
            From a landing page to a full web app, every build ships with the
            same foundations: speed, accessibility, and content you can edit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Featured card — spans two columns on lg */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.08] to-transparent p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/15 text-blue-500 flex-shrink-0">
                <FaCode className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Marketing Sites & Web Apps
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-md">
                  Landing pages, multi-page sites, internal dashboards, and
                  customer-facing apps — built with Next.js and React, with auth,
                  roles, APIs, and real-time updates wired in.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "APIs", "Auth"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slim "deploy" card that rounds out the top row */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 flex flex-col justify-between">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500">
              <FaDatabase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="mt-4 text-base font-semibold text-white">
                Data, wired up
              </h3>
              <p className="mt-1.5 text-sm text-gray-400 leading-relaxed">
                REST or GraphQL, real-time where it matters — no fake mockups
                pretending to be a product.
              </p>
            </div>
          </div>

          {/* Remaining cards — compact style */}
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/[0.1] transition-colors"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500/10 text-blue-500">
                <feature.icon className="w-4 h-4" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}