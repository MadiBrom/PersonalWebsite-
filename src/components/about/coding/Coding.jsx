import React, { useEffect } from "react";
import "./coding.css";

const projects = [
  {
    title: "The Digital Respite",
    description:
      "A tiny sensory playground for focus breaks. Built to calm the brain and keep hands busy so you can reset fast.",
    image: "https://via.placeholder.com/600",
    githubLink: "https://github.com/MadiBrom/Fidgets",
  },
  {
    title: "Yarnia",
    description:
      "Yarnia is a web platform designed for fans to explore, share, and celebrate fan-created works, including fan fiction, stories, and self-written expressions. This site aims to foster a community where users can discover new stories, connect with fellow fans, and showcase their creativity in a welcoming environment.",
    image: "https://via.placeholder.com/600",
    githubLink: "https://github.com/margonautix/yarnia.CAPSTONE",
  },
    {
    title: "Portfolio Website",
    description:
      "A personal website designed to showcase my projects and skills.",
    image: "https://via.placeholder.com/600",
    githubLink: "https://github.com/MadiBrom/PersonalWebsite-",
  },
];


const Coding = () => {
  useEffect(() => {
    // no-op placeholder; could add animations later
  }, []);

  return (
    <div className="projectContainer">
      {projects.map((p, i) => (
        <div key={i} className="projectCard">
          <h3 className="projectTitle">{p.title}</h3>
          <p className="projectDescription">{p.description}</p>
          <a
            className="projectLink"
            href={p.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Coding;
