import Link from "next/link";

import { HeroVisual } from "@/components/marketing/hero-visual";
import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";

const heroStats = [
  {
    label: "Shared context",
    value: "One thread for drafts, decisions, and notes",
  },
  {
    label: "Team ready",
    value: "Built for product, ops, support, and research",
  },
  { label: "Workflow first", value: "Faster handoffs without extra process" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:pb-28 sm:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal className="relative">
          <div className="inline-flex items-center rounded-full border border-emerald-700/15 bg-emerald-500/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.24em] text-emerald-800 dark:border-emerald-200/15 dark:bg-emerald-200/8 dark:text-emerald-100/85">
            A calmer operating layer for modern teams
          </div>
          <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-[-0.065em] text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
            Keep work moving without scattering context everywhere.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Threadline gives teams one premium workspace for conversations,
            briefs, and outputs so ideas become decisions, and decisions become
            action.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-11 rounded-full bg-zinc-950 px-6 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <Link href="/sign-up">Start free</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-11 rounded-full border border-black/8 bg-white/60 px-6 text-sm font-medium text-zinc-900 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
            >
              <Link href="/dashboard">Open workspace</Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={0.08 * (index + 1)}
                className="rounded-3xl border border-black/6 bg-white/70 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.04)] dark:border-white/8 dark:bg-white/[0.035] dark:shadow-none"
              >
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                  {stat.label}
                </p>
                <p className="mt-3 text-md leading-6 text-zinc-700 dark:text-zinc-300">
                  {stat.value}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
