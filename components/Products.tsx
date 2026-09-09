"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { CSSProperties, PointerEvent } from "react";
import Reveal from "@/components/Reveal";
import { products, type Product } from "@/lib/products";

function AppleMark() {
  return (
    <svg viewBox="0 0 18 18" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M12.4 9.6c0-1.7 1.4-2.5 1.4-2.6-.8-1.1-2-1.3-2.4-1.3-1-.1-2 .6-2.5.6s-1.3-.6-2.2-.6c-1.1 0-2.2.7-2.7 1.7-1.2 2-.3 5 .8 6.6.6.8 1.2 1.7 2.1 1.7.8 0 1.1-.5 2.1-.5s1.2.5 2.1.5c.9 0 1.4-.8 2-1.6.6-.9.8-1.8.9-1.8-.1 0-1.6-.6-1.6-2.4zM10.8 4.3c.5-.6.8-1.4.7-2.2-.7 0-1.5.5-2 1.1-.4.5-.8 1.3-.7 2.1.8.1 1.6-.4 2-1z" />
    </svg>
  );
}

function Cta({ product }: { product: Product }) {
  if (product.cta.type === "download") {
    return <a className="chip chip--go" href={product.cta.url}>Download</a>;
  }
  if (product.cta.type === "appstore") {
    return (
      <a className="chip chip--go" href={product.cta.url} target="_blank" rel="noreferrer">
        <AppleMark />
        App Store
      </a>
    );
  }
  if (product.cta.type === "visit") {
    return (
      <a className="chip chip--go" href={product.cta.url} target="_blank" rel="noreferrer">
        Visit
      </a>
    );
  }
  return <span className="chip chip--soon">Coming soon</span>;
}

function Card({ product }: { product: Product }) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${(px * 100).toFixed(2)}%`);
    el.style.setProperty("--my", `${(py * 100).toFixed(2)}%`);
    // Tilt stays under 4deg. Past that it stops reading as a surface catching
    // light and starts reading as a novelty.
    el.style.setProperty("--ry", `${((px - 0.5) * 7).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${((0.5 - py) * 5).toFixed(2)}deg`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      ref={ref}
      className="card"
      style={{ "--accent": product.accent } as CSSProperties}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <Link className="card__hit" href={product.page} aria-label={`${product.name} — read more`} />
      <span className="card__sheen" aria-hidden="true" />
      <span className="card__glow" aria-hidden="true" />

      <div className="card__top">
        <span className="card__iconwrap">
          <Image className="card__icon" src={product.icon} alt="" width={112} height={112} />
        </span>
        <span className="card__tags">
          {product.brand && <span className="chip chip--brand">{product.brand}</span>}
          <span className="chip">{product.platform}</span>
        </span>
      </div>

      <div className="card__mid">
        <h3 className="card__name">{product.name}</h3>
        <p className="card__tag">{product.tagline}</p>
        <p className="card__desc">{product.description}</p>
      </div>

      <div className="card__foot">
        <Cta product={product} />
        <span className="card__go" aria-hidden="true">
          Read more
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="work__head">
          <span className="label">Selected work</span>
          <span className="label">{String(products.length).padStart(2, "0")} shipped</span>
        </div>

        <div className="work__grid">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90 + Math.floor(i / 3) * 40}>
              <Card product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
