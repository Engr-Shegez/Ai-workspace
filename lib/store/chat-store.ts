import { create } from "zustand";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatStore = {
  messages: Message[];
  draft: string;
  isStreaming: boolean;
  addMessage: (msg: Message) => void;
  updateLastMessage: (content: string) => void;
  setMessages: (msgs: Message[]) => void;
  setDraft: (draft: string) => void;
  setIsStreaming: (isStreaming: boolean) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  draft: "",
  isStreaming: false,

  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
    })),

  updateLastMessage: (content) =>
    set((state) => {
      if (state.messages.length === 0) {
        return state;
      }

      return {
        messages: state.messages.map((message, index) =>
          index === state.messages.length - 1
            ? { ...message, content }
            : message,
        ),
      };
    }),

  setMessages: (msgs) => set({ messages: msgs }),

  setDraft: (draft) => set({ draft }),

  setIsStreaming: (isStreaming) => set({ isStreaming }),
}));

export type { Message };
