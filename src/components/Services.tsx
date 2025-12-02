import React from 'react';
import { SERVICES } from '../../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold uppercase tracking-wide mb-2">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Soluciones Integrales para tu Hogar</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ofrecemos un servicio completo de fontanería y climatización. Desde pequeñas reparaciones hasta grandes instalaciones, estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <a href="#contact" className="text-brand-600 font-semibold text-sm hover:text-brand-800 flex items-center gap-1">
                Solicitar info <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;