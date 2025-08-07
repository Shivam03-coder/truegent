"use client";

import { Calendar } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="bg-background flex items-center justify-between rounded-md px-6">
      <h1 className="text-xl font-bold text-white">Dashboard</h1>

      <div className="flex items-center gap-2 text-sm text-white">
        <Calendar className="h-4 w-4" />
        <span>Last updated: Today at 12:30 PM</span>
      </div>
    </div>
  );
}
