import React from 'react';
import { ChevronRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-brand-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-800 text-brand-100 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-brand-700">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span>Servicio 24h disponible en Barcelona</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Expertos en <span className="text-brand-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">Fontanería</span> y <span className="text-brand-200">Climatización</span>
            </h1>
            <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              ¿Buscas un fontanero barato y de confianza? Ofrecemos reparaciones, instalaciones y mantenimiento en Barcelona con los mejores precios del mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#calculator" 
                className="bg-white text-brand-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Calculadora Inteligente
              </a>
              <a 
                href="tel:+34900000000" 
                className="bg-accent-500 text-white hover:bg-accent-600 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Urgencia 24h
                <ChevronRight size={20} />
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-brand-200 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Sin letra pequeña
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Garantía asegurada
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Abstract Image Representation */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-700/50 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Técnico revisando aire acondicionado" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-bold text-lg">Calidad al mejor precio</p>
                <p className="text-slate-300 text-sm">Líderes en FontaneriaClima</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full">
                <Star className="text-green-600 fill-green-600" size={24} />
              </div>
              <div>
                <p className="text-slate-900 font-bold">4.9/5</p>
                <p className="text-slate-500 text-xs">Valoración Clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;