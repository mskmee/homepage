import styles from './NotFound.module.css';
import notFoundImg from '../../assets/img/notFound.png';

export const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <h1 className={styles.title}>Oops 404 error</h1>
      <img className={styles.img} alt="404" src={notFoundImg} />
      <p className={styles.description}>
        I don&apos;t know where that page went, but I know the main question of life, the universe,
        and everything... It&apos;s... Give me a second...
      </p>
      <span className={styles.description_alt}>Few more seconds, please...</span>
      <span className={styles.answer}>It&apos;s: 42</span>
    </div>
  );
};
