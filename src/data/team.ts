import krishnendhu from "../assets/team/krishnendhu.jpeg";
import adith from "../assets/team/adith.jpg";
import nebin from "../assets/team/nebin.jpg";
import aravind from "../assets/team/aravind.jpeg";
import sandeep from "../assets/team/sandeep.jpg";
import layajith from "../assets/team/layajith.jpg";
import sayooj from "../assets/team/sayooj.jpg";
import haridev from "../assets/team/haridev.jpg";
import rizwan from "../assets/team/rizwan.jpg";
import swathy from "../assets/team/swathy.jpeg";
import advisor from "../assets/team/advisor.jpg";
import type { TeamMember } from "@/types";

/**
 * Sourced directly from the Team MACH Technical Brief / Partnership
 * Brochure (2026). Do not invent members or roles not present there.
 */
export const teamMembers: TeamMember[] = [
  {
    id: "krishnendhu",
    name: "Krishnendhu A",
    title: "Captain",
    role: "captain",
    department: "Leadership",
    image: krishnendhu,
    skills: [],
  },
  {
    id: "adith",
    name: "Adith Manoj R",
    title: "Vice Captain",
    role: "vice_captain",
    department: "Leadership",
    image: adith,
    skills: [],
  },
  {
    id: "nebin",
    name: "Nebin",
    title: "Manager",
    role: "operations_manager",
    department: "Operations",
    image: nebin,
    skills: [],
  },
  {
    id: "aravind",
    name: "Aravind",
    title: "Aerodynamics Engineer",
    role: "member",
    department: "Aerodynamics",
    image: aravind,
    skills: [],
  },
  {
    id: "sandeep",
    name: "Sandeep",
    title: "Structural Engineer",
    role: "member",
    department: "Structures",
    image: sandeep,
    skills: [],
  },
  {
    id: "layajith",
    name: "Layajith",
    title: "Avionics Engineer",
    role: "member",
    department: "Avionics",
    image: layajith,
    skills: [],
  },
  {
    id: "sayooj",
    name: "Sayooj",
    title: "Mission Software Engineer",
    role: "member",
    department: "Mission Software",
    image: sayooj,
    skills: [],
  },
  {
    id: "haridev",
    name: "Haridev",
    title: "Avionics Engineer",
    role: "member",
    department: "Avionics",
    image: haridev,
    skills: [],
  },
  {
    id: "rizwan",
    name: "Rizwan",
    title: "Mission Software Engineer",
    role: "member",
    department: "Mission Software",
    image: rizwan,
    skills: [],
  },
  {
    id: "swathy",
    name: "Swathy",
    title: "Documentation Lead",
    role: "member",
    department: "Documentation",
    image: swathy,
    skills: [],
  },
  {
    id: "advisor",
    name: "Dr. Georgekutty S Mangalathu",
    title: "Faculty Advisor",
    role: "member",
    department: "Leadership",
    image: advisor,
    skills: [],
  }
];

export const facultyAdvisor = {
  name: "Dr. Georgekutty S Mangalathu",
  title: "Faculty Advisor",
};

export const institution = {
  name: "Mar Athanasius College of Engineering",
  location: "Kothamangalam, Kerala, India",
};

export const contact = {
  phones: ["KRISHNENDHU A: +91 8848871895 ", "ADITH MANOJ R: +91 98469 33175"],
  email: "contact.team.mach@gmail.com",
  instagram: "INSTAGRAM: @mach.mace",
};

export const platform = {
  name: "Autonomous UAV Ecosystem",
  objective:
    "A fully integrated autonomous UAV platform combining intelligent flight control, AI-powered mission execution, cloud-based fleet management, and real-time data analytics for next-generation aerial operations.",
};

export const competition = {
  name: "SAEISS ADDC 26–27",
  objective:
    "Developing a high-performance autonomous drone capable of executing simple and complex mission-based operations.",
};

export const partnerTypes = [
  {
    name: "Sponsor",
    description:
      "Provides financial support to help Team MACH develop, manufacture, and compete with advanced drone systems — or sponsors flight controllers, sensors, communication systems, batteries, and other essential drone electronics.",
  },
  {
    name: "Mobility & Hospitality Partner",
    description:
      "Supports the transportation, accommodation and logistics requirements of the team during competitions, testing, and events.",
  },
  {
    name: "Manufacturing Partner",
    description:
      "Provides fabrication, machining, milling, and production support to transform our drone designs into high-performance prototypes.",
  },
  {
    name: "Technology Partner",
    description:
      "Offers technical expertise, electronic components, software solutions, or engineering support for our UAV projects.",
  },
  {
    name: "Media & Branding Partner",
    description: "Helps enhance Team MACH's outreach through social media, promotional campaigns, and branding support.",
  },
  {
    name: "Innovation Partner",
    description: "Collaborates with Team MACH in research, development, and testing of next-generation UAVs.",
  },
];

export const whySponsor = [
  {
    title: "CSR & Social Impact",
    description:
      "Supporting Team MACH aligns with corporate social responsibility goals by promoting innovation, technical education, and youth development.",
  },
  {
    title: "Brand Visibility & Recognition",
    description:
      "Your company's branding will be prominently featured on our drones, banners, posters, brochures, team apparel, and digital platforms.",
  },
  {
    title: "Social Media & Promotional Reach",
    description:
      "We actively showcase our sponsors through social media campaigns, project updates, promotional posts, and event highlights.",
  },
  {
    title: "National-Level Exposure",
    description:
      "Team MACH represents innovation and engineering excellence at competitions, exhibitions, and technical events.",
  },
];
