import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav__in">
        <Link className="nav__brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="nav__mark" src="/nat-icon.png" alt="" />
          <span>New Age Technologies</span>
        </Link>
        <nav className="nav__links">
          <Link href="/#work">Work</Link>
          <Link href="/#studio" data-secondary>Studio</Link>
          <a className="nav__cta" href="mailto:fefeapphello@gmail.com">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
