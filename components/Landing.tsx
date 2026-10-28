import Hero from "./Hero";
import Features from "./Features";
import TheQuantixWay from "./TheQuantixWay";
import Faq from "./Faq";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <main className="relative">
        <Hero />
        <Features />
        <Faq />
        <TheQuantixWay />
      </main>
    </div>
  );
}
