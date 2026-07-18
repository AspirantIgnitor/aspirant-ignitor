"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to continue your study streak with expert guidance, adaptive practice, and clear analytics."
      footerText="New here?"
      footerHref="/register"
      footerLinkText="Create an account"
    >
      <form className="space-y-5">
        <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-4 shadow-sm">
          <div className="flex gap-2 rounded-full bg-slate-100 p-1">
            <button type="button" className="flex-1 rounded-full bg-[#FF6B00] px-3 py-2 text-sm font-semibold text-white">
              Email & Password
            </button>
            <button type="button" className="flex-1 rounded-full px-3 py-2 text-sm font-semibold text-slate-600">
              Mobile OTP
            </button>
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-[#FF6B00]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#FF6B00]"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="rounded border-slate-300 text-[#FF6B00] focus:ring-[#FF6B00]"
                />
                Remember me
              </label>
              <Link href="/" className="font-semibold text-[#FF6B00]">Forgot password?</Link>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-[#FF6B00] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#e25b00]"
        >
          Sign in
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#071A35] transition hover:bg-slate-50"
        >
          <span className="text-base">G</span>
          Continue with Google
        </button>
      </form>
    </AuthShell>
  );
}
