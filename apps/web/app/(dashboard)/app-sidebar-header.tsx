"use client";
import { BellIcon, Plus, Settings } from "lucide-react";
import { SidebarTrigger } from "@workspace/ui/components/sidebar";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const AppSidebarHeader = () => {
  return (
    <header className="bg-background: oklch(0.2101 0.0318 264.66); text-primary flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />

        <button className="bg-transparent text-white">
          TRUGENT AI PLATFORM
        </button>
      </div>
      <div className="flex items-center gap-2 px-4 text-white">
        <BellIcon className="size-5" />
        <Settings className="size-5" />
        <UserButton
          appearance={{
            baseTheme: dark,
            variables: {
              colorBackground: "#0b0f1a",
              colorInputBackground: "#121726",
              colorText: "#ffffff",
              colorInputText: "#ffffff",
              colorPrimary: "#3b82f6",
              // @ts-ignore
              colorPrimaryText: "#ffffff",
              colorAlphaShade: "#1e40af",
              colorDanger: "#ef4444",
              borderRadius: "0.75rem",
            },
          }}
        />
      </div>
    </header>
  );
};

export default AppSidebarHeader;
