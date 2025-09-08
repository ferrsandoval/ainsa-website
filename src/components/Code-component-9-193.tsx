import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
}

export function AnimatedButton({ 
  children, 
  className = "", 
  onClick,
  variant = "default",
  size = "default",
  ...props 
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      <Button
        className={`transition-all duration-300 hover:shadow-lg ${className}`}
        onClick={onClick}
        variant={variant}
        size={size}
        {...props}
      >
        <motion.span
          initial={false}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          {children}
        </motion.span>
      </Button>
    </motion.div>
  );
}

// Specialized CTA button with more pronounced animations
export function AnimatedCTAButton({ 
  children, 
  className = "", 
  onClick,
  ...props 
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        y: -2
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      <Button
        className={`transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 ${className}`}
        onClick={onClick}
        {...props}
      >
        <motion.span
          initial={false}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          {children}
        </motion.span>
      </Button>
    </motion.div>
  );
}