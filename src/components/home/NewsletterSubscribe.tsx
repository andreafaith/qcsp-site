
import React, { useState } from 'react';
import { toast } from 'sonner';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-qcsp-primary text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full quantum-grid opacity-10"></div>
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white opacity-5"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-montserrat font-light">Subscribe to Our Newsletter</h2>
          <p className="mt-4 opacity-80 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and advancements in quantum computing in the Philippines.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 font-montserrat"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-white text-qcsp-primary font-montserrat font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-all disabled:opacity-70"
              disabled={loading}
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          <p className="text-xs text-center mt-4 opacity-60">
            By subscribing, you agree to receive updates from QCSP. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
