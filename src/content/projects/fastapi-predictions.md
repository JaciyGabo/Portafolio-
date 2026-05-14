---
title: "API REST con FastAPI para Predictions"
description: "API REST de alto rendimiento para servir modelos de Machine Learning en producción. Implementa autenticación, rate limiting, caching y validación de esquemas."
date: 2025-04-20
image: "/images/projects/fastapi-api.jpg"
tags: ["FastAPI", "ML", "Python", "API"]
link: "https://api.example.com/predictions"
github: "https://github.com/vanima/fastapi-predictions-api"
---

## Descripción del Proyecto

Creé una API REST robusta y escalable para servir modelos de ML en producción, con enfoque en latencia mínima y alta disponibilidad.

### Características Principales

- **Endpoints de Predicción**: Predicciones síncronas y asíncronas
- **Autenticación JWT**: Seguridad con tokens de acceso
- **Rate Limiting**: Protección contra abuse
- **Caching con Redis**: Reducción de latencia para consultas repetidas
- **Documentación Automática**: OpenAPI/Swagger generado automáticamente
- **Testing**: Tests de integración y carga

### Tecnologías Utilizadas

- FastAPI
- Uvicorn
- Redis
- Pydantic
- Docker
- PostgreSQL

### Lecciones Aprendidas

El mayor desafío fue optimizar la carga de modelos en memoria. Implementé un sistema de warm-up que precarga los modelos al iniciar el servicio. También descubrí que usar Pydantic para validación de entrada reduce significativamente errores en producción.