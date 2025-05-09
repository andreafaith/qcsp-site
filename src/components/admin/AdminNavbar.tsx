
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Mail, Search, User, Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminNavbarProps {
  user: any;
  onLogout: () => void;
}

const AdminNavbar = ({ user, onLogout }: AdminNavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-qcsp-primary text-white shadow-md sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Logo and site name */}
          <Link to="/admin-dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-qcsp-primary rounded-full animate-pulse-light"></div>
            </div>
            <span className="font-montserrat font-medium text-white text-lg hidden sm:inline-block">QCSP Admin</span>
          </Link>
          
          {/* Search */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-white/70" />
              </div>
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-qcsp-primary-darker w-full pl-10 pr-4 py-2 rounded-full text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Right side icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 text-white/80 hover:text-white hover:bg-qcsp-primary-darker rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-white/80 hover:text-white hover:bg-qcsp-primary-darker rounded-full relative">
              <Mail size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="border-l border-white/20 h-8 mx-2 hidden sm:block"></div>
            
            {/* Admin badge */}
            <div className="hidden sm:flex items-center bg-qcsp-primary-darker px-2 py-1 rounded-full">
              <Shield size={14} className="text-qcsp-secondary-lightest mr-1" />
              <span className="text-xs font-medium text-qcsp-secondary-lightest">Admin</span>
            </div>
            
            {/* User dropdown */}
            <div className="flex items-center">
              <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-white font-medium border border-white/30">
                {user?.name?.charAt(0) || <User size={18} />}
              </div>
              <div className="ml-2 hidden lg:block">
                <p className="text-sm font-medium text-white">{user?.name || 'User'}</p>
                <p className="text-xs text-white/70">{user?.email || ''}</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onLogout} 
              className="ml-2 hidden sm:inline-flex border-white/30 text-white hover:bg-white/10"
            >
              Log Out
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="p-2 rounded-md text-white/80 hover:text-white hover:bg-qcsp-primary-darker md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 pb-3 pt-2 border-t border-white/20">
            <div className="flex items-center px-4 py-2">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-white/70" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-qcsp-primary-darker w-full pl-10 pr-4 py-2 rounded-full text-white placeholder-white/70 border border-white/20"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1 px-2 pt-2">
              <Link to="/admin-dashboard" className="px-3 py-2 rounded-md text-base font-medium text-white hover:bg-qcsp-primary-darker">
                Dashboard
              </Link>
              <Link to="/admin-dashboard/users" className="px-3 py-2 rounded-md text-base font-medium text-white hover:bg-qcsp-primary-darker">
                Users
              </Link>
              <Link to="/admin-dashboard/events" className="px-3 py-2 rounded-md text-base font-medium text-white hover:bg-qcsp-primary-darker">
                Events
              </Link>
              <Link to="/admin-dashboard/resources" className="px-3 py-2 rounded-md text-base font-medium text-white hover:bg-qcsp-primary-darker">
                Resources
              </Link>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onLogout} 
                className="mx-3 mt-2 border-white/30 text-white hover:bg-white/10"
              >
                Log Out
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminNavbar;
