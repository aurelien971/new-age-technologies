import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer className="foot" id="studio">
      <div className="wrap">
        <Reveal className="foot__cta">
          <p className="foot__kicker label">Next</p>
          <p className="foot__lede">
            Have an idea<br />worth shipping?
          </p>
          <a className="foot__mail" href="mailto:fefeapphello@gmail.com">
            <span>fefeapphello@gmail.com</span>
            <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>

        <div className="foot__base label">
          <span>© {new Date().getFullYear()} New Age Technologies Ltd</span>
          <span>Independent app studio · United Kingdom</span>
        </div>
      </div>
    </footer>
  );
}
