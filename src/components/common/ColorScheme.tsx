
import React, { useEffect } from 'react';

/**
 * ColorScheme component applies the QCSP brand colors to the application
 * This is a hidden component that ensures color scheme is properly applied
 */
const ColorScheme: React.FC = () => {
  useEffect(() => {
    // CRITICAL: Override any existing styles with !important
    document.documentElement.style.cssText = `
      --primary: 220 88% 56% !important;
      --primary-foreground: 210 40% 98% !important;
      --secondary: 50 16% 44% !important;
      --secondary-foreground: 222.2 47.4% 11.2% !important;
      --destructive: 4 100% 57% !important;
      --destructive-foreground: 210 40% 98% !important;
    `;
    
    // Force apply direct color variables
    document.documentElement.style.setProperty('--color-qcsp-primary', '#1050CE', 'important');
    document.documentElement.style.setProperty('--color-qcsp-primary-dark', '#0F3F9E', 'important');
    document.documentElement.style.setProperty('--color-qcsp-secondary', '#84825E', 'important');
    document.documentElement.style.setProperty('--color-qcsp-tertiary-darker', '#FF3727', 'important');
    
    // Apply baseline body styles
    document.body.style.backgroundColor = 'white';
    document.body.style.color = '#222222';
    document.body.className = "bg-background text-foreground font-libreCaslon";
    
    // Add global styles directly to override any conflicting styles
    const globalStyles = document.createElement('style');
    globalStyles.id = 'qcsp-global-styles';
    globalStyles.innerHTML = `
      :root {
        --primary: 220 88% 56% !important;
        --secondary: 50 16% 44% !important;
        --destructive: 4 100% 57% !important;
      }
      
      /* Direct color overrides */
      .bg-primary, .bg-qcsp-primary {
        background-color: #1050CE !important;
      }
      
      .bg-secondary, .bg-qcsp-secondary {
        background-color: #84825E !important;
      }
      
      .bg-destructive, .bg-qcsp-tertiary-darker {
        background-color: #FF3727 !important;
      }
      
      .text-primary, .text-qcsp-primary {
        color: #1050CE !important;
      }
      
      /* Button overrides */
      .primary-button, button[class*="primary"] {
        background-color: #1050CE !important;
        color: white !important;
      }
      
      /* Force shadcn button components to use QCSP colors */
      button[class*="bg-primary"] {
        background-color: #1050CE !important;
      }
      
      button[class*="bg-secondary"] {
        background-color: #84825E !important;
      }
      
      /* Ensure proper contrast on buttons */
      button[class*="bg-qcsp-primary"] {
        color: white !important;
      }
    `;
    
    // Remove any existing style element
    const existingStyles = document.getElementById('qcsp-global-styles');
    if (existingStyles) {
      existingStyles.remove();
    }
    
    // Add the new styles
    document.head.appendChild(globalStyles);
    
    console.log('ColorScheme: Applied QCSP brand colors with force override!');
    
    return () => {
      if (globalStyles && globalStyles.parentNode) {
        document.head.removeChild(globalStyles);
      }
    };
  }, []);

  return null;
};

export default ColorScheme;
