import { motion } from 'framer-motion';

import { letterAnimation } from '@/animations';

interface AnimatedCharsProps {
  char: string;
}
export const AnimatedChars = ({ char }: AnimatedCharsProps) => {
  return (
    <motion.span
      aria-hidden="true"
      style={{ display: 'inline-block', whiteSpace: 'pre' }}
      variants={letterAnimation}
    >
      {char}
    </motion.span>
  );
};
