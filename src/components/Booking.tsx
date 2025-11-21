import React, { useState } from 'react';
import { Calendar, Clock, User, Check } from 'lucide-react';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setStep(2);
  };

  return (
    <section id="reservas" className="py-20 bg-brand-50 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-brand-600 px-8 py-6 text-white text-center">
            <h2 className="text-2xl font-bold">Reserva tu Cita Online</h2>
            <p className="text-brand-100 mt-2">Agenda tu servicio en menos de 1 minuto</p>
          </div>

          <div className="p-8 md:p-10">
            {step === 1 ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service Selection */}
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">¿Qué servicio necesitas?</label>
                    <select
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                      onChange={handleChange}
                    >
                      <option value="">Seleccionar servicio...</option>
                      <option value="reparacion">Reparación Fontanería</option>
                      <option value="aire">Mantenimiento Aire Acondicionado</option>
                      <option value="caldera">Revisión Caldera</option>
                      <option value="fuga">Detección de Fugas</option>
                      <option value="otro">Otro / Consulta</option>
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <Calendar size={16} /> Fecha preferida
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <Clock size={16} /> Hora preferida
                    </label>
                    <select
                      name="time"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none transition-all bg-white"
                      onChange={handleChange}
                    >
                      <option value="">Seleccionar hora...</option>
                      <option value="morning">Mañana (08:00 - 12:00)</option>
                      <option value="midday">Mediodía (12:00 - 15:00)</option>
                      <option value="afternoon">Tarde (15:00 - 19:00)</option>
                    </select>
                  </div>

                  {/* Contact Details */}
                  <div className="col-span-1 md:col-span-2 border-t border-gray-100 pt-6 mt-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <User size={20} className="text-brand-600" /> Tus Datos
                    </h3>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                      placeholder="Juan Pérez"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                      placeholder="600 123 456"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                      placeholder="juan@ejemplo.com"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-colors shadow-lg text-lg"
                  >
                    Confirmar Reserva
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-3">
                    No te cobraremos nada ahora. El pago se realiza al finalizar el servicio.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">¡Reserva Recibida!</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Gracias, <strong>{bookingData.name}</strong>. Hemos recibido tu solicitud de reserva.
                  <br />
                  Te hemos enviado un correo de confirmación a <strong>{bookingData.email}</strong>.
                  <br />
                  Nos pondremos en contacto contigo brevemente para confirmar la hora exacta.
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="text-brand-600 font-bold hover:text-brand-800 underline"
                >
                  Realizar otra reserva
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;