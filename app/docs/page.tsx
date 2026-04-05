import Link from "next/link";
import type { Metadata } from "next";

import { MarketingFooter } from "@/components/marketing/footer";
import { MarketingNavbar } from "@/components/marketing/navbar";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

const docCards = [
  {
    title: "Quickstart",
    description:
      "Create your first workspace, invite teammates, and structure your first brief in a few minutes.",
  },
  {
    title: "Workspace structure",
    description:
      "Learn how teams use spaces, threads, and templates to keep work tidy as usage grows.",
  },
  {
    title: "Security and access",
    description:
      "Review permissions, workspace privacy, and how access controls map to real team workflows.",
  },
];

export const metadata: Metadata = {
  title: "Docs",
  description: "Guides for setting up and scaling Threadline.",
};

export default function DocsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f4ef] text-zinc-900 dark:bg-[#090909] dark:text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.68),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_30%)]" />

      <div className="relative">
        <MarketingNavbar />

        <section className="px-6 pb-20 pt-20 sm:pt-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Documentation"
                title="Guides that help teams get productive quickly."
                description="A lightweight documentation hub for onboarding, structure, and security. The full docs experience can grow from here without changing the design language."
              />
            </Reveal>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-11 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                <Link href="/sign-up">Create workspace</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-11 rounded-full border border-black/8 bg-white/60 px-6 text-zinc-900 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
              >
                <Link href="/#product">See product</Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {docCards.map((card, index) => (
                <Reveal
                  key={card.title}
                  delay={index * 0.06}
                  className="rounded-[2rem] border border-black/6 bg-white/70 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.05)] dark:border-white/8 dark:bg-white/[0.035] dark:shadow-none"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Guide
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                    {card.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </main>
  );
}
