import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award, MapPin, Download } from "lucide-react";
import { skills, experience } from "../components/data";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import myPhoto from "../../assets/4285d93e9147c3d1f638a51f06891fecd4f305c3.png";

const techStack = [
  { name: "React Native", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Expo", icon: "📱" },
  { name: "Redux", icon: "🔄" },
  { name: "React Query", icon: "🔍" },
  { name: "Firebase", icon: "🔥" },
  { name: "GraphQL", icon: "◼️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Jest", icon: "🧪" },
  { name: "Detox", icon: "🤖" },
  { name: "Fastlane", icon: "🚀" },
  { name: "Git", icon: "📦" },
];

export function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary mb-2" style={{ fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              About Me
            </p>
            <h1 className="text-foreground mb-6" style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Crafting Mobile{" "}
              <span className="text-primary">Experiences</span> That Matter
            </h1>
            <p className="text-muted-foreground mb-4" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              I'm a Senior/Lead React Native developer with 8+ years of experience
              building production-grade mobile applications. I specialize in
              cross-platform development, delivering apps that feel truly native on
              both iOS and Android.
            </p>
            <p className="text-muted-foreground mb-6" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              My approach combines clean architecture, performance optimization, and
              beautiful UI/UX to create apps that users love. I've led teams,
              mentored developers, and shipped apps to millions of users worldwide.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span style={{ fontSize: "0.875rem" }}>Remote / Worldwide</span>
              </div>
            </div>

            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity" style={{ fontWeight: 600 }}>
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-border aspect-square max-w-sm mx-auto">
              <img
                src={myPhoto}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-foreground text-center mb-10" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <span style={{ fontSize: "1.125rem" }}>{tech.icon}</span>
                <span className="text-foreground" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-foreground text-center mb-10" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
            Skills & Proficiency
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-foreground mb-5" style={{ fontSize: "1.0625rem", fontWeight: 600 }}>
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-foreground" style={{ fontSize: "0.875rem" }}>
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground" style={{ fontSize: "0.8125rem" }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-foreground text-center mb-10" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
            Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex ${
                    i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-7 z-10" />

                  <div
                    className={`ml-14 md:ml-0 ${
                      i % 2 === 0 ? "md:mr-[52%]" : "md:ml-[52%]"
                    } w-full md:w-auto`}
                  >
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="text-primary" style={{ fontSize: "0.8125rem", fontWeight: 600 }}>
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-foreground mb-1" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground mb-3" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}