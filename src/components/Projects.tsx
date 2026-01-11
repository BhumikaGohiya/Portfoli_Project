import ProjectCard from "./ProjectCard";
import projectImage1 from "@/assets/project-1.jpg";
import projectImage2 from "@/assets/project-2.jpg";
import projectImage3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern shopping experience with seamless checkout and inventory management.",
    image: projectImage1,
  },
  {
    title: "Finance Dashboard",
    category: "UI/UX Design",
    description: "Real-time analytics dashboard for tracking investments and market trends.",
    image: projectImage2,
  },
  {
    title: "Health & Wellness App",
    category: "Mobile Development",
    description: "Cross-platform app helping users track fitness goals and mindfulness.",
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
            Projects I'm proud of
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full font-medium hover:bg-secondary transition-colors"
          >
            View all projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
