"use client";

import {
  UserPlus,
  PhoneCall,
  CalendarCheck,
  TrendingUp,
  Clock,
} from "lucide-react";

const stats = [
  {
    label: "Total Leads Generated",
    value: "342",
    icon: <UserPlus className="text-primary h-5 w-5" />,
    change: "+12%",
    changeColor: "text-green-500",
  },
  {
    label: "Calls Made",
    value: "186",
    icon: <PhoneCall className="text-primary h-5 w-5" />,
    change: "+8%",
    changeColor: "text-green-500",
  },
  {
    label: "Booked Meetings",
    value: "57",
    icon: <CalendarCheck className="text-primary h-5 w-5" />,
    change: "+15%",
    changeColor: "text-green-500",
  },
  {
    label: "Success Rate",
    value: "31%",
    icon: <TrendingUp className="text-primary h-5 w-5" />,
    change: "+5%",
    changeColor: "text-green-500",
  },
  {
    label: "Avg. Call Duration",
    value: "5:23",
    icon: <Clock className="text-primary h-5 w-5" />,
    change: "-2%",
    changeColor: "text-red-500",
  },
];

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-md sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-card flex flex-col gap-2 rounded-2xl p-6 shadow"
        >
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <div className="rounded-md bg-[#10304A] p-1.5">{stat.icon}</div>
            <span className="text-white">{stat.label}</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-xl font-bold text-white">{stat.value}</span>
            <span className={`text-xs ${stat.changeColor}`}>{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
