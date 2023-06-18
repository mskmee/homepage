export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.5 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: 'easeOut', duration: 0.75 } },
};

export const titleAnimation = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};

export const sentenceAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.02 },
  },
};

export const letterAnimation = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};
