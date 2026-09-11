export interface SkillCategory {
  label: string
  command: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Cloud & IaC',
    command: '~/cloud$',
    items: ['AWS', 'Azure', 'Terraform', 'Ansible', 'LocalStack'],
  },
  {
    label: 'Containers & Platform',
    command: '~/platform$',
    items: ['Docker', 'Kubernetes', 'Helm', 'Kustomize', 'K3s', 'Traefik', 'Nginx'],
  },
  {
    label: 'CI/CD & GitOps',
    command: '~/delivery$',
    items: ['Git', 'GitLab CI/CD', 'GitHub Actions', 'Jenkins', 'Argo CD'],
  },
  {
    label: 'SRE & Observability',
    command: '~/sre$',
    items: ['Prometheus', 'Grafana', 'Alertmanager', 'ELK', 'Loki', 'k6'],
  },
  {
    label: 'Security & Operations',
    command: '~/secops$',
    items: ['Trivy', 'SBOM', 'RBAC', 'NetworkPolicies', 'SSL/TLS', 'Linux'],
  },
  {
    label: 'Languages / Runtime',
    command: '~/lang$',
    items: ['Bash', 'Python', 'Java 17', 'Spring Boot'],
  },
]
