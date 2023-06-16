import classNames from 'classnames';
import { CardsWrapper } from '../../components';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h1 className={classNames(styles.title, 'page_title')}>Portfolio</h1>
      <CardsWrapper />
    </div>
  );
};

export default Portfolio;
