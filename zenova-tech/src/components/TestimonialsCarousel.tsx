import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  project?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, testimonials.length]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    trackEvent('testimonial_navigation', {
      direction: 'previous',
      index: newIndex,
      total: testimonials.length
    });
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    trackEvent('testimonial_navigation', {
      direction: 'next',
      index: newIndex,
      total: testimonials.length
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    trackEvent('testimonial_navigation', {
      direction: 'direct',
      index: index,
      total: testimonials.length
    });
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
    trackEvent('testimonial_autoplay', {
      action: isPlaying ? 'pause' : 'play'
    });
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={`testimonials-carousel ${className}`}>
      <div className="carousel-container">
        {/* Main testimonial */}
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote-icon">
              <Quote size={32} />
            </div>
            
            <blockquote className="testimonial-text">
              "{currentTestimonial.content}"
            </blockquote>
            
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < currentTestimonial.rating ? 'filled' : 'empty'}
                />
              ))}
            </div>
            
            <div className="testimonial-author">
              <div className="author-info">
                <h4 className="author-name">{currentTestimonial.name}</h4>
                <p className="author-role">{currentTestimonial.role}</p>
                <p className="author-company">{currentTestimonial.company}</p>
                {currentTestimonial.project && (
                  <p className="author-project">Project: {currentTestimonial.project}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="carousel-controls">
          <button
            onClick={goToPrevious}
            className="carousel-btn prev"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="carousel-btn next"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play toggle */}
        <div className="carousel-autoplay">
          <button
            onClick={toggleAutoPlay}
            className={`autoplay-btn ${isPlaying ? 'playing' : 'paused'}`}
            aria-label={isPlaying ? 'Pause auto-play' : 'Start auto-play'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="carousel-progress">
        <div 
          className="progress-bar"
          style={{
            width: `${((currentIndex + 1) / testimonials.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
