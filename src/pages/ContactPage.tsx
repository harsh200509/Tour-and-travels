import { useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen relative">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
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
                    <h4 className="font-bold text-stone-900 mb-1">Contact Person</h4>
                    <p className="text-stone-600 mb-1">Durgesh Prajapat</p>
                    <a href="tel:+919981246634" className="text-stone-600 hover:text-saffron-600 transition-colors">+91 9981246634</a>
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
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Scan for Payment</h3>
              <p className="text-stone-600 mb-8">Scan the QR code below to make a secure payment for your booking or services.</p>
              
              <div className="bg-white p-4 rounded-2xl shadow-md border border-stone-100 inline-block">
                {/* Placeholder QR Code - user will replace this */}
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=9981246634@upi&pn=Durgesh%20Prajapat" 
                  alt="Payment QR Code" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                />
              </div>
              
              <p className="mt-6 text-sm text-stone-500">For any payment related queries, please contact us.</p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
