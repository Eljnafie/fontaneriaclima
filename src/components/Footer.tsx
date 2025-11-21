import React from 'react';
import { Facebook, Instagram, Linkedin, Heart } from 'lucide-react';
import { NAV_LINKS, SERVICES, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center text-white font-bold">
                F
              </div>
              <span className="text-xl font-bold text-white">FontaneriaClima</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Servicios profesionales de fontanería y climatización en Barcelona. Calidad, rapidez y garantía en cada trabajo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-brand-400 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#servicios" className="text-sm hover:text-brand-400 transition-colors">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>{CONTACT_INFO.address}</li>
              <li><a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand-400">{CONTACT_INFO.phone}</a></li>
              <li><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-400">{CONTACT_INFO.email}</a></li>
              <li className="text-brand-400 font-semibold">Servicio Urgente 24h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FontaneriaClima Barcelona. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Hecho con <Heart size={14} className="text-red-500 fill-current" /> en Barcelona
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;