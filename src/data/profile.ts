import type { Profile } from "../types/portfolio";

/**
 * All personal/profile content in one place.
 * To update the portfolio copy, edit only this file.
 */
export const profile: Profile = {
  name: "Muhammad Alan Andika",
  shortName: "Alan",
  role: "Computer Science Student",
  tagline:
    "Aspiring Full Stack Web Developer passionate about building modern web applications and continuously growing through real-world software projects.",
  availability: "Available for Internship",

  about: [
    "I am a Computer Science student at Universitas Pendidikan Indonesia with a strong interest in Full Stack Web Development.",
    "I enjoy transforming ideas into real applications that solve problems and create meaningful user experiences.",
    "Throughout my academic journey, I have participated in collaborative software engineering projects involving web development, cloud computing, machine learning, and IoT.",
    "For me, every project is an opportunity to improve my technical skills, communication, and teamwork while building software that delivers real value.",
  ],

  quickFacts: [
    { label: "University", value: "Universitas Pendidikan Indonesia" },
    { label: "Major", value: "Computer Science" },
    { label: "Semester", value: "Semester 5" },
    { label: "Location", value: "Bandung, Indonesia" },
  ],

  socials: [
    // TODO: Replace with real URLs when available
    // { label: "GitHub", href: "https://github.com/alanandika", icon: "Github" },
    // { label: "LinkedIn", href: "https://linkedin.com/in/alanandika", icon: "Linkedin" },
  ],

  email: "", // TODO: Add real email
  resumeUrl: "", // TODO: Add real CV link
};
