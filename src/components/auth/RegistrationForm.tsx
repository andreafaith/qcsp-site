
import React, { useState } from 'react';
import { UserData } from '@/services/authService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CircleCheck, User, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';

interface RegistrationFormProps {
  onSubmit: (data: UserData) => void;
  accountType: 'individual' | 'student' | 'institutional';
  loading: boolean;
  onBackToAccountSelection: () => void;
}

const RegistrationForm = ({
  onSubmit,
  accountType,
  loading,
  onBackToAccountSelection
}: RegistrationFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType,
    institution: '',
    organization: '',
    jobTitle: '',
    phoneNumber: '',
    country: '',
    bio: '',
    interests: []
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleInterestChange = (interest: string) => {
    const currentInterests = formData.interests || [];
    if (currentInterests.includes(interest)) {
      setFormData(prev => ({
        ...prev,
        interests: currentInterests.filter(i => i !== interest)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        interests: [...currentInterests, interest]
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));
  
  // Validation for current step
  const isCurrentStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.password && 
               formData.password === formData.confirmPassword && 
               formData.password.length >= 6;
      case 2:
        if (accountType === 'individual') {
          return formData.jobTitle && formData.country;
        } else if (accountType === 'student') {
          return formData.institution && formData.country;
        } else { // institutional
          return formData.organization && formData.jobTitle && formData.country;
        }
      case 3:
        return true; // Optional fields
      default:
        return false;
    }
  };
  
  const quantumInterests = [
    'Quantum Computing Basics',
    'Quantum Algorithms',
    'Quantum Machine Learning',
    'Quantum Error Correction',
    'Quantum Hardware',
    'Quantum Software Development',
    'Quantum Cryptography',
    'Quantum Communication',
    'Quantum Education'
  ];
  
  return (
    <div>
      <div className="bg-qcsp-primary/10 p-3 rounded-md mb-6">
        <div className="flex items-center">
          <CircleCheck size={20} className="text-qcsp-primary flex-shrink-0" />
          <p className="ml-2 text-sm font-montserrat">
            {accountType === 'individual' ? 'Individual Member' : 
             accountType === 'student' ? 'Student Member' : 
             'Institutional Representative'}
          </p>
        </div>
      </div>
      
      {/* Progress steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  s === step ? 'bg-qcsp-primary text-white' : 
                  s < step ? 'bg-green-500 text-white' : 
                  'bg-gray-200 text-gray-500'
                }`}
              >
                {s < step ? <CircleCheck size={16} /> : s}
              </div>
              <span className="text-xs mt-1">
                {s === 1 ? 'Account Info' : s === 2 ? 'Personal Details' : 'Preferences'}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 h-1 w-full bg-gray-200 rounded-full">
          <div 
            className="h-1 bg-qcsp-primary rounded-full transition-all" 
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                Full Name
              </Label>
              <Input
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
              <Label htmlFor="register-email" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                Email
              </Label>
              <Input
                type="email"
                id="register-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="register-password" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                Password
              </Label>
              <Input
                type="password"
                id="register-password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Password must be at least 6 characters</p>
            </div>
            
            <div>
              <Label htmlFor="confirm-password" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                Confirm Password
              </Label>
              <Input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                required
              />
              {formData.password !== formData.confirmPassword && formData.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
              )}
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-4">
            {accountType === 'student' && (
              <div>
                <Label htmlFor="institution" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                  Educational Institution
                </Label>
                <Input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                  required
                />
              </div>
            )}
            
            {accountType === 'institutional' && (
              <div>
                <Label htmlFor="organization" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                  Organization Name
                </Label>
                <Input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                  required
                />
              </div>
            )}
            
            {(accountType === 'individual' || accountType === 'institutional') && (
              <div>
                <Label htmlFor="jobTitle" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                  Job Title
                </Label>
                <Input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                  required
                />
              </div>
            )}
            
            <div>
              <Label htmlFor="phoneNumber" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
              />
            </div>
            
            <div>
              <Label htmlFor="country" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                Country
              </Label>
              <select
                id="country"
                name="country"
                value={formData.country || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                required
              >
                <option value="">Select country</option>
                <option value="Philippines">Philippines</option>
                <option value="USA">United States</option>
                <option value="Japan">Japan</option>
                <option value="Singapore">Singapore</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="bio" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                Bio
              </Label>
              <Textarea
                id="bio"
                name="bio"
                value={formData.bio || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                rows={3}
                placeholder="Tell us about yourself and your interest in quantum computing..."
              />
            </div>
            
            <div>
              <Label className="block text-sm font-montserrat font-medium text-gray-700 mb-3">
                Quantum Computing Interests
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {quantumInterests.map((interest) => (
                  <label key={interest} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-qcsp-primary focus:ring-qcsp-primary"
                      checked={(formData.interests || []).includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                    />
                    <span className="ml-2 text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-qcsp-primary focus:ring-qcsp-primary border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-qcsp-primary hover:underline">Terms and Conditions</a>
              </label>
            </div>
          </div>
        )}
        
        <div className="mt-8 flex justify-between">
          {step === 1 ? (
            <Button
              type="button"
              variant="outline"
              onClick={onBackToAccountSelection}
              className="flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              className="flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              Previous
            </Button>
          )}
          
          {step < 3 ? (
            <Button
              type="button"
              onClick={nextStep}
              disabled={!isCurrentStepValid()}
              className="flex items-center"
            >
              Next
              <ArrowRight size={16} className="ml-1" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={loading || !isCurrentStepValid()}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
