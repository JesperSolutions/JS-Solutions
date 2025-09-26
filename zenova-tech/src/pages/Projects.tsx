import { Helmet } from 'react-helmet-async';
import CaseStudies from '../components/CaseStudies';
import { ArrowRight, Users, Rocket, Lightbulb, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {

  return (
    <>
      <Helmet>
        <title>Projekter - Zenova Tech | AI, ESG & Digital Transformation</title>
        <meta 
          name="description" 
          content="Se Jesper Aggerholms portfolio af innovative projekter inden for AI-integration, ESG-compliance og digital transformation." 
        />
        <meta name="keywords" content="projekter, portfolio, AI, ESG, digital transformation, systemarkitektur, Danmark" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="hero projects-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tagline">
              <Rocket size={20} />
              <span>Innovation i praksis</span>
            </div>
            
            <h1>
              Mine{' '}
              <span className="zenova-brand">Projekter</span>
            </h1>
            
            <p className="hero-description">
              Seneste projekter inden for AI, ESG og skalérbar arkitektur. 
              Hver løsning er designet til at skabe reel værdi.
            </p>
            
            <div className="project-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Afsluttede projekter</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">År erfaring</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Kundetilfredshed</span>
              </div>
            </div>
            
            <div className="buttons">
              <Link to="/contact" className="btn-primary">
                Start et projekt
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-secondary">
                Læs om mig
                <Users size={18} />
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="projects-preview">
              <div className="preview-card">
                <div className="preview-icon">
                  <Lightbulb size={32} />
                </div>
                <h3>AI Integration</h3>
                <p>Moderne AI-løsninger</p>
              </div>
              <div className="preview-card">
                <div className="preview-icon">
                  <ShieldCheck size={32} />
                </div>
                <h3>ESG Compliance</h3>
                <p>Bæredygtige strategier</p>
              </div>
              <div className="preview-card">
                <div className="preview-icon">
                  <Zap size={32} />
                </div>
                <h3>Digital Transformation</h3>
                <p>Skalerbare løsninger</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudies />

      {/* CTA Section */}
      <section className="cta">
        <h2>Interesseret i et samarbejde?</h2>
        <p>
          Har du et projekt eller en udfordring, jeg kan hjælpe med? 
          Lad os sammen skabe en løsning der virker i praksis.
        </p>
        <Link to="/contact" className="btn-primary">
          Kom i kontakt
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
};

export default Projects;