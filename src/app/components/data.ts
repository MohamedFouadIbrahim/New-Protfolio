import saraseafood1 from "../../assets/imgaes/saraseafood/7.jpeg";
import zabehaty1 from "../../assets/imgaes/Zabehaty/1.webp";
import mobigift1 from "../../assets/imgaes/Mobigift/5.webp";
import leomarka1 from "../../assets/imgaes/LEOMARKA/1.webp";
import mobishop1 from "../../assets/imgaes/MobiShop/1.webp";

export const skills = [
  {
    category: "Mobile Development",
    items: [
      { name: "React Native", level: 98 },
      { name: "Expo", level: 95 },
      { name: "React Navigation", level: 88 },
      { name: "React Native Reanimated", level: 85 },
    ],
  },
  {
    category: "Frontend & Web",
    items: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Node.js / Express.js", level: 82 },
      { name: "Next.js", level: 78 },
    ],
  },
  {
    category: "State & Architecture",
    items: [
      { name: "Redux / Redux Toolkit", level: 95 },
      { name: "React Query", level: 90 },
      { name: "Zustand", level: 88 },
      { name: "Clean Architecture", level: 90 },
    ],
  },
  {
    category: "Backend & DevOps",
    items: [
      { name: "PostgreSQL / AsyncStorage", level: 80 },
      { name: "Fastlane / GitHub Actions", level: 85 },
      { name: "CodePush / OTA", level: 90 },
      { name: "Firebase (FCM)", level: 85 },
    ],
  },
];
/**
 * 
 * {
    id: "finpay",
    title: "FinPay",
    subtitle: "Fintech & Banking",
    description:
      "A comprehensive mobile banking app with real-time transactions, biometric authentication, and investment portfolio tracking. Served 500K+ users with 99.9% uptime.",
    image:
      "https://images.unsplash.com/photo-1726056652641-de93ec003289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBmaW50ZWNoJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzMzODk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "TypeScript", "Redux", "Plaid API", "Biometrics"],
    stats: { users: "500K+", rating: "4.8", downloads: "1M+" },
    color: "#1a7a4e",
  },
  {
    id: "fittrack",
    title: "FitTrack Pro",
    subtitle: "Health & Fitness",
    description:
      "AI-powered fitness tracking app with workout plans, nutrition logging, and wearable device integration. Features real-time heart rate monitoring and personalized coaching.",
    image:
      "https://images.unsplash.com/photo-1571952288324-552b8c0daceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tpbmclMjBhcHAlMjBtb2JpbGV8ZW58MXx8fHwxNzczMjMzMDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Expo", "HealthKit", "Firebase", "ML Kit"],
    stats: { users: "250K+", rating: "4.7", downloads: "800K+" },
    color: "#2d8b5e",
  },
  {
    id: "shopease",
    title: "ShopEase",
    subtitle: "E-Commerce",
    description:
      "Full-featured e-commerce platform with AR try-on, one-tap checkout, real-time order tracking, and personalized product recommendations powered by machine learning.",
    image:
      "https://images.unsplash.com/photo-1768987439370-bd60d3d0b28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBtb2JpbGUlMjBhcHAlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzMzMzg5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Stripe", "GraphQL", "AR Kit", "Algolia"],
    stats: { users: "1M+", rating: "4.9", downloads: "3M+" },
    color: "#c0392b",
  },
  {
    id: "foodrush",
    title: "FoodRush",
    subtitle: "Food Delivery",
    description:
      "On-demand food delivery app with real-time driver tracking, smart restaurant recommendations, group ordering, and integrated payment. Operates in 15+ cities.",
    image:
      "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBtb2JpbGV8ZW58MXx8fHwxNzczMjYxMTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Maps SDK", "Socket.io", "Stripe", "Push Notifications"],
    stats: { users: "350K+", rating: "4.6", downloads: "1.5M+" },
    color: "#b07d3a",
  },
  {
    id: "connecthub",
    title: "ConnectHub",
    subtitle: "Social Platform",
    description:
      "Social networking app with real-time messaging, story features, content feeds, and community groups. Built with a focus on privacy and end-to-end encryption.",
    image:
      "https://images.unsplash.com/photo-1710870509663-16f20f75d758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NzMzMzY3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "WebRTC", "E2E Encryption", "Firebase", "Redux Saga"],
    stats: { users: "800K+", rating: "4.5", downloads: "2M+" },
    color: "#2980b9",
  },
  {
    id: "medcare",
    title: "MedCare",
    subtitle: "Healthcare",
    description:
      "Telehealth platform enabling video consultations, prescription management, appointment scheduling, and health record tracking with HIPAA compliance.",
    image:
      "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGFwcCUyMG1vYmlsZXxlbnwxfHx8fDE3NzMzMjU0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "WebRTC", "HIPAA", "HL7 FHIR", "Twilio"],
    stats: { users: "120K+", rating: "4.8", downloads: "400K+" },
    color: "#16a085",
  },
 */
