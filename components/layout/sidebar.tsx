import { MessageSquare, Plus } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-66 border-r dark:border-zinc-800 dark:bg-zinc-900 bg-zinc-50 border-zinc-200 p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold">AVEN</h1>
        <button className="rounded-lg bg-amber-500 p-2 text-black hover:bg-amber-400">
          <Plus size={16} />
        </button>
      </div>

      <nav className="space-y-2">
        <button className="flex w-full items-center text-lg gap-2 rounded-lg px-3 py-2 dark:hover:bg-zinc-800 hover:bg-zinc-200">
          <MessageSquare size={16} />
          Chat
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
