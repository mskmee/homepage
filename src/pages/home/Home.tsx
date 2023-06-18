import { motion } from 'framer-motion';
import classNames from 'classnames';

import { AnimatedText, ImgLoader } from '@/components';
import { fade, pageAnimation, titleAnimation } from '@/animations';
import styles from './Home.module.css';
import avatar from '@/assets/img/myPhoto.jpg';

const Home = () => {
  const message = 'Hi, I`m Maksim, web developer';
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className={styles.wrapper}
    >
      <motion.div variants={fade} className={styles.img_container}>
        <ImgLoader className={styles.img} src={avatar} alt="My photo" />
      </motion.div>
      <motion.h1
        aria-label={message}
        variants={titleAnimation}
        className={classNames(styles.title, 'page_title')}
      >
        {message.split('').map((char) => (
          <AnimatedText char={char} key={crypto.randomUUID()} />
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default Home;
