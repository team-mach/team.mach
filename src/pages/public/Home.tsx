import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { GlowBackdrop } from "@/components/common/GlowBackdrop";
import { HeroVisual } from "@/components/common/HeroVisual";
import { Logo } from "@/components/common/Logo";
import { competition, partnerTypes } from "@/data/team";

// TODO: replace with the real destination for the "VORTEX" credit link.
const VORTEX_URL = "https://vortex-green.vercel.app";

const STATS = [
  { value: "10", label: "Multidisciplinary Engineers" },
  { value: "SAEISS ADDC 5th Edition", label: "Target Competition" },
  { value: "5+", label: "Departments" },
];

export function Home() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <GlowBackdrop />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-20 md:pb-32">
          <Logo className="h-[240px] w-auto mb-[-8px] md:mb-0" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
              <p className="font-display text-lg md:text-xl font-semibold tracking-[0.2em] text-ink-muted">              LIFTED BY{" "}
              <a
                href={VORTEX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-aerospace-gradient bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                VORTEX
              </a>
            </p>

            <h1 className="mt-1 font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05]">
              Engineering{" "}
              <span className="bg-aerospace-gradient bg-clip-text text-transparent">Autonomous Flight</span> Systems
            </h1>
            <p className="mt-6 max-w-xl text-ink-muted text-base sm:text-lg leading-relaxed">
              Team MACH designs and builds unmanned aerial systems and autonomous technologies — driven by creativity, engineering excellence, and teamwork.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/sponsors">
                <Button variant="primary">Partner With Us</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline">View Our Program</Button>
              </Link>
            </div>
          </div>

          <HeroVisual />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <SectionHeading
          eyebrow="Mission"
          title="Bridging Academia and Industry"
          description="To bridge the gap between academic learning and industry requirements through the development
of advanced UAV systems and autonomous technologies"
        />
        <div className="panel-glow p-8">
          <p className="eyebrow mb-3">Current Objective</p>
          <p className="font-display text-2xl text-ink mb-3">{competition.name}</p>
          <p className="text-sm text-ink-muted leading-relaxed">{competition.objective}</p>
        </div>
      </section>

      {/* Featured Program */}
      <section className="relative border-y border-line bg-graphite-950 overflow-hidden">
        <GlowBackdrop />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <SectionHeading eyebrow="Featured Program" title="Autonomous UAV Ecosystem" align="center" />
          <div className="mt-12 panel-glow overflow-hidden">
            <div className="p-10 md:p-16 text-center">
              <p className="text-ink-muted max-w-2xl mx-auto leading-relaxed">
                An intelligent autonomous UAV ecosystem designed to bridge autonomous flight with cloud-based fleet management, real-time health monitoring, predictive maintenance, and lifecycle analytics for next-generation commercial drone operations.
              </p>
             <div className="mt-4 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
  {["Aerodynamics", "Structures", "Avionics", "Software"].map((dept) => (
    <div
      key={dept}
      className="rounded-xl border border-line bg-titanium-600/40 px-4 py-3 w-fit"
    >
      <p className="text-xs font-mono uppercase tracking-eyebrow text-violet-300 whitespace-nowrap">
        {dept}
      </p>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="panel p-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-semibold text-ink">{stat.value}</p>
              <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote bar */}
      <section className="border-y border-line bg-titanium-700/40">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="font-display text-2xl md:text-3xl text-ink leading-snug">
            "Driven by creativity, engineering excellence, and teamwork —
            <span className="bg-aerospace-gradient bg-clip-text text-transparent"> built to compete.</span>"
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Aerodynamics", "Structures", "Avionics", "Mission Software", "Documentation"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-4 py-1.5 text-xs font-mono uppercase tracking-eyebrow text-ink-faint"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="relative border-y border-line bg-graphite-950 overflow-hidden">
        <GlowBackdrop />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Sponsors"
            title="Become a founding partner"
            description="Team MACH is currently building its sponsor network. Partner categories span financial sponsorship to manufacturing, technology, and media support."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partnerTypes.map((p) => (
              <div key={p.name} className="panel p-6">
                <p className="text-sm font-medium text-ink mb-2">{p.name}</p>
                <p className="text-xs text-ink-faint leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/sponsors">
              <Button variant="primary">Become a Partner</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Achievements */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Latest Achievements" title="Milestones" />
        <div className="mt-10 panel p-10 text-center grid-bg">
          <p className="text-ink-muted max-w-lg mx-auto">
            Team MACH is early in its competition journey — achievements will be published here as milestones are
            reached on the road to {competition.name}.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 overflow-hidden">
        <div className="panel-glow p-12 md:p-16 text-center relative overflow-hidden">
          <GlowBackdrop />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">Join the mission</h2>
            <p className="mt-4 text-ink-muted max-w-xl mx-auto">
              Whether you're a sponsor, collaborator, or future teammate — reach out and be part of what Team MACH
              builds next.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="primary">Contact Us</Button>
              </Link>
              <Link to="/team">
                <Button variant="outline">Meet the Team</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
