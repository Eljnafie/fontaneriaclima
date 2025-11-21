import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Lo que dicen nuestros clientes</h2>
          <div className="w-20 h-1 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow">
              <Quote className="absolute top-6 right-6 text-brand-200 w-10 h-10" />
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < item.rating ? "currentColor" : "none"} className={i < item.rating ? "" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic relative z-10">"{item.text}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;