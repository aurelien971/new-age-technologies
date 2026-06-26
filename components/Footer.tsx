export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__panel">
        <div className="footer__cta">
          <p className="footer__lede">Have an idea worth shipping?</p>
          <a className="footer__mail" href="mailto:hello@oaisis.co.uk">
            hello@oaisis.co.uk
          </a>
        </div>

        <div className="footer__meta" id="studio">
          <span className="footer__name">New Age Technologies Ltd</span>
          <span className="footer__sub">
            Independent app studio · United Kingdom
          </span>
        </div>
      </div>

      <div className="footer__base">
        <span>© {new Date().getFullYear()} New Age Technologies Ltd</span>
        <span className="footer__brand">OAISIS</span>
      </div>
    </footer>
  );
}