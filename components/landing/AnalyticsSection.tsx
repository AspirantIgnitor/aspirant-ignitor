"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const trendData = [
  { month: "Jan", score: 58 },
  { month: "Feb", score: 64 },
  { month: "Mar", score: 72 },
  { month: "Apr", score: 79 },
  { month: "May", score: 86 },
  { month: "Jun", score: 92 },
];

export function AnalyticsSection() {
  return (
    <section id="analytics" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Performance tracking"
            title="See your progress before it becomes guesswork"
            description="Track study streaks, chapter mastery, and improvement curves with intuitive dashboards designed for long-term growth."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Mock consistency", "4 tests/week"],
              ["Revision coverage", "94%"],
              ["Accuracy lift", "+18%"],
              ["Focus hours", "11.4 hrs"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm">
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-2 text-2xl font-semibold text-[#071A35]">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_25px_60px_rgba(7,26,53,0.08)]"
        >
          <div className="rounded-[1.5rem] bg-[#071A35] p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Score trajectory</p>
                <p className="mt-2 text-3xl font-semibold">91/100</p>
              </div>
              <div className="rounded-full bg-[#FF6B00] px-3 py-1 text-sm font-medium">Highest weekly score</div>
            </div>
            <div className="mt-6 h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <XAxis dataKey="month" tick={{ fill: "#cbd5e1" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#cbd5e1" }} axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="score" stroke="#FF6B00" fill="#FF6B00" fillOpacity={0.22} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
