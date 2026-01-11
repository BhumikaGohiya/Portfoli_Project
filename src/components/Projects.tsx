import ProjectCard from "./ProjectCard";
import projectImage1 from "@/assets/project-1.jpg";
import projectImage2 from "@/assets/project-2.jpg";
import projectImage3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Salesforce Test Automation",
    category: "Test Automation",
    description: "Achieved 85% automation coverage by automating 500+ test cases on Salesforce-based financial systems at Accenture.",
    image: projectImage1,
  },
  {
    title: "CI/CD Pipeline Integration",
    category: "DevOps & QA",
    description: "Integrated automated test suites into Jenkins CI/CD pipelines, reducing deployment time by 15% and manual effort by 40%.",
    image: projectImage2,
  },
  {
    title: "AI-Powered Healthcare Hiring",
    category: "Data Analytics & AI",
    description: "Analyzed 200+ healthcare datasets using Python, created AI personas for onboarding simulations and DLT-based credential verification.",
    image: projectImage3,
  },
];

const Projects = () => {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Selected work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Projects & Experience
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
