import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowRight, BookOpen, Tag, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "AI-integration i praksis: Fra ChatGPT til virksomhedsautomatisering",
      excerpt: "Lær hvordan du implementerer AI-værktøjer som ChatGPT i din virksomheds daglige arbejde og frigør tid til kreativt arbejde.",
      content: "I denne artikel dykker vi ned i praktiske eksempler på hvordan AI kan integreres i forskellige forretningsprocesser...",
      author: "Jesper Aggerholm",
      date: "2024-01-15",
      readTime: "8 min læsning",
      category: "AI & Automation",
      tags: ["AI", "ChatGPT", "Automatisering", "Produktivitet"],
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "ESG-compliance: Gør din virksomhed klar til L193",
      excerpt: "Med den nye L193-lov bliver ESG ikke længere valgfrit. Her er din guide til at implementere bæredygtige strategier.",
      content: "L193 ændrer spillet for danske virksomheder. I denne artikel viser jeg dig hvordan du kommer i gang...",
      author: "Jesper Aggerholm",
      date: "2024-01-10",
      readTime: "12 min læsning",
      category: "ESG & Sustainability",
      tags: ["ESG", "L193", "Bæredygtighed", "Compliance"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Digital transformation: Fra legacy systemer til cloud-native",
      excerpt: "En praktisk guide til at migrere fra gamle systemer til moderne, skalerbare cloud-løsninger der kan vokse med din virksomhed.",
      content: "Digital transformation handler ikke kun om teknologi - det handler om at ændre måden du tænker forretning på...",
      author: "Jesper Aggerholm",
      date: "2024-01-05",
      readTime: "15 min læsning",
      category: "Digital Transformation",
      tags: ["Cloud", "Migration", "Digitalisering", "Skalerbarhed"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Systemarkitektur: Byg løsninger der kan vokse",
      excerpt: "Lær at designe systemer der balancerer enkelhed med performance og tilpasser sig fremtidens behov uden at skulle bygges om.",
      content: "God systemarkitektur er fundamentet for alle succesfulde digitale løsninger. Her er mine principper...",
      author: "Jesper Aggerholm",
      date: "2023-12-28",
      readTime: "10 min læsning",
      category: "System Architecture",
      tags: ["Arkitektur", "Skalerbarhed", "Performance", "Design"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Projektledelse i det moderne tech-team",
      excerpt: "Agile metoder, team-udvikling og hvordan du bygger stærke teams der kan levere resultater i en hurtigt ændrende verden.",
      content: "Moderne projektledelse handler om at skabe et miljø hvor innovation kan blomstre...",
      author: "Jesper Aggerholm",
      date: "2023-12-20",
      readTime: "7 min læsning",
      category: "Project Management",
      tags: ["Projektledelse", "Agile", "Team-udvikling", "Innovation"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Innovation i praksis: Fra idé til markedsløsning",
      excerpt: "Hvordan du accelererer innovation gennem AI-værktøjer, automatisering og strategisk teknologi-implementering.",
      content: "Innovation er ikke kun om at have gode idéer - det handler om at få dem ud i verden hurtigt...",
      author: "Jesper Aggerholm",
      date: "2023-12-15",
      readTime: "9 min læsning",
      category: "Innovation & Strategy",
      tags: ["Innovation", "Strategi", "Markedsføring", "Teknologi"],
      featured: false,
      image: "/api/placeholder/600/400"
    }
  ];

  const categories = [
    "AI & Automation",
    "ESG & Sustainability", 
    "Digital Transformation",
    "System Architecture",
    "Project Management",
    "Innovation & Strategy"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI & Automation": "primary",
      "ESG & Sustainability": "secondary", 
      "Digital Transformation": "primary",
      "System Architecture": "secondary",
      "Project Management": "primary",
      "Innovation & Strategy": "secondary"
    };
    return colors[category as keyof typeof colors] || "primary";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('da-DK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Zenova Tech | AI, ESG & Digital Transformation Insights</title>
        <meta 
          name="description" 
          content="Læs artikler om AI-integration, ESG-compliance, digital transformation og moderne systemarkitektur fra Jesper Aggerholm." 
        />
        <meta name="keywords" content="blog, AI, ESG, digital transformation, systemarkitektur, projektledelse, Danmark" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tagline">
              <BookOpen size={20} />
              <span>Mine insights</span>
            </div>
            
            <h1>
              Fra <span className="zenova-brand">idé</span> til viden
            </h1>
            
            <p>
              Udforsk mine artikler om AI-integration, ESG-compliance, digital transformation 
              og moderne systemarkitektur. Praktiske insights der hjælper dig med at navigere 
              i den digitale fremtid.
            </p>
          </div>

          <div className="hero-visual">
            <div className="blog-visual">
              <div className="blog-icon">
                <BookOpen size={48} />
              </div>
              <div className="blog-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="featured-post-section">
          <div className="container">
            <div className="featured-post">
              <div className="featured-post-content">
                <div className="post-category">
                  <span className={`category-tag ${getCategoryColor(featuredPost.category)}`}>
                    {featuredPost.category}
                  </span>
                  <span className="featured-badge">Featured</span>
                </div>
                
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                
                <div className="post-meta">
                  <div className="meta-item">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{formatDate(featuredPost.date)}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <div className="post-tags">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link to={`/blog/${featuredPost.id}`} className="btn-primary">
                  Læs artikel
                  <ArrowRight size={18} />
                </Link>
              </div>
              
              <div className="featured-post-image">
                <div className="image-placeholder">
                  <BookOpen size={48} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-filter">
            <h3>Filtrer efter kategori</h3>
            <div className="categories-list">
              {categories.map((category, index) => (
                <span key={index} className={`category-filter ${getCategoryColor(category)}`}>
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="container">
          <div className="section-header">
            <h2>Alle artikler</h2>
            <p>
              Udforsk alle mine artikler om teknologi, innovation og moderne 
              forretningsudvikling.
            </p>
          </div>

          <div className="blog-posts-grid">
            {regularPosts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="post-header">
                  <span className={`category-tag ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <div className="post-meta">
                    <span className="meta-item">
                      <Calendar size={14} />
                      {formatDate(post.date)}
                    </span>
                    <span className="meta-item">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>

                <div className="post-tags">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="tag">
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to={`/blog/${post.id}`} className="read-more">
                  Læs mere
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="cta">
        <h2>Få mine seneste artikler</h2>
        <p>
          Modtag mine seneste insights om AI, ESG og digital transformation 
          direkte i din indbakke.
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Din email adresse"
            className="newsletter-input"
          />
          <button className="btn-primary">
            Tilmeld dig
          </button>
        </div>
        <p className="newsletter-disclaimer">
          Ingen spam. Afmeld dig når som helst.
        </p>
      </section>
    </>
  );
};

export default Blog;