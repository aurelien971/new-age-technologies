import { products } from "@/lib/products";

const platforms = [...new Set(products.map((p) => p.platform))];
const shipped = products.filter((p) => p.cta.type !== "soon").length;

/** Each word rises on its own beat, so the line assembles instead of fading. */
function Line({ words, from, accent }: { words: string[]; from: number; accent?: number }) {
  return (
    <span className="hero__line">
      {words.map((word, i) => (
        <span className="hero__word" key={word + i}>
          <span
            className={`hero__word-in${accent === i ? " hero__accent" : ""}`}
            style={{ animationDelay: `${(from + i) * 70 + 120}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <span className="hero__eyebrow label">
          <span className="hero__pulse" aria-hidden="true" />
          Independent app studio — United Kingdom
        </span>

        <h1 className="hero__title">
          <Line words={["World-class"]} from={0} />
          <Line words={["consumer", "apps."]} from={1} accent={0} />
        </h1>

        <p className="hero__lede">
          New Age Technologies designs and builds world-class consumer apps —
          fast, private and beautifully simple — across iOS and macOS.
        </p>

        <div className="hero__actions">
          <a className="btn" href="#work">
            See the work
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M8 3v9M4.5 8.5 8 12l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a className="btn btn--ghost" href="mailto:fefeapphello@gmail.com">
            Start a project
          </a>
        </div>

        <dl className="hero__facts label">
          <div className="hero__fact">
            <dt>Apps</dt>
            <dd>{String(products.length).padStart(2, "0")}</dd>
          </div>
          <div className="hero__fact">
            <dt>On the store</dt>
            <dd>{String(shipped).padStart(2, "0")}</dd>
          </div>
          <div className="hero__fact">
            <dt>Platforms</dt>
            <dd className="label--cased">{platforms.join(" · ")}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
