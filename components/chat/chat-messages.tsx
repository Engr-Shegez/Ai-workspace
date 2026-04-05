"use client";

import { Bot, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

import { useChatStore } from "@/lib/store/chat-store";

export function ChatMessages() {
  const { messages, isStreaming } = useChatStore();
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const lastAssistantMessage = [...messages]
    .reverse()
    .find((message) => message.role === "assistant");

  useEffect(() => {
    if (!bottomRef.current) {
      return;
    }

    bottomRef.current.scrollIntoView({
      behavior: isStreaming ? "auto" : "smooth",
      block: "end",
    });
  }, [isStreaming, lastAssistantMessage?.content, messages.length]);

  if (messages.length === 0) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center py-16 text-center sm:py-24">
        <div className="flex size-14 items-center justify-center rounded-[1.5rem] bg-zinc-950 text-white shadow-[0_18px_40px_rgba(0,0,0,0.16)] dark:bg-white dark:text-zinc-950">
          <Sparkles className="size-6" />
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
          Start a fresh thread
        </h2>
        <p className="mt-3 max-w-xl text-md leading-7 text-zinc-500 dark:text-zinc-400">
          Ask a question, draft an idea, or paste in context to begin. Your
          conversation will stream here as the workspace builds alongside you.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {messages.map((msg, i) => {
        const isLatestAssistantMessage =
          msg.role === "assistant" && i === messages.length - 1;

        return (
          <div
            key={i}
            className={`flex gap-4 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "assistant" ? (
              <div className="mt-1 hidden size-10 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:flex dark:bg-white dark:text-zinc-950">
                <Bot className="size-4" />
              </div>
            ) : null}

            <div
              className={`max-w-184 space-y-2 ${
                msg.role === "user" ? "items-end text-right" : ""
              }`}
            >
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                {msg.role === "user" ? "You" : "Aven"}
              </div>

              <div
                className={`rounded-[1.5rem] px-5 py-4 text-[15px] leading-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ${
                  msg.role === "user"
                    ? "border border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-950"
                    : "border border-black/6 bg-zinc-50/90 text-zinc-800 dark:border-white/8 dark:bg-white/4 dark:text-zinc-200"
                }`}
              >
                {msg.content ? (
                  <>
                    {msg.content}
                    {isStreaming && isLatestAssistantMessage ? (
                      <span
                        aria-hidden="true"
                        className="ml-1 inline-block h-5 w-0.5 animate-pulse rounded-full bg-current align-middle opacity-70"
                      />
                    ) : null}
                  </>
                ) : (
                  <span className="inline-flex items-center gap-2 text-zinc-400">
                    <span className="size-2 rounded-full bg-current opacity-60" />
                    Thinking....
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <div ref={bottomRef} aria-hidden="true" className="h-px" />
    </div>
  );
}
