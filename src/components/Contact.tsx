import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-600 font-bold uppercase tracking-wide mb-2">Contacto</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Estamos cerca de ti</h3>
            <p className="text-slate-600 mb-8">
              ¿Tienes una urgencia o necesitas un presupuesto económico? Contáctanos por teléfono, WhatsApp o rellena el formulario. Respondemos rápidamente.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Llámanos</h4>
                  <p className="text-slate-600 mb-1">Urgencias 24h: <a href="tel:900000000" className="text-brand-600 font-bold">900 000 000</a></p>
                  <p className="text-slate-600">Oficina: 930 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Área de Servicio</h4>
                  <p className="text-slate-600">Barcelona capital, L'Hospitalet, Badalona, Santa Coloma, Sant Cugat, Terrassa, Sabadell y alrededores.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Horario</h4>
                  <p className="text-slate-600">Urgencias: 24 horas / 365 días</p>
                  <p className="text-slate-600">Oficina: L-V 9:00 - 19:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600">info@fontaneriaclima.es</p>
                </div>
              </div>
            </div>

            {/* Placeholder Map */}
            <div className="mt-8 h-64 bg-slate-200 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                    Mapa Área Barcelona
                </div>
                 <img src="https://picsum.photos/600/300?blur=2" className="w-full h-full object-cover opacity-50" alt="Mapa Barcelona" />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un mensaje</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                  <input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                  <input type="tel" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Tu teléfono" />
                </div>
              </div>
              <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Servicio</label>
                <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none bg-white">
                  <option>Fontanería General</option>
                  <option>Aire Acondicionado</option>
                  <option>Calefacción / Calderas</option>
                  <option>Urgencia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                <textarea className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none h-32" placeholder="Describe tu problema..."></textarea>
              </div>
              
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <p className="text-xs text-slate-500">Acepto la política de privacidad y el tratamiento de mis datos para recibir respuesta.</p>
              </div>

              <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;