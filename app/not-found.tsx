"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaHouse,
  FaArrowLeft,
  FaCode,
  FaDiscord,
  FaArrowRight,
  FaCompass,
} from "react-icons/fa6";

const QUICK_LINKS = [
  { href: "/services/fivem-development", label: "FiveM Development" },
  { href: "/services/discord-bots", label: "Discord Bots" },
  { href: "/services/custom-integrations", label: "Integrations" },
  { href: "/process", label: "Our Process" },
];

export default function NotFoundPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white antialiased flex items-center justify-center overflow-hidden">

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-24">
        <div
          className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Big 404 */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center text-[140px] sm:text-[180px] font-extrabold tracking-tighter text-blue-500/10 blur-2xl select-none"
            >
              404
            </span>
            <span className="relative text-[100px] sm:text-[140px] font-extrabold tracking-tighter leading-none bg-gradient-to-b from-white via-slate-300 to-slate-600 bg-clip-text text-transparent select-none">
              404
            </span>
          </div>

          {/* Divider dot */}
          <div className="mt-2 mb-8 flex items-center gap-2">
            <span className="h-px w-8 bg-white/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="h-px w-8 bg-white/10" />
          </div>

          {/* Message */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
            This page doesn&rsquo;t exist
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-md">
            It may have been moved, renamed, or never built in the first place.
            Let&rsquo;s get you back on track.
          </p>

          {/* Primary actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors w-full sm:w-auto"
            >
              <FaHouse className="w-3.5 h-3.5" />
              Back to Home
              <FaArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-white/15 text-slate-200 text-sm font-semibold hover:bg-white/5 transition-colors w-full sm:w-auto"
            >
              <FaCode className="w-3.5 h-3.5 text-blue-500" />
              View Services
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-14 w-full">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              <FaCompass className="w-3 h-3" />
              Try these instead
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-xs font-medium text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-white/[0.04] transition-all text-center"
                >
                  <span className="truncate">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer strip */}
          <div className="mt-14 w-full pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-1.5 hover:text-slate-300 transition-colors"
            >
              <FaArrowLeft className="w-3 h-3" />
              Go back
            </button>

            <div className="flex items-center gap-1.5">
              <span>Need a hand?</span>
              <Link
                href="/contact"
                className="text-blue-500 hover:text-blue-400 transition-colors font-medium"
              >
                Contact support
              </Link>
              <span className="text-slate-700">·</span>
              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-400 transition-colors font-medium"
              >
                <FaDiscord className="w-3.5 h-3.5" />
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}