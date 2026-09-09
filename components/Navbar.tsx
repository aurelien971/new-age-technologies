export default function Navbar() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        <img className="nav__mark" src="/nat-icon.png" alt="New Age Technologies" />
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