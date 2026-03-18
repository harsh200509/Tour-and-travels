import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Users, Send } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    time: '',
    guests: '1'
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(formData).toString();
    navigate(`/contact?${params}`);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Image with Overlay and subtle zoom animation */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2070&auto=format&fit=crop" 
          alt="Mahakaleshwar Temple" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/90"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center mt-12">
        <motion.span 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-saffron-500 font-medium tracking-wider uppercase mb-4 block"
        >
          Your Trusted Spiritual Tour Partner
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Experience the Divine <br className="hidden md:block" />
          at <span className="text-saffron-500">Mahakal</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-stone-300 max-w-2xl mb-12"
        >
          We offer seamless darshan bookings, Bhasma Aarti assistance, and guided tours of the sacred Jyotirlinga and Mahakal Lok.
        </motion.p>

        {/* Booking Form Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-4 md:p-6"
        >
          <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="flex flex-col text-left">
              <label className="text-sm font-medium text-stone-600 mb-1 flex items-center gap-1"><MapPin size={14}/> Location</label>
              <select 
                required
                className="w-full border-b-2 border-stone-200 py-2 focus:outline-none focus:border-saffron-500 bg-transparent text-stone-800"
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
              <label className="text-sm font-medium text-stone-600 mb-1 flex items-center gap-1"><Calendar size={14}/> Date</label>
              <input 
                type="date" 
                required
                className="w-full border-b-2 border-stone-200 py-2 focus:outline-none focus:border-saffron-500 bg-transparent text-stone-800"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-sm font-medium text-stone-600 mb-1 flex items-center gap-1"><Clock size={14}/> Time</label>
              <input 
                type="time" 
                required
                className="w-full border-b-2 border-stone-200 py-2 focus:outline-none focus:border-saffron-500 bg-transparent text-stone-800"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-sm font-medium text-stone-600 mb-1 flex items-center gap-1"><Users size={14}/> Guests</label>
              <input 
                type="number" 
                min="1"
                required
                className="w-full border-b-2 border-stone-200 py-2 focus:outline-none focus:border-saffron-500 bg-transparent text-stone-800"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-saffron-600 hover:bg-saffron-700 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 h-[46px] shadow-lg shadow-saffron-600/30"
            >
              <Send size={18} />
              Book Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
