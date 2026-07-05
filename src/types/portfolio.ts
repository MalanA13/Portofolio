/**
 * Shared type definitions for the portfolio.
 *
 * Architecture decision: one types file for all data shapes.
 * Why? The portfolio is small. Splitting types across many files
 * adds navigation cost without benefit. When the project grows
 * (e.g., blog posts, project detail pages), split by domain.
 */

export interface SocialLink {
  label: string;
  href: string;
  /** Lucide icon name, e.g. "Github", "Linkedin", "Mail" */
  icon: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  availability: string;
  about: string[];
  quickFacts: QuickFact[];
  socials: SocialLink[];
  email: string;
  resumeUrl: string;
}

export interface Project {
  title: string;
  role: string;
  category: string;
  type: string;
  description: string;
  contributions: string[];
  stack: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  category: string;
  /** Lucide icon name */
  icon: string;
  technologies: string[];
}

export interface OrganizationEntry {
  role: string;
  organization: string;
  date: string;
  type: string;
  description: string[];
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  href?: string;
  credentialUrl?: string;
}
