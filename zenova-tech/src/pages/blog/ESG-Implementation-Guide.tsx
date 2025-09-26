import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowRight, Tag, User, Shield, Leaf, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ESGImplementationGuide = () => {
  const esgPhases = [
    {
      phase: "Phase 1: Assessment & Strategy",
      duration: "4-6 weeks",
      description: "Understand your current ESG position and develop a comprehensive strategy.",
      keyActivities: [
        "ESG maturity assessment",
        "Stakeholder mapping and materiality analysis",
        "Regulatory compliance audit (L193, CSRD)",
        "Baseline data collection and gap analysis"
      ],
      deliverables: [
        "ESG strategy document",
        "Materiality matrix",
        "Compliance roadmap",
        "Baseline ESG report"
      ]
    },
    {
      phase: "Phase 2: Implementation & Integration",
      duration: "8-12 weeks", 
      description: "Implement ESG processes and integrate them into your business operations.",
      keyActivities: [
        "ESG governance structure setup",
        "Data collection and management systems",
        "Process integration and training",
        "Pilot program implementation"
      ],
      deliverables: [
        "ESG governance framework",
        "Data management system",
        "Training materials and programs",
        "Pilot program results"
      ]
    },
    {
      phase: "Phase 3: Optimization & Reporting",
      duration: "6-8 weeks",
      description: "Optimize processes and establish ongoing reporting and improvement cycles.",
      keyActivities: [
        "Performance optimization",
        "Automated reporting setup",
        "Continuous improvement processes",
        "Stakeholder communication"
      ],
      deliverables: [
        "Automated ESG dashboard",
        "Annual ESG report",
        "Improvement action plan",
        "Stakeholder communication strategy"
      ]
    }
  ];

  const complianceRequirements = [
    {
      regulation: "L193 (Danish ESG Law)",
      description: "Mandatory ESG reporting for large companies",
      requirements: [
        "Annual ESG reporting",
        "Climate risk assessment",
        "Human rights due diligence",
        "Supply chain transparency"
      ],
      deadline: "2025 (first reports due 2026)"
    },
    {
      regulation: "CSRD (EU Corporate Sustainability Reporting)",
      description: "Comprehensive sustainability reporting directive",
      requirements: [
        "Double materiality assessment",
        "Forward-looking information",
        "Value chain reporting",
        "Third-party assurance"
      ],
      deadline: "2024-2026 (phased implementation)"
    },
    {
      regulation: "SFDR (Sustainable Finance Disclosure)",
      description: "Transparency requirements for financial products",
      requirements: [
        "Sustainability risk assessment",
        "Principal adverse impacts reporting",
        "Product-level disclosures",
        "Website transparency"
      ],
      deadline: "Ongoing compliance required"
    }
  ];

  return (
    <>
      <Helmet>
        <title>ESG Implementation Guide: From Compliance to Competitive Advantage | Zenova Tech</title>
        <meta 
          name="description" 
          content="Complete guide to ESG implementation: L193 compliance, CSRD requirements, and building sustainable business practices that create competitive advantage." 
        />
        <meta name="keywords" content="ESG implementation, L193 compliance, CSRD, sustainability reporting, Danish ESG law" />
        <meta name="author" content="Jesper Aggerholm" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "ESG Implementation Guide: From Compliance to Competitive Advantage",
            "description": "Complete guide to ESG implementation: L193 compliance, CSRD requirements, and building sustainable business practices that create competitive advantage.",
            "author": {
              "@type": "Person",
              "name": "Jesper Aggerholm"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Zenova Tech"
            },
            "datePublished": "2024-01-25"
          })}
        </script>
      </Helmet>

      <article className="blog-post">
        <header className="article-header">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/blog">Blog</Link>
              <span>/</span>
              <span>ESG & Sustainability</span>
            </nav>
            
            <div className="article-meta">
              <div className="meta-item">
                <User size={16} />
                <span>Jesper Aggerholm</span>
              </div>
              <div className="meta-item">
                <Calendar size={16} />
                <span>25. januar 2024</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>18 min læsning</span>
              </div>
            </div>

            <h1>ESG Implementation Guide: From Compliance to Competitive Advantage</h1>
            
            <p className="article-excerpt">
              ESG is no longer optional—it's a business imperative. With L193 and CSRD requirements 
              coming into effect, Danish companies need a strategic approach to ESG implementation 
              that goes beyond compliance to create real competitive advantage.
            </p>

            <div className="article-tags">
              <span className="tag">
                <Tag size={12} />
                ESG Implementation
              </span>
              <span className="tag">
                <Tag size={12} />
                L193 Compliance
              </span>
              <span className="tag">
                <Tag size={12} />
                CSRD
              </span>
              <span className="tag">
                <Tag size={12} />
                Sustainability
              </span>
            </div>
          </div>
        </header>

        <div className="article-content">
          <div className="container">
            <div className="content-wrapper">
              
              <section className="content-section">
                <h2>Why ESG Matters Now</h2>
                <p>
                  The regulatory landscape is changing rapidly. L193 makes ESG reporting mandatory for 
                  large Danish companies, while CSRD extends requirements across the EU. But beyond 
                  compliance, ESG is becoming a key differentiator in:
                </p>
                <ul>
                  <li><strong>Investor Relations:</strong> ESG performance affects access to capital and investment terms</li>
                  <li><strong>Customer Preferences:</strong> 73% of consumers prefer sustainable brands</li>
                  <li><strong>Talent Acquisition:</strong> ESG commitment attracts top talent</li>
                  <li><strong>Risk Management:</strong> Proactive ESG management reduces regulatory and reputational risks</li>
                </ul>
              </section>

              <section className="content-section">
                <h2>ESG Implementation Phases</h2>
                <p>
                  Successful ESG implementation follows a structured approach. Here's the proven 
                  methodology I've used with Danish companies:
                </p>
                <div className="phases-list">
                  {esgPhases.map((phase, index) => (
                    <div key={index} className="phase-item">
                      <div className="phase-header">
                        <span className="phase-number">{index + 1}</span>
                        <div>
                          <h3>{phase.phase}</h3>
                          <span className="phase-duration">{phase.duration}</span>
                        </div>
                      </div>
                      <p className="phase-description">{phase.description}</p>
                      
                      <div className="phase-activities">
                        <h4>Key Activities:</h4>
                        <ul>
                          {phase.keyActivities.map((activity, i) => (
                            <li key={i}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="phase-deliverables">
                        <h4>Deliverables:</h4>
                        <ul>
                          {phase.deliverables.map((deliverable, i) => (
                            <li key={i}>{deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="content-section">
                <h2>Regulatory Compliance Requirements</h2>
                <p>
                  Understanding the regulatory landscape is crucial for effective ESG implementation:
                </p>
                <div className="compliance-grid">
                  {complianceRequirements.map((regulation, index) => (
                    <div key={index} className="compliance-card">
                      <div className="compliance-header">
                        <Shield size={24} />
                        <h3>{regulation.regulation}</h3>
                      </div>
                      <p className="compliance-description">{regulation.description}</p>
                      <div className="compliance-requirements">
                        <h4>Key Requirements:</h4>
                        <ul>
                          {regulation.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="compliance-deadline">
                        <strong>Deadline:</strong> {regulation.deadline}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="content-section">
                <h2>Building Competitive Advantage Through ESG</h2>
                <p>
                  ESG isn't just about compliance—it's about building a sustainable competitive advantage:
                </p>
                <div className="advantage-points">
                  <div className="advantage-item">
                    <TrendingUp size={24} />
                    <h3>Financial Performance</h3>
                    <p>Companies with strong ESG performance show 4.8% higher returns on equity</p>
                  </div>
                  <div className="advantage-item">
                    <Target size={24} />
                    <h3>Operational Efficiency</h3>
                    <p>ESG initiatives drive 15-20% improvement in operational efficiency</p>
                  </div>
                  <div className="advantage-item">
                    <Leaf size={24} />
                    <h3>Innovation Leadership</h3>
                    <p>ESG-focused companies are 2.5x more likely to be innovation leaders</p>
                  </div>
                </div>
              </section>

              <section className="article-cta">
                <h3>Ready to Implement ESG in Your Organization?</h3>
                <p>
                  Don't wait for regulatory deadlines. Start your ESG journey now and build 
                  sustainable competitive advantage while ensuring compliance.
                </p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn-primary">
                    Start ESG Implementation
                    <ArrowRight size={18} />
                  </Link>
                  <Link to="/blog" className="btn-secondary">
                    More ESG Articles
                    <Shield size={18} />
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ESGImplementationGuide;
