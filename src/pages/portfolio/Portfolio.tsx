import classNames from 'classnames';
import { CardsWrapper } from '../../components';
import styles from './Portfolio.module.css';
import { motion } from 'framer-motion';
import { titleAnimation } from '../../animations';

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
