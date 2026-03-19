import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Delhi',
    text: 'The Bhasma Aarti booking was seamless. We did not have to worry about anything. The guide was very knowledgeable and polite.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop'
  },
  {
    name: 'Priya Patel',
    location: 'Ahmedabad',
    text: 'Excellent service! Our family trip to Omkareshwar and Ujjain was perfectly planned. Highly recommend Visit Mahakal for spiritual tours.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop'
  },
  {
    name: 'Amit Verma',
    location: 'Mumbai',
    text: 'Very transparent pricing and comfortable vehicles. The driver knew all the local routes which saved us a lot of time during peak season.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop'
  }
];
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-saffron-600 font-medium tracking-wider uppercase">Feedback</span>
          <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2">What Devotees Say</h2>
          <div className="w-24 h-1 bg-saffron-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-stone-100 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-saffron-500 text-saffron-500" />
                ))}
              </div>
              <p className="text-stone-600 mb-8 relative z-10 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-stone-900">{testimonial.name}</h4>
                  <p className="text-sm text-stone-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
