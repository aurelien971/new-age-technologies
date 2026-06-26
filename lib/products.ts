export type Cta =
  | { type: "download"; url: string }
  | { type: "appstore"; url: string }
  | { type: "soon" };

export type Legal = {
  terms: string;
  privacy: string;
};

export type Product = {
  id: string;
  name: string;
  brand?: string;
  tagline: string;
  description: string;
  platform: string;
  icon: string;
  page: string;
  accent: string;
  cta: Cta;
  legal?: Legal;
};

export const products: Product[] = [
  {
    id: "transcriber",
    name: "Transcriber",
    brand: "OAISIS",
    tagline: "Speaking is 387% faster than typing.",
    description: "Transcribe your voice instantly, intelligently, on any app.",
    platform: "macOS",
    icon: "/icon-transcriber.png",
    page: "/transcriber",
    accent: "150, 180, 255",
    cta: { type: "download", url: "https://www.oaisis.co.uk/api/download" },
  },
  {
    id: "cleaner",
    name: "Cleaner",
    brand: "OAISIS",
    tagline: "Remove duplicate photos and videos, instantly.",
    description: "Clear duplicates and clutter in seconds and reclaim your storage.",
    platform: "iOS",
    icon: "/icon-cleaner.png",
    page: "/cleaner",
    accent: "150, 235, 195",
    cta: { type: "appstore", url: "https://apps.apple.com/us/app/oaisis-cleaner/id6758674358" },
  },
  {
    id: "faike",
    name: "FAIKE",
    tagline: "AI Detector.",
    description: "Detect fake claims, images or text instantly.",
    platform: "iOS",
    icon: "/icon-faike.png",
    page: "/faike",
    accent: "255, 175, 205",
    cta: { type: "soon" },
    legal: { terms: "/faike/terms", privacy: "/faike/privacy" },
  },
];