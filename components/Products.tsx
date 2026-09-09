import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { products, type Product } from "@/lib/products";

/** Availability, stated. The button that acts on it lives on the product page. */
function status(product: Product) {
  switch (product.cta.type) {
    case "download": return "Download";
    case "appstore": return "App Store";
    case "visit": return "Visit site";
    default: return "Coming soon";
  }
}

function Row({ product, n }: { product: Product; n: number }) {
  return (
    <Link
      className="row"
      href={product.page}
      style={{ "--accent": product.accent } as CSSProperties}
    >
      <span className="row__n">{String(n).padStart(2, "0")}</span>

      <Image
        className="row__icon"
        src={product.icon}
        alt=""
        width={52}
        height={52}
      />

      <div className="row__main">
        <h3 className="row__name">
          {product.name}
          {product.brand && <span className="row__brand">{product.brand}</span>}
        </h3>
        <p className="row__tag">{product.tagline}</p>
      </div>

      <div className="row__meta">
        <span className="row__plat">{product.platform}</span>
        <span className={`row__status${product.cta.type === "soon" ? " row__status--soon" : ""}`}>
          {status(product)}
        </span>
        <span className="row__arrow" aria-hidden="true">→</span>
      </div>
    </Link>
  );
}

export default function Products() {
  return (
    <section className="index" id="work">
      <div className="wrap">
        <div className="index__head">
          <span className="label">Selected work</span>
          <span className="label">{String(products.length).padStart(2, "0")} apps</span>
        </div>

        <div className="index__list">
          {products.map((p, i) => (
            <Row key={p.id} product={p} n={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
