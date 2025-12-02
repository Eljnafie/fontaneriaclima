import React from 'react';
import { ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <img 
               src="https://picsum.photos/600/800?random=3" 
               alt="Equipo de fontaneros profesionales" 
               className="rounded-2xl shadow-2xl w-full h-auto object-cover"
             />
             <div className="absolute -bottom-6 -right-6 bg-brand-600 text-white p-8 rounded-tl-3xl rounded-br-2xl shadow-xl hidden md:block">
               <p className="text-4xl font-bold mb-1">15+</p>
               <p className="text-sm font-medium opacity-90">Años de experiencia</p>
             </div>
          </div>
          
          <div>
            <h2 className="text-brand-600 font-bold uppercase tracking-wide mb-2">Sobre Nosotros</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tu empresa de confianza en Barcelona</h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              En <strong>FontaneriaClima</strong> nos dedicamos a ofrecer soluciones rápidas y efectivas para tu hogar o negocio. Somos un equipo de fontaneros y técnicos de climatización certificados, comprometidos con precios justos y trato cercano.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Entendemos que una avería puede ocurrir en el momento menos oportuno y afectar a tu economía. Por eso, nuestras tarifas son las más competitivas del mercado y nuestro servicio de urgencias 24h está diseñado para darte tranquilidad sin arruinarte. Operamos en toda el área metropolitana de Barcelona.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="bg-brand-50 text-brand-600 p-2 rounded-lg h-fit">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Garantía Total</h4>
                  <p className="text-sm text-slate-500">Todos nuestros trabajos están garantizados por escrito.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-brand-50 text-brand-600 p-2 rounded-lg h-fit">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Rapidez</h4>
                  <p className="text-sm text-slate-500">Asistencia en menos de 1h para urgencias en Barcelona.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-brand-50 text-brand-600 p-2 rounded-lg h-fit">
                  <ThumbsUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Precios Económicos</h4>
                  <p className="text-sm text-slate-500">Presupuestos ajustados sin sorpresas finales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;