type MetricCardProps = {
  label: string;
  value: string;
  tone?: "orange" | "navy";
};

export function MetricCard({ label, value, tone = "navy" }: MetricCardProps) {
  const color = tone === "orange" ? "#FF6B00" : "#071A35";
  return (
    <div className="rounded-[1.4rem] border border-slate-200/70 bg-white/80 p-4 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-3 text-2xl font-semibold" style={{ color }}>
        {value}
      </p>
    </div>
  );
}
