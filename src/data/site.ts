import type { SocialLink } from "./types";

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const personal = {
  name: "Mohamed Zaghloula",
  role: "DevOps Engineer",
  email: "mohamed.zaghloula1907@gmail.com",
  phone: "+20 100 887 8060",
  location: "Cairo, Egypt",
  linkedin: "https://www.linkedin.com/in/mohamed-zaghloula-ba5548235",
  github: "https://github.com/moahmedzaghloula",
  resumeUrl: withBase("resume/Mohamed_Zaghloula_DevOps_.pdf"),
  emailHref: "mailto:mohamed.zaghloula1907@gmail.com",
};

export const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: "linkedin",
    external: true,
  },
  {
    label: "GitHub",
    href: personal.github,
    icon: "github",
    external: true,
  },
  {
    label: "Email",
    href: personal.emailHref,
    icon: "gmail",
    external: false,
  },
];
