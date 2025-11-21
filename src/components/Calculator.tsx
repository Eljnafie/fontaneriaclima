import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, RefreshCw, CheckCircle, TrendingDown } from 'lucide-react';

const Calculator: React.FC = () => {
  const [serviceType, setServiceType] = useState('general');
  const [urgency, setUrgency] = useState('normal');
  const [complexity, setComplexity] = useState('standard');
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<{ myPrice: number; marketPrice: number } | null>(null);

  // Simulación de cálculo inteligente
  const calculatePrice = () => {
    setCalculating(true);
    setResult(null);

    // Base prices
    let base = 50;
    let marketBase = 80;

    // Service multipliers
    const serviceMultipliers: Record<string, number> = {
      general: 1.0,
      desatasco: 1.2,
      fuga: 1.5,
      aire: 2.5,
      caldera: 2.0
    };

    // Urgency multipliers
    const urgencyMultipliers: Record<string, number> = {
      normal: 1.0,
      urgente: 1.6
    };

    // Complexity multipliers
    const complexityMultipliers: Record<string, number> = {
      simple: 0.8,
      standard: 1.0,
      complejo: 1.5
    };

    const multiplier = (serviceMultipliers[serviceType] || 1) * 
                       (urgencyMultipliers[urgency] || 1) * 
                       (complexityMultipliers[complexity] || 1);

    setTimeout(() => {
      const myEstimated = Math.round(base * multiplier);
      const marketEstimated = Math.round(marketBase * multiplier * 1.2); // Market is significantly higher
      setResult({ myPrice: myEstimated, marketPrice: marketEstimated });
      setCalculating(false);
    }, 800);
  };

  useEffect(() => {
    calculatePrice();
  }, [serviceType, urgency, complexity]);

  return (
    <section id="calculadora" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Precios Claros</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculadora de Presupuesto Inteligente</h3>
          <p className="text-gray-600 text-lg">
            Obtén una estimación instantánea y comprueba cómo en <strong>FontaneriaClima</strong> te ayudamos a ahorrar sin sacrificar calidad.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-brand-600 p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CalcIcon className="h-8 w-8" />
              <h4 className="text-xl font-bold">Estimador de Costes</h4>
            </div>
            <span className="bg-brand-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Ahorro Garantizado
            </span>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Servicio</label>
                <select 
                  value={serviceType} 
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none"
                >
                  <option value="general">Fontanería General (Grifos, etc.)</option>
                  <option value="desatasco">Desatasco</option>
                  <option value="fuga">Detección/Reparación de Fugas</option>
                  <option value="aire">Aire Acondicionado</option>
                  <option value="caldera">Calderas y Termos</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Urgencia</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setUrgency('normal')}
                    className={`p-3 rounded-lg border text-center transition-all ${urgency === 'normal' ? 'bg-brand-50 border-brand-500 text-brand-700 font-bold ring-2 ring-brand-200' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    Estándar
                  </button>
                  <button 
                    onClick={() => setUrgency('urgente')}
                    className={`p-3 rounded-lg border text-center transition-all ${urgency === 'urgente' ? 'bg-red-50 border-red-500 text-red-700 font-bold ring-2 ring-red-200' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    Urgente 24h
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Magnitud del Trabajo</label>
                <div className="flex justify-between gap-2 bg-gray-100 p-1 rounded-lg">
                  {['simple', 'standard', 'complejo'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setComplexity(level)}
                      className={`flex-1 py-2 rounded-md text-sm font-medium capitalize transition-all ${complexity === level ? 'bg-white shadow-sm text-brand-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Display */}
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center items-center relative">
              {calculating ? (
                <div className="text-center">
                  <RefreshCw className="animate-spin h-10 w-10 text-brand-500 mx-auto mb-4" />
                  <p className="text-gray-500">Calculando mejor precio...</p>
                </div>
              ) : result ? (
                <div className="w-full">
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Media del Mercado</span>
                      <span className="line-through decoration-red-400">{result.marketPrice}€</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>

                    <div className="flex justify-between text-lg font-bold text-brand-800 mb-1">
                      <span>Precio FontaneriaClima</span>
                      <span className="text-2xl">{result.myPrice}€*</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-brand-500 h-4 rounded-full transition-all duration-1000 ease-out relative" style={{ width: `${(result.myPrice / result.marketPrice) * 100}%` }}>
                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center shadow-sm">
                          <TrendingDown size={10} className="mr-1" /> -{Math.round((1 - result.myPrice / result.marketPrice) * 100)}%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                    <p className="flex items-start gap-2 text-green-800 text-sm">
                      <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Este precio incluye desplazamiento (en horario laboral), mano de obra e IVA. Materiales aparte.</span>
                    </p>
                  </div>

                  <a 
                    href="#reservas" 
                    className="block w-full bg-brand-600 hover:bg-brand-700 text-white text-center font-bold py-3 rounded-lg transition-colors shadow-lg"
                  >
                    Reservar por este precio
                  </a>
                  <p className="text-xs text-center text-gray-400 mt-3">*Estimación aproximada sujeta a valoración técnica in situ.</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;