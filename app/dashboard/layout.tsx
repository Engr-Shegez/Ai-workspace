import Sidebar from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");
  return (
    <div className="flex h-screen dark:bg-zinc-950 dark:text-zinc-100 bg-white text-zinc-900">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
