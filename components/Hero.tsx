import { products } from "@/lib/products";

/** Platforms, in the order they first appear in the catalogue. */
const platforms = [...new Set(products.map((p) => p.platform))];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <span className="label hero__eyebrow">Independent app studio — United Kingdom</span>

        <h1 className="hero__title">
          World-class <span className="hero__accent">consumer</span> apps.
        </h1>

        <p className="hero__lede">
          New Age Technologies designs and builds world-class consumer apps —
          fast, private and beautifully simple — across iOS and macOS.
        </p>

        <dl className="hero__facts label">
          <div className="hero__fact">
            <dt>Apps</dt>
            <dd>{String(products.length).padStart(2, "0")}</dd>
          </div>
          <div className="hero__fact">
            <dt>Platforms</dt>
            <dd className="label--cased">{platforms.join(" · ")}</dd>
          </div>
          <div className="hero__fact">
            <dt>Studio</dt>
            <dd>United Kingdom</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
