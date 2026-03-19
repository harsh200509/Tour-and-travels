import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Send, MapPin, Calendar, Clock, Users } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity1 = useTransform(scrollY, [0, 500], [1, 0]);

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
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2070&auto=format&fit=crop" 
            alt="Mahakaleshwar Temple" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/60 to-stone-950"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
      </motion.div>

      {/* Massive Om Symbol Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.07, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <span className="text-[40rem] md:text-[60rem] text-saffron-500 font-serif leading-none select-none blur-sm">
          ॐ
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center mt-12">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="px-6 py-2 rounded-full border border-saffron-500/30 bg-saffron-500/10 text-saffron-400 text-sm font-medium tracking-widest uppercase backdrop-blur-md">
            Awaken Your Spirit
          </span>
        </motion.div>
        
        {/* Main Heading with Staggered Reveal */}
        <div className="overflow-hidden mb-6">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white leading-[1.1] tracking-tight"
          >
            Divine <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 to-saffron-600">Mahakal</span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-2xl text-stone-300 max-w-3xl mb-16 font-light leading-relaxed"
        >
          Embark on a transcendent journey. We offer seamless darshan bookings, Bhasma Aarti assistance, and guided tours of the sacred Jyotirlinga.
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
      
      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-50 to-transparent z-10"></div>
    </section>
  );
}
