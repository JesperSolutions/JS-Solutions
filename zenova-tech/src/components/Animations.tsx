import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { ReactNode } from 'react';

// Animation variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

// Button animations
export const buttonHover = {
  scale: 1.05,
  boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
  transition: { duration: 0.2 }
};

export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

// Card animations
export const cardHover = {
  y: -5,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
  transition: { duration: 0.3 }
};

// Page transition variants
export const pageVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -20 }
};

export const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.4
};

// Reusable animated components
interface AnimatedDivProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export const AnimatedDiv = ({ 
  children, 
  variants = fadeInUp, 
  className = '', 
  delay = 0 
}: AnimatedDivProps) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const AnimatedButton = ({ 
  children, 
  className = '', 
  onClick, 
  type = 'button' 
}: AnimatedButtonProps) => (
  <motion.button
    type={type}
    className={className}
    onClick={onClick}
    whileHover={buttonHover}
    whileTap={buttonTap}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.button>
);

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0 
}: AnimatedCardProps) => (
  <motion.div
    className={className}
    variants={scaleIn}
    initial="initial"
    animate="animate"
    whileHover={cardHover}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// Staggered list animation
interface StaggeredListProps {
  children: ReactNode;
  className?: string;
}

export const StaggeredList = ({ children, className = '' }: StaggeredListProps) => (
  <motion.div
    variants={staggerContainer}
    initial="initial"
    animate="animate"
    className={className}
  >
    {children}
  </motion.div>
);

interface StaggeredItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggeredItem = ({ children, className = '' }: StaggeredItemProps) => (
  <motion.div variants={staggerItem} className={className}>
    {children}
  </motion.div>
);
