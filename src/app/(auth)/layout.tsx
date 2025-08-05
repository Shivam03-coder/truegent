import React, { type ReactNode } from "react";

const AuthRootLayout = ({ children }: { children: ReactNode }) => {
  return <main className="center bg-background root">{children}</main>;
};

export default AuthRootLayout;
