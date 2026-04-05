"use client";

import { Compass, FileText, Sparkles } from "lucide-react";

import { useChatStore } from "@/lib/store/chat-store";
import {
  explorePrompts,
  useDashboardUiStore,
} from "@/lib/store/dashboard-ui-store";

const noteCards = [
  {
    title: "Launch decisions",
    description:
      "Summarized outcomes from the pricing and positioning review.",
  },
  {
    title: "Support checklist",
    description:
      "Training readiness, FAQ updates, and escalation coverage for launch week.",
  },
  {
    title: "Stakeholder follow-ups",
    description:
      "Open items for product marketing, success, and operations.",
  },
];

export function DashboardNotesView() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          Notes
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
          Working notes and captured decisions
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500 dark:text-zinc-400">
          This surface gives the Notes tab a real destination without changing
          the chat flow underneath it.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {noteCards.map((note) => (
          <div
            key={note.title}
            className="rounded-[1.5rem] border border-black/6 bg-zinc-50/90 p-5 dark:border-white/8 dark:bg-white/[0.04]"
          >
            <div className="flex size-10 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
              <FileText className="size-4" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-zinc-950 dark:text-white">
              {note.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              {note.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardExploreView() {
  const { setDraft, setMessages } = useChatStore();
  const { setActiveView, setActiveThreadTitle } = useDashboardUiStore();

  const applyPrompt = (prompt: string) => {
    setDraft(prompt);
    setMessages([]);
    setActiveThreadTitle("New thread");
    setActiveView("chat");
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          Explore
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
          Prompt starters for common workspace tasks
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500 dark:text-zinc-400">
          Pick a starter and it will drop directly into the chat composer so you
          can keep moving without retyping the brief.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {explorePrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => applyPrompt(prompt)}
            className="rounded-[1.5rem] border border-black/6 bg-zinc-50/90 p-5 text-left transition hover:bg-white dark:border-white/8 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]"
          >
            <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
              <Compass className="size-4" />
            </div>
            <p className="mt-5 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
              {prompt}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white dark:bg-white dark:text-zinc-950">
              <Sparkles className="size-3.5" />
              Use in chat
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
