type SubjectCardProps = {
  name: string;
  completion: number;
  accuracy: number;
  testsAttempted: number;
  trend: "Strong" | "Weak" | "Steady";
};

export function SubjectCard({ name, completion, accuracy, testsAttempted, trend }: SubjectCardProps) {
  const trendColor = trend === "Weak" ? "#FF6B00" : trend === "Strong" ? "#071A35" : "#64748b";

  return (
    <div className="rounded-[1.4rem] border border-slate-200/70 bg-white/80 p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-[#071A35]">{name}</h3>
        <span className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]" style={{ backgroundColor: `${trendColor}14`, color: trendColor }}>
          {trend}
        </span>
      </div>
      <div className="mt-4 space-y-3 text-sm text-slate-600">
        <div>
          <div className="mb-1 flex justify-between">
            <span>Completion</span>
            <span className="font-semibold text-[#071A35]">{completion}%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 rounded-full bg-[#FF6B00]" style={{ width: `${completion}%` }} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>Accuracy</span>
          <span className="font-semibold text-[#071A35]">{accuracy}%</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tests Attempted</span>
          <span className="font-semibold text-[#071A35]">{testsAttempted}</span>
        </div>
      </div>
    </div>
  );
}
