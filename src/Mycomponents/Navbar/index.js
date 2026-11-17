import { useState } from "react";

const links = [
  ["Projects", "projects"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Blog", "blog"],
];

function Navbar({ isBlogPage = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand-mark" href={isBlogPage ? "/" : "#home"} aria-label="Rohit Turkar, home">Rohit Turkar<span>.</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <div className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
          {links.map(([label, id]) => <a key={id} href={id === "blog" ? "/blog" : isBlogPage ? `/#${id}` : `#${id}`} aria-current={id === "blog" && isBlogPage ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-contact" href={isBlogPage ? "/#contact" : "#contact"} onClick={() => setMenuOpen(false)}>Say hello <span>↗</span></a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
