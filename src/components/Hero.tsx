import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Users, Send } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    time: '',
    guests: '1'
  });

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const { location, date, time, guests } = formData;
    if (!location || !date || !time) {
      alert("Please fill all fields to proceed.");
      return;
    }
    const text = `*New Darshan Booking Request*%0A%0A*Location:* ${location}%0A*Date:* ${date}%0A*Time:* ${time}%0A*Guests:* ${guests}`;
    window.open(`https://wa.me/919617988929?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2070&auto=format&fit=crop" 
          alt="Mahakaleshwar Temple" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center mt-12">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-saffron-500 font-medium tracking-wider uppercase mb-4 block"
        >
          Your Trusted Spiritual Tour Partner
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Experience the Divine <br className="hidden md:block" />
          at <span className="text-saffron-500">Mahakal</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-stone-300 max-w-2xl mb-12"
        >
          We offer seamless darshan bookings, Bhasma Aarti assistance, and guided tours of the sacred Jyotirlinga and Mahakal Lok.
        </motion.p>

        {/* Booking Form Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-4 md:p-6"
        >
          <form onSubmit={handleWhatsAppBooking} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
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
              className="w-full bg-saffron-600 hover:bg-saffron-700 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 h-[46px]"
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
