import Image from "next/image";

type Member = {
  name: string;
  initials: string;
  role: string;
  desc: string;
  badges: string[];
  discordId: string;
  fallbackImage: string;
};

const MEMBERS: Member[] = [
  {
    name: "Cjay",
    initials: "CJ",
    role: "Founder & CEO",
    desc: "Founded Quantix Labs and leads the studio's direction, client work and Discord/FiveM development team.",
    badges: ["Founder", "CEO", "Discord Bot/FiveM Integration Developer"],
    discordId: "750521563903688835",
    fallbackImage: "/cjay.webp",
  },
  {
    name: "Jaxtti",
    initials: "JX",
    role: "Founder & CEO",
    desc: "Founded Quantix Labs and leads the studio's direction, client work and FiveM Scripting development team.",
    badges: ["Founder", "CEO", "QX Framework Developer"],
    discordId: "1467063344140779601",
    fallbackImage: "/jax.webp",
  },
];

type ResolvedMember = Member & {
  image: string;
  imageAnimated: boolean;
};

type DiscordUser = {
  id: string;
  avatar: string | null;
};

function discordAvatarUrl(
  user: DiscordUser
): { url: string; animated: boolean } | null {
  if (!user.avatar) return null;
  const animated = user.avatar.startsWith("a_");
  const ext = animated ? "gif" : "webp";
  return {
    url: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=256`,
    animated,
  };
}

async function fetchDiscordAvatar(
  discordId: string
): Promise<{ url: string; animated: boolean } | null> {
  const token = process.env.DISCORD_BOT_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch(`https://discord.com/api/v10/users/${discordId}`, {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Bot ${token}`,
        "User-Agent": "QuantixLabs-Website/1.0",
      },
    });
    if (!res.ok) return null;
    const user = (await res.json()) as DiscordUser;
    return discordAvatarUrl(user);
  } catch {
    return null;
  }
}

export default async function TeamSection() {
  const members: ResolvedMember[] = await Promise.all(
    MEMBERS.map(async (member) => {
      const avatar = await fetchDiscordAvatar(member.discordId);
      return {
        ...member,
        image: avatar?.url ?? member.fallbackImage,
        imageAnimated: avatar?.animated ?? false,
      };
    })
  );

  return (
    <section id="team" className="relative py-16 md:py-24 border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
            Founding team
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">
            Meet the Founding Team
          </h2>
          <p className="text-white/40 text-[15px] leading-relaxed">
            Quantix Labs is run by it's original founders, who run the studio and
            sign off on every project that ships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {members.map((member) => (
            <article
              key={member.name}
              className="relative bg-white/[0.02] rounded-2xl border border-white/[0.06] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] p-6"
            >
              {/* Avatar with initials fallback */}
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={64}
                    height={64}
                    unoptimized={member.imageAnimated}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>

              <p className="mt-4 text-xs font-medium text-blue-500">
                {member.role}
              </p>
              <h3 className="mt-0.5 text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {member.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {member.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[11px] text-gray-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
