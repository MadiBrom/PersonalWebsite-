import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Navbar from "../components/navbar";

const projects = [
  {
    title: "Fidget App",
    description:
      "A fun app with fidget themed backgrounds. They are user friendly, and prompote sitting for hours playing as your mouse.",
    link: "#",
  },
  {
    title: "Yarnia",
    description:
      "An app dedicated to connecting readers and writers. Utilizing a rich text editor and interactive users, Yarnia provides a space for writers and readers to enjoy content.",
    link: "#",
  },
  {
    title: "WolffPack",
    description:
      "An interactive, user friendly fitness app. Created to connect users through their shared love for fitness. It is a space wwhere you can find workout packages, healthy snacks, and connection to your very own personal trainer.",
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
  colors: ["#6200FF", "#8A00FF", "#D8BFD8", "#FFFFFF", "#460080"],
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
  const [hideWelcome, setHideWelcome] = useState(false);

  useEffect(() => {
    // Trigger star confetti when the welcome message appears
    shootConfetti();

    // Show projects after 3 seconds
    const showProjectsTimer = setTimeout(() => {
      setShowProjects(true);
    }, 3000);

    // Hide welcome message after 8 seconds
    const hideWelcomeTimer = setTimeout(() => {
      setHideWelcome(true);
    }, 8000); // Set longer delay for welcome message to disappear

    return () => {
      clearTimeout(showProjectsTimer);
      clearTimeout(hideWelcomeTimer); // Cleanup both timers when the component unmounts
    };
  }, []);

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        {/* Show the welcome message for a longer period before hiding */}
        {!hideWelcome && (
          <h1
            style={showProjects ? styles.welcomeText : styles.welcomeText}
            className="fade-out"
          >
            Welcome to My Coding!
          </h1>
        )}

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
    fontSize: "5rem", // Increased font size for prominence
    color: "#6200FF", // Updated neon purple accent
    textShadow: "2px 2px 4px rgba(255, 255, 255, 0.6)",
    opacity: 1,
    textAlign: "center", // Center text horizontally
    margin: "0", // Remove default margins
    position: "absolute", // Ensure it stays centered
    top: "50%", // Vertically center
    left: "50%", // Horizontally center
    transform: "translate(-50%, -50%)", // Translate to perfectly center
    transition: "opacity 2s ease-in-out",
  },
  hidden: {
    opacity: 0, // Fully fade out the welcome message
    transition: "opacity 2s ease-in-out",
  },
  projectContainer: {
    display: "flex", // Use flexbox for centering the cards
    flexDirection: "column", // Ensure the cards stack vertically
    alignItems: "center",
    justifyContent: "center",
    gap: "40px", // Space between cards
    padding: "40px",
    height: "100vh", // Ensure full height is taken up to center the content vertically
    width: "100vw",
  },
  projectCard: {
    backgroundColor: "#2C2C54", // Deep space color
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    padding: "20px",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    textAlign: "center",
    height: "300px",
    width: "600px", // Size you specified
    display: "flex",
    flexDirection: "column", // Ensure content is stacked vertically
    justifyContent: "center", // Center content inside the card
    alignItems: "center", // Horizontally center the content
  },
  projectTitle: {
    fontSize: "1.5rem",
    color: "#6200FF", // Updated neon purple for project titles
    marginBottom: "10px",
    textShadow: "2px 2px 1px black",
  },
  projectDescription: {
    fontSize: "1rem",
    color: "#D8BFD8", // Softer purple description text
    marginBottom: "20px",
  },
  projectLink: {
    fontSize: "1rem",
    color: "#FFFFFF",
    backgroundColor: "#6200FF", // Neon purple background
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
    background-color: #8A00FF; /* Darker neon purple on hover */
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
