import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleInfo, faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';

import { AppRouterPath } from '../../types/AppRouterPath';
import { Logo } from '../ui/logo/Logo';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to={AppRouterPath.HOME}>
          <Logo size="s" />
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li>
              <Link className={styles.home_link} to={AppRouterPath.HOME}>
                <FontAwesomeIcon icon={faHome} color="yellow" />
              </Link>
            </li>
            <li>
              <Link className={styles.home_link} to={AppRouterPath.ABOUT}>
                <FontAwesomeIcon icon={faCircleInfo} color="yellow" />
              </Link>
            </li>
            <li>
              <Link className={styles.home_link} to={AppRouterPath.PORTFOLIO}>
                <FontAwesomeIcon icon={faEye} color="yellow" />
              </Link>
            </li>
            <li>
              <Link className={styles.home_link} to={AppRouterPath.CONTACT}>
                <FontAwesomeIcon icon={faEnvelope} color="yellow" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
