import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { pageAnimation } from '@/animations';
import { ImgLoader } from '@/components';
import styles from './ContactData.module.css';
import catImg from '@/assets/img/cat.jpg';

export const ContactData = () => {
  return (
    <motion.div id="contact-data" variants={pageAnimation} className={styles.contacts_data}>
      <ImgLoader className={styles.img} src={catImg} alt="Nice cat image" />
      <div className={styles.contacts_url}>
        <a
          className={styles.link}
          href="https://telegram.im/@mskmee"
          target="_blank"
          rel="noreferrer"
        >
          <div className={classNames(styles.telegram_wrapper, styles.brand_wrapper)}>
            <FontAwesomeIcon className={styles.icon} icon={faTelegram} color="white" />
            Telegram
          </div>
        </a>
        <a
          className={styles.link}
          href="https://discord.com/users/983464308992249866"
          target="_blank"
          rel="noreferrer"
        >
          <div className={classNames(styles.discord_wrapper, styles.brand_wrapper)}>
            <FontAwesomeIcon className={styles.icon} icon={faDiscord} color="white" />
            Discord
          </div>
        </a>
        <a
          className={styles.link}
          href="mailto: mskmee2@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className={classNames(styles.email_wrapper, styles.brand_wrapper)}>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} color="white" />
            Email
          </div>
        </a>
      </div>
    </motion.div>
  );
};
