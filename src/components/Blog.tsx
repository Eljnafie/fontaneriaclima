import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Nuestro Blog</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Consejos de Expertos</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Manténgase informado con nuestros artículos sobre mantenimiento, ahorro energético y soluciones para su hogar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={14} className="mr-2" />
                  {post.date}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-brand-600 transition-colors">
                  <a href="#">{post.title}</a>
                </h2>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-brand-600 font-semibold text-sm hover:text-brand-800 transition-colors mt-auto"
                >
                  Leer artículo completo <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;