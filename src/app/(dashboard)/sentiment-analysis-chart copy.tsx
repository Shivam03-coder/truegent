"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Tag } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { name: "Positive", value: 62 },
  { name: "Neutral", value: 25 },
  { name: "Negative", value: 13 },
];

const colors = {
  Positive: "#3B82F6",
  Neutral: "#9CA3AF",
  Negative: "#EF4444",
};

export default function SentimentAnalysisChart() {
  return (
    <Card className="w-full bg-card border-none rounded-2xl text-white">
      <CardHeader>
        <CardTitle className="text-sm text-white">Sentiment Analysis</CardTitle>
      </CardHeader>
      <CardContent className="h-64 pt-2">
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <XAxis
              dataKey="name"
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v) => `${v} %`}
              domain={[0, 100]}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              formatter={(value: number) => `${value}%`}
              wrapperStyle={{ backgroundColor: "#1E293B", border: "none" }}
              labelStyle={{ color: "white" }}
              contentStyle={{ backgroundColor: "#1E293B", border: "none" }}
              cursor={{ fill: "transparent" }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={24}>
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={colors[entry.name as keyof typeof colors]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="text-muted-foreground mt-4 flex items-center gap-2 text-sm">
          <Tag className="h-4 w-4 text-blue-400" />
          Based on call tags and transcripts
        </div>
      </CardContent>
    </Card>
  );
}
