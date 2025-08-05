import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/global/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React, { type ReactNode } from "react";

const DashboardRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardRootLayout;
