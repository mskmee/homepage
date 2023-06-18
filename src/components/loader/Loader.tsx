import { createPortal } from 'react-dom';
import styles from './Loader.module.css';

export const Loader = () => {
  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <svg className={styles.circular} viewBox="25 25 50 50">
          <circle
            className={styles.loader_path}
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#ffd336"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>,
    document.body
  );
};
