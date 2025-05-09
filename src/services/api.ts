
import { toast } from 'sonner';

// API base URL for the backend - would point to a real backend in production
const API_BASE_URL = 'https://api.qcsp.org';

// General API request handler
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    // Set default headers
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    
    // Get auth token from localStorage if available
    const token = localStorage.getItem('qcsp-token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const response = await fetch(url, {
      ...options,
      headers,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Request failed with status ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    // For now, we'll simulate success in the frontend
    // In a real app, we'd throw the error for handling by the caller
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Database service - MongoDB
export const dbService = {
  // Simulated MongoDB connection string (Don't expose this in frontend code in production)
  connectionString: 'mongodb+srv://qcsp:43XYd2jUFk1cfltJ@qcsp.vz4fc3w.mongodb.net/',
  
  // User operations
  users: {
    get: async (userId: string) => {
      return apiRequest(`/users/${userId}`);
    },
    update: async (userId: string, userData: any) => {
      return apiRequest(`/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(userData),
      });
    },
    getAll: async () => {
      return apiRequest('/users');
    }
  },
  
  // Event operations
  events: {
    get: async (eventId: string) => {
      return apiRequest(`/events/${eventId}`);
    },
    getAll: async () => {
      return apiRequest('/events');
    },
    create: async (eventData: any) => {
      return apiRequest('/events', {
        method: 'POST',
        body: JSON.stringify(eventData),
      });
    }
  },
  
  // Resource operations
  resources: {
    get: async (resourceId: string) => {
      return apiRequest(`/resources/${resourceId}`);
    },
    getAll: async () => {
      return apiRequest('/resources');
    }
  },
  
  // Course operations
  courses: {
    get: async (courseId: string) => {
      return apiRequest(`/courses/${courseId}`);
    },
    getAll: async () => {
      return apiRequest('/courses');
    },
    getUserProgress: async (userId: string, courseId: string) => {
      return apiRequest(`/users/${userId}/courses/${courseId}/progress`);
    }
  }
};

// Email service - SMTP
export const emailService = {
  // SMTP configuration (This would be server-side in production)
  config: {
    host: 'mail.datachuck.network',
    port: 587,
    secure: false,
    auth: {
      user: 'quantum@datachuck.network',
      pass: 'bmMEDJaAZ5f3h8TwHGyZ'
    }
  },
  
  // Send email function (simulated in frontend)
  sendEmail: async (options: { to: string, subject: string, html: string }) => {
    console.log('Sending email:', options);
    
    // Simulate email sending success
    setTimeout(() => {
      toast.success('Email sent successfully');
    }, 1000);
    
    return { success: true };
  },
  
  // Email templates
  templates: {
    welcome: (name: string) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1050CE; color: white; padding: 20px; text-align: center;">
          <h1>Welcome to QCSP!</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #eee;">
          <p>Hello ${name},</p>
          <p>Welcome to the Quantum Computing Society of the Philippines! We're thrilled to have you join our community of quantum enthusiasts.</p>
          <p>With your membership, you now have access to:</p>
          <ul>
            <li>Exclusive learning resources</li>
            <li>Member-only events and webinars</li>
            <li>Our vibrant community forum</li>
            <li>Quantum computing tools and applications</li>
          </ul>
          <p>Get started by exploring our resources and upcoming events in your dashboard.</p>
          <div style="text-align: center; margin-top: 30px;">
            <a href="https://qcsp.org/member-dashboard" style="background-color: #1050CE; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Go to Dashboard</a>
          </div>
          <p style="margin-top: 30px;">If you have any questions, don't hesitate to contact our support team at support@qcsp.org.</p>
          <p>Best regards,<br>The QCSP Team</p>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          <p>Quantum Computing Society of the Philippines</p>
          <p>Manila, Philippines</p>
        </div>
      </div>
    `,
    
    eventRegistration: (name: string, eventName: string, eventDate: string) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1050CE; color: white; padding: 20px; text-align: center;">
          <h1>Event Registration Confirmation</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #eee;">
          <p>Hello ${name},</p>
          <p>Thank you for registering for <strong>${eventName}</strong> on ${eventDate}.</p>
          <p>We're looking forward to your participation! You'll receive a reminder email 24 hours before the event.</p>
          <div style="text-align: center; margin-top: 30px;">
            <a href="https://qcsp.org/member-dashboard/events" style="background-color: #1050CE; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">View Event Details</a>
          </div>
          <p style="margin-top: 30px;">If you have any questions or need to cancel your registration, please contact us at events@qcsp.org.</p>
          <p>Best regards,<br>The QCSP Team</p>
        </div>
      </div>
    `
  }
};
