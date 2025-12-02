import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-2xl mb-4">
               <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">F</div>
               FontaneriaClima
            </div>
            <p className="text-sm text-slate-400">
              Expertos en fontanería y climatización con más de 15 años de experiencia en Barcelona. Precios justos y servicio de calidad.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-brand-400">Fontanería Urgente</a></li>
              <li><a href="#services" className="hover:text-brand-400">Desatascos</a></li>
              <li><a href="#services" className="hover:text-brand-400">Aire Acondicionado</a></li>
              <li><a href="#services" className="hover:text-brand-400">Calderas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-brand-400">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-400">Política de Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Síguenos</h4>
            <p className="text-sm text-slate-400 mb-4">Consejos y ofertas exclusivas en nuestras redes.</p>
            <div className="flex gap-4">
              {/* Fake social icons */}
              <div className="w-8 h-8 bg-slate-700 rounded-full hover:bg-brand-600 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-full hover:bg-brand-600 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-full hover:bg-brand-600 transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
        <div className="pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} FontaneriaClima. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;