import { motion } from 'motion/react';

const destinations = [
  {
    name: 'Ujjain',
    image: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?q=80&w=2069&auto=format&fit=crop',
    desc: 'Home to Mahakaleshwar Jyotirlinga'
  },
  {
    name: 'Omkareshwar',
    image: 'https://images.unsplash.com/photo-1667848342467-152e6f477026?q=80&w=2070&auto=format&fit=crop',
    desc: 'Sacred island shaped like Om'
  },
  {
    name: 'Indore',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?q=80&w=2070&auto=format&fit=crop',
    desc: 'The cleanest city & food capital'
  },
  {
    name: 'Nalkheda',
    image: 'https://images.unsplash.com/photo-1600080301414-2228580004f4?q=80&w=2070&auto=format&fit=crop',
    desc: 'Maa Baglamukhi Temple'
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-saffron-600 font-medium tracking-wider uppercase">Choose Your Devotional City</span>
          <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2">Explore Top Destinations</h2>
          <div className="w-24 h-1 bg-saffron-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-96"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-serif font-bold text-white mb-1">{dest.name}</h3>
                <p className="text-stone-300 text-sm">{dest.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
