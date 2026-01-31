import { motion } from 'motion/react';

const colors = ['#1e3a5f', '#00a550', '#c8d400', '#f7941d'];

export function AnimatedWelcomeTitle() {
  const text = "Benvenuti in Cinifabrique!";
  
  return (
    <h2 className="mb-6">
      {text.split('').map((char, index) => {
        const colorIndex = index % colors.length;
        
        return (
          <motion.span
            key={index}
            initial={{ color: '#1e3a5f' }}
            animate={{
              color: colors,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.05,
            }}
            style={{
              display: 'inline-block',
              whiteSpace: char === ' ' ? 'pre' : 'normal',
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </h2>
  );
}
