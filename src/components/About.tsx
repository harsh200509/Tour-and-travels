import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop" 
                alt="Spiritual Journey" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-saffron-600/10 mix-blend-overlay"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-stone-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-600 font-bold text-2xl">
                  10k+
                </div>
                <div>
                  <p className="font-bold text-stone-900">People trust us!</p>
                  <p className="text-sm text-stone-500">For their spiritual journeys</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <span className="text-saffron-600 font-medium tracking-wider uppercase">Who we are</span>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2 mb-6">
              Your Trusted Spiritual Tour Partner - Mahakaleshwar Darshan
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              We are a devoted spiritual tour team offering smooth Mahakal Darshan and pilgrimage tours with comfort, care, and local expertise. With deep local knowledge, transparent services, and a devotee-first approach, Visit Mahakal stands as a reliable partner for your sacred journey.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-saffron-500" />
                <span className="text-stone-800 font-medium">5,000+ Top Destinations Covered</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-saffron-500" />
                <span className="text-stone-800 font-medium">3,000+ Bookings Successfully Completed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-saffron-500" />
                <span className="text-stone-800 font-medium">1,000+ Satisfied Clients Worldwide</span>
              </div>
            </div>

            <Link to="/about" className="inline-block bg-stone-900 text-white px-8 py-3 rounded-full font-medium hover:bg-saffron-600 transition-colors">
              More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
