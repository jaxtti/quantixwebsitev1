import Link from "next/link";
import { FaUsers, FaRocket, FaDiscord } from "react-icons/fa6";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-7 pt-32 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-300">
          <FaUsers className="w-3.5 h-3.5 text-blue-500" />
          About Quantix Labs
        </div>

        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
          We build systems that{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            just work
          </span>
        </h1>

        <p className="mt-6 text-base lg:text-lg text-slate-400 max-w-2xl mx-auto text-balance">
          Quantix Labs is a professional development company focused on
          high-quality, reliable, and optimized digital solutions. We specialize
          in custom development, automation, and building systems tailored to
          your needs.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors w-full sm:w-auto"
          >
            <FaRocket className="w-4 h-4" />
            Start a project
          </Link>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-white/15 text-slate-200 text-sm font-semibold hover:bg-white/5 transition-colors w-full sm:w-auto"
          >
            <FaDiscord className="w-4 h-4 text-blue-500" />
            Join Discord
          </a>
        </div>
      </div>
    </section>
  );
}