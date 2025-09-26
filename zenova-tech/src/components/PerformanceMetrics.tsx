import { useState } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Users,
  Award,
  Target,
  BarChart3,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'ai' | 'database' | 'devops';
  proficiency: number;
  yearsExperience: number;
  projects: number;
  icon: any;
}

interface Metric {
  title: string;
  value: string;
  description: string;
  improvement: string;
  icon: any;
  color: string;
}

const technologies: Technology[] = [
  {
    name: 'React',
    category: 'frontend',
    proficiency: 95,
    yearsExperience: 4,
    projects: 15,
    icon: Code
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 90,
    yearsExperience: 3,
    projects: 12,
    icon: Code
  },
  {
    name: 'Node.js',
    category: 'backend',
    proficiency: 88,
    yearsExperience: 4,
    projects: 10,
    icon: Code
  },
  {
    name: 'AWS',
    category: 'cloud',
    proficiency: 85,
    yearsExperience: 3,
    projects: 8,
    icon: Cloud
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    proficiency: 90,
    yearsExperience: 4,
    projects: 12,
    icon: Database
  },
  {
    name: 'Docker',
    category: 'devops',
    proficiency: 85,
    yearsExperience: 3,
    projects: 10,
    icon: Shield
  },
  {
    name: 'Python',
    category: 'ai',
    proficiency: 80,
    yearsExperience: 2,
    projects: 6,
    icon: Zap
  },
  {
    name: 'Kubernetes',
    category: 'devops',
    proficiency: 75,
    yearsExperience: 2,
    projects: 5,
    icon: Cloud
  }
];

const metrics: Metric[] = [
  {
    title: 'System Performance',
    value: '60%',
    description: 'Gennemsnitlig forbedring',
    improvement: 'hurtigere response times',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Development Speed',
    value: '40%',
    description: 'Reduktion i udviklingstid',
    improvement: 'hurtigere deployment',
    icon: Clock,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Team Productivity',
    value: '50%',
    description: 'Øget effektivitet',
    improvement: 'mere fokus på værdi',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'System Reliability',
    value: '99.9%',
    description: 'Uptime garanti',
    improvement: 'fra 95.2%',
    icon: Shield,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Client Satisfaction',
    value: '100%',
    description: 'Kundetilfredshed',
    improvement: 'alle projekter',
    icon: Award,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Cost Reduction',
    value: '35%',
    description: 'Infrastruktur besparelser',
    improvement: 'månedlige omkostninger',
    icon: Target,
    color: 'from-indigo-500 to-purple-500'
  }
];

const PerformanceMetrics = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Alle teknologier', icon: BarChart3 },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
    { id: 'ai', label: 'AI & Machine Learning', icon: Zap }
  ];

  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      frontend: 'from-blue-500 to-cyan-500',
      backend: 'from-green-500 to-emerald-500',
      cloud: 'from-purple-500 to-pink-500',
      ai: 'from-orange-500 to-red-500',
      database: 'from-indigo-500 to-purple-500',
      devops: 'from-gray-500 to-slate-500',
      all: 'from-blue-500 to-purple-500'
    };
    return colors[category as keyof typeof colors] || colors.all;
  };

  return (
    <section className="performance-metrics-section">
      <div className="container">
        <div className="section-header">
          <h2>Teknologi & Målbare Resultater</h2>
          <p>
            Her er de teknologier jeg arbejder med og de konkrete forbedringer 
            jeg har leveret for mine klienter.
          </p>
        </div>

        {/* Technology Stack */}
        <div className="technology-section">
          <h3>Min teknologistack</h3>
          <p className="section-subtitle">
            Jeg arbejder med moderne teknologier der skaber skalerbare, 
            vedligeholdelige løsninger.
          </p>

          {/* Category Filter */}
          <div className="tech-category-filter">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`tech-category-button ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  <Icon size={20} />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* Technology Grid */}
          <div className="technologies-grid">
            {filteredTechnologies.map((tech) => {
              const Icon = tech.icon;
              const categoryColor = getCategoryColor(tech.category);
              
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="technology-card"
                >
                  <div className="tech-header">
                    <div className={`tech-icon ${categoryColor}`}>
                      <Icon size={24} />
                    </div>
                    <div className="tech-info">
                      <h4>{tech.name}</h4>
                      <span className="tech-category">{tech.category}</span>
                    </div>
                  </div>

                  <div className="tech-proficiency">
                    <div className="proficiency-header">
                      <span>Ekspertise</span>
                      <span>{tech.proficiency}%</span>
                    </div>
                    <div className="proficiency-bar">
                      <motion.div
                        className="proficiency-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  <div className="tech-stats">
                    <div className="tech-stat">
                      <span className="stat-value">{tech.yearsExperience}</span>
                      <span className="stat-label">år erfaring</span>
                    </div>
                    <div className="tech-stat">
                      <span className="stat-value">{tech.projects}</span>
                      <span className="stat-label">projekter</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="metrics-section">
          <h3>Målbare forbedringer</h3>
          <p className="section-subtitle">
            Konkrete resultater jeg har leveret for mine klienter gennem 
            teknologisk innovation og strategisk implementering.
          </p>

          <div className="metrics-grid">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              
              return (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="metric-card"
                >
                  <div className={`metric-icon ${metric.color}`}>
                    <Icon size={32} />
                  </div>
                  
                  <div className="metric-content">
                    <h4>{metric.title}</h4>
                    <div className="metric-value">
                      {metric.value.includes('%') ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {metric.value}
                        </motion.span>
                      ) : (
                        <span>{metric.value}</span>
                      )}
                    </div>
                    <p className="metric-description">{metric.description}</p>
                    <p className="metric-improvement">{metric.improvement}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="achievements-section">
          <h3>Nøglepræstationer</h3>
          <div className="achievements-grid">
            <div className="achievement-item">
              <CheckCircle size={24} className="achievement-icon" />
              <div className="achievement-content">
                <h4>25+ Succesfulde Projekter</h4>
                <p>Fra startup til enterprise - alle projekter leveret til tiden og budget</p>
              </div>
            </div>
            <div className="achievement-item">
              <CheckCircle size={24} className="achievement-icon" />
              <div className="achievement-content">
                <h4>100% Kundetilfredshed</h4>
                <p>Alle klienter anbefaler mine tjenester og vender tilbage for flere projekter</p>
              </div>
            </div>
            <div className="achievement-item">
              <CheckCircle size={24} className="achievement-icon" />
              <div className="achievement-content">
                <h4>Zero Downtime Migrationer</h4>
                <p>Cloud migrationer udført uden afbrydelse af forretningsdrift</p>
              </div>
            </div>
            <div className="achievement-item">
              <CheckCircle size={24} className="achievement-icon" />
              <div className="achievement-content">
                <h4>Agile Team Transformation</h4>
                <p>Hjulpet 5+ teams med at implementere agile metoder og øge produktivitet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
