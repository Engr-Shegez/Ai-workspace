import Link from "next/link";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/#product" },
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Sign in", href: "/sign-in" },
      { label: "Get started", href: "/sign-up" },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="px-6 pb-10 pt-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/6 bg-white/70 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] dark:border-white/8 dark:bg-white/[0.03] dark:shadow-none">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-base font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
              Threadline
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              A premium workspace for teams that want clearer thinking, faster
              handoffs, and less operational noise.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                  {group.title}
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-black/6 pt-6 text-sm text-zinc-500 dark:border-white/8">
          (c) 2026 Threadline. Built for teams that prefer clarity over clutter.
        </div>
      </div>
    </footer>
  );
}
