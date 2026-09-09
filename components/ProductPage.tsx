import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Field from "@/components/Field";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
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
    return <a className="btn" href={product.cta.url}>Download now</a>;
  }
  if (product.cta.type === "appstore") {
    return (
      <a className="btn" href={product.cta.url} target="_blank" rel="noreferrer">
        <AppleMark />
        Download on the App Store
      </a>
    );
  }
  if (product.cta.type === "visit") {
    return (
      <a className="btn" href={product.cta.url} target="_blank" rel="noreferrer">
        Open OAISIS Labs
      </a>
    );
  }
  return <span className="btn btn--ghost">Coming soon</span>;
}

export default function ProductPage({ id }: { id: string }) {
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const shots = product.shots ?? [];
  const phone = product.shotKind !== "wide";

  return (
    <>
      <Field />
      <Navbar />
      <main>
        <section className="product">
          <div className="wrap">
            <Link className="product__back" href="/#work">
              ← All work
            </Link>

            {/* One grid for the whole page: the icon hangs in the left margin
                and every other element shares the title's left edge. */}
            <div className="product__grid">
              <span className="product__iconwrap">
                <Image
                  className="product__icon"
                  src={product.icon}
                  alt=""
                  width={116}
                  height={116}
                />
              </span>

              <div className="product__col">
                <div className="product__tags">
                  {product.brand && <span className="chip chip--brand">{product.brand}</span>}
                  <span className="chip">{product.platform}</span>
                </div>

                <h1 className="product__name">{product.name}</h1>
                <p className="product__tagline">{product.tagline}</p>
                {product.lead && <p className="product__lead">{product.lead}</p>}

                <div className="product__cta">
                  <Cta product={product} />
                </div>

                {shots.length > 0 && (
                  <section className={`shots ${phone ? "shots--phone" : "shots--wide"}`} aria-label="Screenshots">
                    <div className="shots__rail">
                      {shots.map((src, i) => (
                        <Reveal key={src} delay={i * 80}>
                          <figure className="shot">
                            <Image
                              src={src}
                              alt={`${product.name} screenshot ${i + 1}`}
                              width={phone ? 420 : 1100}
                              height={phone ? 910 : 773}
                              sizes={phone ? "(max-width: 700px) 60vw, 260px" : "(max-width: 900px) 92vw, 860px"}
                            />
                          </figure>
                        </Reveal>
                      ))}
                    </div>
                  </section>
                )}

                {product.sections && product.sections.length > 0 && (
                  <section className="article">
                    {product.sections.map((s, i) => (
                      <Reveal key={s.title} delay={i * 60}>
                        <div className="article__block">
                          <h2>{s.title}</h2>
                          <p>{s.body}</p>
                        </div>
                      </Reveal>
                    ))}
                  </section>
                )}

                {product.caveat && (
                  <Reveal>
                    <aside className="note">
                      <span className="label note__label">Note</span>
                      <p>{product.caveat}</p>
                    </aside>
                  </Reveal>
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

                <div className="tail">
                  <Cta product={product} />
                  {product.legal && (
                    <p className="tail__legal">
                      <Link href={product.legal.terms}>Terms</Link>
                      <Link href={product.legal.privacy}>Privacy</Link>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
