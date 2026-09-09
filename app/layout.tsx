import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oaisis.co.uk"),
  title: "New Age Technologies — Independent app studio",
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  description:
    "New Age Technologies is a small UK mobile studio crafting calm, useful iOS apps under the OAISIS brand. Makers of OAISIS Transcriber, OAISIS Cleaner and FAIKE.",
  openGraph: {
    title: "New Age Technologies",
    description:
      "An independent UK mobile app studio. Makers of OAISIS Transcriber, OAISIS Cleaner and FAIKE.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
