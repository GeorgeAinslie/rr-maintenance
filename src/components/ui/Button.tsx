import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const variants = {
  primary:
    "border border-white/25 bg-white/12 text-cream shadow-lg shadow-black/20 hover:-translate-y-0.5 hover:bg-white/18 hover:border-white/35",
  ghost:
    "border border-cream/20 bg-transparent text-cream hover:bg-white/6 hover:border-cream/30",
  outline:
    "border border-cream/25 bg-transparent text-cream hover:bg-white/8",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm font-semibold",
  lg: "px-6 py-3.5 text-base font-semibold",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full tracking-wide transition-all duration-200 active:translate-y-0",
    variants[variant],
    sizes[size],
    disabled && "pointer-events-none opacity-60",
    className,
  );

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
