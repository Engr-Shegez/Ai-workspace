import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";

const tasks = [
  "Draft launch summary",
  "Tighten support handoff notes",
  "Review pricing FAQ",
];

const activity = [
  "Morgan updated the launch brief",
  "Two stakeholders approved the final copy",
  "Support training notes were attached",
];

export function ProductPreviewSection() {
  return (
    <section id="product" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Product Preview"
            title="A workspace that stays legible even when the work gets messy."
            description="Instead of piling features on top of each other, the interface keeps the important thread front and center."
          />
        </Reveal>

        <Reveal
          delay={0.08}
          className="mt-12 overflow-hidden rounded-[2rem] border border-black/6 bg-white/70 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/[0.035] dark:shadow-[0_30px_100px_rgba(0,0,0,0.28)]"
        >
          <div className="grid gap-3 lg:grid-cols-[240px_1fr]">
            <aside className="rounded-[1.5rem] border border-white/8 bg-[#10100d] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                Workspace
              </p>
              <div className="mt-5 space-y-2">
                {["All threads", "Roadmap review", "Support ops", "Team briefs"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`rounded-2xl px-4 py-3 text-sm ${
                        index === 1
                          ? "border border-emerald-200/20 bg-emerald-200/10 text-white"
                          : "border border-white/8 bg-white/5 text-zinc-400"
                      }`}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Current focus
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Align the launch brief, rollout tasks, and stakeholder notes
                  before Friday review.
                </p>
              </div>
            </aside>

            <div className="grid gap-3 xl:grid-cols-[1.45fr_0.9fr]">
              <div className="rounded-[1.5rem] border border-white/8 bg-[#0d0d0b] p-6">
                <div className="flex flex-col gap-6 border-b border-white/8 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                      Launch thread
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                      Final narrative review
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                      This thread collects the positioning line, key objections,
                      rollout owners, and support-facing notes in one place.
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">
                    Ready for approval
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.04] p-5">
                    <p className="text-sm font-medium text-white">Brief summary</p>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      Position the product as the calm layer between raw input and
                      team execution. Emphasize clarity, speed, and decision
                      quality rather than novelty.
                    </p>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.04] p-5">
                      <p className="text-sm font-medium text-white">
                        Decisions captured
                      </p>
                      <ul className="mt-3 space-y-3 text-sm text-zinc-400">
                        <li>Homepage copy approved</li>
                        <li>Support docs bundled into rollout</li>
                        <li>Owner assigned for pricing FAQ</li>
                      </ul>
                    </div>
                    <div className="rounded-[1.25rem] border border-white/8 bg-emerald-200/8 p-5">
                      <p className="text-sm font-medium text-white">
                        Suggested next step
                      </p>
                      <p className="mt-3 text-sm leading-7 text-zinc-300">
                        Publish the final summary and share the checklist with
                        support, product marketing, and operations in a single
                        handoff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-[1.5rem] border border-white/8 bg-[#0d0d0b] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Checklist
                  </p>
                  <div className="mt-4 space-y-3">
                    {tasks.map((task, index) => (
                      <div
                        key={task}
                        className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm"
                      >
                        <span className="text-zinc-300">{task}</span>
                        <span
                          className={`size-2.5 rounded-full ${
                            index === 0 ? "bg-emerald-300" : "bg-white/20"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/8 bg-[#0d0d0b] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Recent activity
                  </p>
                  <div className="mt-4 space-y-4">
                    {activity.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-zinc-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
