
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  Bell, 
  Calendar, 
  User, 
  MessageSquare, 
  GraduationCap, 
  FileText, 
  Settings,
  Info,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'event',
      title: 'Quantum Computing Workshop',
      message: 'The workshop you registered for starts in 2 days. Don\'t forget to prepare!',
      time: '2 hours ago',
      read: false,
      icon: Calendar
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message from Maria Santos',
      message: 'Maria sent you a message regarding the quantum algorithms study group.',
      time: '5 hours ago',
      read: false,
      icon: MessageSquare
    },
    {
      id: 3,
      type: 'course',
      title: 'Course Progress Update',
      message: 'You\'ve completed 60% of "Quantum Computing Fundamentals". Keep it up!',
      time: '1 day ago',
      read: true,
      icon: GraduationCap
    },
    {
      id: 4,
      type: 'resource',
      title: 'New Resource Available',
      message: 'A new whitepaper on Quantum Error Correction has been added to the resources section.',
      time: '2 days ago',
      read: true,
      icon: FileText
    },
    {
      id: 5,
      type: 'system',
      title: 'Password Changed',
      message: 'Your account password was successfully changed. If this wasn\'t you, please contact support.',
      time: '3 days ago',
      read: true,
      icon: Settings
    },
    {
      id: 6,
      type: 'announcement',
      title: 'QCSP Annual Conference',
      message: 'Registration for the QCSP Annual Conference is now open. Early bird tickets available!',
      time: '1 week ago',
      read: true,
      icon: Info
    }
  ];
  
  const settings = [
    {
      id: 'events',
      title: 'Events and Workshops',
      description: 'Notifications about upcoming events, workshops, and webinars',
      email: true,
      push: true
    },
    {
      id: 'messages',
      title: 'Direct Messages',
      description: 'Notifications when someone sends you a message',
      email: true,
      push: true
    },
    {
      id: 'community',
      title: 'Community Activity',
      description: 'Replies to your posts, mentions, and other community interactions',
      email: false,
      push: true
    },
    {
      id: 'courses',
      title: 'Course Updates',
      description: 'New courses, lessons, and your progress updates',
      email: true,
      push: false
    },
    {
      id: 'resources',
      title: 'New Resources',
      description: 'When new learning materials and resources are added',
      email: false,
      push: true
    },
    {
      id: 'system',
      title: 'System Notifications',
      description: 'Account updates, security alerts, and important announcements',
      email: true,
      push: true
    }
  ];
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'event': return <Calendar className="text-blue-500" size={20} />;
      case 'message': return <MessageSquare className="text-green-500" size={20} />;
      case 'course': return <GraduationCap className="text-purple-500" size={20} />;
      case 'resource': return <FileText className="text-yellow-500" size={20} />;
      case 'system': return <Settings className="text-gray-500" size={20} />;
      case 'announcement': return <Info className="text-[#1050CE]" size={20} />;
      default: return <Bell className="text-[#1050CE]" size={20} />;
    }
  };
  
  return (
    <DashboardLayout title="Notifications" subtitle="Stay updated with the latest activities, messages, and announcements.">
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="all" className="px-6">All</TabsTrigger>
            <TabsTrigger value="unread" className="px-6">Unread</TabsTrigger>
            <TabsTrigger value="settings" className="px-6">Settings</TabsTrigger>
          </TabsList>
          <Button variant="outline">Mark All as Read</Button>
        </div>
        
        <TabsContent value="all">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`quantum-card p-5 border-l-4 ${notification.read ? 'border-gray-200' : 'border-[#1050CE]'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${notification.read ? 'bg-gray-100' : 'bg-[#1050CE]/10'}`}>
                    {getIcon(notification.type)}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h3 className={`font-medium ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                        {notification.title}
                      </h3>
                      <span className="text-gray-500 text-xs">{notification.time}</span>
                    </div>
                    
                    <p className={`text-sm ${notification.read ? 'text-gray-500' : 'text-gray-700'}`}>
                      {notification.message}
                    </p>
                  </div>
                  
                  {!notification.read && (
                    <div className="w-2 h-2 bg-[#1050CE] rounded-full mt-2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="unread">
          <div className="space-y-4">
            {notifications.filter(n => !n.read).map((notification) => (
              <div 
                key={notification.id} 
                className="quantum-card p-5 border-l-4 border-[#1050CE]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1050CE]/10 flex items-center justify-center">
                    {getIcon(notification.type)}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h3 className="font-medium text-gray-900">{notification.title}</h3>
                      <span className="text-gray-500 text-xs">{notification.time}</span>
                    </div>
                    
                    <p className="text-sm text-gray-700">{notification.message}</p>
                  </div>
                  
                  <div className="w-2 h-2 bg-[#1050CE] rounded-full mt-2"></div>
                </div>
              </div>
            ))}
            
            {notifications.filter(n => !n.read).length === 0 && (
              <div className="quantum-card p-8 text-center">
                <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">All caught up!</h3>
                <p className="text-gray-500">You have no unread notifications at the moment.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="quantum-card p-6">
            <h3 className="font-montserrat text-lg font-medium mb-6">Notification Preferences</h3>
            
            <div className="space-y-6">
              {settings.map((setting) => (
                <div key={setting.id}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium">{setting.title}</h4>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Switch id={`${setting.id}-email`} defaultChecked={setting.email} />
                        <label htmlFor={`${setting.id}-email`} className="text-sm text-gray-700">Email</label>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Switch id={`${setting.id}-push`} defaultChecked={setting.push} />
                        <label htmlFor={`${setting.id}-push`} className="text-sm text-gray-700">Push</label>
                      </div>
                    </div>
                  </div>
                  <Separator className="mt-4" />
                </div>
              ))}
              
              <Button className="mt-4 bg-[#1050CE] hover:bg-[#0F3F9E]">Save Preferences</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Notifications;
