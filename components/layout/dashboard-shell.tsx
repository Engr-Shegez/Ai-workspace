"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { DashboardCommandDialog } from "@/components/layout/dashboard-command-dialog";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { DashboardUpdatesDialog } from "@/components/layout/dashboard-updates-dialog";
import { useDashboardUiStore } from "@/lib/store/dashboard-ui-store";

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const { sidebarOpen, setSidebarOpen } = useDashboardUiStore();

  return (
    <div className="relative flex h-screen overflow-hidden bg-[#f5f4f1] text-zinc-900 dark:bg-[#0a0a09] dark:text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_32%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_20%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_18%)]" />

      <Sidebar />

      <AnimatePresence>
        {sidebarOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close sidebar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px] lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-y-0 left-0 z-50 w-[290px] lg:hidden"
            >
              <Sidebar mobile />
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      <div className="relative flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="min-h-0 flex-1 overflow-hidden p-3 pt-0 sm:p-4 sm:pt-0">
          {children}
        </main>
      </div>

      <DashboardCommandDialog />
      <DashboardUpdatesDialog />
    </div>
  );
}
