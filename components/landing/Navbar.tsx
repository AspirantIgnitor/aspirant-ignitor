import Image from "next/image";
import Link from "next/link";

const navItems = ["Features", "Exams", "Analytics", "Testimonials"];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full shadow-[0_8px_24px_rgba(7,26,53,0.16)] sm:h-[56px] sm:w-[56px] md:h-[56px] md:w-[56px]">
            <Image
              src="/logo.png"
              alt="Aspirant Ignitor Logo"
              width={56}
              height={56}
              className="h-[42px] w-[42px] rounded-full object-cover sm:h-[56px] sm:w-[56px] md:h-[56px] md:w-[56px]"
              priority
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-[#071A35]">Aspirant Ignitor</p>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
              Ignite Today, Achieve Tomorrow
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#FF6B00]">
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#exams"
          className="rounded-full bg-[#FF6B00] px-4 py-2 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[#e25b00]"
        >
          Start preparing
        </a>
      </div>
    </header>
  );
}
