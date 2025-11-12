import React, { useEffect, useMemo, useRef, useState } from "react";
import "./coding.css";


const projects = [
  {
    title: "The Digital Respite",
    tagline: "Tactile web toys for calm focus",
    description:
      "A collection of calming, interactive fidgets built to reduce noise and increase focus. Small reactions, gentle feedback, and accessible controls make it easy to decompress for a minute and reset.",
    image: "https://via.placeholder.com/1200x800?text=Fidget+App",
    githubLink: "https://github.com/MadiBrom/Fidgets",
    demoLink: "https://thedigitalrespite.netlify.app/",
    tech: ["React", "Vite", "Tailwind", "ARIA"],
    features: [
      "Click, drag, pop interactions with low sensory load",
      "Keyboard friendly components",
      "Light footprint to run anywhere",
    ],
  },
  {
    title: "Yarnia",
    tagline: "Rich text social space for fan works",
    description:
      "A reader writer community inspired by AO3 style discovery. Clean composition tools, smart tagging, and inclusive discovery so fans can write, share, and find stories they love.",
    image: "https://via.placeholder.com/1200x800?text=Yarnia",
    githubLink: "https://github.com/margonautix/yarnia.CAPSTONE",
    demoLink: "",
    tech: ["React", "Node", "Express", "PostgreSQL", "Prisma"],
    features: [
      "Rich text editor with clean formatting",
      "Search and tag driven discovery",
      "Profile and library organization",
    ],
  },
  {
    title: "Portfolio Website",
    tagline: "Personal site with a forest library vibe",
    description:
      "Responsive portfolio that shows projects, teaching, and creative work. Custom palette, accessible patterns, and simple animations to keep the focus on the work.",
    image: "https://via.placeholder.com/1200x800?text=Portfolio+Website",
    githubLink: "https://github.com/MadiBrom/PersonalWebsite-",
    demoLink: "https://fragilebluberri.netlify.app/",
    tech: ["React", "Vite", "Tailwind"],
    features: [
      "Custom light and dark themes",
      "Project cards with quick view",
      "Fast, minimal navigation",
    ],
  },
];

const GithubIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.58 2.37 1.12 2.95.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.8 1.05a9.42 9.42 0 0 1 5.1 0c1.95-1.33 2.8-1.05 2.8-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.33 4.82-4.55 5.08.36.32.68.93.68 1.88 0 1.36-.01 2.45-.01 2.78 0 .27.18.59.68.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/>
  </svg>
);

const LinkIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M10.59 13.41a1 1 0 0 0 1.41 1.41l4.24-4.24a3 3 0 0 0-4.24-4.24l-1.59 1.59a1 1 0 1 0 1.41 1.41l1.59-1.59a1 1 0 1 1 1.41 1.41l-4.24 4.24Zm2.82-2.82a1 1 0 1 0-1.41-1.41L7.76 13.4a3 3 0 0 0 4.24 4.24l1.59-1.59a1 1 0 1 0-1.41-1.41l-1.59 1.59a1 1 0 1 1-1.41-1.41l4.24-4.24Z"/>
  </svg>
);

const SearchIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M10 4a6 6 0 1 0 3.85 10.6l4.77 4.77a1 1 0 0 0 1.41-1.41l-4.77-4.77A6 6 0 0 0 10 4Zm-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"/>
  </svg>
);

const CloseXIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const useKeyboard = (onEscape) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onEscape?.(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onEscape]);
};

const ProjectModal = ({ project, onClose }) => {
  useKeyboard(onClose);
  if (!project) return null;
  return (
    <div className="backdrop" role="dialog" aria-modal="true" aria-label={`${project.title} details`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modalX" onClick={onClose} aria-label="Close modal"><CloseXIcon /></button>
        <div className="modalMedia" style={{ backgroundImage: `url(${project.image})` }}>
          
        </div>
        <div className="modalBody">
          <div className="modalHeader">
            <h3 className="modalTitle">{project.title}</h3>
          </div>
          <p className="modalDesc">{project.description}</p>
          {project.features?.length ? (
            <div className="featureList" aria-label="Key features">
              {project.features.map((f, idx) => (
                <div className="featureItem" key={idx}>
                  <span>•</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          ) : null}
          <div className="pillRow">
            {project.tech?.map((t) => (
              <span className="pill" key={t}>{t}</span>
            ))}
          </div>
          <div className="actions">
            <a className="btn btnPrimary" href={project.githubLink} target="_blank" rel="noreferrer" aria-label="View on GitHub">
              <GithubIcon /> Code
            </a>
            {project.demoLink ? (
              <a className="btn" href={project.demoLink} target="_blank" rel="noreferrer" aria-label="Open live demo">
                <LinkIcon /> Demo
              </a>
            ) : null}
            
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ project, onQuickView }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const midX = r.width / 2;
    const midY = r.height / 2;
    const rx = ((y - midY) / midY) * -6; // tilt up down
    const ry = ((x - midX) / midX) * 6;  // tilt left right
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <article className="card" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="cardInner" ref={ref}>
        <div className="thumb" style={{ backgroundImage: `url(${project.image})` }}>
          <div className="thumbOverlay" />
          <span className="badge">{project.tagline}</span>
          <button className="quickView" onClick={() => onQuickView(project)} aria-label={`Quick view ${project.title}`}>
            Quick view
          </button>
        </div>
        <div className="body">
          <div className="titleRow">
            <h3 className="title">{project.title}</h3>
          </div>
          <p className="tagline">{project.description.slice(0, 120)}{project.description.length > 120 ? "…" : ""}</p>
          <div className="pillRow" aria-label="Tech stack">
            {project.tech.map((t) => (
              <span className="pill" key={t}>{t}</span>
            ))}
          </div>
          <div className="actions" role="group" aria-label="Project links">
            <a className="btn btnPrimary" href={project.githubLink} target="_blank" rel="noreferrer">
              <GithubIcon /> Code
            </a>
            {project.demoLink ? (
              <a className="btn" href={project.demoLink} target="_blank" rel="noreferrer">
                <LinkIcon /> Preview
              </a>
            ) : (
              <button className="btn" onClick={() => onQuickView(project)}>
                Details
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const Coding = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((p) => {
      const hay = `${p.title} ${p.tagline} ${p.description} ${p.tech?.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  return (
    <div className="projectPage">

      <section className="hero" aria-label="Projects intro">
        <div className="controls">
          <label className="search" aria-label="Search projects">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, feature, or tech"
              aria-label="Search"
            />
            <SearchIcon />
          </label>
        </div>
      </section>

      <section className="grid" aria-label="Projects grid">
        {filtered.map((p) => (
          <Card key={p.title} project={p} onQuickView={setActive} />
        ))}
      </section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
};

export default Coding;
