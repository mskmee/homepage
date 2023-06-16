import { Experience, Skills, Summary } from '../../components';
import styles from './About.module.css';

export const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>About Me</h1>
      <Skills />
      <Experience />
      <Summary />
    </div>
  );
};
