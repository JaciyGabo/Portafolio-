---
title: "Sistema de ML Pipeline con Airflow"
description: "Pipeline de Machine Learning completo para entrenamiento y validación de modelos predictivos utilizando Apache Airflow como orquestador. Incluye gestión de datos, feature engineering automatizado y monitoreo de experimentos."
date: 2025-06-15
image: "/images/projects/ml-pipeline.jpg"
tags: ["MLOps", "Airflow", "Python", "Data Engineering"]
github: "https://github.com/vanima/ml-pipeline-airflow"
---

## Descripción del Proyecto

Desarrollé un pipeline de ML completamente automatizado que gestiona todo el ciclo de vida de los modelos predictivos: desde la ingestión de datos hasta el deployment en producción.

### Características Principales

- **Orquestación con Airflow**: Tareas programadas para entrenamiento, validación y deployment
- **Feature Engineering Automatizado**: Transformaciones de datos reproducibles
- **Experiments Tracking**: Registro de métricas y parámetros con MLflow
- **Data Validation**: Validación de calidad de datos en cada etapa
- **Notifications**: Alertas automáticas en caso de fallos o degradación de métricas

### Tecnologías Utilizadas

- Apache Airflow
- Python 3.11
- Pandas, Scikit-learn
- MLflow
- Great Expectations
- PostgreSQL

### Lecciones Aprendidas

La gestión de dependencias entre tareas fue crucial. Implementé retry policies y retry delays para manejar fallos transitorios en APIs externas. También aprendí la importancia de separar la configuración del código para facilitar la reutilización del pipeline en diferentes proyectos.