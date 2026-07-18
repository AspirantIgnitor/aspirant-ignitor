export type SubjectMetric = {
  name: string;
  completion: number;
  accuracy: number;
  testsAttempted: number;
  trend: "Strong" | "Weak" | "Steady";
};

export type DailyEntry = {
  date: string;
  topicsCovered: string;
  studyHours: string;
  revisionHours: string;
  mockMarks: string;
  sectionalMarks: string;
  currentAffairsCovered: string;
  notes: string;
};

export const stats = [
  { title: "Today's Study Hours", value: "4.5 hrs", accent: "#FF6B00" },
  { title: "Weekly Study Hours", value: "28 hrs", accent: "#071A35" },
  { title: "Monthly Study Hours", value: "126 hrs", accent: "#FF6B00" },
  { title: "Average Study Hours", value: "5.2 hrs", accent: "#071A35" },
  { title: "Preparation Streak", value: "18 days", accent: "#FF6B00" },
];

export const subjects: SubjectMetric[] = [
  { name: "Reasoning", completion: 82, accuracy: 78, testsAttempted: 12, trend: "Strong" },
  { name: "Quantitative Aptitude", completion: 74, accuracy: 71, testsAttempted: 10, trend: "Steady" },
  { name: "English", completion: 68, accuracy: 76, testsAttempted: 9, trend: "Steady" },
  { name: "General Awareness", completion: 88, accuracy: 81, testsAttempted: 14, trend: "Strong" },
  { name: "Computer", completion: 61, accuracy: 63, testsAttempted: 7, trend: "Weak" },
  { name: "Current Affairs", completion: 90, accuracy: 84, testsAttempted: 15, trend: "Strong" },
];

export const studyTrendData = [
  { name: "Mon", studyHours: 2.8, marks: 62 },
  { name: "Tue", studyHours: 3.6, marks: 68 },
  { name: "Wed", studyHours: 4.2, marks: 74 },
  { name: "Thu", studyHours: 3.9, marks: 77 },
  { name: "Fri", studyHours: 4.4, marks: 81 },
  { name: "Sat", studyHours: 5.1, marks: 86 },
  { name: "Sun", studyHours: 4.8, marks: 88 },
];

export const weeklyStudyData = [
  { name: "W1", hours: 20 },
  { name: "W2", hours: 24 },
  { name: "W3", hours: 27 },
  { name: "W4", hours: 29 },
];

export const monthlyStudyData = [
  { name: "Jan", hours: 92 },
  { name: "Feb", hours: 104 },
  { name: "Mar", hours: 117 },
  { name: "Apr", hours: 123 },
  { name: "May", hours: 126 },
];

export const initialEntries: DailyEntry[] = [
  {
    date: "2026-07-18",
    topicsCovered: "Number System, Reading Comprehension",
    studyHours: "4.5",
    revisionHours: "2.5",
    mockMarks: "78",
    sectionalMarks: "82",
    currentAffairsCovered: "Budget 2026, RBI policy update",
    notes: "Focused on accuracy and revision of weak areas.",
  },
  {
    date: "2026-07-17",
    topicsCovered: "Pipes and Cisterns, Cloze Test",
    studyHours: "3.8",
    revisionHours: "1.8",
    mockMarks: "74",
    sectionalMarks: "79",
    currentAffairsCovered: "National Skill Mission",
    notes: "Improved speed with timed practice.",
  },
];

export const goals = [
  "Complete 3 full mocks this month",
  "Revise 2 chapters per week",
  "Maintain 90% current affairs coverage",
];

export const mockTests = [
  { title: "Full Mock 1", score: "78/100", next: "Tomorrow" },
  { title: "Sectional Test 2", score: "84/100", next: "Friday" },
  { title: "Current Affairs Quiz", score: "92%", next: "Sunday" },
];

export const currentAffairsNotes = [
  "Daily current affairs note updated with 5 key events.",
  "One page revision summary prepared for the week.",
  "Topic-wise practice scheduled for government schemes.",
];

export const pyqTasks = [
  "Solve previous year reasoning papers from 2022",
  "Revise arithmetic shortcuts from PYQs",
  "Review vocabulary-based English questions",
];
