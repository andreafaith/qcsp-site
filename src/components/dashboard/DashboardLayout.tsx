
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/services/authService';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import { 
  UserCheck, 
  Calendar, 
  FileText, 
  BookOpen, 
  Users, 
  Bell,
  User,
  LogOut,
  Home,
  Settings,
  Mail,
  FileCode,
  Menu,
  X,
  Atom
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const DashboardLayout = ({ children, title = "Dashboard", subtitle = "Here's what's happening with your membership today." }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // If no user is logged in, redirect to auth page
  React.useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/auth');
    }
  }, [navigate]);

  const handleLogout = () => {
    authService.logout();
    navigate('/auth');
  };

  if (!user) {
    return null; // Will redirect in useEffect
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', path: '/member-dashboard' },
    { icon: Calendar, label: 'Events', path: '/member-dashboard/events' },
    { icon: FileText, label: 'Resources', path: '/member-dashboard/resources' },
    { icon: BookOpen, label: 'Courses', path: '/member-dashboard/courses' },
    { icon: Users, label: 'Community', path: '/member-dashboard/community' },
    { icon: Bell, label: 'Notifications', path: '/member-dashboard/notifications' },
    { icon: FileCode, label: 'Quantum Apps', path: '/member-dashboard/quantum-apps' },
  ];

  const profileItems = [
    { icon: User, label: 'Profile', path: '/member-dashboard/profile' },
    { icon: Settings, label: 'Settings', path: '/member-dashboard/settings' },
    { icon: Mail, label: 'Support', path: '/member-dashboard/support' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader user={user} onLogout={handleLogout} />
      
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${sidebarOpen ? 'w-64' : 'w-20'}`}>
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div className={`flex items-center space-x-2 ${!sidebarOpen && 'justify-center w-full'}`}>
              <Atom className="text-qcsp-primary" size={24} />
              {sidebarOpen && <span className="font-montserrat font-medium">Member Portal</span>}
            </div>
            <button 
              onClick={toggleSidebar} 
              className="text-gray-500 hover:text-qcsp-primary transition-colors"
            >
              {sidebarOpen ? <Menu size={20} /> : <Menu size={20} />}
            </button>
          </div>
          
          <nav className="py-4">
            <ul className="space-y-1">
              {sidebarItems.map((item, index) => {
                const isActive = window.location.pathname === item.path;
                return (
                  <li key={index}>
                    <a 
                      href={item.path} 
                      className={`flex items-center px-4 py-3 ${isActive ? 'bg-qcsp-primary/10 text-qcsp-primary' : 'text-gray-700'} hover:bg-gray-100 hover:text-qcsp-primary transition-colors ${!sidebarOpen ? 'justify-center' : ''}`}
                    >
                      <item.icon size={20} className={sidebarOpen ? 'mr-3' : ''} />
                      {sidebarOpen && <span>{item.label}</span>}
                    </a>
                  </li>
                );
              })}
            </ul>
            
            <div className="pt-8 mt-8 border-t border-gray-200">
              <ul className="space-y-1">
                {profileItems.map((item, index) => {
                  const isActive = window.location.pathname === item.path;
                  return (
                    <li key={index}>
                      <a 
                        href={item.path} 
                        className={`flex items-center px-4 py-3 ${isActive ? 'bg-qcsp-primary/10 text-qcsp-primary' : 'text-gray-700'} hover:bg-gray-100 hover:text-qcsp-primary transition-colors ${!sidebarOpen ? 'justify-center' : ''}`}
                      >
                        <item.icon size={20} className={sidebarOpen ? 'mr-3' : ''} />
                        {sidebarOpen && <span>{item.label}</span>}
                      </a>
                    </li>
                  );
                })}
                <li>
                  <button 
                    onClick={handleLogout} 
                    className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-red-500 w-full transition-colors ${!sidebarOpen ? 'justify-center' : ''}`}
                  >
                    <LogOut size={20} className={sidebarOpen ? 'mr-3' : ''} />
                    {sidebarOpen && <span>Log Out</span>}
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="flex-grow p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-montserrat font-light">{title}</h1>
              <p className="text-gray-600">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
      
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
