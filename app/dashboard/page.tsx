"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { StatCard } from "@/components/dashboard/StatCard";
import { SubjectCard } from "@/components/dashboard/SubjectCard";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { goals, initialEntries, mockTests, monthlyStudyData, pyqTasks, stats, studyTrendData, subjects, weeklyStudyData, currentAffairsNotes, type DailyEntry } from "@/lib/mockDashboardData";
import toast from "react-hot-toast";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [selectedDate, setSelectedDate] = useState("2026-07-18");
  const [entries, setEntries] = useState<DailyEntry[]>(initialEntries);
  const [draft, setDraft] = useState<DailyEntry>(initialEntries[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [studyRes, mockRes] = await Promise.all([fetch("/api/study-entries"), fetch("/api/mock-tests")]);
        if (studyRes.ok) {
          const data = await studyRes.json();
          if (Array.isArray(data) && data.length) {
            const mapped = data.map((item: any) => ({ ...item, topicsCovered: item.topicsCovered ?? "", studyHours: String(item.studyHours), revisionHours: String(item.revisionHours), mockMarks: item.mockMarks ?? "", sectionalMarks: item.sectionalMarks ?? "", currentAffairsCovered: item.currentAffairs ?? "", notes: item.notes ?? "" }));
            setEntries(mapped);
            setDraft(mapped[0]);
          }
        }
        if (mockRes.ok) {
          const data = await mockRes.json();
          if (Array.isArray(data) && data.length) {
            toast.success("Dashboard data synced");
          }
        }
      } catch {
        toast.error("Unable to load data");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const selectedEntry = useMemo(() => {
    return entries.find((entry) => entry.date === selectedDate) ?? entries[0];
  }, [entries, selectedDate]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/study-entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: draft.date,
          studyHours: Number(draft.studyHours),
          effectiveHours: Number(draft.studyHours),
          revisionHours: Number(draft.revisionHours),
          topicsCovered: draft.topicsCovered,
          currentAffairs: draft.currentAffairsCovered,
          notes: draft.notes,
          motivation: draft.notes,
        }),
      });
      if (!response.ok) throw new Error();
      toast.success("Study entry saved");
    } catch {
      toast.error("Could not save entry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#fff8f2_100%)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <Sidebar activeSection={activeSection} onSelect={setActiveSection} onLogout={() => setActiveSection("Dashboard")} />
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(7,26,53,0.08)] backdrop-blur"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF6B00]">Student dashboard</p>
                <h1 className="mt-2 text-3xl font-semibold text-[#071A35]">Welcome back, Riya</h1>
                <p className="mt-2 text-sm text-slate-600">{loading ? "Syncing your latest progress..." : "Keep momentum high with thoughtful daily tracking and targeted revision."}</p>
              </div>
              <div className="rounded-full bg-[#071A35] px-4 py-2 text-sm font-semibold text-white">Exam focus: SSC CGL</div>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {stats.map((stat) => (
              <StatCard key={stat.title} title={stat.title} value={stat.value} accent={stat.accent} />
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(7,26,53,0.06)]">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#071A35]">Calendar</h2>
                <p className="text-sm text-slate-500">Select a date to view your day</p>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-7">
                {[
                  "2026-07-14",
                  "2026-07-15",
                  "2026-07-16",
                  "2026-07-17",
                  "2026-07-18",
                  "2026-07-19",
                  "2026-07-20",
                ].map((date) => (
                  <button
                    key={date}
                    onClick={() => {
                      setSelectedDate(date);
                      const found = entries.find((entry) => entry.date === date);
                      if (found) {
                        setDraft(found);
                      }
                    }}
                    className={`rounded-2xl border px-3 py-3 text-sm font-semibold ${
                      selectedDate === date ? "border-[#FF6B00] bg-[#FF6B00] text-white" : "border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {date.slice(-2)}
                  </button>
                ))}
              </div>
              <div className="mt-6 rounded-[1.4rem] bg-[#071A35] p-5 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Selected day</p>
                <p className="mt-2 text-xl font-semibold">{selectedEntry?.topicsCovered}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <p className="text-sm text-slate-300">Study Hours</p>
                    <p className="mt-2 text-lg font-semibold">{selectedEntry?.studyHours}</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <p className="text-sm text-slate-300">Revision Hours</p>
                    <p className="mt-2 text-lg font-semibold">{selectedEntry?.revisionHours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(7,26,53,0.06)]">
              <h2 className="text-xl font-semibold text-[#071A35]">Daily Entry Form</h2>
              <div className="mt-4 space-y-3">
                <input
                  value={draft.date}
                  onChange={(e) => setDraft({ ...draft, date: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                  placeholder="Date"
                />
                <textarea
                  value={draft.topicsCovered}
                  onChange={(e) => setDraft({ ...draft, topicsCovered: e.target.value })}
                  className="min-h-[80px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                  placeholder="Topics Covered"
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input value={draft.studyHours} onChange={(e) => setDraft({ ...draft, studyHours: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Effective Study Hours" />
                  <input value={draft.revisionHours} onChange={(e) => setDraft({ ...draft, revisionHours: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Revision Hours" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input value={draft.mockMarks} onChange={(e) => setDraft({ ...draft, mockMarks: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Full Mock Test Marks" />
                  <input value={draft.sectionalMarks} onChange={(e) => setDraft({ ...draft, sectionalMarks: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Sectional Test Marks" />
                </div>
                <textarea value={draft.currentAffairsCovered} onChange={(e) => setDraft({ ...draft, currentAffairsCovered: e.target.value })} className="min-h-[80px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Current Affairs Covered" />
                <textarea value={draft.notes} onChange={(e) => setDraft({ ...draft, notes: e.target.value })} className="min-h-[80px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Notes" />
                <button onClick={handleSave} className="w-full rounded-full bg-[#FF6B00] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#e25b00]">Save</button>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(7,26,53,0.06)]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#071A35]">Subject Tracker</h2>
              <p className="text-sm text-slate-500">Performance snapshot across your core subjects</p>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {subjects.map((subject) => (
                <SubjectCard key={subject.name} {...subject} />
              ))}
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(7,26,53,0.06)]">
              <h2 className="text-xl font-semibold text-[#071A35]">Charts</h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={studyTrendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="studyHours" stroke="#FF6B00" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={studyTrendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="marks" stroke="#071A35" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyStudyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="hours" fill="#FF6B00" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyStudyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="hours" fill="#071A35" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(7,26,53,0.06)]">
                <h2 className="text-xl font-semibold text-[#071A35]">Goals</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {goals.map((goal) => (
                    <li key={goal} className="rounded-2xl bg-slate-50 px-4 py-3">{goal}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(7,26,53,0.06)]">
                <h2 className="text-xl font-semibold text-[#071A35]">Mock Tests</h2>
                <div className="mt-4 space-y-3">
                  {mockTests.map((test) => (
                    <div key={test.title} className="rounded-2xl bg-slate-50 px-4 py-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-[#071A35]">{test.title}</span>
                        <span className="text-[#FF6B00]">{test.score}</span>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">Next: {test.next}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(7,26,53,0.06)]">
                <h2 className="text-xl font-semibold text-[#071A35]">Current Affairs & PYQs</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {currentAffairsNotes.map((note) => (
                    <li key={note} className="rounded-2xl bg-slate-50 px-4 py-3">{note}</li>
                  ))}
                  {pyqTasks.map((task) => (
                    <li key={task} className="rounded-2xl border border-dashed border-[#FF6B00]/20 px-4 py-3 text-[#071A35]">{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
}
