import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-icon">Z</div>
              <span>ZENOVA</span>
            </Link>
            <p className="footer-description">
              Fra idé til skalerbar løsning – IT, ESG og innovation i praksis. 
              Jeg hjælper virksomheder med at digitalisere og implementere bæredygtige teknologier.
            </p>
            <div className="footer-social">
              <a
                href="https://linkedin.com/in/jesper-aggerholm"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:jesper@zenova-tech.dk"
                className="social-link"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Hurtige Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">Om mig</Link>
              </li>
              <li>
                <Link to="/projects">Projekter</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Kontakt</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Tjenester</h4>
            <ul className="footer-services">
              <li>IT-rådgivning</li>
              <li>ESG-implementering</li>
              <li>AI-integration</li>
              <li>Projektledelse</li>
              <li>Teknisk arkitektur</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Zenova Tech. Alle rettigheder forbeholdes.</p>
          <p>Udviklet med ❤️ i Danmark</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
