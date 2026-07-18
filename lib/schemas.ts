import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  password: z.string().min(6),
  selectedExam: z.string().min(1),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const studyEntrySchema = z.object({
  date: z.string(),
  studyHours: z.coerce.number(),
  effectiveHours: z.coerce.number(),
  revisionHours: z.coerce.number(),
  topicsCovered: z.string(),
  currentAffairs: z.string(),
  notes: z.string(),
  motivation: z.string(),
});

export const mockTestSchema = z.object({
  exam: z.string(),
  mockName: z.string(),
  date: z.string(),
  marks: z.string(),
  negativeMarks: z.string(),
  accuracy: z.string(),
  rank: z.string(),
  timeTaken: z.string(),
  remarks: z.string(),
});

export const goalSchema = z.object({
  dailyGoal: z.string(),
  weeklyGoal: z.string(),
  monthlyGoal: z.string(),
  yearlyGoal: z.string(),
});

export const subjectProgressSchema = z.object({
  subject: z.string(),
  completion: z.coerce.number(),
  accuracy: z.coerce.number(),
  questionsSolved: z.coerce.number(),
  timeSpent: z.string(),
});

export const profileSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  selectedExam: z.string().optional(),
});
