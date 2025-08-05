import { type Metadata } from "next";
import "@/styles/globals.css";
import { appfonts } from "@/fonts";
import AppRootProvider from "@/providers/app-root-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "GITMAX",
};

export default function AppRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en" className={appfonts}>
      <TRPCReactProvider>
        <ClerkProvider>
          <body className="">
            <AppRootProvider>
              <main className="flex min-h-screen flex-col">{children}</main>
            </AppRootProvider>
          </body>
        </ClerkProvider>
      </TRPCReactProvider>
    </html>
  );
}
