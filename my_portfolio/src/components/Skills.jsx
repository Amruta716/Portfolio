import "./skill.css";
import htmlImg from "../Asserts/html.png";
import cssImg from "../Asserts/css.jpg";
import jsImg from "../Asserts/js.png";
import reactImg from "../Asserts/React.png";
import nextImg from "../Asserts/nextjs.png";
import git from "../Asserts/git.png";
import github from "../Asserts/github.png";
import jira from "../Asserts/jira.jpg";

export default function Skill() {
  const skills = [
    { name: "HTML", img: htmlImg, level: "Advanced" },
    { name: "CSS", img: cssImg, level: "Advanced" },
    { name: "JavaScript", img: jsImg, level: "Advanced" },
    { name: "React.Js", img: reactImg, level: "Advanced" },
    { name: "Next.Js", img: nextImg, level: "Beginner" },
    // { name: "SQL", img: nextImg, level: "Intermediate" },

    { name: "Git", img: git, level: "Tool" },
    { name: "GitHub", img: github, level: "Tool" },
    { name: "Jira", img: jira, level: "Tool" },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title"> Skills</h2>
      <p className="skills-subtitle">
        Tools & technologies I use to build modern applications
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} className="skill-img" />
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-level">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
