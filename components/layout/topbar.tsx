"use client";

import {
  Bell,
  Command,
  Menu,
  Moon,
  Search,
  Sparkles,
  Sun,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { useDashboardUiStore } from "@/lib/store/dashboard-ui-store";

function subscribe() {
  return () => {};
}

export function Topbar() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const { setCommandOpen, setUpdatesOpen, toggleSidebar } = useDashboardUiStore();

  return (
    <header className="relative px-3 pb-3 pt-3 sm:px-4">
      <div className="flex h-16 items-center justify-between rounded-[1.5rem] border border-black/6 bg-white/75 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:border-white/8 dark:bg-[#10100f]/80">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleSidebar}
            className="rounded-xl p-2 transition hover:bg-black/[0.04] dark:hover:bg-white/[0.06] lg:hidden"
          >
            <Menu size={18} />
          </button>

          <div className="hidden size-9 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:flex dark:bg-white dark:text-zinc-950">
            <Sparkles size={15} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              Dashboard
            </p>
            <h2 className="text-sm font-medium tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 sm:text-base">
              Workspace
            </h2>
          </div>
        </div>

        <div className="hidden flex-1 px-6 lg:flex">
          <button
            type="button"
            onClick={() => setCommandOpen(true)}
            className="flex w-full max-w-xl items-center gap-3 rounded-2xl border border-black/6 bg-zinc-50/90 px-4 py-3 text-sm text-zinc-500 transition hover:bg-zinc-100 dark:border-white/8 dark:bg-white/[0.04] dark:text-zinc-400 dark:hover:bg-white/[0.06]"
          >
            <Search size={16} />
            <span className="flex-1 text-left">
              Search threads, notes, and prompts
            </span>
            <div className="flex items-center gap-1 rounded-lg border border-black/6 bg-white px-2 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:border-white/10 dark:bg-white/[0.05]">
              <Command size={12} />
              K
            </div>
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setCommandOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl border border-black/6 bg-zinc-50/90 p-2.5 text-zinc-700 transition hover:bg-zinc-100 dark:border-white/8 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:bg-white/[0.06] lg:hidden"
          >
            <Search size={16} />
          </button>

          <button
            type="button"
            onClick={() => setUpdatesOpen(true)}
            className="hidden items-center gap-2 rounded-2xl border border-black/6 bg-zinc-50/90 px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:border-white/8 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:bg-white/[0.06] md:flex"
          >
            <Bell size={15} />
            Updates
          </button>

          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-2xl border border-black/6 bg-zinc-50/90 p-2.5 text-zinc-700 transition hover:bg-zinc-100 dark:border-white/8 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:bg-white/[0.06]"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          <div className="rounded-2xl border border-black/6 bg-zinc-50/90 p-1 dark:border-white/8 dark:bg-white/[0.04]">
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
}
