
import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import NewsletterSubscribe from '@/components/home/NewsletterSubscribe';

const Explore = () => {
  // Sample data for each explore section
  const newsItems = [
    {
      id: 1,
      title: "QCSP Hosts Successful Quantum Workshop",
      date: "May 2, 2025",
      excerpt: "Over 100 participants attended our latest quantum computing workshop...",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "New Quantum Research Partnership Announced",
      date: "April 27, 2025",
      excerpt: "QCSP partners with leading universities to advance quantum research...",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  const institutePrograms = [
    {
      id: 1,
      title: "Quantum Computing Fundamentals",
      description: "A beginner's course to quantum computing concepts and algorithms.",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Quantum Algorithm Design",
      description: "Advanced course for those familiar with quantum computing basics.",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Quantum Machine Learning",
      description: "Specialized course on quantum approaches to machine learning.",
      level: "Advanced"
    }
  ];
  
  const workshops = [
    {
      id: 1,
      title: "Hands-on Quantum Programming",
      date: "June 25, 2025",
      location: "Online",
      description: "Learn to program quantum computers using popular frameworks."
    },
    {
      id: 2,
      title: "Quantum Computing for Business",
      date: "July 15, 2025",
      location: "Manila, Philippines",
      description: "Explore business applications of quantum computing technologies."
    }
  ];
  
  const blogs = [
    {
      id: 1,
      title: "Understanding Quantum Supremacy",
      author: "Dr. Maria Santos",
      date: "May 5, 2025",
      excerpt: "An exploration of what quantum supremacy means and its implications..."
    },
    {
      id: 2,
      title: "Quantum Computing in the Philippines",
      author: "Juan Dela Cruz",
      date: "April 30, 2025",
      excerpt: "The current state and future of quantum computing in the Philippines..."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Page Header */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-montserrat font-light text-qcsp-primary">Explore</h1>
            <p className="mt-2 text-gray-600">
              Discover resources, events, and knowledge about quantum computing
            </p>
          </div>
        </div>
        
        {/* News Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-baseline mb-6">
              <h2 className="text-2xl font-montserrat font-light text-qcsp-primary">Latest News</h2>
              <a href="#" className="text-sm text-qcsp-primary hover:underline font-montserrat">View All</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsItems.map(item => (
                <div key={item.id} className="quantum-card hover-glow flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-2">
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-montserrat font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{item.excerpt}</p>
                    <a href="#" className="text-qcsp-primary font-montserrat text-sm hover:underline">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* QCSP Institute */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-baseline mb-6">
              <h2 className="text-2xl font-montserrat font-light text-qcsp-primary">QCSP Institute</h2>
              <a href="#" className="text-sm text-qcsp-primary hover:underline font-montserrat">View All Programs</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {institutePrograms.map(program => (
                <div key={program.id} className="quantum-card p-6 hover-glow">
                  <div className="flex items-center mb-3">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full font-montserrat ${
                      program.level === "Beginner" ? "bg-green-100 text-green-800" :
                      program.level === "Intermediate" ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {program.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-montserrat font-medium mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <a href="#" className="text-qcsp-primary font-montserrat text-sm hover:underline">
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Workshops */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-baseline mb-6">
              <h2 className="text-2xl font-montserrat font-light text-qcsp-primary">Upcoming Workshops</h2>
              <a href="#" className="text-sm text-qcsp-primary hover:underline font-montserrat">View All Workshops</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workshops.map(workshop => (
                <div key={workshop.id} className="quantum-card p-6 hover-glow">
                  <h3 className="text-xl font-montserrat font-medium mb-2">{workshop.title}</h3>
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-sm text-gray-500">📅 {workshop.date}</span>
                    <span className="text-sm text-gray-500">📍 {workshop.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  <button className="secondary-button">Register Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blogs */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-baseline mb-6">
              <h2 className="text-2xl font-montserrat font-light text-qcsp-primary">Latest Blogs</h2>
              <a href="#" className="text-sm text-qcsp-primary hover:underline font-montserrat">View All Blogs</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map(blog => (
                <div key={blog.id} className="quantum-card p-6 hover-glow">
                  <h3 className="text-xl font-montserrat font-medium mb-2">{blog.title}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-gray-500">By {blog.author}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <a href="#" className="text-qcsp-primary font-montserrat text-sm hover:underline">
                    Read More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
