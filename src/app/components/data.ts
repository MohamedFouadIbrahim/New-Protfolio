export const skills = [
  {
    category: "Mobile Development",
    items: [
      { name: "React Native", level: 98 },
      { name: "Expo", level: 95 },
      { name: "iOS (Swift)", level: 70 },
      { name: "Android (Kotlin)", level: 65 },
    ],
  },
  {
    category: "Frontend & Web",
    items: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "State & Architecture",
    items: [
      { name: "Redux / Zustand", level: 95 },
      { name: "React Query", level: 90 },
      { name: "MobX", level: 80 },
      { name: "Clean Architecture", level: 88 },
    ],
  },
  {
    category: "Backend & DevOps",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Firebase", level: 88 },
      { name: "CI/CD (Fastlane)", level: 85 },
      { name: "CodePush / OTA", level: 90 },
    ],
  },
];

export const projects = [
  {
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
    role: "Senior React Native Developer",
    company: "TechCorp Global",
    period: "2022 - Present",
    description:
      "Leading a team of 6 developers building enterprise mobile applications. Architected a shared component library used across 4 products. Reduced app crash rate by 95%.",
  },
  {
    role: "Lead Mobile Engineer",
    company: "StartupX",
    period: "2020 - 2022",
    description:
      "Built and scaled a fintech app from 0 to 500K users. Implemented CI/CD pipelines with Fastlane and CodePush for OTA updates. Mentored 3 junior developers.",
  },
  {
    role: "React Native Developer",
    company: "Digital Agency Pro",
    period: "2018 - 2020",
    description:
      "Delivered 12+ client projects across healthcare, e-commerce, and social domains. Introduced TypeScript and automated testing, improving code quality by 60%.",
  },
  {
    role: "Frontend Developer",
    company: "WebStudio",
    period: "2016 - 2018",
    description:
      "Transitioned from web to mobile development. Built responsive web apps with React and began developing cross-platform mobile apps with React Native.",
  },
];