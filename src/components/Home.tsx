import React, { useState, useEffect } from 'react';
import { Truck, Scale, Banknote, PackageOpen, CheckCircle2, MapPin, ArrowRight, ShieldCheck, Zap, Phone, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const HERO_IMAGES = [
  "/hero-bg.png",
  "/hero-bg-2.png",
  "/WhatsApp Image1.jpeg"
];

export const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    material: '',
    quantity: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getWhatsAppUrl = () => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'buenos días' : hour < 19 ? 'buenas tardes' : 'buenas noches';
    const message = `Hola, ${greeting}, me podría dar más información de favor.`;
    return `https://wa.me/522414115650?text=${encodeURIComponent(message)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'buenos días' : hour < 19 ? 'buenas tardes' : 'buenas noches';
    const text = `Hola, ${greeting}. Soy ${formData.name}. Me interesa cotizar la venta de ${formData.quantity} de ${formData.material}. Mi teléfono es ${formData.phone}. ${formData.message}`;
    const url = `https://wa.me/522414115650?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-blue-950">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={HERO_IMAGES[currentImage]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              alt="Patio de reciclaje" 
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-700 text-blue-100 text-sm font-medium mb-6">
              <ShieldCheck size={16} className="text-emerald-400" />
              Báscula certificada y pago justo
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Recuperadora de Metales <span className="text-emerald-400">Reyna</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
              Transformamos tu chatarra en dinero al instante. Compramos metales, fierro viejo y cartón con el mejor precio garantizado en Apizaco, Tlaxcala.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cotizar" className="inline-flex justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/30">
                Cotizar Material <ArrowRight size={20} />
              </a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all">
                WhatsApp Directo
              </a>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 text-sm text-blue-200 font-medium">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400"/> +15 Años de Experiencia</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400"/> 2 Sucursales</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-blue-800"></div>
              <div className="flex items-center gap-4 bg-blue-950/40 px-4 py-2 rounded-xl border border-blue-800/50 backdrop-blur-sm">
                <span className="text-blue-200 font-semibold tracking-wide">SÍGUENOS:</span>
                <a href="https://www.facebook.com/share/1HUaQG1PhF/?mibextid=wwXIfr" className="bg-blue-800/80 hover:bg-blue-600 text-white p-2 rounded-lg transition-all shadow-md hover:-translate-y-1" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="https://www.instagram.com/reynarecuperadora?igsh=djZ6NXdiaG42Y2V6&utm_source=qr" className="bg-blue-800/80 hover:bg-pink-600 text-white p-2 rounded-lg transition-all shadow-md hover:-translate-y-1" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="https://www.tiktok.com/@recuperadora.dmet?_r=1&_t=ZS-988evx7SFYj" className="bg-blue-800/80 hover:bg-slate-700 text-white p-2 rounded-lg transition-all shadow-md hover:-translate-y-1" aria-label="TikTok"><TikTokIcon size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
            <p className="text-slate-600">Ofrecemos soluciones integrales para la venta y reciclaje de tus materiales, asegurando transparencia y rapidez en cada transacción.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { image: "/service-truck.png", title: "Recolección a Domicilio", desc: "Vamos hasta tu ubicación para recoger volúmenes grandes de chatarra sin costo extra." },
              { image: "/service-scale.png", title: "Peso Certificado", desc: "Básculas precisas y calibradas a la vista del cliente para garantizar total transparencia." },
              { image: "/service-cash.png", title: "Pago en Efectivo", desc: "Recibe tu dinero al instante, en efectivo y con los mejores precios del mercado." },
              { image: "/service-materials.png", title: "Venta de Material", desc: "Venta de lámina, ángulos, barras y más materiales para tus proyectos de construcción." }
            ].map((service, i) => (
              <motion.div whileHover={{ y: -8 }} key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all overflow-hidden flex flex-col">
                <div className="h-48 w-full bg-slate-200 relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALES QUE COMPRAMOS */}
      <section id="materiales" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Materiales que Compramos</h2>
            <p className="text-slate-600">Recibimos una amplia variedad de materiales reciclables. Si tienes dudas sobre algún material específico, ¡contáctanos!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: "/material-scrap.jpg", title: "Chatarra / Fierro Viejo", desc: "Estructuras, láminas, varillas, piezas automotrices y maquinaria en desuso." },
              { image: "/material-cardboard.jpg", title: "Cartón y Papel", desc: "Cajas de cartón corrugado, archivo muerto, periódico y revistas (preferentemente secos)." },
              { image: "/material-copper.jpg", title: "Cobre", desc: "Cable pelado o con forro, tubería, piezas industriales. Excelente pago por cobre de primera." },
              { image: "/material-aluminum.jpg", title: "Aluminio", desc: "Botes, perfil, cárter, rines, cancelería y rebaba de aluminio." },
              { image: "/material-bronze.jpg", title: "Bronce y Metales", desc: "Llaves, válvulas, campanas, rebaba y piezas de bronce o latón." },
              { image: "/material-batteries.jpg", title: "Baterías y Radiadores", desc: "Acumuladores automotrices usados y radiadores de cobre/bronce o aluminio." }
            ].map((mat, i) => (
              <motion.div whileHover={{ scale: 1.02 }} key={i} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 w-full bg-slate-200 relative">
                  <img src={mat.image} alt={mat.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{mat.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{mat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">¿Por qué elegir a Recuperadora Reyna?</h2>
              <p className="text-slate-400 mb-8 text-lg">Nos distinguimos por nuestra seriedad y compromiso con cada cliente. Ya sea que vendas unos kilos o toneladas, te garantizamos el mejor trato de Apizaco.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Mejor Precio Garantizado", desc: "Monitoreamos el mercado diario para ofrecerte siempre la mejor tarifa." },
                  { title: "Básculas 100% Exactas", desc: "Nuestras básculas están calibradas y a la vista para tu total tranquilidad." },
                  { title: "Rapidez en el Servicio", desc: "Descarga rápida y pago inmediato. No pierdas tiempo." },
                  { title: "Facturación Disponible", desc: "Podemos emitir facturas para empresas y negocios por sus materiales." },
                  { title: "Servicio a Empresas", desc: "Capacidad para manejar volúmenes industriales con recolección programada." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-blue-500/20 text-blue-400 p-2 rounded-lg h-fit">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-blue-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <img src="/hero-bg.png" alt="Instalaciones" className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full grayscale-[20%] sepia-[10%]" />
            </div>
          </div>
        </div>
      </section>

      {/* SUCURSALES */}
      <section id="sucursales" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestras Sucursales</h2>
            <p className="text-slate-600">Visítanos en cualquiera de nuestras dos ubicaciones en Apizaco. Estamos listos para atenderte.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sucursal 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="p-8 flex-grow">
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Sucursal Principal</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Centro Apizaco</h3>
                <ul className="space-y-4 text-slate-600 mb-8">
                  <li className="flex gap-3"><MapPin className="text-blue-600 shrink-0 mt-1" size={20}/> <span>Blvrd E. Sánchez Piedras 909, Centro, 90300 Cdad. de Apizaco, Tlax.</span></li>
                  <li className="flex gap-3"><Phone className="text-blue-600 shrink-0 mt-1" size={20}/> <span>+52 241 411 5650</span></li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <a href="https://www.google.com.mx/maps/place/Compra+Y+Venta+De+Fierro+Viejo/@19.4209348,-98.14362,20z/data=!4m6!3m5!1s0x85d020255d0067cf:0x8deefaf7fd659ed8!8m2!3d19.4210409!4d-98.1435745!16s%2Fg%2F11j8lm_rrz?entry=ttu" target="_blank" rel="noreferrer" className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-colors">
                  Ver en Google Maps
                </a>
              </div>
            </div>

            {/* Sucursal 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="p-8 flex-grow">
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Sucursal San Isidro</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Col. San Isidro</h3>
                <ul className="space-y-4 text-slate-600 mb-8">
                  <li className="flex gap-3"><MapPin className="text-blue-600 shrink-0 mt-1" size={20}/> <span>CV7J+53Q Col. San Isidro, San Isidro, Tlax.</span></li>
                  <li className="flex gap-3"><Phone className="text-blue-600 shrink-0 mt-1" size={20}/> <span>+52 241 411 5650</span></li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <a href="https://www.google.com/maps/place/19%C2%B024'46.6%22N+98%C2%B007'11.2%22W/@19.4129562,-98.1223411,17z/data=!3m1!4b1!4m4!3m3!8m2!3d19.4129562!4d-98.1197662?hl=es&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-colors">
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE COTIZACIÓN */}
      <section id="cotizar" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-100 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Cotiza tu Material</h2>
              <p className="text-slate-600">Llena el formulario y te enviaremos una cotización rápida vía WhatsApp.</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">¡Solicitud Preparada!</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">Tu cotización se ha abierto en WhatsApp. Si no se abrió automáticamente, haz clic en el botón de abajo.</p>
                <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-colors">
                  Ir a WhatsApp
                </a>
                <button onClick={() => setIsSubmitted(false)} className="block mx-auto mt-6 text-slate-500 hover:text-slate-800 font-medium underline">
                  Hacer otra cotización
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Teléfono / WhatsApp</label>
                    <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Ej. 241 123 4567" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Material a vender</label>
                    <select required value={formData.material} onChange={e => setFormData({...formData, material: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white text-slate-700">
                      <option value="">Selecciona un material...</option>
                      <option value="Chatarra / Fierro">Chatarra / Fierro</option>
                      <option value="Cartón / Papel">Cartón / Papel</option>
                      <option value="Cobre">Cobre</option>
                      <option value="Aluminio">Aluminio</option>
                      <option value="Bronce">Bronce</option>
                      <option value="Baterías">Baterías</option>
                      <option value="Otro">Otro material</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Cantidad aproximada</label>
                    <input required type="text" value={formData.quantity} onChange={e => setFormData({...formData, quantity: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Ej. 500 kg, 2 toneladas..." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje adicional (Opcional)</label>
                  <textarea rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="¿Requiere recolección? ¿Alguna duda específica?"></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-700/30 flex justify-center items-center gap-2 text-lg">
                  Enviar Cotización por WhatsApp <ArrowRight size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Tienes chatarra acumulada? ¡Conviértela en efectivo hoy mismo!</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">No dejes que se oxide tu dinero. Llámanos o envíanos un mensaje y te daremos el mejor precio de Apizaco.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 bg-white text-blue-700 hover:bg-slate-50 font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
              Contactar por WhatsApp
            </a>
            <a href="tel:+522414115650" className="inline-flex justify-center items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-xl transition-all">
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};