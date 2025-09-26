import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';

const SimpleHero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1>
            Fra idé til{' '}
            <span className="highlight">skalerbar løsning</span>
          </h1>
          <p>
            Jeg elsker at gøre komplekse problemer enkle – og skabe løsninger, der virker i praksis. 
            Som tech lead og løsningsarkitekt hjælper jeg virksomheder med IT, ESG og innovation.
          </p>
          <div className="buttons">
            <Link to="/projects" className="btn-primary">
              Se mine projekter
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Kom i kontakt
            </Link>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="service-icon primary">
                  <Code size={24} />
                </div>
                <div>
                  <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>
                    Teknisk Arkitektur
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    Skalerbare systemer og moderne teknologi
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="service-icon secondary">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>
                    AI Integration
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    Implementering af AI-løsninger i praksis
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="service-icon primary">
                  <Users size={24} />
                </div>
                <div>
                  <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>
                    Team Leadership
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    Agile projektledelse og teamudvikling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
