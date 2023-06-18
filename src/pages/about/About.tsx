import { motion } from 'framer-motion';
import classNames from 'classnames';

import { titleAnimation } from '@/animations';
import { Experience, Skills, Summary } from '@/components';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <motion.h1 variants={titleAnimation} className={classNames(styles.title, 'page_title')}>
        About Me
      </motion.h1>
      <Skills />
      <Experience />
      <Summary />
    </div>
  );
};

export default About;
