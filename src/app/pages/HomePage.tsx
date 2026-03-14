import {
  ArrowRight,
  Smartphone,
  Code2,
  Zap,
  Shield,
  ChevronRight,
  Quote,
} from "lucide-react";
import { Link } from "react-router";
import { projects, testimonials } from "../components/data";
import { ProjectCard } from "../components/ProjectCard";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";

import myPhoto from "../../assets/4285d93e9147c3d1f638a51f06891fecd4f305c3.png";

const heroStats = [
  { value: "6+", label: "Years Experience" },
  { value: "20+", label: "Apps Delivered" },
];

const services = [
  {
    icon: Smartphone,
    title: "Cross-Platform Apps",
    description:
      "Build once, deploy everywhere. React Native apps for iOS and Android with native performance.",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Scalable, maintainable codebases with TypeScript, proper state management, and testing.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "60fps animations, optimized rendering, and fast startup times for the best user experience.",
  },
  {
    icon: Shield,
    title: "Enterprise Solutions",
    description:
      "Secure, compliant applications with CI/CD pipelines, OTA updates, and monitoring.",
  },
];

export function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-6"
                style={{ fontSize: "0.8125rem", fontWeight: 600 }}
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for new projects
              </div>

              <h1 className="text-foreground mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                React Native / Full Stack{" "}
                <span className="text-primary">Developer</span>
              </h1>

              <p className="text-muted-foreground mb-8 max-w-lg" style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
                I build high-performance mobile applications and full-stack
                solutions that scale. 6+ years of experience delivering
                production-grade apps for startups and enterprises alike.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  style={{ fontWeight: 600 }}
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  Let's Talk
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 rotate-6" />
                <div className="absolute inset-0 rounded-3xl overflow-hidden border border-border">
                  <img
                    src={myPhoto}
                    alt="Developer portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-foreground" style={{ fontSize: "0.875rem", fontWeight: 600 }}>20+ Apps</p>
                      <p className="text-muted-foreground" style={{ fontSize: "0.75rem" }}>Delivered</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground" style={{ fontSize: "0.875rem", fontWeight: 600 }}>React Native</p>
                      <p className="text-muted-foreground" style={{ fontSize: "0.75rem" }}>Expert</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 max-w-sm mx-auto gap-6 mt-16 pt-12 border-t border-border"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-primary" style={{ fontSize: "2rem", fontWeight: 800 }}>
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-1" style={{ fontSize: "0.875rem" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary mb-2" style={{ fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              What I Do
            </p>
            <h2 className="text-foreground" style={{ fontSize: "2rem", fontWeight: 700 }}>
              Services & Expertise
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground mb-2" style={{ fontSize: "1.0625rem", fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-14"
          >
            <div>
              <p className="text-primary mb-2" style={{ fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Portfolio
              </p>
              <h2 className="text-foreground" style={{ fontSize: "2rem", fontWeight: 700 }}>
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-primary hover:underline"
              style={{ fontSize: "0.875rem", fontWeight: 600 }}
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                featured={i === 0}
              />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-primary"
              style={{ fontSize: "0.875rem", fontWeight: 600 }}
            >
              View All Projects
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary mb-2" style={{ fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Testimonials
            </p>
            <h2 className="text-foreground" style={{ fontSize: "2rem", fontWeight: 700 }}>
              What Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground mb-6" style={{ fontSize: "0.9375rem", lineHeight: 1.8, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"
                    style={{ fontSize: "0.8125rem", fontWeight: 700 }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-foreground" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
                      {t.name}
                    </p>
                    <p className="text-muted-foreground" style={{ fontSize: "0.8125rem" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-10 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-foreground mb-4" style={{ fontSize: "2rem", fontWeight: 700 }}>
                Have a Project in Mind?
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
                Let's discuss how I can help bring your mobile app idea to life with
                clean code, stunning design, and top-tier performance.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                style={{ fontSize: "1rem", fontWeight: 600 }}
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}