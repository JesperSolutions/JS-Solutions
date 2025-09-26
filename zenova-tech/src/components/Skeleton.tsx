import React from 'react';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular' | 'card';
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  width = '100%', 
  height = '1rem', 
  className = '', 
  variant = 'rectangular' 
}) => {
  const baseClasses = 'skeleton';
  const variantClasses = {
    text: 'skeleton-text',
    rectangular: 'skeleton-rectangular',
    circular: 'skeleton-circular',
    card: 'skeleton-card'
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
};

// Pre-built skeleton components for common layouts
export const HeroSkeleton = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <Skeleton width="200px" height="1.5rem" className="mb-4" />
        <Skeleton width="80%" height="3rem" className="mb-6" />
        <Skeleton width="60%" height="1.5rem" className="mb-8" />
        <div className="flex gap-4">
          <Skeleton width="150px" height="3rem" />
          <Skeleton width="150px" height="3rem" />
        </div>
      </div>
      <div className="hero-visual">
        <Skeleton variant="circular" width="200px" height="200px" />
      </div>
    </div>
  </section>
);

export const ServicesSkeleton = () => (
  <section className="services">
    <div className="container">
      <div className="text-center mb-12">
        <Skeleton width="300px" height="2rem" className="mx-auto mb-4" />
        <Skeleton width="500px" height="1.5rem" className="mx-auto" />
      </div>
      <div className="services-grid">
        {[1, 2, 3].map((i) => (
          <div key={i} className="service-card">
            <Skeleton variant="circular" width="60px" height="60px" className="mx-auto mb-4" />
            <Skeleton width="80%" height="1.5rem" className="mx-auto mb-3" />
            <Skeleton width="90%" height="1rem" className="mx-auto mb-2" />
            <Skeleton width="70%" height="1rem" className="mx-auto" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ProjectCardSkeleton = () => (
  <div className="project-card">
    <div className="project-header">
      <Skeleton variant="circular" width="40px" height="40px" />
      <div className="ml-4">
        <Skeleton width="120px" height="1rem" className="mb-2" />
        <Skeleton width="80px" height="0.8rem" />
      </div>
    </div>
    <div className="project-content">
      <Skeleton width="90%" height="1.5rem" className="mb-3" />
      <Skeleton width="100%" height="1rem" className="mb-2" />
      <Skeleton width="85%" height="1rem" className="mb-4" />
      <div className="flex flex-wrap gap-2 mb-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} width="60px" height="1.5rem" />
        ))}
      </div>
    </div>
    <div className="project-footer">
      <Skeleton width="50px" height="1rem" />
      <div className="flex gap-2">
        <Skeleton width="60px" height="1.5rem" />
        <Skeleton width="60px" height="1.5rem" />
      </div>
    </div>
  </div>
);

export const BlogPostSkeleton = () => (
  <div className="blog-post-card">
    <div className="post-header">
      <Skeleton width="100px" height="1.5rem" className="mb-2" />
      <div className="flex gap-4">
        <Skeleton width="80px" height="1rem" />
        <Skeleton width="80px" height="1rem" />
      </div>
    </div>
    <div className="post-content">
      <Skeleton width="90%" height="1.5rem" className="mb-3" />
      <Skeleton width="100%" height="1rem" className="mb-2" />
      <Skeleton width="85%" height="1rem" />
    </div>
    <Skeleton width="80px" height="1.5rem" className="mt-4" />
  </div>
);

export default Skeleton;
