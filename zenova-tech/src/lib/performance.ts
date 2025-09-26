// Performance monitoring and Core Web Vitals tracking
// Optimized for real-time performance insights

interface PerformanceMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

interface WebVitalsMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB';
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

// Core Web Vitals thresholds
const VITALS_THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 }
};

// Performance monitoring class
class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetric> = new Map();
  private vitals: Map<string, WebVitalsMetric> = new Map();

  constructor() {
    this.init();
  }

  private init() {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    this.observeWebVitals();
    
    // Monitor general performance
    this.observePerformance();
    
    // Monitor resource loading
    this.observeResources();
    
    // Monitor navigation timing
    this.observeNavigation();
  }

  private observeWebVitals() {
    // Largest Contentful Paint (LCP)
    this.observeLCP();
    
    // First Input Delay (FID)
    this.observeFID();
    
    // Cumulative Layout Shift (CLS)
    this.observeCLS();
    
    // First Contentful Paint (FCP)
    this.observeFCP();
    
    // Time to First Byte (TTFB)
    this.observeTTFB();
  }

  private observeLCP() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      
      this.vitals.set('LCP', {
        name: 'LCP',
        value: lastEntry.startTime,
        delta: lastEntry.startTime,
        id: lastEntry.name,
        navigationType: 'navigate'
      });

      this.reportVital('LCP', lastEntry.startTime);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  private observeFID() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        this.vitals.set('FID', {
          name: 'FID',
          value: entry.processingStart - entry.startTime,
          delta: entry.processingStart - entry.startTime,
          id: entry.name,
          navigationType: 'navigate'
        });

        this.reportVital('FID', entry.processingStart - entry.startTime);
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
  }

  private observeCLS() {
    if (!('PerformanceObserver' in window)) return;

    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });

      this.vitals.set('CLS', {
        name: 'CLS',
        value: clsValue,
        delta: clsValue,
        id: 'cls-observer',
        navigationType: 'navigate'
      });

      this.reportVital('CLS', clsValue);
    });

    observer.observe({ entryTypes: ['layout-shift'] });
  }

  private observeFCP() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      
      if (fcpEntry) {
        this.vitals.set('FCP', {
          name: 'FCP',
          value: fcpEntry.startTime,
          delta: fcpEntry.startTime,
          id: fcpEntry.name,
          navigationType: 'navigate'
        });

        this.reportVital('FCP', fcpEntry.startTime);
      }
    });

    observer.observe({ entryTypes: ['paint'] });
  }

  private observeTTFB() {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigation.responseStart - navigation.requestStart;

      this.vitals.set('TTFB', {
        name: 'TTFB',
        value: ttfb,
        delta: ttfb,
        id: 'ttfb-measurement',
        navigationType: 'navigate'
      });

      this.reportVital('TTFB', ttfb);
    });
  }

  private observePerformance() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.metrics.set(entry.name, {
          name: entry.name,
          value: entry.duration,
          delta: entry.duration,
          id: entry.name,
          navigationType: 'navigate'
        });

        // Report significant performance metrics
        if (entry.duration > 100) {
          this.reportMetric(entry.name, entry.duration);
        }
      });
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });
  }

  private observeResources() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        // Track slow resource loads
        if (entry.duration > 1000) {
          this.reportMetric(`resource_${entry.initiatorType}`, entry.duration, 'ms');
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }

  private observeNavigation() {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      // Report key navigation metrics
      this.reportMetric('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      this.reportMetric('load_complete', navigation.loadEventEnd - navigation.loadEventStart);
      this.reportMetric('dom_processing', navigation.domComplete - navigation.fetchStart);
    });
  }

  private reportVital(name: WebVitalsMetric['name'], value: number) {
    const threshold = VITALS_THRESHOLDS[name];
    let rating = 'good';
    
    if (value > threshold.poor) {
      rating = 'poor';
    } else if (value > threshold.good) {
      rating = 'needs_improvement';
    }

    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'web_vitals', {
        metric_name: name,
        metric_value: Math.round(value),
        metric_rating: rating,
        metric_delta: Math.round(value)
      });
    }

    // Log for development
    console.log(`📊 ${name}: ${Math.round(value)}ms (${rating})`);
  }

  private reportMetric(name: string, value: number, unit: string = 'ms') {
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: Math.round(value),
        metric_unit: unit
      });
    }

    // Log for development
    console.log(`⚡ ${name}: ${Math.round(value)}${unit}`);
  }

  // Public methods
  public getMetrics(): Map<string, PerformanceMetric> {
    return this.metrics;
  }

  public getVitals(): Map<string, WebVitalsMetric> {
    return this.vitals;
  }

  public getPerformanceScore(): number {
    const vitals = Array.from(this.vitals.values());
    let score = 100;

    vitals.forEach(vital => {
      const threshold = VITALS_THRESHOLDS[vital.name];
      if (vital.value > threshold.poor) {
        score -= 20;
      } else if (vital.value > threshold.good) {
        score -= 10;
      }
    });

    return Math.max(0, score);
  }

  public generateReport(): string {
    const vitals = Array.from(this.vitals.values());
    const metrics = Array.from(this.metrics.values());
    const score = this.getPerformanceScore();

    let report = `🚀 Performance Report\n`;
    report += `Overall Score: ${score}/100\n\n`;
    
    report += `📊 Core Web Vitals:\n`;
    vitals.forEach(vital => {
      const threshold = VITALS_THRESHOLDS[vital.name];
      let rating = '✅ Good';
      if (vital.value > threshold.poor) {
        rating = '❌ Poor';
      } else if (vital.value > threshold.good) {
        rating = '⚠️ Needs Improvement';
      }
      report += `  ${vital.name}: ${Math.round(vital.value)}ms ${rating}\n`;
    });

    report += `\n⚡ Key Metrics:\n`;
    metrics.slice(0, 5).forEach(metric => {
      report += `  ${metric.name}: ${Math.round(metric.value)}ms\n`;
    });

    return report;
  }
}

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return null;
  return new PerformanceMonitor();
};

// Export for easy use
export const performanceMonitor = {
  init: initPerformanceMonitoring
};