export const projects = [
  
  {
    id: "saraseafood",
    title: "Sara Sea Food",
    subtitle: "Food & Restaurants",
    description:
      "A full-featured mobile app for Sara Sea Food restaurant, enabling customers to browse the menu, place orders, and track delivery in real time.",
    image: saraseafood1,
    links: {
      github: "https://github.com/MohamedFouadIbrahim/E-commerce",
      live: "https://apps.apple.com/il/app/sara-sea-food/id1485140629",
    },
    tags: ["React Native", "E-Commerce", "Food Delivery"],
    stats: { users: "—", rating: "—", downloads: "—" },
    color: "#e07b54",
  },
  {
    id: "zabehaty",
    title: "Zabehaty",
    subtitle: "Food & Restaurants",
    description:
      "An on-demand fresh meat ordering app allowing customers to select cuts, schedule slaughter, and receive hygienic delivery straight to their door.",
    image: zabehaty1,
    links: {
      github: "https://github.com/MohamedFouadIbrahim/Zabehaty",
      live: "http://onelink.to/ztkn9s",
    },
    tags: ["React Native", "Food Delivery", "E-Commerce"],
    stats: { users: "—", rating: "—", downloads: "—" },
    color: "#27ae60",
  },
  {
    id: "mobigift",
    title: "Mobigift",
    subtitle: "E-Commerce",
    description:
      "A digital gifting platform where users can browse, purchase, and send gift cards and vouchers for popular brands across the region.",
    image: mobigift1,
    links: {
      github: "https://github.com/MohamedFouadIbrahim/E-commerce",
      live: "https://apps.apple.com/il/app/mobigift-wholesale/id1487955746",
    },
    tags: ["React Native", "E-Commerce", "Gift Cards"],
    stats: { users: "—", rating: "—", downloads: "—" },
    color: "#8e44ad",
  },
  {
    id: "leomarka",
    title: "LEOMARKA",
    subtitle: "E-Commerce",
    description:
      "A multi-vendor e-commerce app featuring product discovery, cart management, secure checkout, and order tracking for a seamless shopping experience.",
    image: leomarka1,
    links: {
      github: "https://github.com/MohamedFouadIbrahim/E-commerce",
      live: "https://apps.apple.com/il/app/leo-marka-jo/id1518395514",
    },
    tags: ["React Native", "E-Commerce", "Multi-Vendor"],
    stats: { users: "—", rating: "—", downloads: "—" },
    color: "#1a7a4e",
  },
  {
    id: "mobishop",
    title: "MobiShop",
    subtitle: "E-Commerce",
    description:
      "A versatile mobile shopping app with a clean UI, category browsing, wishlist management, and integrated payment gateway for a smooth buying journey.",
    image: mobishop1,
    links: {
      github: "https://github.com/MohamedFouadIbrahim/E-commerce",
      live: "https://apps.apple.com/il/app/mobishop-store/id1495034279",
    },
    tags: ["React Native", "E-Commerce", "Shopping"],
    stats: { users: "—", rating: "—", downloads: "—" },
    color: "#e67e22",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, FinPay Inc.",
    text: "An exceptional developer who delivered our banking app ahead of schedule. The code quality and architecture were top-notch. Highly recommend for any complex mobile project.",
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, FitTrack",
    text: "Transformed our vision into a beautiful, performant app. The attention to detail in animations and UX was incredible. Our users constantly praise the app experience.",
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "Product Lead, ShopEase",
    text: "Brought deep technical expertise and a product mindset. The AR try-on feature they built increased our conversion rate by 40%. A true senior-level engineer.",
    avatar: "EW",
  },
];

export const experience = [
  {
    role: "Full Stack Developer (React Native / Node.js)",
    company: "IFZA (International Free Zone Authority)",
    location: "Dubai, UAE",
    period: "Apr. 2023 – Present",
    description:
      "Built Users & Partners portals with mobile + backend APIs covering the full business setup lifecycle. Delivered Visa/License applications, renewals, amendments, payments, and status tracking. Implemented background jobs, queues, and caching for scalability.",
  },
  {
    role: "Senior React Native Developer",
    company: "EJAFTECH",
    location: "Remote",
    period: "Jan. 2022 – Mar. 2023",
    description:
      "Automated mobile release pipelines, reducing deployment time by 50%. Delivered ALAMIYA e-commerce apps and integrated Odoo ERP. Built offline-first app supporting field operations in low/no-connectivity environments.",
  },
  {
    role: "Senior React Native Developer",
    company: "ATPVITAL",
    location: "Remote",
    period: "Apr. 2021 – Sept. 2021",
    description:
      "Contributed to ZABEHTY e-commerce app — shipped new features, fixed critical bugs, improved stability and UX. Used TypeScript and React Navigation for maintainable navigation flows and scalable screen architecture.",
  },
  {
    role: "React Native Developer",
    company: "ROXIIT",
    location: "Remote",
    period: "Jun. 2019 – Jan. 2021",
    description:
      "Built a Shopify-like multi-tenant e-commerce platform powering multiple stores from a single codebase. Designed a config-driven rendering engine for theme/layout. Architected Redux + Thunk with redux-persist. Scaled to 4 countries, 100+ users, 2,000+ orders.",
  },
  {
    role: "Full Stack Developer",
    company: "FREELANCER",
    location: "Alexandria, Egypt",
    period: "Jan. 2019 – May 2019",
    description:
      "Built a fitness mobile app with location and user interaction features (Uber-like). Also built an e-wallet mobile application.",
  },
];