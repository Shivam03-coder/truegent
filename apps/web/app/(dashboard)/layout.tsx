import { AppSidebar } from "@workspace/ui/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar";
import React, { type ReactNode } from "react";
import AppSidebarHeader from "./app-sidebar-header";

const DashboardRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppSidebarHeader  />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardRootLayout;