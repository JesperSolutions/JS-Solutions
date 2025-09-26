// Google Analytics 4 implementation with custom events
// Optimized for performance and privacy compliance

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// GA4 Configuration
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID

// Initialize Google Analytics
export const initAnalytics = () => {
  if (typeof window === 'undefined') return;

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Configure GA4
  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
};

// Custom event tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', eventName, {
    event_category: 'engagement',
    event_label: parameters?.label || '',
    value: parameters?.value || 0,
    ...parameters
  });
};

// Page view tracking
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA4_MEASUREMENT_ID, {
    page_path: pagePath,
    page_title: pageTitle || document.title
  });
};

// Blog engagement tracking
export const trackBlogEngagement = (action: string, articleTitle: string, category?: string) => {
  trackEvent('blog_engagement', {
    action,
    article_title: articleTitle,
    category: category || 'general',
    engagement_type: 'content'
  });
};

// Contact form tracking
export const trackContactForm = (action: string, formType: string) => {
  trackEvent('contact_form', {
    action, // 'submit', 'error', 'success'
    form_type: formType, // 'contact', 'newsletter'
    conversion: action === 'success'
  });
};

// Project interaction tracking
export const trackProjectInteraction = (action: string, projectTitle: string) => {
  trackEvent('project_interaction', {
    action, // 'view', 'demo_click', 'github_click'
    project_title: projectTitle,
    interaction_type: 'portfolio'
  });
};

// Newsletter signup tracking
export const trackNewsletterSignup = (source: string) => {
  trackEvent('newsletter_signup', {
    source, // 'footer', 'blog', 'contact'
    conversion: true
  });
};

// Performance tracking
export const trackPerformance = (metric: string, value: number, unit: string = 'ms') => {
  trackEvent('performance_metric', {
    metric_name: metric,
    metric_value: value,
    metric_unit: unit,
    performance_type: 'core_web_vitals'
  });
};

// Error tracking
export const trackError = (errorType: string, errorMessage: string, page?: string) => {
  trackEvent('error_occurred', {
    error_type: errorType,
    error_message: errorMessage,
    page: page || window.location.pathname,
    severity: 'warning'
  });
};

// User journey tracking
export const trackUserJourney = (step: string, context?: string) => {
  trackEvent('user_journey', {
    journey_step: step,
    context: context || 'general',
    timestamp: new Date().toISOString()
  });
};

// Export for easy use
export const analytics = {
  init: initAnalytics,
  trackEvent,
  trackPageView,
  trackBlogEngagement,
  trackContactForm,
  trackProjectInteraction,
  trackNewsletterSignup,
  trackPerformance,
  trackError,
  trackUserJourney
};
