export interface UserType {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  role?: string;
  selectedExam?: string | null;
  createdAt?: string;
}

export interface StudyEntryType {
  id?: string;
  date: string;
  studyHours: number;
  effectiveHours: number;
  revisionHours: number;
  topicsCovered: string;
  currentAffairs: string;
  notes: string;
  motivation: string;
  createdAt?: string;
}

export interface MockTestType {
  id?: string;
  exam: string;
  mockName: string;
  date: string;
  marks: string;
  negativeMarks: string;
  accuracy: string;
  rank: string;
  timeTaken: string;
  remarks: string;
  createdAt?: string;
}

export interface GoalType {
  id?: string;
  dailyGoal: string;
  weeklyGoal: string;
  monthlyGoal: string;
  yearlyGoal: string;
  createdAt?: string;
}

export interface SubjectProgressType {
  id?: string;
  subject: string;
  completion: number;
  accuracy: number;
  questionsSolved: number;
  timeSpent: string;
  createdAt?: string;
}
