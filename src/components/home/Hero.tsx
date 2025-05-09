
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Create dots for the quantum grid effect
  const quantumDots = Array(10).fill(0).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 1 + 0.5}rem`,
    animationDelay: `${Math.random() * 5}s`
  }));
  
  // Create circuit lines for the background
  const circuitLines = [
    { id: 1, top: '20%', left: '10%', width: '15%', height: '1px', transform: 'rotate(25deg)' },
    { id: 2, top: '45%', left: '75%', width: '20%', height: '1px', transform: 'rotate(-15deg)' },
    { id: 3, top: '70%', left: '5%', width: '10%', height: '1px', transform: 'rotate(40deg)' },
    { id: 4, top: '25%', right: '10%', width: '1px', height: '30%', transform: 'none' },
    { id: 5, top: '65%', right: '30%', width: '1px', height: '20%', transform: 'none' },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-16">
      {/* Quantum grid background */}
      <div className="absolute inset-0 quantum-grid opacity-10"></div>
      
      {/* Abstract quantum particles */}
      {quantumDots.map(dot => (
        <div
          key={dot.id}
          className="quantum-particle"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.animationDelay
          }}
        ></div>
      ))}
      
      {/* Circuit lines */}
      {circuitLines.map(line => (
        <div
          key={line.id}
          className="circuit-line"
          style={{
            top: line.top,
            left: line.left,
            right: line.right,
            width: line.width,
            height: line.height,
            transform: line.transform
          }}
        ></div>
      ))}
      
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-light text-gray-900">
              <span className="block">Pioneering Quantum</span>
              <span className="block text-qcsp-primary">Computing in PH</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Join the Quantum Computing Society of the Philippines in exploring 
              the frontiers of quantum technology and innovation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="primary-button">
                Learn More
              </Link>
              <Link to="/auth" className="secondary-button">
                Join Our Community
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-72 h-72">
              {/* Quantum sphere visualization */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-qcsp-primary/20 to-qcsp-primary/5 animate-pulse-light"></div>
              <div className="absolute inset-4 rounded-full border-2 border-qcsp-primary/20 animate-rotate-slow"></div>
              <div className="absolute inset-8 rounded-full border border-qcsp-secondary/30 animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-qcsp-primary/80 animate-float shadow-lg shadow-qcsp-primary/30"></div>
              </div>
              <div className="absolute inset-0 quantum-grid animate-grid-flash"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
