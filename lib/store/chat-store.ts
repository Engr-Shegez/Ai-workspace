import { create } from "zustand";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatStore = {
  messages: Message[];
  addMessage: (msg: Message) => void;
  updateLastMessage: (content: string) => void;
  setMessages: (msgs: Message[]) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],

  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
    })),

  updateLastMessage: (content) =>
    set((state) => {
      const updated = [...state.messages];
      updated[updated.length - 1].content = content;
      return { messages: updated };
    }),

  setMessages: (msgs) => set({ messages: msgs }),
}));
