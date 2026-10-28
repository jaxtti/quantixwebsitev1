
import WebDevFeatures from "./WebFeatures";
import WebHero from "./WebHero";
import WebDevProcess from "./WebProcess";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <main className="relative">
        <WebHero />
        <WebDevFeatures />
        <WebDevProcess />
      </main>
    </div>
  );
}
