import React from 'react';
import Coding from './coding/Coder';
import Art from './art/Art';
import "./projects.css";  

const SectionWrapper = ({ id, title, children, nextId }) => {
  const scrollNext = () => {
    if (!nextId) return;
    const el = document.getElementById(nextId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id={id} className="about-section">
      <div className="about-section-inner">
        <h2 className="about-section-title">{title}</h2>
        <div className="about-section-content">{children}</div>
      </div>
      {nextId && (
        <button className="about-next" onClick={scrollNext} aria-label="Next section">↓</button>
      )}
    </section>
  );
};

const Projects = () => {
  return (
    <div className="about-snap">
      <SectionWrapper id="coding" title="Coding" nextId="art">
        <Coding />
      </SectionWrapper>

      <SectionWrapper id="art" title="Art">
        <Art />
      </SectionWrapper>
    </div>
  );
};

export default Projects;

