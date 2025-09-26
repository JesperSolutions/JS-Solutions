import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendNewsletterSignup, type NewsletterData } from '../lib/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState<NewsletterData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [touched, setTouched] = useState<{[key: string]: boolean}>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Navn er påkrævet';
        if (value.trim().length < 2) return 'Navn skal være mindst 2 tegn';
        return '';
      case 'email':
        if (!value.trim()) return 'Email er påkrævet';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Indtast en gyldig email adresse';
        return '';
      case 'message':
        if (value.trim().length > 0 && value.trim().length < 10) {
          return 'Besked skal være mindst 10 tegn hvis udfyldt';
        }
        return '';
      default:
        return '';
    }
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};
    
    Object.keys(formData).forEach(key => {
      const value = formData[key as keyof NewsletterData];
      if (value !== undefined) {
        const error = validateField(key, value);
        if (error) {
          newErrors[key] = error;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as {[key: string]: boolean});
    setTouched(allTouched);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendNewsletterSignup(formData);
      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setTouched({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  return (
    <>
      <Helmet>
        <title>Kontakt - Zenova Tech | Kom i kontakt med Jesper Aggerholm</title>
        <meta 
          name="description" 
          content="Kontakt Jesper Aggerholm for IT-rådgivning, ESG-implementering eller AI-integration. Ring eller send en besked for at diskutere dit projekt." 
        />
        <meta name="keywords" content="kontakt, IT-rådgivning, ESG, AI, projektledelse, Danmark" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="hero contact-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tagline">
              <Mail size={20} />
              <span>Lad os skabe sammen</span>
            </div>
            
            <h1>
              Lad os{' '}
              <span className="zenova-brand">skabe</span>
              <br />
              sammen
            </h1>
            
            <p className="hero-description">
              Klar til at starte? Lad os finde den bedste vej frem for din virksomhed.
            </p>
            
            <div className="contact-stats">
              <div className="stat-item">
                <span className="stat-number">24h</span>
                <span className="stat-label">Svartid</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Diskretion</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">År erfaring</span>
              </div>
            </div>
            
            <div className="buttons">
              <a href="tel:+4542333990" className="btn-primary">
                Ring nu
                <Phone size={18} />
              </a>
              <a href="mailto:jesper@zenova-tech.dk" className="btn-secondary">
                Send email
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="contact-preview">
              <div className="contact-card">
                <div className="contact-icon">
                  <Mail size={48} />
                </div>
                <h3>Kom i kontakt</h3>
                <p>Lad os diskutere dit projekt</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <Phone size={16} />
                    <span>+45 42 33 39 90</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={16} />
                    <span>jesper@zenova-tech.dk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Lad os starte en samtale</h2>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method-icon primary">
                    <Mail size={24} />
                  </div>
                  <div className="contact-method-content">
                    <h3>Email</h3>
                    <p>jesper@zenova-tech.dk</p>
                    <span className="contact-note">
                      Jeg svarer typisk inden for 24 timer
                    </span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon secondary">
                    <Phone size={24} />
                  </div>
                  <div className="contact-method-content">
                    <h3>Telefon</h3>
                    <p>+45 42 33 39 90</p>
                    <span className="contact-note">
                      Ring mellem 9:00-17:00 på hverdage
                    </span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon primary">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-method-content">
                    <h3>Lokation</h3>
                    <p>Ringe, Region Syddanmark</p>
                    <span className="contact-note">
                      Møder kan arrangeres online eller på kontor
                    </span>
                  </div>
                </div>
              </div>

              {/* Services Overview */}
              <div className="services-overview">
                <h3>Hvad kan jeg hjælpe dig med?</h3>
                <div className="services-list">
                  <div className="service-item">
                    <CheckCircle size={20} />
                    <span>IT-rådgivning og strategi</span>
                  </div>
                  <div className="service-item">
                    <CheckCircle size={20} />
                    <span>ESG-implementering og compliance</span>
                  </div>
                  <div className="service-item">
                    <CheckCircle size={20} />
                    <span>AI-integration og automatisering</span>
                  </div>
                  <div className="service-item">
                    <CheckCircle size={20} />
                    <span>Projektledelse og teamudvikling</span>
                  </div>
                  <div className="service-item">
                    <CheckCircle size={20} />
                    <span>Teknisk arkitektur og design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Send mig en besked</h3>
              
              <form onSubmit={handleSubmit} className="contact-form-fields">
                <div className="form-group">
                  <label htmlFor="name">Navn *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Dit fulde navn"
                    className={errors.name && touched.name ? 'error' : ''}
                  />
                  {errors.name && touched.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="din@email.dk"
                    className={errors.email && touched.email ? 'error' : ''}
                  />
                  {errors.email && touched.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Besked</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Fortæl mig om dit projekt eller dine behov..."
                    className={errors.message && touched.message ? 'error' : ''}
                  />
                  {errors.message && touched.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary form-submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      <span>Sender...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send besked</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="status-message success">
                    <CheckCircle size={20} />
                    <span>Tak! Din besked er sendt. Jeg vender tilbage snarest.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="status-message error">
                    <AlertCircle size={20} />
                    <span>Der opstod en fejl. Prøv venligst igen eller kontakt mig direkte.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="cta">
        <h2>Få mine seneste insights</h2>
        <p>
          Modtag artikler om AI-værktøjer, ESG-compliance og teknologi 
          direkte i din indbakke.
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Din email adresse"
            className="newsletter-input"
          />
          <button className="btn-primary">
            Tilmeld dig
          </button>
        </div>
        <p className="newsletter-disclaimer">
          Ingen spam. Afmeld dig når som helst.
        </p>
      </section>
    </>
  );
};

export default Contact;
