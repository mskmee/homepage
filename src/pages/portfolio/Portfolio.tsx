import { CardsWrapper } from '../../components';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.title}>Portfolio</h1>
      <CardsWrapper />
    </div>
  );
};

export default Portfolio;
