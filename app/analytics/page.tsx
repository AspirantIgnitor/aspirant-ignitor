"use client";

import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PageShell } from "@/components/portal/PageShell";
import { MetricCard } from "@/components/portal/MetricCard";
import { ProgressRing } from "@/components/portal/ProgressRing";
import { analyticsData, subjectAnalytics } from "@/lib/portalData";

const pieData = [
  { name: "Reasoning", value: 24 },
  { name: "Quant", value: 19 },
  { name: "English", value: 17 },
  { name: "GA", value: 21 },
  { name: "Computer", value: 9 },
  { name: "CA", value: 10 },
];

const COLORS = ["#FF6B00", "#071A35", "#f59e0b", "#64748b", "#0f766e", "#1d4ed8"];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#fff8f2_100%)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <PageShell title="Analytics" description="Measure preparation quality, consistency, and progress with a professional performance view.">
          <div className="grid gap-4 md:grid-cols-4">
            <MetricCard label="Average Hours" value="4.2 hrs" tone="orange" />
            <MetricCard label="Average Marks" value="81%" />
            <MetricCard label="Mock Trend" value="+13%" tone="orange" />
            <MetricCard label="Preparation Score" value="88/100" />
          </div>
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-5">
              <h3 className="text-lg font-semibold text-[#071A35]">Performance Trends</h3>
              <div className="mt-4 grid gap-6 lg:grid-cols-2">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="daily" stroke="#FF6B00" fill="#FF6B00" fillOpacity={0.2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="marks" fill="#071A35" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="h-64 lg:col-span-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="weekly" stroke="#FF6B00" strokeWidth={3} />
                      <Line type="monotone" dataKey="monthly" stroke="#071A35" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-5">
                <h3 className="text-lg font-semibold text-[#071A35]">Subject Mix</h3>
                <div className="mt-4 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={90} label>
                        {pieData.map((entry, index) => (
                          <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-5">
                <h3 className="text-lg font-semibold text-[#071A35]">Progress Rings</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <ProgressRing value={88} label="Preparation Score" />
                  <ProgressRing value={76} label="Consistency" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-5">
            <h3 className="text-lg font-semibold text-[#071A35]">Subject Accuracy</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {subjectAnalytics.map((subject) => (
                <div key={subject.name} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#071A35]">{subject.name}</p>
                    <span className="rounded-full bg-[#FF6B00]/10 px-3 py-1 text-sm font-medium text-[#FF6B00]">{subject.accuracy}%</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">Completion: {subject.completion}%</p>
                  <p className="mt-1 text-sm text-slate-600">Time Spent: {subject.timeSpent}</p>
                  <p className="mt-1 text-sm text-slate-600">Questions Solved: {subject.questionsSolved}</p>
                  <p className="mt-3 text-sm text-slate-500">Weak: {subject.weakChapters.join(", ")}</p>
                  <p className="mt-1 text-sm text-slate-500">Strong: {subject.strongChapters.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </PageShell>
      </div>
    </div>
  );
}
