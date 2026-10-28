const GAMES = [
  {
    title: "Minecraft Hosting",
    description: "Paper, Spigot, Forge & Fabric",
    image: "/bg2.jpeg",
  },
  {
    title: "ARK: Survival Evolved",
    description: "Full mod & cluster support",
    image: "/ark-bg.jpeg",
  },
  {
    title: "Rust Hosting",
    description: "Oxide & Carbon ready",
    image: "/rust-bg.jpg",
  },
];

export default function GameCards() {
  return (
    <section className="py-16 border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Pick your game</h2>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Popular titles, deployed in seconds on the same hardware.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {GAMES.map((game) => (
            <a
              key={game.title}
              href="/games"
              className="group block bg-slate-900 border border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={game.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-white">{game.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{game.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
