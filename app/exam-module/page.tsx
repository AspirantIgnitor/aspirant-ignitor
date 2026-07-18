"use client";

import { PageShell } from "@/components/portal/PageShell";
import { examModules } from "@/lib/portalData";

export default function ExamModulePage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#fff8f2_100%)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <PageShell title="Exam Module" description="Track preparation status across every exam you are targeting.">
          <div className="grid gap-4 lg:grid-cols-2">
            {examModules.map((exam) => (
              <div key={exam.exam} className="rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#071A35]">{exam.exam}</h3>
                  <span className="rounded-full bg-[#FF6B00]/10 px-3 py-1 text-sm font-semibold text-[#FF6B00]">{exam.preparation}%</span>
                </div>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center justify-between"><span>Target Date</span><span className="font-semibold text-[#071A35]">{exam.targetDate}</span></div>
                  <div className="flex items-center justify-between"><span>Completed Topics</span><span className="font-semibold text-[#071A35]">{exam.completedTopics}</span></div>
                  <div className="flex items-center justify-between"><span>Remaining Topics</span><span className="font-semibold text-[#071A35]">{exam.remainingTopics}</span></div>
                  <div className="h-3 rounded-full bg-slate-100">
                    <div className="h-3 rounded-full bg-[#071A35]" style={{ width: `${exam.preparation}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PageShell>
      </div>
    </div>
  );
}
