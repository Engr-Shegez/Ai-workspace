"use client";

import {
  ChevronDown,
  Compass,
  FileText,
  MessageSquare,
  Plus,
  Sparkles,
  X,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useChatStore } from "@/lib/store/chat-store";
import {
  spaceOptions,
  threadPreviews,
  useDashboardUiStore,
} from "@/lib/store/dashboard-ui-store";
import { cn } from "@/lib/utils";

type SidebarProps = {
  mobile?: boolean;
};

export function Sidebar({ mobile = false }: SidebarProps) {
  const { setMessages, setDraft } = useChatStore();
  const {
    activeView,
    currentSpaceId,
    setActiveView,
    setActiveThreadTitle,
    setCurrentSpace,
    setSidebarOpen,
  } = useDashboardUiStore();

  const currentSpace =
    spaceOptions.find((space) => space.id === currentSpaceId) ?? spaceOptions[0];

  const openThread = (threadId: string) => {
    const thread = threadPreviews.find((item) => item.id === threadId);
    if (!thread) return;

    setActiveView("chat");
    setActiveThreadTitle(thread.title);
    setDraft("");
    setMessages(thread.messages);
    setSidebarOpen(false);
  };

  const createNewThread = () => {
    setActiveView("chat");
    setActiveThreadTitle("New thread");
    setDraft("");
    setMessages([]);
    setSidebarOpen(false);
  };

  return (
    <aside
      className={cn(
        "w-[280px] shrink-0 border-r border-black/6 bg-white/70 p-4 backdrop-blur-xl dark:border-white/8 dark:bg-[#0d0d0c]/88",
        mobile ? "flex h-full flex-col" : "hidden lg:flex lg:flex-col"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] dark:bg-white dark:text-zinc-950">
            <Sparkles size={16} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              Workspace
            </p>
            <h1 className="text-base font-semibold tracking-[-0.03em] text-zinc-900 dark:text-white">
              Aven
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={createNewThread}
            className="inline-flex size-10 items-center justify-center rounded-2xl border border-black/8 bg-white text-zinc-700 transition hover:border-black/12 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
          >
            <Plus size={16} />
          </button>
          {mobile ? (
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-2xl border border-black/8 bg-white text-zinc-700 transition hover:border-black/12 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
            >
              <X size={16} />
            </button>
          ) : null}
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="mt-6 flex items-center justify-between rounded-[1.25rem] border border-black/6 bg-zinc-50/90 px-4 py-3 text-left transition hover:bg-zinc-100 dark:border-white/8 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                Current space
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {currentSpace.name}
              </p>
            </div>
            <ChevronDown size={16} className="text-zinc-500" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-2xl border border-black/6 bg-[#faf9f7] p-1 dark:border-white/8 dark:bg-[#10100f]">
          {spaceOptions.map((space) => (
            <DropdownMenuItem
              key={space.id}
              onSelect={() => setCurrentSpace(space.id)}
              className="rounded-xl px-3 py-2.5"
            >
              <div>
                <p className="text-sm font-medium">{space.name}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {space.description}
                </p>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <nav className="mt-8 space-y-1.5">
        <button
          type="button"
          onClick={() => {
            setActiveView("chat");
            setSidebarOpen(false);
          }}
          className={cn(
            "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm transition",
            activeView === "chat"
              ? "border border-emerald-500/15 bg-emerald-500/[0.08] font-medium text-zinc-900 hover:bg-emerald-500/[0.12] dark:text-zinc-100"
              : "text-zinc-600 hover:bg-black/[0.035] hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/[0.04] dark:hover:text-zinc-100"
          )}
        >
          <MessageSquare
            size={16}
            className={cn(activeView === "chat" && "text-emerald-600 dark:text-emerald-300")}
          />
          Chat
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveView("notes");
            setSidebarOpen(false);
          }}
          className={cn(
            "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm transition",
            activeView === "notes"
              ? "border border-emerald-500/15 bg-emerald-500/[0.08] font-medium text-zinc-900 hover:bg-emerald-500/[0.12] dark:text-zinc-100"
              : "text-zinc-600 hover:bg-black/[0.035] hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/[0.04] dark:hover:text-zinc-100"
          )}
        >
          <FileText size={16} />
          Notes
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveView("explore");
            setSidebarOpen(false);
          }}
          className={cn(
            "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm transition",
            activeView === "explore"
              ? "border border-emerald-500/15 bg-emerald-500/[0.08] font-medium text-zinc-900 hover:bg-emerald-500/[0.12] dark:text-zinc-100"
              : "text-zinc-600 hover:bg-black/[0.035] hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/[0.04] dark:hover:text-zinc-100"
          )}
        >
          <Compass size={16} />
          Explore
        </button>
      </nav>

      <div className="mt-8 rounded-[1.5rem] border border-black/6 bg-zinc-50/90 p-4 dark:border-white/8 dark:bg-white/[0.04]">
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          Recent threads
        </p>
        <div className="mt-4 space-y-2">
          {threadPreviews.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openThread(item.id)}
              className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm text-zinc-600 transition hover:bg-white hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-zinc-100"
            >
              <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <span className="min-w-0 flex-1 truncate">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto rounded-[1.5rem] border border-black/6 bg-zinc-950 p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)] dark:border-white/10">
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">
          Workspace tip
        </p>
        <p className="mt-3 text-sm leading-6 text-zinc-200">
          Keep a single thread per outcome so decisions, prompts, and revisions
          stay easy to scan later.
        </p>
      </div>
    </aside>
  );
}
