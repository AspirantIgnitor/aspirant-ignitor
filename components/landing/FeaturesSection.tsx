"use client";

import { motion } from "framer-motion";
import { featureCards } from "./content";
import { SectionHeading } from "./SectionHeading";

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why learners choose us"
        title="An all-in-one platform designed for serious exam preparation"
        description="From strategy to execution, every feature is engineered to reduce friction and accelerate measurable growth."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featureCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_45px_rgba(7,26,53,0.06)] backdrop-blur"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B00]/10 text-2xl">
              {card.icon}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[#071A35]">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
