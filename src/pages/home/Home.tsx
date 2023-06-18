import { motion } from 'framer-motion';
import styles from './Home.module.css';
import { fade, pageAnimation, titleAnimation } from '../../animations';
import classNames from 'classnames';
import { ImgLoader } from '../../components';
import avatar from '../../assets/img/myPhoto.jpg';
import { AnimatedText } from '../../components/ui/animatedText/AnimatedText';

const Home = () => {
  const message = 'Hi, I`m Maksim, web developer';
  const messageArr = message.split('');
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
        {messageArr.map((char) => (
          <AnimatedText char={char} key={crypto.randomUUID()} />
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default Home;
