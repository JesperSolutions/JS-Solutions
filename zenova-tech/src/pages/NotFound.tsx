import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Side ikke fundet | Zenova Tech</title>
        <meta 
          name="description" 
          content="Siden du leder efter kunne ikke findes. Gå tilbage til forsiden eller udforsk vores andre sider." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="not-found-page">
        <div className="container">
          <div className="not-found-content">
            <div className="error-code">
              <h1>404</h1>
              <div className="error-decoration">
                <div className="error-line"></div>
                <div className="error-dot"></div>
                <div className="error-line"></div>
              </div>
            </div>
            
            <div className="error-message">
              <h2>Oops! Denne side eksisterer ikke</h2>
              <p>
                Siden du leder efter kunne ikke findes. Det kan være, at den er blevet flyttet, 
                slettet, eller at du har indtastet en forkert URL.
              </p>
            </div>

            <div className="error-suggestions">
              <h3>Hvad kan du gøre?</h3>
              <div className="suggestions-grid">
                <div className="suggestion-item">
                  <Home size={24} />
                  <h4>Gå til forsiden</h4>
                  <p>Start forfra på vores hjemmeside</p>
                  <Link to="/" className="btn-primary">
                    Gå til forsiden
                  </Link>
                </div>
                
                <div className="suggestion-item">
                  <ArrowLeft size={24} />
                  <h4>Gå tilbage</h4>
                  <p>Returner til den forrige side</p>
                  <button onClick={() => window.history.back()} className="btn-secondary">
                    Gå tilbage
                  </button>
                </div>
                
                <div className="suggestion-item">
                  <Search size={24} />
                  <h4>Udforsk vores indhold</h4>
                  <p>Se vores projekter og artikler</p>
                  <Link to="/blog" className="btn-secondary">
                    Se blog
                  </Link>
                </div>
              </div>
            </div>

            <div className="error-links">
              <h3>Populære sider</h3>
              <div className="quick-links">
                <Link to="/about">Om mig</Link>
                <Link to="/projects">Projekter</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Kontakt</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
