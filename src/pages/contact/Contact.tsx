import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';

import styles from './Contact.module.css';
import { ContactData, ContactQuestion } from '@/components';
import { titleAnimation } from '@/animations';

const Contact = () => {
  const [isHuman, setIsHuman] = useState(false);
  const onSubmitHandler = () => {
    setIsHuman(true);
  };

  return (
    <div className={styles.contact}>
      <motion.h1 variants={titleAnimation} className={classNames(styles.title, 'page_title')}>
        Fill free to contact me
      </motion.h1>
      <AnimatePresence>
        {isHuman ? <ContactData /> : <ContactQuestion onSubmitHandler={onSubmitHandler} />}
      </AnimatePresence>
    </div>
  );
};
export default Contact;
