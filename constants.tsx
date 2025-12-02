import { 
  Wrench, 
  Droplets, 
  Fan, 
  ThermometerSun, 
  Flame, 
  Clock, 
  MapPin, 
  Phone, 
  Mail
} from "lucide-react";
import type { ServiceItem, TestimonialItem, FaqItem, NavLink, BlogPost, ProjectItem } from "./types";

export const CONTACT_INFO = {
  phone: "+34 632 18 84 03",
  whatsapp: "+34 632 18 84 03",
  email: "assou84@hotmail.com",
  address: "Carrer de Balmes, 123, 08008 Barcelona",
  schedule: "Lunes a Viernes: 8:00 - 20:00 | Urgencias 24h"
};

export const NAV_LINKS: NavLink[] = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Calculadora", href: "#calculadora" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Blog", href: "#blog" },
  { name: "Reservas", href: "#reservas" },
  { name: "Contacto", href: "#contacto" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "reparaciones",
    title: "Reparaciones Generales",
    description: "Solucionamos cualquier avería de fontanería: grifos que gotean, cisternas rotas, cambio de llaves de paso y tuberías.",
    icon: Wrench,
    image: "https://picsum.photos/id/132/600/400"
  },
  {
    id: "desatascos",
    title: "Desatascos Profesionales",
    description: "Servicio rápido de desatascos en fregaderos, baños y bajantes comunitarios. Utilizamos tecnología moderna para evitar obras.",
    icon: Droplets,
    image: "https://picsum.photos/id/256/600/400"
  },
  {
    id: "fugas",
    title: "Detección de Fugas",
    description: "Localizamos y reparamos fugas de agua invisibles utilizando geófonos y cámaras térmicas para minimizar daños en su hogar.",
    icon: MapPin,
    image: "https://picsum.photos/id/175/600/400"
  },
  {
    id: "aire-acondicionado",
    title: "Aire Acondicionado",
    description: "Instalación, carga de gas y mantenimiento de sistemas de climatización split y por conductos. Garantía de confort.",
    icon: Fan,
    image: "https://picsum.photos/id/452/600/400"
  },
  {
    id: "calderas",
    title: "Calderas y Termos",
    description: "Instalación y sustitución de calderas de gas, termos eléctricos y calentadores. Trabajamos con las mejores marcas.",
    icon: Flame,
    image: "https://picsum.photos/id/550/600/400"
  },
  {
    id: "urgencias",
    title: "Urgencias 24 Horas",
    description: "Disponibles los 365 días del año para emergencias de fontanería y climatización. Llegamos en menos de 1 hora.",
    icon: Clock,
    image: "https://picsum.photos/id/364/600/400"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "María García",
    location: "Eixample, Barcelona",
    text: "Excelente servicio. Tuvimos una fuga urgente un domingo y llegaron en 40 minutos. Muy profesionales y limpios.",
    rating: 5
  },
  {
    id: 2,
    name: "Jordi Soler",
    location: "Hospitalet de Llobregat",
    text: "Me instalaron el aire acondicionado antes del verano. Precio competitivo y la instalación quedó perfecta. Recomendados.",
    rating: 5
  },
  {
    id: 3,
    name: "Laura Vidal",
    location: "Gràcia, Barcelona",
    text: "Fontaneros de confianza. Me cambiaron el termo eléctrico y todo fue muy rápido. El trato fue muy amable.",
    rating: 4
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Cobráis desplazamiento?",
    answer: "En FontaneriaClima, el desplazamiento en Barcelona ciudad es gratuito si se acepta el presupuesto. Para zonas periféricas, consulte nuestras tarifas reducidas."
  },
  {
    question: "¿Dais garantía en las reparaciones?",
    answer: "Sí, todas nuestras instalaciones y reparaciones cuentan con una garantía mínima de 6 meses, y 2 años en instalaciones nuevas según normativa."
  },
  {
    question: "¿Atendéis urgencias de noche?",
    answer: "Sí, disponemos de un equipo de guardia 24 horas para atender cualquier emergencia de fontanería, gas o climatización en cualquier momento."
  },
  {
    question: "¿Hacéis presupuestos sin compromiso?",
    answer: "Por supuesto. Puede contactarnos y, dependiendo de la avería, le daremos un precio aproximado por teléfono o visitaremos su domicilio para un presupuesto exacto."
  }
];

