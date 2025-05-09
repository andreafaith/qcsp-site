
import React from 'react';
import { CircleCheck } from 'lucide-react';

const QCSPOverview = () => {
  const objectives = [
    "Promote quantum computing education and awareness in the Philippines",
    "Build a community of quantum computing enthusiasts, researchers, and professionals",
    "Foster collaboration between academia, industry, and government in quantum technologies",
    "Provide resources and opportunities for Filipinos to engage with quantum computing"
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      {/* Subtle circuit pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-40 h-px bg-qcsp-primary"></div>
        <div className="absolute top-1/4 left-10 w-px h-40 bg-qcsp-primary"></div>
        <div className="absolute bottom-1/4 right-10 w-60 h-px bg-qcsp-primary"></div>
        <div className="absolute bottom-1/4 right-10 w-px h-60 bg-qcsp-primary"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-light text-qcsp-primary">About QCSP</h2>
          <div className="w-16 h-1 bg-qcsp-primary mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-montserrat font-light text-gray-900 mb-4">
              Quantum Computing Society of the Philippines
            </h3>
            
            <p className="text-gray-600 mb-6">
              QCSP is the local chapter of the global OneQuantum community in the Philippines. 
              We are a non-profit organization dedicated to advancing quantum computing 
              education, research, and applications in the country.
            </p>
            
            <div className="space-y-3 mb-6">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start">
                  <CircleCheck size={20} className="flex-shrink-0 text-qcsp-primary mt-1" />
                  <p className="ml-3 text-gray-600">{objective}</p>
                </div>
              ))}
            </div>
            
            <button className="primary-button">Learn More About QCSP</button>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-qcsp-secondary to-qcsp-primary rounded-lg opacity-20 animate-pulse-light"></div>
              <div className="absolute inset-4 flex items-center justify-center">
                {/* Mock QCSP logo */}
                <div className="quantum-card p-6 w-48 h-48 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-qcsp-primary flex items-center justify-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-white"></div>
                  </div>
                  <div className="text-center">
                    <p className="font-montserrat font-medium text-qcsp-primary">QCSP</p>
                    <p className="text-xs text-gray-600">OneQuantum Philippines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QCSPOverview;
