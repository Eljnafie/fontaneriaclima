import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold uppercase tracking-wide mb-2">Opiniones</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Lo que dicen nuestros clientes</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 relative">
              <Quote className="absolute top-6 right-6 text-brand-100 w-10 h-10" />
              
              <div className="flex items-center mb-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"} 
                  />
                ))}
              </div>

              <p className="text-slate-600 mb-6 italic leading-relaxed">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                   <img src={`https://picsum.photos/100/100?random=${t.id + 10}`} alt={t.name} className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <p className="font-bold text-slate-900">{t.name}</p>
                   <p className="text-xs text-brand-600 font-semibold uppercase">{t.service}</p>
                   <p className="text-xs text-slate-400">{t.location}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;