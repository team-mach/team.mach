import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function PublicHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 px-4">
      <div
        className={`mx-auto max-w-6xl flex items-center justify-between gap-4 rounded-full border border-line px-5 py-2.5 transition-colors duration-200 ${
          scrolled ? "bg-titanium-700/80 backdrop-blur-md shadow-glow" : "bg-titanium-700/40 backdrop-blur-md"
        }`}
      >
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-violet-300" : "text-ink-muted hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button variant="primary" className="text-xs px-4 py-2">
              Contact Us
              <Icon name="arrowRight" className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden text-ink p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden mx-auto max-w-6xl mt-2 rounded-2xl border border-line bg-titanium-700/95 backdrop-blur-md px-6 py-5">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-ink-muted hover:text-ink"
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <Button variant="primary" className="w-full mt-2">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