export const SERVICE_AREAS = [
  "Barcelona Ciudad (Todos los barrios)",
  "L'Hospitalet de Llobregat",
  "Badalona",
  "Santa Coloma de Gramenet",
  "Sant Cugat del Vallès",
  "Cornellà de Llobregat",
  "El Prat de Llobregat",
  "Esplugues de Llobregat",
  "Sant Adrià de Besòs"
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Cómo mantener tu caldera en perfecto estado",
    excerpt: "Descubre los pasos esenciales para alargar la vida útil de tu caldera y ahorrar en la factura del gas con un mantenimiento adecuado.",
    date: "15 Mar 2024",
    image: "https://images.unsplash.com/photo-1623251232255-e97cb8e50549?q=80&w=800&auto=format&fit=crop",
    category: "Calefacción"
  },
  {
    id: 2,
    title: "Beneficios del aire acondicionado inverter",
    excerpt: "¿Pensando en instalar aire acondicionado? Te explicamos por qué la tecnología inverter es la mejor opción para tu confort y tu bolsillo.",
    date: "10 Mar 2024",
    image: "https://images.unsplash.com/photo-1618941468483-c093f5686127?q=80&w=800&auto=format&fit=crop",
    category: "Climatización"
  },
  {
    id: 3,
    title: "Consejos para evitar atascos en casa",
    excerpt: "Pequeños hábitos diarios que pueden salvarte de grandes problemas. Aprende qué no debes tirar nunca por el desagüe.",
    date: "05 Mar 2024",
    image: "https://images.unsplash.com/photo-1613214149922-f1809c99e35f?q=80&w=800&auto=format&fit=crop",
    category: "Fontanería"
  },
  {
    id: 4,
    title: "Cuándo llamar a un fontanero urgente",
    excerpt: "Identifica qué averías requieren atención inmediata y cuáles pueden esperar. Guía rápida para emergencias de fontanería en Barcelona.",
    date: "28 Feb 2024",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=800&auto=format&fit=crop",
    category: "Urgencias"
  },
  {
    id: 5,
    title: "Detección de fugas de agua invisibles",
    excerpt: "Aprende a leer tu contador y detectar señales de humedad antes de que se conviertan en un problema estructural grave.",
    date: "20 Feb 2024",
    image: "https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?q=80&w=800&auto=format&fit=crop",
    category: "Mantenimiento"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Instalación Completa de Climatización",
    location: "Barcelona Centro (Eixample)",
    description: "Sustitución de sistema antiguo por conductos con zonificación AirZone. El cliente ahora puede controlar la temperatura de cada habitación independientemente, logrando un ahorro del 30% en energía.",
    image: "https://images.unsplash.com/photo-1534389644772-4f269150b03f?q=80&w=800&auto=format&fit=crop",
    category: "Aire Acondicionado",
    tags: ["Instalación", "Ahorro Energético"]
  },
  {
    id: 2,
    title: "Reforma Integral de Baño",
    location: "Barrio de Gràcia",
    description: "Renovación completa de tuberías de cobre y desagües de PVC. Instalación de sanitarios suspendidos y plato de ducha de resina. Transformación total de un baño de los años 80.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    category: "Reformas",
    tags: ["Fontanería", "Diseño"]
  },
  {
    id: 3,
    title: "Reparación Urgente de Fuga",
    location: "Sarrià-Sant Gervasi",
    description: "Localización de fuga oculta bajo suelo radiante sin necesidad de levantar todo el pavimento. Reparación realizada en menos de 4 horas, evitando daños mayores a la estructura.",
    image: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?q=80&w=800&auto=format&fit=crop",
    category: "Urgencias",
    tags: ["Fugas", "Sin Obras"]
  },
  {
    id: 4,
    title: "Cambio de Caldera Comunitaria",
    location: "Sants",
    description: "Instalación de nueva sala de calderas de alta eficiencia para comunidad de 20 vecinos. Gestión completa de permisos y puesta en marcha según normativa vigente.",
    image: "https://images.unsplash.com/photo-1565105233136-053143c65832?q=80&w=800&auto=format&fit=crop",
    category: "Calefacción",
    tags: ["Comunidades", "Gas"]
  },
  {
    id: 5,
    title: "Desatasco de Bajante Principal",
    location: "Badalona",
    description: "Intervención de urgencia con camión cuba para desatascar la red general de alcantarillado de un edificio. Limpieza preventiva con agua a alta presión para evitar futuros bloqueos.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=800&auto=format&fit=crop",
    category: "Desatascos",
    tags: ["Mantenimiento", "Urgencia"]
  }
];