import { DashboardShell } from "@/components/layout/dashboard-shell";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  return <DashboardShell>{children}</DashboardShell>;
};

export default DashboardLayout;
