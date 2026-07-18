type ProgressRingProps = {
  value: number;
  label: string;
};

export function ProgressRing({ value, label }: ProgressRingProps) {
  return (
    <div className="flex flex-col items-center rounded-[1.4rem] border border-slate-200/70 bg-white/80 p-4 shadow-sm">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full" style={{ background: `conic-gradient(#FF6B00 ${value * 3.6}deg, #f1f5f9 0deg)` }}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-semibold text-[#071A35]">
          {value}
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}
