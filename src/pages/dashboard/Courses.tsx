
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { BookOpen, Clock, Award, Users, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Courses = () => {
  const myCourses = [
    {
      id: 1,
      title: "Quantum Computing Fundamentals",
      instructor: "Dr. Maria Santos",
      level: "Beginner",
      duration: "8 hours",
      enrolledDate: "April 10, 2025",
      progress: 60,
      lessons: 12,
      completedLessons: 7,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      nextLesson: "Quantum Gates and Circuits"
    },
    {
      id: 2,
      title: "Quantum Algorithms",
      instructor: "Prof. John Reyes",
      level: "Intermediate",
      duration: "12 hours",
      enrolledDate: "March 25, 2025",
      progress: 30,
      lessons: 15,
      completedLessons: 5,
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      nextLesson: "Shor's Algorithm"
    },
    {
      id: 3,
      title: "Introduction to Quantum Physics",
      instructor: "Dr. Elena Cruz",
      level: "Beginner",
      duration: "6 hours",
      enrolledDate: "April 5, 2025",
      progress: 80,
      lessons: 10,
      completedLessons: 8,
      image: "https://images.unsplash.com/photo-1516110833967-9b037a7ba388?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3",
      nextLesson: "Wave-Particle Duality"
    }
  ];
  
  const availableCourses = [
    {
      id: 4,
      title: "Quantum Programming with Qiskit",
      instructor: "Prof. Carlos Mendoza",
      level: "Intermediate",
      duration: "14 hours",
      enrolledStudents: 325,
      rating: 4.8,
      reviews: 48,
      image: "https://images.unsplash.com/photo-1623157735531-4a5680363106?auto=format&fit=crop&q=80&w=1372&ixlib=rb-4.0.3",
      price: "Free for members"
    },
    {
      id: 5,
      title: "Quantum Computing Applications",
      instructor: "Dr. Sofia Lee",
      level: "Intermediate",
      duration: "10 hours",
      enrolledStudents: 218,
      rating: 4.6,
      reviews: 35,
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      price: "Free for members"
    },
    {
      id: 6,
      title: "Advanced Quantum Mechanics",
      instructor: "Prof. Robert Garcia",
      level: "Advanced",
      duration: "16 hours",
      enrolledStudents: 142,
      rating: 4.9,
      reviews: 27,
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3",
      price: "Premium"
    },
    {
      id: 7,
      title: "Quantum Machine Learning",
      instructor: "Dr. Maya Reyes",
      level: "Advanced",
      duration: "12 hours",
      enrolledStudents: 189,
      rating: 4.7,
      reviews: 33,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3",
      price: "Premium"
    }
  ];
  
  return (
    <DashboardLayout title="Courses" subtitle="Expand your knowledge with our quantum computing courses and tutorials.">
      <Tabs defaultValue="my-courses" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="my-courses" className="px-6">My Courses</TabsTrigger>
          <TabsTrigger value="available" className="px-6">Available Courses</TabsTrigger>
        </TabsList>
        
        <TabsContent value="my-courses">
          <div className="space-y-6">
            <h3 className="font-montserrat text-xl font-medium">Continue Learning</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myCourses.map((course) => (
                <div key={course.id} className="quantum-card overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full object-cover" />
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-montserrat text-lg font-medium mb-2">{course.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">Instructor: {course.instructor}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    
                    <Progress value={course.progress} className="mb-4" />
                    
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-5">
                      <span>{course.completedLessons}/{course.lessons} lessons completed</span>
                      <span>{course.duration}</span>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <div className="text-sm">
                        <span className="text-gray-600">Next:</span> <span className="font-medium">{course.nextLesson}</span>
                      </div>
                      <Button className="bg-[#1050CE] hover:bg-[#0F3F9E] w-full">Continue Learning</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="available">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableCourses.map((course) => (
              <div key={course.id} className="quantum-card flex flex-col md:flex-row overflow-hidden">
                <div className="md:w-1/3">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start">
                    <h4 className="font-montserrat text-lg font-medium">{course.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${course.price === 'Premium' ? 'bg-[#E5DB00]/20 text-[#CBC316]' : 'bg-[#1050CE]/10 text-[#1050CE]'}`}>
                      {course.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mt-1">Instructor: {course.instructor}</p>
                  
                  <div className="mt-3 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                    <span className="ml-1 text-sm text-gray-600">{course.rating} ({course.reviews} reviews)</span>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1 text-gray-500" />
                      <span className="text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={16} className="mr-1 text-gray-500" />
                      <span className="text-gray-600">{course.level}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1 text-gray-500" />
                      <span className="text-gray-600">{course.enrolledStudents} enrolled</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-1 text-gray-500" />
                      <span className="text-gray-600">Self-paced</span>
                    </div>
                  </div>
                  
                  <Button className="mt-4 bg-[#1050CE] hover:bg-[#0F3F9E]">
                    Enroll Now <ChevronRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Courses;
