type Tone = "neutral" | "info" | "success" | "warning" | "danger";

interface StatusBadgeProps {
  label: string;
  tone?: Tone;
}

const TONE_CLASSES: Record<Tone, string> = {
  neutral: "bg-titanium-600 text-ink-muted",
  info: "bg-aerospace-500/15 text-aerospace-300",
  success: "bg-signal-green/15 text-signal-green",
  warning: "bg-signal-amber/15 text-signal-amber",
  danger: "bg-signal-red/15 text-signal-red",
};

export function StatusBadge({ label, tone = "neutral" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-medium font-mono uppercase tracking-wide ${TONE_CLASSES[tone]}`}
    >
      {label}
    </span>
  );
}
