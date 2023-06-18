import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleInfo, faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';

import { AppRouterPath } from '@/types/AppRouterPath';
import styles from './NavBar.module.css';
import { Logo } from '@/components';

export const NavBar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logo_container}>
          <Link to={AppRouterPath.HOME}>
            <Logo className={styles.logo} />
          </Link>
          <input className={styles.menu__toggle} type="checkbox" id="menu__toggle" />
          <label className={styles.menu__btn} htmlFor="menu__toggle">
            <span></span>
          </label>
        </div>
        <div className={styles.navigation}>
          <ul className={styles.list}>
            <li>
              <Link className={styles.home_link} to={AppRouterPath.HOME}>
                <FontAwesomeIcon className={styles.icon} icon={faHome} color="yellow" />
              </Link>
            </li>
            <li>
              <Link className={styles.home_link} to={AppRouterPath.ABOUT}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleInfo} color="yellow" />
              </Link>
            </li>
            <li>
              <Link className={styles.home_link} to={AppRouterPath.PORTFOLIO}>
                <FontAwesomeIcon className={styles.icon} icon={faEye} color="yellow" />
              </Link>
            </li>
            <li>
              <Link className={styles.home_link} to={AppRouterPath.CONTACT}>
                <FontAwesomeIcon className={styles.icon} icon={faEnvelope} color="yellow" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
