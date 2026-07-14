import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
      <div>
        <p className="eyebrow mb-2">{eyebrow}</p>
        <h1 className="font-display text-2xl md:text-3xl font-semibold text-ink">{title}</h1>
        {description && <p className="mt-2 text-sm text-ink-muted max-w-2xl">{description}</p>}
      </div>
      {action}
    </div>
  );
}
