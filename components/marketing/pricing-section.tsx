import Link from "next/link";

import { pricingTiers } from "@/components/marketing/data";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple plans for individual focus or team-wide adoption."
            description="Start free, move into shared workspaces when the team is ready, and scale up governance only when it matters."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal
              key={tier.name}
              delay={index * 0.05}
              className={`rounded-[2rem] border p-6 ${
                tier.highlight
                  ? "border-emerald-600/20 bg-emerald-500/[0.08] shadow-[0_24px_60px_rgba(16,185,129,0.08)] dark:border-emerald-200/25 dark:bg-emerald-200/8"
                  : "border-black/6 bg-white/70 shadow-[0_18px_40px_rgba(0,0,0,0.05)] dark:border-white/8 dark:bg-white/[0.035] dark:shadow-none"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
                    {tier.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                    {tier.description}
                  </p>
                </div>
                {tier.highlight ? (
                  <span className="rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-700 dark:border-emerald-200/20 dark:bg-emerald-200/10 dark:text-emerald-100/90">
                    Popular
                  </span>
                ) : null}
              </div>

              <div className="mt-8 border-t border-black/6 pt-8 dark:border-white/8">
                <p className="text-4xl font-semibold tracking-[-0.06em] text-zinc-950 dark:text-white">
                  {tier.price}
                  {tier.price.startsWith("$") ? (
                    <span className="ml-1 text-base font-normal text-zinc-500">
                      /seat
                    </span>
                  ) : null}
                </p>

                <Button
                  asChild
                  className={`mt-6 h-11 w-full rounded-full ${
                    tier.highlight
                      ? "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                      : "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white/8 dark:text-white dark:hover:bg-white/12"
                  }`}
                >
                  <Link href={tier.href}>{tier.ctaLabel}</Link>
                </Button>

                <ul className="mt-8 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="size-1.5 rounded-full bg-emerald-600 dark:bg-emerald-200" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
