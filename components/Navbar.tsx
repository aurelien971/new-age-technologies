import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav__in">
        <Link className="nav__brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="nav__mark" src="/nat-icon.png" alt="" />
          New Age Technologies
        </Link>
        <nav className="nav__links">
          <Link href="/#work">Work</Link>
          <Link href="/#studio" data-secondary>Studio</Link>
          <a href="mailto:fefeapphello@gmail.com">Contact</a>
        </nav>
      </div>
    </header>
  );
}
