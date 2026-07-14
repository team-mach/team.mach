import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeading } from "@/components/common/SectionHeading";
import { competition, platform } from "@/data/team";

export function Projects() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Autonomous Mission UAV"
          description={competition.objective}
        />
        <div className="mt-5 flex flex-wrap gap-8 max-w-4xl mx-auto">
          {["Aerodynamics", "Structures", "Avionics", "Mission Software"].map((dept) => (
            <div key={dept} className="panel px-4 py-2.5">
              <p className="text-xs font-mono uppercase tracking-eyebrow text-violet-300 mb-1">{dept}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink-faint max-w-2xl">
          Target competition: {competition.name}. Full project documentation, CAD renders, and test data will be
          published here as the program progresses.
        </p>

          <div className="mt-20">
          </div>
          <SectionHeading
          title="Autonomous UAV Ecosystem"
          description={platform.objective}
        />
        <div className="mt-5 flex flex-wrap gap-4 max-w-4xl mx-auto">
          {["Flight Log", "Predictive Maintenance", "Fleet Managemnet", "Cloud Analytics"].map((dept) => (
            <div key={dept} className="panel px-4 py-2.5">
              <p className="text-xs font-mono uppercase tracking-eyebrow text-violet-300 mb-1">{dept}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink-faint max-w-2xl">
         Full project documentation, CAD renders, and test data will be
          published here as the program progresses.
        </p>
      </section>
    </PublicLayout>
  );
}
