"use client";

import { useState } from "react";
import { PageShell } from "@/components/portal/PageShell";
import { settingsData } from "@/lib/portalData";

export default function SettingsPage() {
  const [settings, setSettings] = useState(settingsData);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#fff8f2_100%)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <PageShell title="Settings" description="Manage your profile, preferences, and exam focus with ease.">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.6rem] border border-slate-200/70 bg-[#071A35] p-6 text-white">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl font-semibold">RS</div>
              <h3 className="mt-5 text-xl font-semibold">{settings.profileName}</h3>
              <p className="mt-2 text-sm text-slate-300">{settings.email}</p>
              <p className="mt-1 text-sm text-slate-300">{settings.mobile}</p>
            </div>
            <div className="rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Profile Name</label>
                  <input value={settings.profileName} onChange={(e) => setSettings({ ...settings, profileName: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                  <input value={settings.email} onChange={(e) => setSettings({ ...settings, email: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                  <input type="password" value="********" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Photo</label>
                  <input type="file" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
                </div>
                <label className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-600">
                  <span>Dark Mode</span>
                  <input type="checkbox" checked={settings.darkMode} onChange={() => setSettings({ ...settings, darkMode: !settings.darkMode })} className="rounded border-slate-300 text-[#FF6B00]" />
                </label>
                <label className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-600">
                  <span>Notifications</span>
                  <input type="checkbox" checked={settings.notifications} onChange={() => setSettings({ ...settings, notifications: !settings.notifications })} className="rounded border-slate-300 text-[#FF6B00]" />
                </label>
              </div>
              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-slate-700">Exam Preferences</label>
                <input value={settings.examPreferences.join(", ")} onChange={(e) => setSettings({ ...settings, examPreferences: e.target.value.split(",") })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
              </div>
              <button className="mt-5 w-full rounded-full bg-[#FF6B00] px-4 py-3 text-sm font-semibold text-white">Save settings</button>
            </div>
          </div>
        </PageShell>
      </div>
    </div>
  );
}
