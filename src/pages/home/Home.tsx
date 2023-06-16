import { motion } from 'framer-motion';
import styles from './Home.module.css';
import { pageAnimation } from '../../animations';
import classNames from 'classnames';
import { ImgLoader } from '../../components';
import avatar from '../../assets/img/myPhoto.jpg';

const Home = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className={styles.wrapper}
    >
      <div className={styles.img_container}>
        <ImgLoader className={styles.img} src={avatar} alt="My photo" />
      </div>
      <h1 className={classNames(styles.title, 'page_title')}>Hi, I`m Maksim, web developer</h1>
    </motion.div>
  );
};

export default Home;
