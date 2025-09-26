import { Helmet } from 'react-helmet-async';
import { Code, Users, Target, MapPin, Calendar, ArrowRight, Lightbulb, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Om mig - Jesper Aggerholm | Tech Lead & Løsningsarkitekt</title>
        <meta 
          name="description" 
          content="Læs om Jesper Aggerholms vision for fremtiden og hvordan han hjælper virksomheder med IT, ESG og innovation." 
        />
        <meta name="keywords" content="Jesper Aggerholm, tech lead, løsningsarkitekt, IT-teknolog, Danmark" />
      </Helmet>

      {/* Hero Section - Cosmic Theme */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tagline">
              <Sparkles size={20} />
              <span>Tech Lead & Løsningsarkitekt</span>
            </div>
            
            <h1>
              Hej, jeg er{' '}
              <span className="zenova-brand">Jesper</span>
            </h1>
            
            <p>
              Med passion for at omsætte komplekse udfordringer til konkrete, skalerbare løsninger. 
              Jeg trives, når tingene er svære – for netop dér kan vi flytte grænser og skabe resultater 
              der transformerer din virksomhed.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <MapPin size={20} />
                <span>Ringe, Region Syddanmark</span>
              </div>
              <div className="detail-item">
                <Calendar size={20} />
                <span>IT-teknolog siden 2020</span>
              </div>
              <div className="detail-item">
                <Target size={20} />
                <span>Løsningsarkitekt hos Binné Danmark</span>
              </div>
            </div>
            
            <div className="buttons">
              <Link to="/contact" className="btn-primary">
                Kom i kontakt
                <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn-secondary">
                Se projekter
                <Rocket size={18} />
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-container">
              <div className="profile-card">
                <div className="profile-avatar">
                  <div className="avatar-circle">
                    <span>JA</span>
                  </div>
                  <div className="avatar-glow"></div>
                </div>
                <p className="profile-text">Profilbillede kommer snart</p>
                <div className="profile-stats">
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">År erfaring</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">20+</span>
                    <span className="stat-label">Projekter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="services">
        <div className="section-header">
          <h2>Min vision for fremtiden</h2>
          <p>
            Jeg ser en fremtid hvor teknologi og bæredygtighed går hånd i hånd, 
            og hvor AI hjælper os med at løse de største udfordringer.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon primary">
              <Lightbulb size={28} />
            </div>
            <h3>Innovation & AI</h3>
            <p>
              Jeg arbejder med at integrere AI-værktøjer som ChatGPT i virksomheders 
              daglige arbejde for at øge effektiviteten og frigøre tid til kreativt arbejde.
            </p>
            <ul className="service-features">
              <li>AI-implementering i praksis</li>
              <li>Automatisering af rutineopgaver</li>
              <li>Fremtidssikret teknologi</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon secondary">
              <Target size={28} />
            </div>
            <h3>ESG & Bæredygtighed</h3>
            <p>
              Med den nye L193-lov bliver ESG ikke længere valgfrit. Jeg hjælper 
              virksomheder med at implementere bæredygtige strategier der skaber værdi.
            </p>
            <ul className="service-features">
              <li>ESG-compliance og rapportering</li>
              <li>Bæredygtig digitalisering</li>
              <li>Grøn teknologi-implementering</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon primary">
              <Rocket size={28} />
            </div>
            <h3>Skalerbar Arkitektur</h3>
            <p>
              Jeg bygger systemer der kan vokse med din virksomhed og tilpasse sig 
              fremtidens behov uden at skulle bygges om fra bunden.
            </p>
            <ul className="service-features">
              <li>Cloud-native løsninger</li>
              <li>Mikroservicearkitektur</li>
              <li>Performance optimering</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <h2>Min tilgang til teknologi og innovation</h2>
            <blockquote className="philosophy-quote">
              "Jeg elsker at gøre komplekse problemer enkle – og skabe løsninger, der virker i praksis."
            </blockquote>
            <p>
              Som teamleder brænder jeg for at omsætte udfordringer til konkrete resultater. 
              Jeg tror på, at de bedste løsninger opstår i samarbejde, hvor vi finder roden til problemet 
              og bygger innovative løsninger, der skaber reel værdi.
            </p>
            <p>
              Jeg trives, når tingene er svære – for netop dér kan vi flytte grænser, 
              skabe resultater og overgå forventningerne.
            </p>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="next-steps-section">
        <div className="container">
          <div className="section-header">
            <h2>Hvad er næste skridt?</h2>
            <p>
              Jeg fokuserer på at hjælpe danske virksomheder med at navigere i den digitale transformation 
              og implementere teknologi der skaber reel værdi.
            </p>
          </div>

          <div className="next-steps-grid">
            <div className="next-step-card">
              <div className="step-icon primary">
                <Code size={24} />
              </div>
              <h3>Teknologi-implementering</h3>
              <p>
                Hjælper med at implementere moderne teknologier der passer til din virksomheds behov.
              </p>
              <ul className="step-features">
                <li>AI og automatisering</li>
                <li>Cloud-migration</li>
                <li>Systemintegration</li>
              </ul>
            </div>

            <div className="next-step-card">
              <div className="step-icon secondary">
                <Target size={24} />
              </div>
              <h3>ESG-implementering</h3>
              <p>
                Gør din virksomhed klar til de nye bæredygtighedskrav og skab konkurrencefordele.
              </p>
              <ul className="step-features">
                <li>L193-compliance</li>
                <li>Bæredygtig strategi</li>
                <li>Rapportering og dokumentation</li>
              </ul>
            </div>

            <div className="next-step-card">
              <div className="step-icon primary">
                <Users size={24} />
              </div>
              <h3>Team-udvikling</h3>
              <p>
                Bygger stærke teams der kan levere resultater og tilpasse sig fremtidens udfordringer.
              </p>
              <ul className="step-features">
                <li>Agile metoder</li>
                <li>Projektledelse</li>
                <li>Kompetenceudvikling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Klar til at tage næste skridt?</h2>
        <p>
          Lad os sammen finde ud af, hvordan jeg kan hjælpe din virksomhed 
          med at nå sine digitale mål og implementere fremtidssikret teknologi.
        </p>
        <Link to="/contact" className="btn-primary">
          Kom i kontakt
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
};

export default About;