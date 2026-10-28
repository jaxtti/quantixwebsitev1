"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaDiscord,
  FaBars,
  FaXmark,
  FaChevronDown,
  FaCode,
  FaRobot,
  FaCloud,
  FaPaintbrush,
  FaGear,
} from "react-icons/fa6";

const FIVEM_ICON =
  "https://fivem-vscode.gallerycdn.vsassets.io/extensions/fivem-vscode/fivem-vscode/0.3.3/1703955664896/Microsoft.VisualStudio.Services.Icons.Default";

type Service = {
  href: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }> | string;
};

const SERVICES: Service[] = [
  { href: "/services/discord-bots", label: "Discord Bots", icon: FaRobot, description: "Fast Discord Bots with lots of commands" },
  { href: "/services/fivem-development", label: "FiveM Development", icon: FIVEM_ICON, description: "Custom, fully developed, FiveM servers" },
  { href: "/services/website-development", label: "Website Development", icon: FaCode, description: "Custom, brandable, and SEO ready sites" },
];

/**
 * Renders a service icon. Raster images are masked so they inherit
 * `currentColor`, matching the tint of the Font Awesome icons.
 */
function ServiceIcon({
  icon,
  className,
}: {
  icon: Service["icon"];
  className?: string;
}) {
  if (typeof icon === "string") {
    return (
      <span
        aria-hidden="true"
        className={`block bg-current ${className ?? ""}`}
        style={{
          maskImage: `url(${icon})`,
          WebkitMaskImage: `url(${icon})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    );
  }
  const Icon = icon;
  return <Icon className={className} />;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`mx-auto transition-all duration-300 ease-out ${
          scrolled
            ? "mt-3 max-w-3xl rounded-full bg-slate-900/80 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/20 px-4 sm:px-6"
            : "mt-0 max-w-7xl rounded-none bg-transparent border-transparent px-4 sm:px-7"
        }`}
      >
        <nav
          className={`flex items-center justify-between gap-4 transition-all duration-300 ${
            scrolled ? "py-2" : "py-4"
          }`}
        >
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                alt="Quantix Labs"
                src="/quantix3.png"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-6" : "h-7"
                }`}
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              <NavLink href="/">Home</NavLink>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    servicesOpen
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Services
                  <FaChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="w-[320px] rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl p-2">
                    <div className="grid grid-cols-1 gap-0.5">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
                        >
                          <span className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                            <ServiceIcon icon={s.icon} className="w-4 h-4" />
                          </span>
                          <span className="flex flex-col">
                            <span className="text-sm font-medium text-slate-100">
                              {s.label}
                            </span>
                            <span className="text-xs text-slate-400">
                              {s.description}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <NavLink href="/#process">Our Process</NavLink>
              <NavLink href="/about#team">Team</NavLink>
              <NavLink href="/about#careers">Careers</NavLink>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/pricing"
              className={`hidden sm:flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold transition-all duration-300 hover:bg-blue-500 ${
                scrolled ? "h-9 px-4 rounded-full" : "h-10 px-5 rounded-full"
              }`}
            >
              <FaDiscord className="w-5 h-5" />
              <span className="hidden lg:inline">Join Discord</span>
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-slate-200 hover:bg-white/10 transition-colors"
            >
              {menuOpen ? (
                <FaXmark className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute left-4 right-4 top-20 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl p-4 transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            <MobileNavLink href="/" onClick={() => setMenuOpen(false)}>
              Home
            </MobileNavLink>

            {/* Mobile Services accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
              >
                Services
                <FaChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-2 pb-1 flex flex-col gap-0.5">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0">
                        <ServiceIcon icon={s.icon} className="w-3.5 h-3.5" />
                      </span>
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <MobileNavLink href="/process" onClick={() => setMenuOpen(false)}>
              Our Process
            </MobileNavLink>
            <MobileNavLink href="/team" onClick={() => setMenuOpen(false)}>
              Team
            </MobileNavLink>
            <MobileNavLink href="/careers" onClick={() => setMenuOpen(false)}>
              Careers
            </MobileNavLink>
          </div>
          <a
            href="/pricing"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 h-11 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors"
          >
            <FaDiscord className="w-5 h-5" />
            Join Discord
          </a>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
    >
      {children}
    </Link>
  );
}