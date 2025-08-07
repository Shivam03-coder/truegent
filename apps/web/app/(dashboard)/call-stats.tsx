"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ChevronDown, Filter, Info, XCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@workspace/ui/components/card";

const callData = [
  { day: "Mon", calls: 32 },
  { day: "Tue", calls: 28 },
  { day: "Wed", calls: 41 },
  { day: "Thu", calls: 37 },
  { day: "Fri", calls: 48 },
  { day: "Sat", calls: 0 },
  { day: "Sun", calls: 0 },
];

const failedReasons = [
  { reason: "Network issues", percent: 42 },
  { reason: "Call dropped", percent: 31 },
  { reason: "User hang-up", percent: 27 },
];

export default function CallStats() {
  return (
    <div className="grid md:grid-row-2 gap-4">
      {/* Daily Call Totals */}
      <Card className="w-full bg-card border-none rounded-2xl text-white">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-sm">Daily Call Totals</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground gap-1">
            <Filter className="w-4 h-4" />
            This Week <ChevronDown className="w-3 h-3" />
          </div>
        </CardHeader>
        <CardContent className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={callData}>
              <XAxis
                dataKey="day"
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                wrapperStyle={{ backgroundColor: "#1E293B" }}
                labelStyle={{ color: "white" }}
                contentStyle={{ backgroundColor: "#1E293B", border: "none" }}
              />
              <Bar dataKey="calls" radius={[4, 4, 0, 0]} barSize={30}>
                {callData.map((entry, index) => (
                  <Cell
                    key={`bar-${index}`}
                    fill={entry.calls === 0 ? "#334155" : "#3B82F6"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Failed Calls */}
      <Card className="w-full bg-card border-none rounded-2xl text-white">
        <CardHeader className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <XCircle className="text-red-500 w-6 h-6" />
            <div className="flex flex-col">
              <CardTitle className="text-white text-sm">Failed Calls</CardTitle>
              <span className="text-muted-foreground text-xs">
                Failed calls this day
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end text-sm">
            <span className="font-bold text-white">24</span>
            <span className="text-red-400 text-xs font-medium">+2.3% vs last day</span>
            <span className="text-muted-foreground text-xs">12.9%</span>
          </div>
        </CardHeader>

        <CardContent className="mt-2">
          <div className="bg-background  rounded-2xl  p-4 text-sm space-y-2">
            <div className="flex items-center gap-2 text-white font-medium mb-2">
              <Info className="w-4 h-4" />
              Top failure reasons:
            </div>
            {failedReasons.map((item, idx) => (
              <div key={idx} className="flex justify-between text-white">
                <span>{item.reason}</span>
                <span className="text-white font-semibold">{item.percent}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
