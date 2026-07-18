"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const highlights = ["Live coaching", "AI study plan", "Mock-based growth"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.12),_transparent_40%)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/20 bg-[#FF6B00]/10 px-3 py-1 text-sm font-medium text-[#FF6B00]">
            <span className="h-2 w-2 rounded-full bg-[#FF6B00]" />
            Trusted by 18k+ serious aspirants
          </div>
          <div className="space-y-5">
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-[#071A35] sm:text-5xl lg:text-6xl">
              Turn exam preparation into a measurable, confident journey.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Aspirant Ignitor brings expert-led guidance, adaptive practice, and real-time analytics into one premium learning platform for SSC, Railway, Bank, and PSC exams.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="#exams" className="rounded-full bg-[#FF6B00] px-6 py-3 text-center font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[#e25b00]">
              Explore exams
            </Link>
            <a href="#analytics" className="rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-center font-semibold text-[#071A35] transition hover:border-[#FF6B00]/30 hover:text-[#FF6B00]">
              View analytics preview
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm text-slate-600">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_30px_70px_rgba(7,26,53,0.12)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-[#071A35] p-6 text-white">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Weekly momentum</span>
                <span className="rounded-full bg-white/10 px-3 py-1">+24% growth</span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-slate-300">Target completion</p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-3xl font-semibold">82%</p>
                    <p className="rounded-full bg-[#FF6B00] px-3 py-1 text-sm font-medium">On track</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Accuracy</p>
                    <p className="mt-2 text-2xl font-semibold">74%</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Revision score</p>
                    <p className="mt-2 text-2xl font-semibold">91%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
