import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { 
    faGaugeHigh, faRoute, faScrewdriverWrench, 
    faVial, faMicrochip, faChartLine,
    faChartPie, faClockRotateLeft,
    faFolderOpen, faUsersGear,
    faHeadphonesSimple, faMagnifyingGlassChart,
    faLandmark, faEnvelopeOpenText, faFileInvoiceDollar,
    faShieldHalved, faFingerprint, faCreditCard
} from "@fortawesome/free-solid-svg-icons";

export interface ProjectModule {
    icon: IconProp;
    name: string;
    description: string;
}

export interface ProjectTechnologies {
    languages?: string[];
    frameworks?: string[];
    databases?: string[];
    infrastructure?: string[];
    integrations?: string[];
    others?: string[];
}

export interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    description: string;
    images: string[];
    functionalities: string[];
    functionalityImage: string | string[];
    modules: ProjectModule[];
    integrations: string[];
    technologies: ProjectTechnologies;
    videoUrl?: string;
}

export const projectsData: Record<string, Project> = {
    "gestion-flotilla": {
        id: "gestion-flotilla",
        title: "Gestión de Flotilla Inteligente",
        category: "Software de Logística",
        year: "2024",
        description: "Plataforma web completa para supervisar y registrar de forma diaria las rutas operadas por una flotilla superior a 50 vehículos. Optimiza el control y monitoreo de rutas de transporte, facilitando la administración y registro de operaciones con una interfaz moderna y responsiva.",
        images: [
            "/assets/images/GestionDeFlotilla.png",
            "/assets/images/GestionDeFlotilla2.png"
        ],
        functionalities: [
            "Control y monitoreo de rutas de transporte en tiempo real.",
            "Registro eficiente de operaciones diarias para coordinadores.",
            "Generación automática de reportes operativos.",
            "Interfaz moderna optimizada para dispositivos móviles.",
            "Gestión centralizada de vehículos y conductores."
        ],
        functionalityImage: "/assets/images/GestionDeFlotilla2.png",
        modules: [
            {
                icon: faGaugeHigh,
                name: "Dashboard de Control",
                description: "Visualización centralizada de métricas críticas y estado actual de toda la flotilla."
            },
            {
                icon: faRoute,
                name: "Gestión de Rutas",
                description: "Control total sobre la asignación, seguimiento y optimización de recorridos diarios."
            },
            {
                icon: faScrewdriverWrench,
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
            languages: ["HTML", "JavaScript"],
            frameworks: ["Tailwind CSS", "Node.js", "Express"],
            databases: ["SQL", "Managed DB on Cloudflare"],
            infrastructure: ["Cloudflare Workers", "GitHub Actions"]
        }
    },
    "digirack": {
        id: "digirack",
        title: "Digirack - Gradilla Inteligente",
        category: "IoT & Salud",
        year: "2024",
        description: "Sistema avanzado para la gestión del tiempo de reposo de muestras mediante una gradilla inteligente con circuito integrado. Monitorea muestras mediante sensores y envía datos en tiempo real para un control de calidad riguroso en laboratorios.\nNOTA: Este producto fué desarrollado para un cliente y los derechos pertenecen al mismo, esta es una muestra de los servicios que podemos ofrecer.",
        images: [
            "/assets/images/digirack/digirack.png",
            "/assets/images/digirack/digirack.jpg",
            "/assets/images/digirack/example.jpg",
            "/assets/images/digirack/modal.jpeg",
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
        functionalityImage: "/assets/images/digirack/digirack.jpg",
        modules: [
            {
                icon: faVial,
                name: "Control de Muestras",
                description: "Seguimiento individualizado por sensor para cada orificio de la gradilla."
            },
            {
                icon: faMicrochip,
                name: "Firmware Integrado",
                description: "Lógica embebida para el procesamiento local de datos y comunicación serial."
            },
            {
                icon: faChartLine,
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
            languages: [".NET Framework", "Windows Forms"],
            frameworks: ["C# (Desktop app)"],
            databases: ["MySQL"],
            infrastructure: ["Arduino UNO", "Serial Port Communication", "Railway"]
        }
    },
    "app-analiticas": {
        id: "app-analiticas",
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
                icon: faChartPie,
                name: "Panel de KPIs",
                description: "Resumen visual de los indicadores clave de rendimiento más importantes."
            },
            {
                icon: faClockRotateLeft,
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
            languages: ["JavaScript"],
            frameworks: ["Vue.js", "Chart.js"],
            databases: ["Firebase Realtime DB"],
            infrastructure: ["Firebase Hosting", "Firebase Functions"]
        },
    },
    "gestor-legal": {
        id: "gestor-legal",
        title: "Gestor de Documentos Legales",
        category: "Gestor Notarial",
        year: "2023",
        description: "Sistema especializado para el control de trámites notariales y seguimiento documental mediante almacenamiento digital seguro. Organiza expedientes y facilita la búsqueda de información crítica en entornos legales de alto volumen.",
        images: [
            "/assets/images/notaria/login.png",
            "/assets/images/notaria/gestornotarial.png",
            "/assets/images/notaria/see-files.png",
            "/assets/images/notaria/files.png"
        ],
        functionalities: [
            "Control total para trámites notariales (actas, contratos, escritos).",
            "Almacenamiento y gestión de archivos (PDF, JPG, PNG).",
            "Búsqueda avanzada por cliente, fecha o tipo de documento.",
            "Gestión multi-usuario con roles y permisos específicos.",
            "Seguimiento de estados de trámites en tiempo real."
        ],
        functionalityImage: "/assets/images/notaria/files.png",
        modules: [
            {
                icon: faFolderOpen,
                name: "Expediente Digital",
                description: "Organización jerárquica de toda la documentación de un caso o cliente."
            },
            {
                icon: faUsersGear,
                name: "Administración",
                description: "Control de altas de usuarios y auditoría de accesos al sistema."
            }
        ],
        integrations: [
            "Sistemas de Almacenamiento Local/Nube",
            "Módulos de Escaneo de Documentos"
        ],
        technologies: {
            languages: ["PHP", "JavaScript", "HTML/CSS"],
            frameworks: ["JQuery"],
            databases: ["MySQL"],
            infrastructure: ["Apache"]
        },
        videoUrl: "/assets/videos/notaria.mp4"
    },
    "recomendador-musica": {
        id: "recomendador-musica",
        title: "Sistema de Recomendación Spotify",
        category: "Análisis de Datos",
        year: "2025",
        description: "Recomendador inteligente basado en filtros de género y popularidad utilizando datos oficiales de Spotify. Analiza patrones auditivos para sugerir contenido relevante, proporcionando una interfaz fluida e integrada con servicios de streaming.",
        images: [
            "/assets/images/recomendador.png"
        ],
        functionalities: [
            "Recomendaciones personalizadas basadas en el API oficial de Spotify.",
            "Filtros dinámicos por género, ánimo y niveles de popularidad.",
            "Análisis de popularidad global para descubrir nuevas tendencias.",
            "Interfaz moderna",
        ],
        functionalityImage: "/assets/images/recomendador.png",
        modules: [
            {
                icon: faHeadphonesSimple,
                name: "Motor de Recomendación",
                description: "Algoritmos en Python para procesar grandes volúmenes de datos musicales."
            },
            {
                icon: faMagnifyingGlassChart,
                name: "Analizador de Tendencias",
                description: "Visualización de lo más escuchado a nivel global por género."
            }
        ],
        integrations: [
            "Spotify Web API",
        ],
        technologies: {
            languages: ["JavaScript", "Python", "HTML/CSS"],
            frameworks: ["FastAPI"],
            infrastructure: ["Spotify API"]
        },
    },
    "app-administrativa": {
        id: "app-administrativa",
        title: "App de Apoyo Administrativo",
        category: "ERP / Administración",
        year: "2024",
        description: "Solución integral para la automatización de procesos administrativos críticos. Incluye generación de DIOT, monitoreo de vigencia de FIEL y CSD, gestión de cobranza y herramientas de comunicación masiva para despachos contables y administrativos.",
        images: [
            "/assets/images/appadministrativa.png",
            "/assets/images/apoyo_admin/nuevo-cliente.png",
            "/assets/images/apoyo_admin/ej-diot.png",
            "/assets/images/apoyo_admin/estado-cuenta.png",
        ],
        functionalities: [
            "Generador automático de reportes DIOT para el SAT.",
            "Monitoreo proactivo de vigencia de firmas digitales (FIEL) y CSD.",
            "Sistema de gestión de cobranza con seguimiento de tickets.",
            "Envío de correos masivos automatizado para comunicados.",
            "Generación de reportes detallados en Excel y PDFs."
        ],
        functionalityImage: "/assets/images/apoyo_admin/certificados-guardados.png",
        modules: [
            {
                icon: faLandmark,
                name: "Módulo Contable",
                description: "Herramientas específicas para el cumplimiento de obligaciones fiscales."
            },
            {
                icon: faEnvelopeOpenText,
                name: "Gestor de Mensajería",
                description: "Plantillas y envío programado de correos para grandes listas de clientes."
            },
            {
                icon: faFileInvoiceDollar,
                name: "Control de Cobranza",
                description: "Administración de facturas pendientes y recordatorios automáticos."
            }
        ],
        integrations: [
            "Lecura de archivos .cer",
            "Servidor SMTP de Google",
            "Librerías de Excel (ExcelJS)"
        ],
        technologies: {
            languages: ["JavaScript", "HTML/CSS"],
            frameworks: ["React.js", "Tailwind CSS", "Node.js", "Express"],
            databases: ["MySQL"],
            infrastructure: ["Apache Server"]
        }
    },
    "cyberex": {
        id: "cyberex",
        title: "Cyberex",
        category: "Ciberseguridad",
        year: "2025",
        description: "Herramienta para análisis de correos en tiempo real y prevención de phishing o malware mediante consultas a 96 motores de antivirus, google safe browsing y modelo de inteligencia artificial entrenado para detección de phishing. \nNOTA: Esta aplicación fue realizada para un cliente y los derechos le pertenecen al mismo, esta es solo una demostración de nuestra experiencia.",
        images: [
            "/assets/images/cyberex/login.png",
            "/assets/images/cyberex/licenses.png",
            "/assets/images/cyberex/analisis.png",
            "/assets/images/cyberex/payment.png",
        ],
        functionalities: [
            "Análisis de correos en tiempo real.",
            "Gestión de usuarios y correos autorizados",
            "Gestión de licencias.",
            "Historial de pagos.",
            "Gestión de dispositivos.",
            "Compra de limite de dispositivos adicional.",
            "Cambio de licencia."
        ],
        functionalityImage: "/assets/images/cyberex/devices.png",
        modules: [
            {
                icon: faShieldHalved,
                name: "Motor de Análisis",
                description: "Integración con múltiples motores de antivirus y detección de amenazas."
            },
            {
                icon: faFingerprint,
                name: "IA de Phishing",
                description: "Modelo personalizado entrenado específicamente para identificar patrones de suplantación."
            },
            {
                icon: faCreditCard,
                name: "Pasarela de Pagos",
                description: "Gestión segura de suscripciones y licencias mediante Stripe."
            }
        ],
        integrations: [
            "Servicio de pagos de Stripe",
            "API de Google Safe Browsing",
            "API de Virus Total",
            "Modelo de IA personalizado",
            "API de EmailJS"
        ],
        technologies: {
            languages: ["HTML", "JavaScript", "Python"],
            frameworks: ["Tailwind CSS", "Node.js", "Express", "FastAPI", "Torch"],
            databases: ["PostgreSQL", "Redis"],
            infrastructure: ["Docker", "Railway", "Hugging Face", "Netlify", "Chrome Web Store"]
        },
        videoUrl: "/assets/videos/cyberex.mp4"
    }
};
