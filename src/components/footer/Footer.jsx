import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Madison Bromfield</span>
        <nav className="footer-links" aria-label="Social links">
          <a href="https://github.com/MadiBrom" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/madison-bromfield-b940a9325/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.youtube.com/@FragileBluberri" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://www.twitch.tv/fragileblueberry" target="_blank" rel="noreferrer">Twitch</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

