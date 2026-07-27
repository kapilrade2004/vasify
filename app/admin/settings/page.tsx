import React, { useState } from "react";
import {
  User,
  Palette,
  Bell,
  Layers,
  Shield,
  CreditCard,
  Sparkles,
  SlidersHorizontal,
  Save,
  CheckCircle2,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { CommandPalette } from "@/components/command-palette";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const [activeSettingTab, setActiveSettingTab] = useState("account");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  const [user] = useState({
    name: "Mohish",
    email: "mohish@vasifytech.com",
  });

  const settingSections = [
    { id: "account", label: "Account", icon: User },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "integrations", label: "Integrations", icon: Layers },
    { id: "security", label: "Security", icon: Shield },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "ai", label: "AI Configuration", icon: Sparkles },
    { id: "advanced", label: "Advanced", icon: SlidersHorizontal },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      <DashboardHeader
        user={user}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 gap-6">
        <DashboardSidebar
          activeTab="settings"
          onSelectTab={() => {}}
        />

        <main className="flex-1 min-w-0 pb-20 md:pb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="heading-1 text-slate-900 dark:text-slate-100">Settings</h1>
              <p className="caption-text text-slate-500 dark:text-slate-400 mt-1">
                Manage your account credentials, AI integrations, and workspace preferences
              </p>
            </div>

            <Button
              onClick={handleSave}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl px-5 py-2 flex items-center gap-2 shadow-md"
            >
              {saved ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-200" /> Saved!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" /> Save Changes
                </>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Left Sub-Nav Tabs */}
            <div className="layered-card rounded-2xl p-2 h-fit space-y-1">
              {settingSections.map((sec) => {
                const IconComp = sec.icon;
                const isActive = activeSettingTab === sec.id;

                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSettingTab(sec.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                      isActive
                        ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-semibold shadow-sm border-l-4 border-emerald-500"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100"
                    }`}
                  >
                    <IconComp className={`w-4 h-4 ${isActive ? "text-emerald-500" : "text-slate-400"}`} />
                    <span>{sec.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Settings Content Form */}
            <div className="md:col-span-3 layered-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-6">
              {activeSettingTab === "account" && (
                <div className="space-y-4">
                  <h3 className="heading-section text-slate-900 dark:text-slate-100">Account Preferences</h3>
                  <p className="text-xs text-slate-500">Update your profile info and communication handle.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSettingTab === "ai" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    <h3 className="heading-section text-slate-900 dark:text-slate-100">AI Assistant Configuration</h3>
                  </div>
                  <p className="text-xs text-slate-500">Manage Google Gemini AI SDK keys and n8n webhook routing endpoints.</p>

                  <div className="space-y-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">n8n Default Webhook URL</label>
                      <input
                        type="text"
                        defaultValue="https://n8n.vasifytech.com/webhook/api/visa-ai-agent"
                        className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Default AI Model</label>
                      <select className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>gemini-3-flash-preview (Recommended)</option>
                        <option>gemini-1.5-pro</option>
                        <option>n8n Custom Agent Pipeline</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeSettingTab !== "account" && activeSettingTab !== "ai" && (
                <div className="space-y-4 py-8 text-center">
                  <h3 className="heading-card text-slate-900 dark:text-slate-100 capitalize">
                    {activeSettingTab} Settings
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Configure your {activeSettingTab} specifications and automation defaults.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      <MobileBottomNav />
    </div>
  );
}
