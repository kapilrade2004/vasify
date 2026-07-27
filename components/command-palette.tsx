import React, { useState, useEffect } from "react";
import {
  Search,
  Users,
  Megaphone,
  FileText,
  BarChart3,
  Settings,
  Sparkles,
  Zap,
  BookOpen,
  ArrowRight,
  X,
  Command,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Listen for Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      group: "Quick Navigation",
      items: [
        { label: "Overview & Analytics", icon: BarChart3, path: "/admin/admin-home-page", category: "Analytics" },
        { label: "AI Agent Workspace", icon: Sparkles, path: "/ai-agent", category: "AI Tools" },
        { label: "WhatsApp Services", icon: Zap, path: "/whatsapp-services", category: "Messaging" },
        { label: "Free PDF Invoice Extractor", icon: FileText, path: "/tools/pdf-extractor", category: "Tools" },
        { label: "Manage Blogs & Articles", icon: BookOpen, path: "/admin/admin-home-page?tab=blogs", category: "Content" },
        { label: "System Settings", icon: Settings, path: "/admin/settings", category: "Settings" },
      ],
    },
    {
      group: "AI Context Actions",
      items: [
        { label: "✨ Optimize Campaign Copy", icon: Sparkles, path: "/ai-agent", category: "AI Action" },
        { label: "✨ Generate WhatsApp Template", icon: Megaphone, path: "/whatsapp-services", category: "AI Action" },
        { label: "✨ Analyze Audience Engagement", icon: Users, path: "/admin/admin-home-page", category: "AI Action" },
      ],
    },
  ];

  const filteredActions = actions.map((group) => ({
    ...group,
    items: group.items.filter(
      (item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    ),
  })).filter((group) => group.items.length > 0);

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in-up">
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (Users, Campaigns, AI Templates)..."
            className="w-full bg-transparent text-sm md:text-base text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          <div className="flex items-center gap-1 text-[11px] text-slate-400 bg-slate-200/60 dark:bg-slate-800 px-2 py-1 rounded-md font-mono">
            <Command className="w-3 h-3" /> K
          </div>
          <button
            onClick={onClose}
            className="ml-2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/60">
          {filteredActions.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-medium">No results matching &quot;{query}&quot;</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for &apos;Campaigns&apos;, &apos;AI&apos;, or &apos;Settings&apos;</p>
            </div>
          ) : (
            filteredActions.map((group, gIdx) => (
              <div key={gIdx} className="py-2 first:pt-0 last:pb-0">
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {group.group}
                </div>
                <div className="space-y-1 mt-1">
                  {group.items.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(item.path)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-medium leading-none">{item.label}</p>
                            <span className="text-[11px] text-slate-400 mt-1 inline-block">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Navigate with arrows or click action</span>
          <span>ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
}
