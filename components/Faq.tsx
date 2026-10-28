"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

type FaqEntry = {
  q: string;
  a: string;
};

const FAQ: FaqEntry[] = [
  {
    q: "What services do you offer?",
    a: "We build FiveM resources and full server frameworks, custom Discord bots, Discord integrations for your game servers and tools, and complete system & asset packages — including deployment, backups, monitoring, and custom UI/art assets. If it touches your community's tech stack, we can build it.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A single Discord bot or FiveM script is usually a few days to a week. A full server framework or an integrated Discord + game system typically runs two to six weeks. You'll get a clear timeline in writing before we start — and we stick to it.",
  },
  {
    q: "Do you work with existing codebases?",
    a: "Yes. We regularly take over, extend, or refactor existing FiveM servers, Discord bots, and internal tools. We'll review your current setup first and give you an honest assessment of what's worth keeping, what needs fixing, and what should be rebuilt.",
  },
  {
    q: "What stack do you build on?",
    a: "We choose the right tools for the job, not our habits. For FiveM that means Lua, C# where it makes sense, and NUI with React/TypeScript. Discord bots are typically Node.js or TypeScript with discord.js. Websites, dashboards, and integrations use Next.js/React with a modern backend.",
  },
  {
    q: "What happens after delivery?",
    a: "Launch isn't the finish line. Every project includes a post-launch support window for tuning and fixes, and we hand over full documentation plus a walkthrough for your team. Ongoing maintenance and feature work are available if you want us to stay involved.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 bg-slate-950">
      {/* Top gradient border: transparent → #00b8ff → transparent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #2b7fff 50%, transparent 100%)",
        }}
      />
      {/* Simple alternative: replace the div above with a plain border
          by removing it and adding `border-t border-slate-800` to <section> */}

      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQs</h2>

        <div className="bg-slate-900 border border-slate-800 divide-y divide-slate-800 overflow-hidden">
          {FAQ.map((item, index) => (
            <div key={item.q}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-slate-800/60 transition-colors"
              >
                <span className="text-base font-semibold text-white">{item.q}</span>
                <FaChevronDown className={`flex-shrink-0 text-slate-500 transition-transform ${openIndex === index ? 'rotate-180 text-blue-500' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="https://billing.HeightNodes.com/submitticket.php" className="text-sm text-slate-400 hover:text-white underline underline-offset-4 transition-colors">
            Still need help? Get support
          </a>
        </div>
      </div>
    </section>
  );
}