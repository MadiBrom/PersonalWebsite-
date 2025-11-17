import React from "react";
import "./education.css";
import NIU from "./niu-logo-red.jpg";
import FULLSTACK from "./fullstack.png";

const items = [
  {
    school: "University of Illinois at Chicago + Fullstack Academy",
    location: "Remote",
    credential: "Software Engineering Certificate",
    honors: "",
    extra: "",
    dates: "Oct 2024",
    logo: FULLSTACK,
  },
  {
    school: "Northern Illinois University",
    location: "DeKalb, IL",
    credential: "Bachelor of Science in Education",
    honors: "Magna Cum Laude",
    extra: "LBS1 Certification",
    dates: "Dec 2022",
    logo: NIU,
  },
];

const Dot = () => (
  <span className="edu-sep" aria-hidden="true">
    &middot;
  </span>
);

const Education = ({ showHeading = false }) => {
  return (
    <section className="edu" aria-labelledby="edu-heading">
      {showHeading && (
        <h2 id="edu-heading" className="edu-heading">
          Education
        </h2>
      )}

      <ul className="edu-list" role="list">
        {items.map((e, i) => (
          <li key={i} className="edu-item">
            <div className="edu-logo">
              {e.logo && <img src={e.logo} alt="" aria-hidden="true" />}
            </div>

            <div className="edu-main">
              <div className="edu-top">
                <span className="edu-school">{e.school}</span>
                {e.location && (
                  <>
                    <Dot />
                    <span className="edu-location">{e.location}</span>
                  </>
                )}
              </div>

              <div className="edu-bottom">
                <span className="edu-credential">{e.credential}</span>
                {e.honors && (
                  <>
                    <Dot />
                    <span className="edu-meta">{e.honors}</span>
                  </>
                )}
                {e.extra && (
                  <>
                    <Dot />
                    <span className="edu-meta">{e.extra}</span>
                  </>
                )}
              </div>
            </div>

            <time className="edu-dates">{e.dates}</time>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;

