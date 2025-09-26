import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PetalProps {
  delay: number;
  duration: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
}

const Petal: React.FC<PetalProps> = ({ delay, duration, startX, startY, endX, endY, size }) => {
  const petalColors = [
    'radial-gradient(circle, #ffb6c1 0%, #ff69b4 50%, #ff1493 100%)',
    'radial-gradient(circle, #ffc0cb 0%, #ff69b4 40%, #ff1493 100%)',
    'radial-gradient(circle, #ffb6c1 0%, #ff69b4 60%, #dc143c 100%)',
    'radial-gradient(circle, #ffc0cb 0%, #ff69b4 50%, #ff1493 100%)'
  ];
  
  const randomColor = petalColors[Math.floor(Math.random() * petalColors.length)];
  
  return (
    <motion.div
      className="petal"
      style={{
        position: 'absolute',
        left: `${startX}%`,
        top: `${startY}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: randomColor,
        borderRadius: '50% 0 50% 0',
        transform: 'rotate(45deg)',
        opacity: 0.9,
        filter: 'blur(0.3px)',
        boxShadow: '0 0 8px rgba(255, 105, 180, 0.4), inset 0 0 4px rgba(255, 255, 255, 0.3)',
      }}
      initial={{ 
        opacity: 0,
        scale: 0,
        rotate: 45,
        x: 0,
        y: 0
      }}
      animate={{ 
        opacity: [0, 0.9, 0.9, 0.7, 0],
        scale: [0, 1, 1, 0.8, 0.3],
        rotate: [45, 45, 90, 180, 270],
        x: `${endX - startX}vw`,
        y: `${endY - startY}vh`
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for more natural movement
        repeat: Infinity,
        repeatDelay: Math.random() * 4 + 3
      }}
    />
  );
};

const CherryBlossomTree: React.FC = () => {
  const [petals, setPetals] = useState<PetalProps[]>([]);

  useEffect(() => {
    // Generate realistic petals with wind patterns
    const generatePetals = () => {
      const newPetals: PetalProps[] = [];
      
      // Falling petals from tree branches (more realistic)
      for (let i = 0; i < 25; i++) {
        const branchHeight = 20 + Math.random() * 40; // Tree height range
        const windDrift = Math.random() * 15 + 5; // Wind pushes petals right
        
        newPetals.push({
          delay: Math.random() * 1.5,
          duration: Math.random() * 4 + 6, // Slower, more graceful fall
          startX: Math.random() * 25 + 8, // Tree area
          startY: branchHeight,
          endX: Math.random() * 20 + 30 + windDrift, // Wind effect
          endY: Math.random() * 15 + 75, // Ground level
          size: Math.random() * 6 + 3 // Smaller, more realistic
        });
      }
      
      // Gentle floating petals (breeze effect)
      for (let i = 0; i < 12; i++) {
        newPetals.push({
          delay: Math.random() * 3 + 1,
          duration: Math.random() * 8 + 10, // Very slow, dreamy
          startX: Math.random() * 35 + 5,
          startY: Math.random() * 50 + 10,
          endX: Math.random() * 25 + 40, // Gentle rightward drift
          endY: Math.random() * 40 + 20,
          size: Math.random() * 4 + 2 // Smaller floating petals
        });
      }
      
      // Occasional petal bursts (wind gusts)
      if (Math.random() > 0.7) {
        for (let i = 0; i < 8; i++) {
          newPetals.push({
            delay: Math.random() * 0.5,
            duration: Math.random() * 2 + 3, // Quick burst
            startX: Math.random() * 20 + 10,
            startY: Math.random() * 30 + 25,
            endX: Math.random() * 30 + 35, // Strong wind effect
            endY: Math.random() * 25 + 60,
            size: Math.random() * 5 + 2
          });
        }
      }
      
      setPetals(newPetals);
    };

    generatePetals();
    
    // Regenerate petals every 12 seconds for more dynamic effect
    const interval = setInterval(generatePetals, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cherry-blossom-container">
      {/* Enhanced Tree trunk */}
      <motion.div
        className="tree-trunk"
        style={{
          position: 'absolute',
          left: '15%',
          bottom: '20%',
          width: '12px',
          height: '65%',
          background: 'linear-gradient(to top, #654321 0%, #8B4513 30%, #A0522D 70%, #CD853F 100%)',
          borderRadius: '6px',
          zIndex: 1,
          boxShadow: 'inset -3px 0 6px rgba(0, 0, 0, 0.4), 3px 0 6px rgba(0, 0, 0, 0.3)'
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
      
      {/* Enhanced Tree branches with curves */}
      {[
        { angle: -25, length: 25, delay: 0.8 },
        { angle: -15, length: 30, delay: 1.0 },
        { angle: -5, length: 35, delay: 1.2 },
        { angle: 5, length: 30, delay: 1.4 },
        { angle: 15, length: 25, delay: 1.6 },
        { angle: 25, length: 20, delay: 1.8 }
      ].map((branch, i) => (
        <motion.div
          key={i}
          className="tree-branch"
          style={{
            position: 'absolute',
            left: '15%',
            bottom: `${25 + i * 6}%`,
            width: `${branch.length}px`,
            height: '4px',
            background: 'linear-gradient(to right, #654321 0%, #8B4513 50%, #A0522D 100%)',
            borderRadius: '2px',
            transform: `rotate(${branch.angle}deg)`,
            transformOrigin: 'left center',
            zIndex: 1,
            boxShadow: 'inset 0 -2px 4px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: branch.delay, ease: "easeOut" }}
        />
      ))}
      
      {/* Enhanced Cherry blossom clusters */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="blossom-cluster"
          style={{
            position: 'absolute',
            left: `${12 + Math.random() * 18}%`,
            bottom: `${30 + Math.random() * 40}%`,
            width: `${8 + Math.random() * 6}px`,
            height: `${8 + Math.random() * 6}px`,
            background: `radial-gradient(circle, ${
              ['#ffb6c1', '#ffc0cb', '#ffb6c1'][Math.floor(Math.random() * 3)]
            } 0%, #ff69b4 50%, #ff1493 100%)`,
            borderRadius: '50%',
            opacity: 0.9,
            zIndex: 2,
            boxShadow: '0 0 12px rgba(255, 105, 180, 0.6), 0 0 24px rgba(255, 20, 147, 0.3)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1],
            opacity: [0, 0.9, 0.9]
          }}
          transition={{ 
            duration: 1.5, 
            delay: 2 + i * 0.05,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Falling petals */}
      {petals.map((petal, index) => (
        <Petal key={index} {...petal} />
      ))}
      
      {/* Gentle wind effect */}
      <motion.div
        className="wind-effect"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 182, 193, 0.1) 50%, transparent 100%)',
          opacity: 0
        }}
        animate={{
          opacity: [0, 0.3, 0],
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default CherryBlossomTree;
