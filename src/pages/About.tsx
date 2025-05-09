
import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import NewsletterSubscribe from '@/components/home/NewsletterSubscribe';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Maria Santos",
      role: "Founder & President",
      bio: "Quantum physicist with expertise in quantum information theory and quantum algorithms.",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Juan Dela Cruz",
      role: "Vice President",
      bio: "Computer scientist specializing in quantum software development and education.",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 3,
      name: "Ana Reyes",
      role: "Research Director",
      bio: "Researcher focused on quantum machine learning and quantum optimization algorithms.",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 4,
      name: "Miguel Sanchez",
      role: "Education Director",
      bio: "Educator with experience in developing quantum computing curricula for various levels.",
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  ];
  
  // Partner organizations
  const partners = [
    {
      id: 1,
      name: "OneQuantum Global",
      description: "International quantum computing community",
      logoPlaceholder: "OQ"
    },
    {
      id: 2,
      name: "University of the Philippines",
      description: "Academic research partner",
      logoPlaceholder: "UP"
    },
    {
      id: 3,
      name: "Department of Science and Technology",
      description: "Government research support",
      logoPlaceholder: "DOST"
    },
    {
      id: 4,
      name: "Tech Innovators Inc.",
      description: "Industry collaboration partner",
      logoPlaceholder: "TII"
    }
  ];
  
  // Initiatives
  const initiatives = [
    {
      id: 1,
      title: "Quantum Education Program",
      description: "Introducing quantum computing concepts to students across the Philippines through workshops, online courses, and educational materials."
    },
    {
      id: 2,
      title: "Research Collaboration Network",
      description: "Connecting Filipino researchers with international quantum computing experts to foster collaborative research projects."
    },
    {
      id: 3,
      title: "Quantum Technology Awareness",
      description: "Raising awareness about quantum technologies and their potential impact on various industries in the Philippines."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-montserrat font-light text-qcsp-primary mb-4">About QCSP</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The Quantum Computing Society of the Philippines (QCSP) is dedicated to advancing 
                quantum computing education, research, and applications in the Philippines.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission and Vision */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="quantum-card p-8">
                <h2 className="text-2xl font-montserrat font-light text-qcsp-primary mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To promote quantum computing education, research, and applications in the Philippines, 
                  fostering a community of quantum enthusiasts, researchers, and professionals who contribute 
                  to the global quantum computing ecosystem.
                </p>
              </div>
              
              <div className="quantum-card p-8">
                <h2 className="text-2xl font-montserrat font-light text-qcsp-primary mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To establish the Philippines as a hub for quantum computing talent and innovation in 
                  Southeast Asia, empowering Filipinos to participate in and benefit from the quantum 
                  revolution.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-montserrat font-light text-qcsp-primary text-center mb-8">Core Values</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Innovation", "Collaboration", "Inclusivity", "Excellence"].map((value, index) => (
                <div key={index} className="quantum-card p-6 text-center hover-glow">
                  <div className="w-12 h-12 rounded-full bg-qcsp-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-qcsp-primary text-xl font-montserrat">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-montserrat font-medium mb-2">{value}</h3>
                  <p className="text-gray-600">
                    {value === "Innovation" 
                      ? "Embracing new ideas and approaches in quantum technologies."
                      : value === "Collaboration" 
                      ? "Working together across disciplines and borders."
                      : value === "Inclusivity" 
                      ? "Ensuring quantum education and opportunities are accessible to all Filipinos."
                      : "Striving for the highest standards in education, research, and applications."
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-montserrat font-light text-qcsp-primary text-center mb-8">Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map(member => (
                <div key={member.id} className="quantum-card p-6 text-center hover-glow">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-montserrat font-medium">{member.name}</h3>
                  <p className="text-qcsp-primary text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* What is QCSP? */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-montserrat font-light text-qcsp-primary mb-4">What is QCSP?</h2>
                <p className="text-gray-600 mb-4">
                  The Quantum Computing Society of the Philippines (QCSP) is a non-profit organization 
                  and the official local chapter of the global OneQuantum community in the Philippines.
                </p>
                <p className="text-gray-600 mb-4">
                  Founded in 2023, QCSP brings together students, researchers, professionals, and 
                  enthusiasts interested in quantum computing to foster a vibrant quantum ecosystem 
                  in the Philippines.
                </p>
                <p className="text-gray-600">
                  Through educational programs, research collaborations, community events, and industry 
                  partnerships, QCSP aims to prepare Filipinos for the quantum future and contribute 
                  to the global advancement of quantum technologies.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-square relative rounded-lg overflow-hidden futuristic-border">
                  <div className="absolute inset-0 quantum-grid"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-6 bg-white/90 rounded-lg shadow-lg text-center w-3/4">
                      <div className="w-16 h-16 rounded-full bg-qcsp-primary flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 rounded-full bg-white"></div>
                      </div>
                      <h3 className="font-montserrat font-medium text-qcsp-primary">QCSP</h3>
                      <p className="text-gray-600 text-sm">OneQuantum Philippines</p>
                      <p className="text-gray-600 text-xs mt-2">Est. 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partnerships */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-montserrat font-light text-qcsp-primary text-center mb-8">Our Partners</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map(partner => (
                <div key={partner.id} className="quantum-card p-6 text-center hover-glow">
                  <div className="w-16 h-16 bg-qcsp-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-qcsp-primary text-2xl font-montserrat">{partner.logoPlaceholder}</span>
                  </div>
                  <h3 className="text-lg font-montserrat font-medium mb-1">{partner.name}</h3>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Initiatives */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-montserrat font-light text-qcsp-primary text-center mb-8">Our Initiatives</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {initiatives.map(initiative => (
                <div key={initiative.id} className="quantum-card p-6 hover-glow">
                  <h3 className="text-xl font-montserrat font-medium mb-3">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">Interested in collaborating or supporting our initiatives?</p>
              <a href="/contact" className="primary-button">Contact Us</a>
            </div>
          </div>
        </section>
        
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default About;
