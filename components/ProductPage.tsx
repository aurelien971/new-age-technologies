import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, type Product } from "@/lib/products";

function AppleMark() {
  return (
    <svg viewBox="0 0 18 18" width="15" height="15" aria-hidden="true" fill="currentColor">
      <path d="M12.4 9.6c0-1.7 1.4-2.5 1.4-2.6-.8-1.1-2-1.3-2.4-1.3-1-.1-2 .6-2.5.6s-1.3-.6-2.2-.6c-1.1 0-2.2.7-2.7 1.7-1.2 2-.3 5 .8 6.6.6.8 1.2 1.7 2.1 1.7.8 0 1.1-.5 2.1-.5s1.2.5 2.1.5c.9 0 1.4-.8 2-1.6.6-.9.8-1.8.9-1.8-.1 0-1.6-.6-1.6-2.4zM10.8 4.3c.5-.6.8-1.4.7-2.2-.7 0-1.5.5-2 1.1-.4.5-.8 1.3-.7 2.1.8.1 1.6-.4 2-1z" />
    </svg>
  );
}

function Cta({ product }: { product: Product }) {
  if (product.cta.type === "download") {
    return <a className="card__btn" href={product.cta.url}>Download now</a>;
  }
  if (product.cta.type === "appstore") {
    return (
      <a className="card__btn" href={product.cta.url} target="_blank" rel="noreferrer">
        <AppleMark />
        Download on the App Store
      </a>
    );
  }
  if (product.cta.type === "visit") {
    return (
      <a className="card__btn card__btn--store" href={product.cta.url} target="_blank" rel="noreferrer">
        Open OAISIS Labs
      </a>
    );
  }
  return <span className="card__btn card__btn--soon">Coming soon</span>;
}

export default function ProductPage({ id }: { id: string }) {
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const shots = product.shots ?? [];
  const phone = product.shotKind !== "wide";

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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/oaisis-logo.png" alt={product.brand} />
              </span>
            )}
            <span className="card__platform">{product.platform}</span>
          </div>

          <h1 className="product__name">{product.name}</h1>
          <p className="product__tagline">{product.tagline}</p>
          {product.lead && <p className="product__lead">{product.lead}</p>}

          <div className="product__cta">
            <Cta product={product} />
          </div>
        </section>

        {shots.length > 0 && (
          <section className={`shots ${phone ? "shots--phone" : "shots--wide"}`} aria-label="Screenshots">
            <div className="shots__rail">
              {shots.map((src, i) => (
                <figure className="shot" key={src}>
                  <Image
                    src={src}
                    alt={`${product.name} screenshot ${i + 1}`}
                    width={phone ? 420 : 1100}
                    height={phone ? 910 : 773}
                    sizes={phone ? "(max-width: 700px) 60vw, 260px" : "(max-width: 900px) 92vw, 820px"}
                  />
                </figure>
              ))}
            </div>
          </section>
        )}

        {product.sections && product.sections.length > 0 && (
          <section className="article">
            {product.sections.map((s) => (
              <div className="article__block" key={s.title}>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
              </div>
            ))}
          </section>
        )}

        {product.caveat && (
          <section className="article">
            <p className="product__caveat">{product.caveat}</p>
          </section>
        )}

        {product.facts && product.facts.length > 0 && (
          <section className="facts">
            <dl className="facts__grid">
              {product.facts.map((f) => (
                <div className="fact" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className="product product--tail">
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
