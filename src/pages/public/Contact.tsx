import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { contact, institution } from "@/data/team";

export function Contact() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="For sponsorship, collaboration, or press inquiries, reach Team MACH directly."
          />
          <div className="mt-10 space-y-4 text-sm">
            <div className="panel p-5">
              <p className="eyebrow mb-1">Institution</p>
              <p className="text-ink">{institution.name}</p>
              <p className="text-ink-muted">{institution.location}</p>
            </div>
            <div className="panel p-5">
              <p className="eyebrow mb-1">Phone</p>
              {contact.phones.map((p) => (
                <p key={p} className="text-ink">{p}</p>
              ))}
            </div>
            <div className="panel p-5">
              <p className="eyebrow mb-1">Email</p>
              <p className="text-ink">{contact.email}</p>
            </div>
            <div className="panel p-5">
              <p className="eyebrow mb-1">Instagram</p>
              <p className="text-ink">{contact.instagram}</p>
            </div>
          </div>
        </div>

        <div className="panel p-8 h-fit">
  <p className="eyebrow mb-4">Let's Build Together</p>

  <h3 className="text-2xl font-display font-semibold text-ink mb-4">
    Interested in collaborating with Team MACH?
  </h3>

  <p className="text-ink-muted leading-relaxed mb-8">
    Whether you're a sponsor, industry partner, researcher, or fellow
    engineering team, we'd love to hear from you. Reach out using the
    contact details provided or connect with us on our social platforms.
  </p>

  <div className="space-y-5">

    
  </div>

  <Button
    variant="primary"
    className="w-full mt-8"
    onClick={() => window.open(`mailto:${contact.email}`)}
  >
    Contact via Email
  </Button>
</div>
      </section>
    </PublicLayout>
  );
}
