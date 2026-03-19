import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: 'Ujjain',
    id: 'ujjain',
    image: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?q=80&w=2069&auto=format&fit=crop',
    desc: 'Home to Mahakaleshwar Jyotirlinga'
  },
  {
    name: 'Indore',
    id: 'indore',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?q=80&w=2070&auto=format&fit=crop',
    desc: 'The cleanest city & food capital'
  },
  {
    name: 'Nalkheda',
    id: 'nalkheda',
    image: 'https://images.unsplash.com/photo-1600080301414-2228580004f4?q=80&w=2070&auto=format&fit=crop',
    desc: 'Maa Baglamukhi Temple'
  }
];

export default function Destinations() {
  const navigate = useNavigate();

  return (
    <section id="destinations" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-saffron-600 font-medium tracking-wider uppercase">Choose Your Devotional City</span>
          <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2">Explore Top Destinations</h2>
          <div className="w-24 h-1 bg-saffron-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              onClick={() => navigate(`/packages#${dest.id}`)}
              className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer h-96"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:-translate-y-4">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{dest.name}</h3>
                <p className="text-stone-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{dest.desc}</p>
                
                <div className="flex items-center gap-2 text-saffron-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <span>Book Darshan</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
