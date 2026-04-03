"use client";

import { Menu, Search, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";

export function Topbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="flex h-14 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button (we’ll wire later) */}
        <button className="md:hidden rounded-lg p-2 hover:bg-zinc-800">
          <Menu size={18} />
        </button>

        <h2 className="text-lg font-medium text-zinc-400">Workspace</h2>
      </div>

      {/* CENTER (search later) */}
      <div className="hidden md:flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400">
        <Search size={20} />
        <span>Search...</span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2 hover:bg-zinc-800"
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
