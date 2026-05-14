export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'desarrollo-software',
    title: 'Desarrollo de Software a Medida',
    description: 'Construyo soluciones de software personalizadas que se adaptan exactamente a tus necesidades. Desde aplicaciones web hasta sistemas enterprise, siempre con código limpio, mantenible y escalable.',
    icon: 'code',
    features: [
      'Desarrollo full-stack con tecnologías modernas',
      'Arquitectura de software escalable',
      'Código con pruebas automatizadas',
      'Documentación técnica completa',
      'Integración con APIs externas',
      'Optimización de rendimiento',
    ],
  },
  {
    id: 'sitios-web',
    title: 'Creación de Sitios Web',
    description: 'Diseño y desarrollo sitios web profesionales que generan impacto. Ya sea un portafolio personal, sitio corporativo o aplicación web, creo experiencias digitales que destacan.',
    icon: 'globe',
    features: [
      'Diseño responsive que funciona en todos dispositivos',
      'Experiencia de usuario intuitiva',
      'SEO optimizado para búsqueda',
      'Velocidad de carga optimizada',
      'Accesibilidad web (WCAG)',
      'Animaciones y transiciones fluidas',
    ],
  },
  {
    id: 'mlops-devops',
    title: 'Arquitectura/Automatización MLOps y DevOps',
    description: 'Transformo cómo llevas tus modelos de Machine Learning a producción y cómo automatizas tu infraestructura. Creo sistemas robustos, reproducibles y escalables que aceleran tu entrega de valor.',
    icon: 'rocket',
    features: [
      'Pipeline de ML automatizado (Airflow, Prefect)',
      'Servir modelos en producción (FastAPI, TensorFlow Serving)',
      'Containerización con Docker',
      'Orquestación con Kubernetes',
      'CI/CD con GitHub Actions / GitLab CI',
      'Observabilidad y monitoreo (Grafana, Prometheus)',
    ],
  },
];