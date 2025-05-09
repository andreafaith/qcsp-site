import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  PenTool,
  Save,
  Eye,
  EyeOff,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const Settings = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  
  return (
    <DashboardLayout title="Settings" subtitle="Manage your account preferences, privacy, and notifications.">
      <Tabs defaultValue="profile" className="w-full">
        <div className="flex overflow-x-auto pb-2 mb-6">
          <TabsList>
            <TabsTrigger value="profile" className="flex items-center gap-1 px-4">
              <User size={16} />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="password" className="flex items-center gap-1 px-4">
              <Lock size={16} />
              <span>Password</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-1 px-4">
              <Bell size={16} />
              <span>Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-1 px-4">
              <Shield size={16} />
              <span>Privacy</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-1 px-4">
              <CreditCard size={16} />
              <span>Billing</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="profile">
          <div className="quantum-card p-6">
            <h3 className="font-montserrat text-lg font-medium mb-6">Profile Information</h3>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="avatar">Profile Photo</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <Button variant="outline" size="sm" className="mb-2">Change Photo</Button>
                    <p className="text-xs text-gray-500">PNG, JPG or GIF. Max 2MB.</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Maria" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Santos" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="maria.santos@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Professional Role</Label>
                <Input id="role" defaultValue="Quantum Researcher" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization/Institution</Label>
                  <Input id="organization" defaultValue="University of the Philippines" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Manila, Philippines" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  rows={4}
                  defaultValue="Quantum physics researcher specializing in quantum error correction techniques. Currently working on developing noise-resilient quantum algorithms for near-term quantum computers."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    https://
                  </span>
                  <Input id="website" className="rounded-l-none" defaultValue="mariasantos.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Social Links</Label>
                <div className="space-y-4">
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      github.com/
                    </span>
                    <Input className="rounded-l-none" defaultValue="mariasantos" />
                  </div>
                  
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      linkedin.com/in/
                    </span>
                    <Input className="rounded-l-none" defaultValue="mariasantos" />
                  </div>
                  
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      twitter.com/
                    </span>
                    <Input className="rounded-l-none" defaultValue="mariasantos" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-[#1050CE] hover:bg-[#0F3F9E]">
                  <Save size={16} className="mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="password">
          <div className="quantum-card p-6">
            <h3 className="font-montserrat text-lg font-medium mb-6">Change Password</h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <div className="relative">
                  <Input 
                    id="current-password" 
                    type={showPassword ? "text" : "password"} 
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <div className="relative">
                  <Input 
                    id="new-password" 
                    type={showPassword ? "text" : "password"} 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <div className="relative">
                  <Input 
                    id="confirm-password" 
                    type={showPassword ? "text" : "password"} 
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Password Requirements:</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>Minimum 8 characters</li>
                  <li>At least one uppercase letter</li>
                  <li>At least one lowercase letter</li>
                  <li>At least one number</li>
                  <li>At least one special character</li>
                </ul>
              </div>
              
              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-[#1050CE] hover:bg-[#0F3F9E]">
                  <Lock size={16} className="mr-2" />
                  Update Password
                </Button>
              </div>
            </div>
          </div>
          
          <div className="quantum-card p-6 mt-6">
            <h3 className="font-montserrat text-lg font-medium mb-6">Two-Factor Authentication</h3>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Enable Two-Factor Authentication</h4>
                <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
              </div>
              <Switch />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications">
          <div className="quantum-card p-6">
            <h3 className="font-montserrat text-lg font-medium mb-6">Notification Settings</h3>
            
            <div className="space-y-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-600">Receive emails about your account, events, and updates</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Event Reminders</h4>
                    <p className="text-sm text-gray-600">Get reminded about upcoming events you've registered for</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Course Updates</h4>
                    <p className="text-sm text-gray-600">Notifications about new lessons and course materials</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Community Activity</h4>
                    <p className="text-sm text-gray-600">Get notified about replies to your posts and mentions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Newsletter</h4>
                    <p className="text-sm text-gray-600">Receive our monthly newsletter with quantum computing updates</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="bg-[#1050CE] hover:bg-[#0F3F9E]">Save Preferences</Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="privacy">
          <div className="quantum-card p-6">
            <h3 className="font-montserrat text-lg font-medium mb-6">Privacy Settings</h3>
            
            <div className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Profile Visibility</h4>
                  <Select defaultValue="members">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public - Everyone can see your profile</SelectItem>
                      <SelectItem value="members">Members Only - Only QCSP members can see your profile</SelectItem>
                      <SelectItem value="private">Private - Only you and admins can see your profile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Show Email Address</h4>
                    <p className="text-sm text-gray-600">Allow other members to see your email address</p>
                  </div>
                  <Switch />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Online Status</h4>
                    <p className="text-sm text-gray-600">Show when you're active on the platform</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Activity Tracking</h4>
                    <p className="text-sm text-gray-600">Allow us to collect data on how you use the platform</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="bg-[#1050CE] hover:bg-[#0F3F9E]">Save Privacy Settings</Button>
              </div>
            </div>
          </div>
          
          <div className="quantum-card p-6 mt-6">
            <h3 className="font-montserrat text-lg font-medium mb-6">Data Management</h3>
            
            <div className="space-y-6">
              <Button variant="outline" className="text-red-500 border-red-300 hover:bg-red-50">
                Request Account Data Download
              </Button>
              
              <Button variant="outline" className="text-red-500 border-red-300 hover:bg-red-50">
                Delete Account
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="billing">
          <div className="quantum-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-montserrat text-lg font-medium">Current Plan</h3>
              <Badge className="bg-[#1050CE]">Individual</Badge>
            </div>
            
            <div className="p-4 bg-[#1050CE]/5 rounded-lg border border-[#1050CE]/20 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-montserrat font-medium">Individual Membership</h4>
                  <p className="text-sm text-gray-600">Valid until December 31, 2025</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-montserrat font-medium">₱2,500</p>
                  <p className="text-sm text-gray-600">per year</p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-[#1050CE]/20 flex items-center justify-center mr-2">
                    <svg className="w-3 h-3 text-[#1050CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Access to all basic resources and events</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-[#1050CE]/20 flex items-center justify-center mr-2">
                    <svg className="w-3 h-3 text-[#1050CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Community forum participation</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-[#1050CE]/20 flex items-center justify-center mr-2">
                    <svg className="w-3 h-3 text-[#1050CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Free entry to monthly webinars</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline">Cancel Membership</Button>
              <Button className="bg-[#1050CE] hover:bg-[#0F3F9E]">Renew Membership</Button>
            </div>
          </div>
          
          <div className="quantum-card p-6 mt-6">
            <h3 className="font-montserrat text-lg font-medium mb-6">Billing Information</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" defaultValue="Maria Santos" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" defaultValue="•••• •••• •••• 4242" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input id="expiryDate" defaultValue="09/26" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" defaultValue="•••" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="billingAddress">Billing Address</Label>
                <Input id="billingAddress" defaultValue="123 Main St, Makati City" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="Makati City" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP / Postal Code</Label>
                  <Input id="zipCode" defaultValue="1200" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="bg-[#1050CE] hover:bg-[#0F3F9E]">Update Billing Info</Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;
