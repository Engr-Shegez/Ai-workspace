import type { LucideIcon } from "lucide-react";
import {
  BotMessageSquare,
  Command,
  FileStack,
  FolderKanban,
  Gauge,
  ShieldCheck,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  highlight?: boolean;
  ctaLabel: string;
  href: string;
  features: string[];
};

export const navItems: NavItem[] = [
  { href: "/#product", label: "Product" },
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The whole team works from one calm surface now. No more context disappearing between chat, docs, and handoff notes.",
    name: "Maya R.",
    role: "Head of Product",
  },
  {
    quote:
      "It feels more like a polished operating system than another dashboard. We open it first and stay in it longer.",
    name: "Daniel T.",
    role: "Operations Lead",
  },
  {
    quote:
      "The interface keeps discussions readable and decisions traceable, which is exactly what our support and success teams needed.",
    name: "Sofia K.",
    role: "Customer Success Director",
  },
];

export const features: Feature[] = [
  {
    icon: FolderKanban,
    title: "Focused workspaces",
    description:
      "Organize work by team, initiative, or client without losing the thread between ongoing conversations and outputs.",
  },
  {
    icon: Command,
    title: "Fast command flow",
    description:
      "Jump between projects, prompts, and saved views with a keyboard-first interface built for daily use.",
  },
  {
    icon: FileStack,
    title: "Reusable briefs",
    description:
      "Turn repeated asks into clean templates so teams spend less time re-explaining and more time shipping.",
  },
  {
    icon: BotMessageSquare,
    title: "Shared context",
    description:
      "Keep conversations, references, and decisions in one timeline that everyone can understand at a glance.",
  },
  {
    icon: ShieldCheck,
    title: "Permission-aware access",
    description:
      "Invite collaborators with the right level of visibility while sensitive work stays scoped to the people who need it.",
  },
  {
    icon: Gauge,
    title: "Less operational drag",
    description:
      "From meeting prep to handoffs, the product is designed to remove friction from the work around the work.",
  },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Capture the brief",
    description:
      "Drop in requests, notes, and references from wherever work starts.",
  },
  {
    number: "02",
    title: "Shape the output",
    description:
      "Use prompts, drafts, and shared context to turn raw inputs into something useful.",
  },
  {
    number: "03",
    title: "Review together",
    description:
      "Comment, refine, and make decisions without splitting the conversation across tools.",
  },
  {
    number: "04",
    title: "Ship with confidence",
    description:
      "Publish the final version, hand it off, or move straight into the next task with the full history intact.",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$0",
    description: "For individuals testing a more focused way to work.",
    ctaLabel: "Start free",
    href: "/sign-up",
    features: [
      "1 workspace",
      "Unlimited personal drafts",
      "Basic prompt templates",
      "Email support",
    ],
  },
  {
    name: "Team",
    price: "$24",
    description: "For collaborative teams replacing scattered notes and chat.",
    highlight: true,
    ctaLabel: "Get started",
    href: "/sign-up",
    features: [
      "Unlimited shared workspaces",
      "Role-based access",
      "Shared templates and history",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For larger organizations that need governance and onboarding support.",
    ctaLabel: "Talk to sales",
    href: "/docs",
    features: [
      "Advanced admin controls",
      "Security review support",
      "Custom onboarding",
      "Usage reporting",
    ],
  },
];
