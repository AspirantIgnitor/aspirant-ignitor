import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const RegisterSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(8, { message: "Phone number must be at least 8 digits" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  selectedExam: z.string().min(1, { message: "Please select an exam target" }),
});

export const StudyEntrySchema = z.object({
  date: z.string().min(1),
  studyHours: z.coerce.number().min(0),
  effectiveHours: z.coerce.number().min(0),
  revisionHours: z.coerce.number().min(0),
  topicsCovered: z.string().min(1),
  currentAffairs: z.string().default(""),
  notes: z.string().default(""),
  motivation: z.string().default(""),
});

export const MockTestSchema = z.object({
  exam: z.string().min(1),
  mockName: z.string().min(1),
  date: z.string().min(1),
  marks: z.string().min(1),
  negativeMarks: z.string().min(1),
  accuracy: z.string().min(1),
  rank: z.string().min(1),
  timeTaken: z.string().min(1),
  remarks: z.string().default(""),
});

export const GoalSchema = z.object({
  dailyGoal: z.string().min(1),
  weeklyGoal: z.string().min(1),
  monthlyGoal: z.string().min(1),
  yearlyGoal: z.string().min(1),
});
