export type BrandIconName =
  | "aws"
  | "docker"
  | "kubernetes"
  | "terraform"
  | "ansible"
  | "gitlab"
  | "prometheus"
  | "grafana"
  | "linux"
  | "python"
  | "helm"
  | "k3s"
  | "argo"
  | "githubActions"
  | "jenkins"
  | "nginx"
  | "traefik"
  | "elasticsearch"
  | "trivy"
  | "k6"
  | "redis"
  | "postgresql"
  | "rabbitmq"
  | "fastapi"
  | "springBoot"
  | "mysql"
  | "maven"
  | "junit"
  | "github"
  | "linkedin"
  | "gmail";

export type AccentName = "red" | "blue" | "yellow";

export interface Project {
  title: string;
  label: string;
  description: string;
  technologies: string[];
  metrics: string[];
  accent: AccentName;
  accentColor: string;
  githubUrl: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  context?: string;
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  tools: string[];
}

export interface ToolItem {
  name: string;
  icon: BrandIconName;
  color: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: BrandIconName;
  external: boolean;
}
