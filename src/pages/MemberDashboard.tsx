
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const MemberDashboard = () => {
  const navigate = useNavigate();

  // Redirect to the dashboard home page
  useEffect(() => {
    navigate('/member-dashboard/events');
  }, [navigate]);

  return (
    <DashboardLayout 
      title="Member Dashboard" 
      subtitle="Welcome to the QCSP Member Portal. Access all your membership resources here."
    >
      <div className="text-center py-8">
        <p>Redirecting to Events dashboard...</p>
      </div>
    </DashboardLayout>
  );
};

export default MemberDashboard;
