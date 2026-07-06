import type { OrganizationEntry } from "../types/portfolio";
import formaciImg from "../assets/organizations/Formaci.webp";
import baqiStaffImg from "../assets/organizations/BaqiStaff.webp";
import mokakuImg from "../assets/organizations/Mokaku.webp";

/**
 * Organizations and volunteer experience, newest first.
 */
export const organizations: OrganizationEntry[] = [
  {
    role: "Communication & Information Staff",
    organization: "FORMACI UPI",
    date: "February 2026 – Present",
    type: "Organization",
    description: [
      "Managed social media content",
      "Designed promotional posters",
      "Created visual communication materials",
    ],
    image: formaciImg,
  },
  {
    role: "Secretariat Staff",
    organization: "UKM BAQI",
    date: "February 2026 – Present",
    type: "Organization",
    description: [
      "Managed organization assets",
      "Handled inventory",
      "Supported administrative operations",
      "Maintained equipment records",
    ],
    image: baqiStaffImg,
  },
  {
    role: "Logistics Staff",
    organization: "MOKAKU UPI 2025",
    date: "July 2025 – August 2025",
    type: "Volunteer",
    description: [
      "Prepared logistics",
      "Supported event operations",
      "Distributed equipment",
      "Collaborated during university orientation",
    ],
    image: mokakuImg,
  },
];
