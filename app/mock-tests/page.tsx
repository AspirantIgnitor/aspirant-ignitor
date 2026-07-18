"use client";

import { useState } from "react";
import { PageShell } from "@/components/portal/PageShell";
import { mockTests } from "@/lib/portalData";

export default function MockTestsPage() {
  const [form, setForm] = useState({
    exam: "SSC CGL",
    date: "2026-07-18",
    mockName: "Tier 1 Mock 4",
    marks: "82/100",
    negativeMarks: "-1",
    accuracy: "84%",
    rank: "980",
    timeTaken: "52 min",
    remarks: "Focused and calm",
  });

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#fff8f2_100%)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <PageShell title="Mock Tests" description="Log every mock attempt and track performance over time.">
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.6rem] border border-slate-200/70 bg-slate-50/80 p-5">
              <div className="grid gap-3">
                <input value={form.exam} onChange={(e) => setForm({ ...form, exam: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Exam" />
                <input value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Date" />
                <input value={form.mockName} onChange={(e) => setForm({ ...form, mockName: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Mock Name" />
                <input value={form.marks} onChange={(e) => setForm({ ...form, marks: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Marks" />
                <input value={form.negativeMarks} onChange={(e) => setForm({ ...form, negativeMarks: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Negative Marks" />
                <input value={form.accuracy} onChange={(e) => setForm({ ...form, accuracy: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Accuracy" />
                <input value={form.rank} onChange={(e) => setForm({ ...form, rank: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Rank" />
                <input value={form.timeTaken} onChange={(e) => setForm({ ...form, timeTaken: e.target.value })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Time Taken" />
                <textarea value={form.remarks} onChange={(e) => setForm({ ...form, remarks: e.target.value })} className="min-h-[90px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Remarks" />
              </div>
              <button className="mt-4 w-full rounded-full bg-[#FF6B00] px-4 py-3 text-sm font-semibold text-white">Save mock details</button>
            </div>
            <div className="rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-5">
              <h3 className="text-lg font-semibold text-[#071A35]">Mock History</h3>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-500">
                      <th className="pb-3">Exam</th>
                      <th className="pb-3">Date</th>
                      <th className="pb-3">Mock</th>
                      <th className="pb-3">Marks</th>
                      <th className="pb-3">Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTests.map((entry) => (
                      <tr key={`${entry.exam}-${entry.date}`} className="border-t border-slate-200">
                        <td className="py-3 font-medium text-[#071A35]">{entry.exam}</td>
                        <td className="py-3">{entry.date}</td>
                        <td className="py-3">{entry.mockName}</td>
                        <td className="py-3">{entry.marks}</td>
                        <td className="py-3">{entry.accuracy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </PageShell>
      </div>
    </div>
  );
}
