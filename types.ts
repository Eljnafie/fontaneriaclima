import { LucideIcon } from 'lucide-react';

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

export enum ServiceType {
  REPAIR = 'repair',
  UNCLOG = 'unclog',
  LEAK = 'leak',
  AC_INSTALL = 'ac_install',
  AC_MAINTENANCE = 'ac_maintenance',
  BOILER = 'boiler'
}
