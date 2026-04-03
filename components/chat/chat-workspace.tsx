import React from "react";
import { ChatMessages } from "./chat-messages";
import { ChatInput } from "./chat-input";

const ChatWorkspace = () => {
  return (
    <div className="flex h-full flex-col">
      {/* messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <ChatMessages />
      </div>

      {/* input */}
      <div className="border-t b p-4">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatWorkspace;
