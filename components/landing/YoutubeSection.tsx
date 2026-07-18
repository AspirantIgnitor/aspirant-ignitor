"use client";

import { motion } from "framer-motion";
import { youtubeVideos } from "./content";
import { SectionHeading } from "./SectionHeading";

export function YoutubeSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Video learning"
        title="Learn from focused lessons that make preparation simpler"
        description="Short, practical videos help you build strategy, improve accuracy, and revise faster between study blocks."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {youtubeVideos.map((video, index) => (
          <motion.article
            key={video.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.07 }}
            className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(7,26,53,0.06)]"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#071A35] px-3 py-1 text-sm font-medium text-white">{video.duration}</span>
              <span className="text-sm font-medium text-[#FF6B00]">YouTube</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#071A35]">{video.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{video.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
