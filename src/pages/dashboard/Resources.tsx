import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { FileText, Download, Search, BookOpen, ExternalLink, Bookmark, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Introduction to Quantum Computing",
      type: "PDF",
      category: "Fundamentals",
      description: "A comprehensive guide to quantum computing principles for beginners.",
      size: "2.4 MB",
      date: "April 12, 2025",
      downloads: 342,
      tags: ["beginners", "fundamentals", "quantum-principles"]
    },
    {
      id: 2,
      title: "Quantum Algorithms and Their Applications",
      type: "PDF",
      category: "Advanced",
      description: "Detailed explanation of quantum algorithms and how they are used in practice.",
      size: "3.8 MB",
      date: "March 25, 2025",
      downloads: 219,
      tags: ["algorithms", "advanced", "quantum-applications"]
    },
    {
      id: 3,
      title: "Quantum Computing Programming with Qiskit",
      type: "Slide Deck",
      category: "Programming",
      description: "Learn how to program quantum computers using IBM's Qiskit framework.",
      size: "5.2 MB",
      date: "March 10, 2025",
      downloads: 456,
      tags: ["programming", "qiskit", "ibm"]
    },
    {
      id: 4,
      title: "Quantum Error Correction Techniques",
      type: "Research Paper",
      category: "Research",
      description: "An academic paper on current quantum error correction methods and their effectiveness.",
      size: "1.8 MB",
      date: "February 28, 2025",
      downloads: 178,
      tags: ["error-correction", "research", "academic"]
    },
    {
      id: 5,
      title: "Quantum Computing Hardware: State of the Art",
      type: "Whitepaper",
      category: "Hardware",
      description: "Overview of current quantum computing hardware technologies and vendors.",
      size: "4.1 MB",
      date: "February 15, 2025",
      downloads: 312,
      tags: ["hardware", "technology", "vendors"]
    },
    {
      id: 6,
      title: "Quantum Machine Learning Applications",
      type: "Case Study",
      category: "Applications",
      description: "Real-world examples of how quantum machine learning is being applied in various industries.",
      size: "3.2 MB",
      date: "January 30, 2025",
      downloads: 287,
      tags: ["machine-learning", "applications", "case-study"]
    }
  ];
  
  const categories = ["All", "Fundamentals", "Programming", "Algorithms", "Research", "Applications", "Hardware"];
  
  return (
    <DashboardLayout title="Resources" subtitle="Access quantum computing learning materials, research papers, and more.">
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input placeholder="Search resources..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center">
          <Filter size={18} className="mr-2" />
          Filter
        </Button>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 flex w-full overflow-x-auto pb-2">
          {categories.map(category => (
            <TabsTrigger key={category} value={category === "All" ? "all" : category.toLowerCase()} className="px-4">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all">
          <div className="space-y-4">
            {resources.map((resource) => (
              <div key={resource.id} className="quantum-card p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#1050CE]/10`}>
                    {resource.type === "PDF" && <FileText size={24} className="text-[#1050CE]" />}
                    {resource.type === "Slide Deck" && <BookOpen size={24} className="text-[#1050CE]" />}
                    {resource.type === "Research Paper" && <FileText size={24} className="text-[#1050CE]" />}
                    {resource.type === "Whitepaper" && <FileText size={24} className="text-[#1050CE]" />}
                    {resource.type === "Case Study" && <BookOpen size={24} className="text-[#1050CE]" />}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h3 className="text-lg font-medium font-montserrat">{resource.title}</h3>
                      <Badge variant="outline" className="w-fit">{resource.category}</Badge>
                    </div>
                    
                    <p className="mt-2 text-gray-600 text-sm">{resource.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {resource.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{tag}</span>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
                        <span>{resource.type} • {resource.size}</span>
                        <span>Added: {resource.date}</span>
                        <span>{resource.downloads} downloads</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-[#1050CE]">
                          <Bookmark size={16} className="mr-1" />
                          Save
                        </Button>
                        <Button size="sm" className="bg-[#1050CE] hover:bg-[#0F3F9E]">
                          <Download size={16} className="mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        {/* Other tab contents would follow the same pattern */}
      </Tabs>
    </DashboardLayout>
  );
};

export default Resources;
