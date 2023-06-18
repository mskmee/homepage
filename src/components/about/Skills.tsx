import { AnimatedText } from '../ui/animatedText/AnimatedText';
import styles from './Skills.module.css';

export const Skills = () => {
  const subTitle = 'Skills:';
  return (
    <div className={styles.skills}>
      <h2 aria-label={subTitle} className={styles.sub_title}>
        {subTitle.split('').map((char) => (
          <AnimatedText char={char} key={crypto.randomUUID()} />
        ))}
      </h2>
      <ul className={styles.list}>
        <li className={styles.list_item}>HTML, CSS, SASS</li>
        <li className={styles.list_item}>Git, GitHub</li>
        <li className={styles.list_item}>JavaScript, TypeScript</li>
        <li className={styles.list_item}>React</li>
      </ul>
    </div>
  );
};
