import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-buttons">
          <li>
            <Link to="/" className="nav-link">
              <button className="nav-button">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              <button className="nav-button">About</button>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              <button className="nav-button">Contact</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
