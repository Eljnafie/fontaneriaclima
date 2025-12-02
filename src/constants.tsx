import { Wrench, Droplets, Snowflake, Flame, Activity, Clock } from 'lucide-react';
import { ServiceType } from './types';
import type { ServiceItem, Testimonial, FaqItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'repair',
    title: 'Reparaciones Generales',
    description: 'Solución a grifos que gotean, cisternas rotas y tuberías ruidosas. Servicio rápido y limpio en Barcelona.',
    icon: Wrench
  },
  {
    id: 'unclog',
    title: 'Desatascos',
    description: 'Eliminamos atascos en fregaderos, duchas y tuberías principales con maquinaria especializada.',
    icon: Activity
  },
  {
    id: 'leaks',
    title: 'Detección de Fugas',
    description: 'Localizamos y reparamos fugas de agua invisibles para evitar daños mayores y ahorrar en tu factura.',
    icon: Droplets
  },
  {
    id: 'ac',
    title: 'Aire Acondicionado',
    description: 'Instalación, carga de gas y mantenimiento de splits y conductos. Prepara tu hogar para el calor.',
    icon: Snowflake
  },
  {
    id: 'heating',
    title: 'Calderas y Termos',
    description: 'Instalación y revisión de calderas de gas, termos eléctricos y radiadores para un invierno cálido.',
    icon: Flame
  },
  {
    id: 'emergency',
    title: 'Urgencias 24h',
    description: 'Disponibles las 24 horas, los 365 días del año para averías que no pueden esperar.',
    icon: Clock
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    location: "Barcelona (Eixample)",
    service: "Reparación de Fuga",
    text: "Increíble rapidez. Tenía una fuga en el baño un domingo por la noche y llegaron en menos de una hora. Muy profesionales y dejaron todo limpio.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    location: "Badalona",
    service: "Instalación Aire Acondicionado",
    text: "Me asesoraron sobre qué equipo instalar para mi salón. El precio fue muy competitivo, más barato que otros presupuestos, y la instalación quedó impecable.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena M.",
    location: "Sant Cugat",
    service: "Desatasco Urgente",
    text: "Profesionalidad total. Solucionaron un atasco recurrente que otros fontaneros no habían logrado arreglar. Muy amables y transparentes con el precio.",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Cobráis desplazamiento?",
    answer: "El desplazamiento es gratuito si aceptas el presupuesto de la reparación. En caso contrario, se cobra una tarifa mínima reducida por el diagnóstico en Barcelona."
  },
  {
    question: "¿Ofrecéis garantía en las reparaciones?",
    answer: "Sí, todas nuestras reparaciones e instalaciones cuentan con una garantía de 6 meses a 2 años, dependiendo del tipo de servicio y materiales."
  },
  {
    question: "¿Atendéis urgencias de madrugada?",
    answer: "Sí, nuestro servicio de urgencias está activo 24 horas al día, 7 días a la semana, incluidos festivos."
  },
  {
    question: "¿Hacéis presupuestos sin compromiso?",
    answer: "Puedes solicitar un presupuesto aproximado online a través de nuestra calculadora inteligente. Para precio cerrado, realizamos visita técnica."
  }
];

// Precios ajustados para ser muy competitivos y comparativa de mercado
export const CALCULATOR_PRICES: Record<ServiceType, { base: number, label: string, marketBase: number }> = {
  [ServiceType.REPAIR]: { base: 40, label: "Reparación General", marketBase: 85 },
  [ServiceType.UNCLOG]: { base: 60, label: "Desatasco", marketBase: 120 },
  [ServiceType.LEAK]: { base: 85, label: "Detección y Reparación", marketBase: 160 },
  [ServiceType.AC_INSTALL]: { base: 180, label: "Instalación A/A (Mano de obra)", marketBase: 350 },
  [ServiceType.AC_MAINTENANCE]: { base: 49, label: "Mantenimiento Aire", marketBase: 95 },
  [ServiceType.BOILER]: { base: 140, label: "Instalación Caldera (Mano de obra)", marketBase: 280 }
};