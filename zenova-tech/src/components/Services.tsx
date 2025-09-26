import { Zap, Users, Target, ShieldCheck, Lightbulb, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Innovation & AI",
      description: "Vi implementerer AI-værktøjer og innovative løsninger der skaber reel værdi for din virksomhed gennem strategisk teknologi-integration.",
      features: ["AI-implementering", "Innovationsstrategi", "Teknologi-integration"],
      color: "primary"
    },
    {
      icon: ShieldCheck,
      title: "ESG & Bæredygtighed",
      description: "Hjælper din virksomhed med ESG-compliance og implementering af bæredygtige strategier der skaber konkurrencefordele.",
      features: ["ESG-implementering", "Bæredygtig strategi", "Compliance & rapportering"],
      color: "secondary"
    },
    {
      icon: Zap,
      title: "AI-integration",
      description: "Integrer AI som en naturlig del af din virksomheds DNA gennem praktisk implementering og automatisering.",
      features: ["AI-automatisering", "Systemintegration", "Fremtidssikret teknologi"],
      color: "primary"
    },
    {
      icon: Users,
      title: "Projektledelse",
      description: "Bygger stærke teams og leder komplekse IT-projekter til succesfuld levering gennem agile metoder.",
      features: ["Agile projektledelse", "Team-udvikling", "Projektleverance"],
      color: "secondary"
    },
    {
      icon: Target,
      title: "Teknisk Arkitektur",
      description: "Designer skalerbare systemarkitekturer der balancerer enkelhed med performance for fremtidens behov.",
      features: ["Systemarkitektur", "Skalerbarhed", "Performance optimering"],
      color: "primary"
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "Accelererer din virksomheds digitale transformation gennem strategisk teknologi-implementering.",
      features: ["Digitalisering", "Strategisk implementering", "Vækstacceleration"],
      color: "secondary"
    },
  ];

  return (
    <section className="services">
      <h2>Mine Tjenester</h2>
      <p>
        Med erfaring fra blockchain, ESG-implementering og AI-integration, 
        hjælper jeg virksomheder med at navigere i den digitale transformation.
      </p>
      
      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;
          
          return (
            <div key={service.title} className="service-card">
              <div className={`service-icon ${service.color}`}>
                <Icon size={28} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
