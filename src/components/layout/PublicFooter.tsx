import { Link } from "react-router-dom";
import { Logo } from "@/components/common/Logo";
import { contact, institution } from "@/data/team";

const SITEMAP = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function PublicFooter() {
  return (
    <footer className="border-t border-line bg-graphite-950">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Logo className="h-9 w-auto mb-4" />
          <p className="text-ink-muted max-w-sm leading-relaxed text-sm">
            Team MACH is a drone design and autonomous systems team from {institution.name}, engineering
            high-performance autonomous UAVs for national and international competition.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Sitemap</p>
          <ul className="space-y-3">
            {SITEMAP.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-ink-muted hover:text-ink transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-ink-muted">
            <li>{institution.location}</li>
            {contact.phones.map((phone) => (
              <li key={phone}>{phone}</li>
            ))}
            <li>{contact.email}</li>
            <li>{contact.instagram}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ink-faint">
          <p>© {new Date().getFullYear()} Team MACH — {institution.name}.</p>
          <p className="font-mono uppercase tracking-eyebrow">Dream · Design · Dominate</p>
        </div>
      </div>
    </footer>
  );
}
