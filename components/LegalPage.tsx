import Link from "next/link";
import Field from "@/components/Field";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  effectiveDate,
  backHref,
  backLabel,
  children,
}: {
  title: string;
  effectiveDate: string;
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Field />
      <Navbar />
      <main>
        <div className="wrap">
          <article className="legal">
            <Link className="legal__back" href={backHref}>
              ← {backLabel}
            </Link>
            <h1 className="legal__title">{title}</h1>
            <p className="legal__meta label">
              Effective {effectiveDate} · New Age Technologies Ltd
            </p>
            <div className="legal__body">{children}</div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
