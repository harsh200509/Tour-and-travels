import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, User, Send, CheckCircle } from 'lucide-react';
import officialReviews from '../data/reviews.json';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedReviews = localStorage.getItem('mahakal_reviews');
    if (savedReviews) {
      const localReviews = JSON.parse(savedReviews);
      // Combine official reviews with local ones, removing duplicates if any
      const combined = [...localReviews];
      officialReviews.forEach(off => {
        if (!combined.find(r => r.id === off.id)) {
          combined.push(off);
        }
      });
      setReviews(combined.sort((a, b) => b.id - a.id));
    } else {
      setReviews(officialReviews);
      localStorage.setItem('mahakal_reviews', JSON.stringify(officialReviews));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const review: Review = {
      id: Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: "Just now"
    };
    
    const updatedReviews = [review, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('mahakal_reviews', JSON.stringify(updatedReviews));

    // Open WhatsApp to notify admin for official approval
    const text = `*New Website Review*%0A%0A*Name:* ${review.name}%0A*Rating:* ${review.rating} Stars%0A*Comment:* ${review.comment}`;
    window.open(`https://wa.me/919981246634?text=${text}`, '_blank');

    setNewReview({ name: '', rating: 5, comment: '' });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 3000);
  };

  return (
    <section id="reviews" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-saffron-600 font-medium tracking-wider uppercase mb-3 block"
          >
            Devotee Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-stone-900"
          >
            What Our Travelers Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Review List */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {reviews.map((review) => (
                <motion.div 
                  key={review.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex gap-4 items-start"
                >
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-600 flex-shrink-0">
                    <User size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-stone-900">{review.name}</h4>
                        <div className="flex text-saffron-500 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              fill={i < review.rating ? "currentColor" : "none"} 
                              className={i < review.rating ? "fill-saffron-500" : "text-stone-300"}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-stone-400">{review.date}</span>
                    </div>
                    <p className="text-stone-600 italic">"{review.comment}"</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Add Review Sidebar */}
          <div className="lg:col-span-1">
            <div className={`bg-white p-8 rounded-3xl shadow-xl border border-stone-100 sticky top-24 overflow-hidden ${submitted ? 'text-center py-16' : ''}`}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Review Submitted!</h3>
                    <p className="text-stone-500">Thank you for sharing your experience with us.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Rate Your Journey</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-stone-700 block mb-2">Your Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-saffron-500 outline-none transition-all bg-stone-50 focus:bg-white"
                          value={newReview.name}
                          onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                          placeholder="e.g. John Doe"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-stone-700 block mb-2">Rating</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setNewReview({...newReview, rating: star})}
                              className={`transition-colors ${star <= newReview.rating ? 'text-saffron-500' : 'text-stone-300'}`}
                            >
                              <Star size={24} fill={star <= newReview.rating ? "currentColor" : "none"} />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-stone-700 block mb-2">Your Comment</label>
                        <textarea 
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-saffron-500 outline-none transition-all bg-stone-50 focus:bg-white resize-none"
                          value={newReview.comment}
                          onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                          placeholder="Tell us about your trip..."
                        ></textarea>
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-saffron-600 transition-colors shadow-lg"
                      >
                        <Send size={18} />
                        Submit Review
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
