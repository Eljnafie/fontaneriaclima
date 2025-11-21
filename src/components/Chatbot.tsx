import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Bot } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  options?: string[];
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 ¡Hola! Soy el asistente virtual de FontaneriaClima. ¿En qué puedo ayudarte hoy?",
      isBot: true,
      options: ["Tengo una urgencia 🚨", "Pedir presupuesto 💰", "Ver servicios 🔧", "Horarios 🕒"]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleOptionClick = (option: string) => {
    // User message
    const userMsg: Message = { id: Date.now(), text: option, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Bot response logic
    setTimeout(() => {
      let botResponse: Message;
      
      if (option.includes("urgencia")) {
        botResponse = {
          id: Date.now() + 1,
          text: "Entendido, es una urgencia. Por favor, llámanos inmediatamente para enviarte un técnico ahora mismo.",
          isBot: true,
          options: ["Llamar ahora 📞", "Hablar por WhatsApp 💬"]
        };
      } else if (option.includes("presupuesto")) {
        botResponse = {
          id: Date.now() + 1,
          text: "Perfecto. Para darte un precio exacto, puedes usar nuestra calculadora online o dejarnos tus datos.",
          isBot: true,
          options: ["Ir a la Calculadora 🧮", "Reservar cita 📅"]
        };
      } else if (option.includes("Llamar")) {
        window.location.href = `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`;
        botResponse = { id: Date.now() + 1, text: "Llamando...", isBot: true };
      } else if (option.includes("WhatsApp")) {
         window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
         botResponse = { id: Date.now() + 1, text: "Abriendo WhatsApp...", isBot: true };
      } else if (option.includes("Calculadora")) {
        document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
        botResponse = { id: Date.now() + 1, text: "Te llevo a la calculadora.", isBot: true };
      } else if (option.includes("servicios")) {
         document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
         botResponse = { id: Date.now() + 1, text: "Aquí puedes ver lo que hacemos.", isBot: true };
      } else {
        botResponse = {
          id: Date.now() + 1,
          text: "¿Necesitas algo más?",
          isBot: true,
          options: ["Hablar con un humano", "Volver al inicio"]
        };
      }

      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Toggle Button (Only visible when chat is closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 bg-brand-600 hover:bg-brand-700 text-white p-4 rounded-full shadow-xl transition-all transform hover:scale-110 flex items-center gap-2"
        >
          <MessageSquare size={28} />
          <span className="hidden md:inline font-bold">Chat Online</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-[350px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-fade-in-up h-[500px]">
          {/* Header */}
          <div className="bg-brand-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Asistente FontaneriaClima</h3>
                <span className="flex items-center gap-1 text-xs text-green-200">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  En línea
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.isBot 
                    ? 'bg-white text-gray-800 shadow-sm rounded-tl-none border border-gray-100' 
                    : 'bg-brand-600 text-white rounded-tr-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Options / Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            {messages[messages.length - 1].isBot && messages[messages.length - 1].options ? (
              <div className="flex flex-wrap gap-2">
                {messages[messages.length - 1].options!.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className="text-xs bg-brand-50 text-brand-700 border border-brand-200 px-3 py-2 rounded-full hover:bg-brand-100 transition-colors font-medium"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center text-xs text-gray-400 py-2">
                Selecciona una opción arriba para continuar
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;