export type Cta =
  | { type: "download"; url: string }
  | { type: "appstore"; url: string }
  | { type: "visit"; url: string }
  | { type: "soon" };

export type Legal = { terms: string; privacy: string };
export type Fact = { label: string; value: string };
export type Section = { title: string; body: string };

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
  /** Screenshots pulled from the live App Store listing, or captured from the site. */
  shots?: string[];
  shotKind?: "phone" | "wide";
  /** Opening paragraph of the product page. */
  lead?: string;
  sections?: Section[];
  facts?: Fact[];
  /** An honest caveat shown on the page, where one applies. */
  caveat?: string;
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
    shots: ["/shots/transcriber/1.png"],
    shotKind: "wide",
    lead:
      "Hold a key. Say the thing. The text appears wherever your cursor already was — in Slack, in Mail, in a code editor, in a document you never had to leave.",
    sections: [
      {
        title: "No window to switch to",
        body:
          "Most dictation tools make you go somewhere, speak, then copy the result back. Transcriber writes straight into whatever app has focus. The step where you paste is the step it removes, and it turns out that was most of the friction.",
      },
      {
        title: "Say what you want done to it",
        body:
          "Select any text, hold the key, and give an instruction rather than dictation. Make this shorter. Turn it into bullets. Reply politely saying no. It rewrites the selection in place — the same gesture, a different intent.",
      },
      {
        title: "The maths behind the claim",
        body:
          "Comfortable speech runs at roughly 150 words a minute. Most people type at around 40. That gap is the whole product: not a novelty, just the fastest input device you already own, pointed at every app instead of one.",
      },
    ],
    facts: [
      { label: "Platform", value: "macOS" },
      { label: "Price", value: "Free, with a Pro tier" },
      { label: "Install", value: "Direct download" },
    ],
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
    shots: ["/shots/cleaner/1.jpg", "/shots/cleaner/2.jpg", "/shots/cleaner/3.jpg", "/shots/cleaner/4.jpg"],
    shotKind: "phone",
    lead:
      "A full phone is rarely full of photos. It is full of the same photo, eleven times — the burst you never trimmed, the three attempts at the same view, the screenshot you took twice.",
    sections: [
      {
        title: "It finds what you would never scroll back to find",
        body:
          "Exact copies are easy. The useful part is near-duplicates: frames from the same burst, shots a second apart, the same receipt photographed twice. Cleaner groups them so you are choosing between five versions of one moment, not scrolling four years of camera roll.",
      },
      {
        title: "Nothing disappears without you seeing it",
        body:
          "Every group is shown before anything is removed, with a suggested keeper already selected. You override it or you accept it. There is no silent cleanup, because the one thing worse than a full phone is a phone missing a photo you wanted.",
      },
      {
        title: "Biggest wins first",
        body:
          "Large videos are sorted to the top, because thirty seconds of 4K costs more than a hundred screenshots. You get the space back in the first minute rather than the last.",
      },
    ],
    facts: [
      { label: "Platform", value: "iOS 17.4 or later" },
      { label: "Size", value: "15 MB" },
      { label: "Price", value: "Free" },
      { label: "Version", value: "1.0" },
    ],
  },
  {
    id: "complainr",
    name: "Complainr",
    tagline: "Every complaint, duly noted.",
    description: "A quiet record of what your partner actually keeps asking for.",
    platform: "iOS",
    icon: "/icon-complainr.png",
    page: "/complainr",
    accent: "232, 232, 232",
    cta: { type: "soon" },
    legal: { terms: "/complainr/terms", privacy: "/complainr/privacy" },
    shots: [
      "/shots/complainr/1.png",
      "/shots/complainr/2.png",
      "/shots/complainr/3.png",
      "/shots/complainr/4.png",
    ],
    shotKind: "phone",
    lead:
      "Register a complaint in about four seconds \u2014 type it, say it, or screenshot it \u2014 and let the pattern show up on its own. One row per complaint, marked with how many times it has now been made.",
    sections: [
      {
        title: "Four seconds, then back to nodding",
        body:
          "The button sits at the bottom of every screen, so logging is never more than one tap from wherever you are. The entry saves instantly and files itself a beat later, which means registering never waits on a network. Said the same thing again? Swipe the row left and it is logged again, timed now.",
      },
      {
        title: "What they are actually asking for",
        body:
          "Every complaint is read back as the request underneath it. \u201cThe dishes. Again.\u201d becomes reset the kitchen before bed. That is the whole thesis: complaints are unmet requests with bad PR, and the useful version of a record is the one that tells you what to do about it.",
      },
      {
        title: "Green days, amber days, red days",
        body:
          "A month at a glance, alongside complaints per day, week against last week, and what they were mostly about. The categories are not ours \u2014 they come out of your own entries, so the vocabulary ends up native to your relationship rather than imposed by us.",
      },
      {
        title: "Advice that takes your side",
        body:
          "Most relationship tools read like your partner\u2019s advocate. This one opens by naming what genuinely is not your fault, and only then points at the one thread worth your attention. If a complaint is unreasonable, it says so rather than inventing a fix for it.",
      },
    ],
    facts: [
      { label: "Platform", value: "iOS 17 or later" },
      { label: "Price", value: "Free, with an optional subscription" },
      { label: "Capture", value: "Typing, voice or screenshot" },
      { label: "Cycle tracking", value: "Optional, and never leaves your device" },
      { label: "Languages", value: "English" },
    ],
    caveat:
      "Complainr is a private log of your own experience, not a tool for monitoring another person. It keeps no location, reads no messages and needs nothing from your partner\u2019s phone.",
  },
  {
    id: "surrender",
    name: "Surrender",
    tagline: "Daily walk with Jesus.",
    description: "Name the one thing you would rather not say, and get seven nights built around it.",
    platform: "iOS",
    icon: "/icon-surrender.png",
    page: "/surrender",
    accent: "217, 164, 65",
    cta: { type: "soon" },
    legal: { terms: "/surrender/terms", privacy: "/surrender/privacy" },
    shotKind: "phone",
    lead:
      "Write one honest sentence about the thing you keep going back to. Surrender writes you seven days out of it \u2014 one devotional, one prayer and one verse a night, and a check-in that asks only for the truth.",
    sections: [
      {
        title: "The week comes out of your own sentence",
        body:
          "There is no library to browse. You name the thing \u2014 the drinking, the scrolling, the temper, the distance \u2014 and the app writes a seven-day path around that, in the language of that struggle. Nine themes, seven movements each, and none of it leaves your phone.",
      },
      {
        title: "One day a night, and no bingeing",
        body:
          "A day unlocks per calendar day and cannot be rushed. The night rolls over at four in the morning, so a one o\u2019clock check-in still counts for the night before. It is a practice rather than a course, and it is built to be finished slowly.",
      },
      {
        title: "The streak counts honesty, not perfection",
        body:
          "The nightly question is where your arrow went today, and every answer keeps the run alive \u2014 including \u201cit went wide\u201d. Nothing is lost for admitting a bad night. That is the single decision the whole app is built around, and the check-in is never behind the paywall.",
      },
      {
        title: "Read the prayer out loud",
        body:
          "Each day ends with a written prayer that lights one word at a time, at the pace of a voice rather than a screen. Most people have never prayed aloud on their own. It turns out that is the part that changes things.",
      },
    ],
    facts: [
      { label: "Platform", value: "iOS 17 or later" },
      { label: "Price", value: "Free, with an optional subscription" },
      { label: "Scripture", value: "World English Bible (public domain)" },
      { label: "Your writing", value: "Stored on your device only" },
      { label: "Languages", value: "English" },
    ],
    caveat:
      "Surrender is a devotional habit, not therapy, medical treatment or pastoral care. If you are in crisis, please contact a doctor or a crisis line rather than an app.",
  },
  {
    id: "hineni",
    name: "Hineni",
    tagline: "Here I am.",
    description: "Daily Jewish practice, for anyone who thinks the door has closed.",
    platform: "iOS",
    icon: "/icon-hineni.png",
    page: "/hineni",
    accent: "79, 131, 218",
    cta: { type: "soon" },
    legal: { terms: "/hineni/terms", privacy: "/hineni/privacy" },
    shotKind: "phone",
    lead:
      "Candle lighting to the minute where you actually are, the words with the sounds written under them, and one honest question a day. Built for the people every other Jewish app assumes can already read the page.",
    sections: [
      {
        title: "You were never out",
        body:
          "Teshuvah does not mean repentance \u2014 it means return, and you cannot return somewhere you were never from. Halachically there is no lapsed category: a Jew who has done nothing for forty years is exactly as obligated as one who has davened three times a day for forty. Almost nobody who needs to know that has been told it, so it is the first thing the app says.",
      },
      {
        title: "Never handed a page you cannot read",
        body:
          "Every prayer shows the Hebrew, the sounds and the English at the same time, and reads itself to you one line at a time \u2014 slowly, waiting, so you can say it back. Nothing auto-advances. The whole category is reference tools for people who already know; this is the on-ramp for everyone else.",
      },
      {
        title: "You will never pay to know when Shabbat starts",
        body:
          "Candle lighting, every prayer time, the festival calendar and the daily check-in are free forever, subscription or not. A time-bound obligation is not a thing to put behind a card. Times are computed on your phone from the sun at your coordinates, which never leave the device.",
      },
      {
        title: "And on Shabbat, nothing at all",
        body:
          "From candle lighting until three stars the app is silent \u2014 no reminder, no counting, no streak to lose. Sending a push into Shabbat is not a tone problem; for an observant user it is causing a problem. It is the one thing an engagement-funded app could never do.",
      },
      {
        title: "Ten steps, in your hands",
        body:
          "Most men who own tefillin were shown once, at thirteen, by someone who assumed they would remember. The guide never says \u201cas you know\u201d, counts the seven wraps for you, and refuses to run on the days tefillin are not worn.",
      },
    ],
    facts: [
      { label: "Platform", value: "iOS 17 or later" },
      { label: "Price", value: "Free, with an optional subscription" },
      { label: "Times", value: "Calculated on your device" },
      { label: "Nusach", value: "Ashkenaz" },
      { label: "Your location", value: "Never leaves your phone" },
      { label: "Languages", value: "English and Hebrew" },
    ],
    caveat:
      "Every time the app shows is a calculation from the sun's position, not a halachic ruling \u2014 communities differ by a minute or two, and some by more. Where it matters, follow your own community.",
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
    cta: { type: "appstore", url: "https://apps.apple.com/us/app/faike-ai-detector/id6782379468" },
    legal: { terms: "/faike/terms", privacy: "/faike/privacy" },
    shots: ["/shots/faike/1.jpg", "/shots/faike/2.jpg", "/shots/faike/3.jpg", "/shots/faike/4.jpg"],
    shotKind: "phone",
    lead:
      "Point it at an image, a block of text, or a claim somebody forwarded you. It tells you how much of it holds up — and shows you the working.",
    sections: [
      {
        title: "Three different questions",
        body:
          "An image check asks whether a picture was generated. A text check asks whether a passage was written by a model. A fact check asks whether a claim is actually true, and goes out to live sources to find out. They are separate problems, so they are separate answers.",
      },
      {
        title: "A score, and the sources behind it",
        body:
          "Every result comes back as a confidence score rather than a yes or no, and fact checks list the sources consulted. You can disagree with the conclusion and still see what it read to get there.",
      },
      {
        title: "It admits when it does not know",
        body:
          "Roughly a third of real results come back as Uncertain. That is deliberate. A detector that always produces a confident answer is not detecting anything — it is guessing with conviction, which is worse than saying nothing.",
      },
    ],
    facts: [
      { label: "Platform", value: "iOS 18.6 or later" },
      { label: "Size", value: "31 MB" },
      { label: "Price", value: "Free, with in-app purchases" },
      { label: "Version", value: "1.2.1 · September 2026" },
      { label: "Languages", value: "3" },
    ],
  },
  {
    id: "opaque",
    name: "Opaque",
    tagline: "AI photo filters, studio-grade.",
    description: "Transform your photos with 70+ AI filters — portraits, pets, places and more.",
    platform: "iOS",
    icon: "/icon-opaque.png",
    page: "/opaque",
    accent: "165, 195, 250",
    cta: { type: "appstore", url: "https://apps.apple.com/gb/app/opaque-ai-photo-editor/id6793271006" },
    legal: { terms: "/opaque/terms", privacy: "/opaque/privacy" },
    shots: [
      "/shots/opaque/1.jpg", "/shots/opaque/2.jpg", "/shots/opaque/3.jpg",
      "/shots/opaque/4.jpg", "/shots/opaque/5.jpg", "/shots/opaque/6.jpg",
    ],
    shotKind: "phone",
    lead:
      "Pick a photo. Pick a look. That is the whole interface. Everything difficult about studio lighting, colour grading and retouching sits behind a single tap.",
    sections: [
      {
        title: "Seventy-odd looks, organised by what you shot",
        body:
          "Portraits, pets, places, cinematic grades, studio lighting setups. They are grouped by subject rather than by technique, because you know what you photographed and you do not necessarily know that you want Rembrandt lighting.",
      },
      {
        title: "Tools for the things a filter cannot fix",
        body:
          "Magic Eraser takes out the person who walked into frame. Blur Lab handles depth after the fact. Custom Edit takes a written instruction when none of the presets is quite the thing you meant.",
      },
      {
        title: "Applied to your photo, not approximated",
        body:
          "Each look is a prompt run against your actual image rather than an overlay dropped on top. That is why a portrait filter respects the face and a landscape filter respects the sky — and why it takes a few seconds rather than none.",
      },
    ],
    facts: [
      { label: "Platform", value: "iOS 17.6 or later" },
      { label: "Size", value: "48 MB" },
      { label: "Price", value: "Free, with in-app purchases" },
      { label: "Version", value: "1.02 · September 2026" },
    ],
  },
  {
    id: "labs",
    name: "OAISIS Labs",
    brand: "OAISIS",
    tagline: "The studio behind the apps.",
    description: "Schedule a month of TikTok videos. They post themselves.",
    platform: "Web",
    icon: "/icon-oaisislabs.svg",
    page: "/labs",
    accent: "200, 180, 255",
    cta: { type: "visit", url: "https://www.oaisislabs.com" },
    shots: ["/shots/labs/1.png"],
    shotKind: "wide",
    lead:
      "Empty your camera roll into it on a Sunday. Choose the hours you want to post. It publishes for the rest of the month while you get on with something else.",
    sections: [
      {
        title: "Upload everything at once",
        body:
          "Drop in a week or a month of footage in one go — videos and photo carousels together. Captions, sounds and hashtags travel with each item, so nothing needs revisiting later.",
      },
      {
        title: "A calendar you set once",
        body:
          "Pick a few good times. Every video you upload from then on slots itself into the next free one. You are scheduling a habit rather than scheduling posts.",
      },
      {
        title: "It tells you what worked, in words",
        body:
          "Each post reports back afterwards: what people watched, what they skipped, and which day and hour did best. No dashboard to interpret — a sentence telling you when to post next.",
      },
    ],
    facts: [
      { label: "Platform", value: "Web" },
      { label: "Price", value: "Free while in beta" },
      { label: "TikTok", value: "Approved 27 August 2026" },
    ],
    caveat:
      "The Direct Post audit is still pending with TikTok, so scheduled items currently arrive as drafts in your TikTok inbox rather than publishing straight to your profile.",
  },
];
