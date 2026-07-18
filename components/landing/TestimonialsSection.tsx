"use client";

import { motion } from "framer-motion";
import { testimonials } from "./content";
import { SectionHeading } from "./SectionHeading";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Success stories"
        title="Students trust the structure, clarity, and momentum"
        description="Every success story reflects a more focused routine, better revision habits, and stronger confidence on exam day."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.07 }}
            className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_45px_rgba(7,26,53,0.06)]"
          >
            <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
            <footer className="mt-6">
              <p className="font-semibold text-[#071A35]">{testimonial.name}</p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
