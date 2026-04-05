"use client";

import { Bell } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  dashboardNotices,
  useDashboardUiStore,
} from "@/lib/store/dashboard-ui-store";

export function DashboardUpdatesDialog() {
  const { updatesOpen, setUpdatesOpen } = useDashboardUiStore();

  return (
    <Dialog open={updatesOpen} onOpenChange={setUpdatesOpen}>
      <DialogContent
        className="max-w-lg rounded-[1.75rem] border border-black/6 bg-[#faf9f7] text-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,0.12)] dark:border-white/8 dark:bg-[#10100f] dark:text-zinc-100"
      >
        <DialogHeader>
          <div className="flex size-10 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
            <Bell className="size-4" />
          </div>
          <DialogTitle className="pt-2 text-lg tracking-[-0.03em]">
            Workspace updates
          </DialogTitle>
          <DialogDescription className="text-zinc-500 dark:text-zinc-400">
            Recent activity across the current workspace.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          {dashboardNotices.map((notice) => (
            <div
              key={notice.id}
              className="rounded-[1.25rem] border border-black/6 bg-white px-4 py-3 dark:border-white/8 dark:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {notice.title}
                </p>
                <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  {notice.time}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                {notice.detail}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
