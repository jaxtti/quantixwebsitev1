
import FiveMFeatures from "./FiveMFeatures";
import FiveMWorkflow from "./FiveMWorkflow";
import FiveMHero from "./FiveMHero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <main className="relative">
        <FiveMHero />
        <FiveMFeatures />
        <FiveMWorkflow />
      </main>
    </div>
  );
}
