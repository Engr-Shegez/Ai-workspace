import { testimonials } from "@/components/marketing/data";
import { Reveal } from "@/components/marketing/reveal";

export function SocialProofSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 border-y border-black/6 py-8 dark:border-white/8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
              Social proof
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white sm:text-3xl">
              Teams adopt it like a workspace, not a novelty.
            </h2>
          </div>
          <p className="max-w-xl text-md leading-7 text-zinc-600 dark:text-zinc-400">
            Designed to feel steady and useful on the hundredth visit, not just
            the first demo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.08}
              className="rounded-[2rem] border border-black/6 bg-white/70 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.08)] dark:border-white/8 dark:bg-white/[0.035] dark:shadow-[0_18px_48px_rgba(0,0,0,0.16)]"
            >
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="text-sm font-medium text-zinc-950 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-md text-zinc-500">{testimonial.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
