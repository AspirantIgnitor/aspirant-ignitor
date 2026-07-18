type StatCardProps = {
  title: string;
  value: string;
  accent: string;
};

export function StatCard({ title, value, accent }: StatCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_20px_45px_rgba(7,26,53,0.06)] backdrop-blur">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-3 text-2xl font-semibold text-[#071A35]">{value}</p>
      <div className="mt-4 h-2 rounded-full bg-slate-100">
        <div className="h-2 rounded-full" style={{ width: "78%", backgroundColor: accent }} />
      </div>
    </div>
  );
}
