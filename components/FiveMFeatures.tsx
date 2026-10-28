import {
  FaGamepad,
  FaCar,
  FaBriefcase,
  FaUsers,
  FaPalette,
  FaGaugeHigh,
  FaDatabase,
  FaShieldHalved,
  FaCode,
} from "react-icons/fa6";

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  bullets: string[];
};

const FEATURES: Feature[] = [
  {
    icon: FaBriefcase,
    title: "Job & Economy Systems",
    desc: "Custom jobs, progression, and full economy loops built to fit your server's design — not forced into a template.",
    bullets: ["Legal & illegal jobs", "Skill trees & XP", "Dynamic payouts"],
  },
  {
    icon: FaCar,
    title: "Vehicles & Custom Assets",
    desc: "Custom vehicle handling, garages, dealerships, and asset pipelines — from imports to full custom models.",
    bullets: ["Handling & tuning", "Garage systems", "Custom liveries"],
  },
  {
    icon: FaUsers,
    title: "Gangs & Faction Systems",
    desc: "Territory, turf wars, faction reputation, and gang-specific mechanics built around how your community plays.",
    bullets: ["Turf & territory", "Faction reputation", "Alliances & wars"],
  },
  {
    icon: FaGamepad,
    title: "Gameplay Loops",
    desc: "Heists, robberies, racing, and minigames — tuned for replayability and balanced so nothing feels like a grind.",
    bullets: ["Heists & robberies", "Racing & time trials", "Custom minigames"],
  },
  {
    icon: FaPalette,
    title: "Custom NUI & Interfaces",
    desc: "React-based NUI menus, HUDs, and dashboards that feel native and stay smooth under load.",
    bullets: ["React + TypeScript", "Custom HUDs", "Inventory & phone UI"],
  },
  {
    icon: FaGaugeHigh,
    title: "Performance Tuning",
    desc: "Profiling, resmon optimization, and query cleanup so your server holds TPS even with a full lobby.",
    bullets: ["Resmon profiling", "Query optimization", "Event cleanup"],
  },
  {
    icon: FaDatabase,
    title: "Database & Backend",
    desc: "MySQL schemas, API endpoints, and backend services that keep your data consistent and your server snappy.",
    bullets: ["MySQL / oxmysql", "REST APIs", "Scheduled jobs"],
  },
  {
    icon: FaShieldHalved,
    title: "Anti-Cheat & Security",
    desc: "Event validation, exploit mitigation, and permission hardening so cheaters can't walk through your server.",
    bullets: ["Event validation", "Exploit hardening", "Permission audits"],
  },
  {
    icon: FaCode,
    title: "Framework Integration",
    desc: "Full support for ESX, QBCore, ox, and custom frameworks — we build on what you're already running.",
    bullets: ["ESX / QBCore / ox", "Custom frameworks", "Bridge layers"],
  },
];

const CARD =
  "relative bg-white/[0.02] rounded-2xl border border-white/[0.06] " +
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] " +
  "p-6";

export default function FiveMFeatures() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            What we can build for your server
          </h2>
          <p className="text-white/40 text-[15px] max-w-xl mx-auto leading-relaxed">
            From a single script to a full framework, everything is written for
            your server&rsquo;s design — not pulled from a store.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.title} className={CARD}>
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500">
                <feature.icon className="w-4 h-4" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {feature.desc}
              </p>

              <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-1.5">
                {feature.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-2 text-xs text-gray-500"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/60 flex-shrink-0" />
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}