export type ExamGroup = {
  name: string;
  exams: string[];
};

export const examGroups: ExamGroup[] = [
  {
    name: "SSC",
    exams: ["CGL", "CHSL", "MTS", "GD", "CPO"],
  },
  {
    name: "Railway",
    exams: ["NTPC Graduate", "NTPC Undergraduate", "Group D", "ALP", "Technician", "JE"],
  },
  {
    name: "Bank",
    exams: ["IBPS PO", "IBPS Clerk", "SBI PO", "SBI Clerk"],
  },
  {
    name: "PSC",
    exams: ["BPSC", "UPPSC", "JPSC"],
  },
];

export const featureCards = [
  {
    title: "Adaptive practice paths",
    description: "Smart study plans that adjust to your accuracy, speed, and weak topics in real time.",
    icon: "⚡",
  },
  {
    title: "Live doubt resolution",
    description: "Get expert guidance through live sessions, topic-wise clinics, and rapid mentor support.",
    icon: "🎯",
  },
  {
    title: "Exam-ready analytics",
    description: "Track your daily growth, chapter mastery, and performance trends across every attempt.",
    icon: "📈",
  },
  {
    title: "Structured revision engine",
    description: "Turn every mock test into a focused revision sprint with curated next-step resources.",
    icon: "🧠",
  },
];

export const stats = [
  { label: "Active learners", value: "18k+" },
  { label: "Weekly live sessions", value: "120+" },
  { label: "Average score improvement", value: "31%" },
];

export const testimonials = [
  {
    name: "Riya Sharma",
    role: "SSC CGL Aspirant",
    quote: "The progress dashboard helped me spot my weak topics and improve my mock scores within weeks.",
  },
  {
    name: "Aman Verma",
    role: "Banking Aspirant",
    quote: "The study roadmap felt personal and practical. I finally built consistency around my preparation.",
  },
  {
    name: "Neha Singh",
    role: "Railway JE Aspirant",
    quote: "The live classes and revision engine made my prep structured and stress-free during the final months.",
  },
];

export const youtubeVideos = [
  {
    title: "How to build a 90-day exam roadmap",
    description: "A practical plan for daily targets, revision cycles, and mock preparation.",
    duration: "12 min",
  },
  {
    title: "Mastering accuracy in prelims practice",
    description: "Learn how to turn mistakes into a measurable improvement system.",
    duration: "9 min",
  },
  {
    title: "Week-by-week revision blueprint",
    description: "Follow a proven strategy to consolidate topics without burnout.",
    duration: "14 min",
  },
];
