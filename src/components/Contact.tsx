import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const text = `*New Contact Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    window.open(`https://wa.me/919617988929?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-saffron-600 font-medium tracking-wider uppercase">Contact Us</span>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2 mb-6">
              Let's connect and plan your spiritual journey
            </h2>
            <p className="text-stone-600 mb-10">
              Have questions about darshan timings, tour packages, or custom itineraries? Reach out to us, and our local experts will guide you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-saffron-50 rounded-full flex items-center justify-center text-saffron-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Phone Number</h4>
                  <a href="tel:+919617988929" className="text-stone-600 hover:text-saffron-600 transition-colors">+91 96179 88929</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-saffron-50 rounded-full flex items-center justify-center text-saffron-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Email Address</h4>
                  <a href="mailto:info@visitmahakal.com" className="text-stone-600 hover:text-saffron-600 transition-colors">info@visitmahakal.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-saffron-50 rounded-full flex items-center justify-center text-saffron-600 shrink-0">
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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-stone-50 p-8 md:p-10 rounded-3xl border border-stone-200"
          >
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-shadow"
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
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-shadow"
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
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-shadow"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Message *</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-shadow resize-none"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-saffron-600 hover:bg-saffron-700 text-white font-medium py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message via WhatsApp
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
