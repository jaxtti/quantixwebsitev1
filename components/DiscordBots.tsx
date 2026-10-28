
import DiscordBotFeatures from "./DiscordBotFeatures";
import DiscordBotHero from "./DiscordBotHero";
import ConnecttoFiveM from "./ConnecttoFiveM";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <main className="relative">
        <DiscordBotHero />
        <DiscordBotFeatures />
        <ConnecttoFiveM />
      </main>
    </div>
  );
}
