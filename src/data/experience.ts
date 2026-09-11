export interface ExperienceEntry {
  company: string
  role: string
  period: string
  type?: string
  accent: 'red' | 'blue'
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Firmus Financial',
    role: 'DevOps Engineer',
    period: 'May 2025 — July 2026',
    accent: 'red',
    bullets: [
      'Managed AWS infrastructure across 6 core services (EC2, VPC, S3, RDS, CloudWatch, Route 53) for fintech workloads.',
      'Containerized 9 backend services across 3 stages with Docker, Kubernetes, Helm and Nginx, reducing release inconsistency by 30%.',
      'Optimized GitLab CI/CD pipelines for testing and Kubernetes deployments, cutting manual delivery effort by 50%.',
      'Standardized Terraform and Ansible templates for AWS/Linux environments, lowering manual provisioning effort by 40%.',
      'Configured Prometheus and Grafana dashboards, reducing mean time to resolution (MTTR) by 25%.',
    ],
  },
  {
    company: 'Upwork',
    role: 'Freelance DevOps Engineer',
    period: 'April 2025 — Present',
    type: 'Self-employed · Project-based',
    accent: 'blue',
    bullets: [
      'Delivered Docker-based hosting for PHP/Laravel and Python applications across 4 freelance clients.',
      'Set up CI/CD workflows for 2 deployment targets, cutting recurring release prep from hours to under 30 minutes.',
      'Resolved Docker networking, DNS, reverse proxy and permissions issues, reducing repeat incidents by 20%.',
      'Produced configuration, rollback and handover documentation, reducing handover prep time by 30%.',
    ],
  },
]
