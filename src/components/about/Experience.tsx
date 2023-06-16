import { AnimatedText } from '../ui/animatedText/AnimatedText';
import styles from './Experience.module.css';

export const Experience = () => {
  const subTitle = 'Experience:';
  return (
    <div className={styles.experience}>
      <h2 className={styles.sub_title}>
        {subTitle.split('').map((char) => (
          <AnimatedText char={char} key={crypto.randomUUID()} />
        ))}
      </h2>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <p className={styles.date}>April 2020 - February 2022</p>
          Self-Employed, Remote (Retail). Managed a team, set metrics and goals to achieve business
          success. Studied and implemented front-end technologies to enhance the appearance and
          functionality of websites. Utilized Python for web scraping and competitor analysis.
        </li>
        <li className={styles.list_item}>
          <p className={styles.date}>June 2022 - June 2023</p>
          Enrolled in the Front-end Developer course at RS School from e-pam. Learned fundamental
          tools for front-end development. Gained experience working in a team.
        </li>
      </ul>
    </div>
  );
};
