
import React from 'react';

const QuantumOverview = () => {
  const quantumConcepts = [
    {
      id: 1,
      title: "Quantum Bits",
      description: "Qubits can exist in multiple states simultaneously, unlike classical bits."
    },
    {
      id: 2,
      title: "Superposition",
      description: "Quantum particles can exist in multiple states at once until measured."
    },
    {
      id: 3,
      title: "Entanglement",
      description: "Quantum particles become connected and act as a single system."
    },
    {
      id: 4,
      title: "Quantum Algorithms",
      description: "Specialized algorithms that leverage quantum physics principles."
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-qcsp-primary/5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-qcsp-secondary/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-light text-qcsp-primary">Quantum Computing Overview</h2>
          <div className="w-16 h-1 bg-qcsp-primary mx-auto mt-2"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Quantum computing harnesses the phenomena of quantum mechanics to deliver a huge leap forward in computation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square relative rounded-lg overflow-hidden futuristic-border">
              <div className="absolute inset-0 quantum-grid"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-qcsp-primary to-qcsp-tertiary-blue animate-pulse-light"></div>
                <div className="absolute w-40 h-40 rounded-full border-2 border-qcsp-primary/30 animate-rotate-slow"></div>
                <div className="absolute w-52 h-52 rounded-full border border-qcsp-secondary/20" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-montserrat font-light text-gray-900">
              The Next Frontier in Computing
            </h3>
            <p className="text-gray-600">
              Quantum computing represents a paradigm shift from classical computing. 
              Instead of using bits (0s and 1s), quantum computers use quantum bits or "qubits" 
              that can exist in multiple states simultaneously.
            </p>
            
            <div className="space-y-4">
              {quantumConcepts.map(concept => (
                <div key={concept.id} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-qcsp-primary"></div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-montserrat font-medium">{concept.title}</h4>
                    <p className="text-sm text-gray-600">{concept.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="secondary-button">Learn More About Quantum</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumOverview;
