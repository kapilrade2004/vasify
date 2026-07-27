import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("skeleton-shimmer rounded-lg bg-slate-200 dark:bg-slate-800", className)}
      {...props}
    />
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Stat Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="layered-card rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-9 w-9 rounded-xl" />
            </div>
            <Skeleton className="h-9 w-20" />
            <div className="flex justify-between items-center pt-2">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 layered-card rounded-2xl p-6 space-y-4">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-64 w-full rounded-xl" />
        </div>
        <div className="layered-card rounded-2xl p-6 space-y-4">
          <Skeleton className="h-6 w-36" />
          <Skeleton className="h-52 w-52 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
}
