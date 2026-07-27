import React from "react";
import { FolderPlus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  icon: IconComponent = FolderPlus,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="layered-card rounded-2xl p-12 text-center flex flex-col items-center justify-center max-w-lg mx-auto border border-dashed border-slate-300 dark:border-slate-800 my-6">
      <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 shadow-inner">
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="heading-card text-slate-900 dark:text-slate-100 mb-1">{title}</h3>
      <p className="body-text text-slate-500 dark:text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
        {description}
      </p>

      {actionLabel && onAction && (
        <Button
          onClick={onAction}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-md flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
