import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, ArrowRight, Code, Users, Rocket, Lightbulb, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Integration Platform",
      description: "Komplet AI-integration platform der hjælper virksomheder med at implementere ChatGPT og andre AI-værktøjer i deres daglige arbejde.",
      category: "AI & Automation",
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "TypeScript"],
      features: [
        "Automatisering af rutineopgaver",
        "Custom AI-modeller",
        "Real-time analytics",
        "Skalerbar arkitektur"
      ],
      status: "Completed",
      year: "2024",
      icon: Lightbulb,
      color: "primary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "ESG Compliance System",
      description: "Bæredygtighedsplatform der hjælper virksomheder med L193-compliance, ESG-rapportering og implementering af grønne strategier.",
      category: "ESG & Sustainability",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
      features: [
        "L193-compliance tracking",
        "Automated reporting",
        "Carbon footprint calculator",
        "Stakeholder engagement tools"
      ],
      status: "In Progress",
      year: "2024",
      icon: ShieldCheck,
      color: "secondary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Digital Transformation Hub",
      description: "Komplet digitaliseringsplatform der guider virksomheder gennem deres digitale transformation med skalerbare løsninger.",
      category: "Digital Transformation",
      technologies: ["React", "Express.js", "Docker", "AWS", "GraphQL"],
      features: [
        "Process automation",
        "Legacy system integration",
        "Cloud migration tools",
        "Performance monitoring"
      ],
      status: "Planning",
      year: "2025",
      icon: Rocket,
      color: "primary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Team Collaboration Suite",
      description: "Avanceret projektledelsesplatform med AI-drevet automatisering, team-udvikling og agile metoder.",
      category: "Project Management",
      technologies: ["Vue.js", "NestJS", "Redis", "WebSocket", "Jest"],
      features: [
        "AI-powered task management",
        "Real-time collaboration",
        "Performance analytics",
        "Agile workflow automation"
      ],
      status: "Completed",
      year: "2023",
      icon: Users,
      color: "secondary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Tech Architecture Framework",
      description: "Skalerbar systemarkitektur der balancerer enkelhed med performance og tilpasser sig fremtidens behov.",
      category: "System Architecture",
      technologies: ["Microservices", "Kubernetes", "gRPC", "Prometheus", "Grafana"],
      features: [
        "Microservices architecture",
        "Auto-scaling capabilities",
        "Performance monitoring",
        "Fault tolerance"
      ],
      status: "Completed",
      year: "2023",
      icon: Code,
      color: "primary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Innovation Lab Platform",
      description: "Platform der accelererer innovation gennem AI-værktøjer, automatisering og strategisk teknologi-implementering.",
      category: "Innovation & Strategy",
      technologies: ["React", "Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      features: [
        "Innovation tracking",
        "AI-driven insights",
        "Market analysis tools",
        "ROI calculation"
      ],
      status: "In Progress",
      year: "2024",
      icon: Zap,
      color: "secondary",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-progress';
      case 'Planning':
        return 'status-planning';
      default:
        return 'status-default';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'Færdig';
      case 'In Progress':
        return 'I gang';
      case 'Planning':
        return 'Planlægning';
      default:
        return status;
    }
  };

  return (
    <>
      <Helmet>
        <title>Projekter - Zenova Tech | AI, ESG & Digital Transformation</title>
        <meta 
          name="description" 
          content="Se Jesper Aggerholms portfolio af innovative projekter inden for AI-integration, ESG-compliance og digital transformation." 
        />
        <meta name="keywords" content="projekter, portfolio, AI, ESG, digital transformation, systemarkitektur, Danmark" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="hero projects-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tagline">
              <Rocket size={20} />
              <span>Innovation i praksis</span>
            </div>
            
            <h1>
              Mine{' '}
              <span className="zenova-brand">Projekter</span>
            </h1>
            
            <p className="hero-description">
              Udforsk mine seneste projekter inden for AI-integration, ESG-compliance og digital transformation. 
              Hver løsning er designet til at skabe reel værdi og drive innovation fremad.
            </p>
            
            <div className="project-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Afsluttede projekter</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">År erfaring</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Kundetilfredshed</span>
              </div>
            </div>
            
            <div className="buttons">
              <Link to="/contact" className="btn-primary">
                Start et projekt
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-secondary">
                Læs om mig
                <Users size={18} />
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="projects-preview">
              <div className="preview-card">
                <div className="preview-icon">
                  <Lightbulb size={32} />
                </div>
                <h3>AI Integration</h3>
                <p>Moderne AI-løsninger</p>
              </div>
              <div className="preview-card">
                <div className="preview-icon">
                  <ShieldCheck size={32} />
                </div>
                <h3>ESG Compliance</h3>
                <p>Bæredygtige strategier</p>
              </div>
              <div className="preview-card">
                <div className="preview-icon">
                  <Zap size={32} />
                </div>
                <h3>Digital Transformation</h3>
                <p>Skalerbare løsninger</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Mine projekter</h2>
            <p>
              Fra AI-integration til ESG-compliance - hver løsning er designet til at 
              adressere konkrete udfordringer og skabe målbare resultater.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              
              return (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <div className={`project-icon ${project.color}`}>
                      <Icon size={28} />
                    </div>
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <span className={`project-status ${getStatusColor(project.status)}`}>
                        {getStatusText(project.status)}
                      </span>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-features">
                      {project.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <span className="feature-bullet">✨</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-footer">
                    <div className="project-year">{project.year}</div>
                    <div className="project-links">
                      <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                      <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Kode
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Interesseret i et samarbejde?</h2>
        <p>
          Har du et projekt eller en udfordring, jeg kan hjælpe med? 
          Lad os sammen skabe en løsning der virker i praksis.
        </p>
        <Link to="/contact" className="btn-primary">
          Kom i kontakt
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
};

export default Projects;