import React from "react";
import Coding from "../about/coding/Coder";
import "./about.css";

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

const About = () => {
  return (
    <div className="about-snap">
      <SectionWrapper id="education" title="Education" nextId="teaching">
        <p>
          Classroom leadership, individualized planning, and data-driven outcomes. Highlights,
          roles, and responsibilities to be added here.
        </p>
      </SectionWrapper>

      <SectionWrapper id="teaching" title="Teaching" nextId="coding">
        <p>
          Classroom leadership, individualized planning, and data-driven outcomes. Highlights,
          roles, and responsibilities to be added here.
        </p>
      </SectionWrapper>

      <SectionWrapper id="coding" title="Coding" nextId="art">
        <Coding />
      </SectionWrapper>

      <SectionWrapper id="art" title="Art">
        <p>
          Photography and art showcase. A small gallery or carousel can go here.
        </p>
      </SectionWrapper>
    </div>
  );
};

export default About;

