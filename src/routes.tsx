import { Routes, Route } from "react-router-dom";

import { Home } from "@/pages/public/Home";
import { About } from "@/pages/public/About";
import { Projects } from "@/pages/public/Projects";
import { Team } from "@/pages/public/Team";
import { Sponsors } from "@/pages/public/Sponsors";
import { Gallery } from "@/pages/public/Gallery";
import { Contact } from "@/pages/public/Contact";

import { NotFound } from "@/pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/team" element={<Team />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
