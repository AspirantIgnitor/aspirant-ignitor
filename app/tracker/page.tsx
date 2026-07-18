"use client";

import { useState } from "react";
import { PageShell } from "@/components/portal/PageShell";
import { MetricCard } from "@/components/portal/MetricCard";
import { trackerEntries } from "@/lib/portalData";

export default function TrackerPage() {
  const [form, setForm] = useState({
    date: "2026-07-18",
    studyHours: "4.5",
    effectiveHours: "3.8",
    topicsCovered: "Number System, Reading Comprehension",
    revisionHours: "2.2",
    currentAffairs: "Budget 2026, RBI update",
    mockAttempted: true,
    mockName: "Full Mock 1",
    fullMockMarks: "78",
    sectionalMarks: "82",
    wrongQuestionsRevised: "12",
    notes: "Focus on accuracy and weak chapters.",
    motivation: "Stay consistent, and the results will follow.",
  });

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#fff8f2_100%)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <PageShell
          title="Daily Performance"
          description="Track every study block with structure, reflection, and measurable improvement."
          action={<button className="rounded-full bg-[#FF6B00] px-4 py-2 text-sm font-semibold text-white">Save Daily Entry</button>}
        >
          <div className="grid gap-4 md:grid-cols-4">
            <MetricCard label="Daily Study" value="4.5 hrs" tone="orange" />
            <MetricCard label="Effective Hours" value="3.8 hrs" />
            <MetricCard label="Revision" value="2.2 hrs" tone="orange" />
            <MetricCard label="Consistency" value="92%" />
          </div>
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.6rem] border border-slate-200/70 bg-slate-50/80 p-5">
              <div className="grid gap-4 md:grid-cols-2">
                <input value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Date" />
                <input value={form.studyHours} onChange={(e) => setForm({ ...form, studyHours: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Study Hours" />
                <input value={form.effectiveHours} onChange={(e) => setForm({ ...form, effectiveHours: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Effective Study Hours" />
                <input value={form.revisionHours} onChange={(e) => setForm({ ...form, revisionHours: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Revision Hours" />
                <textarea value={form.topicsCovered} onChange={(e) => setForm({ ...form, topicsCovered: e.target.value })} className="min-h-[90px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm md:col-span-2" placeholder="Topics Covered" />
                <textarea value={form.currentAffairs} onChange={(e) => setForm({ ...form, currentAffairs: e.target.value })} className="min-h-[90px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm md:col-span-2" placeholder="Current Affairs Covered" />
                <input value={form.mockName} onChange={(e) => setForm({ ...form, mockName: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Mock Test Name" />
                <input value={form.fullMockMarks} onChange={(e) => setForm({ ...form, fullMockMarks: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Full Mock Marks" />
                <input value={form.sectionalMarks} onChange={(e) => setForm({ ...form, sectionalMarks: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Sectional Test Marks" />
                <input value={form.wrongQuestionsRevised} onChange={(e) => setForm({ ...form, wrongQuestionsRevised: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Wrong Questions Revised" />
                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="min-h-[90px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm md:col-span-2" placeholder="Notes" />
                <textarea value={form.motivation} onChange={(e) => setForm({ ...form, motivation: e.target.value })} className="min-h-[90px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm md:col-span-2" placeholder="Daily Motivation" />
              </div>
              <button className="mt-4 w-full rounded-full bg-[#071A35] px-4 py-3 text-sm font-semibold text-white">Save</button>
            </div>
            <div className="rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-5">
              <h3 className="text-lg font-semibold text-[#071A35]">Recent Entries</h3>
              <div className="mt-4 space-y-3">
                {trackerEntries.map((entry) => (
                  <div key={entry.date} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#071A35]">{entry.date}</span>
                      <span className="text-[#FF6B00]">{entry.studyHours} hrs</span>
                    </div>
                    <p className="mt-2">{entry.topicsCovered}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageShell>
      </div>
    </div>
  );
}
