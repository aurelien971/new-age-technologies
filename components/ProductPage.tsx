import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, type Product } from "@/lib/products";

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" width="14" height="14" fill="currentColor" aria-hidden="true">
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
      <a className="card__btn" href={product.cta.url} target="_blank" rel="noreferrer">
        <AppleMark />
        Download on the App Store
      </a>
    );
  }
  return <span className="card__btn card__btn--soon">Coming soon</span>;
}

export default function ProductPage({ id }: { id: string }) {
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <>
      <Background />
      <Navbar />
      <main>
        <section className="product">
          <Link className="product__back" href="/#products">
            <span aria-hidden="true">← </span>All apps
          </Link>

          <Image className="product__icon" src={product.icon} alt={`${product.name} icon`} width={104} height={104} />

          <div className="product__tags">
            {product.brand && (
              <span className="card__oaisis" title={product.brand}>
                <img src="/oaisis-logo.png" alt={product.brand} />
              </span>
            )}
            <span className="card__platform">{product.platform}</span>
          </div>

          <h1 className="product__name">{product.name}</h1>
          <p className="product__tagline">{product.tagline}</p>
          <p className="product__desc">{product.description}</p>

          <div className="product__cta">
            <Cta product={product} />
          </div>

          {product.legal && (
            <p className="product__legal">
              <Link href={product.legal.terms}>Terms of Service</Link>
              <span aria-hidden="true"> · </span>
              <Link href={product.legal.privacy}>Privacy Policy</Link>
            </p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}