"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

import { navItems } from "@/components/marketing/data";
import { Button } from "@/components/ui/button";

function subscribe() {
  return () => {};
}

export function MarketingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <div className="relative rounded-full border border-black/6 bg-white/78 px-4 py-3 shadow-[0_18px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-black/35 dark:shadow-[0_18px_80px_rgba(0,0,0,0.28)]">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white"
            >
              Threadline
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-md text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              {mounted ? (
                <button
                  type="button"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-black/8 bg-zinc-50 text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
                >
                  {theme === "dark" ? (
                    <Sun className="size-4" />
                  ) : (
                    <Moon className="size-4" />
                  )}
                </button>
              ) : null}
              <Button
                asChild
                variant="ghost"
                className="border border-black/8 bg-zinc-50 px-4 text-zinc-900 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
              >
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button
                asChild
                className="bg-zinc-950 px-4 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </div>

            <button
              type="button"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="inline-flex size-10 items-center justify-center rounded-full border border-black/8 bg-zinc-50 text-zinc-900 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 md:hidden"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="mt-4 overflow-hidden rounded-3xl border border-black/8 bg-[#faf8f3] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-zinc-950/95 md:hidden"
              >
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-2xl px-4 py-3 text-sm text-zinc-600 transition hover:bg-black/[0.04] hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-4 grid gap-3">
                  {mounted ? (
                    <button
                      type="button"
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                      className="inline-flex h-11 items-center justify-center rounded-2xl border border-black/8 bg-zinc-50 text-zinc-900 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
                    >
                      {theme === "dark" ? "Light mode" : "Dark mode"}
                    </button>
                  ) : null}
                  <Button
                    asChild
                    variant="ghost"
                    className="justify-center border border-black/8 bg-zinc-50 text-zinc-900 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
                  >
                    <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                      Sign in
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="justify-center bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                  >
                    <Link href="/sign-up" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
