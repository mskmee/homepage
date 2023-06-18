import { Outlet } from 'react-router-dom';
import classNames from 'classnames';
import { NavBar } from '..';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <span className={classNames(styles.tag, styles.tag_up)}> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
      <main className="main">
        <Outlet />
        <span className={classNames(styles.tag, styles.tag_bottom)}>
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </main>
    </>
  );
};
