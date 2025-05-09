import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { FileCode, ExternalLink, Terminal, Server, Code, Database, BarChart, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const QuantumApps = () => {
  const apps = [
    {
      id: 1,
      title: "Quantum Circuit Designer",
      description: "Visually design quantum circuits with an intuitive drag-and-drop interface. Export to multiple quantum frameworks.",
      category: "Development",
      icon: FileCode,
      usage: "Online tool",
      status: "Online",
      popularity: 856,
      tags: ["visual", "circuits", "design"]
    },
    {
      id: 2,
      title: "Quantum Algorithm Simulator",
      description: "Run quantum algorithms on a simulated quantum computer. Perfect for testing algorithms without accessing real quantum hardware.",
      category: "Simulation",
      icon: Server,
      usage: "Download",
      status: "Available",
      popularity: 723,
      tags: ["simulator", "algorithms", "testing"]
    },
    {
      id: 3,
      title: "Qiskit Code Editor",
      description: "Specialized IDE for writing Qiskit code with syntax highlighting, auto-completion, and direct execution capabilities.",
      category: "Development",
      icon: Code,
      usage: "Download",
      status: "Available",
      popularity: 542,
      tags: ["IDE", "qiskit", "coding"]
    },
    {
      id: 4,
      title: "Quantum Database Explorer",
      description: "Browse and analyze quantum algorithms, circuits, and results from a curated database of quantum computing examples.",
      category: "Research",
      icon: Database,
      usage: "Online tool",
      status: "Online",
      popularity: 389,
      tags: ["database", "research", "examples"]
    },
    {
      id: 5,
      title: "Quantum Results Visualizer",
      description: "Generate detailed visualizations and charts from quantum computation results for better understanding and presentations.",
      category: "Analysis",
      icon: BarChart,
      usage: "Online tool",
      status: "Online",
      popularity: 471,
      tags: ["visualization", "results", "charts"]
    },
    {
      id: 6,
      title: "Quantum Terminal",
      description: "Command-line interface for running quantum computations and interacting with quantum hardware providers.",
      category: "Development",
      icon: Terminal,
      usage: "Download",
      status: "Beta",
      popularity: 328,
      tags: ["CLI", "hardware", "execution"]
    }
  ];
  
  const categories = ["All", "Development", "Simulation", "Research", "Analysis"];
  
  return (
    <DashboardLayout title="Quantum Apps" subtitle="Explore our collection of quantum computing applications and tools.">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          {categories.map(category => (
            <TabsTrigger key={category} value={category === "All" ? "all" : category.toLowerCase()} className="px-6">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <div key={app.id} className="quantum-card p-6 flex flex-col h-full border border-[#1050CE]/10 hover:border-[#1050CE]/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-[#1050CE]/10`}>
                    <app.icon size={24} className="text-[#1050CE]" />
                  </div>
                  <Badge variant="outline" className={`
                    ${app.status === 'Online' ? 'bg-green-100 text-green-800 border-green-200' : 
                      app.status === 'Beta' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : 
                      'bg-blue-100 text-blue-800 border-blue-200'}
                  `}>
                    {app.status}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-montserrat font-medium mb-2">{app.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{app.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-2 mb-4">
                  {app.tags.map((tag) => (
                    <span key={tag} className="bg-[#1050CE]/10 text-[#1050CE] text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{app.category}</span>
                  <span>{app.popularity} users</span>
                </div>
                
                <Button className={`w-full ${app.usage === 'Download' ? 'bg-[#0F3F9E] hover:bg-[#112C5F]' : 'bg-[#1050CE] hover:bg-[#0F3F9E]'}`}>
                  {app.usage === 'Online tool' ? (
                    <>
                      <ExternalLink size={16} className="mr-2" />
                      Launch App
                    </>
                  ) : (
                    <>
                      <Download size={16} className="mr-2" />
                      Download
                    </>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
        {/* Other tab contents would follow the same pattern */}
      </Tabs>
    </DashboardLayout>
  );
};

export default QuantumApps;
