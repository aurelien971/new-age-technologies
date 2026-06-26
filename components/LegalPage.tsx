import Link from "next/link";
import Background from "@/components/Background";
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
      <Background />
      <Navbar />
      <main>
        <article className="legal">
          <Link className="legal__back" href={backHref}>
            <span aria-hidden="true">← </span>
            {backLabel}
          </Link>
          <h1 className="legal__title">{title}</h1>
          <p className="legal__meta">
            Effective Date: {effectiveDate} · Operated by New Age Technologies Ltd.
          </p>
          <div className="legal__body">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}