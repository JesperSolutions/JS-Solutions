import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Zap } from 'lucide-react';

const SimpleHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Hjem', href: '/' },
    { name: 'Om mig', href: '/about' },
    { name: 'Projekter', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header>
      <nav>
        {/* Logo */}
        <Link to="/" className="logo">
          <Code style={{ width: '2rem', height: '2rem', color: '#2563eb' }} />
          <Zap style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} />
          <span>Zenova Tech</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                style={{
                  color: isActive(item.href) ? '#2563eb' : '#374151',
                  fontWeight: isActive(item.href) ? '600' : '500'
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            padding: '0.5rem',
            borderRadius: '0.375rem',
            color: '#374151',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div style={{
          padding: '1rem',
          borderTop: '1px solid #e5e7eb',
          backgroundColor: '#ffffff'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  color: isActive(item.href) ? '#2563eb' : '#374151',
                  fontWeight: isActive(item.href) ? '600' : '500',
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default SimpleHeader;
