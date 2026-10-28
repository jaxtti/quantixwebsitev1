import Image from "next/image";
import { FaDiscord, FaCode, FaGear } from "react-icons/fa6";

const FIVEM_ICON =
  "https://fivem-vscode.gallerycdn.vsassets.io/extensions/fivem-vscode/fivem-vscode/0.3.3/1703955664896/Microsoft.VisualStudio.Services.Icons.Default";

type IconType = React.ComponentType<{ className?: string }> | string;

type FeatureCardProps = {
  title: string;
  desc: string;
  imageSrc?: string;
  icon: IconType;
  wide?: boolean;
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative max-w-6xl mx-auto px-4 pt-60 pb-32 space-y-10"
    >
      {/* Top gradient border: transparent → #00b8ff → transparent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 mt-30 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #2b7fff 50%, transparent 100%)",
        }}
      />
      <div className="text-center space-y-3">
        <h2 className="text-2xl md:text-5xl font-bold text-white">
          What we build
        </h2>
        <p className="text-sm md:text-lg text-slate-400 max-w-xl mx-auto">
          From FiveM scripts to Discord bots and full systems — engineered to
          scale with your community.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full mt-10">
        <FeatureCard
          wide
          icon={FIVEM_ICON}
          title="FiveM Development"
          desc="Custom FiveM resources, scripts, and full server frameworks. From job systems and inventories to custom UIs and performance-tuned gameplay loops — built to run clean under load and easy for your staff to maintain."
          imageSrc="/fivem-bg.jpg"
        />

        <FeatureCard
          icon={FaDiscord}
          title="Discord Bots"
          desc="Purpose-built bots for ticketing, moderation, applications, economy, and automation. Fast, reliable, and tailored to how your community actually works."
        />

        <FeatureCard
          icon={FaCode}
          title="Discord Integrations"
          desc="Connect Discord to your game servers, dashboards, and internal tools — role sync, live status, webhooks, and two-way actions that keep everything in one place."
        />

        <FeatureCard
          wide
          icon={FaGear}
          title="System & Assets"
          desc="End-to-end server infrastructure and asset pipelines: deployment, backups, monitoring, and custom art/UI assets so your project looks and runs like a finished product — not a weekend build."
          imageSrc="/system-bg.jpg"
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, imageSrc, icon, wide }: FeatureCardProps) {
  return (
    <div
      className={[
        "relative overflow-hidden border rounded-xl bg-slate-900 shadow-sm hover:shadow-md transition-shadow",
        "border-slate-800",
        wide ? "lg:col-span-2 p-8 min-h-[320px]" : "p-6 min-h-[320px]",
      ].join(" ")}
    >
      <div className="relative z-10 max-w-md">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400">
          <ServiceIcon icon={icon} className="w-5 h-5" />
        </div>

        <h2 className="mt-4 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          {title}
        </h2>

        <p className="mt-4 text-left text-sm md:text-base leading-6 text-slate-300 max-w-[30rem]">
          {desc}
        </p>
      </div>

      {imageSrc && (
        <div className="pointer-events-none absolute -right-6 lg:-right-[10%] -bottom-10 opacity-40 grayscale">
          <Image
            src={imageSrc}
            alt=""
            width={520}
            height={520}
            className="object-contain"
            priority={false}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Renders a feature icon. Raster images are masked so they inherit
 * `currentColor`, matching the Font Awesome icon tint.
 */
function ServiceIcon({
  icon,
  className,
}: {
  icon: IconType;
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