
import { toast } from 'sonner';

// Important: Do not expose this connection string directly in frontend code in production
// This should be handled through secure backend APIs
const MONGODB_URI = "mongodb+srv://qcsp:43XYd2jUFk1cfltJ@qcsp.vz4fc3w.mongodb.net/?retryWrites=true&w=majority&appName=QCSP";

// SMTP Configuration
const SMTP_CONFIG = {
  host: 'mail.datachuck.network',
  port: 587,
  secure: false,
  auth: {
    user: 'quantum@datachuck.network',
    pass: 'bmMEDJaAZ5f3h8TwHGyZ'
  }
};

// Interface for user data
export interface UserData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  accountType?: 'individual' | 'student' | 'institutional';
  institution?: string;
  organization?: string;
  jobTitle?: string;
  phoneNumber?: string;
  country?: string;
  interests?: string[];
  bio?: string;
  profileImage?: string;
}

// Interface for login credentials
export interface LoginCredentials {
  email: string;
  password: string;
}

// Function to send welcome email (simulated in frontend)
const sendWelcomeEmail = async (userData: UserData) => {
  try {
    // In a real app, this would be an API call to your backend
    console.log('Sending welcome email to:', userData.email);
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // The following would be done server-side with real SMTP
    // Using SMTP_CONFIG
    
    console.log('Email sent successfully!');
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Simulate authentication with MongoDB
// In a real app, these calls would go to a secure backend API
export const authService = {
  // Login function
  login: async (credentials: LoginCredentials): Promise<{ success: boolean; message: string; user?: any }> => {
    try {
      // In production, this would be an API call to your backend
      console.log('Attempting login with:', credentials.email);
      
      // Simulate API latency
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful login (In production, this would validate against MongoDB)
      // This is just a mockup - NEVER do authentication directly in frontend code
      if (credentials.email && credentials.password.length >= 6) {
        // Store user info in localStorage (in production, use secure tokens)
        const user = { 
          email: credentials.email,
          name: credentials.email.split('@')[0],
          role: credentials.email.includes('admin') ? 'admin' : 'member',
          accountType: 'individual',
          joinDate: '2025-01-15',
          expiryDate: '2025-12-31'
        };
        localStorage.setItem('qcsp_user', JSON.stringify(user));
        return { 
          success: true, 
          message: 'Login successful',
          user 
        };
      }
      return { success: false, message: 'Invalid email or password' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Authentication failed. Please try again.' };
    }
  },

  // Register function
  register: async (userData: UserData): Promise<{ success: boolean; message: string }> => {
    try {
      // In production, this would be an API call to your backend
      console.log('Registering new user:', userData);
      
      // Simulate API latency
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful registration
      if (userData.email && userData.password.length >= 6) {
        // Send welcome email
        const emailSent = await sendWelcomeEmail(userData);
        
        if (emailSent) {
          return { 
            success: true, 
            message: 'Registration successful! A welcome email has been sent to your inbox.' 
          };
        } else {
          return { 
            success: true, 
            message: 'Registration successful, but we could not send the welcome email. Please check your email settings.' 
          };
        }
      }
      return { success: false, message: 'Invalid registration data' };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'Registration failed. Please try again.' };
    }
  },

  // Logout function
  logout: (): void => {
    localStorage.removeItem('qcsp_user');
  },

  // Check if user is logged in
  isAuthenticated: (): boolean => {
    return localStorage.getItem('qcsp_user') !== null;
  },

  // Get current user
  getCurrentUser: (): any => {
    const user = localStorage.getItem('qcsp_user');
    return user ? JSON.parse(user) : null;
  },
  
  // Update user profile
  updateProfile: async (userId: string, updateData: Partial<UserData>): Promise<{ success: boolean; message: string }> => {
    try {
      // In production, this would be an API call to your backend
      console.log('Updating profile for user:', userId, updateData);
      
      // Simulate API latency
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update local user data
      const userData = localStorage.getItem('qcsp_user');
      if (userData) {
        const user = JSON.parse(userData);
        const updatedUser = { ...user, ...updateData };
        localStorage.setItem('qcsp_user', JSON.stringify(updatedUser));
        
        return { success: true, message: 'Profile updated successfully' };
      }
      
      return { success: false, message: 'Failed to update profile' };
    } catch (error) {
      console.error('Profile update error:', error);
      return { success: false, message: 'Failed to update profile. Please try again.' };
    }
  }
};
