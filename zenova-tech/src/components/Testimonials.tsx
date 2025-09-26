import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  project: string;
  results: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Nielsen",
    company: "Binné Danmark",
    role: "CTO",
    content: "Jesper har været en game-changer for vores teknologiske transformation. Hans evne til at oversætte komplekse forretningsbehov til skalerbare løsninger er imponerende. Vi har oplevet 40% reduktion i udviklingstid og 60% forbedring i systemperformance.",
    rating: 5,
    avatar: "SN",
    project: "Cloud Migration & Microservices Architecture",
    results: ["40% reduktion i udviklingstid", "60% forbedring i performance", "100% uptime siden implementering"]
  },
  {
    id: 2,
    name: "Michael Andersen",
    company: "Agritectum",
    role: "Founder",
    content: "Jesper hjalp os med at bygge en AI-drevet platform der revolutionerede vores landbrugsrådgivning. Hans tekniske ekspertise kombineret med forståelse for vores branche skabte en løsning der øgede vores kundetilfredshed med 85%.",
    rating: 5,
    avatar: "MA",
    project: "AI-Powered Agricultural Platform",
    results: ["85% øget kundetilfredshed", "3x hurtigere rådgivning", "50% reduktion i manuelle opgaver"]
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "Taklaget Entrepanad",
    role: "Operations Manager",
    content: "Jesper implementerede en komplet digital transformation for vores entreprenørvirksomhed. Fra papirbaseret arbejdsgang til fuldt digitaliseret projektstyring - resultatet var 70% reduktion i administrative opgaver og 45% hurtigere projektleverance.",
    rating: 5,
    avatar: "ER",
    project: "Digital Project Management System",
    results: ["70% reduktion i administrative opgaver", "45% hurtigere projektleverance", "90% reduktion i fejl"]
  },
  {
    id: 4,
    name: "Thomas Larsen",
    company: "Nordic ESG Solutions",
    role: "Managing Director",
    content: "Jesper's ekspertise inden for ESG-implementering og teknologisk integration var afgørende for vores succes. Han hjalp os med at automatisere rapporteringsprocesser og skabe en platform der nu betjener 200+ virksomheder med 99.9% tilgængelighed.",
    rating: 5,
    avatar: "TL",
    project: "ESG Reporting Automation Platform",
    results: ["200+ virksomheder betjent", "99.9% platform tilgængelighed", "80% reduktion i rapporteringstid"]
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Hvad siger mine klienter?</h2>
          <p>
            Målbare resultater og tilfredse klienter - her er hvad jeg har leveret 
            for danske virksomheder gennem teknologisk innovation.
          </p>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-navigation">
            <button 
              onClick={prevTestimonial}
              className="nav-button"
              aria-label="Forrige testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Gå til testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="nav-button"
              aria-label="Næste testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="testimonial-card-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card"
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <span>{currentTestimonial.avatar}</span>
                  </div>
                  <div className="testimonial-info">
                    <h3>{currentTestimonial.name}</h3>
                    <p className="testimonial-company">{currentTestimonial.company}</p>
                    <p className="testimonial-role">{currentTestimonial.role}</p>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="star-filled" />
                    ))}
                  </div>
                </div>

                <div className="testimonial-content">
                  <Quote size={24} className="quote-icon" />
                  <blockquote>
                    "{currentTestimonial.content}"
                  </blockquote>
                </div>

                <div className="testimonial-project">
                  <h4>Projekt: {currentTestimonial.project}</h4>
                  <div className="project-results">
                    <h5>Målbare resultater:</h5>
                    <ul>
                      {currentTestimonial.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Klienttilfredshed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Succesfulde projekter</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50%</div>
            <div className="stat-label">Gennemsnitlig effektivitetsforbedring</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">System tilgængelighed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
