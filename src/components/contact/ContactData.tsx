import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBr } from '@fortawesome/free-solid-svg-icons';

import styles from './ContactData.module.css';

export const ContactData = () => {
  return (
    <div className={styles.contacts_data}>
      <div className={styles.telegram_wrapper}>
        <FontAwesomeIcon />
      </div>
    </div>
  );
};
