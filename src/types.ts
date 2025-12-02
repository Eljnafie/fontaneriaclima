import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}