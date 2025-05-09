
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  HelpCircle, 
  MessageSquare, 
  FileText, 
  Mail, 
  Phone,
  Search,
  ArrowRight,
  ExternalLink,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Support = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page. You will receive an email with instructions to create a new password."
    },
    {
      question: "What types of membership are available?",
      answer: "QCSP offers Individual, Student, and Institutional memberships. Each type comes with different benefits and pricing. You can view detailed information about each membership type on our Membership page."
    },
    {
      question: "How can I participate in QCSP events?",
      answer: "You can view and register for upcoming events in the Events section of the dashboard. Some events require registration, while others may be open to all members."
    },
    {
      question: "Can I download resources for offline use?",
      answer: "Yes, most of our resources are available for download. Look for the download button on individual resource pages."
    },
    {
      question: "How do I get a certificate for completed courses?",
      answer: "Certificates are automatically generated when you complete all the required lessons and assessments in a course. You can download them from your course completion page."
    }
  ];
  
  const popularArticles = [
    "Getting Started with QCSP",
    "How to Use the Quantum Circuit Designer",
    "Configuring Two-Factor Authentication",
    "Joining the Community Forum",
    "Accessing Premium Resources"
  ];
  
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email and we'll get back to you within 24 hours.",
      action: "support@qcsp.org",
      primary: true
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team during business hours.",
      action: "Start Chat",
      primary: false
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for urgent matters or complex issues.",
      action: "+63 2 1234 5678",
      primary: false
    }
  ];
  
  return (
    <DashboardLayout title="Support" subtitle="Find help, get answers, and connect with our support team.">
      <div className="mb-6">
        <div className="quantum-card p-6">
          <h2 className="text-2xl font-montserrat font-light mb-4 text-center">How can we help you today?</h2>
          
          <div className="relative max-w-xl mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input placeholder="Search for help topics..." className="pl-10" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg border ${method.primary ? 'bg-[#1050CE]/5 border-[#1050CE]/20' : 'bg-white border-gray-200'} hover:shadow-md transition-shadow`}
              >
                <div className={`w-10 h-10 rounded-full ${method.primary ? 'bg-[#1050CE]/20 text-[#1050CE]' : 'bg-gray-100 text-gray-600'} flex items-center justify-center mb-3`}>
                  <method.icon size={20} />
                </div>
                
                <h3 className="font-montserrat font-medium mb-1">{method.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                
                {method.primary ? (
                  <Button className="w-full bg-[#1050CE] hover:bg-[#0F3F9E]">
                    <Mail size={16} className="mr-2" />
                    Email Us
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full">
                    {typeof method.action === 'string' && method.action.includes('+') ? (
                      <Phone size={16} className="mr-2" />
                    ) : (
                      <MessageSquare size={16} className="mr-2" />
                    )}
                    {method.action}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="faq" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="faq" className="px-6">FAQs</TabsTrigger>
          <TabsTrigger value="contact" className="px-6">Contact Us</TabsTrigger>
          <TabsTrigger value="tickets" className="px-6">Support Tickets</TabsTrigger>
        </TabsList>
        
        <TabsContent value="faq">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="quantum-card p-6">
                <h3 className="font-montserrat text-lg font-medium mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <h4 className="font-montserrat font-medium mb-2 flex items-center">
                        <HelpCircle size={18} className="mr-2 text-[#1050CE]" />
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 pl-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-3">Can't find what you're looking for?</p>
                  <Button className="bg-[#1050CE] hover:bg-[#0F3F9E]">
                    View Full FAQ
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="quantum-card p-6">
                <h3 className="font-montserrat text-lg font-medium mb-4">Popular Articles</h3>
                
                <ul className="space-y-3">
                  {popularArticles.map((article, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="flex items-center text-gray-700 hover:text-[#1050CE] transition-colors"
                      >
                        <FileText size={16} className="mr-2 text-gray-400" />
                        <span>{article}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    Browse All Articles
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="quantum-card p-6 mt-6 bg-[#1050CE]/5 border border-[#1050CE]/20">
                <h3 className="font-montserrat text-lg font-medium mb-3">Need Technical Support?</h3>
                <p className="text-gray-600 text-sm mb-4">Our technical team is ready to help with any quantum computing tools or applications issues.</p>
                
                <Button className="w-full">
                  Get Technical Support
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="contact">
          <div className="quantum-card p-6">
            <h3 className="font-montserrat text-lg font-medium mb-6">Contact Form</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="membership">Membership Question</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing & Payments</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" rows={7} />
                </div>
                
                <Button className="w-full bg-[#1050CE] hover:bg-[#0F3F9E]">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </div>
              
              <div className="hidden md:block relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full max-w-xs">
                    <div className="quantum-grid w-full h-full opacity-30"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-xl font-montserrat font-medium text-[#1050CE] mb-4">Our Support Team</h3>
                      <p className="text-gray-600">Our team is available Monday to Friday from 9:00 AM to 6:00 PM (PHT).</p>
                      
                      <div className="mt-6 space-y-3 w-full">
                        <div className="flex items-center">
                          <Mail size={16} className="text-[#1050CE] mr-2" />
                          <span className="text-sm">support@qcsp.org</span>
                        </div>
                        
                        <div className="flex items-center">
                          <Phone size={16} className="text-[#1050CE] mr-2" />
                          <span className="text-sm">+63 2 1234 5678</span>
                        </div>
                        
                        <div className="flex items-center">
                          <MessageSquare size={16} className="text-[#1050CE] mr-2" />
                          <span className="text-sm">Live chat available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="tickets">
          <div className="quantum-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-montserrat text-lg font-medium">Support Tickets</h3>
              <Button className="bg-[#1050CE] hover:bg-[#0F3F9E]">
                New Ticket
              </Button>
            </div>
            
            <div className="rounded-lg border overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
                  <div className="col-span-1">#</div>
                  <div className="col-span-4">Subject</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-3">Last Updated</div>
                  <div className="col-span-2">Actions</div>
                </div>
              </div>
              
              <div className="divide-y">
                <div className="p-4 hover:bg-gray-50">
                  <div className="grid grid-cols-12 gap-4 items-center text-sm">
                    <div className="col-span-1 font-medium">#1024</div>
                    <div className="col-span-4">Access to Quantum Circuit Designer</div>
                    <div className="col-span-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">In Progress</span>
                    </div>
                    <div className="col-span-3 text-gray-600">April 28, 2025</div>
                    <div className="col-span-2">
                      <Button variant="link" className="h-8 p-0 text-[#1050CE]">View</Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 hover:bg-gray-50">
                  <div className="grid grid-cols-12 gap-4 items-center text-sm">
                    <div className="col-span-1 font-medium">#1018</div>
                    <div className="col-span-4">Membership Renewal Question</div>
                    <div className="col-span-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Resolved</span>
                    </div>
                    <div className="col-span-3 text-gray-600">April 22, 2025</div>
                    <div className="col-span-2">
                      <Button variant="link" className="h-8 p-0 text-[#1050CE]">View</Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 hover:bg-gray-50">
                  <div className="grid grid-cols-12 gap-4 items-center text-sm">
                    <div className="col-span-1 font-medium">#1005</div>
                    <div className="col-span-4">Can't Access Course Materials</div>
                    <div className="col-span-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Resolved</span>
                    </div>
                    <div className="col-span-3 text-gray-600">April 15, 2025</div>
                    <div className="col-span-2">
                      <Button variant="link" className="h-8 p-0 text-[#1050CE]">View</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Empty state - no tickets */}
            {/*
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#1050CE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText size={24} className="text-[#1050CE]" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Support Tickets</h3>
              <p className="text-gray-600 mb-6">You haven't submitted any support tickets yet.</p>
              <Button className="bg-[#1050CE] hover:bg-[#0F3F9E]">
                Create Your First Ticket
              </Button>
            </div>
            */}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Support;
