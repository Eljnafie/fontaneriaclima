import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
      <a 
        href="https://wa.me/34000000000" 
        target="_blank" 
        rel="noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      <a 
        href="tel:+34900000000"
        className="bg-accent-500 hover:bg-accent-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
        aria-label="Llamar por teléfono"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default FloatingActions;