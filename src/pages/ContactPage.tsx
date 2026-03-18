import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    location: searchParams.get('location') || '',
    date: searchParams.get('date') || '',
    time: searchParams.get('time') || '',
    guests: searchParams.get('guests') || '1',
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { location, date, time, guests, name, email, subject, message } = formData;
    
    let text = `*New Inquiry from Visit Mahakal*%0A%0A`;
    text += `*Name:* ${name}%0A`;
    text += `*Email:* ${email}%0A`;
    if (location) text += `*Location:* ${location}%0A`;
    if (date) text += `*Date:* ${date}%0A`;
    if (time) text += `*Time:* ${time}%0A`;
    if (guests) text += `*Guests:* ${guests}%0A`;
    text += `*Subject:* ${subject}%0A`;
    text += `*Message:* ${message}`;
    
    window.open(`https://wa.me/919617988929?text=${text}`, '_blank');
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Image for Contact Page */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img src="https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Contact Us" />
          <div className="absolute inset-0 bg-stone-900/70"></div>
        </motion.div>
        
        <div className="relative z-10 text-center text-white mt-16">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-6xl font-serif font-bold mb-4"
           >
             Contact Us
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-lg text-stone-300 font-medium"
           >
             Home &gt; Contact Us
           </motion.p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-10"
            >
              <div>
                <span className="text-saffron-600 font-medium tracking-wider uppercase">Get in Touch</span>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mt-2 mb-6">
                  Let's plan your spiritual journey
                </h2>
                <p className="text-stone-600">
                  Have questions about darshan timings, tour packages, or custom itineraries? Reach out to us, and our local experts will guide you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Phone Number</h4>
                    <a href="tel:+919617988929" className="text-stone-600 hover:text-saffron-600 transition-colors">+91 96179 88929</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Email Address</h4>
                    <a href="mailto:info@visitmahakal.com" className="text-stone-600 hover:text-saffron-600 transition-colors">info@visitmahakal.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Office Address</h4>
                    <p className="text-stone-600">201, Patidar Tower, Freeganj,<br/>Ujjain, Madhya Pradesh - 456010</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100"
            >
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Pre-filled Trip Details if any */}
                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 mb-8">
                  <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <MapPin size={18} className="text-saffron-500" /> Trip Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Location</label>
                      <select 
                        className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-saffron-500"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      >
                        <option value="">Select location</option>
                        <option value="Ujjain">Ujjain</option>
                        <option value="Omkareshwar">Omkareshwar</option>
                        <option value="Indore">Indore</option>
                        <option value="Nalkheda">Nalkheda</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Date</label>
                      <input 
                        type="date" 
                        className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-saffron-500"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Time</label>
                      <input 
                        type="time" 
                        className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-saffron-500"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Guests</label>
                      <input 
                        type="number" 
                        min="1"
                        className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-saffron-500"
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:bg-white transition-colors"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:bg-white transition-colors"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Subject *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:bg-white transition-colors"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message *</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:bg-white transition-colors resize-none"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-saffron-600 hover:bg-saffron-700 text-white font-medium py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg shadow-lg shadow-saffron-600/30"
                >
                  <Send size={20} />
                  Send Message via WhatsApp
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
