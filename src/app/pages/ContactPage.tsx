import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Clock, Send, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { toast, Toaster } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@devportfolio.com",
    description: "Drop me a line anytime",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote / Worldwide",
    description: "Available for global projects",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon - Fri, 9am - 6pm",
    description: "Response within 24 hours",
  },
  {
    icon: MessageSquare,
    label: "Preferred",
    value: "Email or LinkedIn",
    description: "Best way to reach me",
  },
];

const socials = [
  { icon: Github, label: "GitHub", url: "#" },
  { icon: Linkedin, label: "LinkedIn", url: "#" },
  { icon: Twitter, label: "Twitter", url: "#" },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
  };

  return (
    <div className="py-16 md:py-24">
      <Toaster position="top-right" theme="light" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-primary mb-2" style={{ fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Get in Touch
          </p>
          <h1 className="text-foreground mb-4" style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Let's Build Something{" "}
            <span className="text-primary">Amazing</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            Have a mobile app idea? Need a senior React Native developer for your team?
            I'd love to hear about your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground" style={{ fontSize: "0.9375rem", fontWeight: 600 }}>
                    {info.value}
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: "0.8125rem" }}>
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <div className="pt-4">
              <p className="text-muted-foreground mb-3" style={{ fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Follow Me
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <h3 className="text-foreground mb-6" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                Send Me a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-foreground mb-2" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-input-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                    style={{ fontSize: "0.875rem" }}
                  />
                </div>
                <div>
                  <label className="block text-foreground mb-2" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-input-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                    style={{ fontSize: "0.875rem" }}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-foreground mb-2" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input-background border border-border text-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none appearance-none"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <option value="">Select type...</option>
                    <option value="new-app">New Mobile App</option>
                    <option value="existing-app">Improve Existing App</option>
                    <option value="consulting">Consulting / Code Review</option>
                    <option value="team-augmentation">Team Augmentation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-foreground mb-2" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input-background border border-border text-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none appearance-none"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <option value="">Select budget...</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                    <option value="hourly">Hourly Rate</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-foreground mb-2" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
                  Project Details
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-input-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none resize-none"
                  style={{ fontSize: "0.875rem", lineHeight: 1.7 }}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                style={{ fontWeight: 600 }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}