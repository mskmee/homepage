import { ImgLoader } from '..';
import { PortfolioData } from '../../types/PortfolioData';
import styles from './CardItem.module.css';

export const CardItem = ({ deployUrl, img, repoUrl, title }: PortfolioData) => {
  return (
    <div className={styles.card}>
      <div className={styles.img_wrapper}>
        <ImgLoader className={styles.img} src={img} alt={title} />
      </div>
      <h3 className={styles.sub_title}>{title}</h3>
      <div className={styles.links}>
        <a className={styles.btn} target="_blank" rel="noreferrer" href={repoUrl}>
          Code
        </a>
        <a className={styles.btn} target="_blank" rel="noreferrer" href={deployUrl}>
          Deploy
        </a>
      </div>
    </div>
  );
};
