// app/contact/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import {
  FaDiscord,
  FaEnvelope,
  FaArrowRight,
  FaClock,
  FaHeadset,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact | Quantix Labs",
  description:
    "Get in touch with Quantix Labs — the fastest way to reach us is Discord. Tell us about your FiveM, Discord bot, or web project.",
  openGraph: {
    type: "website",
    url: "https://quantixl.dev/contact",
    title: "Contact | Quantix Labs",
    description:
      "Get in touch with Quantix Labs — the fastest way to reach us is Discord. Tell us about your FiveM, Discord bot, or web project.",
    images: [{ url: "/embed.png", width: 1920, height: 1080, alt: "Embed Banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Quantix Labs",
    description:
      "Get in touch with Quantix Labs — the fastest way to reach us is Discord. Tell us about your FiveM, Discord bot, or web project.",
    images: ["/embed.png"],
  },
};

// TODO: replace with your real Discord invite + email
const DISCORD_INVITE = "https://discord.gg/";
const CONTACT_EMAIL = "aromadevlabs@gmail.com";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white antialiased flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-semibold uppercase tracking-widest text-slate-400">
            <FaHeadset className="w-3 h-3 text-blue-500" />
            We reply fast
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Let&rsquo;s{" "}
            <span className="bg-gradient-to-b from-white via-slate-300 to-slate-600 bg-clip-text text-transparent">
              talk
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-md">
            Tell us what you&rsquo;re building — a FiveM script, a Discord bot,
            a website, or all three. The fastest way to reach us is Discord.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="h-px w-8 bg-white/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="h-px w-8 bg-white/10" />
          </div>

          {/* Contact cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-500">
                <FaDiscord className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Join our Discord
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  Open a ticket — usually the same-day reply
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-500 group-hover:text-blue-400 transition-colors">
                Open Discord
                <FaArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-500">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Email us</div>
                <div className="mt-1 text-xs text-slate-400">
                  For quotes, partnerships, and anything else
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-500 group-hover:text-blue-400 transition-colors">
                {CONTACT_EMAIL}
              </span>
            </a>
          </div>

          {/* Footer strip */}
          <div className="mt-14 w-full pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-500">
            <FaClock className="w-3 h-3" />
            <span>
              Most messages get a reply within a few hours. Check{" "}
              <Link
                href="/process"
                className="text-blue-500 hover:text-blue-400 transition-colors font-medium"
              >
                our process
              </Link>{" "}
              to see how a project runs.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
