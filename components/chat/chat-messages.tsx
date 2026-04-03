"use client";

import { useChatStore } from "@/lib/store/chat-store";

export function ChatMessages() {
  const { messages } = useChatStore();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {messages.map((msg, i) => (
        <div key={i} className="space-y-2">
          {/* Label */}
          <div className="text-sm ">{msg.role === "user" ? "You" : "AI"}</div>

          {/* Content block */}
          <div className="rounded-xl border border-zinc-800 p-4 text-xl leading-relaxed">
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
}
