import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "../components/data";
import { ProjectCard } from "../components/ProjectCard";

// const categories = ["All", "Fintech & Banking", "Health & Fitness", "E-Commerce", "Food Delivery", "Food & Restaurants", "Social Platform", "Healthcare"];
const categories = ["All",   "E-Commerce", "Food & Restaurants",];

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.subtitle === activeCategory);

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-primary mb-2" style={{ fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            My Work
          </p>
          <h1 className="text-foreground mb-4" style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Projects & Case Studies
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            A collection of mobile applications I've designed and developed for clients
            across various industries. Each project showcases different technical challenges and solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
              style={{ fontSize: "0.8125rem", fontWeight: 500 }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground" style={{ fontSize: "1.0625rem" }}>
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
