import { Code, Zap, Target, CheckCircle } from 'lucide-react';

const SimpleServices = () => {
  const services = [
    {
      icon: Code,
      title: "IT-rådgivning",
      description: "Strategisk rådgivning om digitalisering, systemarkitektur og teknologivalg der passer til din virksomheds behov.",
      features: [
        "Systemarkitektur og design",
        "Teknologivalg og roadmap",
        "Performance optimering"
      ],
      color: "primary"
    },
    {
      icon: Target,
      title: "ESG-implementering",
      description: "Hjælp med at implementere bæredygtighedsstrategier og overholde nye reguleringer som L193-loven.",
      features: [
        "ESG-rapportering og compliance",
        "Bæredygtighedsstrategier",
        "Stakeholder management"
      ],
      color: "secondary"
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Implementering af AI-løsninger der skaber reel værdi og effektiviserer dine forretningsprocesser.",
      features: [
        "ChatGPT og AI-værktøjer",
        "Automatisering af processer",
        "Dataanalyse og insights"
      ],
      color: "primary"
    }
  ];

  return (
    <section className="services">
      <h2>Hvad kan jeg hjælpe dig med?</h2>
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
                <Icon size={24} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle className="check-icon" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SimpleServices;
