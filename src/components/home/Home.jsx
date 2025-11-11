import React from "react";
import { useSpring, animated } from "@react-spring/web";
import IMG from "../images/Profile2.jpg";
import "./home.css";

const Home = () => {
  const fadeInFromLeft = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 800 },
  });

  const fadeInFromRight = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 800 },
  });

  return (
    <div>
      <div className="id-card-container">
        <animated.div className="image-container" style={fadeInFromLeft}>
          <img src={IMG} alt="Profile" />
        </animated.div>

        <animated.div className="text-container" style={fadeInFromRight}>
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
        </animated.div>
      </div>
    </div>
  );
};

export default Home;
