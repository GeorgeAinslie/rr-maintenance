import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-cream/60">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-medium tracking-tight text-cream sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-cream/75 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
