import { motion } from 'framer-motion';
import { Logo } from '../../components/ui/logo/Logo';
import styles from './Home.module.css';
import { pageAnimation } from '../../animations';

const Home = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className={styles.wrapper}
    >
      <h1 className={styles.title}>Hi, I`m Maksim, web developer</h1>
      <Logo className={styles.main_logo} />
    </motion.div>
  );
};

export default Home;
