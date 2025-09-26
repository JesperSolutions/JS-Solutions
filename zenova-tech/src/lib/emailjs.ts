import emailjs from '@emailjs/browser';
import { trackContactForm, trackError } from './analytics';

// EmailJS configuration - using environment variables for security
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zenova_tech';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_newsletter';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'njHV3hwgQjnlrY8rA';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface NewsletterData {
  name: string;
  email: string;
  message?: string;
  source?: string; // Track where the form was submitted from
}

export interface ContactData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  source?: string;
}

// Enhanced newsletter signup with analytics
export const sendNewsletterSignup = async (data: NewsletterData): Promise<boolean> => {
  try {
    trackContactForm('submit', 'newsletter');
    
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message || 'Newsletter signup from zenova-tech website',
        source: data.source || 'website',
        timestamp: new Date().toISOString()
      }
    );
    
    console.log('✅ Newsletter signup email sent successfully:', result.text);
    trackContactForm('success', 'newsletter');
    return true;
  } catch (error) {
    console.error('❌ Failed to send newsletter signup email:', error);
    trackContactForm('error', 'newsletter');
    trackError('emailjs_error', `Newsletter signup failed: ${error}`, window.location.pathname);
    return false;
  }
};

// Enhanced contact form submission with analytics
export const sendContactForm = async (data: ContactData): Promise<boolean> => {
  try {
    trackContactForm('submit', 'contact');
    
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_contact', // Different template for contact form
      {
        from_name: data.name,
        from_email: data.email,
        company: data.company || 'Not provided',
        phone: data.phone || 'Not provided',
        message: data.message,
        project_type: data.projectType || 'General inquiry',
        budget: data.budget || 'Not specified',
        timeline: data.timeline || 'Not specified',
        source: data.source || 'website',
        timestamp: new Date().toISOString()
      }
    );
    
    console.log('✅ Contact form email sent successfully:', result.text);
    trackContactForm('success', 'contact');
    return true;
  } catch (error) {
    console.error('❌ Failed to send contact form email:', error);
    trackContactForm('error', 'contact');
    trackError('emailjs_error', `Contact form failed: ${error}`, window.location.pathname);
    return false;
  }
};

// Project inquiry form
export const sendProjectInquiry = async (data: ContactData): Promise<boolean> => {
  try {
    trackContactForm('submit', 'project_inquiry');
    
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_project_inquiry',
      {
        from_name: data.name,
        from_email: data.email,
        company: data.company || 'Not provided',
        phone: data.phone || 'Not provided',
        message: data.message,
        project_type: data.projectType || 'Not specified',
        budget: data.budget || 'Not specified',
        timeline: data.timeline || 'Not specified',
        source: data.source || 'website',
        timestamp: new Date().toISOString()
      }
    );
    
    console.log('✅ Project inquiry email sent successfully:', result.text);
    trackContactForm('success', 'project_inquiry');
    return true;
  } catch (error) {
    console.error('❌ Failed to send project inquiry email:', error);
    trackContactForm('error', 'project_inquiry');
    trackError('emailjs_error', `Project inquiry failed: ${error}`, window.location.pathname);
    return false;
  }
};

// Test email functionality
export const testEmailConnection = async (): Promise<boolean> => {
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: 'Test User',
        from_email: 'test@zenova-tech.dk',
        message: 'Test email from zenova-tech website',
        source: 'test',
        timestamp: new Date().toISOString()
      }
    );
    
    console.log('✅ Email connection test successful:', result.text);
    return true;
  } catch (error) {
    console.error('❌ Email connection test failed:', error);
    trackError('emailjs_test_failed', `Email test failed: ${error}`, window.location.pathname);
    return false;
  }
};

export default emailjs;
