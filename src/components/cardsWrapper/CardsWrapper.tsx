import { portfolioData } from '../../utils/data';
import { CardItem } from '../cardItem/CardItem';
import styles from './CardsWrapper.module.css';

export const CardsWrapper = () => {
  return (
    <div className={styles.wrapper}>
      {portfolioData.map((card) => (
        <CardItem key={crypto.randomUUID()} {...card} />
      ))}
    </div>
  );
};
