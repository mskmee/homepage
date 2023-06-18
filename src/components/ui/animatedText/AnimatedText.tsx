import { motion } from 'framer-motion';

interface IAnimatedTextProps {
  char: string;
}
export const AnimatedText = ({ char }: IAnimatedTextProps) => {
  return (
    <motion.span
      style={{ display: 'inline-block', whiteSpace: 'pre' }}
      whileHover={{ color: '#ffd336', scale: 1.3 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {char}
    </motion.span>
  );
};
