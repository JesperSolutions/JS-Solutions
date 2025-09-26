import { useState } from 'react';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Code, 
  Cloud,
  Zap,
  Target,
  BarChart3
} from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  timeline: string;
  teamSize: number;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
  category: 'ai' | 'esg' | 'cloud' | 'digital';
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Cloud Migration & Microservices Transformation",
    company: "Binné Danmark",
    industry: "Fintech",
    challenge: "Legacy monolithic system causing performance bottlenecks, scaling issues, and high maintenance costs. System downtime affecting customer experience and business operations.",
    solution: "Designed and implemented a cloud-native microservices architecture using Kubernetes, Docker, and modern CI/CD pipelines. Migrated from on-premise to AWS with zero-downtime deployment strategy.",
    technologies: ["AWS", "Kubernetes", "Docker", "React", "Node.js", "PostgreSQL", "Redis", "Terraform"],
    timeline: "6 months",
    teamSize: 8,
    results: [
      { metric: "System Performance", value: "60%", improvement: "faster response times" },
      { metric: "Development Speed", value: "40%", improvement: "reduction in deployment time" },
      { metric: "System Uptime", value: "99.9%", improvement: "from 95.2%" },
      { metric: "Infrastructure Costs", value: "35%", improvement: "reduction in monthly costs" }
    ],
    testimonial: {
      quote: "Jesper's architectural vision transformed our entire technology stack. The migration was seamless and the performance improvements exceeded our expectations.",
      author: "Sarah Nielsen",
      role: "CTO, Binné Danmark"
    },
    image: "cloud-migration",
    category: "cloud"
  },
  {
    id: 2,
    title: "AI-Powered Agricultural Intelligence Platform",
    company: "Agritectum",
    industry: "Agriculture",
    challenge: "Manual agricultural consulting process taking 2-3 days per client, limited scalability, and inconsistent advice quality. Need for data-driven insights and automated recommendations.",
    solution: "Built an AI-driven platform that analyzes soil data, weather patterns, and crop history to provide instant agricultural recommendations. Integrated machine learning models with real-time data feeds.",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Redis", "Docker", "AWS", "OpenWeather API"],
    timeline: "4 months",
    teamSize: 5,
    results: [
      { metric: "Consultation Speed", value: "3x", improvement: "faster than manual process" },
      { metric: "Client Satisfaction", value: "85%", improvement: "increase in satisfaction scores" },
      { metric: "Operational Efficiency", value: "50%", improvement: "reduction in manual tasks" },
      { metric: "Platform Scalability", value: "200%", improvement: "increase in concurrent users" }
    ],
    testimonial: {
      quote: "The AI platform revolutionized our consulting business. We can now serve more clients with higher quality advice in a fraction of the time.",
      author: "Michael Andersen",
      role: "Founder, Agritectum"
    },
    image: "ai-agriculture",
    category: "ai"
  },
  {
    id: 3,
    title: "ESG Reporting Automation & Compliance Platform",
    company: "Nordic ESG Solutions",
    industry: "Sustainability",
    challenge: "Manual ESG reporting process taking weeks, compliance risks with new L193 regulations, and difficulty tracking sustainability metrics across multiple clients.",
    solution: "Developed an automated ESG reporting platform that integrates with client systems, tracks sustainability metrics in real-time, and generates compliance reports automatically.",
    technologies: ["React", "Node.js", "MongoDB", "Python", "AWS Lambda", "Tableau", "REST APIs", "Webhooks"],
    timeline: "5 months",
    teamSize: 6,
    results: [
      { metric: "Reporting Time", value: "80%", improvement: "reduction in report generation time" },
      { metric: "Client Coverage", value: "200+", improvement: "companies now served" },
      { metric: "Platform Uptime", value: "99.9%", improvement: "system reliability" },
      { metric: "Compliance Accuracy", value: "95%", improvement: "reduction in compliance errors" }
    ],
    testimonial: {
      quote: "Jesper's platform made ESG compliance effortless. We went from struggling with manual processes to serving 200+ companies with automated reporting.",
      author: "Thomas Larsen",
      role: "Managing Director, Nordic ESG Solutions"
    },
    image: "esg-platform",
    category: "esg"
  },
  {
    id: 4,
    title: "Digital Project Management & Workflow Automation",
    company: "Taklaget Entrepanad",
    industry: "Construction",
    challenge: "Paper-based project management causing delays, communication gaps between teams, and difficulty tracking project progress. Need for digital transformation.",
    solution: "Implemented a comprehensive digital project management system with mobile apps, real-time collaboration tools, and automated workflow processes for construction projects.",
    technologies: ["React Native", "React", "Node.js", "PostgreSQL", "Socket.io", "AWS S3", "Push Notifications", "PDF Generation"],
    timeline: "3 months",
    teamSize: 4,
    results: [
      { metric: "Project Delivery", value: "45%", improvement: "faster project completion" },
      { metric: "Administrative Tasks", value: "70%", improvement: "reduction in manual work" },
      { metric: "Communication Errors", value: "90%", improvement: "reduction in miscommunication" },
      { metric: "Client Satisfaction", value: "60%", improvement: "increase in satisfaction scores" }
    ],
    testimonial: {
      quote: "The digital transformation was game-changing. We're delivering projects faster with fewer errors and much happier clients.",
      author: "Elena Rodriguez",
      role: "Operations Manager, Taklaget Entrepanad"
    },
    image: "construction-digital",
    category: "digital"
  }
];

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const categories = [
    { id: 'all', label: 'Alle projekter', icon: BarChart3 },
    { id: 'ai', label: 'AI & Automatisering', icon: Zap },
    { id: 'esg', label: 'ESG & Bæredygtighed', icon: Target },
    { id: 'cloud', label: 'Cloud & Arkitektur', icon: Cloud },
    { id: 'digital', label: 'Digital Transformation', icon: Code }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || BarChart3;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'from-purple-500 to-pink-500',
      esg: 'from-green-500 to-emerald-500',
      cloud: 'from-blue-500 to-cyan-500',
      digital: 'from-orange-500 to-red-500',
      all: 'from-gray-500 to-slate-500'
    };
    return colors[category as keyof typeof colors] || colors.all;
  };

  return (
    <section className="case-studies-section">
      <div className="container">
        <div className="section-header">
          <h2>Målbare resultater i praksis</h2>
          <p>
            Her er hvordan jeg har hjulpet danske virksomheder med at opnå konkrete, 
            målbare forbedringer gennem teknologisk innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Case Studies Grid */}
        <div className="case-studies-grid">
          {filteredCaseStudies.map((caseStudy) => {
            const CategoryIcon = getCategoryIcon(caseStudy.category);
            const categoryColor = getCategoryColor(caseStudy.category);
            
            return (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="case-study-card"
                onClick={() => setSelectedCase(caseStudy)}
              >
                <div className="case-study-header">
                  <div className={`case-study-icon ${categoryColor}`}>
                    <CategoryIcon size={24} />
                  </div>
                  <div className="case-study-meta">
                    <span className="case-study-company">{caseStudy.company}</span>
                    <span className="case-study-industry">{caseStudy.industry}</span>
                  </div>
                </div>

                <h3 className="case-study-title">{caseStudy.title}</h3>
                
                <p className="case-study-challenge">{caseStudy.challenge}</p>

                <div className="case-study-stats">
                  <div className="stat">
                    <Clock size={16} />
                    <span>{caseStudy.timeline}</span>
                  </div>
                  <div className="stat">
                    <Users size={16} />
                    <span>{caseStudy.teamSize} personer</span>
                  </div>
                </div>

                <div className="case-study-results">
                  <h4>Nøgleresultater:</h4>
                  <div className="results-grid">
                    {caseStudy.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="result-item">
                        <span className="result-value">{result.value}</span>
                        <span className="result-metric">{result.metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="case-study-technologies">
                  {caseStudy.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {caseStudy.technologies.length > 4 && (
                    <span className="tech-tag">+{caseStudy.technologies.length - 4}</span>
                  )}
                </div>

                <button className="case-study-cta">
                  Læs hele casen
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Case Study Modal */}
        {selectedCase && (
          <div className="case-study-modal" onClick={() => setSelectedCase(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{selectedCase.title}</h2>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedCase(null)}
                >
                  ×
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-meta">
                  <div className="meta-item">
                    <strong>Virksomhed:</strong> {selectedCase.company}
                  </div>
                  <div className="meta-item">
                    <strong>Branche:</strong> {selectedCase.industry}
                  </div>
                  <div className="meta-item">
                    <strong>Varighed:</strong> {selectedCase.timeline}
                  </div>
                  <div className="meta-item">
                    <strong>Team:</strong> {selectedCase.teamSize} personer
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Udfordringen</h3>
                  <p>{selectedCase.challenge}</p>
                </div>

                <div className="modal-section">
                  <h3>Løsningen</h3>
                  <p>{selectedCase.solution}</p>
                </div>

                <div className="modal-section">
                  <h3>Teknologier</h3>
                  <div className="technologies-list">
                    {selectedCase.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Målbare resultater</h3>
                  <div className="results-detailed">
                    {selectedCase.results.map((result, index) => (
                      <div key={index} className="result-detailed">
                        <div className="result-number">{result.value}</div>
                        <div className="result-info">
                          <div className="result-metric">{result.metric}</div>
                          <div className="result-improvement">{result.improvement}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Klientudtalelse</h3>
                  <blockquote className="testimonial-quote">
                    "{selectedCase.testimonial.quote}"
                  </blockquote>
                  <div className="testimonial-author">
                    <strong>{selectedCase.testimonial.author}</strong>
                    <span>{selectedCase.testimonial.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
