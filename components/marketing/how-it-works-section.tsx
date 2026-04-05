import { steps } from "@/components/marketing/data";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";

export function HowItWorksSection() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="A straightforward path from input to execution."
            description="The product does a few things very well: collect context, shape outputs, and keep teams aligned while work moves."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.06}
              className="rounded-[2rem] border border-black/6 bg-white/70 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.05)] dark:border-white/8 dark:bg-white/[0.035] dark:shadow-none"
            >
              <p className="text-sm font-medium tracking-[0.2em] text-emerald-700 dark:text-emerald-200/90">
                {step.number}
              </p>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
