export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#071A35] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-xl font-semibold">Aspirant Ignitor</p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">
            Premium learning experiences for aspirants preparing for SSC, Railway, Bank, and PSC exams.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <a href="#features" className="transition hover:text-[#FF6B00]">Features</a>
          <a href="#exams" className="transition hover:text-[#FF6B00]">Exams</a>
          <a href="#analytics" className="transition hover:text-[#FF6B00]">Analytics</a>
          <a href="#testimonials" className="transition hover:text-[#FF6B00]">Testimonials</a>
        </div>
      </div>
    </footer>
  );
}
