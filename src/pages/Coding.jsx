import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Navbar from "../components/navbar";

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

const projects = [
  {
    title: "Fidget App",
    description:
      "A fun app with fidget themed backgrounds. They are user friendly, and promote sitting for hours playing as your mouse.",
    image: "https://via.placeholder.com/600", // Replace with actual image URL
    githubLink: "https://github.com/MadiBrom/Testing",
  },
  {
    title: "Yarnia",
    description:
      "An app dedicated to connecting readers and writers. Utilizing a rich text editor and interactive users, Yarnia provides a space for writers and readers to enjoy content.",
    image: "https://via.placeholder.com/600", // Replace with actual image URL
    githubLink: "https://github.com/margonautix/yarnia.CAPSTONE",
  },
  {
    title: "WolffPack",
    description:
      "An interactive, user-friendly fitness app. Created to connect users through their shared love for fitness. It is a space where you can find workout packages, healthy snacks, and connection to your very own personal trainer.",
    image: "https://via.placeholder.com/600", // Replace with actual image URL
    githubLink: "https://github.com/DAlbanese5/Wolffpack-fitness",
  },
  {
    title: "Book Buddy",
    description:
      "A project that was done during my education. It has many basic features of a user friendly website.",
    image: "https://via.placeholder.com/600", // Replace with actual image URL
    githubLink: "https://github.com/MadiBrom/bookbuddy",
  },
];

// Modal component to show project details
const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <h2>{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          style={modalStyles.image}
        />
        <a
          href={project.githubLink}
          style={modalStyles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
        <button onClick={onClose} style={modalStyles.closeButton}>
          X
        </button>
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black overlay
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "rgba(51, 51, 51, 0.55)", // Dark grey with some transparency
    padding: "40px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "700px",
    textAlign: "center",
    color: "#fff", // Make text white for contrast against dark background
    position: "relative", // Make the modal a positioned element
  },
  image: {
    maxWidth: "100%",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  link: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#6200FF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#6200FF",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "50%", // Make it a round button
    border: "none",
    cursor: "pointer",
    fontSize: "16px", // Adjust font size for better visibility
  },
};

const Coding = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [hideWelcome, setHideWelcome] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
                <button
                  onClick={() => openModal(project)}
                  style={styles.projectLink}
                >
                  View Project
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Render the modal when a project is selected */}
        {selectedProject && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            project={selectedProject}
          />
        )}
      </div>
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
