import Link from "next/link";
import { ReactNode } from "react";

type PageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
  action?: ReactNode;
};

export function PageShell({ title, description, children, action }: PageShellProps) {
  return (
    <div className="rounded-[2rem] border border-slate-200/70 bg-white/85 p-5 shadow-[0_20px_50px_rgba(7,26,53,0.06)] backdrop-blur sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF6B00]">Premium Student Portal</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#071A35]">{title}</h2>
          <p className="mt-2 text-sm text-slate-600">{description}</p>
        </div>
        {action ? <div>{action}</div> : null}
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}
