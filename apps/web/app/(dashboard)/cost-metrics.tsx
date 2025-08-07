"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@workspace/ui/components/card";
import { DollarSign, Gauge, RefreshCcw } from "lucide-react";

const metrics = [
  {
    label: "Total Spend (This Month)",
    value: "$3,750",
    icon: <DollarSign className="h-4 w-4 text-blue-500" />,
  },
  {
    label: "Cost per Lead (CPL)",
    value: "$10.96",
    icon: <DollarSign className="h-4 w-4 text-blue-500" />,
  },
  {
    label: "Cost per Meeting",
    value: "$65.79",
    icon: <DollarSign className="h-4 w-4 text-blue-500" />,
  },
  {
    label: "Cost per Conversion",
    value: "$187.50",
    icon: <DollarSign className="h-4 w-4 text-blue-500" />,
  },
  {
    label: "Current Accuracy",
    value: "94%",
    icon: <RefreshCcw className="h-4 w-4 text-blue-500" />,
  },
];

const budgetUtilization = {
  label: "Budget Utilization",
  value: "62%",
  percent: 62,
  icon: <Gauge className="h-4 w-4 text-blue-500" />,
};

export default function CostMetrics() {
  return (
    <Card className="w-full bg-card rounded-2xl border-none text-white">
      <CardHeader>
        <CardTitle className="text-sm text-white">Cost Metrics</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-4">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between space-y-1 rounded-[8px] bg-background p-3"
          >
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <div className="text-lg font-semibold text-white">{item.value}</div>
          </div>
        ))}

        <div className="flex flex-col justify-between space-y-2 rounded-[8px] bg-background p-3">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            {budgetUtilization.icon}
            <span>{budgetUtilization.label}</span>
          </div>
          <div className="text-lg font-semibold text-white">
            {budgetUtilization.value}
          </div>
          <div className="h-2 w-full rounded-full bg-[#1C2536]">
            <div
              className="h-2 rounded-full bg-blue-500 transition-all duration-300"
              style={{ width: `${budgetUtilization.percent}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
