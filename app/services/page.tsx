// app/services/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import {
  FaCar,
  FaDiscord,
  FaGlobe,
  FaPlug,
  FaArrowRight,
  FaCode,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Services | Quantix Labs",
  description:
    "FiveM scripts, Discord bots, websites, and custom integrations — built to order by Quantix Labs.",
  openGraph: {
    type: "website",
    url: "https://quantixl.dev/services",
    title: "Services | Quantix Labs",
    description:
      "FiveM scripts, Discord bots, websites, and custom integrations — built to order by Quantix Labs.",
    images: [{ url: "/embed.png", width: 1920, height: 1080, alt: "Embed Banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Quantix Labs",
    description:
      "FiveM scripts, Discord bots, websites, and custom integrations — built to order by Quantix Labs.",
    images: ["/embed.png"],
  },
};

const SERVICES = [
  {
    href: "/services/fivem-development",
    icon: FaCar,
    title: "FiveM Development",
    description:
      "Custom scripts, frameworks, and full server builds. Optimized, secure, and made to fit your city.",
  },
  {
    href: "/services/discord-bots",
    icon: FaDiscord,
    title: "Discord Bots",
    description:
      "Moderation, tickets, economy, whitelisting — bots built around your community, not a template.",
  },
  {
    href: "/services/website-development",
    icon: FaGlobe,
    title: "Website Development",
    description:
      "Fast, modern sites and dashboards that look sharp and convert — from landing pages to full apps.",
  },
  {
    href: "/services/custom-integrations",
    icon: FaPlug,
    title: "Custom Integrations",
    description:
      "APIs, webhooks, and glue code that connect your bot, server, and site into one system.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white antialiased overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-semibold uppercase tracking-widest text-slate-400">
            <FaCode className="w-3 h-3 text-blue-500" />
            What we build
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-b from-white via-slate-300 to-slate-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl">
            Everything is built custom, from scratch, for your project. Pick a
            service to see what&rsquo;s included.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="h-px w-8 bg-white/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="h-px w-8 bg-white/10" />
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-500">
                  <service.icon className="w-5 h-5" />
                </div>
                <FaArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {service.title}
                </h2>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center text-center gap-4 pt-10 border-t border-white/[0.06]">
          <p className="text-sm text-slate-400">
            Not sure which one fits? Tell us what you&rsquo;re building.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
          >
            Get in touch
            <FaArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
}
