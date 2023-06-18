import { motion } from 'framer-motion';

interface AnimatedTextProps {
  char: string;
}
export const AnimatedText = ({ char }: AnimatedTextProps) => {
  return (
    <motion.span
      aria-hidden="true"
      style={{ display: 'inline-block', whiteSpace: 'pre' }}
      whileHover={{ color: '#ffd336', scale: 1.3 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {char}
    </motion.span>
  );
};
