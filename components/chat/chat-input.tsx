"use client";

import { useState } from "react";
import { useChatStore } from "@/lib/store/chat-store";

export function ChatInput() {
  const [input, setInput] = useState("");
  const { addMessage } = useChatStore();

  const handleSend = async () => {
    if (!input.trim()) return;

    addMessage({ role: "user", content: input });

    setInput("");
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 p-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 resize-none bg-transparent outline-none text-sm"
          rows={1}
        />

        <button
          onClick={handleSend}
          className="rounded-lg bg-amber-500 px-4 py-2 text-black hover:bg-amber-400"
        >
          Send
        </button>
      </div>
    </div>
  );
}
