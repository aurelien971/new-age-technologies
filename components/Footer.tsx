export default function Footer() {
  return (
    <footer className="foot" id="studio">
      <div className="wrap">
        <div className="foot__cta">
          <p className="foot__lede">Have an idea worth shipping?</p>
          <a className="foot__mail" href="mailto:fefeapphello@gmail.com">
            fefeapphello@gmail.com
          </a>
        </div>

        <div className="foot__base label">
          <span>© {new Date().getFullYear()} New Age Technologies Ltd</span>
          <span>Independent app studio · United Kingdom</span>
        </div>
      </div>
    </footer>
  );
}
