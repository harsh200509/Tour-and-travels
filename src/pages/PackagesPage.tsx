import { motion } from 'motion/react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 'ujjain',
    title: 'Ujjain Darshan',
    duration: '1-2 Days',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2070&auto=format&fit=crop',
    description: 'Experience the spiritual heart of India with our comprehensive Ujjain tour.',
    places: ['Mahakaleshwar Jyotirlinga', 'Mangalnath Temple', 'Sandipani Ashram', 'Kal Bhairav', 'Harsiddhi Mata Temple']
  },
  {
    id: 'omkareshwar',
    title: 'Omkareshwar Yatra',
    duration: '1 Day',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop',
    description: 'Visit the sacred island of Omkareshwar, shaped like the holy symbol "Om".',
    places: ['Omkareshwar Jyotirlinga', 'Mamleshwar Temple', 'Narmada Ghat Parikrama']
  },
  {
    id: 'indore',
    title: 'Indore Heritage',
    duration: '1-2 Days',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop',
    description: 'Explore the cleanest city of India, known for its rich history and street food.',
    places: ['Rajwada Palace', 'Khajrana Ganesh Temple', 'Lal Bagh Palace', 'Chappan Dukan']
  },
  {
    id: 'nalkheda',
    title: 'Nalkheda Darshan',
    duration: '1 Day',
    image: 'https://images.unsplash.com/photo-1600080314059-d8204d80d2d3?q=80&w=1470&auto=format&fit=crop',
    description: 'Seek blessings at one of the most powerful Shakti Peethas.',
    places: ['Maa Baglamukhi Temple', 'Local Sightseeing']
  }
];

export default function PackagesPage() {
  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      {/* Header */}
      <div className="relative bg-stone-900 py-20 mb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[20rem] text-saffron-500 font-serif leading-none">ॐ</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-saffron-500 font-medium tracking-wider uppercase mb-4 block"
          >
            Divine Journeys
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Our Sacred Tour Packages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 max-w-2xl mx-auto text-lg"
          >
            Carefully curated spiritual journeys across Madhya Pradesh. Experience the divine with our expert guides and comfortable travel arrangements.
          </motion.p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {packages.map((pkg, index) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-stone-200/50 group border border-stone-100 flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-stone-900 flex items-center gap-1.5 shadow-sm">
                  <Calendar size={14} className="text-saffron-600" />
                  {pkg.duration}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-3xl font-serif font-bold text-stone-900 mb-3 group-hover:text-saffron-600 transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                
                <div className="mb-8 flex-grow">
                  <h4 className="font-medium text-stone-900 mb-4 flex items-center gap-2">
                    <MapPin size={18} className="text-saffron-500" />
                    Places to Visit:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.places.map((place, i) => (
                      <li key={i} className="flex items-start gap-2 text-stone-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 mt-1.5 flex-shrink-0"></span>
                        {place}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={`/book?package=${pkg.id}`}
                  className="inline-flex items-center justify-center gap-2 w-full bg-stone-900 hover:bg-saffron-600 text-white py-4 rounded-xl font-medium transition-all duration-300 group/btn"
                >
                  Book This Package
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
