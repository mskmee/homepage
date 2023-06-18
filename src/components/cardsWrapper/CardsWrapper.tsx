import { CardItem } from '@/components';
import { portfolioData } from '@/utils/data';
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
