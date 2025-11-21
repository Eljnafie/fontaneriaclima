import React from 'react';
import { CheckCircle, ShieldCheck, Award, Users } from 'lucide-react';

const features = [
  {
    name: 'Profesionales Certificados',
    description: 'Todo nuestro equipo cuenta con las titulaciones oficiales y formación continua.',
    icon: Award,
  },
  {
    name: 'Garantía de Calidad',
    description: 'Ofrecemos garantía por escrito en todas nuestras reparaciones e instalaciones.',
    icon: ShieldCheck,
  },
  {
    name: 'Trato Cercano',
    description: 'Somos una empresa local comprometida con la satisfacción de nuestros vecinos.',
    icon: Users,
  },
  {
    name: 'Precio Justo',
    description: 'Presupuestos claros y sin sorpresas. Calidad al mejor precio del mercado.',
    icon: CheckCircle,
  },
];

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                alt="Equipo de fontaneros"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-600 text-white p-8 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-sm font-medium uppercase tracking-wider">Años de Experiencia</p>
            </div>
          </div>

          <div>
            <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Sobre Nosotros</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Su fontanero de confianza en Barcelona</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Fundada en el corazón de Barcelona, nuestra empresa se ha convertido en un referente del sector gracias a nuestro compromiso con la excelencia. Entendemos que los problemas de fontanería y climatización no pueden esperar, por eso hemos diseñado un servicio ágil y eficiente.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-start">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-bold text-gray-900">{feature.name}</h4>
                    <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contacto"
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Conoce al Equipo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;