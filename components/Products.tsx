"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useRef } from "react";
import Image from "next/image";
import { products, type Product } from "@/lib/products";

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function Cta({ product }: { product: Product }) {
  if (product.cta.type === "download") {
    return (
      <a className="card__btn" href={product.cta.url}>
        Download now
      </a>
    );
  }
  if (product.cta.type === "appstore") {
    return (
      <a className="card__btn card__btn--store" href={product.cta.url} target="_blank" rel="noreferrer">
        <AppleMark />
        App Store
      </a>
    );
  }
  return <span className="card__btn card__btn--soon">Coming soon</span>;
}

function ProductCard({ product }: { product: Product }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(py * -5).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * 7).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${(px * 80 + 50).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(py * 80 + 50).toFixed(1)}%`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div ref={ref} className="card" style={{ "--accent": product.accent } as CSSProperties} onPointerMove={onMove} onPointerLeave={reset}>
      <div className="card__head">
        <Image className="card__icon" src={product.icon} alt={`${product.name} icon`} width={60} height={60} />
        <div className="card__tags">
          {product.brand && (
            <span className="card__oaisis" title={product.brand}>
              <img src="/oaisis-logo.png" alt={product.brand} />
            </span>
          )}
          <span className="card__platform">{product.platform}</span>
        </div>
      </div>

      <div className="card__body">
        <h3 className="card__name">{product.name}</h3>
        <p className="card__tagline">{product.tagline}</p>
        <p className="card__desc">{product.description}</p>
      </div>

      <div className="card__actions">
        <Cta product={product} />
        <a className="card__page" href={product.page}>
          Learn more<span aria-hidden="true"> →</span>
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="section-head">
        <h2 className="section-title">What we&apos;ve released</h2>
      </div>

      <div className="products__grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}