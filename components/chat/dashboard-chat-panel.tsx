"use client";

import { useDashboardUiStore } from "@/lib/store/dashboard-ui-store";

import { ChatMessages } from "./chat-messages";
import { ChatInput } from "./chat-input";
import { DashboardExploreView, DashboardNotesView } from "./dashboard-alt-view";

export function DashboardChatPanel() {
  const { activeThreadTitle, activeView } = useDashboardUiStore();

  return (
    <div className="flex h-full min-h-0 flex-col rounded-[1.75rem] border border-black/6 bg-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl dark:border-white/8 dark:bg-[#0d0d0c]/82">
      <div className="flex flex-col gap-6 border-b border-black/6 px-5 py-5 dark:border-white/8 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
              {activeView === "chat" ? "Active thread" : "Workspace view"}
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
              {activeView === "chat"
                ? activeThreadTitle
                : activeView === "notes"
                  ? "Notes"
                  : "Explore"}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              {activeView === "chat"
                ? "Keep prompts, replies, and iteration history in one place so the conversation stays readable as the work evolves."
                : activeView === "notes"
                  ? "Capture the important parts of the work without burying them inside a long thread."
                  : "Browse useful starting points and move one directly into the composer when you are ready."}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              [
                "Mode",
                activeView === "chat" ? "Focused workspace" : "Reference view",
              ],
              ["Latency", "Live response stream"],
              ["State", "Synced in session"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[1.25rem] border border-black/6 bg-zinc-50/80 px-4 py-3 dark:border-white/8 dark:bg-white/4"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  {label}
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
        {activeView === "chat" ? (
          <ChatMessages />
        ) : activeView === "notes" ? (
          <DashboardNotesView />
        ) : (
          <DashboardExploreView />
        )}
      </div>

      {activeView === "chat" ? (
        <div className="border-t border-black/6 p-4 dark:border-white/8 sm:p-5">
          <ChatInput />
        </div>
      ) : null}
    </div>
  );
}
