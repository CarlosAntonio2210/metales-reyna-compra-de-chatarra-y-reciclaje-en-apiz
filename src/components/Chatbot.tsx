import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  text: string;
  sender: 'bot' | 'user';
};

const QUICK_REPLIES = [
  "¿Qué materiales compran?",
  "¿Cuáles son sus precios?",
  "¿Tienen recolección a domicilio?",
  "¿Cuáles son sus horarios?"
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: '¡Hola! Bienvenido a Recuperadora Reyna ♻️. ¿En qué te puedo ayudar hoy?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (input: string) => {
    const lower = input.toLowerCase();
    if (lower.includes('precio') || lower.includes('cuánto') || lower.includes('cuanto')) return "Nuestros precios varían según el mercado, pero garantizamos el mejor pago de la zona. ¿De qué material te gustaría saber el precio?";
    if (lower.includes('material') || lower.includes('compran')) return "Compramos chatarra, fierro viejo, cartón, papel, cobre, aluminio, bronce, baterías y radiadores.";
    if (lower.includes('domicilio') || lower.includes('recolección') || lower.includes('recogen')) return "Sí, contamos con servicio de recolección a domicilio para volúmenes grandes. ¿Qué cantidad aproximada tienes?";
    if (lower.includes('horario') || lower.includes('hora') || lower.includes('abierto')) return "Abrimos de Lunes a Viernes de 8:00 am a 6:00 pm, y los Sábados de 8:00 am a 3:00 pm.";
    if (lower.includes('ubicación') || lower.includes('dónde') || lower.includes('donde') || lower.includes('direccion')) return "Tenemos 2 sucursales en Apizaco: 1. Centro (Blvrd E. Sánchez Piedras 909) y 2. San Isidro (CV7J+53Q Col. San Isidro).";
    if (lower.includes('factura') || lower.includes('facturación') || lower.includes('facturacion')) return "Sí, contamos con facturación disponible para empresas y negocios por sus materiales.";
    if (lower.includes('cobre')) return "El cobre es uno de los metales mejor pagados. Trae tu material limpio para obtener el mejor precio.";
    if (lower.includes('aluminio')) return "Compramos aluminio en todas sus presentaciones: botes, perfil, cárter, etc.";
    if (lower.includes('carton') || lower.includes('cartón')) return "Compramos cartón y papel. Te recomendamos traerlo seco y amarrado para facilitar su pesaje.";
    if (lower.includes('chatarra') || lower.includes('fierro')) return "Compramos fierro viejo y chatarra en general. Contamos con báscula certificada para tu seguridad.";
    if (lower.includes('pago') || lower.includes('pagan')) return "Pagamos en efectivo al instante, con peso exacto y certificado a la vista.";
    return "Para darte una atención más precisa, te invitamos a contactarnos por WhatsApp o llamarnos directamente al +52 241 411 5650.";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const newUserMsg: Message = { id: Date.now().toString(), text, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const responseText = getBotResponse(text);
      const newBotMsg: Message = { id: (Date.now() + 1).toString(), text: responseText, sender: 'bot' };
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-24 z-50 bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:bg-blue-800 transition-colors flex items-center justify-center group"
            aria-label="Abrir chat"
          >
            <Bot size={28} />
            <span className="absolute right-16 bg-white text-slate-800 text-sm font-bold px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              ¿Dudas? ¡Pregúntame!
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 md:right-24 z-50 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-700 text-white p-4 flex items-center justify-between shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Bot size={20} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-blue-700 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold leading-tight">Asistente Reyna</h3>
                  <p className="text-xs text-blue-100">Responde 24/7</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-blue-100 hover:text-white transition-colors p-1">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 bg-slate-50 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 text-sm shadow-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none p-4 shadow-sm flex gap-1">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-blue-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-blue-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length < 3 && !isTyping && (
              <div className="px-4 py-2 bg-slate-50 flex gap-2 overflow-x-auto pb-3 custom-scrollbar">
                {QUICK_REPLIES.map((reply, i) => (
                  <button key={i} onClick={() => handleSend(reply)} className="whitespace-nowrap bg-white border border-blue-200 text-blue-700 text-xs px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors">
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-100">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-grow px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} className="ml-0.5" />
                </button>
              </form>
              <div className="mt-2 text-center">
                <a href="tel:+522414115650" className="text-xs text-slate-400 hover:text-blue-600 flex items-center justify-center gap-1 transition-colors">
                  <Phone size={10} /> Hablar con un humano
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};