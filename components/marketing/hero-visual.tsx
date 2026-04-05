"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Sparkle, TerminalSquare } from "lucide-react";

const floatTransition = {
  duration: 6,
  repeat: Number.POSITIVE_INFINITY,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[38rem]">
      <div className="absolute inset-x-10 top-10 h-56 rounded-full bg-emerald-300/12 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] border border-black/6 bg-white/70 p-3 shadow-[0_28px_120px_rgba(0,0,0,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_28px_120px_rgba(0,0,0,0.38)]"
      >
        <div className="rounded-[1.5rem] border border-white/10 bg-[#11110e]">
          <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/12" />
                <span className="size-2.5 rounded-full bg-white/8" />
              </div>
              <p className="text-sm text-zinc-400">Launch planning workspace</p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              Synced just now
            </div>
          </div>

          <div className="grid gap-4 p-4 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-4 rounded-[1.25rem] border border-white/8 bg-black/25 p-4">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Spaces
                </p>
                {["Executive review", "Q2 launch", "Support handoff"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/5 px-3 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="rounded-[1.25rem] border border-emerald-200/15 bg-emerald-300/8 p-4">
                <div className="flex items-center gap-2 text-sm text-zinc-100">
                  <Sparkle className="size-4 text-emerald-200" />
                  Refined brief ready
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Consolidated scope, launch risks, and stakeholder feedback into
                  a single shareable summary.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                      Current thread
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">
                      Finalize launch narrative and owner handoff
                    </h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/30 p-2">
                    <TerminalSquare className="size-4 text-zinc-300" />
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl border border-white/8 bg-black/25 p-4">
                    <p className="text-sm font-medium text-zinc-100">
                      Team alignment
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Marketing wants a sharper positioning line. Ops needs rollout
                      dates summarized for support training.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200/15 bg-emerald-200/8 p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-emerald-200/15 p-1">
                        <Check className="size-3.5 text-emerald-200" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-zinc-100">
                          Suggested output
                        </p>
                        <p className="text-sm leading-6 text-zinc-400">
                          Publish the narrative, attach the handoff checklist, and
                          assign rollout approvals in the same thread.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Next action
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    Share final brief with support and schedule review for 4 PM.
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Linked artifacts
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    3 briefs, 2 meeting notes, 1 release plan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-6, 8, -6] }}
        transition={floatTransition}
        className="absolute -left-5 top-8 hidden rounded-3xl border border-black/6 bg-white/90 px-4 py-3 text-zinc-900 shadow-[0_20px_48px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/90 dark:text-white dark:shadow-[0_20px_48px_rgba(0,0,0,0.32)] sm:block"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          Review status
        </p>
        <div className="mt-2 flex items-center gap-2 text-sm text-zinc-900 dark:text-white">
          Ready for handoff
          <ArrowUpRight className="size-4 text-emerald-700 dark:text-emerald-200" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -6, 8] }}
        transition={{ ...floatTransition, duration: 7 }}
        className="absolute -right-4 bottom-12 hidden rounded-3xl border border-black/6 bg-white/90 px-4 py-3 shadow-[0_20px_48px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90 dark:shadow-[0_20px_48px_rgba(0,0,0,0.32)] sm:block"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          Weekly lift
        </p>
        <p className="mt-2 text-lg font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
          Fewer tabs. Faster reviews.
        </p>
      </motion.div>
    </div>
  );
}
