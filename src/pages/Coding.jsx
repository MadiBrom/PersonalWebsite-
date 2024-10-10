import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Navbar from "../components/navbar";

const projects = [
  {
    title: "Fidget App",
    description: "A fun app with space-themed confetti.",
    link: "#",
  },
  {
    title: "Yarnia",
    description: "A calculator inspired by the stars.",
    link: "#",
  },
  {
    title: "Star Tracker",
    description: "Track constellations and planets.",
    link: "#",
  },
];

// Star confetti settings
const confettiSettings = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["star"],
  colors: ["#FF00FF", "#9400D3", "#D8BFD8", "#FFFFFF", "#8A2BE2"],
};

function shootConfetti() {
  confetti({
    ...confettiSettings,
    particleCount: 40,
    scalar: 1.2,
  });

  confetti({
    ...confettiSettings,
    particleCount: 10,
    scalar: 0.75,
  });
}

const Coding = () => {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    // Trigger star confetti when the welcome message appears
    shootConfetti();

    // Set a timer to show the projects after 3 seconds and fade out the welcome message
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, []);

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1
          style={showProjects ? styles.hidden : styles.welcomeText}
          className="fade-out"
        >
          Welcome to My Coding!
        </h1>

        {showProjects && (
          <div style={styles.projectContainer}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={styles.projectCard}
                className="project-card"
              >
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
                <a href={project.link} style={styles.projectLink}>
                  View Project
                </a>
              </div>
            ))}
          </div>
        )}
      </div>{" "}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px), 
                      radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
    backgroundSize: "80px 80px",
    backgroundPosition: "0 0, 40px 40px",
  },
  welcomeText: {
    fontSize: "3rem",
    color: "#FF00FF", // Neon purple accent
    textShadow: "2px 2px 4px rgba(255, 255, 255, 0.6)",
    opacity: 1,
    transition: "opacity 2s ease-in-out",
  },
  hidden: {
    opacity: 0, // Fully fade out the welcome message
    transition: "opacity 2s ease-in-out",
  },
  projectContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "40px",
  },
  projectCard: {
    backgroundColor: "#2C2C54",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    padding: "20px",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    textAlign: "center",
  },
  projectTitle: {
    fontSize: "1.5rem",
    color: "#FF00FF", // Neon purple
    marginBottom: "10px",
  },
  projectDescription: {
    fontSize: "1rem",
    color: "#D8BFD8",
    marginBottom: "20px",
  },
  projectLink: {
    fontSize: "1rem",
    color: "#FFFFFF",
    backgroundColor: "#FF00FF",
    padding: "10px 15px",
    borderRadius: "5px",
    textDecoration: "none",
    transition: "background-color 0.3s",
  },
};

// Add hover effects and fade-out animation
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  .project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .project-card:hover a {
    background-color: #9400D3;
  }

  .fade-out {
    animation: fadeOut 2s forwards;
  }

  @keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }  // Fully fades out
  }
`;
document.head.appendChild(styleSheet);

export default Coding;
