import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import styles from './ContactData.module.css';
import classNames from 'classnames';

export const ContactData = () => {
  return (
    <div className={styles.contacts_data}>
      <div className={classNames(styles.telegram_wrapper, styles.brand_wrapper)}>
        <a href="https://telegram.im/@mskmee" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className={styles.icon} icon={faTelegram} color="white" />
          Telegram
        </a>
      </div>
      <div className={classNames(styles.discord_wrapper, styles.brand_wrapper)}>
        <a href="https://discord.com/users/983464308992249866" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className={styles.icon} icon={faDiscord} color="white" />
          Discord: Maksim_Maksimenko#6784
        </a>
      </div>
      <div className={classNames(styles.email_wrapper, styles.brand_wrapper)}>
        <a href="mailto: mskmee2@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} color="white" />
          Discord: Maksim_Maksimenko#6784
        </a>
      </div>
    </div>
  );
};
