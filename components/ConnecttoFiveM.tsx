import Link from "next/link";
import { FaDiscord, FaServer, FaKey, FaArrowRight, FaCheck } from "react-icons/fa6";

const STEPS = [
  {
    icon: FaDiscord,
    title: "Bot joins your Discord",
    desc: "Your bot is added to the guild with Member intents enabled, so it can read role data for anyone who links their Discord to FiveM.",
  },
  {
    icon: FaServer,
    title: "Roles map to ACE groups",
    desc: "We map your Discord roles to FiveM ACE groups — e.g. your @Admin role becomes group.admin, @Staff becomes group.mod.",
  },
  {
    icon: FaKey,
    title: "Permissions sync on connect",
    desc: "When a player connects, the bot checks their current Discord roles and grants or revokes the matching ACE principals automatically.",
  },
];

export default function FiveMConnectSection() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-300">
              <FaServer className="w-3.5 h-3.5 text-blue-500" />
              FiveM Integration
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-white text-balance">
              Connect the bot to FiveM
            </h2>

            <p className="mt-4 text-base text-gray-400 leading-relaxed max-w-lg">
              We set up Discord ACE permissions so your server&rsquo;s staff hierarchy lives in one place. Grant someone a role in Discord and they get the matching in-game powers — no manual SteamID or identifier wrangling.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Discord role → ACE group mapping",
                "Auto-grant and revoke on connect",
                "Works with vMenu, txAdmin, and custom permissions",
                "Manual /reload command for instant role refresh",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 flex-shrink-0">
                    <FaCheck className="w-2.5 h-2.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
              >
                <FaDiscord className="w-4 h-4" />
                Discuss your setup
              </Link>
              <Link
                href="/services/fivem-development"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-white/15 text-gray-200 text-sm font-semibold hover:bg-white/5 transition-colors"
              >
                FiveM services
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Steps card */}
          <div className="relative bg-white/[0.02] rounded-2xl border border-white/[0.06] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] p-6 sm:p-8">
            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex-shrink-0">
                      <step.icon className="w-4 h-4" />
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 mt-2 bg-white/10" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="text-sm font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <p className="text-xs text-gray-500 leading-relaxed">
                Requires players to have their Discord linked to their FiveM account via the Cfx.re connection flow. We configure everything — token, guild ID, and role mappings — so you don&rsquo;t touch a config file.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}