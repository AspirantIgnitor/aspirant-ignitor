"use client";

import { PageShell } from "@/components/portal/PageShell";
import { MetricCard } from "@/components/portal/MetricCard";
import { badges, goalData } from "@/lib/portalData";

export default function GoalsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#fff8f2_100%)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <PageShell title="Goals" description="Set milestone targets and monitor your learning journey with visible progress.">
          <div className="grid gap-4 md:grid-cols-4">
            {goalData.map((goal) => (
              <MetricCard key={goal.label} label={goal.label} value={goal.value} tone={goal.label.includes("Daily") ? "orange" : "navy"} />
            ))}
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-5">
              <h3 className="text-lg font-semibold text-[#071A35]">Progress Bars</h3>
              <div className="mt-4 space-y-4">
                {goalData.map((goal) => (
                  <div key={goal.label}>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                      <span>{goal.label}</span>
                      <span className="font-semibold text-[#071A35]">{goal.progress}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-100">
                      <div className="h-3 rounded-full bg-[#FF6B00]" style={{ width: `${goal.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-5">
              <h3 className="text-lg font-semibold text-[#071A35]">Achievement Badges</h3>
              <div className="mt-4 grid gap-3">
                {badges.map((badge) => (
                  <div key={badge} className="rounded-2xl border border-[#FF6B00]/20 bg-[#FF6B00]/10 px-4 py-3 text-sm font-semibold text-[#071A35]">
                    {badge}
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
