
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const AdminFooter = () => {
  return (
    <footer className="bg-qcsp-primary text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <Link to="/admin-dashboard" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-qcsp-primary rounded-full"></div>
              </div>
              <span className="font-montserrat font-medium text-white text-sm flex items-center">
                QCSP <Shield size={14} className="ml-1" />
              </span>
            </Link>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <a href="#" className="text-xs text-white/70 hover:text-white">Admin Guide</a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-xs text-white/70 hover:text-white">Support</a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-xs text-white/70 hover:text-white">Help</a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-center md:text-right text-xs text-white/70">
              © 2025 Quantum Computing Society of the Philippines. Admin Portal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
