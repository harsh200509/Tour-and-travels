import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Users, MapPin, Phone, Mail, User, MessageSquare, Send } from 'lucide-react';

export default function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    fromLocation: '',
    package: '',
    date: '',
    guests: '1',
    message: ''
  });

  useEffect(() => {
    // Pre-fill from URL params if available
    const params = new URLSearchParams(location.search);
    const pkg = params.get('package');
    const loc = params.get('location');
    const date = params.get('date');
    const guests = params.get('guests');

    if (pkg) setFormData(prev => ({ ...prev, package: pkg }));
    if (loc) setFormData(prev => ({ ...prev, package: loc.toLowerCase() }));
    if (date) setFormData(prev => ({ ...prev, date }));
    if (guests) setFormData(prev => ({ ...prev, guests }));
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { name, mobile, email, fromLocation, package: pkg, date, guests, message } = formData;
    
    let text = `*Jai Shree Mahakaal* 🙏%0A%0A`;
    text += `*New Booking Request*%0A%0A`;
    text += `*Name:* ${name}%0A`;
    text += `*Mobile:* ${mobile}%0A`;
    if (email) text += `*Email:* ${email}%0A`;
    if (fromLocation) text += `*From (Client Location):* ${fromLocation}%0A`;
    text += `*Package/Destination:* ${pkg}%0A`;
    text += `*Travel Date:* ${date}%0A`;
    text += `*Guests:* ${guests}%0A`;
    if (message) text += `*Additional Requirements:* ${message}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      window.open(`https://wa.me/919617988929?text=${text}`, '_blank');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Info & Aesthetics */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px] flex flex-col justify-end p-12"
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2070&auto=format&fit=crop" 
                alt="Mahakal Temple" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <span className="text-saffron-500 font-medium tracking-wider uppercase mb-4 block">
                Secure Your Journey
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Book Your Spiritual Experience
              </h1>
              <p className="text-stone-300 text-lg mb-8 max-w-md">
                Fill out the form with your details, and our team will get back to you shortly to confirm your booking and arrangements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-saffron-600/20 flex items-center justify-center backdrop-blur-sm border border-saffron-500/30">
                    <Phone className="text-saffron-500" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Call us directly</p>
                    <p className="font-medium">+91 96179 88929</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-stone-100"
          >
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">Booking Received!</h3>
                <p className="text-stone-600 mb-8">
                  Thank you for choosing Visit Mahakal. We will contact you shortly to confirm your itinerary.
                </p>
                <p className="text-sm text-stone-400">Redirecting to home...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700 flex items-center gap-2">
                      <User size={16} className="text-saffron-500" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all bg-stone-50 focus:bg-white"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700 flex items-center gap-2">
                      <Phone size={16} className="text-saffron-500" /> Mobile Number
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all bg-stone-50 focus:bg-white"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700 flex items-center gap-2">
                      <Mail size={16} className="text-saffron-500" /> Email Address (Optional)
                    </label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all bg-stone-50 focus:bg-white"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700 flex items-center gap-2">
                      <MapPin size={16} className="text-saffron-500" /> From (Your Location)
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Mumbai, Delhi"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all bg-stone-50 focus:bg-white"
                      value={formData.fromLocation}
                      onChange={(e) => setFormData({...formData, fromLocation: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700 flex items-center gap-2">
                    <MapPin size={16} className="text-saffron-500" /> Select Package / Destination
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all bg-stone-50 focus:bg-white appearance-none"
                    value={formData.package}
                    onChange={(e) => setFormData({...formData, package: e.target.value})}
                  >
                    <option value="" disabled>Choose a destination</option>
                    <option value="ujjain">Ujjain Darshan</option>
                    <option value="indore">Indore Heritage</option>
                    <option value="omkareshwar">Omkareshwar Yatra</option>
                    <option value="nalkheda">Nalkheda Darshan</option>
                    <option value="custom">Custom Tour</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700 flex items-center gap-2">
                      <Calendar size={16} className="text-saffron-500" /> Travel Date
                    </label>
                    <input 
                      type="date" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all bg-stone-50 focus:bg-white"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700 flex items-center gap-2">
                      <Users size={16} className="text-saffron-500" /> Number of Persons
                    </label>
                    <input 
                      type="number" 
                      min="1"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all bg-stone-50 focus:bg-white"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700 flex items-center gap-2">
                    <MessageSquare size={16} className="text-saffron-500" /> Additional Requirements
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Any specific places you want to visit, hotel preferences, or special needs?"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all bg-stone-50 focus:bg-white resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-saffron-600 hover:bg-saffron-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-saffron-600/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      Confirm Booking Request
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
