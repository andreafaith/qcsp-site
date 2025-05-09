
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Users, CircleCheck } from 'lucide-react';

const BeAMember = () => {
  const membershipBenefits = [
    {
      id: 1,
      title: "Access to Resources",
      description: "Exclusive access to quantum computing learning materials, tutorials, and workshops."
    },
    {
      id: 2,
      title: "Networking Opportunities",
      description: "Connect with like-minded individuals, professionals, and experts in quantum computing."
    },
    {
      id: 3,
      title: "Event Participation",
      description: "Priority registration and discounts for QCSP events, workshops, and conferences."
    },
    {
      id: 4,
      title: "Community Support",
      description: "Engage with a supportive community to advance your quantum computing journey."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-light text-qcsp-primary">Be A Member</h2>
          <div className="w-16 h-1 bg-qcsp-primary mx-auto mt-2"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join the growing community of quantum computing enthusiasts, researchers, and professionals in the Philippines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Individual Membership */}
          <div className="quantum-card p-6 flex flex-col h-full">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-qcsp-primary/10 mb-4">
              <User size={20} className="text-qcsp-primary" />
            </div>
            <h3 className="text-xl font-montserrat font-medium mb-2">Individual Member</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              For students, professionals, and enthusiasts interested in quantum computing.
            </p>
            <ul className="space-y-2 mb-6">
              {Array(3).fill(0).map((_, i) => (
                <li key={i} className="flex items-center">
                  <CircleCheck size={16} className="text-qcsp-primary mr-2" />
                  <span className="text-sm text-gray-600">
                    {i === 0 ? "Access to online resources" : i === 1 ? "Community forum participation" : "Event discounts"}
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/auth" className="secondary-button text-center">Join as Individual</Link>
          </div>
          
          {/* Featured: Student Membership */}
          <div className="quantum-card p-6 border-qcsp-primary relative flex flex-col h-full">
            <div className="absolute top-0 right-0 bg-qcsp-primary text-white text-xs px-3 py-1 font-montserrat">
              RECOMMENDED
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-qcsp-primary/10 mb-4">
              <User size={20} className="text-qcsp-primary" />
            </div>
            <h3 className="text-xl font-montserrat font-medium mb-2">Student Member</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Special membership for university and high school students interested in quantum computing.
            </p>
            <ul className="space-y-2 mb-6">
              {Array(4).fill(0).map((_, i) => (
                <li key={i} className="flex items-center">
                  <CircleCheck size={16} className="text-qcsp-primary mr-2" />
                  <span className="text-sm text-gray-600">
                    {i === 0 ? "All individual benefits" : i === 1 ? "Special student workshops" : i === 2 ? "Mentorship opportunities" : "Research collaborations"}
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/auth" className="primary-button text-center">Join as Student</Link>
          </div>
          
          {/* Institutional Membership */}
          <div className="quantum-card p-6 flex flex-col h-full">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-qcsp-primary/10 mb-4">
              <Users size={20} className="text-qcsp-primary" />
            </div>
            <h3 className="text-xl font-montserrat font-medium mb-2">Institutional Member</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              For universities, research institutions, and companies interested in quantum technologies.
            </p>
            <ul className="space-y-2 mb-6">
              {Array(3).fill(0).map((_, i) => (
                <li key={i} className="flex items-center">
                  <CircleCheck size={16} className="text-qcsp-primary mr-2" />
                  <span className="text-sm text-gray-600">
                    {i === 0 ? "Multiple member accounts" : i === 1 ? "Partnership opportunities" : "Co-hosted events"}
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="secondary-button text-center">Contact for Institutional</Link>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 p-8 rounded-lg border border-qcsp-primary/10">
          <h3 className="text-xl font-montserrat font-medium text-center mb-6">Membership Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipBenefits.map(benefit => (
              <div key={benefit.id} className="p-4">
                <h4 className="font-montserrat font-medium text-qcsp-primary mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeAMember;
