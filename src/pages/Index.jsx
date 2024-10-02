import React from "react";
import Navbar from "../components/navbar";
import IMG from "../Profile2.jpg";
import Footer from "../components/footer";

const Index = () => {
  return (
    <div>
      <Navbar />

      <div className="id-card-container">
        <div className="image-container">
          <img src={IMG} alt="Profile" />
        </div>
        <div className="text-container">
          <h1 id="name">Madison Bromfield</h1>
          <h2>Web Developer & Educator</h2>
          <p>
            A problem solver at heart with a passion for coding and project
            management. With a background in education and a degree from
            Northern Illinois University (magna cum laude, LBS1 certified), I’ve
            shifted my focus to leveraging tech to create impactful solutions.
            From managing individualized education plans (IEPs) to building web
            apps, I thrive on tackling challenges with creativity and
            efficiency. Whether it's optimizing workflows or collaborating with
            teams, I’m all about using technology to drive results. Let's build
            something amazing together!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
