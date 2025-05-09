
import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { toast } from 'sonner';
import { Mail, MapPin, Phone, Send, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Your message has been sent! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  // Social media links
  const socialLinks = [
    { name: 'Facebook', url: '#', icon: 'facebook.svg' },
    { name: 'Twitter', url: '#', icon: 'twitter.svg' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin.svg' },
    { name: 'Instagram', url: '#', icon: 'instagram.svg' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-montserrat font-light text-qcsp-primary mb-4">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with the Quantum Computing Society of the Philippines. We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="quantum-card p-6 text-center hover-glow">
                <div className="w-12 h-12 rounded-full bg-qcsp-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-qcsp-primary" />
                </div>
                <h3 className="text-lg font-montserrat font-medium mb-2">Email</h3>
                <a href="mailto:info@qcsp.org.ph" className="text-qcsp-primary hover:underline">
                  info@qcsp.org.ph
                </a>
              </div>
              
              <div className="quantum-card p-6 text-center hover-glow">
                <div className="w-12 h-12 rounded-full bg-qcsp-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} className="text-qcsp-primary" />
                </div>
                <h3 className="text-lg font-montserrat font-medium mb-2">Location</h3>
                <p className="text-gray-600">Manila, Philippines</p>
              </div>
              
              <div className="quantum-card p-6 text-center hover-glow">
                <div className="w-12 h-12 rounded-full bg-qcsp-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-qcsp-primary" />
                </div>
                <h3 className="text-lg font-montserrat font-medium mb-2">Social Media</h3>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map(link => (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      className="text-gray-500 hover:text-qcsp-primary"
                      aria-label={link.name}
                    >
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        {/* Placeholder for social icons */}
                        <span className="text-xs">{link.name.charAt(0)}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="quantum-card p-8">
              <h2 className="text-2xl font-montserrat font-light text-qcsp-primary text-center mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Membership">Membership Information</option>
                    <option value="Events">Events and Workshops</option>
                    <option value="Partnership">Partnership Opportunities</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="primary-button w-full flex items-center justify-center"
                    disabled={loading}
                  >
                    <Send size={18} className="mr-2" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-montserrat font-light text-qcsp-primary text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How can I become a member of QCSP?",
                  answer: "You can become a member by registering on our website and selecting your membership type. Visit the 'Be One of Us' page to get started."
                },
                {
                  question: "Are there any membership fees?",
                  answer: "We offer various membership tiers with different benefits. Student memberships are available at discounted rates. Visit our membership page for details."
                },
                {
                  question: "Do I need prior knowledge of quantum computing to join?",
                  answer: "No, QCSP welcomes everyone interested in quantum computing, regardless of their background knowledge. We have resources for all levels."
                },
                {
                  question: "How can organizations partner with QCSP?",
                  answer: "We welcome partnerships with academic institutions, companies, and other organizations. Please contact us through this form or email us at partnerships@qcsp.org.ph."
                }
              ].map((item, index) => (
                <div key={index} className="quantum-card p-6">
                  <h3 className="text-lg font-montserrat font-medium mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
