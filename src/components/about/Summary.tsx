import { AnimatedText } from '@/components';
import styles from './Summary.module.css';

export const Summary = () => {
  const subTitle = 'Summary:';
  return (
    <div className={styles.summary}>
      <h2 aria-label={subTitle} className={styles.sub_title}>
        {subTitle.split('').map((char) => (
          <AnimatedText char={char} key={crypto.randomUUID()} />
        ))}
      </h2>
      <div className={styles.description}>
        Results-oriented and highly motivated Front-end Developer with a passion for creating
        captivating and user-friendly web experiences. With a strong foundation in HTML, CSS, and
        JavaScript, I possess the technical skills necessary to develop dynamic and interactive web
        pages. <br />
        Equipped with hands-on experience in utilizing modern front-end frameworks like React, I am
        adept at building scalable and responsive applications. My ability to collaborate
        effectively in team environments, coupled with my strong problem-solving skills, allows me
        to deliver high-quality projects within deadlines. Committed to staying updated with the
        latest industry trends and best practices, I strive to continuously enhance my skill set.
      </div>
      <div className={styles.final}>
        Long story short: I am a guy who loves programming and technologies, enjoys 🏃, and adores
        😺!
      </div>
    </div>
  );
};
