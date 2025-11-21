import React from 'react';
import { MapPin } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

const ServiceArea: React.FC = () => {
  return (
    <section id="area" className="py-20 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-brand-400 font-bold tracking-wide uppercase text-sm mb-2">Dónde Trabajamos</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Área de Servicio</h3>
            <p className="text-gray-300 text-lg mb-8">
              Prestamos servicio en toda el área metropolitana de Barcelona. Nuestros técnicos están estratégicamente ubicados para garantizar tiempos de respuesta mínimos.
            </p>
            
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                <MapPin className="text-brand-400" />
                Cobertura Principal
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_AREAS.map((area, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="mt-6 text-sm text-gray-400 italic">
              * Si tu localidad no aparece en la lista, contáctanos. Es probable que también lleguemos a tu zona.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800">
             {/* Placeholder for an interactive map - using a static image representing a map for optimal performance and no API key requirement */}
             <img 
               src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1931&auto=format&fit=crop" 
               alt="Mapa de Barcelona" 
               className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"
             />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-brand-600/90 backdrop-blur-sm p-4 rounded-xl text-center animate-pulse">
                   <MapPin size={40} className="mx-auto mb-2 text-white" />
                   <span className="font-bold text-xl">Sede Central<br/>Barcelona</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;