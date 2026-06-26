export default function Navbar() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        <span className="nav__mark" aria-hidden="true" />
        New Age Technologies
      </a>
      <nav className="nav__links">
        <a href="#products">Apps</a>
        <a href="#studio">Studio</a>
        <a className="nav__cta" href="#contact">Get in touch</a>
      </nav>
    </header>
  );
}