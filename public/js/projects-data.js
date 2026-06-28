/* public/js/projects-data.js */

const projectsData = {
    "gestion-flotilla": {
        title: "Gestión de Flotilla Inteligente",
        category: "Software de Logística",
        year: "2024",
        description: "Plataforma web completa para supervisar y registrar de forma diaria las rutas operadas por una flotilla superior a 50 vehículos. Optimiza el control y monitoreo de rutas de transporte, facilitando la administración y registro de operaciones con una interfaz moderna y responsiva.",
        images: [
            "../public/assets/images/GestionDeFlotilla.png",
            "../public/assets/images/GestionDeFlotilla2.png",
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop"
        ],
        functionalities: [
            "Control y monitoreo de rutas de transporte en tiempo real.",
            "Registro eficiente de operaciones diarias para coordinadores.",
            "Generación automática de reportes operativos.",
            "Interfaz moderna optimizada para dispositivos móviles.",
            "Gestión centralizada de vehículos y conductores."
        ],
        functionalityImage: "../public/assets/images/GestionDeFlotilla2.png",
        modules: [
            {
                icon: "fa-gauge-high",
                name: "Dashboard de Control",
                description: "Visualización centralizada de métricas críticas y estado actual de toda la flotilla."
            },
            {
                icon: "fa-route",
                name: "Gestión de Rutas",
                description: "Control total sobre la asignación, seguimiento y optimización de recorridos diarios."
            },
            {
                icon: "fa-screwdriver-wrench",
                name: "Mantenimiento",
                description: "Sistema de alertas para servicios preventivos basado en uso."
            }
        ],
        integrations: [
            "Servicios de Mapas",
            "Cloudflare (Seguridad)",
            "APIs Internas de Logística"
        ],
        technologies: {
            frontend: ["HTML", "JavaScript", "Tailwind CSS"],
            backend: ["Node.js", "Express"],
            database: ["SQL", "Managed DB on Cloudflare"],
            infrastructure: ["Cloudflare Workers", "GitHub Actions"]
        },
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    "digirack": {
        title: "Digirack - Gradilla Inteligente",
        category: "IoT & Salud",
        year: "2024",
        description: "Sistema avanzado para la gestión del tiempo de reposo de muestras mediante una gradilla inteligente con circuito integrado. Monitorea muestras mediante sensores y envía datos en tiempo real para un control de calidad riguroso en laboratorios.\nNOTA: Este producto fué desarrollado para un cliente y los derechos pertenecen al mismo, esta es una muestra de los servicios que podemos ofrecer.",
        images: [
            "../public/assets/images/digirack/digirack.png",
            "../public/assets/images/digirack/digirack.jpg",
            "../public/assets/images/digirack/example.jpg",
            "../public/assets/images/digirack/modal.jpeg",

        ],
        functionalities: [
            "Monitoreo de muestras mediante sensores de presencia.",
            "Registro digital de pacientes y muestras asociadas.",
            "API centralizada para el guardado y sincronización de datos.",
            "Circuito integrado embebido en hardware personalizado.",
            "Alertas visuales en tiempo real sobre el estado de la muestra.",
            "Historial de muestras realizadas.",
            "Gestión de usuarios y permisos para auditoría."
        ],
        functionalityImage: [
            "../public/assets/images/digirack/digirack.jpg"
        ],
        modules: [
            {
                icon: "fa-vial",
                name: "Control de Muestras",
                description: "Seguimiento individualizado por sensor para cada orificio de la gradilla."
            },
            {
                icon: "fa-microchip",
                name: "Firmware Integrado",
                description: "Lógica embebida para el procesamiento local de datos y comunicación serial."
            },
            {
                icon: "fa-chart-line",
                name: "Reportes Históricos",
                description: "Análisis de tiempos de reposo y eficiencia del laboratorio."
            }
        ],
        integrations: [
            "Sensores Ópticos",
            "Base de Datos Central",
            "Sistemas de Información de Laboratorio (LIS)"
        ],
        technologies: {
            frontend: [".NET Framework", "Windows Forms"],
            backend: ["C# (Desktop app)"],
            database: ["My SQL"],
            infrastructure: ["Arduino UNO", "Comunicación por puerto serial", "Railway "]
        },
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    "app-analiticas": {
        title: "App de Analíticas BI",
        category: "Business Intelligence",
        year: "2023",
        description: "Dashboard de visualización de datos en tiempo real para métricas de negocio clave. Transforma datos complejos en tableros visuales intuitivos para la toma de decisiones estratégicas basadas en KPIs precisos.",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1471&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        ],
        functionalities: [
            "Visualización de datos en tiempo real con gráficas interactivas.",
            "Integración dinámica con fuentes de datos externas.",
            "Filtros avanzados por periodos, categorías y regiones.",
            "Exportación de reportes detallados en PDF y Excel.",
            "Alertas inteligentes basadas en umbrales de rendimiento."
        ],
        functionalityImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1471&auto=format&fit=crop",
        modules: [
            {
                icon: "fa-chart-pie",
                name: "Panel de KPIs",
                description: "Resumen visual de los indicadores clave de rendimiento más importantes."
            },
            {
                icon: "fa-clock-rotate-left",
                name: "Análisis Histórico",
                description: "Comparativa de datos actuales contra periodos anteriores para detectar tendencias."
            }
        ],
        integrations: [
            "Firebase Cloud Firestore",
            "APIs REST de Terceros",
            "Chart.js / D3.js"
        ],
        technologies: {
            frontend: ["Vue.js", "CSS Global", "Chart.js"],
            backend: ["Firebase Functions"],
            database: ["Firebase Realtime DB"],
            infrastructure: ["Firebase Hosting"]
        },
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    "gestor-legal": {
        title: "Gestor de Documentos Legales",
        category: "Gestor Notarial",
        year: "2023",
        description: "Sistema especializado para el control de trámites notariales y seguimiento documental mediante almacenamiento digital seguro. Organiza expedientes y facilita la búsqueda de información crítica en entornos legales de alto volumen.",
        images: [
            "../public/assets/images/notaria/login.png",
            "../public/assets/images/notaria/gestornotarial.png",
            "../public/assets/images/notaria/see-files.png",
            "../public/assets/images/notaria/files.png"
        ],
        functionalities: [
            "Control total para trámites notariales (actas, contratos, escritos).",
            "Almacenamiento y gestión de archivos (PDF, JPG, PNG).",
            "Búsqueda avanzada por cliente, fecha o tipo de documento.",
            "Gestión multi-usuario con roles y permisos específicos.",
            "Seguimiento de estados de trámites en tiempo real."
        ],
        functionalityImage: "../public/assets/images/notaria/files.png",
        modules: [
            {
                icon: "fa-folder-open",
                name: "Expediente Digital",
                description: "Organización jerárquica de toda la documentación de un caso o cliente."
            },
            {
                icon: "fa-users-gear",
                name: "Administración",
                description: "Control de altas de usuarios y auditoría de accesos al sistema."
            }
        ],
        integrations: [
            "Sistemas de Almacenamiento Local/Nube",
            "Módulos de Escaneo de Documentos"
        ],
        technologies: {
            frontend: ["PHP", "JavaScript", "JQuery", "HTML/CSS"],
            backend: ["PHP"],
            database: ["MySQL"],
            infrastructure: ["Apache"]
        },
        videoUrl: "../public/assets/images/notaria/notaria.mp4"
    },
    "recomendador-musica": {
        title: "Sistema de Recomendación Spotify",
        category: "Análisis de Datos",
        year: "2025",
        description: "Recomendador inteligente basado en filtros de género y popularidad utilizando datos oficiales de Spotify. Analiza patrones auditivos para sugerir contenido relevante, proporcionando una interfaz fluida e integrada con servicios de streaming.",
        images: [
            "../public/assets/images/recomendador.png"
        ],
        functionalities: [
            "Recomendaciones personalizadas basadas en el API oficial de Spotify.",
            "Filtros dinámicos por género, ánimo y niveles de popularidad.",
            "Análisis de popularidad global para descubrir nuevas tendencias.",
            "Interfaz moderna sincronizada con la biblioteca del usuario.",
            "Búsqueda avanzada de artistas y álbumes integrada."
        ],
        functionalityImage: "../public/assets/images/recomendador.png",
        modules: [
            {
                icon: "fa-headphones-simple",
                name: "Motor de Recomendación",
                description: "Algoritmos en Python para procesar grandes volúmenes de datos musicales."
            },
            {
                icon: "fa-magnifying-glass-chart",
                name: "Analizador de Tendencias",
                description: "Visualización de lo más escuchado a nivel global por género."
            }
        ],
        integrations: [
            "Spotify Web API",
            "OAuth 2.0 (Autenticación)",
            "Webhooks de música"
        ],
        technologies: {
            frontend: ["JavaScript", "HTML/CSS"],
            backend: ["Python (Fast API)"],
            database: ["N/A"],
            infrastructure: ["Spotify API"]
        },
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    "app-administrativa": {
        title: "App de Apoyo Administrativo",
        category: "ERP / Administración",
        year: "2024",
        description: "Solución integral para la automatización de procesos administrativos críticos. Incluye generación de DIOT, monitoreo de vigencia de FIEL y CSD, gestión de cobranza y herramientas de comunicación masiva para despachos contables y administrativos.",
        images: [
            "../public/assets/images/appadministrativa.png",
            "https://images.unsplash.com/photo-1454165833767-02a6e30aa57a?q=80&w=2070&auto=format&fit=crop"
        ],
        functionalities: [
            "Generador automático de reportes DIOT para el SAT.",
            "Monitoreo proactivo de vigencia de firmas digitales (FIEL) y CSD.",
            "Sistema de gestión de cobranza con seguimiento de tickets.",
            "Envío de correos masivos automatizado para comunicados.",
            "Generación de reportes detallados en Excel y PDFs."
        ],
        functionalityImage: "../public/assets/images/appadministrativa.png",
        modules: [
            {
                icon: "fa-landmark",
                name: "Módulo Contable",
                description: "Herramientas específicas para el cumplimiento de obligaciones fiscales."
            },
            {
                icon: "fa-envelope-open-text",
                name: "Gestor de Mensajería",
                description: "Plantillas y envío programado de correos para grandes listas de clientes."
            },
            {
                icon: "fa-file-invoice-dollar",
                name: "Control de Cobranza",
                description: "Administración de facturas pendientes y recordatorios automáticos."
            }
        ],
        integrations: [
            "Servicios Web del SAT",
            "Servidores SMTP para correo masivo",
            "Librerías de Excel (ExcelJS)"
        ],
        technologies: {
            frontend: ["React.js", "Tailwind CSS"],
            backend: ["Node.js", "Express"],
            database: ["PostgreSQL"],
            infrastructure: ["Docker", "Vercel / VPS"]
        },
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    "cyberex": {
        title: "Cyberex",
        category: "Ciberseguridad",
        year: "2025",
        description: "Herramienta para análisis de correos en tiempo real y prevención de phishing o malware mediante consultas a 96 motores de antivirus, google safe browsing y modelo de inteligencia artificial entrenado para detección de phishing. \nNOTA: Esta aplicación fue realizada para un cliente y los derechos le pertenecen al mismo, esta es solo una demostración de nuestra experiencia.",
        images: [
            "../public/assets/images/cyberex/login.png",
            "../public/assets/images/cyberex/licenses.png",
            "../public/assets/images/cyberex/analisis.png",
            "../public/assets/images/cyberex/payment.png",

        ],
        functionalities: [
            "Análisis de correos en tiempo real.",
            "Gestión de usuarios y correos autorizadosa'",
            "Gestión de licencias.",
            "Historial de pagos.",
            "Gestión de dispositivos.",
            "Compra de limite de dispositivos adicional.",
            "Cambio de licencia."
        ],
        functionalityImage: "../public/assets/images/cyberex/login.png",
        modules: [
            {
                icon: "fa-landmark",
                name: "Módulo Contable",
                description: "Herramientas específicas para el cumplimiento de obligaciones fiscales."
            },
            {
                icon: "fa-envelope-open-text",
                name: "Gestor de Mensajería",
                description: "Plantillas y envío programado de correos para grandes listas de clientes."
            },
            {
                icon: "fa-file-invoice-dollar",
                name: "Control de Cobranza",
                description: "Administración de facturas pendientes y recordatorios automáticos."
            }
        ],
        integrations: [
            "Serivicio de pagos de Stripe",
            "API de Google Safe Browsing",
            "API de Virus Total",
            "Modelo de IA personalizado",
            "API de EmailJS",
        ],
        technologies: {
            frontend: ["HTML", "Tailwind CSS"],
            backend: ["Node.js", "Express", "Python", "FastAPI", "Torch"],
            database: ["PostgreSQL", "Redis"],
            infrastructure: ["Docker", "Railway", "Hugging Face", "Netlify", "Chrome Web Store"]
        },
        videoUrl: "../public/assets/images/cyberex/cyberex.mp4"
    }
};
