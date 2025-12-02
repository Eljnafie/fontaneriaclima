import React, { useState, useMemo } from 'react';
import { Calculator as CalcIcon, CheckCircle, Wrench, Droplets, Snowflake, Flame, Activity, Clock, Phone, TrendingDown, Zap } from 'lucide-react';
import { CALCULATOR_PRICES } from '../constants';
import { ServiceType } from '../types';

const Calculator: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [urgency, setUrgency] = useState(false);
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');

  const pricingData = useMemo(() => {
    if (!selectedService) return null;
    const serviceData = CALCULATOR_PRICES[selectedService];
    const basePrice = serviceData.base;
    const marketBase = serviceData.marketBase;
    
    let multiplier = 1;

    // Size multiplier
    if (size === 'small') multiplier *= 0.85;
    if (size === 'large') multiplier *= 1.3;

    // Urgency multiplier
    if (urgency) multiplier *= 1.4;

    const finalOurPrice = Math.round(basePrice * multiplier);
    const finalMarketPrice = Math.round(marketBase * multiplier);
    
    const ourMin = Math.round(finalOurPrice * 0.9);
    const ourMax = Math.round(finalOurPrice * 1.1);
    
    const saving = finalMarketPrice - finalOurPrice;
    const savingPercent = Math.round((saving / finalMarketPrice) * 100);

    return {
      min: ourMin,
      max: ourMax,
      avg: finalOurPrice,
      marketAvg: finalMarketPrice,
      saving: saving,
      savingPercent: savingPercent
    };
  }, [selectedService, urgency, size]);

  const getIcon = (type: ServiceType) => {
    switch(type) {
      case ServiceType.REPAIR: return Wrench;
      case ServiceType.UNCLOG: return Activity;
      case ServiceType.LEAK: return Droplets;
      case ServiceType.AC_INSTALL: return Snowflake;
      case ServiceType.AC_MAINTENANCE: return Snowflake;
      case ServiceType.BOILER: return Flame;
      default: return Wrench;
    }
  }

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-brand-900 to-brand-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-800/50 border border-brand-700 px-4 py-1.5 rounded-full text-accent-400 text-sm font-bold mb-4">
            <Zap size={16} />
            <span>Algoritmo de Precios Justos™</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Calculadora Inteligente</h3>
          <p className="text-brand-100 max-w-2xl mx-auto text-lg">
            Comparamos nuestros precios con la media del mercado en Barcelona para mostrarte tu ahorro real.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Panel: Inputs */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-2xl text-slate-800">
             
             {/* Step 1 */}
             <div className="mb-8">
               <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800">
                 <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                 Selecciona el servicio
               </h4>
               
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.entries(CALCULATOR_PRICES).map(([key, value]) => {
                    const Icon = getIcon(key as ServiceType);
                    const isSelected = selectedService === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedService(key as ServiceType)}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 h-full ${
                          isSelected 
                          ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-inner ring-1 ring-brand-500' 
                          : 'border-slate-100 hover:border-brand-200 hover:bg-slate-50 text-slate-500'
                        }`}
                      >
                        <Icon size={28} className={`mb-3 ${isSelected ? 'text-brand-600' : 'text-slate-400'}`} />
                        <span className="text-xs sm:text-sm font-bold text-center leading-tight">{value.label}</span>
                      </button>
                    )
                  })}
               </div>
             </div>

             {/* Step 2 & 3 */}
             <div className={`grid md:grid-cols-2 gap-6 transition-opacity duration-500 ${selectedService ? 'opacity-100' : 'opacity-40 pointer-events-none filter blur-[1px]'}`}>
                <div>
                  <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-slate-800">
                    <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Tamaño / Complejidad
                  </h4>
                  <div className="space-y-2">
                    {[
                      { id: 'small', label: 'Pequeño / Básico', desc: 'Mantenimiento simple, 1 unidad' },
                      { id: 'medium', label: 'Estándar', desc: 'Reparación normal, vivienda media' },
                      { id: 'large', label: 'Grande / Complejo', desc: 'Instalación completa, local' }
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSize(option.id as any)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center justify-between ${
                          size === option.id 
                          ? 'border-brand-500 bg-brand-50 text-brand-900 ring-1 ring-brand-500' 
                          : 'border-slate-100 hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        <div>
                          <span className="block font-bold text-sm">{option.label}</span>
                          <span className="block text-xs text-slate-400">{option.desc}</span>
                        </div>
                        {size === option.id && <CheckCircle size={18} className="text-brand-600" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-slate-800">
                    <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    ¿Es Urgente?
                  </h4>
                  <div className="flex flex-col gap-3 h-full">
                    <button
                      onClick={() => setUrgency(false)}
                      className={`flex-1 rounded-xl border-2 p-4 flex items-center gap-3 transition-all ${
                        !urgency
                        ? 'border-brand-500 bg-brand-50 text-brand-900 ring-1 ring-brand-500'
                        : 'border-slate-100 hover:bg-slate-50 text-slate-500'
                      }`}
                    >
                      <Clock size={20} />
                      <div className="text-left">
                        <span className="block font-bold text-sm">No es urgente</span>
                        <span className="block text-xs opacity-70">Horario laboral flexible</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setUrgency(true)}
                      className={`flex-1 rounded-xl border-2 p-4 flex items-center gap-3 transition-all ${
                        urgency
                        ? 'border-accent-500 bg-accent-50 text-accent-800 ring-1 ring-accent-500'
                        : 'border-slate-100 hover:bg-slate-50 text-slate-500'
                      }`}
                    >
                      <Zap size={20} className={urgency ? "text-accent-600 fill-accent-600" : ""} />
                      <div className="text-left">
                        <span className="block font-bold text-sm">¡Sí, es urgente!</span>
                        <span className="block text-xs opacity-70">Prioridad inmediata 24h</span>
                      </div>
                    </button>
                  </div>
                </div>
             </div>
          </div>

          {/* Right Panel: Smart Analysis */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-6 md:p-8 h-full border border-white/10 flex flex-col relative overflow-hidden group">
               
               {pricingData && selectedService ? (
                 <div className="flex flex-col h-full justify-between animate-fadeIn">
                    
                    {/* Savings Badge */}
                    <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-6 flex items-center gap-4 animate-pulse-slow">
                      <div className="bg-green-500 p-2 rounded-full text-white">
                        <TrendingDown size={24} />
                      </div>
                      <div>
                        <p className="text-green-300 text-sm font-bold uppercase tracking-wider">Ahorro detectado</p>
                        <p className="text-white font-bold">Ahorras un {pricingData.savingPercent}% vs. media del mercado</p>
                      </div>
                    </div>

                    <div className="text-center mb-8">
                      <div className="text-slate-400 text-lg line-through decoration-red-500 decoration-2 mb-1">
                        Media Mercado: {pricingData.marketAvg}€
                      </div>
                      <div className="text-6xl font-extrabold text-white tracking-tight mb-2">
                        {pricingData.min}€
                        <span className="text-3xl text-brand-400 font-normal align-top">+</span>
                      </div>
                      <p className="text-brand-200 text-sm font-medium">
                        Precio estimado FontaneriaClima
                      </p>
                    </div>

                    <div className="space-y-3 mb-8 bg-white/5 p-4 rounded-xl text-sm text-slate-300">
                       <div className="flex justify-between">
                         <span>Concepto Base</span>
                         <span className="text-white font-medium">{CALCULATOR_PRICES[selectedService].label}</span>
                       </div>
                       <div className="flex justify-between">
                         <span>Nivel Urgencia</span>
                         <span className={urgency ? "text-accent-400 font-bold" : "text-white"}>{urgency ? "Inmediata" : "Estándar"}</span>
                       </div>
                       <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                         <span className="text-green-400 font-bold">Tu Ahorro Total</span>
                         <span className="text-green-400 font-bold text-lg">-{pricingData.saving}€</span>
                       </div>
                    </div>

                    <div className="mt-auto">
                      <button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent-500/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-lg">
                        <Phone size={22} />
                        Solicitar este presupuesto
                      </button>
                      <p className="text-center text-xs text-slate-400 mt-4">
                        *El precio final puede variar tras la inspección técnica. Sin compromiso.
                      </p>
                    </div>
                 </div>
               ) : (
                 <div className="flex flex-col items-center justify-center h-full text-center text-brand-200/50 py-12">
                   <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6">
                      <CalcIcon size={48} strokeWidth={1.5} />
                   </div>
                   <h5 className="text-xl font-bold text-white mb-2">Esperando datos...</h5>
                   <p className="max-w-xs mx-auto">Selecciona un servicio en el panel izquierdo para que nuestra IA calcule el mejor precio para ti.</p>
                 </div>
               )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;
