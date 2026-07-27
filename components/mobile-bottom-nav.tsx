import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, MessageSquare, BarChart3, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileBottomNav() {
  const { pathname } = useLocation();

  const navItems = [
    { label: "Home", icon: Home, href: "/admin/admin-home-page" },
    { label: "AI Chat", icon: MessageSquare, href: "/ai-agent" },
    { label: "Analytics", icon: BarChart3, href: "/admin/admin-home-page" },
    { label: "Settings", icon: Settings, href: "/admin/settings" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-4 py-2 flex items-center justify-around shadow-lg">
      {navItems.map((item, idx) => {
        const IconComp = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={idx}
            to={item.href}
            className={cn(
              "flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-xs font-medium transition-colors",
              isActive
                ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            )}
          >
            <IconComp className={cn("w-5 h-5", isActive && "scale-110 text-emerald-500")} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
