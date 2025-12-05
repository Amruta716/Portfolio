import React from "react";
import "./experience.css";

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Tech Sierra Pvt Ltd ",
      duration: "Sept 2025 - Nov 2025",
      details: [
        "Developed and customized the Wunderkind platform, focusing on updating email templates and enhancing UI design.",
        "Fixed redirect and sender-related issues to improve email workflow and user experience.",
        "Contributed to UI improvements, debugging, and workflow optimization.",
        "Collaborated with the team to manage and track tasks efficiently using Jira."
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Enfocar IT Solution Pvt Ltd",
      duration: "April 2025 – June 2025",
      details: [
        "Designed responsive web interfaces and user-centered prototypes using Figma.",
        "Created interactive wireframes to streamline design discussions.",
        "Contributed to major UI/UX projects: The Academy Website (modern responsive design) and Medicine Tracker App (mobile-friendly prototype)."
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-heading">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <div className="content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="duration">{exp.duration}</span>
              <ul>
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="circle"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
