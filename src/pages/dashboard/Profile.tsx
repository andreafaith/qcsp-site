
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  User, 
  Mail, 
  MapPin, 
  Building,
  GraduationCap, 
  Briefcase, 
  Calendar, 
  FileText, 
  Github,
  Linkedin,
  Twitter,
  Globe,
  Edit
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Profile = () => {
  const user = {
    name: "Maria Santos",
    avatar: "https://i.pravatar.cc/150?img=1",
    email: "maria.santos@example.com",
    role: "Quantum Researcher",
    location: "Manila, Philippines",
    organization: "University of the Philippines",
    joinDate: "January 15, 2025",
    bio: "Quantum physics researcher specializing in quantum error correction techniques. Currently working on developing noise-resilient quantum algorithms for near-term quantum computers.",
    education: [
      {
        degree: "Ph.D. in Quantum Physics",
        institution: "University of the Philippines",
        year: "2020 - 2023"
      },
      {
        degree: "M.Sc. in Physics",
        institution: "Ateneo de Manila University",
        year: "2018 - 2020"
      },
      {
        degree: "B.Sc. in Physics",
        institution: "De La Salle University",
        year: "2014 - 2018"
      }
    ],
    experience: [
      {
        position: "Quantum Researcher",
        company: "Quantum Computing Society of the Philippines",
        year: "2023 - Present"
      },
      {
        position: "Research Assistant",
        company: "University of the Philippines",
        year: "2020 - 2023"
      }
    ],
    publications: [
      {
        title: "Error Mitigation Techniques for NISQ Devices",
        journal: "Quantum Physics Journal",
        year: "2023"
      },
      {
        title: "Implementing Grover's Algorithm on Superconducting Qubits",
        journal: "International Journal of Quantum Computing",
        year: "2022"
      }
    ],
    skills: [
      "Quantum Algorithms",
      "Qiskit",
      "Quantum Error Correction",
      "Quantum Machine Learning",
      "Superconducting Qubits",
      "Python",
      "Linear Algebra",
      "Quantum Physics"
    ],
    social: {
      github: "github.com/mariasantos",
      linkedin: "linkedin.com/in/mariasantos",
      twitter: "twitter.com/mariasantos",
      website: "mariasantos.com"
    }
  };
  
  return (
    <DashboardLayout title="My Profile" subtitle="View and manage your personal information and professional details.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="quantum-card p-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <h2 className="mt-4 text-xl font-montserrat font-medium">{user.name}</h2>
              <p className="text-[#1050CE] mt-1">{user.role}</p>
              
              <div className="mt-4 space-y-2 w-full">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Building className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{user.organization}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  <span>Member since {user.joinDate}</span>
                </div>
              </div>
              
              <Button className="mt-6 w-full">
                <Edit size={16} className="mr-2" />
                Edit Profile
              </Button>
            </div>
            
            <Separator className="my-6" />
            
            <div>
              <h3 className="font-montserrat font-medium mb-4">Social Links</h3>
              
              <div className="space-y-3">
                <a href="#" className="flex items-center text-sm text-gray-600 hover:text-[#1050CE]">
                  <Github className="w-4 h-4 mr-2" />
                  <span>{user.social.github}</span>
                </a>
                <a href="#" className="flex items-center text-sm text-gray-600 hover:text-[#1050CE]">
                  <Linkedin className="w-4 h-4 mr-2" />
                  <span>{user.social.linkedin}</span>
                </a>
                <a href="#" className="flex items-center text-sm text-gray-600 hover:text-[#1050CE]">
                  <Twitter className="w-4 h-4 mr-2" />
                  <span>{user.social.twitter}</span>
                </a>
                <a href="#" className="flex items-center text-sm text-gray-600 hover:text-[#1050CE]">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>{user.social.website}</span>
                </a>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div>
              <h3 className="font-montserrat font-medium mb-4">Skills</h3>
              
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-[#1050CE]/10 text-[#1050CE] hover:bg-[#1050CE]/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="about" className="px-6">About</TabsTrigger>
              <TabsTrigger value="education" className="px-6">Education</TabsTrigger>
              <TabsTrigger value="experience" className="px-6">Experience</TabsTrigger>
              <TabsTrigger value="publications" className="px-6">Publications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about">
              <div className="quantum-card p-6">
                <h3 className="font-montserrat text-lg font-medium mb-4">Bio</h3>
                <p className="text-gray-700">{user.bio}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="education">
              <div className="quantum-card p-6">
                <h3 className="font-montserrat text-lg font-medium mb-6">Education</h3>
                
                <div className="space-y-8">
                  {user.education.map((edu, index) => (
                    <div key={index} className="relative pl-8 pb-8 border-l-2 border-[#1050CE]/20 last:border-0 last:pb-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#1050CE]"></div>
                      <h4 className="font-montserrat font-medium">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="experience">
              <div className="quantum-card p-6">
                <h3 className="font-montserrat text-lg font-medium mb-6">Work Experience</h3>
                
                <div className="space-y-8">
                  {user.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 pb-8 border-l-2 border-[#1050CE]/20 last:border-0 last:pb-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#1050CE]"></div>
                      <h4 className="font-montserrat font-medium">{exp.position}</h4>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="publications">
              <div className="quantum-card p-6">
                <h3 className="font-montserrat text-lg font-medium mb-6">Research Publications</h3>
                
                <div className="space-y-6">
                  {user.publications.map((pub, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#1050CE]/10 flex-shrink-0">
                        <FileText size={20} className="text-[#1050CE]" />
                      </div>
                      
                      <div>
                        <h4 className="font-montserrat font-medium">{pub.title}</h4>
                        <p className="text-sm text-gray-600">{pub.journal} • {pub.year}</p>
                        <Button variant="link" className="text-[#1050CE] p-0 h-auto mt-1">View Publication</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
