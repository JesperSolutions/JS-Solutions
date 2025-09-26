import emailjs from '@emailjs/browser';

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
}

export const sendNewsletterSignup = async (data: NewsletterData): Promise<boolean> => {
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message || 'Newsletter signup from zenova-tech website',
      }
    );
    
    console.log('Email sent successfully:', result.text);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

export default emailjs;
