import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-600 font-bold uppercase tracking-wide mb-2">Blog & Consejos</h2>
          <h3 className="text-3xl font-bold text-slate-900">Novedades del Sector</h3>
        </div>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="h-64 sm:h-80 overflow-hidden relative">
             <img 
                src="https://picsum.photos/800/400?random=2" 
                alt="Mantenimiento aire acondicionado" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                Aire Acondicionado
              </div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>15 Mayo, 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>Equipo FontaneriaClima</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={16} />
                <span>Consejos, Mantenimiento</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-slate-900 mb-6">
              5 consejos para mantener tu sistema de aire acondicionado en óptimas condiciones este verano
            </h1>

            <div className="prose prose-lg text-slate-600 max-w-none">
              <p className="mb-4">
                Con la llegada del calor, todos queremos que nuestro hogar sea un refugio fresco. Sin embargo, muchas veces encendemos el aire acondicionado después de meses inactivo y nos encontramos con sorpresas desagradables. Para evitarlo, aquí tienes 5 consejos esenciales:
              </p>

              <div className="space-y-6 mt-8">
                <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-500">
                  <h3 className="text-xl font-bold text-brand-800 mb-2">1. Limpia los filtros regularmente</h3>
                  <p>Los filtros sucios obstruyen el flujo de aire y reducen la eficiencia del sistema. Lávalos con agua tibia y jabón neutro cada 2 semanas durante el uso intensivo.</p>
                </div>

                <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-500">
                  <h3 className="text-xl font-bold text-brand-800 mb-2">2. Revisa la unidad exterior</h3>
                  <p>Asegúrate de que no haya hojas, polvo o suciedad bloqueando la ventilación de la unidad externa. Un buen flujo de aire es vital para el intercambio de calor.</p>
                </div>

                <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-500">
                  <h3 className="text-xl font-bold text-brand-800 mb-2">3. Comprueba el desagüe</h3>
                  <p>Un desagüe obstruido puede provocar goteos de agua dentro de casa. Verifica que el tubo no esté doblado ni taponado por suciedad.</p>
                </div>

                <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-500">
                  <h3 className="text-xl font-bold text-brand-800 mb-2">4. Controla el termostato</h3>
                  <p>No bajes la temperatura al mínimo al encenderlo. Mantenerlo entre 24ºC y 26ºC es suficiente para el confort y ahorra mucha energía.</p>
                </div>

                <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-500">
                  <h3 className="text-xl font-bold text-brand-800 mb-2">5. Programa una revisión profesional</h3>
                  <p>Al menos una vez al año, es recomendable que un técnico revise la carga de gas y los componentes eléctricos para prevenir averías graves.</p>
                </div>
              </div>

              <div className="mt-10 p-8 bg-slate-900 text-white rounded-xl text-center">
                <p className="text-xl font-bold mb-4">¿Necesitas ayuda con tu aire acondicionado?</p>
                <p className="mb-6 text-slate-300">No esperes a que llegue la ola de calor. Nuestros precios de mantenimiento son los más bajos de la zona.</p>
                <a href="#contact" className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Solicitar Revisión Ahora
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Blog;