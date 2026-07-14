import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Gallery() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Gallery" title="Build & mission photography" align="center" />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square panel grid-bg flex items-center justify-center text-ink-faint text-xs font-mono uppercase tracking-eyebrow"
            >
              Image {i + 1}
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
