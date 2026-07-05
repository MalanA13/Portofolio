import type { SkillCategory } from "../types/portfolio";

/**
 * Technical skills grouped by category.
 * Icon names map to Lucide React components (see SkillCard).
 */
export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Code",
    technologies: ["JavaScript", "Go", "Python"],
  },
  {
    category: "Frontend",
    icon: "Layout",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Vue.js"],
  },
  {
    category: "Backend",
    icon: "Server",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",
      "Microservices",
    ],
  },
  {
    category: "Database",
    icon: "Database",
    technologies: ["MySQL", "PostgreSQL", "SQLite", "Supabase"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    technologies: ["Git", "GitHub", "Docker", "Azure", "Jenkins", "Postman", "VS Code"],
  },
];
