import { motion } from "motion/react";
import { ExternalLink, Star, Users, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tags: string[];
    stats: { users: string; rating: string; downloads: string };
    color: string;
  };
  index: number;
  featured?: boolean;
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "h-64 md:h-full" : "h-52"}`}>
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-white"
            style={{ fontSize: "0.75rem", fontWeight: 600, backgroundColor: project.color }}
          >
            {project.subtitle}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-foreground" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
            {project.title}
          </h3>
          <button className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-1">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <p className="text-muted-foreground mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
              style={{ fontSize: "0.75rem", fontWeight: 500 }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users className="w-3.5 h-3.5" />
            <span style={{ fontSize: "0.8125rem", fontWeight: 500 }}>{project.stats.users}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Star className="w-3.5 h-3.5 text-yellow-500" />
            <span style={{ fontSize: "0.8125rem", fontWeight: 500 }}>{project.stats.rating}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Download className="w-3.5 h-3.5" />
            <span style={{ fontSize: "0.8125rem", fontWeight: 500 }}>{project.stats.downloads}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
