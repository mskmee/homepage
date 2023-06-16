import { motion } from 'framer-motion';
import styles from './Home.module.css';
import { pageAnimation } from '../../animations';
import classNames from 'classnames';

const Home = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className={styles.wrapper}
    >
      <h1 className={classNames(styles.title, 'page_title')}>Hi, I`m Maksim, web developer</h1>
    </motion.div>
  );
};

export default Home;
