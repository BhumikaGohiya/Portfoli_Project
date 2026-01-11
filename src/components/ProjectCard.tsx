import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, category, description, image, index }: ProjectCardProps) => {
  return (
    <div 
      className="group hover-lift bg-card rounded-2xl overflow-hidden border border-border"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-primary text-sm font-medium mb-2">{category}</p>
        <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          View details <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
