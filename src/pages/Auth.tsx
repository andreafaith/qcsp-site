
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { toast } from 'sonner';
import { CircleCheck, User, ShieldCheck } from 'lucide-react';
import { authService, UserData, LoginCredentials } from '@/services/authService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import RegistrationForm from '@/components/auth/RegistrationForm';

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState<'individual' | 'student' | 'institutional' | null>(null);
  
  // Login form state
  const [loginData, setLoginData] = useState<LoginCredentials>({
    email: '',
    password: ''
  });
  
  // Check if user is already logged in
  useEffect(() => {
    if (authService.isAuthenticated()) {
      const user = authService.getCurrentUser();
      if (user?.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/member-dashboard');
      }
    }
  }, [navigate]);
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await authService.login(loginData);
      
      if (result.success) {
        toast.success(result.message);
        
        // Redirect based on user role
        if (result.user?.role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/member-dashboard');
        }
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleRegisterSubmit = async (registerData: UserData) => {
    if (registerData.password !== registerData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    
    setLoading(true);
    
    try {
      const result = await authService.register(registerData);
      
      if (result.success) {
        toast.success(result.message);
        setIsLogin(true);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleAccountTypeSelect = (type: 'individual' | 'student' | 'institutional') => {
    setAccountType(type);
    toast.success(`You've selected the ${type} account type. Please complete the registration.`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-md mx-auto">
            {!isLogin && accountType === null ? (
              // Account Type Selection
              <>
                <h1 className="text-3xl font-montserrat font-light text-qcsp-primary text-center mb-8">Choose Account Type</h1>
                
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {[
                    { type: 'individual' as const, title: "Individual Member", description: "For professionals and enthusiasts", icon: User },
                    { type: 'student' as const, title: "Student Member", description: "For university and high school students", icon: User },
                    { type: 'institutional' as const, title: "Institutional Representative", description: "For universities and organizations", icon: ShieldCheck }
                  ].map((account) => (
                    <div
                      key={account.type}
                      className="quantum-card p-6 hover-glow cursor-pointer"
                      onClick={() => handleAccountTypeSelect(account.type)}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-qcsp-primary/10 flex items-center justify-center">
                            <account.icon size={20} className="text-qcsp-primary" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-montserrat font-medium">{account.title}</h3>
                          <p className="text-sm text-gray-600">{account.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-center text-gray-600 text-sm">
                  Already have an account?{' '}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-qcsp-primary hover:underline font-montserrat"
                  >
                    Log in
                  </button>
                </p>
              </>
            ) : (
              <div className="quantum-card p-8">
                {isLogin ? (
                  <>
                    <h1 className="text-3xl font-montserrat font-light text-qcsp-primary text-center mb-8">Log In</h1>
                    
                    <form onSubmit={handleLoginSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="email" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                          Email
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={loginData.email}
                          onChange={handleLoginChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="password" className="block text-sm font-montserrat font-medium text-gray-700 mb-1">
                          Password
                        </Label>
                        <Input
                          type="password"
                          id="password"
                          name="password"
                          value={loginData.password}
                          onChange={handleLoginChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qcsp-primary"
                          required
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember"
                            name="remember"
                            type="checkbox"
                            className="h-4 w-4 text-qcsp-primary focus:ring-qcsp-primary border-gray-300 rounded"
                          />
                          <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                            Remember me
                          </label>
                        </div>
                        
                        <div className="text-sm">
                          <a href="#" className="font-medium text-qcsp-primary hover:underline">
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      
                      <Button
                        type="submit"
                        className="primary-button w-full"
                        disabled={loading}
                      >
                        {loading ? 'Logging in...' : 'Log In'}
                      </Button>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          Don't have an account?{' '}
                          <button
                            type="button"
                            onClick={() => { setIsLogin(false); setAccountType(null); }}
                            className="text-qcsp-primary hover:underline font-montserrat"
                          >
                            Sign up
                          </button>
                        </p>
                      </div>
                    </form>
                  </>
                ) : accountType !== null ? (
                  <>
                    <h1 className="text-3xl font-montserrat font-light text-qcsp-primary text-center mb-8">Create Account</h1>
                    
                    <RegistrationForm 
                      onSubmit={handleRegisterSubmit}
                      accountType={accountType}
                      loading={loading}
                      onBackToAccountSelection={() => setAccountType(null)}
                    />
                    
                    <div className="text-center mt-6">
                      <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <button
                          type="button"
                          onClick={() => setIsLogin(true)}
                          className="text-qcsp-primary hover:underline font-montserrat"
                        >
                          Log in
                        </button>
                      </p>
                    </div>
                  </>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
