import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Link } from "react-router-dom";
import { partnerTypes, whySponsor } from "@/data/team";

export function Sponsors() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Why Sponsor Us" title="Partner with Team MACH" align="center" />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whySponsor.map((item) => (
            <div key={item.title} className="panel p-7">
              <p className="text-sm font-medium text-ink mb-2">{item.title}</p>
              <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-graphite-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading eyebrow="Types of Partners" title="Ways to collaborate" align="center" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypes.map((p) => (
              <div key={p.name} className="panel p-7">
                <p className="text-sm font-medium text-ink mb-2">{p.name}</p>
                <p className="text-xs text-ink-faint leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button variant="primary">Start a Conversation</Button>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
