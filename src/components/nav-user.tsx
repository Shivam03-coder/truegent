"use client";

import { UserButton } from "@clerk/nextjs";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { api } from "@/trpc/react";

export function NavUser() {
  const { data: userInfo } = api.user.getUserInfo.useQuery();
  console.log("🚀 ~ NavUser ~ data:", userInfo)

  return (
    <SidebarMenu>
      <SidebarMenuItem className="rounded text-white">
        <SidebarMenuButton size="lg" className="flex items-center gap-3 !p-3">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: "h-8 w-8 rounded-lg",
              },
              variables: {
                colorPrimary: "#ff9900",
              },
            }}
          />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">
              {userInfo?.name || "User"}
            </span>
            <span className="text-xs">
              {userInfo?.email || "user@example.com"}
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
