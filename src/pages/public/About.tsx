import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeading } from "@/components/common/SectionHeading";
import { competition, institution } from "@/data/team";

export function About() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading eyebrow="About Team MACH" title="Dream. Design. Dominate." />
        <div className="mt-10 space-y-6 text-ink-muted leading-relaxed max-w-3xl">
          <p>
            Team MACH is a drone design and autonomous systems team from {institution.name}. The team consists of 10
            passionate and multidisciplinary students across various years, led by Captain Krishnendhu A and Vice
            Captain Adith Manoj R, under the guidance of Faculty Advisor Dr. Georgekutty S Mangalathu.
          </p>
          <p>
            The team focuses on the design and development of advanced unmanned aerial systems and autonomous
            technologies. As a newly formed team built with experienced and innovation-driven members, Team MACH aims
            to push the boundaries of aerial robotics, automation, and intelligent system design.
          </p>
          <p>
            Our current objective is to compete in {competition.name} by developing a high-performance autonomous
            drone capable of executing simple and complex mission-based operations.
          </p>
          <p>
            Driven by creativity, engineering excellence, and teamwork, MACH strives to represent {institution.name}{" "}
            in national and international challenges while contributing to the future of UAVs and autonomous aerial
            technology.
          </p>
        </div>
      </section>
    </PublicLayout>
  );
}
