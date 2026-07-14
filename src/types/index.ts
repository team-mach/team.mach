/**
 * Domain types for the MACH public website.
 */

export type UserRole =
  | "captain"
  | "vice_captain"
  | "operations_manager"
  | "faculty_advisor"
  | "member";

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: UserRole;
  department: string;
  image: string;
  skills: string[];
}
