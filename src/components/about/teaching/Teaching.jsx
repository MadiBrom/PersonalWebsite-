import React, { useState } from "react";
import FULLSTACK from "../education/fullstack.png";
import HUB from "./hub.png";
import CHARGER from "./ChiddxLogo.png";
import IRONMEN from "./ironmen.jpg";
import COCO from "./coco.jpg";
import "./teaching.css";

const roles = [
  {
    org: "Central Elementary School",
    role: "LBS1",
    start: "2022-08",
    end: "2022-12",
    type: "school",
    bullets: [
      "Delivered individualized support and tracked outcomes across student goals.",
      "Coordinated with cross-functional teams to align plans and timelines.",
      "Applied data-driven adjustments to improve results.",
    ],
    mascot: HUB,
  },
  {
    org: "Chiddix Junior High School",
    role: "LBS1",
    start: "2023-08",
    end: "2024-06",
    type: "school",
    bullets: [
      "Managed 15+ individualized plans with meticulous documentation.",
      "Led training sessions and supported teammate development.",
      "Integrated digital tools to streamline processes.",
    ],
    mascot: CHARGER,
  },
  {
    org: "Normal Community High School",
    role: "LBS1",
    start: "2024-08",
    end: "2024-10",
    type: "school",
    bullets: [
      "Collaborated across departments for cohesive student outcomes.",
      "Maintained open stakeholder communication and transparency.",
      "Adapted strategies to meet evolving needs.",
    ],
    mascot: IRONMEN,
  },
  {
    org: "Fullstack Academy",
    role: "Mentor",
    start: "2024-11",
    end: "Now",
    type: "mentor",
    bullets: [
      "Guided learners through modern web dev foundations.",
      "Provided feedback on projects and code quality.",
    ],
    mascot: FULLSTACK,
  },
  {
    org: "Coco Coders",
    role: "Instructor",
    start: "2025-11",
    end: "Now",
    type: "mentor",
    bullets: [
      "Supported beginner coders in structured learning paths.",
      "Facilitated engaging, accessible learning experiences.",
    ],
    mascot: COCO,
  },
].sort((a, b) => (a.start > b.start ? 1 : -1));

const Teaching = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const fmtLong = (iso) => {
    if (!iso) return "";
    if (iso === "Present" || iso === "Now") return "Present";
    const [y, m] = iso.split("-");
    const mm = parseInt(m || "1", 10);
    const name = monthNames[Math.max(1, Math.min(mm, 12)) - 1];
    return `${name} ${y}`;
  };

  const fullRange = (start, end) => `${fmtLong(start)} – ${fmtLong(end)}`;

  return (
    <div className="timeline">
      <div className="timeline-label top">2022</div>

      <div className="timeline-items">
        {roles.map((item, idx) => {
          const open = openIndex === idx;
          return (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                {item.mascot ? (
                  <img src={item.mascot} alt={`${item.org} mascot`} />
                ) : (
                  <div className="mascot-placeholder" aria-hidden="true" />
                )}
              </div>

              <div className="timeline-content">
                <h3 className="org">{item.org}</h3>
                <p className="role">{item.role}</p>
                <p className="dates-line">{fullRange(item.start, item.end)}</p>

                <button
                  className="bullets-toggle"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : idx)}
                >
                  {open ? "Hide details" : "Show details"}
                </button>

                {open && (
                  <ul className="bullets">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="timeline-label bottom">NOW</div>
    </div>
  );
};

export default Teaching;
