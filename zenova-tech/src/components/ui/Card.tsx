import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md'
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <motion.div
      className={`zen-card ${paddingClasses[padding]} ${className}`}
      whileHover={hover ? { 
        y: -2, 
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2, ease: "easeOut" }
      } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
