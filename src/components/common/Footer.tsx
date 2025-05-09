
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-qcsp-primary/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-qcsp-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="font-montserrat font-medium text-qcsp-primary text-lg">QCSP</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Quantum Computing Society of the Philippines (QCSP), also known as OneQuantum Philippines
            </p>
          </div>
          
          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="font-montserrat text-sm font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 hover:text-qcsp-primary">Home</Link></li>
              <li><Link to="/explore" className="text-sm text-gray-600 hover:text-qcsp-primary">Explore</Link></li>
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-qcsp-primary">About QCSP</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-qcsp-primary">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-montserrat text-sm font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-sm text-gray-600 hover:text-qcsp-primary">News</Link></li>
              <li><Link to="/explore" className="text-sm text-gray-600 hover:text-qcsp-primary">QCSP Institute</Link></li>
              <li><Link to="/explore" className="text-sm text-gray-600 hover:text-qcsp-primary">Workshops</Link></li>
              <li><Link to="/explore" className="text-sm text-gray-600 hover:text-qcsp-primary">Membership</Link></li>
              <li><Link to="/explore" className="text-sm text-gray-600 hover:text-qcsp-primary">Blogs</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="col-span-1">
            <h3 className="font-montserrat text-sm font-medium text-gray-900 mb-4">Connect</h3>
            <p className="text-sm text-gray-600 mb-4">
              Join our community of quantum computing enthusiasts in the Philippines
            </p>
            <Link to="/auth" className="secondary-button text-sm">Be One of Us</Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Quantum Computing Society of the Philippines. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
