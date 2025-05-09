
import React from 'react';
import { Calendar } from 'lucide-react';

const FeaturedEvents = () => {
  // Sample featured events data
  const events = [
    {
      id: 1,
      title: "Quantum Computing Workshop",
      date: "June 15, 2025",
      location: "Manila, Philippines",
      description: "Hands-on introduction to quantum computing principles and applications.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "OneQuantum PH Conference",
      date: "July 10, 2025",
      location: "Cebu City, Philippines",
      description: "Annual conference bringing together quantum computing researchers and enthusiasts.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Quantum Career Fair",
      date: "August 5, 2025",
      location: "Davao City, Philippines",
      description: "Connect with companies and institutions working in quantum technologies.",
      imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-light text-qcsp-primary">Featured Events</h2>
          <div className="w-16 h-1 bg-qcsp-primary mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <div key={event.id} className="quantum-card hover-glow group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl font-montserrat font-medium mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{event.location}</span>
                  <button className="text-qcsp-primary font-montserrat font-medium text-sm hover:underline">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="secondary-button">View All Events</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
