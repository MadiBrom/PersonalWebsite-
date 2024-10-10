import React from "react";

const CodingModal = ({ isOpen, onClose, project }) => {
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
          Close
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
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "80%",
    maxWidth: "600px",
    textAlign: "center",
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
    backgroundColor: "#6200FF",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default CodingModal;
