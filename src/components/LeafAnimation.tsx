import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Leaf {
  id: number;
  x: number; // percentage width
  size: number; // pixels
  color: string;
  delay: number;
  duration: number;
  rotation: number;
  sway: number;
}

const LEAF_COLORS = [
  '#2c5932', // Forest green light
  '#5a753c', // Olive green
  '#7b9e54', // Olive green light
  '#e07a5f', // Sunset orange (autumnal safari vibe)
  '#d2bfab'  // Sand beige
];

export const LeafAnimation: React.FC = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    // Generate 15 randomized leaves
    const initialLeaves: Leaf[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // 0 - 100%
      size: Math.random() * 18 + 12, // 12 - 30px
      color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
      delay: Math.random() * 8, // seconds
      duration: Math.random() * 12 + 10, // 10 - 22 seconds
      rotation: Math.random() * 360,
      sway: Math.random() * 100 + 50 // sway offset in pixels
    }));
    setLeaves(initialLeaves);
  }, []);

  return (
    <div className="leaf-container absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          style={{
            position: 'absolute',
            left: `${leaf.x}%`,
            top: '-5%',
            width: leaf.size,
            height: leaf.size,
            fill: leaf.color,
            opacity: 0.45,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [
              `${leaf.x}%`, 
              `${leaf.x + (leaf.sway / 10)}%`, 
              `${leaf.x - (leaf.sway / 10)}%`, 
              `${leaf.x + (leaf.sway / 20)}%`
            ],
            rotate: [leaf.rotation, leaf.rotation + 360],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: 'linear',
          }}
        >
          {/* Detailed organic leaf SVG shape */}
          <svg viewBox="0 0 24 24" width="100%" height="100%">
            <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12C4,14.21 4.9,16.2 6.35,17.65L17.65,6.35M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M12,22A10,10 0 0,0 22,12C22,12 12,22 12,22Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
