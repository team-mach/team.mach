# MACH OS

**Engineering Autonomous Flight Systems** — the digital workspace of Team MACH, an autonomous UAV engineering team at Mar Athanasius College of Engineering, Kothamangalam.

This repo contains two things in one app:

1. **Public website** (`/`, `/about`, `/projects`, `/team`, `/sponsors`, `/gallery`, `/contact`) — the enterprise-facing marketing site.
2. **MACH OS** (`/app/*`) — the internal operations platform members log into daily.

## Status

This is the **full scaffold pass** — every route, layout, and module is wired up and styled to the design system. Most internal modules (Tasks, Documents, Meetings, Announcements, Inventory, Finance, Notifications) currently render `ModulePlaceholder`, which documents the intended data fields for that module rather than showing empty UI. Mission Control, Members, and Sponsor Tracker have working sample UI. These get built out module-by-module next.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

To preview the internal app, click **Login to MACH OS** in the header and pick a demo role — auth is currently mocked in `src/context/AuthContext.tsx` so role-based navigation can be reviewed before Supabase is wired in.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS (design tokens in `tailwind.config.ts`)
- React Router v6

## Structure

```
src/
  components/
    common/       Logo, Button, Icon, SectionHeading, StatusBadge, PageHeader
    layout/       PublicHeader/Footer/Layout, DashboardSidebar/Topbar/Layout
    dashboard/    ModulePlaceholder (scaffold pattern for unbuilt modules)
  context/
    AuthContext.tsx   Mock auth — shape matches a future Supabase provider
  data/
    team.ts           All content sourced from the Team MACH brochure
  lib/
    roles.ts           Role → permission map (Captain/VC = admin, Ops Manager,
                        Faculty Advisor = read-only, Member = own work only)
  pages/
    public/            Home, About, Projects, Team, Sponsors, Gallery, Contact
    auth/               Login
    dashboard/          Mission Control, Tasks, Documents, Members, Meetings,
                         Announcements, Inventory, Finance, Sponsor Tracker,
                         Settings, Notifications
  routes.tsx            Single source of truth for all routes
```

## Design system

Defined in `tailwind.config.ts`:

| Token | Role |
|---|---|
| `graphite` | Primary background |
| `titanium` | Secondary background / surfaces |
| `aerospace` | Primary accent — branding & information |
| `copper` | Action accent — things the user *does* |
| `signal.green` / `signal.amber` / `signal.red` | Success / warning / danger |
| `ink` / `ink.muted` / `ink.faint` | Text hierarchy |

Fonts: **Space Grotesk** (display), **Inter** (body), **IBM Plex Mono** (data/eyebrow labels), loaded via Google Fonts in `index.html`.

## Roadmap (build order)

1. ~~Scaffold: routing, layouts, design system, all pages stubbed~~ ✅
2. Task Management — Kanban board (To Do / In Progress / Review / Completed)
3. Document Repository — folders, search, preview, versioning
4. Inventory + Finance — tables with real CRUD against mock data, then Supabase
5. Meetings + Announcements
6. Supabase integration: swap `AuthContext`, add tables per the field lists in each `ModulePlaceholder`, wire row-level security to `src/lib/roles.ts`
7. Public site polish pass: imagery, gallery uploads, animations

## Content source

All factual content (team roster, roles, competition target, contact details, sponsor categories) is pulled from the Team MACH Partnership Brochure (2026) in `src/data/team.ts`. Nothing on the public site is invented — sections without brochure data (achievements, gallery images, statistics) are shown as honest "coming soon" states rather than placeholder numbers.
