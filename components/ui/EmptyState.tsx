export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-600">
      <h3 className="text-base font-semibold text-[#071A35]">{title}</h3>
      {description ? <p className="mt-2">{description}</p> : null}
    </div>
  );
}
