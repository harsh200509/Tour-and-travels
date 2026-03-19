import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const destinationsData = [
  {
    id: 'ujjain',
    title: 'Ujjain Darshan',
    duration: '1-2 Days',
    bgImage: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?q=80&w=2069&auto=format&fit=crop',
    description: 'Experience the spiritual heart of India with our comprehensive Ujjain tour.',
    places: [
      { name: 'Mahakaleshwar', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop' },
      { name: 'Mahakal Lok', image: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=800&auto=format&fit=crop' },
      { name: 'Harsiddhi Temple', image: 'https://images.unsplash.com/photo-1600080314059-d8204d80d2d3?q=80&w=800&auto=format&fit=crop' },
      { name: 'Kal Bhairav', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
      { name: 'Gadkalika Temple', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Siddhavat', image: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?q=80&w=800&auto=format&fit=crop' },
      { name: 'Sandipani Ashram', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chintaman Ganesh', image: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=800&auto=format&fit=crop' },
      { name: 'Ashwin Vinayak', image: 'https://images.unsplash.com/photo-1600080314059-d8204d80d2d3?q=80&w=800&auto=format&fit=crop' },
      { name: 'Ram Ghat', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
      { name: 'Mangalnath Temple', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' }
    ]
  },
  {
    id: 'indore',
    title: 'Indore & Surroundings',
    duration: '1-2 Days',
    bgImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?q=80&w=2070&auto=format&fit=crop',
    description: 'Explore the cleanest city of India, known for its rich history, street food, and nearby natural wonders.',
    places: [
      { name: 'Khajrana Ganesh Temple', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Pitra Parvat', image: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=800&auto=format&fit=crop' },
      { name: 'Rajwada', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop' },
      { name: '56 Dukan', image: 'https://images.unsplash.com/photo-1600080314059-d8204d80d2d3?q=80&w=800&auto=format&fit=crop' },
      { name: 'Patalpani', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
      { name: 'Pachmarhi', image: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?q=80&w=800&auto=format&fit=crop' },
      { name: 'Omkareshwar', image: 'https://images.unsplash.com/photo-1667848342467-152e6f477026?q=80&w=800&auto=format&fit=crop' }
    ]
  },
  {
    id: 'nalkheda',
    title: 'Nalkheda Darshan',
    duration: '1 Day',
    bgImage: 'https://images.unsplash.com/photo-1600080301414-2228580004f4?q=80&w=2070&auto=format&fit=crop',
    description: 'Seek blessings at one of the most powerful Shakti Peethas.',
    places: [
      { name: 'Baglamukhi Temple', image: 'https://images.unsplash.com/photo-1600080314059-d8204d80d2d3?q=80&w=800&auto=format&fit=crop' }
    ]
  }
];

function PlaceSlider({ places }: { places: { name: string, image: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={scrollRef}
      className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {places.map((place, idx) => (
        <div 
          key={idx} 
          className="min-w-[280px] md:min-w-[320px] h-[400px] rounded-3xl overflow-hidden relative shadow-lg snap-center flex-shrink-0 group"
        >
          <img 
            src={place.image} 
            alt={place.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h4 className="text-xl font-serif font-bold text-white">{place.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PackagesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="pb-16 bg-stone-50 min-h-screen">
      {/* Header */}
      <div className="relative bg-stone-900 pt-32 pb-20 overflow-hidden">
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

      {/* Destination Sections */}
      <div className="flex flex-col gap-0">
        {destinationsData.map((dest, index) => (
          <section id={dest.id} key={dest.id} className="relative py-24 overflow-hidden">
            {/* Background Image with Parallax effect */}
            <div className="absolute inset-0 z-0">
              <img src={dest.bgImage} alt={dest.title} className="w-full h-full object-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-stone-50/90 to-stone-50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-saffron-600 font-medium mb-3"
                  >
                    <MapPin size={20} />
                    <span className="uppercase tracking-wider">{dest.id}</span>
                  </motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4"
                  >
                    {dest.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-stone-600 text-lg"
                  >
                    {dest.description}
                  </motion.p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={`/book?package=${dest.id}`}
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-saffron-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group shadow-xl"
                  >
                    Book {dest.title}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Places Slider */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="-mx-4 sm:mx-0 px-4 sm:px-0"
              >
                <PlaceSlider places={dest.places} />
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
