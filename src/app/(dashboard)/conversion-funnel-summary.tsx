"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const funnelData = [
  { label: "Leads", value: 342, max: 342 },
  { label: "Contacted", value: 186, max: 342 },
  { label: "Demo Booked", value: 57, max: 342 },
  { label: "Closed", value: 20, max: 342 },
];

export default function ConversionFunnelSummary() {
  return (
    <Card className="w-full bg-card rounded-2xl border-none text-white">
      <CardHeader>
        <CardTitle className="text-sm text-white">
          Conversion Funnel Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {funnelData.map((item) => (
          <div key={item.label} className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>{item.label}</span>
              <span className="font-semibold">{item.value}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#1C2536]">
              <div
                className="h-2 rounded-full bg-blue-500 transition-all duration-300"
                style={{
                  width: `${(item.value / item.max) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
