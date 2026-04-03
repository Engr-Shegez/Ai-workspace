"use client";

import { useState } from "react";
import { useChatStore } from "@/lib/store/chat-store";

export function ChatInput() {
  const [input, setInput] = useState("");
  const { messages, addMessage, updateLastMessage } = useChatStore();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };

    // Add user message
    addMessage(userMessage);

    // Add empty assistant message (placeholder)
    addMessage({ role: "assistant", content: "" });

    setInput("");

    // Call API
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

      // Update last message live
      updateLastMessage(aiText);
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center gap-2 rounded-xl border border-zinc-800 p-3">
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
