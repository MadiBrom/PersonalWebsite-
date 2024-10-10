import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Coding from "./Coding";
import Navbar from "../components/navbar";
import Modal from "../components/TeachingModal";
import Slideshow from "../components/Slideshow";
import IMG from "../images/peacock.jpg";
import IMG2 from "../images/baby.jpg";
import IMG3 from "../images/broken.jpg";
import IMG4 from "../images/crabapple.jpg";
import IMG5 from "../images/lion.jpg";
import IMG6 from "../images/nani2.jpg";
import HUB from "../images/hub.png";
import NIU from "../images/niu-logo-red.jpg";
import FS from "../images/fullstack.png";
import Footer from "../components/footer";

const About = () => {
  const images = [IMG, IMG2, IMG3, IMG4, IMG5, IMG6];
  const navigate = useNavigate(); // Initialize useNavigate

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isSlideshowModalOpen, setIsSlideshowModalOpen] = useState(false);

  const handleOpenModal1 = () => setIsModalOpen1(true);
  const handleCloseModal1 = () => setIsModalOpen1(false);
  const handleOpenModal2 = () => setIsModalOpen2(true);
  const handleCloseModal2 = () => setIsModalOpen2(false);

  const handleOpenSlideshowModal = () => setIsSlideshowModalOpen(true);
  const handleCloseSlideshowModal = () => setIsSlideshowModalOpen(false);

  const handleCoding = () => {
    navigate("/coding"); // Navigate to the Coding component
  };

  return (
    <div>
      <Navbar />
      <div id="title">
        <h1 id="name2">Interests & Accomplishments</h1>
      </div>

      <section className="about-page">
        {/* Left Side: Professional and Academic */}
        <div className="id-card-container">
          <div className="text-container">
            <div id="professional-container">
              <h2>Professional</h2>
              <section className="professional">
                <h3>Art</h3>
                <button onClick={handleOpenSlideshowModal}>
                  View Slideshow
                </button>

                <h3>Teaching</h3>
                <button onClick={handleOpenModal1}>Middle Level</button>
                <button onClick={handleOpenModal2}>Primary Level</button>

                <h3>Coding</h3>
                <button onClick={handleCoding}>Click Me</button>
              </section>
            </div>

            <div id="academic-container">
              <h2>Academic</h2>
              <section className="academic">
                <div id="edu">
                  <h3 id="ac-tit">Northern Illinois University</h3>
                  <div id="info">
                    <h5>Bachelor of Science, Magna Cum Laude</h5>
                    <h5>LBS1 Certification</h5>
                    <h6>2022</h6>
                  </div>
                  <div id="image">
                    <img src={NIU} alt="NIU" />
                  </div>
                </div>
                <br />
                <div id="edu">
                  <h3 id="ac-tit">Fullstack</h3>
                  <div id="info">
                    <h5>Front End Web Development</h5>
                    <h5>Express.js, Git, JavaScript, and Node Certification</h5>
                    <h6>2024</h6>
                  </div>
                  <div id="image">
                    <img src={FS} alt="FS" />
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="text-container">
            <div id="personal-container">
              <h2>Personal</h2>
              <section className="personal">
                <h3>Environmental</h3>
                <p>Add details</p>
                <h3>Travel</h3>
                <p>Add details</p>
                <h3>Crafting</h3>
                <p>Add details</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Teaching 1 */}
      <Modal isOpen={isModalOpen1} onClose={handleCloseModal1}>
        <h2>Chiddix Junior High School</h2>
        <img
          src="https://th.bing.com/th/id/R.2fb0614007557cd49e80a9481ce21500?rik=a1irBfPXnC3CPQ&riu=http%3a%2f%2fportal.tssaa.org%2fcommon%2fapi%2ffile.cfc%3fmethod%3dschoolLogo%26id%3d44%26size%3d300&ehk=6lwj4ruFJXJdBfKiXLGapD%2fhOyT7WEX%2bdokSbiaznDE%3d&risl=&pid=ImgRaw&r=0"
          alt="Chiddix"
        />
        <h4>Position:</h4>
        <p>LBS1</p>
        <h4>Duration:</h4>
        <p>August 2023 - June 2024</p>
        <br />
        <h4>Responsibilities:</h4>
        <ul id="responsible">
          <li>
            Managedindividualized projects for over 15 clients, requiring
            meticulous organization, data analysis, and documentation to ensure
            each project met specific goals and deadlines.
          </li>
          <li>
            Collaborated with cross-functional teams to coordinate project
            strategies and deliver cohesive outcomes, highlighting flexibility,
            adaptability, and effective teamwork across various domains.
          </li>
          <li>
            Regularly analyzed client data to assess progress, identify trends,
            and adjust strategies, reflecting strong analytical skills and
            attention to detail.
          </li>
          <li>
            Maintained open lines of communication with clients and
            stakeholders, ensuring transparency and fostering a collaborative
            environment to meet client needs.
          </li>
          <li>
            Developed innovative solutions to address project challenges,
            ensuring successful outcomes by adapting strategies as needed.
          </li>
          <li>
            Ledtraining sessions for team members on best practices,
            demonstrating expertise in mentoring, knowledge-sharing, and
            professional development.
          </li>
          <li>
            Integrated digital tools and technologies into project workflows to
            enhance efficiency and drive innovation.
          </li>
        </ul>
      </Modal>

      {/* Modal for Teaching 2 */}
      <Modal isOpen={isModalOpen2} onClose={handleCloseModal2}>
        <h2>Central Elementary School</h2>
        <img src={HUB} alt="Chiddix" />
        <h4>Position:</h4>
        <p>LBS1</p>
        <h4>Duration:</h4>
        <p>August 2022 - December 2022</p>
        <br />
        <h4>Responsibilities:</h4>
        <ul id="responsible">
          <li>
            Managedandexecuted customized projects for 10 clients, involving
            detailed data management and analysis to ensure tailored solutions
            were delivered on time and within scope.
          </li>
          <li>
            Provided specialized support in key areas, focusing on individual
            client needs and optimizing project outcomes through targeted
            strategies.
          </li>
          <li>
            Collaborated with team members to coordinate schedules and align
            project goals, showcasing effective communication and teamwork in
            achieving organizational objectives.
          </li>
          <li>
            Analyzed data regularly to track progress and make informed
            decisions, demonstrating strong analytical skills and attention to
            detail.
          </li>
          <li>
            Managedteamdynamics and resolved conflicts, maintaining a productive
            work environment and ensuring project success.
          </li>
          <li>
            Ensured compliance with organizational standards and maintained
            comprehensive records, reflecting strong organizational skills.
          </li>
          <li>
            Integrated technological solutions to improve processes and enhance
            project efficiency, showcasing innovation and proficiency with
            digital tools.
          </li>
        </ul>
      </Modal>
      <Modal isOpen={isSlideshowModalOpen} onClose={handleCloseSlideshowModal}>
        <h2>Slideshow</h2>
        <Slideshow images={images} />
      </Modal>
      <Footer />
    </div>
  );
};

export default About;
