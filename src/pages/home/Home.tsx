import classNames from 'classnames';
import styles from './Home.module.css';
import { Logo } from '../../components/ui/logo/Logo';

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <span className={classNames(styles.tag, styles.tag_up)}> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
      <h1 className={styles.title}>Hi, I`m Maksim, web developer</h1>
      <Logo className={styles.main_logo} />
      <span className={classNames(styles.tag, styles.tag_bottom)}>
        &nbsp;&nbsp;&nbsp;&lt;/body&gt;
        <br />
        &lt;/html&gt;
      </span>
    </div>
  );
};
