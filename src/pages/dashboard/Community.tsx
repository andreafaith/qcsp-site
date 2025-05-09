import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { MessageSquare, Calendar, User, ThumbsUp, MessageCircle, Share2, Search, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';

const Community = () => {
  const discussions = [
    {
      id: 1,
      user: {
        name: "Maria Santos",
        avatar: "https://i.pravatar.cc/150?img=1",
        role: "Quantum Researcher"
      },
      date: "2 hours ago",
      content: "Has anyone here implemented Grover's algorithm on IBM's quantum computers? I'm facing some challenges with the oracle implementation.",
      likes: 12,
      comments: 8,
      tags: ["algorithms", "ibm-quantum", "grovers-algorithm"]
    },
    {
      id: 2,
      user: {
        name: "Carlos Mendoza",
        avatar: "https://i.pravatar.cc/150?img=2",
        role: "Quantum Developer"
      },
      date: "5 hours ago",
      content: "Excited to share my latest article on quantum error correction techniques! I've compared several approaches and their practical applications. Would love your feedback.",
      likes: 24,
      comments: 16,
      tags: ["error-correction", "research", "tutorial"]
    },
    {
      id: 3,
      user: {
        name: "Elena Cruz",
        avatar: "https://i.pravatar.cc/150?img=3",
        role: "Physics Professor"
      },
      date: "1 day ago",
      content: "I'm organizing a study group for the upcoming 'Quantum Algorithms' course. We'll meet weekly online to discuss assignments and work through problems together. Anyone interested?",
      likes: 35,
      comments: 22,
      tags: ["study-group", "learning", "algorithms"]
    }
  ];
  
  const events = [
    {
      id: 1,
      title: "Quantum Computing Workshop",
      date: "May 15, 2025",
      attendees: 45,
      image: "https://images.unsplash.com/photo-1516110833967-9b037a7ba388?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Introduction to Qiskit",
      date: "May 20, 2025",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1623157735531-4a5680363106?auto=format&fit=crop&q=80&w=1372&ixlib=rb-4.0.3"
    }
  ];
  
  const members = [
    {
      id: 1,
      name: "John Reyes",
      avatar: "https://i.pravatar.cc/150?img=4",
      role: "Quantum Engineer",
      online: true
    },
    {
      id: 2,
      name: "Sofia Lee",
      avatar: "https://i.pravatar.cc/150?img=5",
      role: "Researcher",
      online: true
    },
    {
      id: 3,
      name: "Miguel Torres",
      avatar: "https://i.pravatar.cc/150?img=6",
      role: "Student",
      online: false
    },
    {
      id: 4,
      name: "Laura Garcia",
      avatar: "https://i.pravatar.cc/150?img=7",
      role: "Professor",
      online: true
    }
  ];
  
  return (
    <DashboardLayout title="Community" subtitle="Connect with other quantum computing enthusiasts, share ideas, and participate in discussions.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="discussions" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="discussions" className="px-6">Discussions</TabsTrigger>
                <TabsTrigger value="questions" className="px-6">Questions</TabsTrigger>
                <TabsTrigger value="projects" className="px-6">Projects</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="discussions">
              <div className="quantum-card p-6 mb-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=8" />
                    <AvatarFallback>YN</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <Textarea placeholder="Start a discussion with the community..." className="mb-4" />
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">Use # to add topics</div>
                      <Button className="bg-[#1050CE] hover:bg-[#0F3F9E]">Post Discussion</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {discussions.map((post) => (
                  <div key={post.id} className="quantum-card p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={post.user.avatar} />
                        <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <div>
                            <span className="font-medium">{post.user.name}</span>
                            <span className="text-gray-500 text-sm ml-2">{post.user.role}</span>
                          </div>
                          <span className="text-gray-500 text-xs">{post.date}</span>
                        </div>
                        
                        <p className="text-gray-700 mb-3">{post.content}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="bg-[#1050CE]/10 text-[#1050CE] text-xs px-2 py-1 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-4">
                          <button className="flex items-center gap-1 text-gray-500 hover:text-[#1050CE]">
                            <ThumbsUp size={16} />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-500 hover:text-[#1050CE]">
                            <MessageCircle size={16} />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-500 hover:text-[#1050CE]">
                            <Share2 size={16} />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="questions">
              <div>
                <p>This is the Questions tab content.</p>
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div>
                <p>This is the Projects tab content.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <div className="quantum-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-montserrat text-lg font-medium">Active Members</h3>
              <a href="#" className="text-[#1050CE] text-sm">View All</a>
            </div>
            
            <div className="divide-y">
              {members.map((member) => (
                <div key={member.id} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      {member.online && (
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{member.name}</div>
                      <div className="text-gray-500 text-xs">{member.role}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MessageSquare size={16} />
                  </Button>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              <Users size={16} className="mr-2" />
              Find Members
            </Button>
          </div>
          
          <div className="quantum-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-montserrat text-lg font-medium">Upcoming Events</h3>
              <a href="/member-dashboard/events" className="text-[#1050CE] text-sm">View All</a>
            </div>
            
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="flex gap-3">
                  <div className="w-12 h-12 bg-[#1050CE]/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Calendar size={20} className="text-[#1050CE]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <p className="text-gray-500 text-xs">{event.date}</p>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <Users size={12} className="mr-1" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Community;
