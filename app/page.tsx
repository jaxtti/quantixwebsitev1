// app/page.tsx
import Landing from '@/components/Landing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantix Labs | Best Development, even better experience',
  description: 'Quantix Labs offers the highest quality development, top-tier support, and an overall great experience. Want to level up your FiveM server? Quantix is the way to go.',

  openGraph: {
    type: "website",
    url: "https://quantixl.dev/",    
    title: 'Quantix Labs | Best Development, even better experience',
    description: 'Quantix Labs offers the highest quality development, top-tier support, and an overall great experience. Want to level up your FiveM server? Quantix is the way to go.',

    images: [
      {
        url: "/embed.png",
        width: 1920,
        height: 1080,
        alt: "Embed Banner",
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Quantix Labs | Best Development, even better experience',
    description: 'Quantix Labs offers the highest quality development, top-tier support, and an overall great experience. Want to level up your FiveM server? Quantix is the way to go.',
    images: ['/embed.png'],
  },
};

export default function Home() {
  return (
    <>
      <Landing />
    </>
  );
}
