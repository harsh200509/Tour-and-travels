import { motion } from 'motion/react';
import { Map, ShieldCheck, IndianRupee } from 'lucide-react';

const features = [
  {
    icon: <Map size={32} />,
    title: 'Local Experts',
    desc: "Deep knowledge of temple timings, rituals, and Ujjain's best-kept secrets."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Safe & Comfortable',
    desc: 'Premium, sanitized vehicles and hand-picked hotels for a worry-free stay.'
  },
  {
    icon: <IndianRupee size={32} />,
    title: 'Honest Pricing',
    desc: 'Transparent rates with no hidden charges, even during peak festival seasons.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-stone-900 text-white relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ea580c 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-saffron-500 font-medium tracking-wider uppercase">Why Choose Us?</span>
          <h2 className="text-4xl font-serif font-bold mt-2">Experience the Divine, Stress-Free</h2>
          <p className="text-stone-400 max-w-2xl mx-auto mt-4">
            We understand that a trip to Ujjain is more than just a vacation—it’s a spiritual journey. Here is why thousands of devotees trust us with their travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-stone-800/50 border border-stone-700 p-8 rounded-2xl hover:border-saffron-500 transition-colors group"
            >
              <div className="w-16 h-16 bg-stone-800 rounded-2xl flex items-center justify-center text-saffron-500 mb-6 group-hover:bg-saffron-500 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-stone-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
