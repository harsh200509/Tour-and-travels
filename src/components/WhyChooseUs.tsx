import { motion } from 'motion/react';

const features = [
  {
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop',
    title: 'Local Experts',
    desc: "Our guides are locals who know the deep history, temple timings, and hidden spiritual spots of Ujjain."
  },
  {
    image: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=2067&auto=format&fit=crop',
    title: 'Safe & Comfortable',
    desc: 'Travel with peace of mind in our sanitized vehicles with experienced drivers who treat you like family.'
  },
  {
    image: 'https://images.unsplash.com/photo-1583373834259-46cc92173cb7?q=80&w=2074&auto=format&fit=crop',
    title: 'Honest Pricing',
    desc: 'No hidden fees or surprise charges. We believe in transparent pricing so you can focus purely on your devotion.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-saffron-600 font-medium tracking-wider uppercase">Why Choose Us?</span>
          <h2 className="text-4xl font-serif font-bold mt-2 text-stone-900">Experience the Divine, Stress-Free</h2>
          <p className="text-stone-600 max-w-2xl mx-auto mt-4">
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
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-64 overflow-hidden">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-3 text-stone-900">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
