import Link from "next/link";
import { motion } from "framer-motion";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerText: string;
  footerHref: string;
  footerLinkText: string;
};

export function AuthShell({
  title,
  subtitle,
  children,
  footerText,
  footerHref,
  footerLinkText,
}: AuthShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.16),_transparent_35%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-[0_30px_80px_rgba(7,26,53,0.16)] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#071A35] p-8 text-white sm:p-10 lg:p-12">
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#FF6B00]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B00]" />
                Aspirant Ignitor
              </Link>
              <h1 className="mt-8 text-3xl font-semibold sm:text-4xl">{title}</h1>
              <p className="mt-4 max-w-md text-base leading-8 text-slate-300">{subtitle}</p>
              <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Study with focus</p>
                <p className="mt-3 text-xl font-semibold">Smart analytics, live practice, exam-ready discipline.</p>
              </div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              {children}
              <p className="mt-6 text-center text-sm text-slate-600">
                {footerText}{" "}
                <Link href={footerHref} className="font-semibold text-[#FF6B00] transition hover:text-[#e25b00]">
                  {footerLinkText}
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
