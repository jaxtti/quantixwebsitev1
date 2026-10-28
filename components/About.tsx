
import AboutHero from "./AboutHero";
import AboutBeginnings from "./AboutBeginnings";
import AboutValues from "./AboutValues";
import AboutTeams from "./AboutTeams";
import AboutCareers from "./AboutCareers";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <main className="relative">
        <AboutHero />
        <AboutBeginnings />
        <AboutValues />
        <AboutTeams />
        <AboutCareers />
      </main>
    </div>
  );
}
