import { features } from "@/components/marketing/data";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title="Everything important stays in view."
            description="The product is intentionally compact: fewer places to look, stronger defaults, and a cleaner path from prompt to outcome."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal
                key={feature.title}
                delay={index * 0.05}
                className="group rounded-[2rem] border border-black/6 bg-white/70 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:border-black/10 hover:bg-white dark:border-white/8 dark:bg-white/[0.035] dark:shadow-none dark:hover:border-white/14 dark:hover:bg-white/5"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl border border-black/8 bg-white text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-emerald-200">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
