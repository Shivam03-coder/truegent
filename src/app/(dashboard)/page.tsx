"use client";

import { CallsHandledPerAgent } from "./call-handled-per-agent";
import CallStats from "./call-stats";
import ConversionFunnelSummary from "./conversion-funnel-summary";
import CostMetrics from "./cost-metrics";
import DashboardHeader from "./dashboard-header";
import InsightsCards from "./insights-cards";
import StatsOverview from "./stats-overview";
import { YourAvatars } from "./your-avatars";

export default function DashboardPage() {
  return (
    <div className="root gap-4 p-4 pt-0 sm:p-6">
      <DashboardHeader />
      <StatsOverview />
      <div className="grid grid-cols-2 gap-x-5">
        <ConversionFunnelSummary />
        <CostMetrics />
      </div>
      <InsightsCards />
      <div className="grid grid-cols-2 gap-x-5">
        <CallsHandledPerAgent />
        <CallStats />
      </div>
      <YourAvatars />
    </div>
  );
}
