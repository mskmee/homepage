import { Link, Outlet } from 'react-router-dom';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <>
      <nav className={styles.wrapper}>
        <Link to=""></Link>
      </nav>
      <Outlet />
    </>
  );
};
