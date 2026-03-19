import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Map } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Image for About Page */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="About Us" />
          <div className="absolute inset-0 bg-stone-900/70"></div>
        </motion.div>
        
        <div className="relative z-10 text-center text-white mt-16">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-6xl font-serif font-bold mb-4"
           >
             About Us
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-lg text-stone-300 font-medium"
           >
             Home &gt; About Us
           </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="grid grid-cols-2 gap-4">
                <img src="/spritual.jpg" alt="Spiritual Journey" className="rounded-3xl w-full h-64 object-cover shadow-lg" />
                <img src="/Ujjain/mahakaleshwar.jpg" alt="Mahakal Temple" className="rounded-3xl w-full h-64 object-cover mt-8 shadow-lg" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <span className="text-saffron-600 font-medium tracking-wider uppercase">Explore The World With Us</span>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2 mb-6 leading-tight">
                The Perfect Spiritual Vacation Comes True With Our Travel Agency
              </h2>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                We are a devoted spiritual tour team offering smooth Mahakal Darshan and pilgrimage tours with comfort, care, and local expertise. With deep local knowledge, transparent services, and a devotee-first approach, Visit Mahakal stands as a reliable partner for your sacred journey.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                Our mission is to ensure that every devotee experiences the divine presence of Lord Shiva without the stress of logistics, bookings, and travel arrangements.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-xl">10,000+</h4>
                    <p className="text-stone-500 text-sm">Happy Devotees</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-600">
                    <Map size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-xl">50+</h4>
                    <p className="text-stone-500 text-sm">Sacred Destinations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
