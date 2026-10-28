import Link from "next/link";
import { FaCode, FaArrowRight, FaGlobe, FaCheck } from "react-icons/fa6";

export default function WebDevHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="min-h-screen relative max-w-6xl mx-auto px-4 sm:px-7 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-300">
              <FaGlobe className="w-3.5 h-3.5 text-blue-500" />
              Web Development
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
              Websites that{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                actually convert
              </span>
            </h1>

            <p className="mt-6 text-base lg:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 text-balance">
              Marketing sites, dashboards, and web apps built with Next.js and
              React — fast by default, accessible out of the box, and easy for
              your team to update without touching code.
            </p>

            {/* Feature ticks */}
            <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-lg mx-auto lg:mx-0 text-left">
              {[
                "Next.js & React",
                "SEO & Core Web Vitals",
                "Fully responsive & accessible",
                "Headless CMS integration",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-slate-300"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 flex-shrink-0">
                    <FaCheck className="w-2.5 h-2.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors w-full sm:w-auto"
              >
                <FaGlobe className="w-4 h-4" />
                Start a project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-white/15 text-slate-200 text-sm font-semibold hover:bg-white/5 transition-colors w-full sm:w-auto"
              >
                <FaCode className="w-4 h-4 text-blue-500" />
                See all services
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center order-first lg:order-last">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="absolute w-[640px] h-[640px] sm:w-[420px] sm:h-[420px] rounded-full bg-blue-500/20 blur-3xl opacity-50"
            />
            {/* Card frame */}
            <div className="relative w-[600px] h-[600px] rounded-[2.5rem] flex items-center justify-center p-6">
              <img
                src="https://png.cleanpng.com/downloadpng/a3694969a32a9789eafc193d40a29a05/L33tc3F7ggQwamNpfKY8NHO3QrXsVvU4bWMAftUEMULkQoG3WPU5QZYziNDw.png"
                alt="Web development illustration"
                className="w-full h-full object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}