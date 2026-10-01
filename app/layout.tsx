import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://splitpaydocs.samkiel.dev"),
  title: {
    template: "%s | SplitPay Docs",
    default: "SplitPay Documentation — Stellar & Soroban Payment Protocol",
  },
  description:
    "Official developer documentation for SplitPay, a non-custodial collaborative payment and fund distribution protocol built on Stellar and Soroban smart contracts.",
  keywords: [
    "SplitPay",
    "Stellar",
    "Soroban",
    "Smart Contracts",
    "Payment Splitting",
    "Basis Points",
    "BPS",
    "Decentralized Finance",
    "Next.js",
    "Rust",
  ],
  authors: [{ name: "SplitPay Team", url: "https://github.com/Splitpayx" }],
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "SplitPay Documentation — Stellar & Soroban Payment Protocol",
    description:
      "Automated, mathematically verified payment splitting protocol built natively on Stellar and Soroban smart contracts.",
    url: "http://splitpaydocs.samkiel.dev/",
    siteName: "SplitPay Docs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased min-h-screen selection:bg-[#14B8A6]/20 selection:text-[#14B8A6]">
        {children}
      </body>
    </html>
  );
}
