import Link from "next/link";
import {
  FaDiscord,
  FaXTwitter,
  FaGithub,
  FaArrowRight,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaBitcoin,
} from "react-icons/fa6";

const columns = [
  {
    title: "Services",
    links: [
      { label: "FiveM Development", href: "/services/fivem-development" },
      { label: "Discord Bots", href: "/services/discord-bots" },
      { label: "Discord Integrations", href: "/services/custom-integrations" },
      { label: "System & Assets", href: "/services/custom-dashboards" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/process" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Server Status", href: "https://status.heightnodes.com", external: true },
      { label: "Knowledge Base", href: "/knowledge-base" },
      { label: "API Documentation", href: "/api-docs" },
      { label: "Discord", href: "https://discord.gg/", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Abuse", href: "/abuse" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-7">
        {/* Brand row */}
        <div className="mt-12 flex flex-col items-center text-center gap-4 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              alt=""
              src="/quantix3.png"
              className="h-7 w-auto object-contain"
            />
          </Link>

          <span className="text-sm text-slate-500">
            © {currentYear} Quantix Labs
          </span>
        </div>

        {/* Payments + social */}
        <div className="mt-8 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="flex items-center justify-center w-9 h-9 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FaDiscord className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="flex items-center justify-center w-9 h-9 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-9 h-9 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}