"use client";

import { motion } from "framer-motion";
import { examGroups } from "./content";
import { SectionHeading } from "./SectionHeading";

export function ExamsSection() {
  return (
    <section id="exams" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Exam coverage"
        title="Built for the major competitive exams that matter most"
        description="Choose a preparation path that aligns with your target exam and receive a roadmap tailored to the right syllabus and difficulty."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {examGroups.map((group, index) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="rounded-[1.5rem] border border-slate-200/70 bg-gradient-to-br from-white to-[#fff7f1] p-7 shadow-[0_20px_50px_rgba(7,26,53,0.06)]"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-[#071A35]">{group.name}</h3>
              <span className="rounded-full bg-[#071A35] px-3 py-1 text-sm font-medium text-white">{group.exams.length} exams</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.exams.map((exam) => (
                <span key={exam} className="rounded-full border border-[#FF6B00]/20 bg-[#FF6B00]/10 px-3 py-1 text-sm font-medium text-[#FF6B00]">
                  {exam}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
