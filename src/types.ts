import type { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  service: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Reemplazamos enum por const object para compatibilidad con erasableSyntaxOnly
export const ServiceType = {
  REPAIR: 'repair',
  UNCLOG: 'unclog',
  LEAK: 'leak',
  AC_INSTALL: 'ac_install',
  AC_MAINTENANCE: 'ac_maintenance',
  BOILER: 'boiler'
} as const;

export type ServiceType = typeof ServiceType[keyof typeof ServiceType];