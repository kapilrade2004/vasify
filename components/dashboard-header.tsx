import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Bell,
  Sun,
  Moon,
  Sparkles,
  Command,
  User,
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Breadcrumbs } from "./breadcrumbs";
import ProfileDropdown from "@/app/admin/admin-home-page/components/profile-dropdown";

interface DashboardHeaderProps {
  user: { name: string; email: string } | null;
  onOpenCommandPalette: () => void;
  onUpdateProfile?: () => void;
  onLogout?: () => void;
}

export function DashboardHeader({
  user,
  onOpenCommandPalette,
  onUpdateProfile,
  onLogout,
}: DashboardHeaderProps) {
  const { theme, setTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);

  // Close notifications dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const notifications = [
    { id: 1, title: "AI Campaign Generated", desc: "WhatsApp broadcast scheduled for 500 leads", time: "5m ago", type: "ai", icon: Sparkles },
    { id: 2, title: "New Lead Capture", desc: "Real Estate query received via chatbot", time: "25m ago", type: "success", icon: CheckCircle2 },
    { id: 3, title: "Quota Warning", desc: "API usage reached 75% of monthly limit", time: "2h ago", type: "warning", icon: AlertTriangle },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Logo & Breadcrumbs */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              V
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-slate-100 hidden sm:inline-block">
              Vasify<span className="text-emerald-500">Tech</span>
            </span>
          </Link>

          <div className="hidden md:block">
            <Breadcrumbs />
          </div>
        </div>

        {/* Center/Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Global Search Command Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60 transition-all text-xs md:text-sm w-36 sm:w-56 md:w-64"
          >
            <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span className="truncate">Search commands...</span>
            <kbd className="ml-auto hidden sm:flex items-center gap-0.5 text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
              <Command className="w-2.5 h-2.5" /> K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            title="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Notifications Dropdown */}
          <div className="relative" ref={notificationsRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 relative transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50 animate-fade-in-up">
                <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Notifications</h4>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    3 New
                  </span>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800/60 max-h-72 overflow-y-auto">
                  {notifications.map((n) => {
                    const IconComp = n.icon;
                    return (
                      <div key={n.id} className="p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex gap-3">
                        <div className={`p-2 rounded-lg flex-shrink-0 ${
                          n.type === 'ai' ? 'bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400' :
                          n.type === 'success' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400' :
                          'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400'
                        }`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">{n.title}</p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{n.desc}</p>
                          <span className="text-[10px] text-slate-400 mt-1 block">{n.time}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <ProfileDropdown
            user={user}
            onUpdateProfile={onUpdateProfile || (() => {})}
            onLogout={onLogout || (() => {})}
          />
        </div>
      </div>
    </header>
  );
}
