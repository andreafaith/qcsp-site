
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Calendar, MapPin, Clock, ChevronRight, Users, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Quantum Computing Workshop",
      date: "May 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Manila, Philippines",
      type: "In-person",
      description: "Join us for a hands-on workshop on quantum computing principles and applications.",
      attendees: 45,
      image: "https://images.unsplash.com/photo-1516110833967-9b037a7ba388?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Introduction to Qiskit",
      date: "May 20, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Online",
      type: "Virtual",
      description: "Learn how to use IBM's Qiskit framework for quantum computing programming.",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1623157735531-4a5680363106?auto=format&fit=crop&q=80&w=1372&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Quantum Machine Learning Seminar",
      date: "June 5, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Cebu City, Philippines",
      type: "In-person",
      description: "Discover how quantum computing is revolutionizing machine learning algorithms.",
      attendees: 75,
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Quantum Physics Fundamentals",
      date: "June 12, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Makati City, Philippines",
      type: "In-person",
      description: "A comprehensive introduction to quantum physics concepts for beginners.",
      attendees: 60,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
    }
  ];
  
  const pastEvents = [
    {
      id: 5,
      title: "Quantum Algorithms Deep Dive",
      date: "April 10, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Online",
      type: "Virtual",
      description: "An advanced session exploring quantum algorithms and their applications.",
      attendees: 90,
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
    },
    {
      id: 6,
      title: "QCSP Annual Conference",
      date: "March 25-27, 2025",
      time: "All day",
      location: "Manila, Philippines",
      type: "In-person",
      description: "The biggest quantum computing event in the Philippines with speakers from around the world.",
      attendees: 250,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
    }
  ];
  
  return (
    <DashboardLayout title="Events" subtitle="Discover and attend quantum computing events across the Philippines and online.">
      <Tabs defaultValue="upcoming" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="upcoming" className="px-6">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past" className="px-6">Past Events</TabsTrigger>
          </TabsList>
          <Button className="bg-[#1050CE] hover:bg-[#0F3F9E]">
            <Calendar className="w-4 h-4 mr-2" />
            Add to Calendar
          </Button>
        </div>
        
        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="quantum-card overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-montserrat text-xl font-medium text-gray-800">{event.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${event.type === 'Virtual' ? 'bg-[#E5DB00]/20 text-[#CBC316]' : 'bg-[#1050CE]/10 text-[#1050CE]'}`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <CalendarDays className="w-4 h-4 mr-2 text-[#1050CE]" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-[#1050CE]" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-[#1050CE]" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-600 text-sm">{event.description}</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{event.attendees} attending</span>
                    </div>
                    <Button variant="outline" className="text-[#1050CE] border-[#1050CE]">
                      Register <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="past">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="quantum-card overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover filter grayscale" />
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-montserrat text-xl font-medium text-gray-700">{event.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-600`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-gray-500">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-500 text-sm">{event.description}</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{event.attendees} attended</span>
                    </div>
                    <Button variant="outline" className="text-gray-500 border-gray-300">
                      View Summary <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Events;
