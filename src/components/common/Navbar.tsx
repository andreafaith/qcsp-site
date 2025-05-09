
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-qcsp-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and site name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-qcsp-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse-light"></div>
              </div>
              <span className="font-montserrat font-medium text-qcsp-primary text-lg">QCSP</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-item text-gray-800 hover:text-qcsp-primary transition-colors">Home</Link>
            <Link to="/explore" className="nav-item text-gray-800 hover:text-qcsp-primary transition-colors">Explore</Link>
            <Link to="/about" className="nav-item text-gray-800 hover:text-qcsp-primary transition-colors">About QCSP</Link>
            <Link to="/contact" className="nav-item text-gray-800 hover:text-qcsp-primary transition-colors">Contact Us</Link>
            <Link to="/auth" className="primary-button">Be One of Us</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-qcsp-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 border-t border-qcsp-primary/10">
          <Link 
            to="/" 
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-qcsp-primary transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/explore" 
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-qcsp-primary transition-colors"
            onClick={toggleMenu}
          >
            Explore
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-qcsp-primary transition-colors"
            onClick={toggleMenu}
          >
            About QCSP
          </Link>
          <Link 
            to="/contact" 
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-qcsp-primary transition-colors"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <Link 
            to="/auth" 
            className="block px-3 py-2 text-base font-medium bg-qcsp-primary text-white rounded-md"
            onClick={toggleMenu}
          >
            Be One of Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
