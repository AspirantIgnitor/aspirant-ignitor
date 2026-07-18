import { ReactNode } from "react";

export function PageShell({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(7,26,53,0.06)] backdrop-blur">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#071A35]">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
      </div>
      {children}
    </div>
  );
}
