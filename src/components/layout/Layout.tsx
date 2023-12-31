import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import styles from './Layout.module.css';
import { NavBar } from '@/components';
import { pageAnimation } from '@/animations';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <span className={classNames(styles.tag, styles.tag_up)}> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
      <motion.main
        className="main"
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Outlet />
        <span className={classNames(styles.tag, styles.tag_bottom)}>
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </motion.main>
    </>
  );
};
