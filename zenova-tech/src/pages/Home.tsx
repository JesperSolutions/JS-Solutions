import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <>
          <Helmet>
            <title>ZENOVA Tech - Fra Zen til Nova | Hvor mindfulness møder innovation</title>
            <meta 
              name="description" 
              content="ZENOVA Tech - Hvor mindfulness møder innovation. Vi finder roden til komplekse problemer gennem zen-lignende fokus og eksploderer dem til brilliante løsninger." 
            />
            <meta name="keywords" content="ZENOVA, zen innovation, nova solutions, mindful technology, breakthrough solutions, Danmark" />
            <meta property="og:title" content="ZENOVA Tech - Fra Zen til Nova" />
            <meta property="og:description" content="Hvor mindfulness møder innovation - fra zen-lignende fokus til nova-lignende løsninger" />
            <meta property="og:type" content="website" />
          </Helmet>

          {/* Hero Section */}
          <Hero />

          {/* Services Section */}
          <Services />

          {/* Testimonials Section */}
          <Testimonials />

          {/* CTA Section */}
          <section className="cta">
            <h2>Klar til at tage næste skridt?</h2>
            <p>
              Lad os sammen finde ud af, hvordan jeg kan hjælpe din virksomhed 
              med at nå sine digitale mål og implementere fremtidssikret teknologi.
            </p>
            <Link to="/contact" className="btn-primary">
              Kom i kontakt
              <Sparkles size={18} />
            </Link>
          </section>
    </>
  );
};

export default Home;
