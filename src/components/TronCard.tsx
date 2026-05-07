import React from 'react';
import { cn } from '../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface TronCardProps extends HTMLMotionProps<'div'> {
  accentColor?: string;
  glow?: boolean;
}

export const TronCard: React.FC<TronCardProps> = ({ 
  children, 
  accentColor = 'rgba(0, 242, 255, 0.3)', 
  glow = true,
  className,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'bg-tron-card border-2 rounded-2xl p-6 transition-all duration-300 relative',
        glow && 'shadow-[0_0_30px_rgba(0,242,255,0.05)]',
        className
      )}
      style={{
        borderColor: accentColor,
      }}
      {...props}
    >
      {/* Sidebar Accent Bar */}
      <div 
        className="absolute top-0 left-0 w-1 h-full shadow-[0_0_10px_currentColor]" 
        style={{ backgroundColor: accentColor, color: accentColor }}
      />
      
      {/* Decorative corner line */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden opacity-20">
         <div className="absolute top-0 right-0 w-[200%] h-[2px] rotate-[-45deg] bg-white blur-[1px]" />
      </div>
      
      {children}
    </motion.div>
  );
};
