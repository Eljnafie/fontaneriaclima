import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 bg-brand-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-400 font-bold tracking-wide uppercase text-sm mb-2">Contacto</h2>
            <h3 className="text-4xl font-bold mb-6">¿Hablamos?</h3>
            <p className="text-gray-300 mb-10 text-lg">
              Pida su presupuesto sin compromiso o llámenos para una urgencia. Estamos aquí para ayudarle.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-800 p-3 rounded-lg">
                  <Phone className="text-brand-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Teléfono</h4>
                  <p className="text-gray-300 mb-1">Atención al cliente y urgencias</p>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-2xl font-bold hover:text-brand-400 transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-800 p-3 rounded-lg">
                  <Mail className="text-brand-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-300">Para presupuestos detallados</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg hover:text-brand-400 transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-800 p-3 rounded-lg">
                  <MapPin className="text-brand-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ubicación</h4>
                  <p className="text-gray-300">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-800 p-3 rounded-lg">
                  <Clock className="text-brand-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horario</h4>
                  <p className="text-gray-300">{CONTACT_INFO.schedule}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-xl">
            <h4 className="text-2xl font-bold mb-6">Envíenos un mensaje</h4>
            
            {formStatus === 'success' ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-12 rounded-lg text-center">
                <p className="font-bold text-xl mb-2">¡Mensaje Enviado!</p>
                <p>Nos pondremos en contacto con usted lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="600 000 000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Servicio</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Seleccione una opción...</option>
                    <option value="reparacion">Reparación General</option>
                    <option value="urgencia">Urgencia 24h</option>
                    <option value="aire">Aire Acondicionado</option>
                    <option value="caldera">Caldera/Termo</option>
                    <option value="presupuesto">Solicitar Presupuesto</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="Describa brevemente qué necesita..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 ${formStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Solicitud'}
                  {!formStatus && <Send size={20} />}
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  Al enviar este formulario, acepta nuestra política de privacidad. Sus datos están seguros con nosotros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;