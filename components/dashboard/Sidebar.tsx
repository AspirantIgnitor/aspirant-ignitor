type SidebarProps = {
  activeSection: string;
  onSelect: (section: string) => void;
  onLogout: () => void;
};

const items = [
  "Dashboard",
  "Daily Tracker",
  "Analytics",
  "Goals",
  "Subjects",
  "Mock Tests",
  "Current Affairs",
  "PYQs",
  "Settings",
];

export function Sidebar({ activeSection, onSelect, onLogout }: SidebarProps) {
  return (
    <aside className="flex h-full w-full flex-col justify-between rounded-[1.75rem] border border-slate-200/70 bg-[#071A35] p-5 text-white shadow-[0_22px_55px_rgba(7,26,53,0.14)]">
      <div>
        <div className="rounded-[1.25rem] border border-white/10 bg-white/10 p-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Student Portal</p>
          <p className="mt-2 text-xl font-semibold">Rise with discipline</p>
        </div>
        <nav className="mt-6 space-y-2">
          {items.map((item) => {
            const isActive = activeSection === item;
            return (
              <button
                key={item}
                onClick={() => onSelect(item)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                  isActive ? "bg-[#FF6B00] text-white" : "text-slate-200 hover:bg-white/10"
                }`}
              >
                <span>{item}</span>
                <span className="text-xs opacity-70">↗</span>
              </button>
            );
          })}
        </nav>
      </div>
      <button
        onClick={onLogout}
        className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-white/20"
      >
        Logout
      </button>
    </aside>
  );
}
