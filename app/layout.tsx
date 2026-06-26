import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oaisis.co.uk"),
  title: "New Age Technologies — Independent app studio",
  description:
    "New Age Technologies is a small UK mobile studio crafting calm, useful iOS apps under the OAISIS brand. Makers of OAISIS Transcriber, OAISIS Cleaner and FAIKE.",
  openGraph: {
    title: "New Age Technologies",
    description:
      "An independent UK mobile app studio. Makers of OAISIS Transcriber, OAISIS Cleaner and FAIKE.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}