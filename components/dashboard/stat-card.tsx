import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number | string;
  trend?: string;
  isPositive?: boolean;
  comparisonText?: string;
  icon: React.ComponentType<{ className?: string }>;
  color?: string;
  sparklineData?: { val: number }[];
}

export function StatCard({
  title,
  value,
  trend = "12.4%",
  isPositive = true,
  comparisonText = "Compared to yesterday",
  icon: IconComponent,
  color = "#10b981",
  sparklineData = [
    { val: 12 },
    { val: 18 },
    { val: 15 },
    { val: 26 },
    { val: 22 },
    { val: 35 },
    { val: 30 },
  ],
}: StatCardProps) {
  return (
    <div className="layered-card rounded-2xl p-5 relative overflow-hidden transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {title}
          </span>
          <div className="text-3xl font-black text-slate-900 dark:text-slate-100 mt-1 tracking-tight">
            {typeof value === "number" ? value.toLocaleString() : value}
          </div>
        </div>

        <div
          className="p-3 rounded-xl flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: color }}
        >
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      {/* Sparkline & Trend Metadata */}
      <div className="mt-4 flex items-end justify-between gap-2 pt-3 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <span
              className={cn(
                "inline-flex items-center gap-0.5 text-xs font-bold px-1.5 py-0.5 rounded-full",
                isPositive
                  ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400"
                  : "bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400"
              )}
            >
              {isPositive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {trend}
            </span>
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">{comparisonText}</p>
        </div>

        {/* Mini Sparkline Graph */}
        <div className="w-24 h-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparklineData}>
              <defs>
                <linearGradient id={`grad-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={color} stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="val"
                stroke={color}
                strokeWidth={2}
                fillOpacity={1}
                fill={`url(#grad-${title})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
