import { Music2, ShieldCheck, TicketIcon } from "lucide-react";
import { FaCode } from "react-icons/fa6";

const COMMAND_ROWS = [
  {
    commands: [
      "/ban", "/kick", "/softban", "/timeout", "/untimeout", "/warn", "/warnings", "/clear", "/lock", "/unlock", "/jail", "/unjail", "/nickname", "/slowmode",
    ],
    duration: "40s",
    reverse: false,
  },
  {
    commands: [
      "/close", "/note", "/notes", "/case", "/modlog", "/history", "/reason", "/avatar", "/userinfo", "/serverinfo", "/roleinfo", "/ping", "/invite", "/snipe",
    ],
    duration: "46s",
    reverse: true,
  },
  {
    commands: [
      "/help", "/profile", "/rank", "/leaderboard", "/balance", "/daily", "/giveaway", "/poll", "/remind", "/birthday", "/welcome", "/ai ask",
    ],
    duration: "52s",
    reverse: false,
  },
];

function CommandPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/[.04] px-4 py-1.5 text-sm text-gray-400">
      {children}
    </span>
  );
}

function MarqueeRow({
  commands,
  duration,
  reverse,
}: {
  commands: string[];
  duration: string;
  reverse: boolean;
}) {
  return (
    <div
      className="flex overflow-hidden py-2 marquee-mask"
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={`marquee-track flex shrink-0 gap-2 pr-2 ${
            reverse ? "marquee-reverse" : ""
          }`}
          style={{ animationDuration: duration }}
        >
          {commands.map((cmd) => (
            <CommandPill key={`${copy}-${cmd}`}>{cmd}</CommandPill>
          ))}
        </div>
      ))}
    </div>
  );
}

const CARD =
  "relative bg-white/[0.02] rounded-2xl border border-white/[0.06] " +
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] " +
  "p-6";

export default function DiscordBotFeatures() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />

      {/* Marquee keyframes + side fade mask */}
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation-name: marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: normal;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            black 8%,
            black 92%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            black 8%,
            black 92%,
            transparent 100%
          );
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Everything Your Server Needs
          </h2>
          <p className="text-white/40 text-[15px] max-w-xl mx-auto leading-relaxed">
            Arachnid brings moderation, music, and support tools together in one fast, reliable bot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className={CARD}>
            <h3 className="text-xl text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="text-blue-500 w-5 h-5" />
              Advanced Moderation
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Automatic spam, raid, and link filtering keeps your server clean without lifting a finger.
            </p>
            <div className="space-y-2 mt-4">
              {["Anti-Spam", "Anti-Raid", "Auto-Mod Filters"].map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 border border-white/[0.04]"
                >
                  <span className="text-sm text-gray-300">{label}</span>
                  <span className="flex items-center gap-1.5 text-[10px] tracking-wide text-green-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    ON
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={CARD}>
            <h3 className="text-xl text-white mb-3 flex items-center gap-2">
              <Music2 className="text-blue-500 w-5 h-5" />
              24/7 Music
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              High-quality, uninterrupted music streaming from all your favorite platforms.
            </p>
            <div className="bg-white/5 rounded-xl p-3 mt-4 border border-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Music2 className="text-blue-500 w-4 h-4" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="h-1.5 w-3/4 bg-white/15 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-blue-500 rounded-full" />
              </div>
              <div className="flex justify-between mt-1.5 text-[9px] font-mono text-gray-500">
                <span>1:42</span>
                <span>2:31</span>
              </div>
            </div>
          </div>

          <div className={CARD}>
            <h3 className="text-xl text-white mb-3 flex items-center gap-2">
              <TicketIcon className="text-blue-500 w-5 h-5" />
              Ticket System
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Give members a direct line to your staff with a fully managed, one-click ticket panel.
            </p>
            <div className="bg-white/5 rounded-xl overflow-hidden mt-4 border border-white/[0.04]">
              <div className="flex border-b border-white/[0.06] bg-white/[0.02]">
                <div className="px-4 py-2 text-xs font-mono text-blue-500 border-b-2 border-blue-500/60">
                  Open
                </div>
                <div className="px-4 py-2 text-xs font-mono text-gray-500">
                  Closed
                </div>
              </div>
              <div className="p-3 space-y-2">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-950/60 border border-blue-500/20 shrink-0" />
                    <div className="flex-1 space-y-1">
                      <div className="h-1.5 w-2/3 bg-white/15 rounded-full" />
                      <div className="h-1.5 w-1/3 bg-white/10 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={CARD + " mt-8"}>
          <h3 className="text-xl text-white mb-3 flex items-center gap-2">
            <FaCode className="text-blue-500 w-5 h-5" />
            Hefty List of Commands
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4 max-w-2xl">
            Your members, staff, and owners have a hefty advanced list of commands, yet super easy to execute. We designed every command to be easy to use, yet have as many features as humanly possible.
          </p>

          <div className="mt-4 -mx-6">
            {COMMAND_ROWS.map((row, i) => (
              <MarqueeRow key={i} {...row} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}