import "./projects.css";
import ecommerce from "../Asserts/Ecommerce.jpg";
import quiz from "../Asserts/quiz.png";
import portfolio from "../Asserts/portfolio.png";
export default function Projects() {
  const projects = [
     {
      title: "Portfolio website",
      skills: ["HTML", "CSS", "JavaScript", "React Js"],
      desc: "Showcases my projects, skills, and experience with a modern responsive design built using React JS.",
      image: portfolio,
      github: "https://github.com/Amruta716",
      live:"https://portfolio-mx81j7qe2-amruta-nighots-projects.vercel.app",
      
    },
    {
      title: "E-commerce Website",
      skills: ["HTML", "CSS", "JavaScript", "API"],
      desc: "Built a responsive shopping UI with cart management, API integration, and dynamic product display.",
      image: ecommerce, // replace with your project image
      github: "https://github.com/Amruta716",
      live:"https://e-commerce-website-d5o097fci-amruta-nighots-projects.vercel.app",
    },
    {
      title: "Quiz Website",
      skills: ["HTML", "CSS", "JavaScript"],
      desc: "Interactive quiz platform with live scoring, validations, and user-friendly interface.",
      image: quiz,
      github: "https://github.com/Amruta716",
       live:"https://quiz-proj-97dujur8h-amruta-nighots-projects.vercel.app",
      
    },
   
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading"> Projects</h2>

      {projects.map((project, index) => (
        <div
          className={`project-card ${index % 2 === 1 ? "reverse" : ""}`}
          key={index}
        >
          <div className="project-left">
            <h3>{project.title}</h3>

            <div className="project-tags">
              {project.skills.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <p>{project.desc}</p>

            <div className="project-buttons">
              <a href={project.github} className="btn github">
                View Github
              </a>

               <a href={project.live} className="btn live">
                View project ↗
              </a>
            </div>
          </div>

          <div className="project-right">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </section>
  );
}
