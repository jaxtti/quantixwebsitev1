// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Quantix Labs | Quality Discord Bot & FiveM Development',
  description: 'Quantix Labs offers the highest quality development, top-tier support, and an overall great experience. Want to level up your FiveM server? Quantix is the way to go.',
  metadataBase: new URL('https://quantixl.dev'),
  openGraph: {
    title: 'Quantix Labs | Quality Discord Bot & FiveM Development',
    description: 'Quantix Labs offers the highest quality development, top-tier support, and an overall great experience. Want to level up your FiveM server? Quantix is the way to go.',
    url: 'https://quantixl.dev',
    images: ['/embed.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantix Labs | Quality Discord Bot & FiveM Development',
    description: 'Quantix Labs offers the highest quality development, top-tier support, and an overall great experience. Want to level up your FiveM server? Quantix is the way to go.',
    images: ['/embed.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
      </head>
      <body className="bg-slate-950 transition-colors duration-300">
        <Header />
        <main className="min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
