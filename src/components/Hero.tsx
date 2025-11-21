import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-20 lg:pt-24 pb-16 lg:pb-32 flex items-center min-h-screen lg:min-h-[800px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581241309004-775577add294?q=80&w=2070&auto=format&fit=crop" 
          alt="Fontanero profesional trabajando" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 animate-fade-in-up">
            ¡Servicio 24 Horas en Barcelona!
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Expertos en <span className="text-brand-400">Fontanería</span> y <span className="text-blue-300">Climatización</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Bienvenido a <strong>FontaneriaClima</strong>. Soluciones rápidas y profesionales para tu hogar o negocio. Desde fugas urgentes hasta instalaciones completas de aire acondicionado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone size={24} />
              Llamar Ahora
            </a>
            <a 
              href="#calculadora"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              Calcular Precio
              <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-gray-300 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Atención Inmediata
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Mejor Precio Garantizado
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Garantía por escrito
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;