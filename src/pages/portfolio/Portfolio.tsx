import { motion } from 'framer-motion';
import classNames from 'classnames';

import { CardsWrapper } from '@/components';
import { titleAnimation } from '@/animations';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <motion.h1 variants={titleAnimation} className={classNames(styles.title, 'page_title')}>
        Portfolio
      </motion.h1>
      <CardsWrapper />
    </div>
  );
};

export default Portfolio;
