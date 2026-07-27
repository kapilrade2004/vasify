import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const analyticsData = [
  { month: "Jan", users: 1200, leads: 400, conversations: 2400 },
  { month: "Feb", users: 1900, leads: 600, conversations: 3800 },
  { month: "Mar", users: 2400, leads: 850, conversations: 5100 },
  { month: "Apr", users: 3100, leads: 1100, conversations: 6900 },
  { month: "May", users: 4200, leads: 1600, conversations: 9200 },
  { month: "Jun", users: 5600, leads: 2100, conversations: 12400 },
  { month: "Jul", users: 7200, leads: 2900, conversations: 15800 },
];

const channelData = [
  { name: "WhatsApp API", value: 55, color: "#10b981" },
  { name: "Web Chatbot", value: 25, color: "#3b82f6" },
  { name: "Facebook Bot", value: 12, color: "#a855f7" },
  { name: "Instagram Bot", value: 8, color: "#f97316" },
];

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Area Chart: Growth & Engagement */}
      <div className="lg:col-span-2 layered-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="heading-card text-slate-900 dark:text-slate-100">
              Engagement & Lead Traffic
            </h3>
            <p className="caption-text text-slate-500 dark:text-slate-400">
              Monthly overview of conversations and qualified leads
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Conversations
            </span>
            <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" /> Leads
            </span>
          </div>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={analyticsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorConv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.15)" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(15, 23, 42, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "12px",
                }}
              />
              <Area type="monotone" dataKey="conversations" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorConv)" />
              <Area type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Donut Chart: Channel Distribution */}
      <div className="layered-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
        <div>
          <h3 className="heading-card text-slate-900 dark:text-slate-100">
            Channel Distribution
          </h3>
          <p className="caption-text text-slate-500 dark:text-slate-400">
            Active incoming traffic by messaging platform
          </p>
        </div>

        <div className="h-56 w-full my-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={channelData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
              >
                {channelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(15, 23, 42, 0.9)",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2">
          {channelData.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                {item.name}
              </span>
              <span className="font-bold text-slate-900 dark:text-slate-100">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
