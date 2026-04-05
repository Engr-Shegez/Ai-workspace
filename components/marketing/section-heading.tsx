import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-4",
        align === "center" && "mx-auto text-center"
      )}
    >
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-200/80">
        {eyebrow}
      </p>
      <div className="space-y-3">
        <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
