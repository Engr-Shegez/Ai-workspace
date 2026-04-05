"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Compass,
  FileText,
  MessageSquare,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useChatStore } from "@/lib/store/chat-store";
import {
  explorePrompts,
  threadPreviews,
  useDashboardUiStore,
} from "@/lib/store/dashboard-ui-store";

const baseActions = [
  { id: "chat", title: "Open chat", hint: "Switch to the chat workspace" },
  { id: "notes", title: "Open notes", hint: "View notes and captured decisions" },
  {
    id: "explore",
    title: "Open explore",
    hint: "Browse prompt starters and suggestions",
  },
  { id: "new", title: "New thread", hint: "Start a fresh conversation" },
];

export function DashboardCommandDialog() {
  const { setMessages, setDraft } = useChatStore();
  const {
    commandOpen,
    setCommandOpen,
    setActiveView,
    setActiveThreadTitle,
    setSidebarOpen,
  } = useDashboardUiStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setCommandOpen]);

  const filteredActions = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    const quickActions = baseActions.filter((action) =>
      `${action.title} ${action.hint}`.toLowerCase().includes(normalized)
    );

    const threadActions = threadPreviews.filter((thread) =>
      `${thread.title} ${thread.summary}`.toLowerCase().includes(normalized)
    );

    const promptActions = explorePrompts.filter((prompt) =>
      prompt.toLowerCase().includes(normalized)
    );

    return { quickActions, threadActions, promptActions };
  }, [query]);

  const runQuickAction = (id: string) => {
    if (id === "chat") {
      setActiveView("chat");
    }

    if (id === "notes") {
      setActiveView("notes");
    }

    if (id === "explore") {
      setActiveView("explore");
    }

    if (id === "new") {
      setActiveView("chat");
      setActiveThreadTitle("New thread");
      setDraft("");
      setMessages([]);
      setSidebarOpen(false);
    }

    setCommandOpen(false);
  };

  const openThread = (threadId: string) => {
    const thread = threadPreviews.find((item) => item.id === threadId);
    if (!thread) return;

    setActiveView("chat");
    setActiveThreadTitle(thread.title);
    setDraft("");
    setMessages(thread.messages);
    setSidebarOpen(false);
    setCommandOpen(false);
  };

  const applyPrompt = (prompt: string) => {
    setActiveView("chat");
    setActiveThreadTitle("New thread");
    setDraft(prompt);
    setMessages([]);
    setSidebarOpen(false);
    setCommandOpen(false);
  };

  return (
    <Dialog
      open={commandOpen}
      onOpenChange={(open) => {
        setCommandOpen(open);
        if (!open) {
          setQuery("");
        }
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="max-w-2xl rounded-[1.75rem] border border-black/6 bg-[#faf9f7] p-0 text-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,0.12)] dark:border-white/8 dark:bg-[#10100f] dark:text-zinc-100"
      >
        <DialogHeader className="border-b border-black/6 px-5 py-5 dark:border-white/8">
          <DialogTitle className="text-lg tracking-[-0.03em]">
            Search the workspace
          </DialogTitle>
          <DialogDescription className="text-zinc-500 dark:text-zinc-400">
            Jump between views, reopen threads, or drop a starter prompt into the
            composer.
          </DialogDescription>
        </DialogHeader>

        <div className="px-5 pb-5 pt-4">
          <div className="flex items-center gap-3 rounded-[1.25rem] border border-black/6 bg-white px-4 py-3 dark:border-white/8 dark:bg-white/[0.04]">
            <Search className="size-4 text-zinc-500" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search actions, threads, or prompts..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
            />
          </div>

          <div className="mt-5 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                Quick actions
              </p>
              <div className="mt-3 grid gap-2">
                {filteredActions.quickActions.map((action) => (
                  <button
                    key={action.id}
                    type="button"
                    onClick={() => runQuickAction(action.id)}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-black/6 bg-white px-4 py-3 text-left transition hover:bg-zinc-50 dark:border-white/8 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]"
                  >
                    <div className="mt-0.5 flex size-8 items-center justify-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                      {action.id === "new" ? (
                        <Plus className="size-4" />
                      ) : action.id === "notes" ? (
                        <FileText className="size-4" />
                      ) : action.id === "explore" ? (
                        <Compass className="size-4" />
                      ) : (
                        <MessageSquare className="size-4" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {action.title}
                      </p>
                      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                        {action.hint}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                Recent threads
              </p>
              <div className="mt-3 grid gap-2">
                {filteredActions.threadActions.map((thread) => (
                  <button
                    key={thread.id}
                    type="button"
                    onClick={() => openThread(thread.id)}
                    className="rounded-[1.25rem] border border-black/6 bg-white px-4 py-3 text-left transition hover:bg-zinc-50 dark:border-white/8 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]"
                  >
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {thread.title}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {thread.summary}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                Prompt starters
              </p>
              <div className="mt-3 grid gap-2">
                {filteredActions.promptActions.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => applyPrompt(prompt)}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-black/6 bg-white px-4 py-3 text-left transition hover:bg-zinc-50 dark:border-white/8 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]"
                  >
                    <div className="mt-0.5 flex size-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                      <Sparkles className="size-4" />
                    </div>
                    <p className="text-sm text-zinc-700 dark:text-zinc-200">
                      {prompt}
                    </p>
                  </button>
                ))}
                {filteredActions.quickActions.length === 0 &&
                filteredActions.threadActions.length === 0 &&
                filteredActions.promptActions.length === 0 ? (
                  <div className="rounded-[1.25rem] border border-dashed border-black/8 px-4 py-6 text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
                    No matching results yet. Try a broader term like
                    &nbsp;&quot;thread&quot;, &quot;notes&quot;, or
                    &quot;launch&quot;.
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
