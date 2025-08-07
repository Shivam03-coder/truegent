"use client";

import {
  MapPin,
  Linkedin,
  MousePointerClick,
  FileText,
  Tag,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@workspace/ui/components/card";
import SentimentAnalysisChart from "./sentiment-analysis-chart";

export default function InsightsCards() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
      {/* Sentiment Analysis */}
      <SentimentAnalysisChart />
      {/* Lead Source */}
      <Card className="w-full bg-card border-none rounded-2xl text-white">
        <CardHeader>
          <CardTitle className="text-sm text-white">Lead Source</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              label: "LinkedIn",
              icon: <Linkedin className="h-5 w-5 text-blue-400" />,
              count: 145,
              percent: "42%",
            },
            {
              label: "Ads",
              icon: <MousePointerClick className="h-5 w-5 text-green-400" />,
              count: 98,
              percent: "29%",
            },
            {
              label: "Forms",
              icon: <FileText className="h-5 w-5 text-cyan-400" />,
              count: 99,
              percent: "29%",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-md bg-[#131C31] px-4 py-2"
            >
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                {item.icon}
                {item.label}
              </div>
              <div className="text-sm font-semibold text-white">
                {item.count}{" "}
                <span className="text-muted-foreground">{item.percent}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Geography of Leads */}
      <Card className="w-full bg-card border-none rounded-2xl text-white">
        <CardHeader>
          <CardTitle className="text-sm text-white">
            Geography of Leads
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { region: "North America", count: 142, percent: "42%" },
            { region: "Europe", count: 87, percent: "25%" },
            { region: "Asia", count: 76, percent: "22%" },
            { region: "Australia", count: 24, percent: "7%" },
            { region: "Other", count: 13, percent: "4%" },
          ].map((item) => (
            <div
              key={item.region}
              className="flex items-center justify-between text-sm"
            >
              <div className="text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                {item.region}
              </div>
              <div className="font-semibold text-white">
                {item.count}{" "}
                <span className="text-muted-foreground">{item.percent}</span>
              </div>
            </div>
          ))}

          <button className="text-muted-foreground mt-2 w-full rounded-md bg-[#131C31] py-1.5 text-sm transition hover:bg-[#1C2536]">
            View on map
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
