// app/services/custom-integrations/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import {
  FaPlug,
  FaArrowRight,
  FaBolt,
  FaDatabase,
  FaShieldHalved,
  FaRotate,
  FaCheck,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Custom Integrations | Quantix Labs",
  description:
    "APIs, webhooks, and automations that connect your Discord bot, FiveM server, and website into one system. Built custom by Quantix Labs.",
  openGraph: {
    type: "website",
    url: "https://quantixl.dev/services/custom-integrations",
    title: "Custom Integrations | Quantix Labs",
    description:
      "APIs, webhooks, and automations that connect your Discord bot, FiveM server, and website into one system. Built custom by Quantix Labs.",
    images: [{ url: "/embed.png", width: 1920, height: 1080, alt: "Embed Banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Integrations | Quantix Labs",
    description:
      "APIs, webhooks, and automations that connect your Discord bot, FiveM server, and website into one system. Built custom by Quantix Labs.",
    images: ["/embed.png"],
  },
};

const FEATURES = [
  {
    icon: FaBolt,
    title: "APIs & Webhooks",
    description:
      "REST APIs, webhook pipelines, and real-time events between your services — Discord, FiveM, web, anything with an endpoint.",
  },
  {
    icon: FaDatabase,
    title: "Data Sync",
    description:
      "Keep player data, whitelist status, and purchases in sync across your bot, server, and site automatically.",
  },
  {
    icon: FaShieldHalved,
    title: "Auth & Linking",
    description:
      "Discord OAuth, account linking, role-based access — one identity across your whole ecosystem.",
  },
  {
    icon: FaRotate,
    title: "Automations",
    description:
      "Scheduled jobs, payment hooks, Tebex integrations, and workflows that run themselves so you don't have to.",
  },
];

const INCLUDED = [
  "Full source code ownership",
  "Documentation for every endpoint",
  "Secure by default — rate limits & validation",
  "Post-launch support",
];

export default function CustomIntegrationsPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white antialiased overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-blue-500/10 text-blue-500">
            <FaPlug className="w-6 h-6" />
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Custom{" "}
            <span className="bg-gradient-to-b from-white via-slate-300 to-slate-600 bg-clip-text text-transparent">
              Integrations
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl">
            Your bot, your server, and your website shouldn&rsquo;t live in
            separate worlds. We build the glue that makes them one product.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="h-px w-8 bg-white/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="h-px w-8 bg-white/10" />
          </div>
        </div>

        {/* Features */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-500">
                <feature.icon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {feature.title}
                </h2>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Included */}
        <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Every project includes
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                  <FaCheck className="w-2.5 h-2.5" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center text-center gap-4 pt-10 border-t border-white/[0.06]">
          <p className="text-sm text-slate-400">
            Have two systems that need to talk to each other?
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              Start a project
              <FaArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-white/15 text-slate-200 text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              All services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
