import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FolderOpen,
  FileText,
  Sparkles,
  Zap,
  Settings,
  ChevronLeft,
  ChevronRight,
  HardDrive,
  Crown,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export function DashboardSidebar({ activeTab, onSelectTab }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "blogs", label: "Blogs & Articles", icon: BookOpen },
    { id: "categories", label: "Categories", icon: FolderOpen },
    { id: "guides", label: "Free Guides", icon: FileText },
    { id: "ai-workspace", label: "AI Suggestions", icon: Sparkles, badge: "AI" },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside
      className={cn(
        "h-[calc(100vh-4rem)] sticky top-16 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 flex flex-col justify-between z-30 select-none",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Top Navigation Links */}
      <div className="p-3 space-y-1">
        <div className="flex items-center justify-between px-3 py-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          {!collapsed && <span>Menu</span>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors ml-auto"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {menuItems.map((item) => {
          const IconComp = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group relative",
                isActive
                  ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-semibold shadow-sm sidebar-active-indicator"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-100 sidebar-item-hover"
              )}
            >
              <IconComp
                className={cn(
                  "w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110",
                  isActive ? "text-emerald-500" : "text-slate-400 dark:text-slate-500 group-hover:text-emerald-500"
                )}
              />
              {!collapsed && (
                <span className="truncate flex-1 text-left">{item.label}</span>
              )}

              {!collapsed && item.badge && (
                <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 animate-pulse">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Sidebar Footer: Storage & Upgrade Plan */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-800 space-y-3">
        {!collapsed ? (
          <>
            {/* Storage Progress Widget */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <HardDrive className="w-3.5 h-3.5 text-emerald-500" /> Storage
                </span>
                <span className="font-mono text-[11px] font-semibold text-slate-500">2.4 GB / 10 GB</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[24%] transition-all duration-500" />
              </div>
            </div>

            {/* Current Plan Badge */}
            <div className="p-3 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-950 text-white shadow-md space-y-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <Crown className="w-12 h-12 text-amber-400" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Current Plan</span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Pro
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">Professional AI Suite</p>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors pt-1"
              >
                Upgrade Plan <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </>
        ) : (
          <div className="flex justify-center p-1">
            <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold text-xs">
              24%
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
