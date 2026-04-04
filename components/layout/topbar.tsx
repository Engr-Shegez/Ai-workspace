"use client";

import { Menu, Search, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export function Topbar() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  return (
    <header className="flex h-14 items-center justify-between border-b dark:border-zinc-800 dark:bg-zinc-950 bg-white border-zinc-200 px-4">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button (we’ll wire later) */}
        <button className="md:hidden rounded-lg p-2 dark:hover:bg-zinc-800 hover:bg-zinc-100">
          <Menu size={18} />
        </button>

        <h2 className="text-lg font-medium dark:text-zinc-400 text-zinc-600">
          Workspace
        </h2>
      </div>

      {/* CENTER (search later) */}
      <div className="hidden md:flex items-center gap-2 rounded-lg dark:border-zinc-800 dark:bg-zinc-900 border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm dark:text-zinc-400 text-zinc-600">
        <Search size={20} />
        <span>Search...</span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2 dark:hover:bg-zinc-800 hover:bg-zinc-100"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        )}

        {/* User */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
