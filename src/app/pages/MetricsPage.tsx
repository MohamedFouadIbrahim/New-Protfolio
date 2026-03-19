import { motion } from "motion/react";
import {
  Zap,
  Package,
  Layers,
  Image,
  Box,
  Cpu,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

type Direction = "down" | "up";

interface Metric {
  label: string;
  before: string;
  after: string;
  unit?: string;
  improvement: string;
  direction: Direction;
  note?: string;
}

const metrics: Metric[] = [
  {
    label: "Main JS Bundle",
    before: "~952 KB",
    after: "369 KB",
    improvement: "−61%",
    direction: "down",
    note: "8 unused packages (recharts, react-dnd, embla, cmdk, vaul…) removed",
  },
  {
    label: "npm Dependencies",
    before: "285",
    after: "234",
    improvement: "−51 pkgs",
    direction: "down",
    note: "Fewer packages = faster installs & smaller attack surface",
  },
  {
    label: "Code Splitting",
    before: "1 chunk (eager)",
    after: "6 lazy chunks",
    improvement: "6×",
    direction: "up",
    note: "Each page loads only its own JS on first visit",
  },
  {
    label: "Navbar Blur Radius",
    before: "backdrop-blur-xl",
    after: "backdrop-blur-md",
    improvement: "−50%",
    direction: "down",
    note: "Fixed elements re-composite every frame — lower radius = less GPU work",
  },
  {
    label: "Navbar Repaint Layer",
    before: "Main layer",
    after: "GPU compositor layer",
    improvement: "0 repaints",
    direction: "up",
    note: "translateZ(0) promotes nav to its own layer — scroll never triggers a repaint",
  },
  {
    label: "Animation Duration",
    before: "500 ms",
    after: "300 ms",
    improvement: "−200 ms",
    direction: "down",
    note: "Scroll-triggered whileInView animations finish faster, freeing frame budget sooner",
  },
  {
    label: "Stagger Delay per Item",
    before: "100 ms",
    after: "50 ms",
    improvement: "−50%",
    direction: "down",
    note: "Shorter stagger = fewer concurrent animations competing for frame budget",
  },
  {
    label: "Skill Bar Animation",
    before: "width (layout reflow)",
    after: "scaleX (GPU transform)",
    improvement: "No reflow",
    direction: "up",
    note: "Animating width triggers layout recalculation every frame; scaleX is GPU-only",
  },
  {
    label: "Decorative Blur Divs",
    before: "blur-3xl (unbounded)",
    after: "blur-2xl + contain:paint",
    improvement: "Isolated",
    direction: "up",
    note: "paint containment prevents blur from affecting the scroll repaint budget",
  },
  {
    label: "Project Image Loading",
    before: "eager (all at init)",
    after: "loading=\"lazy\"",
    improvement: "On-demand",
    direction: "up",
    note: "Off-screen images don't block initial render or consume bandwidth",
  },
];

const icons: Record<string, React.ElementType> = {
  "Main JS Bundle": Package,
  "npm Dependencies": Box,
  "Code Splitting": Layers,
  "Navbar Blur Radius": Cpu,
  "Navbar Repaint Layer": Zap,
  "Animation Duration": Zap,
  "Stagger Delay per Item": Zap,
  "Skill Bar Animation": Cpu,
  "Decorative Blur Divs": Cpu,
  "Project Image Loading": Image,
};

const fixCategories = [
  {
    title: "GPU / Paint",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    items: [
      "Navbar promoted to its own compositor layer (translateZ(0))",
      "backdrop-blur-xl → backdrop-blur-md",
      "blur-3xl decorative divs contained with paint isolation",
    ],
  },
  {
    title: "Animation Budget",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    items: [
      "whileInView duration 500 ms → 300 ms",
      "Stagger delay 100 ms → 50 ms per item",
      "Skill bars: layout-reflow width → GPU scaleX",
    ],
  },
  {
    title: "Bundle & Loading",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    items: [
      "All 4 pages code-split with React.lazy + Suspense",
      "8 unused packages removed (−51 total deps)",
      "Project images deferred with loading=\"lazy\"",
    ],
  },
];

export function MetricsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p
            className="text-primary mb-2"
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Performance Audit
          </p>
          <h1
            className="text-foreground mb-4"
            style={{
              fontSize: "clamp(1.75rem,4vw,2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Before <span className="text-muted-foreground/40">vs</span>{" "}
            <span className="text-primary">After</span> Optimization
          </h1>
          <p
            className="text-muted-foreground max-w-xl mx-auto"
            style={{ fontSize: "1rem", lineHeight: 1.8 }}
          >
            10 targeted fixes across GPU compositing, animation overhead, bundle
            size, and image loading — all to eliminate scroll lag and cut initial
            load time.
          </p>
        </motion.div>

        {/* Summary cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {[
            { label: "Bundle reduction", value: "−61%", icon: TrendingDown, color: "text-green-400", bg: "bg-green-500/10" },
            { label: "Packages removed", value: "−51", icon: Package, color: "text-blue-400", bg: "bg-blue-500/10" },
            { label: "Fixes applied", value: "10", icon: CheckCircle2, color: "text-primary", bg: "bg-primary/10" },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="p-6 rounded-2xl bg-card border border-border text-center"
            >
              <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mx-auto mb-3`}>
                <card.icon className={`w-6 h-6 ${card.color}`} />
              </div>
              <p className={`${card.color} mb-1`} style={{ fontSize: "2rem", fontWeight: 800 }}>
                {card.value}
              </p>
              <p className="text-muted-foreground" style={{ fontSize: "0.875rem" }}>
                {card.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fix categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5 mb-16"
        >
          {fixCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className={`p-5 rounded-2xl border ${cat.border} ${cat.bg}`}
            >
              <h3 className={`${cat.color} mb-4`} style={{ fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${cat.color} mt-0.5 shrink-0`} />
                    <span className="text-foreground" style={{ fontSize: "0.8125rem", lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-foreground mb-8 text-center" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
            Metric-by-Metric Breakdown
          </h2>
        </motion.div>

        <div className="space-y-4">
          {metrics.map((m, i) => {
            const Icon = icons[m.label] ?? Zap;
            const isDown = m.direction === "down";
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="p-5 rounded-2xl bg-card border border-border"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Icon + label */}
                  <div className="flex items-center gap-3 sm:w-56 shrink-0">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
                      {m.label}
                    </span>
                  </div>

                  {/* Before → After */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span
                      className="px-3 py-1 rounded-lg bg-red-500/10 text-red-400 font-mono shrink-0"
                      style={{ fontSize: "0.8125rem" }}
                    >
                      {m.before}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground/40 shrink-0" />
                    <span
                      className="px-3 py-1 rounded-lg bg-green-500/10 text-green-400 font-mono shrink-0"
                      style={{ fontSize: "0.8125rem" }}
                    >
                      {m.after}
                    </span>
                    {m.note && (
                      <span
                        className="text-muted-foreground hidden lg:block truncate"
                        style={{ fontSize: "0.8125rem", lineHeight: 1.5 }}
                      >
                        {m.note}
                      </span>
                    )}
                  </div>

                  {/* Improvement badge */}
                  <div
                    className={`shrink-0 flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${
                      isDown
                        ? "bg-green-500/10 text-green-400"
                        : "bg-blue-500/10 text-blue-400"
                    }`}
                    style={{ fontSize: "0.8125rem" }}
                  >
                    {isDown ? (
                      <TrendingDown className="w-3.5 h-3.5" />
                    ) : (
                      <TrendingUp className="w-3.5 h-3.5" />
                    )}
                    {m.improvement}
                  </div>
                </div>

                {/* Mobile note */}
                {m.note && (
                  <p className="mt-3 lg:hidden text-muted-foreground" style={{ fontSize: "0.8125rem", lineHeight: 1.6 }}>
                    {m.note}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12"
          style={{ fontSize: "0.8125rem", lineHeight: 1.7 }}
        >
          Bundle size before = current 369 KB + estimated contribution of removed packages (recharts ~450 KB, plus react-dnd, embla, cmdk, vaul, react-slick, react-resizable-panels).
          Animation metrics are exact values from the code diff.
        </motion.p>
      </div>
    </div>
  );
}
