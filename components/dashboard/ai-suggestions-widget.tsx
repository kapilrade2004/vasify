import React, { useState } from "react";
import { Sparkles, ArrowRight, Wand2, MessageSquareText, FileCode, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AISuggestionsWidget() {
  const [activeSuggestion, setActiveSuggestion] = useState<string | null>(null);

  const suggestions = [
    {
      id: "campaign",
      title: "Improve campaign conversion copy",
      description: "AI detected 15% higher CTR when using personalized WhatsApp template placeholders.",
      actionLabel: "Optimize Campaign",
      icon: Wand2,
    },
    {
      id: "rewrite",
      title: "Rewrite customer greeting message",
      description: "Auto-translate responses into top 5 regional Indian languages based on customer location.",
      actionLabel: "Rewrite Message",
      icon: MessageSquareText,
    },
    {
      id: "template",
      title: "Generate WhatsApp sales template",
      description: "Create an Meta-approved broadcasting template for weekend product promotions.",
      actionLabel: "Generate Template",
      icon: FileCode,
    },
  ];

  const handleAction = (id: string) => {
    setActiveSuggestion(id);
    setTimeout(() => {
      setActiveSuggestion(null);
    }, 2000);
  };

  return (
    <div className="layered-card rounded-2xl p-6 border border-purple-500/20 dark:border-purple-500/30 relative overflow-hidden ai-mesh-bg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold border border-purple-500/20 animate-pulse-glow">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="heading-card text-slate-900 dark:text-slate-100 flex items-center gap-2">
              ✨ AI Suggestions
            </h3>
            <p className="caption-text text-slate-500 dark:text-slate-400">
              Context-aware insights powered by Vasify AI
            </p>
          </div>
        </div>
        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-300 border border-purple-300 dark:border-purple-800">
          3 Ready
        </span>
      </div>

      <div className="space-y-3 mt-4">
        {suggestions.map((item) => {
          const IconComp = item.icon;
          const isDone = activeSuggestion === item.id;

          return (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all duration-200 hover:border-purple-500/40 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-purple-500 flex-shrink-0 mt-0.5">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.description}</p>
                </div>
              </div>

              <Button
                size="sm"
                onClick={() => handleAction(item.id)}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium text-xs rounded-lg shadow-sm flex items-center gap-1.5 flex-shrink-0"
              >
                {isDone ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> Applied!
                  </>
                ) : (
                  <>
                    {item.actionLabel} <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
