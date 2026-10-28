"use client";

import { useEffect, useState } from "react";
import { FaChevronRight, FaDiscord } from "react-icons/fa6";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen bg-slate-950">
      <div className="min-h-screen relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10 py-16 sm:py-24">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white text-balance">
            Engineered beyond
            <span className="block text-blue-500">expectations</span>
          </h1>
          <p className="mt-5 max-w-md text-slate-400 text-base leading-relaxed">
            Every server, script, or website we develop goes through a specific process. We communicate and design according to your needs and wants. Opportunities are endless here.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "FiveM server development",
              "Discord Bots and Dashboards",
              "Website development & more",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                <span className="flex-shrink-0 h-4 w-4 bg-blue-600" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://heightnodes.com/"
              className="inline-flex items-center gap-2 bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              <FaDiscord className="w-5 h-5" /> Join our Discord
            </a>
            <a
              href="https://discord.gg/heightnodes"
              className="inline-flex items-center gap-2 border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-900 transition-colors"
            >
              Our Services <FaChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/vscodehero.png"
            alt="Three HeightNodes server modules"
            className="w-full max-w-[460px] sm:max-w-[460px] h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}
