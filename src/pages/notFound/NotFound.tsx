import styles from './NotFound.module.css';
import notFoundImg from '../../assets/img/notFound.png';
import { ImgLoader } from '../../components';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { sentenceAnimation, titleAnimation } from '../../animations';
import { AnimatedChars } from '../../components/ui/animatedChars/AnimatedChars';

const NotFound = () => {
  const description =
    "I don't know where that page went, but I know the main question of life, the universe, and everything... It's...";
  const secondMessage = 'Give me a second...';
  const thirdMessage = 'Few more seconds, please...';
  const lastMessage = "It's: 42";
  return (
    <div className={styles.not_found}>
      <motion.h1 variants={titleAnimation} className={classNames(styles.title, 'page_title')}>
        Oops 404 error
      </motion.h1>
      <ImgLoader className={styles.img} alt="404" src={notFoundImg} />
      <motion.div variants={sentenceAnimation} className={styles.text}>
        <h3 aria-label={description} className={classNames(styles.description, styles.text)}>
          {description.split('').map((char) => (
            <AnimatedChars char={char} key={crypto.randomUUID()} />
          ))}
        </h3>
        <p className={styles.await}>
          {secondMessage.split('').map((char) => (
            <AnimatedChars char={char} key={crypto.randomUUID()} />
          ))}
        </p>
        <p className={styles.description_alt}>
          {thirdMessage.split('').map((char) => (
            <AnimatedChars char={char} key={crypto.randomUUID()} />
          ))}
        </p>
        <p className={styles.answer}>
          {lastMessage.split('').map((char) => (
            <AnimatedChars char={char} key={crypto.randomUUID()} />
          ))}
        </p>
      </motion.div>
    </div>
  );
};

export default NotFound;
