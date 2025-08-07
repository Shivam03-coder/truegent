import { CallsHandledPerAgent } from "@/app/(dashboard)/call-handled-per-agent";
import CallStats from "@/app/(dashboard)/call-stats";
import ConversionFunnelSummary from "@/app/(dashboard)/conversion-funnel-summary";
import CostMetrics from "@/app/(dashboard)/cost-metrics";
import DashboardHeader from "@/app/(dashboard)/dashboard-header";
import InsightsCards from "@/app/(dashboard)/insights-cards";
import StatsOverview from "@/app/(dashboard)/stats-overview";
import { YourAvatars } from "@/app/(dashboard)/your-avatars";

export default function DashboardPage() {
  return (
    <div className="root gap-4 p-4 pt-0 sm:p-6">
      <DashboardHeader />
      <StatsOverview />
      <div className="grid lg:grid-cols-2  gap-5">
        <ConversionFunnelSummary />
        <CostMetrics />
      </div>
      <InsightsCards />
      <div className="grid lg:grid-cols-2  gap-5">
        <CallsHandledPerAgent />
        <CallStats />
      </div>
      <YourAvatars />
    </div>
  );
}
