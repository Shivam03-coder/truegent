"use client";

import * as React from "react";
import {
  BrainCog,
  Code2,
  Mic2,
  PanelBottom,
  Plug2,
  Users,
  Video,
  Zap,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { CreditCard } from "lucide-react";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: PanelBottom,
    },
    {
      title: "Knowledge Training",
      url: "/knowledge-training",
      icon: BrainCog,
    },
    {
      title: "Prompt Builder",
      url: "/prompt-builder",
      icon: Code2,
    },
    {
      title: "Speech Avatar",
      url: "/speech-avatar",
      icon: Mic2,
    },
    {
      title: "Video Avatar",
      url: "/video-avatar",
      icon: Video,
    },
    {
      title: "Trigger Setup",
      url: "/trigger-setup",
      icon: Zap,
    },
    {
      title: "Integration",
      url: "/integration",
      icon: Plug2,
    },
    {
      title: "Billing",
      url: "/billing",
      icon: CreditCard,
    },
    {
      title: "User Management",
      url: "/user-management",
      icon: Users,
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
