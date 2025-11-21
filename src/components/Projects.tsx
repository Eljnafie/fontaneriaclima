import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Galería de Proyectos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trabajos Realizados</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubra la calidad de nuestros acabados en instalaciones de aire acondicionado, reformas de baños y reparaciones complejas.
          </p>
        </div>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={project.image} 
                    alt={`Proyecto ${project.title}`} 
                    className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                     <span className="text-white font-bold text-lg">Resultado Final</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                  <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wider mb-2">
                    <span className="bg-brand-50 px-3 py-1 rounded-full">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin size={18} className="mr-2 text-brand-500" />
                    <span>{project.location}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Descripción del trabajo:</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        <CheckCircle size={12} className="mr-1 text-green-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contacto" className="inline-block bg-brand-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-700 transition-colors shadow-lg">
            ¿Quiere un resultado similar? Pida Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;