// app/process/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import {
  FaCompass,
  FaComments,
  FaPenRuler,
  FaCode,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Our Process | Quantix Labs",
  description:
    "How Quantix Labs takes your project from idea to launch — scoping, design, development, and delivery with you in the loop at every step.",
  openGraph: {
    type: "website",
    url: "https://quantixl.dev/process",
    title: "Our Process | Quantix Labs",
    description:
      "How Quantix Labs takes your project from idea to launch — scoping, design, development, and delivery with you in the loop at every step.",
    images: [{ url: "/embed.png", width: 1920, height: 1080, alt: "Embed Banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process | Quantix Labs",
    description:
      "How Quantix Labs takes your project from idea to launch — scoping, design, development, and delivery with you in the loop at every step.",
    images: ["/embed.png"],
  },
};

const STEPS = [
  {
    icon: FaComments,
    step: "01",
    title: "Scope it out",
    description:
      "We hop in a ticket or call, figure out exactly what you need, and lock in a clear quote and timeline. No surprises later.",
  },
  {
    icon: FaPenRuler,
    step: "02",
    title: "Plan & design",
    description:
      "We map the features, sketch the UI if there is one, and agree on how everything should work before a line of code is written.",
  },
  {
    icon: FaCode,
    step: "03",
    title: "Build",
    description:
      "Development starts, with progress updates along the way. You see builds early and often so feedback lands while it's cheap to act on.",
  },
  {
    icon: FaRocket,
    step: "04",
    title: "Deliver & support",
    description:
      "We deploy, hand over the code, and stick around. Bugs in what we shipped get fixed — that's part of the deal.",
  },
];

export default function ProcessPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white antialiased overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-semibold uppercase tracking-widest text-slate-400">
            <FaCompass className="w-3 h-3 text-blue-500" />
            How we work
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-b from-white via-slate-300 to-slate-600 bg-clip-text text-transparent">
              Process
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl">
            Simple, transparent, and built around keeping you in the loop from
            first message to final delivery.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="h-px w-8 bg-white/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="h-px w-8 bg-white/10" />
          </div>
        </div>

        {/* Steps */}
        <div className="mt-14 flex flex-col gap-4">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="relative flex gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-500">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-600 tracking-widest">
                  {item.step}
                </span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center text-center gap-4 pt-10 border-t border-white/[0.06]">
          <p className="text-sm text-slate-400">
            Ready to start at step one?
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              Get in touch
              <FaArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-white/15 text-slate-200 text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
