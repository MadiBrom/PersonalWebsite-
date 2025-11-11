import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button>
        <Link to="/" title="Home" className="home">🏠︎</Link>
      </button>
      <button>
      <Link to="/about" title="About" className="about">About</Link>
      </button>
       <button>
        <Link to="/coding" title="Coding" className="coding">Coding</Link>
        </button>
       <button>
        <Link to="/contact" title="Contact" className="contact">Contact</Link>
        </button>
    </>
  );
};

export default Navbar;
