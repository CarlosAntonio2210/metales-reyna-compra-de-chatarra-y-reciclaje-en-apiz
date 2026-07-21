import React from 'react';
import { Phone, MapPin, Clock, Menu, X, MessageCircle, Facebook, Instagram } from 'lucide-react';

const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const getWhatsAppUrl = () => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'buenos días' : hour < 19 ? 'buenas tardes' : 'buenas noches';
    const message = `Hola, ${greeting}, me podría dar más información de favor.`;
    return `https://wa.me/522414115650?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={16} /> +52 241 411 5650</span>
            <span className="flex items-center gap-2"><MapPin size={16} /> Apizaco, Tlaxcala</span>
            <span className="flex items-center gap-2"><Clock size={16} /> Lun-Vie 8:00-18:00 | Sáb 8:00-15:00</span>
          </div>
          <div className="flex gap-4 font-semibold text-emerald-400 items-center">
            <span className="hidden md:inline">✓ Pago Inmediato</span>
            <span className="hidden md:inline">✓ Facturación</span>
            <div className="flex gap-4 items-center ml-2 border-l border-blue-800 pl-4">
              <a href="https://www.facebook.com/profile.php?id=61592047799343&mibextid=wwXIfr&rdid=MGaKXX5V8ziAUTmv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HUaQG1PhF%2F%3Fmibextid%3DwwXIfr#" className="bg-blue-800/50 hover:bg-blue-600 text-blue-200 hover:text-white p-1.5 rounded-md transition-all shadow-sm" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/reynarecuperadora?igsh=djZ6NXdiaG42Y2V6&utm_source=qr" className="bg-blue-800/50 hover:bg-pink-600 text-blue-200 hover:text-white p-1.5 rounded-md transition-all shadow-sm" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://www.tiktok.com/@recuperadora.dmet?_r=1&_t=ZS-988evx7SFYj" className="bg-blue-800/50 hover:bg-slate-700 text-blue-200 hover:text-white p-1.5 rounded-md transition-all shadow-sm" aria-label="TikTok"><TikTokIcon size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <img src="/uploads/upload_1.jpeg" alt="Recuperadora de Metales Reyna Logo" className="h-12 w-12 rounded-full object-cover border-2 border-blue-700" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-blue-900 leading-tight">Metales Reyna</span>
                <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Reciclaje y Chatarra</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">Servicios</a>
              <a href="#materiales" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">Materiales</a>
              <a href="#sucursales" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">Sucursales</a>
              <div className="flex gap-3">
                <a href="tel:+522414115650" className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded-lg font-medium transition-colors">
                  <Phone size={18} /> Llamar
                </a>
                <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-emerald-600/20">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Servicios</a>
              <a href="#materiales" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Materiales</a>
              <a href="#sucursales" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Sucursales</a>
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100">
                <a href="tel:+522414115650" className="flex justify-center items-center gap-2 bg-slate-100 text-slate-800 px-4 py-3 rounded-lg font-medium">
                  <Phone size={18} /> Llamar
                </a>
                <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-lg font-medium">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href={getWhatsAppUrl()} 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 left-6 z-40 bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-500 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute left-16 bg-white text-slate-800 text-sm font-bold px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¡Cotiza ahora!
        </span>
      </a>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/uploads/upload_1.jpeg" alt="Logo" className="h-10 w-10 rounded-full grayscale opacity-80" />
                <span className="font-bold text-xl text-white">Metales Reyna</span>
              </div>
              <p className="text-sm mb-6">Empresa líder en Apizaco dedicada al reciclaje, compra y venta de chatarra, cartón y metales. Comprometidos con el medio ambiente y el mejor servicio.</p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61592047799343&mibextid=wwXIfr&rdid=MGaKXX5V8ziAUTmv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HUaQG1PhF%2F%3Fmibextid%3DwwXIfr#" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="https://www.instagram.com/reynarecuperadora?igsh=djZ6NXdiaG42Y2V6&utm_source=qr" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-white hover:bg-pink-600 transition-all" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="https://www.tiktok.com/@recuperadora.dmet?_r=1&_t=ZS-988evx7SFYj" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all" aria-label="TikTok"><TikTokIcon size={20} /></a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Phone size={16} className="text-blue-500"/> +52 241 411 5650</li>
                <li className="flex gap-2"><MapPin size={16} className="text-blue-500 shrink-0 mt-1"/> <span>Blvrd E. Sánchez Piedras 909, Centro, Apizaco, Tlax.</span></li>
                <li className="flex items-center gap-2"><Clock size={16} className="text-blue-500"/> Lun-Vie 8:00-18:00 | Sáb 8:00-15:00</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Nuestros Servicios</a></li>
                <li><a href="#materiales" className="hover:text-blue-400 transition-colors">Materiales que Compramos</a></li>
                <li><a href="#sucursales" className="hover:text-blue-400 transition-colors">Ubicaciones y Sucursales</a></li>
                <li><a href="#cotizar" className="hover:text-blue-400 transition-colors">Solicitar Cotización</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Recuperadora de Metales Reyna. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};