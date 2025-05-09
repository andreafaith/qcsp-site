
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-qcsp-primary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="font-montserrat font-medium text-qcsp-primary text-sm">QCSP</span>
            </Link>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <a href="#" className="text-xs text-gray-500 hover:text-qcsp-primary">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-xs text-gray-500 hover:text-qcsp-primary">Terms of Service</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-xs text-gray-500 hover:text-qcsp-primary">Contact Us</a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-center md:text-right text-sm text-gray-500">
              © 2025 Quantum Computing Society of the Philippines. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
