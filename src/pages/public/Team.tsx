import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeading } from "@/components/common/SectionHeading";
import { teamMembers } from "@/data/team";

export function Team() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Team" title="Mach's Squad" align="center" />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((m) => (
            <div key={m.id} className="panel p-6 text-center">
              <img
  src={m.image}
  alt={m.name}
  className="mx-auto h-32 w-32 rounded-full object-cover border-2 border-line mb-5"
  loading="lazy"
/>
              <p className="text-sm font-medium text-ink">{m.name}</p>
              <p className="text-xs text-ink-muted mt-1">{m.title}</p>
            </div>
          ))}
        </div>

      </section>
    </PublicLayout>
  );
}
