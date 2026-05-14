---
title: "CI/CD Pipeline con GitHub Actions + Kubernetes"
description: "Pipeline de integración y deployment continuo automatizado para aplicaciones containerizadas. Incluye testing automatizado, análisis estático de código y deployment seguro a clusters de Kubernetes."
date: 2025-01-05
image: "/images/projects/cicd-k8s.jpg"
tags: ["CI/CD", "GitHub Actions", "Kubernetes", "DevOps"]
github: "https://github.com/vanima/cicd-github-actions-k8s"
---

## Descripción del Proyecto

Diseñé e implementé un pipeline de CI/CD completamente automatizado que permite deployments rápidos y confiables a producción.

### Características Principales

- **Integración Continua**: Tests y linting en cada commit
- **Análisis de Seguridad**: Scanning de vulnerabilidades con Trivy
- **Artifact Management**: Versionado de imágenes con GitHub Packages
- **Blue-Green Deployments**: Despliegue sin tiempo de inactividad
- **Rollback Automático**: Reversión ante detección de errores
- **Multi-Environment**: Staging, QA y Production

### Tecnologías Utilizadas

- GitHub Actions
- Kubernetes (EKS/GKE)
- Docker
- Helm
- ArgoCD
- SonarQube

### Lecciones Aprendidas

La clave fue implementar health checks adecuados en Kubernetes para validar que el deployment fue exitoso antes de dirigir tráfico. También aprendí a usar GitOps con ArgoCD para mantener el estado del cluster sincronizado con Git, lo que facilita el rollback y la auditoría.