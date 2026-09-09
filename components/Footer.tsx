export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__panel">
        <div className="footer__cta">
          <p className="footer__lede">Have an idea worth shipping?</p>
          <a className="card__btn footer__btn" href="mailto:fefeapphello@gmail.com">
            Write to me now
          </a>
        </div>

        <div className="footer__meta" id="studio">
          <span className="footer__name">New Age Technologies Ltd</span>
          <span className="footer__sub">Independent app studio · United Kingdom</span>
        </div>
      </div>

      <div className="footer__base">
        <span>© {new Date().getFullYear()} New Age Technologies Ltd</span>
        <span className="footer__brand">OAISIS</span>
      </div>
    </footer>
  );
}