import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { 
  AnimatedDiv, 
  AnimatedButton, 
  fadeInLeft
} from './Animations';
import HeroBackground from './HeroBackground';

const Hero = () => {
  return (
        <section className="hero">
          {/* Canvas particle field background */}
          <div className="hero-bg">
            <HeroBackground />
          </div>
          
          <div className="container">
            <div className="hero-content">
              <AnimatedDiv variants={fadeInLeft} delay={0.1}>
                <div className="hero-tagline">
                  <Sparkles size={20} />
                  <span>Fra Zen til Nova</span>
                </div>
              </AnimatedDiv>
              
              <AnimatedDiv variants={fadeInLeft} delay={0.2}>
                <h1>
                  Velkommen til{' '}
                  <span className="zenova-brand">ZENOVA</span>
                  <br />
                  <span className="tech-subtitle">TECH</span>
                </h1>
              </AnimatedDiv>
              
              <AnimatedDiv variants={fadeInLeft} delay={0.3}>
                <p>
                  Hvor mindfulness møder innovation. Vi finder roden til komplekse problemer — 
                  og former dem til skalerbare løsninger.
                </p>
              </AnimatedDiv>
              
              <AnimatedDiv variants={fadeInLeft} delay={0.4}>
                <div className="buttons">
                  <AnimatedButton className="btn-primary">
                    <Link to="/projects" className="flex items-center gap-2">
                      Udforsk løsninger
                      <ArrowRight size={18} />
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton className="btn-secondary">
                    <Link to="/contact" className="flex items-center gap-2">
                      Kom i kontakt
                    </Link>
                  </AnimatedButton>
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </section>
  );
};

export default Hero;
