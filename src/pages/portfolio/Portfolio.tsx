import { CardsWrapper } from '../../components';
import styles from './Portfolio.module.css';

export const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.title}>Portfolio</h1>
      <CardsWrapper />
    </div>
  );
};
