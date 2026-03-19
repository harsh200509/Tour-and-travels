import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Send, MapPin, Calendar, Clock, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const IMAGES = [
  "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1625834317364-b32c140fd360?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop"
];

export default function Hero() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity1 = useTransform(scrollY, [0, 500], [1, 0]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({
    location: '',
    date: '',
    time: '',
    guests: '1'
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(formData).toString();
    navigate(`/book?${params}`);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 pb-32 overflow-hidden bg-stone-950">
      {/* Deep Parallax Background */}
      <motion.div 
        style={{ y: y1, opacity: opacity1 }}
        className="absolute inset-0 z-0"
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={IMAGES[currentImageIndex]} 
              alt="Mahakaleshwar Temple" 
              className="w-full h-full object-cover opacity-60"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/60 to-stone-950"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
      </motion.div>

      {/* Decorative Om Frame & Running Design */}
      <div className="absolute inset-4 md:inset-8 border border-saffron-500/30 rounded-3xl z-0 pointer-events-none flex flex-col justify-between overflow-hidden">
        {/* Top Running Marquee */}
        <div className="w-full flex whitespace-nowrap opacity-30">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8 text-saffron-500 font-serif text-xl py-2"
          >
            {[...Array(20)].map((_, i) => <span key={i}>ॐ नमः शिवाय</span>)}
          </motion.div>
        </div>

        {/* Center Oms for Frame */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-saffron-500/50 text-4xl font-serif rotate-90">ॐ</div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-saffron-500/50 text-4xl font-serif -rotate-90">ॐ</div>

        {/* Bottom Running Marquee */}
        <div className="w-full flex whitespace-nowrap opacity-30">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8 text-saffron-500 font-serif text-xl py-2"
          >
            {[...Array(20)].map((_, i) => <span key={i}>ॐ नमः शिवाय</span>)}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center mt-12">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="px-8 py-3 rounded-full border border-saffron-500/50 bg-saffron-500/20 text-saffron-400 text-2xl md:text-3xl font-bold tracking-wider backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.2)] inline-block">
            जय श्री महाकाल
          </span>
        </motion.div>
        
        {/* Main Heading with Staggered Reveal */}
        <div className="mb-6 py-2 px-4 overflow-visible">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.2] tracking-tight"
          >
            Visit <span className="text-saffron-500 pb-2 pr-2 inline-block">Mahakaleshwar</span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-2xl text-stone-300 max-w-3xl mb-16 font-light leading-relaxed"
        >
          We offer seamless darshan bookings, Bhasma Aarti assistance, and guided tours of the sacred Jyotirlinga.
        </motion.p>

        {/* Floating Booking Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-6 shadow-[0_0_50px_rgba(245,158,11,0.15)]"
        >
          <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="flex flex-col text-left">
              <label className="text-xs font-medium text-stone-300 mb-2 flex items-center gap-1.5 uppercase tracking-wider"><MapPin size={14} className="text-saffron-500"/> Location</label>
              <select 
                required
                className="w-full border-b border-stone-500/50 py-2 focus:outline-none focus:border-saffron-500 bg-transparent text-white [&>option]:text-stone-900 transition-colors"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              >
                <option value="" disabled>Select location</option>
                <option value="Ujjain">Ujjain</option>
                <option value="Omkareshwar">Omkareshwar</option>
                <option value="Indore">Indore</option>
                <option value="Nalkheda">Nalkheda</option>
              </select>
            </div>
            
            <div className="flex flex-col text-left">
              <label className="text-xs font-medium text-stone-300 mb-2 flex items-center gap-1.5 uppercase tracking-wider"><Calendar size={14} className="text-saffron-500"/> Date</label>
              <input 
                type="date" 
                required
                className="w-full border-b border-stone-500/50 py-2 focus:outline-none focus:border-saffron-500 bg-transparent text-white transition-colors [color-scheme:dark]"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-xs font-medium text-stone-300 mb-2 flex items-center gap-1.5 uppercase tracking-wider"><Clock size={14} className="text-saffron-500"/> Time</label>
              <input 
                type="time" 
                required
                className="w-full border-b border-stone-500/50 py-2 focus:outline-none focus:border-saffron-500 bg-transparent text-white transition-colors [color-scheme:dark]"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-xs font-medium text-stone-300 mb-2 flex items-center gap-1.5 uppercase tracking-wider"><Users size={14} className="text-saffron-500"/> Guests</label>
              <input 
                type="number" 
                min="1"
                required
                className="w-full border-b border-stone-500/50 py-2 focus:outline-none focus:border-saffron-500 bg-transparent text-white transition-colors"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-400 hover:to-saffron-500 text-stone-900 font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 h-[46px] shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:-translate-y-1"
            >
              <Send size={18} />
              Book Yatra
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
