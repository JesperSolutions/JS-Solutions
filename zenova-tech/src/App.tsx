import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { pageVariants, pageTransition } from './components/Animations';
import { analytics } from './lib/analytics';
import { performanceMonitor } from './lib/performance';
import { ThemeProvider } from './components/ThemeToggle';

// Lazy load pages for code splitting
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy load blog posts
const CursorIDEGuide = lazy(() => import('./pages/blog/CursorIDE-Guide'));
const AIDevelopmentGuide = lazy(() => import('./pages/blog/AI-Development-Guide'));
const ESGImplementationGuide = lazy(() => import('./pages/blog/ESG-Implementation-Guide'));

// Loading component for Suspense
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-content">
      <div className="loader-spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
);

// Animated page wrapper
const AnimatedPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

// App content component that uses useLocation
const AppContent = () => {
  const location = useLocation();
  
  // Initialize analytics and performance monitoring
  useEffect(() => {
    // Initialize analytics
    analytics.init();
    
    // Initialize performance monitoring
    performanceMonitor.init();
    
    // Track page view on route change
    analytics.trackPageView(location.pathname);
    
    // Track user journey
    analytics.trackUserJourney('page_view', location.pathname);
    
    return () => {
      // Cleanup if needed
    };
  }, [location.pathname]);
  
  return (
    <div>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
              <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
              <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
              <Route path="/blog" element={<AnimatedPage><Blog /></AnimatedPage>} />
              <Route path="/blog/cursor-ide-guide" element={<AnimatedPage><CursorIDEGuide /></AnimatedPage>} />
              <Route path="/blog/ai-development-guide" element={<AnimatedPage><AIDevelopmentGuide /></AnimatedPage>} />
              <Route path="/blog/esg-implementation-guide" element={<AnimatedPage><ESGImplementationGuide /></AnimatedPage>} />
              <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
              <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <AppContent />
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;