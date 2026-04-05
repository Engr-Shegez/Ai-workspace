"use client";

import { ArrowUp, Paperclip } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useChatStore, type Message } from "@/lib/store/chat-store";
import { useDashboardUiStore } from "@/lib/store/dashboard-ui-store";

export function ChatInput() {
  const [input, setInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { attachmentName, setAttachmentName } = useDashboardUiStore();
  const { messages, draft, addMessage, updateLastMessage, setDraft } =
    useChatStore();

  useEffect(() => {
    setInput(draft);
  }, [draft]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };

    addMessage(userMessage);
    addMessage({ role: "assistant", content: "" });

    setInput("");
    setDraft("");
    setAttachmentName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({
        messages: [...messages, userMessage],
      }),
    });

    if (!res.body) return;

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let aiText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      aiText += chunk;

      updateLastMessage(aiText);
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={(event) =>
          setAttachmentName(event.target.files?.[0]?.name ?? null)
        }
      />
      <div className="rounded-[1.5rem] border border-black/6 bg-zinc-50/90 p-3 shadow-[0_14px_34px_rgba(0,0,0,0.04)] dark:border-white/8 dark:bg-white/[0.04]">
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={() => {
              if (fileInputRef.current) {
                fileInputRef.current.value = "";
                fileInputRef.current.click();
              }
            }}
            className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-2xl border border-black/6 bg-white text-zinc-500 transition hover:bg-zinc-100 dark:border-white/8 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:bg-white/[0.06]"
          >
            <Paperclip size={16} />
          </button>

          <div className="min-w-0 flex-1">
            <textarea
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setDraft(e.target.value);
              }}
              placeholder="Ask anything, sketch an idea, or paste in context..."
              className="min-h-[72px] w-full resize-none bg-transparent px-1 py-2 text-sm leading-7 text-zinc-800 outline-none placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500"
              rows={3}
            />

            <div className="mt-2 flex items-center justify-between gap-3 border-t border-black/6 pt-3 dark:border-white/8">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {attachmentName
                  ? `Attached: ${attachmentName}`
                  : "Responses stream live into the active thread."}
              </p>
              <button
                type="button"
                onClick={handleSend}
                className="inline-flex items-center gap-2 rounded-2xl bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Send
                <ArrowUp size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
