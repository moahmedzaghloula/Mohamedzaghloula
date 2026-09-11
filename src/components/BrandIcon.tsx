import {
  siAnsible,
  siApachemaven,
  siArgo,
  siDocker,
  siElasticsearch,
  siFastapi,
  siGithub,
  siGithubactions,
  siGitlab,
  siGmail,
  siGrafana,
  siHelm,
  siJenkins,
  siJunit5,
  siK3s,
  siK6,
  siKubernetes,
  siLinux,
  siMysql,
  siNginx,
  siPostgresql,
  siPrometheus,
  siPython,
  siRabbitmq,
  siRedis,
  siSpringboot,
  siTerraform,
  siTraefikproxy,
  siTrivy,
} from "simple-icons";
import { FaAws, FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";
import type { BrandIconName } from "../data/types";

type SimpleIconDef = {
  title: string;
  hex: string;
  path: string;
};

type SimpleIconName = Exclude<BrandIconName, "aws" | "linkedin">;

const iconMap: Record<SimpleIconName, SimpleIconDef> = {
  docker: siDocker,
  kubernetes: siKubernetes,
  terraform: siTerraform,
  ansible: siAnsible,
  gitlab: siGitlab,
  prometheus: siPrometheus,
  grafana: siGrafana,
  linux: siLinux,
  python: siPython,
  helm: siHelm,
  k3s: siK3s,
  argo: siArgo,
  githubActions: siGithubactions,
  jenkins: siJenkins,
  nginx: siNginx,
  traefik: siTraefikproxy,
  elasticsearch: siElasticsearch,
  trivy: siTrivy,
  k6: siK6,
  redis: siRedis,
  postgresql: siPostgresql,
  rabbitmq: siRabbitmq,
  fastapi: siFastapi,
  springBoot: siSpringboot,
  mysql: siMysql,
  maven: siApachemaven,
  junit: siJunit5,
  github: siGithub,
  gmail: siGmail,
};

const fallbackIconMap: Record<Extract<BrandIconName, "aws" | "linkedin">, { Icon: IconType; hex: string }> = {
  aws: { Icon: FaAws, hex: "FF9900" },
  linkedin: { Icon: FaLinkedin, hex: "0A66C2" },
};

interface BrandIconProps {
  name: BrandIconName;
  className?: string;
  color?: string;
  label?: string;
}

export function BrandIcon({ name, className = "h-6 w-6", color, label }: BrandIconProps) {
  const accessibleProps = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true };

  if (name === "aws" || name === "linkedin") {
    const { Icon, hex } = fallbackIconMap[name];

    return (
      <Icon
        className={className}
        color={color ?? `#${hex}`}
        focusable="false"
        title={label}
        {...accessibleProps}
      />
    );
  }

  const icon = iconMap[name];

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={color ?? `#${icon.hex}`}
      focusable="false"
      {...accessibleProps}
    >
      {label ? <title>{label}</title> : null}
      <path d={icon.path} />
    </svg>
  );
}
