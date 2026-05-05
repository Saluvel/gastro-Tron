import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'fellow' | 'staff' | 'sub' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  variant = 'cyan', 
  size = 'md', 
  glow = true,
  className,
  ...props 
}) => {
  const variants = {
    cyan: 'bg-tron-cyan text-black hover:bg-white shadow-[0_0_15px_rgba(0,242,255,0.4)]',
    fellow: 'bg-tron-fellow text-white hover:opacity-90 shadow-[0_0_15px_rgba(77,166,255,0.4)]',
    staff: 'bg-tron-staff text-white hover:opacity-90 shadow-[0_0_15px_rgba(255,149,0,0.4)]',
    sub: 'bg-tron-sub text-white hover:opacity-90 shadow-[0_0_15px_rgba(255,68,68,0.4)]',
    outline: 'bg-transparent border-2 border-tron-cyan text-tron-cyan hover:bg-tron-cyan/10 shadow-[0_0_10px_rgba(0,242,255,0.2)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs uppercase tracking-widest font-bold',
    md: 'px-6 py-3 text-sm uppercase tracking-widest font-bold',
    lg: 'px-10 py-4 text-base uppercase tracking-[0.2em] font-black',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-sans',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
