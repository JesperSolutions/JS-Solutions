import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowRight, BookOpen, Tag, User, Code, Zap, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const CursorIDEGuide = () => {
  const cursorRules = [
    {
      id: 1,
      title: "Context is King: Always Provide Full Context",
      description: "Cursor works best when it understands your entire codebase, not just the current file. Always include relevant imports, dependencies, and surrounding code context.",
      example: "Instead of asking 'fix this function', provide the function, its imports, related types, and how it's used in your app.",
      impact: "Reduces back-and-forth iterations by 70%"
    },
    {
      id: 2,
      title: "Be Specific About Your Intent",
      description: "Vague requests lead to generic solutions. Specify exactly what you want to achieve, including edge cases and constraints.",
      example: "Instead of 'make this responsive', say 'make this card stack vertically on mobile, maintain 16px padding, and ensure text remains readable'.",
      impact: "First-try success rate increases to 85%"
    },
    {
      id: 3,
      title: "Use TypeScript Types as Documentation",
      description: "Define clear interfaces and types. Cursor uses these as blueprints for generating consistent, type-safe code.",
      example: "Define User interface with id, email, role, and createdAt fields before asking Cursor to create user management functions.",
      impact: "Eliminates type errors and improves code quality"
    },
    {
      id: 4,
      title: "Break Down Complex Tasks",
      description: "Large features should be decomposed into smaller, testable components. Cursor excels at building individual pieces that fit together.",
      example: "Instead of 'build a dashboard', ask for: 1) data fetching hook, 2) chart component, 3) layout wrapper, 4) state management.",
      impact: "Faster iteration and better error handling"
    },
    {
      id: 5,
      title: "Leverage Existing Patterns",
      description: "Show Cursor examples of your preferred patterns, naming conventions, and architectural decisions. It will replicate these consistently.",
      example: "Show a few examples of your API service functions, then ask Cursor to create new ones following the same pattern.",
      impact: "Maintains code consistency across your project"
    },
    {
      id: 6,
      title: "Test-Driven Development with Cursor",
      description: "Write tests first, then ask Cursor to implement the functionality. This ensures your code meets requirements from the start.",
      example: "Write a test for a validation function, then ask Cursor to implement it to pass the test.",
      impact: "Higher code quality and fewer bugs"
    },
    {
      id: 7,
      title: "Use Comments as Specifications",
      description: "Detailed comments act as specifications for Cursor. Describe the 'why' behind your code, not just the 'what'.",
      example: "// This function handles user authentication with JWT tokens, validates against our user service, and returns user profile data.",
      impact: "Cursor generates more accurate implementations"
    },
    {
      id: 8,
      title: "Iterate and Refine",
      description: "Don't expect perfect code on the first try. Use Cursor's suggestions as starting points, then refine based on your specific needs.",
      example: "Ask Cursor to create a basic component, then iterate: 'make it more accessible', 'add error handling', 'optimize for performance'.",
      impact: "Continuous improvement and learning"
    },
    {
      id: 9,
      title: "Keep Your Codebase Clean",
      description: "Regular refactoring helps Cursor understand your code better. Remove unused code, update dependencies, and maintain clear file structure.",
      example: "Before asking Cursor to add features, clean up existing code: remove console.logs, fix linting errors, update outdated patterns.",
      impact: "Better suggestions and faster processing"
    },
    {
      id: 10,
      title: "Learn Cursor's Shortcuts and Features",
      description: "Master Cursor's keyboard shortcuts, multi-cursor editing, and AI-powered refactoring tools. These dramatically increase your productivity.",
      example: "Use Cmd+K for AI chat, Cmd+L for line editing, Cmd+I for inline suggestions, and Tab to accept suggestions.",
      impact: "3x faster development workflow"
    }
  ];

  const advancedTips = [
    {
      title: "Custom Instructions",
      description: "Set up custom instructions in Cursor settings to define your coding style, preferred libraries, and architectural patterns.",
      icon: Target
    },
    {
      title: "Codebase Indexing",
      description: "Let Cursor index your entire codebase for better context understanding. This enables more accurate suggestions across files.",
      icon: Code
    },
    {
      title: "AI-Powered Refactoring",
      description: "Use Cursor's refactoring tools to safely rename variables, extract functions, and reorganize code structure.",
      icon: Zap
    },
    {
      title: "Debugging Assistant",
      description: "Share error messages and stack traces with Cursor for intelligent debugging suggestions and solutions.",
      icon: Lightbulb
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mastering Cursor IDE: Top 10 Rules for Modern Developers | Zenova Tech</title>
        <meta 
          name="description" 
          content="Learn the essential rules for maximizing productivity with Cursor IDE. From context management to AI-powered development workflows." 
        />
        <meta name="keywords" content="Cursor IDE, AI coding, development productivity, TypeScript, React, modern development" />
        <meta name="author" content="Jesper Aggerholm" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Mastering Cursor IDE: Top 10 Rules for Modern Developers" />
        <meta property="og:description" content="Learn the essential rules for maximizing productivity with Cursor IDE. From context management to AI-powered development workflows." />
        <meta property="og:url" content="https://zenova-tech.web.app/blog/cursor-ide-guide" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mastering Cursor IDE: Top 10 Rules for Modern Developers" />
        <meta name="twitter:description" content="Learn the essential rules for maximizing productivity with Cursor IDE. From context management to AI-powered development workflows." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Mastering Cursor IDE: Top 10 Rules for Modern Developers",
            "description": "Learn the essential rules for maximizing productivity with Cursor IDE. From context management to AI-powered development workflows.",
            "author": {
              "@type": "Person",
              "name": "Jesper Aggerholm",
              "url": "https://zenova-tech.web.app/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Zenova Tech",
              "url": "https://zenova-tech.web.app"
            },
            "datePublished": "2024-01-20",
            "dateModified": "2024-01-20",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://zenova-tech.web.app/blog/cursor-ide-guide"
            }
          })}
        </script>
      </Helmet>

      <article className="blog-post">
        {/* Article Header */}
        <header className="article-header">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/blog">Blog</Link>
              <span>/</span>
              <span>Development</span>
            </nav>
            
            <div className="article-meta">
              <div className="meta-item">
                <User size={16} />
                <span>Jesper Aggerholm</span>
              </div>
              <div className="meta-item">
                <Calendar size={16} />
                <span>20. januar 2024</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>12 min læsning</span>
              </div>
            </div>

            <h1>Mastering Cursor IDE: Top 10 Rules for Modern Developers</h1>
            
            <p className="article-excerpt">
              After 5 years of professional development and extensive use of AI-powered coding tools, 
              I've distilled the essential rules for maximizing productivity with Cursor IDE. These aren't 
              just tips—they're proven strategies that have transformed how I approach modern development.
            </p>

            <div className="article-tags">
              <span className="tag">
                <Tag size={12} />
                Cursor IDE
              </span>
              <span className="tag">
                <Tag size={12} />
                AI Development
              </span>
              <span className="tag">
                <Tag size={12} />
                Productivity
              </span>
              <span className="tag">
                <Tag size={12} />
                TypeScript
              </span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="article-content">
          <div className="container">
            <div className="content-wrapper">
              
              {/* Introduction */}
              <section className="content-section">
                <h2>Why These Rules Matter</h2>
                <p>
                  Cursor IDE represents a paradigm shift in how we write code. It's not just another editor—it's 
                  an AI-powered development partner that can understand context, generate code, and help you think 
                  through complex problems. But like any powerful tool, it requires the right approach to unlock 
                  its full potential.
                </p>
                <p>
                  These 10 rules are based on real-world experience building production applications, leading 
                  development teams, and helping companies implement AI-assisted development workflows. They're 
                  not theoretical—they're battle-tested strategies that have consistently delivered results.
                </p>
              </section>

              {/* The 10 Rules */}
              <section className="content-section">
                <h2>The 10 Essential Rules</h2>
                <div className="rules-list">
                  {cursorRules.map((rule) => (
                    <div key={rule.id} className="rule-item">
                      <div className="rule-header">
                        <span className="rule-number">{rule.id}</span>
                        <h3>{rule.title}</h3>
                      </div>
                      <p className="rule-description">{rule.description}</p>
                      <div className="rule-example">
                        <strong>Example:</strong> {rule.example}
                      </div>
                      <div className="rule-impact">
                        <strong>Impact:</strong> {rule.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Advanced Tips */}
              <section className="content-section">
                <h2>Advanced Cursor Features</h2>
                <p>
                  Beyond the basic rules, Cursor offers several advanced features that can further enhance 
                  your development workflow:
                </p>
                <div className="tips-grid">
                  {advancedTips.map((tip, index) => (
                    <div key={index} className="tip-card">
                      <div className="tip-icon">
                        <tip.icon size={24} />
                      </div>
                      <h3>{tip.title}</h3>
                      <p>{tip.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation Strategy */}
              <section className="content-section">
                <h2>Implementation Strategy</h2>
                <p>
                  Don't try to implement all these rules at once. Start with the first three—they'll have 
                  the biggest immediate impact on your productivity:
                </p>
                <ol>
                  <li><strong>Week 1:</strong> Focus on providing better context and being more specific in your requests</li>
                  <li><strong>Week 2:</strong> Start using TypeScript types as documentation and breaking down complex tasks</li>
                  <li><strong>Week 3:</strong> Implement test-driven development and leverage existing patterns</li>
                  <li><strong>Week 4:</strong> Master the remaining rules and explore advanced features</li>
                </ol>
              </section>

              {/* Conclusion */}
              <section className="content-section">
                <h2>Conclusion</h2>
                <p>
                  Cursor IDE is more than just a code editor—it's a glimpse into the future of software development. 
                  By following these rules, you'll not only become more productive but also develop better coding 
                  habits that will serve you well regardless of the tools you use.
                </p>
                <p>
                  Remember: the goal isn't to replace your thinking with AI, but to amplify your capabilities. 
                  These rules help you work with Cursor as a true development partner, not just a code generator.
                </p>
              </section>

              {/* CTA */}
              <section className="article-cta">
                <h3>Ready to Transform Your Development Workflow?</h3>
                <p>
                  If you're looking to implement AI-assisted development in your team or organization, 
                  I'd love to help you get started.
                </p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn-primary">
                    Kom i kontakt
                    <ArrowRight size={18} />
                  </Link>
                  <Link to="/blog" className="btn-secondary">
                    Læs flere artikler
                    <BookOpen size={18} />
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

export default CursorIDEGuide;
