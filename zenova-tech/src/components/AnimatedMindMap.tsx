import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MindMapNode {
  id: string;
  text: string;
  category: 'core' | 'tech' | 'business' | 'methodology';
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

const AnimatedMindMap: React.FC = () => {
  const [nodes, setNodes] = useState<MindMapNode[]>([]);
  const [highlightedNodes, setHighlightedNodes] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Generate scattered expertise areas using mathematical distribution
    const generateScatteredNodes = () => {
      const expertiseAreas = [
        'Digital Transformation', 'AI Integration', 'Cloud Architecture', 'Web Development',
        'System Integration', 'ESG Compliance', 'Project Management', 'Strategic Planning',
        'Team Development', 'Agile Methods', 'Lean Processes', 'Design Thinking',
        'Continuous Improvement', 'Data Analytics', 'Process Optimization', 'Change Management',
        'Digital Strategy', 'Technology Consulting', 'Innovation Management', 'Quality Assurance'
      ];

      const categories = ['core', 'tech', 'business', 'methodology'];
      const colors = [
        'rgba(255, 255, 255, 0.08)',
        'rgba(16, 185, 129, 0.06)',
        'rgba(245, 158, 11, 0.06)',
        'rgba(0, 212, 255, 0.06)'
      ];

      const nodes: MindMapNode[] = [];

      expertiseAreas.forEach((text, index) => {
        // Mathematical scatter distribution
        const angle = (index * 137.5) % 360; // Golden angle for natural distribution
        const radius = 20 + (index % 3) * 15; // Varying distances from center
        const x = 50 + radius * Math.cos(angle * Math.PI / 180);
        const y = 50 + radius * Math.sin(angle * Math.PI / 180);
        
        // Ensure nodes stay within bounds
        const clampedX = Math.max(5, Math.min(95, x));
        const clampedY = Math.max(5, Math.min(95, y));
        
        const category = categories[index % categories.length];
        const size = 0.4 + (Math.random() * 0.4); // Random size variation
        
        nodes.push({
          id: text.toLowerCase().replace(/\s+/g, '-'),
          text: text,
          category: category as any,
          x: clampedX,
          y: clampedY,
          size: size,
          color: colors[index % colors.length],
          delay: index * 0.1
        });
      });

      return nodes;
    };

    const expertiseNodes = generateScatteredNodes();
    setNodes(expertiseNodes);

    // Random highlighting effect
    const highlightInterval = setInterval(() => {
      const randomNodes = new Set<string>();
      const nodeCount = Math.floor(Math.random() * 3) + 1; // 1-3 nodes
      
      for (let i = 0; i < nodeCount; i++) {
        const randomNode = expertiseNodes[Math.floor(Math.random() * expertiseNodes.length)];
        randomNodes.add(randomNode.id);
      }
      
      setHighlightedNodes(randomNodes);
      
      // Clear highlights after 2 seconds
      setTimeout(() => setHighlightedNodes(new Set()), 2000);
    }, 4000);

    return () => clearInterval(highlightInterval);
  }, []);


  return (
    <div className="mindmap-container">
      {/* Connection lines */}
      <svg className="mindmap-connections" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((node) => {
          if (node.category === 'core') return null;
          
          const centerNode = nodes.find(n => n.category === 'core');
          if (!centerNode) return null;
          
          return (
            <motion.line
              key={`connection-${node.id}`}
              x1={centerNode.x}
              y1={centerNode.y}
              x2={node.x}
              y2={node.y}
              stroke="rgba(168, 85, 247, 0.3)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: node.delay + 0.5 }}
            />
          );
        })}
      </svg>

      {/* Subtle background nodes */}
      <AnimatePresence>
        {nodes.map((node) => {
          const isHighlighted = highlightedNodes.has(node.id);
          return (
            <motion.div
              key={node.id}
              className={`mindmap-node-subtle ${node.category}`}
              style={{
                position: 'absolute',
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
                fontSize: `${node.size}rem`,
                color: isHighlighted ? node.color.replace('0.08', '0.2') : node.color,
                pointerEvents: 'none',
              }}
              initial={{ 
                opacity: 0, 
                scale: 0.5
              }}
              animate={{ 
                opacity: isHighlighted ? 0.3 : 0.1, 
                scale: isHighlighted ? 1.1 : 1
              }}
              transition={{ 
                duration: 1.5, 
                delay: node.delay,
                ease: "easeOut"
              }}
            >
              <div className="node-content-subtle">
                <span className="node-text-subtle">{node.text}</span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-particle"
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '4px',
            height: '4px',
            background: 'var(--nova-light)',
            borderRadius: '50%',
            opacity: 0.6
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedMindMap;
