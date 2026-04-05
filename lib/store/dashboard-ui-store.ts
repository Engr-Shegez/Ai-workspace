import { create } from "zustand";

import type { Message } from "@/lib/store/chat-store";

type DashboardView = "chat" | "notes" | "explore";

type SpaceOption = {
  id: string;
  name: string;
  description: string;
};

type ThreadPreview = {
  id: string;
  title: string;
  summary: string;
  messages: Message[];
};

type DashboardNotice = {
  id: string;
  title: string;
  detail: string;
  time: string;
};

type DashboardUiState = {
  activeView: DashboardView;
  activeThreadTitle: string;
  currentSpaceId: string;
  sidebarOpen: boolean;
  commandOpen: boolean;
  updatesOpen: boolean;
  attachmentName: string | null;
  setActiveView: (view: DashboardView) => void;
  setActiveThreadTitle: (title: string) => void;
  setCurrentSpace: (spaceId: string) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setCommandOpen: (open: boolean) => void;
  setUpdatesOpen: (open: boolean) => void;
  setAttachmentName: (name: string | null) => void;
};

export const spaceOptions: SpaceOption[] = [
  {
    id: "product-planning",
    name: "Product planning",
    description: "Roadmaps, launch reviews, and execution notes.",
  },
  {
    id: "customer-ops",
    name: "Customer ops",
    description: "Support handoffs, incident reviews, and playbooks.",
  },
  {
    id: "growth-team",
    name: "Growth team",
    description: "Campaign briefs, experiments, and messaging updates.",
  },
];

export const threadPreviews: ThreadPreview[] = [
  {
    id: "launch-review",
    title: "Q2 launch review",
    summary: "Positioning revisions, rollout risks, and owner alignment.",
    messages: [
      {
        role: "user",
        content:
          "Summarize the launch narrative changes we agreed to for the Q2 review.",
      },
      {
        role: "assistant",
        content:
          "The revised narrative emphasizes clarity and speed over novelty, trims feature sprawl from the hero, and gives support ownership a clearer rollout sequence.",
      },
    ],
  },
  {
    id: "support-handoff",
    title: "Support handoff notes",
    summary: "Training notes, FAQs, and launch readiness checklist.",
    messages: [
      {
        role: "user",
        content:
          "Create a support handoff summary from the latest rollout notes.",
      },
      {
        role: "assistant",
        content:
          "The handoff should include training dates, the new FAQ owner, escalation expectations during launch week, and a checklist for updating macros before release day.",
      },
    ],
  },
  {
    id: "pricing-revisions",
    title: "Pricing page revisions",
    summary: "Homepage copy decisions and pricing FAQ follow-ups.",
    messages: [
      {
        role: "user",
        content:
          "What changed in the pricing page revision thread after review?",
      },
      {
        role: "assistant",
        content:
          "We tightened plan descriptions, elevated the Team tier as the primary path, and added clearer language around onboarding support for larger accounts.",
      },
    ],
  },
];

export const explorePrompts = [
  "Turn rough meeting notes into a polished launch brief.",
  "Draft a stakeholder update with open risks and next steps.",
  "Rewrite support guidance so it is easier to scan during rollout.",
];

export const dashboardNotices: DashboardNotice[] = [
  {
    id: "notice-1",
    title: "Launch thread approved",
    detail: "Two stakeholders signed off on the final narrative review.",
    time: "5 min ago",
  },
  {
    id: "notice-2",
    title: "Support notes updated",
    detail: "The rollout checklist now includes training dates and FAQ links.",
    time: "18 min ago",
  },
  {
    id: "notice-3",
    title: "Workspace tip added",
    detail: "A new prompt starter was saved to the Product planning space.",
    time: "1 hr ago",
  },
];

export const useDashboardUiStore = create<DashboardUiState>((set) => ({
  activeView: "chat",
  activeThreadTitle: "New thread",
  currentSpaceId: spaceOptions[0].id,
  sidebarOpen: false,
  commandOpen: false,
  updatesOpen: false,
  attachmentName: null,
  setActiveView: (view) => set({ activeView: view }),
  setActiveThreadTitle: (title) => set({ activeThreadTitle: title }),
  setCurrentSpace: (spaceId) => set({ currentSpaceId: spaceId }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setCommandOpen: (open) => set({ commandOpen: open }),
  setUpdatesOpen: (open) => set({ updatesOpen: open }),
  setAttachmentName: (name) => set({ attachmentName: name }),
}));

export type { DashboardNotice, DashboardView, SpaceOption, ThreadPreview };
