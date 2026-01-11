import { useState } from "react";
import { ExternalLink, Github, Brain, BarChart3, MessageSquare, FileText, Building2, Users, Shield, Workflow, Download, GraduationCap, Code } from "lucide-react";

type ProjectCategory = "academic" | "technical";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("academic");

  const academicProjects = [
    {
      title: "DLT-Driven Hospital Workforce Management",
      description: "Master's Thesis & White Paper",
      longDescription: "Final thesis for M.Eng in Technology Innovation Management at Carleton University. Explored Distributed Ledger Technology (DLT) to transform hospital hiring and onboarding processes. Delivered a strategic white paper for ConsideraCare with blockchain-based solutions for credential verification and smart contract automation.",
      technologies: ["DLT/Blockchain", "Activity Theory", "Healthcare", "Text Analytics", "Research"],
      icon: Building2,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      pdfLink: "/documents/DLT-Hospital-Workforce-Management-Thesis.pdf",
      whitePaperLink: "/documents/ConsideraCare-DLT-White-Paper.pdf",
      highlights: [
        "Blockchain for secure credential verification",
        "Smart contracts for automated onboarding",
        "Industry partnership with ConsideraCare",
      ],
    },
    {
      title: "AI Art Sentiment Analysis",
      description: "Data Analytics Project",
      longDescription: "Built a sentiment analysis pipeline analyzing thousands of YouTube comments to understand public perception of AI-generated art. Applied NLP techniques including text preprocessing, sentiment classification, and data visualization.",
      technologies: ["Python", "NLP", "Sentiment Analysis", "YouTube API", "Data Visualization"],
      icon: Brain,
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      github: "https://github.com/BhumikaGohiya/AI-Art-Sentiment-Analysis",
      highlights: [
        "Analyzed 1000+ YouTube comments",
        "NLP-based sentiment classification",
        "Visual insights dashboard",
      ],
    },
  ];

  const technicalProjects = [
    {
      title: "Coming Soon: API Test Automation Framework",
      description: "Technical Project",
      longDescription: "A comprehensive REST API testing framework built with Rest Assured, featuring data-driven testing, CI/CD integration with Jenkins, and detailed reporting.",
      technologies: ["Java", "Rest Assured", "TestNG", "Jenkins", "Maven"],
      icon: Code,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      github: undefined as string | undefined,
      pdfLink: undefined as string | undefined,
      whitePaperLink: undefined as string | undefined,
      highlights: [
        "Data-driven testing approach",
        "CI/CD pipeline integration",
        "Comprehensive test reporting",
      ],
    },
    {
      title: "Coming Soon: Selenium UI Automation Suite",
      description: "Technical Project",
      longDescription: "Page Object Model based UI automation framework using Selenium WebDriver with cross-browser testing capabilities and parallel execution.",
      technologies: ["Selenium", "Java", "Cucumber", "BDD", "TestNG"],
      icon: Code,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      github: undefined as string | undefined,
      pdfLink: undefined as string | undefined,
      whitePaperLink: undefined as string | undefined,
      highlights: [
        "Page Object Model architecture",
        "Cross-browser testing",
        "BDD with Cucumber",
      ],
    },
  ];

  const projects = activeCategory === "academic" ? academicProjects : technicalProjects;

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-medium rounded-full mb-4">
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Projects
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
            Academic research and technical projects showcasing my skills in automation, data analytics, and innovation
          </p>

          {/* Category Tabs */}
          <div className="inline-flex items-center gap-2 p-1.5 bg-slate-100 rounded-full">
            <button
              onClick={() => setActiveCategory("academic")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeCategory === "academic"
                  ? "bg-white text-violet-700 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <GraduationCap size={18} />
              Academic Projects
            </button>
            <button
              onClick={() => setActiveCategory("technical")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeCategory === "technical"
                  ? "bg-white text-violet-700 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Code size={18} />
              Technical Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative ${project.bgColor} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500`}
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${project.color} opacity-10 rounded-bl-full`} />

              <div className="relative p-8">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full`}>
                    {project.description}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.longDescription}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-500">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white font-medium text-sm rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  {project.pdfLink && (
                    <a
                      href={project.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white font-medium text-sm rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                      <Download size={16} />
                      Thesis PDF
                    </a>
                  )}
                  {project.whitePaperLink && (
                    <a
                      href={project.whitePaperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium text-sm rounded-full hover:shadow-md transition-all duration-300"
                    >
                      <FileText size={16} />
                      White Paper
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
