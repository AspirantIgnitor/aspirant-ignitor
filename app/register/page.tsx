"use client";

import { useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";

const examCategories = ["SSC", "Railway", "Bank", "PSC"];

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    exam: "SSC",
    terms: false,
  });

  return (
    <AuthShell
      title="Create your account"
      subtitle="Join a high-focus preparation ecosystem built for exam discipline, measurable progress, and smarter revision habits."
      footerText="Already have an account?"
      footerHref="/login"
      footerLinkText="Log in"
    >
      <form className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
          <input
            value={form.fullName}
            onChange={(event) => setForm({ ...form, fullName: event.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#FF6B00]"
            placeholder="Aman Sharma"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#FF6B00]"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Mobile Number</label>
          <input
            value={form.mobile}
            onChange={(event) => setForm({ ...form, mobile: event.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#FF6B00]"
            placeholder="9876543210"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#FF6B00]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Confirm Password</label>
            <input
              type="password"
              value={form.confirmPassword}
              onChange={(event) => setForm({ ...form, confirmPassword: event.target.value })}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#FF6B00]"
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Select Exam Category</label>
          <select
            value={form.exam}
            onChange={(event) => setForm({ ...form, exam: event.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#FF6B00]"
          >
            {examCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={form.terms}
            onChange={() => setForm({ ...form, terms: !form.terms })}
            className="mt-1 rounded border-slate-300 text-[#FF6B00] focus:ring-[#FF6B00]"
          />
          I accept the terms and privacy policy.
        </label>
        <button type="submit" className="w-full rounded-full bg-[#FF6B00] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#e25b00]">
          Create account
        </button>
      </form>
    </AuthShell>
  );
}
