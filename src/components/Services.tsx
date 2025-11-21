import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Soluciones Integrales para su Hogar</h3>
          <p className="text-gray-600 text-lg">
            Ofrecemos una amplia gama de servicios de fontanería y climatización realizados por técnicos certificados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-4 right-4 bg-brand-600 p-3 rounded-xl text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <service.icon size={28} />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <a 
                  href="#contacto" 
                  className="inline-block text-brand-600 font-semibold hover:text-brand-800 transition-colors"
                >
                  Solicitar Info &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;