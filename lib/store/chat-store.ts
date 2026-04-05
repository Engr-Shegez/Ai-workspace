import { create } from "zustand";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatStore = {
  messages: Message[];
  draft: string;
  addMessage: (msg: Message) => void;
  updateLastMessage: (content: string) => void;
  setMessages: (msgs: Message[]) => void;
  setDraft: (draft: string) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  draft: "",

  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
    })),

  updateLastMessage: (content) =>
    set((state) => {
      if (state.messages.length === 0) {
        return state;
      }

      const updated = [...state.messages];
      updated[updated.length - 1].content = content;
      return { messages: updated };
    }),

  setMessages: (msgs) => set({ messages: msgs }),

  setDraft: (draft) => set({ draft }),
}));

export type { Message };
