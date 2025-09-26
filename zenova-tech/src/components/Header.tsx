import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { name: 'Hjem', path: '/' },
  { name: 'Om mig', path: '/about' },
  { name: 'Projekter', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Kontakt', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <div className="logo-icon">Z</div>
          <span>ZENOVA</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </ul>

        <div className="header-actions">
          <ThemeToggle />
          <div className="mobile-menu-btn">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="mobile-nav-link" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;