export interface Project {
  title: string
  tagline: string
  description: string
  technologies: string[]
  metrics?: string[]
  accent: 'red' | 'blue' | 'yellow'
  /**
   * Verified against https://github.com/moahmedzaghloula?tab=repositories
   * Leave as "" ONLY if a repository could not be confidently matched —
   * the ProjectCard component disables the "View Project" action when empty.
   */
  githubUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'OpsVision',
    tagline: 'SRE & observability lab',
    description:
      'A local SRE and observability lab built around a checkout workflow: FastAPI microservices on Kubernetes with Postgres, Redis and RabbitMQ, instrumented end to end with Prometheus, Grafana, Alertmanager and the ELK stack, deployed through Argo CD.',
    technologies: ['Kubernetes', 'FastAPI', 'Prometheus', 'Grafana', 'ELK', 'Argo CD'],
    metrics: [
      '91 tests · 85.19% coverage',
      '25 alert rules · 33 SLO rules',
      '111 Kubernetes resources',
      '0 invalid manifests',
      '0 secret findings',
      '0 High/Critical Trivy findings',
    ],
    accent: 'red',
    githubUrl: 'https://github.com/moahmedzaghloula/OpsVision',
    featured: true,
  },
  {
    title: 'InfraPilot',
    tagline: 'Internal developer platform',
    description:
      'An internal developer platform-style control plane that standardizes service onboarding — from a YAML definition straight through to Kubernetes manifests, GitOps, CI/CD, observability and security assets, with Trivy scans and CycloneDX SBOMs on every image.',
    technologies: ['Kubernetes', 'GitOps', 'Terraform', 'Ansible', 'Argo CD', 'Trivy', 'SBOM'],
    accent: 'blue',
    githubUrl: 'https://github.com/moahmedzaghloula/InfraPilot',
    featured: true,
  },
  {
    title: 'Volt Store',
    tagline: 'Production K3s on bare VPS',
    description:
      'A K3s cluster provisioned on a Contabo VPS with Ansible, fronted by Traefik and cert-manager, deployed through a 4-stage GitLab CI/CD pipeline for zero-downtime rolling releases in under 4 minutes, watched by Prometheus, Grafana and Telegram alerting.',
    technologies: ['K3s', 'Ansible', 'Traefik', 'cert-manager', 'Argo CD', 'GitLab CI/CD', 'Prometheus', 'Grafana'],
    accent: 'yellow',
    githubUrl: 'https://github.com/moahmedzaghloula/VoltStore',
    featured: true,
  },
  {
    title: 'LaravelOps Deployment Platform',
    tagline: 'PHP/Laravel delivery pipeline',
    description:
      'A Laravel DevOps platform packaged with Docker Compose, PHP-FPM, Nginx, MySQL and Redis, deployed via GitLab CI/CD with Helm/Kustomize overlays, Argo CD, NetworkPolicies, RBAC and Terraform blueprints for AWS.',
    technologies: ['Docker Compose', 'Laravel', 'GitLab CI/CD', 'Helm', 'Argo CD', 'Terraform'],
    accent: 'red',
    githubUrl: 'https://github.com/moahmedzaghloula/LaravelOps',
    featured: false,
  },
  {
    title: 'Cloud-Native Microservices Platform',
    tagline: 'React + Flask + Postgres on k8s',
    description:
      'A React, Flask and PostgreSQL microservices platform on Kubernetes with HPA, NetworkPolicies, Ingress, ConfigMaps/Secrets and a ServiceMonitor, delivered through GitLab CI/CD with Prometheus, Grafana and ELK/Filebeat observability.',
    technologies: ['Kubernetes', 'Flask', 'PostgreSQL', 'GitLab CI/CD', 'Prometheus', 'ELK'],
    accent: 'blue',
    githubUrl: 'https://github.com/moahmedzaghloula/Microservices',
    featured: false,
  },
]
