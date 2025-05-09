
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Mail, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardHeaderProps {
  user: any;
  onLogout: () => void;
}

const DashboardHeader = ({ user, onLogout }: DashboardHeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Logo and site name */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-qcsp-primary rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse-light"></div>
            </div>
            <span className="font-montserrat font-medium text-qcsp-primary text-lg hidden sm:inline-block">QCSP</span>
          </Link>
          
          {/* Search */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-gray-100 w-full pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-qcsp-primary focus:bg-white"
              />
            </div>
          </div>
          
          {/* Right side icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 text-gray-600 hover:text-qcsp-primary hover:bg-gray-100 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-600 hover:text-qcsp-primary hover:bg-gray-100 rounded-full relative">
              <Mail size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="border-l border-gray-200 h-8 mx-2 hidden sm:block"></div>
            
            {/* User dropdown */}
            <div className="flex items-center">
              <div className="h-9 w-9 rounded-full bg-qcsp-primary/10 flex items-center justify-center text-qcsp-primary font-medium">
                {user?.name?.charAt(0) || <User size={18} />}
              </div>
              <div className="ml-2 hidden lg:block">
                <p className="text-sm font-medium">{user?.name || 'User'}</p>
                <p className="text-xs text-gray-500">{user?.email || ''}</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onLogout} 
              className="ml-2 hidden sm:inline-flex"
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
