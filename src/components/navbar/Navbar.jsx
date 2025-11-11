import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className="site-header" ref={ref}>
      <div className="header-inner">
        <Link to="/" className="home-link" aria-label="Home">
          🏠︎
        </Link>
        <div className="menu">
          <button
            className="menu-button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-icon" aria-hidden="true">☰</span>
          </button>
          {open && (
            <nav id="site-menu" className="menu-dropdown" aria-label="Site">
              <Link to="/about" className="menu-item" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link to="/coding" className="menu-item" onClick={() => setOpen(false)}>
                Coding
              </Link>
              <Link to="/contact" className="menu-item" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
