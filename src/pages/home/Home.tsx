import classNames from 'classnames';
import styles from './Home.module.css';
import { Logo } from '../../components/ui/logo/Logo';

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Hi, I`m Maksim, web developer</h1>
      <Logo className={styles.main_logo} />
    </div>
  );
};
