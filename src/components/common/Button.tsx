import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "action" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  // Blue → violet gradient — primary navigation / brand actions
  primary: "bg-violet-gradient text-white shadow-glow-sm hover:brightness-110",
  // Copper orange — the one warm accent reserved for things the user *does*
  action: "bg-copper-500 text-white hover:bg-copper-600",
  outline: "border border-line text-ink hover:border-violet-400 hover:text-violet-300",
  ghost: "text-ink-muted hover:text-ink",
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
