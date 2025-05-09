
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/services/authService';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { 
  UserCheck, 
  Users, 
  Calendar, 
  FileText, 
  Plus, 
  Upload, 
  Send, 
  UserPlus, 
  FileBarChart,
  Bell
} from 'lucide-react';

// Custom components for the admin dashboard
import AdminNavbar from '@/components/admin/AdminNavbar';
import AdminFooter from '@/components/admin/AdminFooter';
import CreateEventDialog from '@/components/admin/dialogs/CreateEventDialog';
import UploadMaterialsDialog from '@/components/admin/dialogs/UploadMaterialsDialog';
import SendAnnouncementDialog from '@/components/admin/dialogs/SendAnnouncementDialog';
import AddUserDialog from '@/components/admin/dialogs/AddUserDialog';
import GenerateReportsDialog from '@/components/admin/dialogs/GenerateReportsDialog';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();
  
  // Dialog states for quick actions
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const [uploadMaterialsOpen, setUploadMaterialsOpen] = useState(false);
  const [sendAnnouncementOpen, setSendAnnouncementOpen] = useState(false);
  const [addUserOpen, setAddUserOpen] = useState(false);
  const [generateReportsOpen, setGenerateReportsOpen] = useState(false);

  // If no user is logged in or user is not admin, redirect to auth page
  React.useEffect(() => {
    if (!authService.isAuthenticated() || user?.role !== 'admin') {
      navigate('/auth');
    }
  }, [navigate, user]);

  const handleLogout = () => {
    authService.logout();
    toast.success('You have been logged out successfully');
    navigate('/auth');
  };

  if (!user || user.role !== 'admin') {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminNavbar user={user} onLogout={handleLogout} />
      
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="quantum-card p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-qcsp-primary/10 flex items-center justify-center">
                  <UserCheck size={28} className="text-qcsp-primary" />
                </div>
                <div className="ml-4">
                  <h1 className="text-3xl font-montserrat font-light">Admin Dashboard</h1>
                  <p className="text-gray-600">Welcome back, {user.name}!</p>
                </div>
              </div>
              <Button variant="outline" onClick={handleLogout} className="border-qcsp-primary/20 hover:bg-qcsp-primary/10 text-qcsp-primary">
                Log Out
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-qcsp-primary/20 hover-glow transition-all transform hover:scale-105">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users size={24} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Members</p>
                    <h3 className="text-2xl font-montserrat font-medium">247</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-qcsp-primary/20 hover-glow transition-all transform hover:scale-105">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Calendar size={24} className="text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Active Events</p>
                    <h3 className="text-2xl font-montserrat font-medium">3</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-qcsp-primary/20 hover-glow transition-all transform hover:scale-105">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <FileText size={24} className="text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Learning Materials</p>
                    <h3 className="text-2xl font-montserrat font-medium">15</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-qcsp-primary/20 hover-glow transition-all transform hover:scale-105">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Users size={24} className="text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">New Sign-ups</p>
                    <h3 className="text-2xl font-montserrat font-medium">12</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 quantum-card p-6">
                <h2 className="text-xl font-montserrat mb-4 flex items-center">
                  <Users className="mr-2 text-qcsp-primary" /> User Management
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                        <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap">Individual</td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                        <td className="px-6 py-4 whitespace-nowrap">jane@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap">Student</td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">Robert Johnson</td>
                        <td className="px-6 py-4 whitespace-nowrap">robert@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap">Institutional</td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Button 
                  className="mt-4 w-full bg-qcsp-primary hover:bg-qcsp-primary-dark text-white"
                  onClick={() => setAddUserOpen(true)}
                >
                  Manage Users
                </Button>
              </div>
              
              <div className="quantum-card p-6">
                <h2 className="text-xl font-montserrat mb-4 flex items-center">
                  <Plus className="mr-2 text-qcsp-primary" /> Quick Actions
                </h2>
                <div className="space-y-3">
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-qcsp-primary hover:bg-qcsp-primary-dark"
                    onClick={() => setCreateEventOpen(true)}
                  >
                    <Calendar className="h-4 w-4" />
                    Create Event
                  </Button>
                  
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-qcsp-primary hover:bg-qcsp-primary-dark"
                    onClick={() => setUploadMaterialsOpen(true)}
                  >
                    <Upload className="h-4 w-4" />
                    Upload Materials
                  </Button>
                  
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-qcsp-primary hover:bg-qcsp-primary-dark"
                    onClick={() => setSendAnnouncementOpen(true)}
                  >
                    <Send className="h-4 w-4" />
                    Send Announcement
                  </Button>
                  
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-qcsp-primary hover:bg-qcsp-primary-dark"
                    onClick={() => setAddUserOpen(true)}
                  >
                    <UserPlus className="h-4 w-4" />
                    Add New User
                  </Button>
                  
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-qcsp-primary hover:bg-qcsp-primary-dark"
                    onClick={() => setGenerateReportsOpen(true)}
                  >
                    <FileBarChart className="h-4 w-4" />
                    Generate Reports
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="quantum-card p-6 mb-8">
            <h2 className="text-xl font-montserrat mb-4 flex items-center">
              <Bell className="mr-2 text-qcsp-primary" /> Recent Activity
            </h2>
            <div className="space-y-4">
              <div className="flex items-start p-3 border-l-2 border-qcsp-primary bg-white rounded shadow-sm">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-qcsp-primary/10 flex items-center justify-center">
                    <UserPlus size={18} className="text-qcsp-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">New member registration</p>
                  <p className="text-xs text-gray-500">Dr. Maria Santos from UP Diliman joined as an institutional member</p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 border-l-2 border-qcsp-primary bg-white rounded shadow-sm">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-qcsp-primary/10 flex items-center justify-center">
                    <Calendar size={18} className="text-qcsp-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">New event created</p>
                  <p className="text-xs text-gray-500">Quantum Computing Workshop scheduled for June 15, 2025</p>
                  <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 border-l-2 border-qcsp-primary bg-white rounded shadow-sm">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-qcsp-primary/10 flex items-center justify-center">
                    <FileText size={18} className="text-qcsp-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">New learning material uploaded</p>
                  <p className="text-xs text-gray-500">Introduction to Quantum Gates and Circuits</p>
                  <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AdminFooter />

      {/* Dialog components for quick actions */}
      <CreateEventDialog open={createEventOpen} onOpenChange={setCreateEventOpen} />
      <UploadMaterialsDialog open={uploadMaterialsOpen} onOpenChange={setUploadMaterialsOpen} />
      <SendAnnouncementDialog open={sendAnnouncementOpen} onOpenChange={setSendAnnouncementOpen} />
      <AddUserDialog open={addUserOpen} onOpenChange={setAddUserOpen} />
      <GenerateReportsDialog open={generateReportsOpen} onOpenChange={setGenerateReportsOpen} />
    </div>
  );
};

export default AdminDashboard;
