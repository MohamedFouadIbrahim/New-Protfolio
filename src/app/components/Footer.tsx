import { Github, Linkedin, Twitter, Mail, Smartphone } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-foreground" style={{ fontWeight: 600, fontSize: "1rem" }}>
                Mohamed Fouad
              </span>
            </div>
            <p className="text-muted-foreground" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
              Senior React Native Developer crafting beautiful, performant mobile experiences that users love.
            </p>
          </div>

          <div>
            <h4 className="text-foreground mb-4" style={{ fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Quick Links
            </h4>
            <div className="space-y-2">
              {["Projects", "About", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  style={{ fontSize: "0.875rem" }}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground mb-4" style={{ fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Mail, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground" style={{ fontSize: "0.8125rem" }}>
            &copy; 2026 Mohamed Fouad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
